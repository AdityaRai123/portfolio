/**
 * Central portfolio data — built from Aditya's resume, project repositories and certificates.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

/** Public assets are served under Vite's base path (e.g. /portfolio/ on GitHub Pages). */
const base = import.meta.env.BASE_URL;
export const asset = (path: string) => `${base}${path.replace(/^\//, '')}`;

export const profile = {
  fullName: 'Aditya Rai',
  displayName: 'Aditya Rai',
  firstName: 'ADITYA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A RAI ORIGINAL',
  role: 'Full-Stack & AI Developer',
  tagline: ['Full-Stack Developer', 'AI / ML', 'MERN · FastAPI'],
  intro:
    'A B.Tech Information Technology student at VIT Vellore and full-stack developer building multi-agent AI platforms, machine-learning pipelines and MERN web apps with Python, React, Node.js, FastAPI and Docker.',
  location: 'Gurugram, Haryana',
  email: 'adityarai11112005@gmail.com',
  phone: '+91-9257272581',
  links: {
    linkedin: 'https://linkedin.com/in/aditya-rai-324b30275',
    github: 'https://github.com/AdityaRai123',
  },
  resumePdf: asset('assets/Aditya_Rai_Resume.pdf'),
  resumeFileName: 'Aditya_Rai_Resume.pdf',
  portrait: {
    src: asset('assets/portrait-720.webp'),
    srcSet: `${asset('assets/portrait-420.webp')} 420w, ${asset('assets/portrait-720.webp')} 720w, ${asset('assets/portrait-1100.webp')} 1100w`,
    alt: 'Portrait of Aditya Rai',
  },
  interests: ['Multi-Agent AI & RAG', 'Machine Learning', 'Full-Stack Development'],
};

export const education = [
  {
    school: 'Vellore Institute of Technology (VIT)',
    place: 'Vellore, Tamil Nadu',
    degree: 'B.Tech in Information Technology',
    period: '2023 – 2027',
    score: '',
  },
  {
    school: 'RMVM',
    place: 'Gurugram, Haryana',
    degree: 'Class XII (PCM + CS)',
    period: '2023',
    score: 'Score 81%',
  },
  {
    school: 'RMVM',
    place: 'Gurugram, Haryana',
    degree: 'Class X (Best of 5)',
    period: '2021',
    score: 'Score 91.8%',
  },
];

const cert = (file: string) => asset(`assets/certificates/${file}`);

export const experience = [
  {
    company: 'Trayistats AI Technologies Pvt. Ltd.',
    companyUrl: 'https://trayistats.com/',
    role: 'Software Development Intern',
    place: 'Noida, Uttar Pradesh',
    period: 'May 2025 – Jul 2025',
    certificate: cert('trayistats-internship-certificate.png'),
    points: [
      'Built 6+ responsive pages and reusable components for the Trayistats AI Technologies company website using the MERN stack (MySQL, Express.js, React.js, Node.js), working in 2-week Agile sprints.',
      'Integrated 5+ REST API endpoints between the React frontend and Express.js backend to load and update website data dynamically, replacing manual content updates.',
      'Improved the Lighthouse accessibility score from about 75 to 90+ by fixing 5+ accessibility issues such as missing alt text, low color contrast, and unlabeled form fields, and fixed layout issues across mobile, tablet, and desktop screens.',
    ],
  },
];

export const leadership = [
  {
    org: 'Technology and Gaming Club, VIT',
    role: 'Senior Core – Point of Contact (POC)',
    place: 'Vellore, Tamil Nadu',
    period: 'Aug 2024 – Apr 2025',
    points: [
      'Managed club events as the Point of Contact and led TAG Clash and OverClock with a 40-member team, handling budgeting, sponsorships, stakeholder coordination, and tournament scheduling.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'chart' | 'lens';
};

export const projects: Project[] = [
  {
    id: 'agentflow-ai',
    title: 'AgentFlow AI',
    year: '2026',
    genre: 'Multi-Agent AI • RAG • Full-Stack',
    logline: 'A multi-agent market intelligence platform that collects live data from YouTube, Amazon and Reddit, analyses it and writes self-reviewed reports you can question.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'Google Gemini', 'ChromaDB', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    build: [
      'Built a 6-agent LangGraph pipeline with FastAPI and Google Gemini that collects live data from YouTube, Amazon, and Reddit, runs VADER sentiment, TF-IDF keyword, and NMF topic analysis, and generates self-reviewed PDF/DOCX reports.',
      'Implemented RAG with Gemini embeddings in ChromaDB to answer follow-up questions on each report with source citations, rebuilding the index automatically after host restarts.',
      'Deployed on Vercel, Render, and Neon (FastAPI + PostgreSQL, 30 REST endpoints, JWT, RBAC, 215 CI tests); cut server memory by 42% by replacing scikit-learn with NumPy TF-IDF/NMF.',
    ],
    features: [
      '6-agent LangGraph workflow with self-review',
      'Live collection from YouTube, Amazon & Reddit',
      'VADER sentiment, TF-IDF keywords & NMF topics',
      'RAG "Ask AI" chat with source citations',
      'PDF / DOCX report export',
      'JWT auth, RBAC and a one-click demo workspace',
      'Prometheus + Grafana observability',
    ],
    metrics: [
      { value: '6', label: 'cooperating AI agents' },
      { value: '30', label: 'REST endpoints' },
      { value: '215', label: 'CI tests' },
      { value: '42%', label: 'less server memory' },
      { value: '3', label: 'live data sources' },
    ],
    github: 'https://github.com/AdityaRai123/AgentFlow',
    live: 'https://agent-flow-ten-topaz.vercel.app',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'quantpredict',
    title: 'QuantPredict',
    year: '2026',
    genre: 'Machine Learning • Deep Learning • Finance',
    logline: 'A multi-model stock direction prediction system — classical ML, an LSTM and a Vision Transformer combined through ensemble voting, tested on every NIFTY-50 stock.',
    stack: ['Python', 'scikit-learn', 'XGBoost', 'LSTM', 'Vision Transformer', 'pandas', 'NumPy', 'Matplotlib'],
    build: [
      'Developed an end-to-end stock market direction prediction pipeline using historical OHLCV data and 38 engineered features including RSI, MACD, moving averages, Bollinger Bands, ATR, OBV, ADX, rolling statistics, and lag features.',
      'Trained and compared 6 machine learning classifiers including XGBoost, Random Forest, SVM, and KNN, alongside an LSTM sequence model and Vision Transformer for next-day price movement direction prediction.',
      'Implemented weighted-voting ensemble learning with time-aware evaluation and walk-forward validation to combine model predictions while preserving chronological ordering and preventing test-period information leakage.',
    ],
    features: [
      'Engineered technical-indicator feature set',
      '6 ML classifiers + LSTM + Vision Transformer',
      'Majority, soft, F1-weighted, adaptive & stacking votes',
      'Walk-forward validation with leakage checks',
      'Interactive results site for all 49 stocks',
    ],
    metrics: [
      { value: '38', label: 'engineered features' },
      { value: '8', label: 'models compared' },
      { value: '49', label: 'NIFTY-50 stocks tested' },
      { value: '46.5K', label: 'unseen test days' },
      { value: '18', label: 'leakage checks passed' },
    ],
    github: 'https://github.com/AdityaRai123/Quantpredict',
    live: 'https://quantpredict.netlify.app',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'chart',
  },
  {
    id: 'polylearn',
    title: 'PolyLearn',
    year: '2026',
    genre: 'Full-Stack • EdTech • Web App',
    logline: 'A Duolingo-style multi-language learning app with bite-sized lessons, streaks and leaderboards — plus teacher-built tests graded on the server.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Sequelize', 'MySQL / PostgreSQL', 'JWT'],
    build: [
      'Built a multi-language learning web app (Spanish, French, Japanese) with a React (Vite) frontend and an Express + Sequelize API that runs on MySQL, PostgreSQL or SQLite.',
      'Added teacher-set tests with multiple-choice and short-answer questions, draft/publish states, submission analytics and retakes — graded on the server so correct answers never reach the browser early.',
      'Secured the app with JWT authentication, server-side role checks and invite-code teacher sign-up; deployed the frontend on Netlify and the API on Render.',
    ],
    features: [
      'Lessons with instant feedback, XP, streaks, hearts & leaderboard',
      'Teacher test builder (MCQ + short answer)',
      'Server-side grading with question-by-question review',
      'Submission stats and one-click retakes',
      'Light + dark mode, fully responsive',
    ],
    metrics: [
      { value: '3', label: 'languages to learn' },
      { value: '2', label: 'roles — student & teacher' },
      { value: '28', label: 'API routes' },
      { value: '10', label: 'data models' },
    ],
    github: 'https://github.com/AdityaRai123/polylearn',
    live: 'https://poly-learn.netlify.app/auth',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'smart-image-enhancement',
    title: 'Smart Image Enhancer',
    year: '2026',
    genre: 'Computer Vision • AI • Multimedia',
    logline: 'An AI-based adaptive image enhancement assistant that measures what is wrong with a photo, decides which fixes it needs, and explains every choice.',
    stack: ['Python', 'OpenCV', 'NumPy', 'scikit-image', 'Real-ESRGAN', 'PyTorch', 'Streamlit', 'pytest'],
    build: [
      'Built a five-stage pipeline — ingestion, quality analysis, rule-based decision engine, enhancement and evaluation — that measures contrast, blur, noise and resolution for every uploaded image.',
      'Designed a transparent decision engine that picks the minimal set and order of classical operators (contrast stretching, CLAHE, histogram equalisation, denoising, unsharp masking) and explains each choice with the measured value behind it.',
      'Added optional Real-ESRGAN super-resolution for low-resolution inputs and scored results with PSNR / SSIM against no-enhancement and fixed-pipeline baselines; deployed on Streamlit Cloud.',
    ],
    features: [
      'Automatic contrast, blur, noise & resolution analysis',
      'Explainable rule-based enhancement plan',
      'From-scratch histogram equalisation',
      'Optional Real-ESRGAN 4× super-resolution',
      'PSNR / SSIM before-and-after comparison',
    ],
    metrics: [
      { value: '5', label: 'pipeline stages' },
      { value: '4', label: 'quality signals measured' },
      { value: '85', label: 'automated tests' },
      { value: '<1s', label: 'per 512×512 image on CPU' },
    ],
    github: 'https://github.com/AdityaRai123/smart-image-enhancement',
    live: 'https://smart-image-enhancement.streamlit.app',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'lens',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  links?: { label: string; href: string }[];
};

export const achievements: Achievement[] = [
  {
    id: 'hackbattle',
    title: 'Semi-Finalist',
    org: 'HackBattle · IEEE CS, VIT',
    detail: 'Reached the semi-finals among 200+ teams — built and pitched a prototype (Sep 2024).',
    laurel: '200+ Teams',
  },
  {
    id: 'trayistats',
    title: 'Software Dev Intern',
    org: 'Trayistats AI Technologies',
    detail: 'Full-stack MERN internship in Noida — 6+ pages, 5+ REST APIs and a Lighthouse accessibility jump from ~75 to 90+.',
    laurel: 'Industry Debut',
    links: [{ label: 'Internship certificate', href: cert('trayistats-internship-certificate.png') }],
  },
  {
    id: 'mern',
    title: '98% · MERN',
    org: 'Ethnus Codemithra',
    detail: 'MERN Full Stack Certification Program — 98/100 with a perfect 40/40 on the final project, Grade A.',
    laurel: 'Full Stack',
    links: [
      { label: 'Certificate', href: 'https://ethnus-certs.s3.ap-south-1.amazonaws.com/Completion%20of%20the%20MERN%20Full%20Stack%20Certification%20Program/2025-07-12/PLNZXTYY.pdf' },
      { label: 'Scorecard', href: cert('mern-scorecard.png') },
    ],
  },
  {
    id: 'oracle',
    title: '93% · OCI AI',
    org: 'Oracle University',
    detail: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate (Sep 2025).',
    laurel: 'Oracle Certified',
    links: [
      { label: 'Credential', href: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D3F4B6945E36D5723AAED1A6BB46F338D4DF1A6CFB683F7F2C52D480F23BAD1E' },
      { label: 'Certificate', href: cert('oracle-oci-ai-foundations.jpg') },
    ],
  },
  {
    id: 'sql',
    title: '91% · SQL',
    org: 'IBM Skills Network',
    detail: 'SQL and Relational Databases 101 (DB0101EN) on Cognitive Class — 95% on the final exam.',
    laurel: 'IBM Certified',
    links: [
      { label: 'Certificate', href: 'https://courses.cognitiveclass.ai/certificates/2db290159de54b7aaf2cc0cb4fe6cba9' },
      { label: 'Scorecard', href: cert('sql-scorecard.png') },
    ],
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Ethnus', name: 'MERN Full Stack Certification (98%)', link: 'https://ethnus-certs.s3.ap-south-1.amazonaws.com/Completion%20of%20the%20MERN%20Full%20Stack%20Certification%20Program/2025-07-12/PLNZXTYY.pdf' },
  { issuer: 'Ethnus', name: 'MERN Full Stack — Scorecard (98/100)', link: cert('mern-scorecard.png') },
  { issuer: 'Oracle', name: 'OCI 2025 Certified AI Foundations Associate (93%)', link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D3F4B6945E36D5723AAED1A6BB46F338D4DF1A6CFB683F7F2C52D480F23BAD1E' },
  { issuer: 'IBM', name: 'SQL and Relational Databases 101 (91%)', link: 'https://courses.cognitiveclass.ai/certificates/2db290159de54b7aaf2cc0cb4fe6cba9' },
  { issuer: 'IBM', name: 'SQL and Relational Databases 101 — Grade Report', link: cert('sql-scorecard.png') },
  { issuer: 'Trayistats', name: 'Internship Completion Certificate — Full Stack', link: cert('trayistats-internship-certificate.png') },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python & JavaScript lead the way',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js', note: 'Primary' },
      { name: 'C++', mono: 'C+' },
      { name: 'Java', mono: 'Jv' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Frameworks',
    subtitle: 'Full-stack, end to end',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'MERN Stack', mono: 'Me' },
    ],
  },
  {
    id: 'ai',
    title: 'Machine Learning & AI',
    subtitle: 'Models, agents & retrieval',
    skills: [
      { name: 'scikit-learn', mono: 'Sk' },
      { name: 'XGBoost', mono: 'Xg' },
      { name: 'Random Forest', mono: 'Rf' },
      { name: 'SVM', mono: 'Sv' },
      { name: 'KNN', mono: 'Kn' },
      { name: 'LSTM', mono: 'Ls' },
      { name: 'Vision Transformer', mono: 'Vt' },
      { name: 'NLP', mono: 'Nl' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'Google Gemini', mono: 'Gm' },
      { name: 'LangGraph', mono: 'Lg' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Visualization',
    subtitle: 'Wrangle, analyse, show',
    skills: [
      { name: 'pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Matplotlib', mono: 'Mp' },
      { name: 'Plotly', mono: 'Pl' },
      { name: 'Streamlit', mono: 'St' },
      { name: 'yfinance', mono: 'Yf' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational, document & vector',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'ChromaDB', mono: 'Ch' },
    ],
  },
  {
    id: 'devops',
    title: 'Tools & DevOps',
    subtitle: 'Build, test & ship',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'GitHub Actions', mono: 'Ga' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Docker Compose', mono: 'Dc' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Jupyter Notebook', mono: 'Jn' },
      { name: 'Vercel', mono: 'Vc' },
      { name: 'Render', mono: 'Rd' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, internship or certifications.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['AgentFlow AI', 'QuantPredict', 'Smart Image Enhancer'],
  JavaScript: ['PolyLearn', 'Trayistats internship', 'MERN certification (98%)'],
  SQL: ['IBM SQL & Relational Databases 101 (91%)', 'PolyLearn'],
  React: ['AgentFlow AI', 'PolyLearn', 'Trayistats internship'],
  'Node.js': ['PolyLearn', 'Trayistats internship'],
  'Express.js': ['PolyLearn', 'Trayistats internship'],
  FastAPI: ['AgentFlow AI'],
  TypeScript: ['AgentFlow AI'],
  'MERN Stack': ['Ethnus MERN certification (98%)', 'Trayistats internship'],
  'scikit-learn': ['QuantPredict'],
  XGBoost: ['QuantPredict'],
  'Random Forest': ['QuantPredict'],
  SVM: ['QuantPredict'],
  KNN: ['QuantPredict'],
  LSTM: ['QuantPredict'],
  'Vision Transformer': ['QuantPredict'],
  NLP: ['AgentFlow AI — VADER, TF-IDF, NMF'],
  RAG: ['AgentFlow AI'],
  'Google Gemini': ['AgentFlow AI', 'Oracle OCI AI Foundations'],
  LangGraph: ['AgentFlow AI'],
  pandas: ['QuantPredict'],
  NumPy: ['AgentFlow AI', 'QuantPredict', 'Smart Image Enhancer'],
  Matplotlib: ['QuantPredict'],
  Streamlit: ['Smart Image Enhancer'],
  MySQL: ['Trayistats internship', 'PolyLearn'],
  PostgreSQL: ['AgentFlow AI', 'PolyLearn'],
  ChromaDB: ['AgentFlow AI'],
  'GitHub Actions': ['AgentFlow AI — 215 CI tests'],
  Docker: ['AgentFlow AI'],
  'Docker Compose': ['AgentFlow AI'],
  Vercel: ['AgentFlow AI'],
  Render: ['AgentFlow AI', 'PolyLearn'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2023',
    synopsis: 'School years at RMVM, Gurugram — Physics, Chemistry, Mathematics and Computer Science.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Class X at RMVM, Gurugram — finishing with 91.8% (best of 5).',
        tags: ['Class X', '91.8%'],
        runtime: '2021',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'First Lines of Code',
        description: 'Class XII with PCM + Computer Science at RMVM, Gurugram — 81%.',
        tags: ['PCM + CS', '81%'],
        runtime: '2023',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: VIT',
    period: '2023 – Present',
    synopsis: 'B.Tech in Information Technology at Vellore Institute of Technology — and life beyond the classroom.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Information Technology at VIT, Vellore (2023 – 2027).',
        tags: ['B.Tech', 'Information Technology', 'VIT'],
        runtime: '2023 – 2027',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Hackathon',
        description: 'Semi-Finalist at HackBattle by the IEEE CS Chapter, VIT — out of 200+ teams, with a prototype built and pitched.',
        tags: ['HackBattle', 'IEEE CS', '200+ teams'],
        runtime: 'Sep 2024',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Organiser',
        description: 'Senior Core and Point of Contact at the Technology and Gaming Club — led TAG Clash and OverClock with a 40-member team.',
        tags: ['Leadership', 'Budgeting', 'Sponsorships'],
        runtime: 'Aug 2024 – Apr 2025',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'The Internship',
    period: '2025',
    synopsis: 'Software Development Intern at Trayistats AI Technologies, Noida — then certified in full-stack and AI.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Intern',
        description: 'Built 6+ responsive pages and reusable components for the company website with the MERN stack, in 2-week Agile sprints.',
        tags: ['MERN', 'React', 'Agile'],
        runtime: 'May – Jul 2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Integrator',
        description: 'Wired 5+ REST API endpoints between React and Express.js so site content loads and updates dynamically.',
        tags: ['Express.js', 'REST APIs', 'MySQL'],
        runtime: 'Trayistats',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Accessibility Fix',
        description: 'Raised the Lighthouse accessibility score from about 75 to 90+ and fixed layouts across mobile, tablet and desktop.',
        tags: ['Accessibility', 'Responsive'],
        runtime: '75 → 90+',
        palette: jade,
      },
      {
        code: 'S03 E04',
        title: 'The Certified',
        description: 'MERN Full Stack Certification at 98% (Ethnus Codemithra) and Oracle OCI 2025 AI Foundations Associate at 93%.',
        tags: ['MERN 98%', 'Oracle 93%'],
        runtime: 'Jul – Sep 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Four Originals — a multi-agent AI platform, a stock prediction system, a language-learning app and an image enhancer — all live.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Agent Builder',
        description: 'AgentFlow AI — a 6-agent LangGraph pipeline with RAG, 30 REST endpoints and 215 CI tests.',
        tags: ['LangGraph', 'Gemini', 'FastAPI'],
        runtime: 'May 2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Quant',
        description: 'QuantPredict — 8 models and ensemble voting across 49 NIFTY-50 stocks with walk-forward validation.',
        tags: ['XGBoost', 'LSTM', 'ViT'],
        runtime: 'Jun 2026',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'The Teacher',
        description: 'PolyLearn — lessons, streaks and teacher-built tests graded on the server.',
        tags: ['React', 'Express', 'Sequelize'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E04',
        title: 'The Enhancer',
        description: 'Smart Image Enhancer — explainable, adaptive image enhancement with optional Real-ESRGAN.',
        tags: ['OpenCV', 'Real-ESRGAN', 'Streamlit'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Final year at VIT and the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Graduating in 2027 and going deeper into multi-agent AI, machine learning and full-stack engineering.',
        tags: ['AI Agents', 'ML', 'Full-Stack'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Flagship Original', title: 'AgentFlow AI', detail: '6 agents • RAG • 215 CI tests', palette: crimson },
  { label: 'Biggest stage', title: 'HackBattle', detail: 'Semi-Finalist among 200+ teams', palette: ocean },
  { label: 'Top score', title: 'MERN 98%', detail: 'Ethnus Codemithra • Grade A', palette: amber },
  { label: 'Industry debut', title: 'Trayistats AI', detail: 'Software Development Intern', palette: violet },
  { label: 'AI credential', title: 'Oracle OCI AI', detail: 'Foundations Associate • 93%', palette: jade },
  { label: 'Most models', title: 'QuantPredict', detail: '8 models • 49 NIFTY-50 stocks', palette: crimson },
  { label: 'Accessibility', title: '75 → 90+', detail: 'Lighthouse score at Trayistats', palette: ocean },
  { label: 'Leadership', title: 'TAG POC', detail: 'Led a 40-member team at VIT', palette: amber },
  { label: 'Database credential', title: 'IBM SQL 101', detail: 'Cognitive Class • 91%', palette: jade },
  { label: 'Lean engineering', title: '42% Lighter', detail: 'Server memory cut in AgentFlow', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · IT',
    lines: ['Vellore Institute of Technology, Vellore', '2023 – 2027'],
    chips: ['VIT', 'Information Technology'],
  },
  {
    kicker: 'Skills',
    title: 'Full stack + AI.',
    lines: ['Python, JavaScript, C++, Java, SQL · React, Node.js, FastAPI', 'LangGraph, Gemini, RAG · XGBoost, LSTM · Docker, PostgreSQL'],
    chips: ['Python', 'React', 'FastAPI', 'LangGraph', 'Docker', 'PostgreSQL'],
  },
  {
    kicker: 'Experience',
    title: 'The Internship',
    lines: ['Software Development Intern · Trayistats AI Technologies', 'May 2025 – Jul 2025 · Noida', '6+ pages · 5+ REST APIs · Lighthouse 75 → 90+'],
  },
  {
    kicker: 'Projects',
    title: 'Four Originals',
    lines: ['AgentFlow AI — 6 agents, RAG, 215 CI tests', 'QuantPredict — 8 models across 49 stocks', 'PolyLearn — lessons & server-graded tests', 'Smart Image Enhancer — explainable AI enhancement'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Semi-Finalist — HackBattle, IEEE CS VIT (200+ teams)', 'Senior Core & POC — Technology and Gaming Club', 'Led a 40-member team for TAG Clash & OverClock'],
  },
  {
    kicker: 'Certified',
    title: 'Scored high',
    lines: ['MERN Full Stack — 98% · Ethnus Codemithra', 'Oracle OCI AI Foundations — 93% · IBM SQL 101 — 91%'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['Multi-agent AI · Machine Learning · Full-Stack Development'],
  },
];

export type ProfileId = 'aditya' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'aditya',
    name: 'Aditya',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • All live`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
