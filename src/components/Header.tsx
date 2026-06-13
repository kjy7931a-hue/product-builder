import React, { useEffect, useState } from 'react';
import type { Language } from '../translations';

interface HeaderProps {
  activeTab: 'lotto' | 'animal';
  setActiveTab: (tab: 'lotto' | 'animal') => void;
  lang: Language;
  changeLang: (l: Language) => void;
  t: any;
}

export default function Header({ activeTab, setActiveTab, lang, changeLang, t }: HeaderProps) {
  const [theme, setThemeState] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <nav>
      <a href="/" className="logo" onClick={(e) => { e.preventDefault(); setActiveTab('lotto'); }}>
        🔮 LottoFace AI
      </a>
      <div className="nav-links">
        <a 
          href="#lotto" 
          onClick={(e) => { e.preventDefault(); setActiveTab('lotto'); }}
          style={{ color: activeTab === 'lotto' ? 'var(--primary-color)' : 'inherit', opacity: activeTab === 'lotto' ? 1 : 0.8 }}
        >
          {t.navLotto}
        </a>
        <a 
          href="#animal" 
          onClick={(e) => { e.preventDefault(); setActiveTab('animal'); }}
          style={{ color: activeTab === 'animal' ? 'var(--primary-color)' : 'inherit', opacity: activeTab === 'animal' ? 1 : 0.8 }}
        >
          {t.navAnimal}
        </a>
        <a href="about.html">{t.navIntro}</a>
        <a href="contact.html">{t.navContact}</a>
        <a href="privacy.html">{t.navPrivacy}</a>
        
        {/* Language Switcher */}
        <div style={{ display: 'flex', gap: '4px', border: '1px solid var(--border-color)', padding: '3px', borderRadius: '10px', background: 'rgba(0,0,0,0.02)' }}>
          <button 
            onClick={() => changeLang('en')}
            style={{
              background: lang === 'en' ? 'var(--primary-color)' : 'transparent',
              color: lang === 'en' ? 'white' : 'var(--text-color)',
              border: 'none',
              padding: '4px 8px',
              borderRadius: '7px',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.8rem',
              transition: 'all 0.3s'
            }}
          >
            EN
          </button>
          <button 
            onClick={() => changeLang('ko')}
            style={{
              background: lang === 'ko' ? 'var(--primary-color)' : 'transparent',
              color: lang === 'ko' ? 'white' : 'var(--text-color)',
              border: 'none',
              padding: '4px 8px',
              borderRadius: '7px',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.8rem',
              transition: 'all 0.3s'
            }}
          >
            KO
          </button>
        </div>

        <button className="theme-toggle-nav" onClick={toggleTheme} id="themeBtn">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
