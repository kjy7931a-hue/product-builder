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

  function validateLottoNumbers(nums: number[]): boolean {
    // 1. 홀짝 비율 필터 (Odd/Even): 홀수 개수가 2, 3, 4개인 조합만 허용
    const oddCount = nums.filter(n => n % 2 !== 0).length;
    if (oddCount < 2 || oddCount > 4) return false;

    // 2. 총합 범위 필터 (Sum Range): 6개 숫자 합이 100 ~ 175 사이
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum < 100 || sum > 175) return false;

    // 3. 고저 비율 필터 (Low/High): 23 이상의 고수가 2, 3, 4개인 조합만 허용
    const highCount = nums.filter(n => n >= 23).length;
    if (highCount < 2 || highCount > 4) return false;

    // 4. 번호대별 균형 필터 (Group Clustering): 한 번호대 대역에 4개 이상 몰리는 조합 제외
    const groupCounts = [0, 0, 0, 0, 0];
    nums.forEach(n => {
      if (n <= 10) groupCounts[0]++;
      else if (n <= 20) groupCounts[1]++;
      else if (n <= 30) groupCounts[2]++;
      else if (n <= 40) groupCounts[3]++;
      else groupCounts[4]++;
    });
    if (groupCounts.some(c => c >= 4)) return false;

    return true;
  }

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
          let finalNums: number[] = [];
          let attempts = 0;
          const maxAttempts = 500;
          
          do {
            finalNums = [];
            while (finalNums.length < 6) {
              const r = Math.floor(Math.random() * 45) + 1;
              if (!finalNums.includes(r)) finalNums.push(r);
            }
            attempts++;
          } while (!validateLottoNumbers(finalNums) && attempts < maxAttempts);

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
