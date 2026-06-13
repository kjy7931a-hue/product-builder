import React, { useEffect } from 'react';

interface ArticlesProps {
  t: any;
}

export default function Articles({ t }: ArticlesProps) {
  useEffect(() => {
    const thread = document.getElementById('disqus_thread');
    if (thread && !thread.hasChildNodes()) {
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://product-builder-p8lvcihwvu.disqus.com/embed.js';
      s.setAttribute('data-timestamp', String(+new Date()));
      (d.head || d.body).appendChild(s);
    }
  }, []);

  return (
    <>
      <article id="about" className="article-section">
        <h2>{t.artTitle1}</h2>
        <p>{t.artP1}</p>
        
        <h3>{t.artH1_1}</h3>
        <p>{t.artP1_1}</p>
        
        <h3>{t.artH1_2}</h3>
        <p>{t.artP1_2}</p>
        
        <h3>{t.artH1_3}</h3>
        <ul>
          <li><strong>{t.artL1_1.split(':')[0]}:</strong>{t.artL1_1.split(':')[1]}</li>
          <li><strong>{t.artL1_2.split(':')[0]}:</strong>{t.artL1_2.split(':')[1]}</li>
          <li><strong>{t.artL1_3.split(':')[0]}:</strong>{t.artL1_3.split(':')[1]}</li>
        </ul>
      </article>

      <article className="article-section">
        <h2>{t.artTitle2}</h2>
        <p>{t.artP2}</p>
        
        <h3>{t.artH2_1}</h3>
        <p>{t.artP2_1}</p>
        
        <h3>{t.artH2_2}</h3>
        <p>{t.artP2_2}</p>
      </article>

      <section className="container" style={{ marginTop: '3rem' }}>
        <h3 style={{ textAlign: 'center' }}>{t.feedbackTitle}</h3>
        <p style={{ textAlign: 'center', color: 'var(--secondary-color)', marginBottom: '2rem' }}>
          {t.feedbackDesc}
        </p>
        <div id="disqus_thread"></div>
      </section>

      <section className="container" style={{ marginTop: '3rem' }}>
        <h3 style={{ textAlign: 'center' }}>{t.contactTitle}</h3>
        <form action="https://formspree.io/f/xzdqzjnl" method="POST" style={{ display: 'grid', gap: '1.2rem', marginTop: '1.5rem' }}>
          <input 
            type="text" 
            name="name" 
            placeholder={t.contactName} 
            required 
            style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.8rem', background: 'var(--bg-color)', color: 'var(--text-color)' }} 
          />
          <input 
            type="email" 
            name="_replyto" 
            placeholder={t.contactEmail} 
            required 
            style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.8rem', background: 'var(--bg-color)', color: 'var(--text-color)' }} 
          />
          <textarea 
            name="message" 
            placeholder={t.contactMessage} 
            rows={5} 
            required 
            style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.8rem', background: 'var(--bg-color)', color: 'var(--text-color)', fontFamily: 'inherit' }} 
          />
          <button type="submit" className="btn-primary" style={{ background: 'var(--accent-color)', boxShadow: '0 4px 14px rgba(0, 184, 148, 0.3)' }}>
            {t.contactSubmit}
          </button>
        </form>
      </section>
    </>
  );
}
