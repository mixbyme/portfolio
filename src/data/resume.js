// 포트폴리오에 표시되는 모든 이력 데이터.
// 내용을 고칠 때는 이 파일만 수정하면 됩니다.

export const profile = {
  nameKo: '이용호',
  nameEn: 'Lee Yong Ho',
  title: 'Frontend Team Leader',
  roles: ['Frontend Team Leader', 'Full-Stack Engineer', 'Software Architect', 'Problem Solver'],
  tagline: '많은 사람이 쓰는 서비스를, 누구나 편하게 쓸 수 있도록.',
  intro:
    '오픈마켓부터 글로벌 3D 구강 스캐너 플랫폼까지, 20년 동안 Frontend와 Backend를 넘나들며 대규모 서비스를 만들고 팀을 이끌어 왔습니다.',
  email: 'mixbyme@naver.com',
  github: 'https://github.com/mixbyme',
  location: 'Seoul, Korea',
}

export const stats = [
  { value: 20, suffix: '년+', label: '개발 경력' },
  { value: 8, suffix: '년+', label: 'Frontend 팀 리딩' },
  { value: 7, suffix: '곳', label: '경험한 조직과 도메인' },
  { value: 4200, suffix: '만 건', label: '검색 아키텍처 데이터 규모' },
]

export const competencies = [
  {
    icon: 'Layers',
    title: 'Full-Stack',
    desc: 'Frontend와 Backend 전반을 직접 개발해 온 경험으로, 화면부터 API·DB까지 한 흐름으로 설계합니다.',
  },
  {
    icon: 'Users',
    title: 'Team Leadership',
    desc: '대규모 서비스 개발 프로젝트를 리딩하고, 8년 넘게 Frontend 팀을 운영했습니다.',
  },
  {
    icon: 'MessagesSquare',
    title: 'Communication',
    desc: '유관 부서와 긴밀히 협업하며 요구사항을 분석하고, 일정과 우선순위를 조율합니다.',
  },
  {
    icon: 'Network',
    title: 'Architecture',
    desc: '신기술을 도입하고 시스템 전반의 아키텍처를 설계해 서비스의 확장성을 만듭니다.',
  },
]

export const highlights = [
  {
    company: 'MEDIT',
    title: 'MeditLink 글로벌 웹 플랫폼',
    desc: '전 세계 치과·기공소가 쓰는 MeditLink.com과 Biz Admin의 Frontend를 총괄. Easy Order, 회원가입, 치과 전문가 커뮤니티를 개발·운영했습니다.',
    tags: ['Vue.js', 'React', 'Team Lead'],
    size: 'lg',
  },
  {
    company: 'Chemessen',
    title: '4,200만 건 화학 정보 검색',
    desc: 'Elasticsearch 기본 아키텍처와 MongoDB API를 설계하고, 응답 속도와 부하에 대응하는 HA를 구성했습니다.',
    tags: ['Elasticsearch', 'MongoDB', 'MSA'],
    size: 'md',
  },
  {
    company: 'Gmarket · Auction',
    title: '국내 대표 오픈마켓 7년',
    desc: 'G마켓 메인과 사이트 전반의 성능을 최적화하고, 판매자 사이트 ESM PLUS 신규 개발과 일본 G마켓 전 사이트를 맡았습니다.',
    tags: ['ASP.NET MVC', 'Performance', 'Global'],
    size: 'md',
  },
  {
    company: 'nsuslab',
    title: '해외 결제 모듈 연동',
    desc: 'BRK, RPN, ecoPayz 등 해외 결제 모듈을 영문 API 가이드로 분석해 연동하고, ELK로 결제 모니터링을 구축했습니다.',
    tags: ['C# MVC', 'TypeScript', 'ELK'],
    size: 'lg',
  },
]

export const experiences = [
  {
    company: 'MEDIT',
    period: '2018.10 – 2027.02',
    duration: '8년 5개월',
    role: 'Frontend 팀 · 팀장',
    about: '글로벌 3D 구강 스캐너 전문 기업',
    summary: 'MEDIT 웹 서비스 Frontend 개발 총괄, 프로젝트 리딩, 요구사항 분석 및 일정 관리',
    projects: [
      {
        name: 'MeditLink.com 개발 및 운영',
        period: '2018.10 – 2027.02',
        team: '6명',
        stack: ['Vue.js', 'Jira', 'Confluence', 'Agile'],
        detail: 'Medit Link Easy Order, 회원가입, 치과 전문가 커뮤니티 사이트를 개발하고 운영했습니다.',
      },
      {
        name: 'MeditLink Biz Admin 개발 및 운영',
        period: '2019.11 – 2027.02',
        team: '6명',
        stack: ['React', 'Jira', 'Confluence', 'Agile'],
        detail: '비즈니스 관리자(Business Admin) 사이트를 개발하고 운영했습니다.',
      },
    ],
  },
  {
    company: 'nsuslab',
    period: '2017.03 – 2018.10',
    duration: '1년 8개월',
    role: 'Portal 팀 · 과장',
    about: '글로벌 온라인 게임 플랫폼',
    summary: '결제(Cashier) 사이트, 이벤트 페이지, 관리자 페이지 개발 및 운영',
    projects: [
      {
        name: 'Cashier Payment Integration',
        period: '2017.03 – 2018.10',
        team: '1명',
        stack: ['C# MVC', 'Entity Framework', 'AngularJS', 'TypeScript', 'MSSQL'],
        detail:
          'BRK, RPN, Voucher, EPRO, ecoPayz 등 해외 결제 모듈을 연동했습니다. 영문 API 가이드를 분석하고, 이슈가 생기면 해외 개발자와 직접 소통해 해결했습니다.',
      },
      {
        name: 'Cashier Monitoring',
        period: '2018.06',
        team: '1명',
        stack: ['Elasticsearch', 'Logstash', 'Kibana', 'C# MVC'],
        detail: 'ELK Stack을 구축하고 Lucene Query 작성과 Kibana 튜닝으로 결제 모니터링 환경을 만들었습니다.',
      },
    ],
  },
  {
    company: 'Securesoft',
    period: '2016.07 – 2017.02',
    duration: '8개월',
    role: '개발팀 · 팀장',
    about: '일본계 보안 네트워크 기업',
    summary: '네트워크 보안 관리자 페이지 개발·운영 및 신규 프로젝트 팀장',
    projects: [
      {
        name: 'Mamoret Control Center (MCR)',
        period: '2016.07 – 2017.02',
        team: '2명',
        stack: ['C# MVC', 'WCF', 'NHibernate'],
        detail: 'MVC Framework 기반으로 DB 모델링과 전체 프로젝트 아키텍처를 설계하고, Backend·Frontend를 개발했습니다.',
      },
      {
        name: 'I-Desk Control Center (SCC)',
        period: '2016.07 – 2016.10',
        team: '1명',
        stack: ['C# MVC', 'PostgreSQL', 'NHibernate'],
        detail:
          'MSSQL 기반 프로젝트를 PostgreSQL로 전환했습니다. Stored Procedure를 PostgreSQL Function으로 변환하고, 고객사 요청에 따른 Frontend 기능과 UI를 개선했습니다.',
      },
    ],
  },
  {
    company: 'Chemessen',
    period: '2016.02 – 2016.06',
    duration: '5개월',
    role: '개발팀 · 과장',
    about: '화학 정보 사이트 및 화학 SNS 서비스',
    summary: '신규 화학 SNS 아키텍처 설계 및 Backend 개발',
    projects: [
      {
        name: '화학 계열 SNS (chemtopia)',
        period: '2016.02 – 2016.06',
        team: '24명',
        stack: ['TypeScript', 'Elasticsearch', 'MongoDB', 'CentOS'],
        detail:
          '화학 정보 4,200만 건을 서비스하는 Elasticsearch 아키텍처와 MongoDB API를 설계하고, 검색 고도화와 부하 대응을 위한 HA를 구성했습니다. Frontend Core 모듈도 TypeScript로 개발했습니다.',
      },
    ],
  },
  {
    company: 'Gmarket · Auction',
    period: '2008.10 – 2016.02',
    duration: '7년 5개월',
    role: '개발팀 · 과장',
    about: '국내 대표 오픈마켓',
    summary: 'Homepage, Category, Search, Event, My Info, Global Gmarket, AD 낙찰, 이미지 호스팅 등 다수 도메인 개발 및 운영',
    projects: [
      {
        name: 'G마켓 · 옥션 주요 서비스',
        period: '2008.10 – 2016.02',
        team: '8명',
        stack: ['ASP.NET MVC', 'jQuery', 'JavaScript', 'ASP'],
        detail:
          '판매자 사이트 ESM PLUS 신규 개발, MyInfo ASP → ASP.NET 리팩토링과 DB 스키마 설계, 이벤트 페이지 개발·운영, Category·Search 검색 엔진 연동, G마켓 메인과 사이트 전반 성능 최적화, 일본 G마켓 전 사이트 개발·운영을 맡았습니다.',
      },
    ],
  },
  {
    company: 'Realtimevisual',
    period: '2007.09 – 2008.10',
    duration: '1년 2개월',
    role: '개발팀 · 사원',
    about: '국방 관련 사업 수행 기업',
    summary: '군 비행 시뮬레이션 프로그램 및 차량 관리 웹 프로그램 개발·운영',
    projects: [
      {
        name: '군 비행 시뮬레이션 프로그램',
        period: '2007.10 – 2008.09',
        team: '5명',
        stack: ['.NET 3.0', 'MFC'],
        detail: '시뮬레이션 결과의 조작·재생 기능을 맡았고, 결과를 XML로 저장해 다른 프로그램에서 재가공할 수 있게 했습니다.',
      },
      {
        name: '현대자동차 차량 웹 관리 프로그램',
        period: '2007.09 – 2007.12',
        team: '1명',
        stack: ['ASP.NET', '.NET 3.0'],
        detail: '설치형 차량 관리 프로그램을 웹 버전으로 전환해, 설치 불편과 .NET 미설치 환경 문제를 해소했습니다.',
      },
    ],
  },
  {
    company: 'Nuvo (Japan)',
    period: '2006.12 – 2007.09',
    duration: '10개월',
    role: '파견개발팀 · 사원',
    about: '일본 SI 기업',
    summary: '고객사 사내 인트라넷 직원 관리 및 매출 내역 Excel 출력 기능 개발',
    projects: [
      {
        name: '고객사 사내 인트라넷',
        period: '2007.01 – 2007.08',
        team: '2명',
        stack: ['Java', 'JSP', 'Struts', 'Spring'],
        detail: 'Spring과 Struts를 혼합한 고객사 자체 프레임워크에서 직원 리스트 관리 페이지와 매출 내역 Excel 저장 기능을 개발했습니다.',
      },
    ],
  },
]

export const skillGroups = [
  { name: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'AngularJS', 'jQuery', 'HTML/CSS'] },
  { name: 'Backend', items: ['C#', 'ASP.NET MVC', 'Entity Framework', 'NHibernate', 'WCF', 'Java', 'Spring'] },
  { name: 'Data & Search', items: ['Elasticsearch', 'Logstash', 'Kibana', 'MongoDB', 'MSSQL', 'PostgreSQL'] },
  { name: 'Collaboration', items: ['Git', 'SVN', 'Jira', 'Confluence', 'Redmine', 'Agile'] },
]

export const education = [
  { period: '1999.03 – 2006.02', name: '대진대학교', detail: '컴퓨터공학과 졸업' },
]

export const certifications = [
  { name: '정보처리기사', issuer: '한국산업인력공단', date: '2004.08' },
  { name: '사무자동화산업기사', issuer: '한국산업인력공단', date: '2004.04' },
  { name: '컴퓨터그래픽스운용기능사', issuer: '한국산업인력공단', date: '2002.12' },
  { name: '워드프로세서 1급', issuer: '대한상공회의소', date: '2002.12' },
  { name: 'GTQ · GTQi · GTQid', issuer: '한국생산성본부', date: '2023.11' },
]

export const languages = [
  { name: '일본어', level: '일상 회화', score: 3 },
  { name: '영어', level: '기초', score: 1 },
]

export const trainings = [
  { period: '2018.11 – 2018.12', name: '스프링 프레임워크 & 마이바티스 실무 활용' },
  { period: '2018.04 – 2018.05', name: '파이썬(Python) 프로그래밍', org: '한국소프트웨어인재개발원' },
  { period: '2018.01', name: 'TypeScript & Angular 향상과정', org: '한국소프트웨어인재개발원' },
  { period: '2012.10 – 2013.11', name: '.NET MVC', org: '삼성멀티캠퍼스' },
  { period: '2006.06 – 2007.04', name: 'JAVA 과정', org: '중앙일보ITEA' },
]

export const philosophy = [
  '나무보다 숲을 보려 했고, 서비스와 사람에 집중하며 유관 부서와의 협업에 힘써 왔습니다.',
  '고인 물에 안주하지 않고, 흐르는 물처럼 늘 새로운 기술과 환경에 부딪히며 성장합니다.',
]

export const designSystem = {
  name: 'module-design-system',
  summary:
    'React 프로젝트에 바로 붙여 쓰는 컴포넌트 디자인 시스템입니다. 디자인 토큰 하나로 브랜드와 다크 테마를 바꾸고, Storybook에서 모든 컴포넌트를 직접 조작해 볼 수 있습니다.',
  storybook: 'https://module-design-system.vercel.app',
  repo: 'https://github.com/mixbyme/module-design-system',
  points: [
    { icon: 'palette', title: '디자인 토큰', desc: '색·간격·모서리를 CSS 변수로 분리해, 변수만 바꾸면 브랜드 테마와 다크 모드가 적용됩니다.' },
    { icon: 'a11y', title: '접근성 기본 탑재', desc: '키보드 조작, 포커스 관리, ARIA 속성을 모든 컴포넌트에 기본으로 넣었습니다.' },
    { icon: 'package', title: '의존성 없는 경량 번들', desc: 'React 외 런타임 라이브러리 없이 JS 18KB, CSS 16KB로 빌드됩니다.' },
    { icon: 'puzzle', title: '확장 가능한 API', desc: '조합형 컴포넌트, render 함수, className·ref 전달로 프로젝트에 맞게 확장합니다.' },
  ],
  components: [
    { name: 'Calendar', image: '/projects/design-system/calendar.png', desc: '날짜·기간 선택, 키보드 이동, 일정 표시' },
    { name: 'Table', image: '/projects/design-system/table.png', desc: '정렬, 행 선택, 셀 직접 그리기' },
    { name: 'MessageBox', image: '/projects/design-system/messagebox.png', desc: '확인/취소 모달, 4가지 톤, 비동기 확인' },
    { name: 'Tabs', image: '/projects/design-system/tabs.png', desc: 'line·pill 모양, 화살표 키 이동' },
    { name: 'Button', image: '/projects/design-system/button.png', desc: '4가지 스타일, 3가지 크기, 로딩' },
    { name: 'Checkbox', image: '/projects/design-system/checkbox.png', desc: '일부 선택 상태, 설명·오류 표시' },
  ],
  tags: ['React 19', 'TypeScript', 'Storybook', 'Design Tokens', 'A11y', 'Vite'],
}
