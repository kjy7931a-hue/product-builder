import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LottoSection from './components/LottoSection';
import AnimalSection from './components/AnimalSection';
import Articles from './components/Articles';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'lotto' | 'animal'>('lotto');

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        <Hero />
        
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'lotto' ? 'active' : ''}`} 
              onClick={() => setActiveTab('lotto')}
            >
              로또 알고리즘
            </button>
            <button 
              className={`tab-btn ${activeTab === 'animal' ? 'active' : ''}`} 
              onClick={() => setActiveTab('animal')}
            >
              동물상 AI 테스트
            </button>
          </div>

          {activeTab === 'lotto' && <LottoSection />}
          {activeTab === 'animal' && <AnimalSection />}
        </div>

        <Articles />
      </main>

      <Footer />
    </>
  );
}
