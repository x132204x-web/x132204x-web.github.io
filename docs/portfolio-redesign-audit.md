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
