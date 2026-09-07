# Ashley Xia · Personal website

The website is built from `app/` with vinext, React, and TypeScript. Original images and other public files live in `public/`. GitHub Pages receives a generated artifact from Actions; generated HTML, hashed assets, and PDF exports do not belong in the repository root.

## Local development

Use Node.js 22.13 or newer and Python 3.12 with ReportLab 4.4.9 and fonttools 4.59.0 for PDF generation.

```sh
npm ci
python3 -m pip install reportlab==4.4.9 fonttools==4.59.0
npm run dev
```

If your Python environment is elsewhere, set `RESUME_PYTHON` to its executable when building. The PDF generator downloads a pinned, verified font on first use.

```sh
npm run build:site
npm test
npm run lint
```

`build:site` generates both resume PDFs, builds the application, renders the static pages to `out/`, and checks local links, fragment targets, assets, and PDFs. `npm test` also checks rendered route behavior. Serve the `out/` directory when reviewing the production artifact; the development server renders the same `app/` source directly.

## Pages and content

| Address | Purpose |
| --- | --- |
| `/` | Redirect to the Chinese resume |
| `/zh/` | Chinese resume |
| `/en/` | English resume |
| `/zh/full/`, `/en/full/` | Chinese and English work and personal notebook |
| `/{locale}/full/projects/.../` | Localized project case studies |
| `/{locale}/full/articles/.../` | Localized essays |
| `/profile/` | Redirect to the Chinese resume |
| `/more/` | Legacy entrance to the integrated Chinese notebook |
| `/projects/.../` | Legacy project entrance, preserving resume origin |
| `/articles/.../` | Redirect to the corresponding Chinese essay |
| `/updates/`, `/updates/.../` | Earlier Chinese updates, retained for existing links |

The Chinese and English resumes use the same bilingual source data. Their downloadable PDFs are generated from that data in the build. Both resumes link to their own language's full website and case studies.

The full websites share their page and detail components. `app/full-content.ts` contains the edited bilingual project, essay, travel, reading, and notebook content. Personal records inform these selected summaries; raw private Notion pages are not part of the public site. Keep stable project and article slugs across translations. Basic education, experience, and contact facts continue to come from `app/resume-data.ts`.

The full home pages expose stable `projects`, `collaboration`, `notebook`, `travel`, `reading`, `writing`, and `contact` anchors. The old `/more/` entrance redirects to the notebook, with reading, travel, and writing fragments mapped to the corresponding section. Legacy project entrances choose a language from `?from=zh|en` and preserve that query in a client-side replacement navigation. These aliases deliberately use a visible fallback link instead of a competing fixed meta refresh.

On project details, `from` always identifies the resume the visitor came from, independently of the current content language. Switching a project from English to Chinese preserves `from=en`, so the return link still leads to the English resume. Without a recognized source, the return link leads to the current language's full-site projects section. Articles return to the current language's writing section.

The export manifest in `scripts/static-routes.mjs` includes all published pages and redirects for retired static URLs. Add a new route there when publishing it. Internal cross-page links use full document navigation so GitHub Pages does not need a React server endpoint.

The exporter installs `scripts/static-navigation.mjs` before hydration. It leaves fragment scrolling and history to the browser, preventing the framework's `popstate` handler from requesting unavailable RSC endpoints. A history entry with a different path or query reloads its document. Fragment changes still notify the full site's language and bookmark controls.

`npm test` covers both resume entrances, the bilingual full sites and all localized details, canonical and language links, legacy destination rules, missing details, and exported root language attributes. The static verifier also checks links, fragment targets, assets, and both PDFs. Review motion, touch gestures, keyboard controls, and reduced-motion behavior in a browser against `out/` before publishing visual changes.

## Production release

The existing production destination is [x132204x-web.github.io](https://x132204x-web.github.io/). `.github/workflows/deploy-pages.yml` builds the current `main` commit on push or manual dispatch, uploads `out/` using `actions/upload-pages-artifact`, and deploys it to the `github-pages` environment using `actions/deploy-pages`.

Push only intended source changes. Do not copy `out/` into the source tree, commit build output, or switch back to the historical `source` branch for deployment. GitHub Pages must keep its deployment source set to **GitHub Actions**.

The optional `.openai/hosting.json`, `db/`, and `worker/` starter integrations remain available for local vinext development; the public Pages site is a static export.
