import React, { useState, useRef } from 'react';

const MODEL_URL = "https://teachablemachine.withgoogle.com/models/M26t_mTBp/";

interface AnimalSectionProps {
  t: any;
}

export default function AnimalSection({ t }: AnimalSectionProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [dogPercent, setDogPercent] = useState<number>(0);
  const [catPercent, setCatPercent] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const modelRef = useRef<any>(null);

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const result = event.target?.result as string;
      setImgSrc(result);
      setLoading(true);
      setShowResult(false);
      setDogPercent(0);
      setCatPercent(0);

      try {
        const tmImage = (window as any).tmImage;
        if (!modelRef.current) {
          modelRef.current = await tmImage.load(MODEL_URL + "model.json", MODEL_URL + "metadata.json");
        }

        const imgElement = imgRef.current;
        if (imgElement) {
          setTimeout(async () => {
            const predictions = await modelRef.current.predict(imgElement);
            setLoading(false);
            setShowResult(true);

            predictions.forEach((p: any) => {
              const prob = parseFloat((p.probability * 100).toFixed(1));
              if (p.className.toLowerCase() === 'dog') {
                setDogPercent(prob);
              } else if (p.className.toLowerCase() === 'cat') {
                setCatPercent(prob);
              }
            });

            setTimeout(() => {
              resultRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }, 150);
        }
      } catch (err) {
        console.error("AI 모델 로드 실패: ", err);
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  }

  function triggerUpload() {
    fileInputRef.current?.click();
  }

  return (
    <section id="animal-section" className="content-section active">
      <div className="upload-area" onClick={triggerUpload}>
        {!imgSrc ? (
          <div id="upload-placeholder">
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📷</div>
            <h3>{t.animalPlaceholderTitle}</h3>
            <p style={{ color: 'var(--secondary-color)' }}>{t.animalPlaceholderDesc}</p>
          </div>
        ) : (
          <img 
            ref={imgRef}
            id="preview-image" 
            src={imgSrc} 
            alt="사용자 분석 이미지" 
            style={{ display: 'block' }}
          />
        )}
        <input 
          type="file" 
          ref={fileInputRef} 
          hidden 
          accept="image/*" 
          onChange={handleImageUpload} 
        />
      </div>

      {loading && (
        <div id="loading" style={{ textAlign: 'center', margin: '2rem' }}>
          <p>{t.animalLoading}</p>
        </div>
      )}

      {showResult && (
        <div ref={resultRef} id="result-container" className="result-container" style={{ display: 'block' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '2rem' }}>{t.animalResultTitle}</h3>
          <div className="result-bar-wrapper">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
              <span>{t.animalDogLabel}</span>
              <span id="dog-percent" style={{ color: '#f9a825' }}>{dogPercent}%</span>
            </div>
            <div className="result-bar">
              <div id="dog-fill" className="bar-fill dog-fill" style={{ width: `${dogPercent}%` }}></div>
            </div>
          </div>
          <div className="result-bar-wrapper">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
              <span>{t.animalCatLabel}</span>
              <span id="cat-percent" style={{ color: '#2980b9' }}>{catPercent}%</span>
            </div>
            <div className="result-bar">
              <div id="cat-fill" className="bar-fill cat-fill" style={{ width: `${catPercent}%` }}></div>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--secondary-color)', marginTop: '1rem' }}>
            {t.animalWarning}
          </p>
        </div>
      )}
    </section>
  );
}
