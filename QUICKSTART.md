# Quick Start

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

## Edit content

All text lives in `src/content/*.json` — no code changes needed.

| What | Files |
|---|---|
| Shared (nav, footer, hero, services, contact) | `site.en.json` / `site.fr.json` |
| Open ForceField page | `open-forcefield.en.json` / `.fr.json` |
| Benchmarks | `benchmarks.en.json` / `.fr.json` |
| VS Code / JetBrains | `vscode-extension.*.json` / `jetbrains-plugin.*.json` |

Nav links are in `src/components/Header.astro`, footer links in `src/components/Footer.astro`, EN↔FR route mapping in `src/components/LangSwitch.tsx`.

## Brand assets

`public/`: `ag-mark.svg` (mark only), `logo.svg`/`logo-dark.svg` (lockups), `favicon.svg`, `og-image.png`. Logo candidates and working files are in `output/imagegen/`.

## Deploy

```powershell
gcp\deploy.ps1   # Cloud Build -> Cloud Run (project forcefield-testing)
```
