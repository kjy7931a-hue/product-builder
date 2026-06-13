import React, { useEffect, useState } from 'react';

interface HeaderProps {
  activeTab: 'lotto' | 'animal';
  setActiveTab: (tab: 'lotto' | 'animal') => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
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
          로또 추천
        </a>
        <a 
          href="#animal" 
          onClick={(e) => { e.preventDefault(); setActiveTab('animal'); }}
          style={{ color: activeTab === 'animal' ? 'var(--primary-color)' : 'inherit', opacity: activeTab === 'animal' ? 1 : 0.8 }}
        >
          동물상 테스트
        </a>
        <a href="about.html">서비스 소개</a>
        <a href="contact.html">문의하기</a>
        <a href="privacy.html">개인정보처리방침</a>
        <button className="theme-toggle-nav" onClick={toggleTheme} id="themeBtn">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
