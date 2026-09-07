# Design — Ashley Xia's work & notes

The complete bilingual website is an editorial personal notebook, designed for
potential collaborators and employers. Read this before changing its pages.
The concise résumé has a separate visual system.

## Structure

- Home: an open notebook with a photographic opening, project dossiers,
  collaboration notes, a travel album, reading annotations and an article index.
- Project: an annotated case study; real materials accompany decisions.
- Article: a long document with a quiet reading measure.
- Navigation: edge-aligned name and language links, then chapter bookmarks.
- Footer: a personal letter close, contact and résumé links.

## Visual system

All full-site colours, typography and shared motion live in `tokens.css`, scoped
to `.full-site`. Warm paper, forest ink, muted green; no generic icon-card grid,
fake application chrome, invented screenshots or generated impact metrics.
Chinese headings use Songti-style serif, English headings Georgia. Body text
uses locally available sans serif. Headings are upright. Lines stay readable and
photos retain their own aspect ratio or a deliberate documented crop.

## Motion

One short opening sequence spreads two personal photos and a project image.
An album exchanges photos in ~300ms. Reading annotations open in 260ms.
Chapter markers follow the active section in 180ms. Motion uses CSS transforms
and opacity, with native disclosure for annotations and React for album state.
No scroll interception or animation queues. Text and navigation are visible
before hydration. Reduced motion presents the final state immediately.

## Responsive behaviour

At 320–767px the notebook reads as one column. Notes follow their associated
content. All actions work on touch and keyboard, not just hover or gestures.
Both languages share layouts, stable content IDs and image assets.

## Voice and evidence

First person, short and specific. Describe what Ashley did and observed, with
space for uncertainty. Public content is curated from existing project facts
and selected personal notes; private records, private URLs and unsupported
claims are not shipped. The approved short summary is the source of truth.

## Exports

`tokens.css` is the implementation export. Existing Tailwind and résumé tokens
are not replaced. Additional design values extend this scoped token set.
