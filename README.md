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
| `/zh/full/` | Existing detailed Chinese website |
| `/profile/` | Redirect to the Chinese resume |
| `/more/` | Travel, reading, and writing |
| `/projects/.../` | Project case studies |
| `/articles/.../` | Articles |
| `/updates/.../` | Earlier updates |

The Chinese and English resumes use the same bilingual source data. Their downloadable PDFs are generated from that data in the build. The English detailed website is a later phase and has no placeholder route.

The export manifest in `scripts/static-routes.mjs` includes all published pages and redirects for retired static URLs. Add a new route there when publishing it. Internal cross-page links use full document navigation so GitHub Pages does not need a React server endpoint.

## Production release

The existing production destination is [x132204x-web.github.io](https://x132204x-web.github.io/). `.github/workflows/deploy-pages.yml` builds the current `main` commit on push or manual dispatch, uploads `out/` using `actions/upload-pages-artifact`, and deploys it to the `github-pages` environment using `actions/deploy-pages`.

Push only intended source changes. Do not copy `out/` into the source tree, commit build output, or switch back to the historical `source` branch for deployment. GitHub Pages must keep its deployment source set to **GitHub Actions**.

The optional `.openai/hosting.json`, `db/`, and `worker/` starter integrations remain available for local vinext development; the public Pages site is a static export.
