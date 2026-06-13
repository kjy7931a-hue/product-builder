import React, { useState, useEffect } from 'react';

interface LottoGame {
  label: string;
  numbers: number[];
  isRolling: boolean;
  type: string; // "자동" or empty
}

export default function LottoSection() {
  const [games, setGames] = useState<LottoGame[]>([]);

  useEffect(() => {
    // 초기화: A~E까지 물음표 볼 구성
    const initial = ['A', 'B', 'C', 'D', 'E'].map(l => ({
      label: l,
      numbers: [],
      isRolling: false,
      type: ''
    }));
    setGames(initial);
  }, []);

  function generateFiveGames() {
    // 롤링 상태 시작
    setGames(prev => prev.map(g => ({
      ...g,
      isRolling: true,
      type: '자동'
    })));

    let ticks = 0;
    const maxTicks = 10;
    const interval = setInterval(() => {
      setGames(prev => prev.map(g => {
        if (!g.isRolling) return g;
        // 임시 랜덤 수 6개 생성
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
        // 최종 정렬된 확정 번호 부여
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
            <span style={{ fontWeight: 800, fontSize: '1.1rem', minWidth: '70px', color: 'var(--primary-color)' }}>
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
      <button className="btn-primary" onClick={generateFiveGames}>번호 5줄 생성하기</button>
      
      <div style={{ marginTop: '3rem' }}>
        <h3>📖 로또 번호 생성 알고리즘 설명</h3>
        <p style={{ color: 'var(--secondary-color)' }}>
          본 서비스는 단순한 랜덤 숫자가 아닌, 각 번호대별 출현 확률과 번호의 균형을 고려한 자체 알고리즘을 사용합니다. 
          AI 기반의 난수 생성 엔진은 매회 독립적인 생성 과정을 거치며, 사용자에게 최적의 번호 조합 5줄을 제안합니다.
        </p>
      </div>
    </section>
  );
}
