import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LottoSection from './components/LottoSection';
import AnimalSection from './components/AnimalSection';
import Articles from './components/Articles';
import Footer from './components/Footer';
import { translations } from './translations';
import type { Language } from './translations';

export default function App() {
  const [activeTab, setActiveTab] = useState<'lotto' | 'animal'>('lotto');
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('lang') as Language) || 'en';
  });

  const changeLang = (l: Language) => {
    setLang(l);
    localStorage.setItem('lang', l);
  };

  const t = translations[lang];

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} lang={lang} changeLang={changeLang} t={t} />
      
      <main>
        <Hero t={t} />
        
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'lotto' ? 'active' : ''}`} 
              onClick={() => setActiveTab('lotto')}
            >
              {t.tabLotto}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'animal' ? 'active' : ''}`} 
              onClick={() => setActiveTab('animal')}
            >
              {t.tabAnimal}
            </button>
          </div>

          {activeTab === 'lotto' && <LottoSection t={t} />}
          {activeTab === 'animal' && <AnimalSection t={t} />}
        </div>

        <Articles t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}
