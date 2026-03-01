# Portfolio — Marius Kaufmann

Personal portfolio and CV site. Pure HTML + CSS + minimal TypeScript, served with nginx in Docker.

## Prerequisites

- [Node.js](https://nodejs.org/) (for TypeScript compilation)
- [Docker](https://www.docker.com/)
- Google Chrome (for CV PDF generation)

## Build the CV

The CVs live in `cv.html` (English) and `de/cv.html` (German) and get printed to PDF via headless Chrome:

```sh
google-chrome --headless --disable-gpu --no-sandbox \
  --print-to-pdf="marius_kaufmann_en.pdf" --no-pdf-header-footer cv.html

google-chrome --headless --disable-gpu --no-sandbox \
  --print-to-pdf="marius_kaufmann_de.pdf" --no-pdf-header-footer de/cv.html
```

Edit the HTML files directly — all content is inline. After changes, re-run the commands above to regenerate the PDFs.

## Build & Deploy

### Compile TypeScript

```sh
npx tsc
```

This compiles `main.ts` → `dist/main.js`.

### Run locally with Docker

```sh
docker build -t portfolio .
docker run -p 8080:80 portfolio
```

The site is served at [http://localhost:8080](http://localhost:8080).

### What gets deployed

The Dockerfile is a multi-stage build:

1. **Build stage** (`node:22-alpine`): installs TypeScript and compiles `main.ts`
2. **Serve stage** (`nginx:alpine`): copies all static files and serves them with gzip, caching, and security headers (configured in `nginx.conf`)

## Project structure

```
index.html      — English site (single page, all content inline)
de/index.html   — German site
cv.html                — English CV source (HTML, optimized for print)
de/cv.html             — German CV source
marius_kaufmann_en.pdf — Generated English CV PDF
marius_kaufmann_de.pdf — Generated German CV PDF
style.css       — Terminal-aesthetic stylesheet
main.ts         — Mobile nav toggle (~15 lines)
nginx.conf      — gzip, cache headers, security headers
Dockerfile      — Multi-stage build
```
