export type Lang = 'en' | 'fr';

export interface RoutePair {
  id: string;
  en: string;
  fr: string;
}

export const ROUTES: RoutePair[] = [
  { id: 'home', en: '/', fr: '/' },
  { id: 'bi-audit', en: '/bi-audit', fr: '/audit-bi' },
  { id: 'ai-governance', en: '/ai-governance', fr: '/gouvernance-ia' },
  { id: 'open-forcefield', en: '/open-forcefield', fr: '/open-forcefield' },
  { id: 'benchmarks', en: '/benchmarks', fr: '/benchmarks' },
  { id: 'vscode-extension', en: '/vscode-extension', fr: '/extension-vscode' },
  { id: 'jetbrains-plugin', en: '/jetbrains-plugin', fr: '/plugin-jetbrains' },
  { id: 'privacy-policy', en: '/privacy-policy', fr: '/politique-de-confidentialite' },
  { id: 'responsible-disclosure', en: '/responsible-disclosure', fr: '/divulgation-responsable' },
];

function stripPrefixAndSlash(pathname: string): string {
  const p = pathname.replace(/^\/(en|fr)/, '').replace(/\/+$/, '');
  return p === '' ? '/' : p;
}

export function resolveRoute(pathname: string): RoutePair | undefined {
  const p = stripPrefixAndSlash(pathname);
  return ROUTES.find((r) => r.en === p || r.fr === p);
}

export function routeFor(route: RoutePair, lang: Lang): string {
  return `/${lang}${route[lang]}`;
}

export function alternates(pathname: string): { en: string; fr: string } | null {
  const route = resolveRoute(pathname);
  if (!route) return null;
  return { en: routeFor(route, 'en'), fr: routeFor(route, 'fr') };
}
