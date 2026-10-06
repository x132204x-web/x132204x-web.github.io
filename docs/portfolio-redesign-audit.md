# Portfolio redesign audit — 6 October 2026

## Findings and changes

- Entrance and hierarchy: the root opened a résumé; the full site gave travel
  photography equal weight to product evidence. The root now opens the portfolio.
  The hero identifies Ashley as a university student, names what she likes doing,
  and shows an actual FinalAce screen. Projects come before background and notes.
- Positioning: GIS led the résumé summary and social image. Introductions now
  describe a student builder exploring AI, product, data and creative technology.
  GIS remains a factual education detail and a brief source of systems thinking.
- Project storytelling: homepage summaries did not expose enough reasoning.
  Each now presents problem, idea, build, personal contribution and learning.
  Case studies retain real screens, product decisions and current limitations.
  Cloud Catalog explicitly credits a team product and Ashley’s specific role.
- Experiments: AI visibility, browser utilities and campus 3D printing now have a
  dedicated lab, with explicit stages and expandable notes. The first two have
  no fabricated launch claims, results or images. The printing contribution is
  grounded in the existing résumé.
- Copy: bilingual hero, navigation, overview, project summaries, about, contact,
  footer, résumé introduction and metadata use short, specific language. Existing
  personal essays retain their factual first-person accounts. No expert title,
  invented outcomes, testimonials or proficiency claims were added.
- Type and spacing: a shared sans-serif system replaces serif notebook headings;
  real locally hosted Space Grotesk and IBM Plex Sans files include licenses.
  Rules, asymmetric project layouts and consistent named spacing create hierarchy.
- Visual consistency: case studies, essays and older updates share the portfolio
  navigation, palette and footer. A new social preview removes GIS-led branding.
- Motion: removed the homepage photo unfolding sequence and chapter-marker bar.
  Content is visible before hydration. Native disclosures keep experiments and
  optional travel/reading compact. The manual album keeps its existing controls.
- Mobile and access: one-column layouts, persistent navigation, visible focus,
  touch controls and reduced-motion support. Legacy travel/reading anchors open
  the optional notebook; language switching preserves safe fragment destinations.
- Visual fixes: inherited global footer styles reduced contrast, and a legacy
  fragment marker displaced the collaboration layout. Both were overridden in
  the scoped portfolio stylesheet.

## Validation

- Production build, static export and static link/asset/PDF verification pass:
  37 HTML pages and both one-page bilingual résumés.
- All 10 rendered route/content tests pass, including root destination, bilingual
  details, canonical links, legacy navigation and honest project positioning.
- ESLint: no errors; 15 existing/static-export img advisory warnings.
- Chromium: both homepages at 320, 375, 414, 768 and 1440px; project details and a
  representative essay at those widths; résumé and older update layouts checked.
  No horizontal overflow, broken visible images or browser page errors.
- Lab disclosure, keyboard reading disclosure, photo navigation, direct legacy
  travel fragment, language fragment preservation and reduced motion checked.
- The optional repository-wide TypeScript check still reports missing Cloudflare
  starter types in unchanged db/index.ts and worker/index.ts. The configured
  Pages production build and all route tests pass; those integrations are outside
  this portfolio redesign.

## Evidence boundaries

There are two documented case studies. The lab broadens the picture without
pretending exploratory work has the same evidence as a launched product. Adding
real screenshots and specific lessons to those experiments remains a useful
future content update when Ashley has materials to publish.

## Follow-up: shorter and more personal

The opening now contains Ashley’s four supplied fun facts and a real Russian
travel portrait. The Work and Lab navigation destinations are merged. Homepage
project stories are reduced to a short introduction with the existing case-study
links; the five-part story stays on detail pages. Experiment notes are one sentence.
The long about and collaboration prose no longer appears on the homepage; old
fragments remain valid. Two writing links are visible, with other writing and
travel/reading behind native disclosures. Contact and footer copy are minimal.

The opening now includes a fifth fact: “build first, polish later.” Header branding
was removed at Ashley’s request; navigation and language switching remain.

## Follow-up: a distinct landing

The first screen now leads with Ashley’s own “Build first. Polish later.” habit,
a short student introduction, and two direct case-study links. Oversized, staggered
type on charcoal uses the existing ink and paper tokens. The portrait and five
facts sit after the combined work section. Header branding remains removed.
Shared contact data now uses Ashleyx17@proton.me, including both generated PDFs.

Validation: all 10 route/content tests, 37-page export and link/PDF checks pass.
Both languages checked at 320, 375, 414, 768 and 1440px: no overflow, broken
visible images or browser errors. Native disclosures and old fragments still work.
ESLint reports no errors and 14 existing static-image advisories.

The work section also includes a compact internship entry for 智健启能科技有限公司,
with the same entry in both résumé pages and generated PDFs. Company, technical
intern role, AI health focus and design/build contributions were confirmed directly
by Ashley. “Summer 2026” reflects the confirmed July–August Notion context without
claiming exact employment start or end dates. No English company name, product
screenshots, technical stack, metrics or outcomes were invented.

## Follow-up: personal photography

Ashley’s supplied street portrait is the main homepage image, alongside the
working-habit headline. A JPEG web copy keeps its full composition and visible
watermark. Existing Xinjiang and summer-camp photos add a personal strip after
the facts, and the St. Petersburg portrait is larger on desktop. The main image
has explicit dimensions and high fetch priority; lower photos load lazily.

Photo pass: both languages checked at 320–1440px; main-image composition and
face remain visible, personal photos load correctly, and page widths stay within
the viewport. A smaller responsive main-image asset reduces mobile transfer size.
The static export/link checks and all 10 route/content tests pass. ESLint has no
errors; 17 advisory img warnings reflect the static-export image approach.

## Follow-up: volunteer teaching

The camp photo now includes a short teaching story drawn from Ashley’s Notion
notes: geography, cooking and science lessons, camp records, daily team
reflections, and the final report. A personal lesson about patience and expressing
thanks comes from her camp reflection. The sixth fun fact uses Ashley’s supplied
sentence: “I get more joy from giving than receiving.” Both languages are updated.

The shared résumé now names both course mentor/volunteer teacher and documentation
lead roles. Its dates are aligned with the explicit April–July 2025 range in
Notion’s résumé page, replacing the earlier April–August range.

Sources: Notion “职业资料｜简历” (31f9ea35-8725-82f6-a595-81900d188599),
“支教夏令营” (3689ea35-8725-80a3-9e20-d45de01e80bb), “工作成果”
(3689ea35-8725-806e-af8a-e70e8c17be95), and “支教总结——我变得更加完整和美好”
(3689ea35-8725-8040-95dd-c4390913c50b). No student counts or impact metrics added.

Validation: all 10 content/route tests pass; static checks cover 37 pages and 616
local links/assets. Both languages pass browser checks at 320–1440px without
overflow or browser errors. Camp-story screenshots reviewed at mobile and desktop
widths. Both regenerated résumé PDFs remain one A4 page, with the teaching role
visible and no clipping. ESLint has no errors and the existing 17 image advisories.

## Follow-up: annotated homepage refinements

Removed the opening student sentence and duplicate project teasers, retaining
one work link beside the headline. Removed the repeated student sentence from
About, renamed the English heading “Fun Facts,” and shortened the Russia caption
to its location. Projects remain in the combined work section.

Xinjiang now has a brief account of solo driving, changing routes and enjoying
instant noodles after hiking. Source: Notion “风物”
(38b9ea35-8725-81e0-a1d8-d33f2e127ed1), dated April 21–28, 2026.
The fictional “柏安” page was excluded as personal-history evidence.

Main-photo composition pass: the broad empty pavement and red advertisement
competed with Ashley’s face. A 4:5 crop removes about 40% from the left, retaining
her cap, face, snack, hand, street context and original attribution. Two JPEG
sizes (1151×1440 and 640×800) keep the image crisp without stretching it.
The original file remains intact. The photo-composition skill was applied to
the website asset; the requested website format takes precedence over its
default DOCX report.

Built-in image edit was tried with this brief: “Conservative vertical 4:5 crop;
trim empty pavement and the red advertisement from the left; preserve exact
identity, expression, clothing, snack, street details, lighting, colors and
original attribution; no beautification or invented content.” Its result changed
some retained details, so it was rejected. The final asset uses a precise sips
crop and resize of the original, as the composition skill’s fallback directs.

Validation: 10 route/content tests pass, with 37 exported pages and 612 checked
local links/assets. Both languages pass browser checks at 320, 375, 414, 768 and
1440px. Opening and Xinjiang screenshots reviewed at 320, 846 and 1440px; the
portrait keeps its 4:5 frame, selects the small source on mobile, and retains the
face and hand. No overflow, broken images or browser errors. Existing disclosures,
language fragments and old Lab links still work. ESLint reports no errors.

## Follow-up: portrait scale and corrected internship dates

Reduced the opening portrait to 288px on desktop, 240px on tablet, and 200px
on mobile, preserving its crop. Ashley confirmed the internship dates as
July–September 2026; shared data updates the homepage, résumé pages and PDFs.
The Xinjiang heading now reads “A solo adventure in Xinjiang,” with a matching
Chinese heading emphasizing independent travel and adventure.

Validation: all 10 route/content tests and static export checks pass. Both
languages reviewed at 320, 846 and 1440px; the portrait renders at the intended
200, 240 and 288px widths. Both one-page PDFs contain the corrected dates.
ESLint reports no errors, with the existing 17 static-image advisories.

## Follow-up: greeting without a slogan

Removed both “Build first.” and “Polish later.” from the opening in both
languages. The existing greeting becomes the main heading, alongside the smaller
portrait and work link. The build-first habit remains among Ashley’s supplied
fun facts below.

Validation: all 10 route/content tests and static export checks pass. Both
languages visually reviewed at mobile, tablet and desktop sizes; the Chinese
greeting breaks between phrases so the name stays together.
