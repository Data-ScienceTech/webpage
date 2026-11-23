# Agentic Governance — datasciencetech.ca

Bilingual (EN/FR) site for **Agentic Governance**: independent consulting for agentic AI — LLM cost control, hallucination/output guardrails, local-first agent systems, and governance frameworks. Also the home of **Open ForceField**, the open-source LLM/agent control toolkit (`pip install forcefield`, Apache 2.0).

Built with Astro 4 (static output), React 18 (language switcher island), TypeScript, and Tailwind CSS. Deployed to Google Cloud Run behind a global HTTPS load balancer.

## Pages

| Page | EN | FR |
|------|----|----|
| Home (consulting) | `/en/` | `/fr/` |
| BI & data warehouse audit | `/en/bi-audit` | `/fr/audit-bi` |
| AI governance review | `/en/ai-governance` | `/fr/gouvernance-ia` |
| Open ForceField (OSS project) | `/en/open-forcefield` | `/fr/open-forcefield` |
| Benchmarks | `/en/benchmarks` | `/fr/benchmarks` |
| VS Code extension | `/en/vscode-extension` | `/fr/extension-vscode` |
| JetBrains plugin | `/en/jetbrains-plugin` | `/fr/plugin-jetbrains` |
| Privacy policy | `/en/privacy-policy` | `/fr/politique-de-confidentialite` |
| Responsible disclosure | `/en/responsible-disclosure` | `/fr/divulgation-responsable` |

Legacy corporate-site URLs 301 to their nearest equivalent (see `nginx.conf`).

## Content

All copy lives in `src/content/*.json` — one EN + one FR file per page. `site.*.json` holds shared content (nav, footer, hero, services, contact). Page files are in `src/pages/{en,fr}/`.

## Commands

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # -> dist/
pnpm preview
```

## Deploy

Containerized static site: `Dockerfile` builds Astro and serves `dist/` via nginx on port 8080. Deploy to Cloud Run (project `forcefield-testing`, region `northamerica-northeast1`):

```powershell
gcp\deploy.ps1
```

Or manually:

```bash
gcloud builds submit --config cloudbuild-website.yaml --project forcefield-testing .
gcloud run deploy datasciencetech-website --project forcefield-testing \
  --image northamerica-northeast1-docker.pkg.dev/forcefield-testing/forcefield-gateway/website:latest \
  --region northamerica-northeast1 --port 8080 --allow-unauthenticated
```

`gcp/setup-gclb.ps1` documents the one-time load-balancer wiring (NEG, backend, host rules, managed cert).

## Contact

info@datasciencetech.ca
