import { useEffect, useState } from 'react';

interface Props {
  lang: 'en' | 'fr';
}

export default function LangSwitch({ lang }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSwitch = (newLang: 'en' | 'fr') => {
    localStorage.setItem('lang', newLang);
    
    // Get current path without language prefix
    const currentPath = window.location.pathname.replace(/^\/(en|fr)/, '');
    
    // Map routes between languages
    const routeMap: Record<string, Record<string, string>> = {
      '/privacy': {
        'en': '/en/privacy',
        'fr': '/fr/confidentialite'
      },
      '/confidentialite': {
        'en': '/en/privacy',
        'fr': '/fr/confidentialite'
      },
      '/terms': {
        'en': '/en/terms',
        'fr': '/fr/conditions'
      },
      '/conditions': {
        'en': '/en/terms',
        'fr': '/fr/conditions'
      },
      '/signup': {
        'en': '/en/signup',
        'fr': '/fr/inscription'
      },
      '/inscription': {
        'en': '/en/signup',
        'fr': '/fr/inscription'
      },
      '/why-runtime-authority': {
        'en': '/en/why-runtime-authority',
        'fr': '/fr/pourquoi-autorite-runtime'
      },
      '/pourquoi-autorite-runtime': {
        'en': '/en/why-runtime-authority',
        'fr': '/fr/pourquoi-autorite-runtime'
      },
      '/security': {
        'en': '/en/security',
        'fr': '/fr/securite'
      },
      '/securite': {
        'en': '/en/security',
        'fr': '/fr/securite'
      }
    };
    
    // Check if we have a mapped route
    if (routeMap[currentPath]) {
      window.location.href = routeMap[currentPath][newLang];
    } else {
      // Default: just change language prefix
      window.location.href = `/${newLang}${currentPath || ''}`;
    }
  };

  if (!mounted) {
    return (
      <div className="flex items-center space-x-1 rounded-lg border border-secondary-300 p-1 dark:border-secondary-600">
        <button className="lang-btn lang-btn-active">EN</button>
        <button className="lang-btn">FR</button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-1 rounded-lg border border-secondary-300 p-1 dark:border-secondary-600">
      <button
        onClick={() => handleSwitch('en')}
        className={`lang-btn ${lang === 'en' ? 'lang-btn-active' : ''}`}
        aria-label="Switch to English"
        aria-current={lang === 'en' ? 'true' : 'false'}
      >
        EN
      </button>
      <button
        onClick={() => handleSwitch('fr')}
        className={`lang-btn ${lang === 'fr' ? 'lang-btn-active' : ''}`}
        aria-label="Passer au français"
        aria-current={lang === 'fr' ? 'true' : 'false'}
      >
        FR
      </button>
    </div>
  );
}
