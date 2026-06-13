import React, { useState, useEffect } from 'react';

interface LottoGame {
  label: string;
  numbers: number[];
  isRolling: boolean;
  type: string; // Auto / 자동
}

interface LottoSectionProps {
  t: any;
}

export default function LottoSection({ t }: LottoSectionProps) {
  const [games, setGames] = useState<LottoGame[]>([]);

  useEffect(() => {
    const initial = ['A', 'B', 'C', 'D', 'E'].map(l => ({
      label: l,
      numbers: [],
      isRolling: false,
      type: ''
    }));
    setGames(initial);
  }, []);

  function generateFiveGames() {
    setGames(prev => prev.map(g => ({
      ...g,
      isRolling: true,
      type: t.lottoAuto
    })));

    let ticks = 0;
    const maxTicks = 10;
    const interval = setInterval(() => {
      setGames(prev => prev.map(g => {
        if (!g.isRolling) return g;
        const tempNums: number[] = [];
        while (tempNums.length < 6) {
          const r = Math.floor(Math.random() * 45) + 1;
          if (!tempNums.includes(r)) tempNums.push(r);
        }
        return {
          ...g,
          numbers: tempNums
        };
      }));

      ticks++;
      if (ticks >= maxTicks) {
        clearInterval(interval);
        setGames(prev => prev.map(g => {
          const finalNums: number[] = [];
          while (finalNums.length < 6) {
            const r = Math.floor(Math.random() * 45) + 1;
            if (!finalNums.includes(r)) finalNums.push(r);
          }
          finalNums.sort((a, b) => a - b);
          return {
            ...g,
            numbers: finalNums,
            isRolling: false
          };
        }));
      }
    }, 60);
  }

  function getBallColorClass(n: number) {
    if (n <= 10) return 'color-1';
    if (n <= 20) return 'color-2';
    if (n <= 30) return 'color-3';
    if (n <= 40) return 'color-4';
    return 'color-5';
  }

  return (
    <section id="lotto-section" className="content-section active">
      <div id="lottoWrapper" className="lotto-wrapper">
        {games.map((g, idx) => (
          <div key={idx} className={`game-row ${g.isRolling ? 'rolling' : ''}`}>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', minWidth: '85px', color: 'var(--primary-color)' }}>
              {g.label} {g.type}
            </span>
            <div className="ball-container">
              {g.numbers.length === 0 ? (
                Array(6).fill(0).map((_, bIdx) => (
                  <div key={bIdx} className="ball">?</div>
                ))
              ) : (
                g.numbers.map((n, bIdx) => (
                  <div 
                    key={bIdx} 
                    className={`ball ${getBallColorClass(n)} ${!g.isRolling ? 'pop-in' : ''}`}
                    style={g.isRolling ? {
                      transform: `scale(${1 + Math.random() * 0.08}) rotate(${Math.random() * 8 - 4}deg)`
                    } : undefined}
                  >
                    {n}
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="btn-primary" onClick={generateFiveGames}>{t.lottoBtn}</button>
      
      <div style={{ marginTop: '3rem' }}>
        <h3>{t.lottoAlgoTitle}</h3>
        <p style={{ color: 'var(--secondary-color)' }}>
          {t.lottoAlgoDesc}
        </p>
      </div>
    </section>
  );
}
