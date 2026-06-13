import React, { useEffect } from 'react';

export default function Articles() {
  useEffect(() => {
    // Disqus integration
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
      {/* 가치 중심의 심층 포스팅 섹션 (애드센스 승인 핵심) */}
      <article id="about" className="article-section">
        <h2>💡 왜 AI 스마트 툴즈인가요?</h2>
        <p>우리는 현대인의 바쁜 일상 속에서 기술이 줄 수 있는 소소한 즐거움과 편리함에 집중합니다. 인공지능 기술은 이제 단순한 연구 데이터가 아닌, 우리의 생활 곳곳에서 실질적인 가치를 제공해야 합니다.</p>
        
        <h3>1. Teachable Machine 기반의 정교한 분석</h3>
        <p>동물상 테스트는 수만 장의 반려동물 및 인물 사진 데이터를 학습한 구글의 딥러닝 인프라를 활용합니다. 단순히 눈의 크기나 코의 모양뿐만 아니라, 전체적인 인상의 조화와 특징적인 레이아웃을 다각도로 분석하여 결과를 도출합니다.</p>
        
        <h3>2. 철저한 사용자 프라이버시 보호</h3>
        <p>많은 AI 서비스들이 사용자 데이터를 서버로 전송하지만, 본 서비스는 **Client-side ML(브라우저 기반 머신러닝)** 기술을 적용했습니다. 사용자가 업로드한 사진은 서버에 저장되거나 전송되지 않으며, 오직 사용자의 기기 내부에서만 연산이 이루어지고 즉시 파기됩니다.</p>
        
        <h3>3. 직관적인 사용자 인터페이스</h3>
        <ul>
          <li><strong>다크 모드 지원:</strong> 시력 보호를 위한 야간 모드 인터페이스를 완벽하게 지원합니다.</li>
          <li><strong>고속 렌더링:</strong> 외부 통신을 최소화하여 즉각적인 결과를 제공합니다.</li>
          <li><strong>모바일 최적화:</strong> 어떠한 기기에서도 최상의 UX를 경험할 수 있습니다.</li>
        </ul>
      </article>

      <article className="article-section">
        <h2>🔍 인공지능과 데이터 윤리</h2>
        <p>최근 인공지능 기술이 급격히 발전함에 따라 데이터 윤리와 개인정보 보호의 중요성이 그 어느 때보다 강조되고 있습니다. AI 스마트 툴즈는 기술적 편리함보다 사용자의 권익을 우선시합니다.</p>
        
        <h3>머신러닝의 미래: 온디바이스 AI</h3>
        <p>과거에는 인공지능 연산을 위해 고성능 서버가 필수적이었으나, 이제는 웹 브라우저에서도 강력한 머신러닝 모델을 실행할 수 있습니다. 이는 데이터 유출의 위험을 근본적으로 차단하며, 네트워크 연결이 불안정한 환경에서도 일관된 성능을 보장합니다. 본 사이트에 적용된 TensorFlow.js는 이러한 온디바이스 AI의 선두주자입니다.</p>
        
        <h3>알고리즘의 투명성</h3>
        <p>로또 번호 생성 알고리즘은 단순히 운에 맡기는 것이 아니라, 통계적 확률론을 바탕으로 설계되었습니다. 비록 로또가 독립 시행의 법칙을 따르지만, 사용자에게 심리적 만족감과 균형 잡힌 선택지를 제공하는 것이 우리 서비스의 핵심 가치입니다.</p>
      </article>

      {/* 소통 및 피드백 섹션 */}
      <section className="container" style={{ marginTop: '3rem' }}>
        <h3 style={{ textAlign: 'center' }}>💬 사용자 피드백 및 의견</h3>
        <p style={{ textAlign: 'center', color: 'var(--secondary-color)', marginBottom: '2rem' }}>
          서비스 개선을 위한 여러분의 소중한 의견을 남겨주세요.
        </p>
        <div id="disqus_thread"></div>
      </section>

      {/* 문의 섹션 */}
      <section className="container" style={{ marginTop: '3rem' }}>
        <h3 style={{ textAlign: 'center' }}>📩 비즈니스 및 기술 문의</h3>
        <form action="https://formspree.io/f/xzdqzjnl" method="POST" style={{ display: 'grid', gap: '1.2rem', marginTop: '1.5rem' }}>
          <input 
            type="text" 
            name="name" 
            placeholder="이름/기업명" 
            required 
            style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.8rem', background: 'var(--bg-color)', color: 'var(--text-color)' }} 
          />
          <input 
            type="email" 
            name="_replyto" 
            placeholder="답신 받으실 이메일" 
            required 
            style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.8rem', background: 'var(--bg-color)', color: 'var(--text-color)' }} 
          />
          <textarea 
            name="message" 
            placeholder="내용을 입력해주세요" 
            rows={5} 
            required 
            style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.8rem', background: 'var(--bg-color)', color: 'var(--text-color)', fontFamily: 'inherit' }} 
          />
          <button type="submit" className="btn-primary" style={{ background: 'var(--accent-color)', boxShadow: '0 4px 14px rgba(0, 184, 148, 0.3)' }}>
            메시지 보내기
          </button>
        </form>
      </section>
    </>
  );
}
