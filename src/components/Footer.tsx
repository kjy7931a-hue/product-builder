import React from 'react';

interface FooterProps {
  t: any;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer id="privacy">
      <div className="footer-links">
        <a href="/">{t.footerHome}</a>
        <a href="about.html">{t.navIntro}</a>
        <a href="contact.html">{t.navContact}</a>
        <a href="privacy.html">{t.navPrivacy}</a>
        <a href="terms.html">{t.footerTerms}</a>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
        <p>{t.footerCopyright}</p>
        <p style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
          {t.footerWarning}
        </p>
      </div>
    </footer>
  );
}
