export type Language = 'en' | 'ko';

export const translations = {
  en: {
    navLotto: 'Lotto Recommendations',
    navAnimal: 'Animal Face Test',
    navIntro: 'Service Intro',
    navContact: 'Contact Us',
    navPrivacy: 'Privacy Policy',
    
    heroTitle: '🔮 LottoFace AI',
    heroDesc: 'Discover your AI animal face physiognomy and lucky lottery numbers powered by advanced statistical engines!',
    
    tabLotto: 'Lotto Algorithm',
    tabAnimal: 'Animal AI Test',
    
    lottoAuto: 'Auto',
    lottoBtn: 'Generate 5 Lotto Lines',
    lottoAlgoTitle: '📖 Lotto Generation Algorithm Explanation',
    lottoAlgoDesc: 'Our service does not generate simple random numbers; instead, it uses a custom algorithm that considers the appearance probability of each number range and number balance. The AI-based random number generation engine runs an independent generation process each time, suggesting the optimal 5 lines of number combinations to the user.',
    
    animalPlaceholderTitle: 'Upload Photo to Start Analysis',
    animalPlaceholderDesc: 'Dog vs Cat, which animal physiognomy fits you best?',
    animalLoading: '🤖 AI is extracting key facial features...',
    animalResultTitle: 'AI Analysis Results',
    animalDogLabel: '🐶 Dog Face',
    animalCatLabel: '🐱 Cat Face',
    animalWarning: '* Analysis results are based on AI models and for entertainment purposes only.',
    
    artTitle1: '💡 Why LottoFace AI?',
    artP1: 'We focus on the small pleasures and convenience that technology can bring to busy modern daily lives. Artificial intelligence technology should now provide practical value in various parts of our lives, rather than just being research data.',
    artH1_1: '1. Precise Analysis based on Teachable Machine',
    artP1_1: 'The animal face test uses Google\'s deep learning infrastructure, which has learned tens of thousands of pet and portrait photo data. It analyzes not only the size of eyes or the shape of the nose but also the harmony of the overall impression and characterful layout from various angles to draw conclusions.',
    artH1_2: '2. Thorough User Privacy Protection',
    artP1_2: 'While many AI services transmit user data to the server, this service applies Client-side ML (browser-based machine learning) technology. Photos uploaded by users are not stored or transmitted to the server; calculations are performed only within the user\'s device and are immediately destroyed.',
    artH1_3: '3. Intuitive User Interface',
    artL1_1: 'Dark Mode Support: Perfect support for night mode interface to protect eyesight.',
    artL1_2: 'High-speed Rendering: Minimizes external communication to provide instant results.',
    artL1_3: 'Mobile Optimization: Ensures the best UX experience on any device.',
    
    artTitle2: '🔍 AI and Data Ethics',
    artP2: 'With the rapid development of AI technology, the importance of data ethics and privacy protection is being emphasized more than ever. LottoFace AI prioritizes the rights and interests of users over technical convenience.',
    artH2_1: 'The Future of Machine Learning: On-device AI',
    artP2_1: 'In the past, high-performance servers were essential for AI operations, but now powerful machine learning models can be executed directly inside web browsers. This fundamentally blocks the risk of data leakage and ensures consistent performance even in environments with unstable network connections. TensorFlow.js applied to this site is a pioneer of such on-device AI.',
    artH2_2: 'Transparency of the Algorithm',
    artP2_2: 'The lotto number generation algorithm is designed based on statistical probability theory, not just leaving it to luck. Although lottery draws follow the law of independent trials, providing users with psychological satisfaction and a balanced set of choices is the core value of our service.',
    
    feedbackTitle: '💬 User Feedback & Opinions',
    feedbackDesc: 'Please leave your valuable opinions to improve our service.',
    contactTitle: '📩 Business & Tech Inquiry',
    contactName: 'Name / Company Name',
    contactEmail: 'Email for reply',
    contactMessage: 'Please enter your message',
    contactSubmit: 'Send Message',
    
    footerCopyright: '© 2026 LottoFace AI. Powered by Google Teachable Machine & TensorFlow.js',
    footerWarning: 'This site values your personal information. Images used for the animal face test are not saved externally, and information collected through the contact form is used only for replying to inquiries.',
    footerHome: 'Home',
    footerTerms: 'Terms of Use'
  },
  ko: {
    navLotto: '로또 추천',
    navAnimal: '동물상 테스트',
    navIntro: '서비스 소개',
    navContact: '문의하기',
    navPrivacy: '개인정보처리방침',
    
    heroTitle: '🔮 LottoFace AI',
    heroDesc: 'AI 동물상 관상 분석과 통계 엔진 기반 행운의 로또 예측 번호를 지금 바로 만나보세요!',
    
    tabLotto: '로또 알고리즘',
    tabAnimal: '동물상 AI 테스트',
    
    lottoAuto: '자동',
    lottoBtn: '번호 5줄 생성하기',
    lottoAlgoTitle: '📖 로또 번호 생성 알고리즘 설명',
    lottoAlgoDesc: '본 서비스는 단순한 랜덤 숫자가 아닌, 각 번호대별 출현 확률과 번호의 균형을 고려한 자체 알고리즘을 사용합니다. AI 기반의 난수 생성 엔진은 매회 독립적인 생성 과정을 거치며, 사용자에게 최적의 번호 조합 5줄을 제안합니다.',
    
    animalPlaceholderTitle: '사진을 업로드하여 분석 시작',
    animalPlaceholderDesc: '강아지상 vs 고양이상, 당신의 관상은 어떤 동물에 가까울까요?',
    animalLoading: '🤖 인공지능이 이미지의 특징점을 추출하고 있습니다...',
    animalResultTitle: '인공지능 분석 결과',
    animalDogLabel: '🐶 강아지상',
    animalCatLabel: '🐱 고양이상',
    animalWarning: '* 분석 결과는 AI 모델에 기반한 것이며 관상용으로만 참고해주세요.',
    
    artTitle1: '💡 왜 AI 스마트 툴즈인가요?',
    artP1: '우리는 현대인의 바쁜 일상 속에서 기술이 줄 수 있는 소소한 즐거움과 편리함에 집중합니다. 인공지능 기술은 이제 단순한 연구 데이터가 아닌, 우리의 생활 곳곳에서 실질적인 가치를 제공해야 합니다.',
    artH1_1: '1. Teachable Machine 기반의 정교한 분석',
    artP1_1: '동물상 테스트는 수만 장의 반려동물 및 인물 사진 데이터를 학습한 구글의 딥러닝 인프라를 활용합니다. 단순히 눈의 크기나 코의 모양뿐만 아니라, 전체적인 인상의 조화와 특징적인 레이아웃을 다각도로 분석하여 결과를 도출합니다.',
    artH1_2: '2. 철저한 사용자 프라이버시 보호',
    artP1_2: '많은 AI 서비스들이 사용자 데이터를 서버로 전송하지만, 본 서비스는 **Client-side ML(브라우저 기반 머신러닝)** 기술을 적용했습니다. 사용자가 업로드한 사진은 서버에 저장되거나 전송되지 않으며, 오직 사용자의 기기 내부에서만 연산이 이루어지고 즉시 파기됩니다.',
    artH1_3: '3. 직관적인 사용자 인터페이스',
    artL1_1: '다크 모드 지원: 시력 보호를 위한 야간 모드 인터페이스를 완벽하게 지원합니다.',
    artL1_2: '고속 렌더링: 외부 통신을 최소화하여 즉각적인 결과를 제공합니다.',
    artL1_3: '모바일 최적화: 어떠한 기기에서도 최상의 UX를 경험할 수 있습니다.',
    
    artTitle2: '🔍 인공지능과 데이터 윤리',
    artP2: '최근 인공지능 기술이 급격히 발전함에 따라 데이터 윤리와 개인정보 보호의 중요성이 그 어느 때보다 강조되고 있습니다. AI 스마트 툴즈는 기술적 편리함보다 사용자의 권익을 우선시합니다.',
    artH2_1: '머신러닝의 미래: 온디바이스 AI',
    artP2_1: '과거에는 인공지능 연산을 위해 고성능 서버가 필수적이었으나, 이제는 웹 브라우저에서도 강력한 머신러닝 모델을 실행할 수 있습니다. 이는 데이터 유출의 위험을 근본적으로 차단하며, 네트워크 연결이 불안정한 환경에서도 일관된 성능을 보장합니다. 본 사이트에 적용된 TensorFlow.js는 이러한 온디바이스 AI의 선두주자입니다.',
    artH2_2: '알고리즘의 투명성',
    artP2_2: '로또 번호 생성 알고리즘은 단순히 운에 맡기는 것이 아니라, 통계적 확률론을 바탕으로 설계되었습니다. 비록 로또가 독립 시행의 법칙을 따르지만, 사용자에게 심리적 만족감과 균형 잡힌 선택지를 제공하는 것이 우리 서비스의 핵심 가치입니다.',
    
    feedbackTitle: '💬 사용자 피드백 및 의견',
    feedbackDesc: '서비스 개선을 위한 여러분의 소중한 의견을 남겨주세요.',
    contactTitle: '📩 비즈니스 및 기술 문의',
    contactName: '이름/기업명',
    contactEmail: '답신 받으실 이메일',
    contactMessage: '내용을 입력해주세요',
    contactSubmit: '메시지 보내기',
    
    footerCopyright: '© 2026 LottoFace AI. Powered by Google Teachable Machine & TensorFlow.js',
    footerWarning: '본 사이트는 사용자의 개인정보를 소중히 여깁니다. 동물상 테스트에 사용된 이미지는 외부에 저장되지 않으며, 문의 폼을 통해 수집된 정보는 문의 응대 목적으로만 사용됩니다.',
    footerHome: '홈으로',
    footerTerms: '이용약관'
  }
};
