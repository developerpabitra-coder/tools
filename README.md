# PDF Tools — Cloudflare Pages Template

This repository is a minimal starter for a **40-tool PDF & Image tools website** (client-side).
It is Vite + React + Tailwind and ready to deploy to **Cloudflare Pages**.

## What is included
- Vite React app
- Tailwind CSS config
- 40 tool pages (stubs) under `src/pages` via a template
- Router + Home page listing all tools

## How to run locally
1. Install dependencies:
```bash
npm install
```
2. Start dev server:
```bash
npm run dev
```
3. Build:
```bash
npm run build
```

## Deploy to Cloudflare Pages
1. Push this project to GitHub.
2. Go to Cloudflare Dashboard → Pages → Create a project → Connect GitHub repo.
3. Set the build command to `npm run build` and the output directory to `dist`.
4. Deploy — Cloudflare Pages will build and serve your site on a global CDN.

## Notes & Next Steps
- Each tool page is a stub (placeholder) — implement client-side logic using libraries:
  - `tesseract.js` for OCR
  - `pdf-lib`, `jsPDF`, `pdfjs-dist` for PDF operations
  - `browser-image-compression` for images
- Keep processing client-side to avoid server costs initially.
- Add an AdSense slot in the tool pages before going live (comply with AdSense policy).
- Add Privacy Policy & Terms pages.

## License
MIT
