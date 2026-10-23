# Abhay Tiwari — AI Engineer Portfolio

A portfolio for **Abhay Tiwari, AI Engineer**, built around a simple thesis: the model is one dependency; the runtime around it is the product.

The site is a 60/40 dossier of intelligence-layer and systems-layer work, not a project gallery.

---

## What is in the site

- **4 flagship systems:** Agent Foundry, Indra Energy Platform, Cortex Enterprise, and VectraCache.
- **4 compact projects:** PageFlow, ComplianceAI, Logistics ML Pipeline, and DiaTrace.AI (Diabetes Temporal Trace Engine).
- **2 Altiora Labs products:** CapForge and BeliefState.
- **10 featured upstream PRs** across 5 repositories, with GitHub-accurate `Merged`, `Open`, `Closed`, and `Superseded` states.
- **7 sections:** hero, thesis, systems, labs, upstream ledger, capability matrix, and contact.

All visible content is sourced from [`src/data/portfolio.js`](./src/data/portfolio.js). Edit that file first when changing copy, links, projects, or ledger entries.

---

## Stack

- React 18 + Vite 6
- Plain CSS with design tokens, custom reveal motion, and branded scrollbars
- Static build served by Nginx in production
- No backend, analytics, or contact form; contact uses `mailto:` and clipboard copy

---

## Commands

```sh
# Install
npm ci

# Local development
npm run dev -- --host 127.0.0.1 --port 5199

# Production build
npm run build

# Preview the production build
npm run preview

# Lint
npm run lint
```

### Docker

```sh
docker build -t abhay-portfolio .
docker run --rm -p 8080:80 abhay-portfolio
```

The image is a two-stage build: `node:20-alpine` compiles the Vite bundle, then `nginx:1.27-alpine` serves `dist/`.

---

## Key files

```text
src/
  data/portfolio.js                 # single source of truth for all content
  components/hero/                  # hero, trace panel, proof strip
  components/about/                 # thesis and principles
  components/systems/               # flagship systems, compact cases, diagrams
  components/labs/                  # CapForge and BeliefState
  components/opensource/            # 10-row upstream ledger
  components/capabilities/          # 60/40 capability matrix
  components/contact/               # email, resume, GitHub
  styles/                           # tokens, base, layout, components
public/
  Abhay_AI_Resume.pdf               # resume download
  og-image.png                      # 1200×630 social card
  favicon.svg
```

`design-preview/` and `UI_DESIGN_SPEC.md` are retained as design references. The implemented site is the source of truth.

---

## Content and link notes

- Agent Foundry's README displays an MIT badge, but GitHub currently detects **no LICENSE file**. The site therefore calls it an **Active Public Build** and labels the hero chip **LOCAL-FIRST**, not MIT.
- CapForge and BeliefState are shown as Apache-2.0 per their repositories. BeliefState is also published on PyPI as `beliefstate`.
- The CapForge PyPI package is unrelated to Altiora Labs CapForge, so the site never links it.
- The DocsGPT `#2505` result is a **local** 100× ingestion benchmark, not a merged production claim. The ledger marks the PR `Superseded`.
- Indra's Hugging Face deployment was reachable during QA, but the site links only to the repository to avoid depending on a space that can sleep or redeploy.
- LinkedIn returns HTTP `999` to automated checks; the profile URL is valid for human visitors.
- A canonical production URL is still required before setting absolute `og:url` and canonical metadata.

---

## Visual QA

The current build was checked at **1440px**, **1024px**, **390px**, **360px**, and **320px**, plus a **320×568** short viewport:

- no horizontal overflow at any tested width
- 10 ledger rows rendered with correct status classes
- all 23 reveal elements became visible on scroll
- no browser console errors
- 29 external links use `target="_blank"` with `rel="noopener noreferrer"`
- `/Abhay_AI_Resume.pdf` returned `200` with `application/pdf`
- mobile menu opens and closes without overflow
- mobile menu keeps the resume action visible at 320×568
- 320px layouts use tighter trace, case-stat, diagram, ledger, and footer spacing

---

## License

Site code and personal content © Abhay Tiwari. Project links and third-party marks belong to their respective owners.
