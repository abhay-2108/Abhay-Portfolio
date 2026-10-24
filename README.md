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
- Hand-written CSS with design tokens, a small reset, custom reveal motion, and branded scrollbars
- Responsive AVIF/WebP portrait variants at 450px and 900px
- Static `dist/` output, deployable to any static host
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

- Every displayed metric links to its source and carries a verification date. Project metrics were checked on **23 Oct 2026**; the upstream ledger was re-checked on **24 Oct 2026**.
- Agent Foundry counts come from the repository tree: **10 `AGENT.md` personas**, **42 `SKILL.md` skills**, and **4 MCP server entry points**. The README badge is not used where it disagrees.
- Agent Foundry's README displays an MIT badge, but GitHub currently detects **no LICENSE file**. The site therefore calls it an **Active Public Build** and labels the hero chip **LOCAL-FIRST**, not MIT.
- CapForge and BeliefState are shown as Apache-2.0 per their repositories. BeliefState is also published on PyPI as `beliefstate`.
- The CapForge PyPI package is unrelated to Altiora Labs CapForge, so the site never links it.
- The DocsGPT `#2505` result is a **local** 100× ingestion benchmark from a closed, unmerged PR, not a production claim. The ledger marks the PR `Superseded`.
- PageFlow's **113 tests** figure is from its README badge; the repository has no GitHub Actions runs.
- CapForge's **289/290 tests** figure is from its README; the main CI workflow last completed successfully on **5 Oct 2026**.
- BeliefState is published on PyPI as `beliefstate` at **v1.2.0**.
- Indra's Hugging Face deployment was reachable during QA, but the site links only to the repository to avoid depending on a space that can sleep or redeploy.
- LinkedIn returns HTTP `999` to automated checks; the profile URL is valid for human visitors.
- A canonical production URL is still required before setting absolute `og:url` and canonical metadata.

---

## Visual QA

The current build was checked at **1440px**, **1024px**, **390px**, **360px**, and **320px**, plus a **320×568** short viewport:

- 7 sections, numbered `01`–`07`, with no writing section
- no horizontal overflow at any tested width
- all 23 reveal elements became visible on scroll
- no browser console or page errors
- the portrait selects the 450px AVIF at 1× and exposes 900px variants for high-density displays
- only the bottom `View repository` arrow translates on compact-project hover; the card itself does not animate
- mobile menu opens, traps focus, closes on Escape, and does not overflow
- evidence links, source notes, and verification dates render without clipping at 320px
- 10 ledger rows rendered with correct status classes
- 41 external links use `target="_blank"` with `rel="noopener noreferrer"`
- `/Abhay_AI_Resume.pdf` returned `200` with `application/pdf`

---

## License

Site code and personal content © Abhay Tiwari. Project links and third-party marks belong to their respective owners.
