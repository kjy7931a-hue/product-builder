import React from 'react';

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="hero-section">
      <h1>{t.heroTitle}</h1>
      <p>{t.heroDesc}</p>
    </section>
  );
}
