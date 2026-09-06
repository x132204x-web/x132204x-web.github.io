"""Render one-page, selectable Chinese and English resumes from shared site data.

Dependencies: reportlab==4.4.9, fonttools==4.59.0.
Noto Sans SC is downloaded from its pinned upstream release, verified, subset,
and embedded. The resulting PDFs do not require fonts on the reader's device.
Font license: https://github.com/notofonts/noto-cjk/blob/Sans2.004/LICENSE
Set RESUME_FONT_CACHE to reuse an existing download across builds.
"""

import argparse
import copy
import hashlib
import json
import os
from pathlib import Path
import re
import string
import tempfile
import urllib.request
from xml.sax.saxutils import escape

from fontTools import subset
from fontTools.ttLib import TTFont as SourceFont
from fontTools.varLib.instancer import instantiateVariableFont
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph


FONT_URL = (
    "https://raw.githubusercontent.com/notofonts/noto-cjk/"
    "Sans2.004/Sans/Variable/TTF/Subset/NotoSansSC-VF.ttf"
)
FONT_SHA256 = "d68bafcb48a2707749396aa12bbbd833cb70401f3a9a689fd2902c7e0d295964"
FONT_FILENAME = "NotoSansSC-VF-Sans2.004.ttf"
PAGE_WIDTH, PAGE_HEIGHT = A4
MARGIN = 42
CONTENT_WIDTH = PAGE_WIDTH - 2 * MARGIN
INK = HexColor("#19383e")
BODY = HexColor("#344e53")
MUTED = HexColor("#62777b")
ACCENT = HexColor("#426f76")
RULE = HexColor("#c9dddd")
HEADER = HexColor("#edf6f5")

LABELS = {
    "zh": {
        "education": "教育背景",
        "projects": "精选项目",
        "experience": "实践经历",
        "skills": "技能与工具",
        "wechat": "微信同号",
    },
    "en": {
        "education": "EDUCATION",
        "projects": "SELECTED PROJECTS",
        "experience": "EXPERIENCE",
        "skills": "SKILLS & TOOLS",
        "wechat": "WeChat: same as phone",
    },
}


def clean(value):
    # Ordinary hyphens remain reliable in PDF extraction and application forms.
    return re.sub(r"[\u2010-\u2015\u2212]", "-", str(value))


def markup(value):
    return escape(clean(value))


def source_font():
    directory = Path(os.environ.get(
        "RESUME_FONT_CACHE", str(Path(tempfile.gettempdir()) / "personal-site-resume-fonts")
    ))
    directory.mkdir(parents=True, exist_ok=True)
    destination = directory / FONT_FILENAME
    if destination.exists() and hashlib.sha256(destination.read_bytes()).hexdigest() == FONT_SHA256:
        return destination
    request = urllib.request.Request(FONT_URL, headers={"User-Agent": "personal-site-resume-build"})
    with urllib.request.urlopen(request, timeout=60) as response:
        payload = response.read()
    if hashlib.sha256(payload).hexdigest() != FONT_SHA256:
        raise ValueError("Noto Sans SC download failed its SHA-256 integrity check.")
    with tempfile.NamedTemporaryFile(dir=directory, suffix=".ttf", delete=False) as temporary:
        temporary.write(payload)
        temporary_path = Path(temporary.name)
    temporary_path.replace(destination)
    return destination


def register_fonts(data, directory):
    all_text = clean(json.dumps(data, ensure_ascii=False)) + json.dumps(LABELS, ensure_ascii=False)
    all_text += string.printable + " · ："
    font = SourceFont(source_font())
    missing = set(ord(char) for char in all_text if not char.isspace()) - set(font.getBestCmap())
    if missing:
        raise ValueError(f"Resume font lacks these characters: {''.join(chr(code) for code in sorted(missing))}")
    options = subset.Options()
    options.layout_features = []
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(text=all_text)
    subsetter.subset(font)
    for name, weight in [("Resume", 400), ("ResumeStrong", 600)]:
        instance = instantiateVariableFont(copy.deepcopy(font), {"wght": weight}, inplace=True)
        instance.recalcTimestamp = False
        destination = directory / f"{name}.ttf"
        instance.save(destination)
        pdfmetrics.registerFont(TTFont(name, str(destination)))
    pdfmetrics.registerFontFamily("Resume", normal="Resume", bold="ResumeStrong")


class ResumePage:
    def __init__(self, destination, data, locale):
        self.data = data
        self.locale = locale
        self.labels = LABELS[locale]
        self.canvas = Canvas(str(destination), pagesize=A4, pageCompression=1, invariant=1)
        self.canvas.setTitle(f"{data['name']} | {'个人简历' if locale == 'zh' else 'Resume'}")
        self.canvas.setAuthor(data["name"])
        self.canvas.setSubject(data["title"])
        self.canvas.setCreator("Personal site / shared resume data")
        self.y = PAGE_HEIGHT - MARGIN

    def paragraph(self, text, size=9.3, leading=None, color=BODY, bold=False, gap=0, width=None, x=None):
        leading = leading or (13.7 if self.locale == "zh" else 12.6)
        style = ParagraphStyle(
            "resume", fontName="ResumeStrong" if bold else "Resume",
            fontSize=size, leading=leading, textColor=color, alignment=TA_LEFT,
            wordWrap="CJK" if self.locale == "zh" else None,
            allowWidows=0, allowOrphans=0,
        )
        paragraph = Paragraph(text, style)
        _, height = paragraph.wrap(width or CONTENT_WIDTH, PAGE_HEIGHT)
        self.y -= height
        if self.y < 37:
            raise ValueError(f"{self.locale} resume exceeds a single A4 page; shorten the content or adjust spacing.")
        paragraph.drawOn(self.canvas, MARGIN if x is None else x, self.y)
        self.y -= gap

    def section(self, title):
        self.y -= 8
        self.paragraph(markup(title), size=10.2, leading=14, color=ACCENT, bold=True, gap=3)
        self.canvas.setStrokeColor(RULE)
        self.canvas.setLineWidth(0.65)
        self.canvas.line(MARGIN, self.y + 2, PAGE_WIDTH - MARGIN, self.y + 2)
        self.y -= 5

    def dated_heading(self, title, period):
        date_size = 8.2
        date_width = pdfmetrics.stringWidth(clean(period), "Resume", date_size)
        self.canvas.setFillColor(MUTED)
        self.canvas.setFont("Resume", date_size)
        self.canvas.drawRightString(PAGE_WIDTH - MARGIN, self.y - 11, clean(period))
        self.paragraph(markup(title), size=10, leading=14, color=INK, bold=True,
                       width=CONTENT_WIDTH - date_width - 16, gap=2)

    def render(self):
        data, contact = self.data, self.data["contact"]
        self.canvas.setFillColor(HEADER)
        self.canvas.rect(0, PAGE_HEIGHT - 138, PAGE_WIDTH, 138, fill=1, stroke=0)
        self.canvas.setFillColor(ACCENT)
        self.canvas.rect(MARGIN, PAGE_HEIGHT - 28, 25, 2, fill=1, stroke=0)
        self.paragraph(markup(data["name"]), size=26, leading=31, color=INK, bold=True, gap=4)
        self.paragraph(f"{markup(data['alternateName'])}  /  {markup(data['title'])}",
                       size=8.7, leading=13, color=ACCENT, gap=9)
        first_contact = (
            f'<link href="mailto:{escape(contact["email"])}">{markup(contact["email"])}</link>'
            f'  ·  {markup(contact["phone"])}  ·  {markup(data["location"])}'
        )
        self.paragraph(first_contact, size=8.1, leading=12, color=BODY, gap=2)
        self.paragraph(
            f'<link href="{escape(contact["github"])}">GitHub: {markup(contact["githubLabel"])}</link>'
            f'  ·  {markup(self.labels["wechat"])}', size=8.1, leading=12, color=MUTED,
        )
        self.y = PAGE_HEIGHT - 153
        self.paragraph(markup(data["summary"]), size=9.2, leading=13.7)

        self.section(self.labels["education"])
        for education in data["education"]:
            self.dated_heading(education["school"], education["period"])
            self.paragraph(markup(education["degree"]), gap=1)
            self.paragraph(markup("  ·  ".join(education["notes"])), size=8.5, leading=12, color=MUTED)

        self.section(self.labels["projects"])
        for index, project in enumerate(data["projects"]):
            if index:
                self.y -= 9
            heading = f'<b>{markup(project["name"])}</b>  ·  {markup(project["category"])}'
            self.paragraph(heading, size=10, leading=14, color=INK, gap=3)
            self.paragraph(markup(project["role"]), size=8.1, leading=11.5, color=ACCENT, gap=3)
            for highlight in project["highlights"]:
                self.paragraph(f"- {markup(highlight)}", gap=2)
            if project.get("publicUrl"):
                url = project["publicUrl"]
                self.paragraph(
                    f'<link href="{escape(url)}">{markup(url.removeprefix("https://"))}</link>'
                    f'  ·  {markup(project["status"])}', size=8.3, leading=11.5, color=ACCENT,
                )

        self.section(self.labels["experience"])
        for index, experience in enumerate(data["experiences"]):
            if index:
                self.y -= 7
            self.dated_heading(experience["organization"], experience["period"])
            self.paragraph(markup(experience["role"]), size=8.5, leading=12, color=ACCENT, gap=2)
            for highlight in experience["highlights"]:
                self.paragraph(markup(highlight), gap=1)

        self.section(self.labels["skills"])
        for skill in data["skills"]:
            separator = "：" if self.locale == "zh" else ": "
            self.paragraph(
                f'<b>{markup(skill["category"])}</b>{separator}{markup(" · ".join(skill["items"]))}',
                size=8.4, leading=12, gap=2,
            )
        self.canvas.showPage()
        self.canvas.save()
        return PAGE_HEIGHT - self.y


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--data", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    args = parser.parse_args()
    data = json.loads(args.data.read_text(encoding="utf-8"))
    args.output_dir.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="personal-site-resume-render-") as temporary:
        directory = Path(temporary)
        register_fonts(data, directory)
        generated = []
        for locale in ("zh", "en"):
            name = f"resume-xia-shiqi-{locale}.pdf"
            destination = directory / name
            height = ResumePage(destination, data[locale], locale).render()
            generated.append((destination, args.output_dir / name))
            print(f"Rendered {name}: one A4 page, content ends {PAGE_HEIGHT - height:.1f} pt above bottom")
        # Publish both files only after both versions render without overflow.
        for source, destination in generated:
            destination.write_bytes(source.read_bytes())


if __name__ == "__main__":
    main()
