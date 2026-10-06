# Design — Ashley Xia: building & exploring

The bilingual portfolio is a typographic personal landing with a combined work index. Ashley is a
university student exploring through projects. The résumé is a secondary document.

## Structure

- Home: a bold “Build first. Polish later.” opening with Ashley’s supplied main photo,
  name and one link to work;
  one combined project/experiment section with a compact internship entry;
  portrait, six fun facts and a two-photo personal strip with brief travel and volunteer teaching stories;
  two visible writing links; optional other writing, travel and reading; contact.
- Homepage copy is brief. Longer project reasoning stays in existing case studies.
- Project: annotated case study with problem, idea, build, role, decisions, lessons.
- Article: quiet long document with a readable measure.
- Navigation: Work, Notes, Contact and language switch; no header branding.
  Work and Lab share one section. Old lab/about/collaboration fragments remain.
- Footer: copyright, résumé and return link.
- Root entrance: Chinese portfolio. Existing bilingual and legacy routes remain.

## Visual system

All shared values live in `tokens.css`, scoped to `.full-site`.
Warm off-white paper, charcoal ink, vermilion accent on small signals.
The opening reverses the same paper and ink colors for a charcoal typographic panel.
Display: locally hosted Space Grotesk 600. Body: locally hosted IBM Plex Sans 400.
Chinese text uses PingFang SC / Microsoft YaHei. Headings stay upright.
The existing named 4-point spacing scale remains. Layouts use asymmetric grids
and plain rules. Product screenshots retain their aspect ratio. No fake browser
chrome, invented product UI, gradients, or generated impact claims.

## Voice and evidence

First person, short, natural, concrete. Student builder, explorer, problem solver.
The personal facts describe Russia, role models, cleanliness and writing with a
pen, a build-first habit and the joy of giving. GIS stays in the résumé education details, not the homepage introduction. Name contributions precisely; distinguish team work from
solo work. Experiments disclose their stage. AI visibility and browser-tool
explorations are user-supplied, without published results or launch claims.
The 3D-printing contribution is grounded in existing résumé facts.

## Motion and accessibility

All text and evidence visible before hydration. No hero sequence or scroll reveal.
Native disclosure for experiment notes, books and the optional personal notebook.
Travel album keeps explicit touch and keyboard controls and loading/error states.
Language switching preserves safe fragments. Old personal-note fragments open
the notebook. Focus rings are immediate. Reduced motion removes spatial motion.

## Responsive behaviour

At 320–767px, sections become one column. Navigation remains visible and wraps
by row, not within a link. Clickable prose and article titles can wrap naturally;
short action labels remain on one line. Images use minmax(0, 1fr) grid tracks.
Root overflow-x uses clip. Test 320, 375, 414, 768 and desktop widths in both languages.

## Exports

`tokens.css` is the implementation export, with complete palette, font, spacing,
type and motion tokens. Existing Tailwind and résumé entry styles stay intact.
