import React from 'react';

export default function Footer() {
  return (
    <footer id="privacy">
      <div className="footer-links">
        <a href="/">홈으로</a>
        <a href="about.html">서비스 소개</a>
        <a href="contact.html">문의하기</a>
        <a href="privacy.html">개인정보처리방침</a>
        <a href="terms.html">이용약관</a>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
        <p>&copy; 2026 LottoFace AI. Powered by Google Teachable Machine & TensorFlow.js</p>
        <p style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
          본 사이트는 사용자의 개인정보를 소중히 여깁니다. 동물상 테스트에 사용된 이미지는 외부에 저장되지 않으며, 문의 폼을 통해 수집된 정보는 문의 응대 목적으로만 사용됩니다.
        </p>
      </div>
    </footer>
  );
}
