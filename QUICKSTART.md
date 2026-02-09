# Quick Start Guide

## 1. Install & Run

```bash
pnpm install
pnpm dev
```

Open http://localhost:4321

## 2. Update Content

All text lives in `src/content/*.json`. Edit the JSON files — no code changes needed.

| What to edit | File |
|---|---|
| Homepage (EN) | `src/content/site.en.json` |
| Homepage (FR) | `src/content/site.fr.json` |
| Force Field product (EN) | `src/content/forcefield.en.json` |
| Force Field product (FR) | `src/content/forcefield.fr.json` |
| Why Runtime Authority (EN) | `src/content/why-runtime-authority.en.json` |
| Why Runtime Authority (FR) | `src/content/why-runtime-authority.fr.json` |
| Architecture (EN) | `src/content/architecture.en.json` |
| Architecture (FR) | `src/content/architecture.fr.json` |
| Security (EN) | `src/content/security.en.json` |
| Security (FR) | `src/content/security.fr.json` |

## 3. Replace Placeholder Images

- `public/logo.svg` / `public/logo-dark.svg` — brand logo
- `public/og-image.png` — social media preview (1200×630px)
- `public/favicon.svg` — browser tab icon

## 4. Update Social Links

In both `site.en.json` and `site.fr.json`:

```json
"social": {
  "github": "https://github.com/Data-ScienceTech",
  "linkedin": "https://www.linkedin.com/company/data-sciencetech/"
}
```

## 5. Build & Deploy

```bash
pnpm build       # Production build
pnpm preview     # Preview locally
```

Push to `main` to auto-deploy via Netlify.

## Site Pages

| Page | EN URL | FR URL |
|------|--------|--------|
| Home | `/en/` | `/fr/` |
| Why Runtime Authority | `/en/why-runtime-authority` | `/fr/pourquoi-autorite-runtime` |
| Force Field (Product) | `/en/force-field` | `/fr/force-field` |
| Architecture | `/en/architecture` | `/fr/architecture` |
| Security | `/en/security` | `/fr/securite` |
| Privacy | `/en/privacy` | `/fr/confidentialite` |

## Common Tasks

### Change Brand Colors

Edit `tailwind.config.js` → `theme.extend.colors`.

### Change Fonts

Fonts are configured in:
- `tailwind.config.js` → `fontFamily` (font-heading, font-sans)
- `src/layouts/MainLayout.astro` → Google Fonts `<link>` tags
- `src/styles/globals.css` → heading font-family rule

### Edit Navigation

Nav labels come from `site.*.json` → `nav` object. Nav link URLs are in `src/components/Header.astro`.

### Edit Footer

Footer labels come from `site.*.json` → `footer` object. Footer link URLs are in `src/components/Footer.astro`.

## Need Help?

See the full `README.md` or contact info@datasciencetech.ca.
