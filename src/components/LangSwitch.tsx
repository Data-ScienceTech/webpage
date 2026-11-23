interface Props {
  lang: 'en' | 'fr';
  enHref: string;
  frHref: string;
}

export default function LangSwitch({ lang, enHref, frHref }: Props) {
  const remember = (newLang: 'en' | 'fr') => () => {
    localStorage.setItem('lang', newLang);
  };

  return (
    <div className="flex items-center space-x-1 rounded-lg border border-secondary-300 p-1 dark:border-secondary-600">
      <a
        href={enHref}
        onClick={remember('en')}
        className={`lang-btn ${lang === 'en' ? 'lang-btn-active' : ''}`}
        aria-label="Switch to English"
        aria-current={lang === 'en' ? 'true' : 'false'}
      >
        EN
      </a>
      <a
        href={frHref}
        onClick={remember('fr')}
        className={`lang-btn ${lang === 'fr' ? 'lang-btn-active' : ''}`}
        aria-label="Passer au français"
        aria-current={lang === 'fr' ? 'true' : 'false'}
      >
        FR
      </a>
    </div>
  );
}
