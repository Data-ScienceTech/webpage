# Data Science Technologies — Runtime Authority for the Agentic Era

A production-ready bilingual (EN/FR) marketing site built with Astro 4, React 18, TypeScript, and Tailwind CSS. Deployed to Netlify with custom domain `datasciencetech.ca`.

## Features

- **5-Page Structure**: Home, Why Runtime Authority, Product (Force Field), Architecture, Security
- **Bilingual**: Full English / French with language switcher and French URL slugs
- **Dark Mode**: Class-based toggle with localStorage persistence
- **SEO**: Meta tags, OpenGraph, Twitter cards, sitemap, robots.txt, canonical URLs
- **Responsive**: Mobile-first Tailwind CSS design
- **Accessible**: ARIA labels, semantic HTML, keyboard navigation
- **Brand Typography**: Space Grotesk (headings) + Inter (body) via Google Fonts
- **Forms**: Netlify Forms (Force Field Request Access — EN/FR)
- **Performance**: Static output, Lighthouse ≥95

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── logo.svg / logo-dark.svg
│   ├── og-image.png
│   ├── robots.txt
│   ├── forms.html
│   └── CNAME
├── src/
│   ├── components/
│   │   ├── Header.astro        # Nav: Why, Product, Architecture, Security
│   │   ├── Footer.astro        # Links, social, language switch
│   │   ├── LangSwitch.tsx      # EN/FR switcher (React)
│   │   └── FeatureCard.astro   # Reusable card component
│   ├── content/
│   │   ├── site.en.json        # Homepage + shared content (EN)
│   │   ├── site.fr.json        # Homepage + shared content (FR)
│   │   ├── forcefield.en.json  # Force Field product page (EN)
│   │   ├── forcefield.fr.json  # Force Field product page (FR)
│   │   ├── why-runtime-authority.en.json
│   │   ├── why-runtime-authority.fr.json
│   │   ├── architecture.en.json
│   │   ├── architecture.fr.json
│   │   ├── security.en.json
│   │   └── security.fr.json
│   ├── layouts/
│   │   └── MainLayout.astro    # Head, meta, Netlify form placeholders
│   ├── pages/
│   │   ├── index.astro         # Root redirect
│   │   ├── 404.astro           # Bilingual 404
│   │   ├── en/
│   │   │   ├── index.astro
│   │   │   ├── why-runtime-authority.astro
│   │   │   ├── force-field.astro
│   │   │   ├── architecture.astro
│   │   │   ├── security.astro
│   │   │   └── privacy.astro
│   │   └── fr/
│   │       ├── index.astro
│   │       ├── pourquoi-autorite-runtime.astro
│   │       ├── force-field.astro
│   │       ├── architecture.astro
│   │       ├── securite.astro
│   │       └── confidentialite.astro
│   └── styles/
│       └── globals.css
├── astro.config.mjs
├── netlify.toml
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
git clone <repo-url>
cd data-science-tech
pnpm install
```

### Development

```bash
pnpm dev          # http://localhost:4321
pnpm build        # Production build
pnpm preview      # Preview production build
```

## Editing Content

All content lives in JSON files — no code changes needed for copy updates.

### Page Content Files

| Page | EN | FR |
|------|----|----|
| Homepage | `site.en.json` | `site.fr.json` |
| Why Runtime Authority | `why-runtime-authority.en.json` | `why-runtime-authority.fr.json` |
| Force Field (Product) | `forcefield.en.json` | `forcefield.fr.json` |
| Architecture | `architecture.en.json` | `architecture.fr.json` |
| Security | `security.en.json` | `security.fr.json` |

### Shared Content (in `site.*.json`)

- `hero` — homepage hero title, subtitle, CTA
- `secure_at_runtime` — 3-pillar section (LLM Firewall, Runtime Orchestration, Active Governance)
- `why_us` — 5 bullet points
- `trust_bar` — technology partner logos
- `nav` — navigation labels (why, product, architecture, security)
- `footer` — links, description, copyright, tagline
- `meta` — SEO title/description/keywords
- `social` — GitHub, LinkedIn URLs
- `contact` — email address

### Images

Replace in `public/`:
- `logo.svg` / `logo-dark.svg` — brand logo (light/dark variants)
- `og-image.png` — social media preview (1200×630px)
- `favicon.svg` — browser tab icon

## Typography

The site uses a custom font pairing loaded via Google Fonts:

- **Space Grotesk** — headings (`font-heading`). Geometric sans-serif with sharp terminals conveying authority and technical precision.
- **Inter** — body text (`font-sans`). Clean, highly legible at all sizes.

Fonts are configured in `tailwind.config.js` under `fontFamily` and loaded in `MainLayout.astro`.

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-600` | `#0D9488` | Teal — buttons, accents, links |
| `secondary-900` | `#0F172A` | Slate — text, dark backgrounds |

Edit `tailwind.config.js` to adjust the full palette.

## Deployment

### Netlify (current)

Push to `main` triggers auto-deploy via `netlify.toml`. Domain: `datasciencetech.ca`.

### Forms

The only active form is **Force Field Request Access** (`forcefield-access` / `forcefield-access-fr`). Hidden Netlify form placeholders are in `MainLayout.astro`. Form fields: first name, last name, company, email, job title, message.

## i18n Route Mapping

| EN Route | FR Route |
|----------|----------|
| `/en/` | `/fr/` |
| `/en/why-runtime-authority` | `/fr/pourquoi-autorite-runtime` |
| `/en/force-field` | `/fr/force-field` |
| `/en/architecture` | `/fr/architecture` |
| `/en/security` | `/fr/securite` |
| `/en/privacy` | `/fr/confidentialite` |

The `LangSwitch.tsx` component handles route mapping. Routes with identical slugs (force-field, architecture) use the default prefix-swap logic.

## Troubleshooting

### Build Errors

```bash
rm -rf node_modules .astro dist
pnpm install
pnpm build
```

### Content Warnings

Astro warns about JSON files in `src/content/` not being in collection subdirectories. These are harmless — the files are imported directly, not via Astro content collections.

## License

© 2026 Data Science Technologies. All rights reserved.

---

**Built with Astro, React, TypeScript, and Tailwind CSS**
