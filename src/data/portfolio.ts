import { Project, StackLayer, StatItem, ChannelItem } from '@/types';

export const PERSONAL_INFO = {
  name: 'Renaldi',
  title: 'Full-Stack Engineer & UI/UX Designer',
  email: 'itcode.ren@gmail.com',
  location: 'Indonesia — Worldwide',
  whatsappUrl:
    'https://api.whatsapp.com/send/?phone=6281299627757&text=Hi%20Renaldi,%20I%20visited%20your%20portfolio%20website%20and%20would%20love%20to%20discuss%20a%20project!',
  instagramUrl: 'https://www.instagram.com/renaldi_smmra/',
  cvRequestEmail:
    'mailto:itcode.ren@gmail.com?subject=Request%20Curriculum%20Vitae%20-%20Renaldi',
  hero: {
    headline: 'I design the interface\n& write the code.',
    subheadline:
      'Full-stack engineer with a UI/UX eye — helping businesses solve problems and tell their story through scalable web architecture, mobile applications, and minimalist interface design.',
    disciplines: [
      'Full-Stack Web',
      'Mobile Apps',
      'UI/UX & Product Design',
    ],
  },
  about: {
    statement:
      "I'm a Full-stack Engineer who bridges thoughtful UI design with scalable engineering.",
    paragraphs: [
      'My name is Renaldi. Based in Indonesia, I specialize in crafting intuitive UI/UX design, modern web development, and cross-platform mobile applications. I have partnered with businesses and startups to design and engineer web & mobile products that accelerate their growth.',
      'I am deeply passionate about technology and continuous learning — superficial knowledge is never enough for me. With strong product thinking, attention to detail, and collaborative teamwork, I am ready to bring your next digital vision to life.',
    ],
  },
};

export const STATS: StatItem[] = [
  {
    value: '3',
    label: 'Disciplines — design, web & mobile',
  },
  {
    value: '7',
    label: 'Selected client & product works',
  },
  {
    value: '32',
    label: 'Languages, frameworks & tools in my stack',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'raya-tour',
    number: '01',
    title: 'Raya Tour Travel',
    category: 'web',
    categoryLabel: '01 / Web Development',
    description:
      'A travel tour & ticket booking company. After analyzing their business process and goals, I designed custom creative web visuals, built a responsive interactive frontend, and engineered a Laravel backend integrated with a seamless payment gateway for effortless transactions.',
    image: '/images/project-1.jpg',
    tags: ['Laravel', 'Payment Gateway', 'UI/UX Design', 'Bootstrap'],
    link: 'https://renaldi99.github.io/raya-tour.github.io/',
    featured: true,
  },
  {
    id: 'digital-workplace',
    number: '02',
    title: 'Digital Workplace (DWP)',
    category: 'web',
    categoryLabel: '02 / Enterprise Web Platform',
    description:
      'Web-based collaboration platform for Central Bank of Indonesia, used to jointly draft and finalize official documents from senior-level policy meetings and to schedule meeting agendas and events.',
    image: '/images/dwp.png',
    tags: ['.NET 10', 'Vue.js', 'Redis', 'C#', 'Typescript'],
    featured: false,
  },
  {
    id: 'superapp',
    number: '02',
    title: 'Super App (BISA)',
    category: 'web',
    categoryLabel: '02 / Enterprise Web Platform',
    description:
      'Unified enterprise portal providing single sign-on and role-based access to the organization’s internal applications.',
    image: '/images/login-superapp.png',
    tags: ['.NET 10', 'Vue.js', 'Redis', 'C#', 'Typescript'],
    featured: false,
  },
  {
    id: 'hrm',
    number: '02',
    title: 'Human Resource Management (HRM)',
    category: 'web',
    categoryLabel: '02 / Enterprise Web Platform',
    description:
      'Enterprise HR microservices platform with promotion management and employee placement optimization.',
    image: '/images/hrm.png',
    tags: ['.NET 10', 'Vue.js', 'Redis', 'C#', 'Typescript'],
    featured: false,
  },
  {
    id: 'unlabs-store',
    number: '03',
    title: 'Unlabs Store',
    category: 'web',
    categoryLabel: '03 / Web Development',
    description:
      'Interior & furniture e-commerce with a room-based catalog, interactive product carousels and a seamless cart flow.',
    image: '/images/unlabs.png',
    tags: ['E-Commerce', 'Tailwind CSS', 'JavaScript'],
    link: 'https://unlabs-store.netlify.app/',
    featured: false,
  },
  {
    id: 'audix-app',
    number: '04',
    title: 'Audix',
    category: 'mobile',
    categoryLabel: '04 / Mobile & UI/UX',
    description:
      'Audio shopping app with sleek visuals, gesture navigation and micro-interactions for seamless discovery.',
    image: '/images/project-2.jpg',
    tags: ['Mobile App', 'Figma', 'Adobe XD'],
    featured: false,
  },
  {
    id: 'executive-portfolio',
    number: '05',
    title: 'Executive Portfolio',
    category: 'landing',
    categoryLabel: '05 / Landing Page',
    description:
      'Personal branding site for a client — complete visual language designed from scratch, built clean & fast.',
    image: '/images/project-3.jpg',
    tags: ['HTML5', 'SASS', 'JavaScript'],
    featured: false,
  },
];

export const STACK_LAYERS: StackLayer[] = [
  {
    number: '01',
    title: 'Backend',
    subtitle: 'APIs, services & business logic',
    color: '#FF6308',
    colorVar: 'var(--c-backend)',
    count: '07',
    tools: [
      'C#',
      '.NET Core',
      '.NET Framework',
      'Java',
      'Spring Boot',
      'Go',
      'Laravel',
    ],
    flexRatio: 7,
  },
  {
    number: '02',
    title: 'Frontend',
    subtitle: 'Web interfaces & components',
    color: '#A689FA',
    colorVar: 'var(--c-frontend)',
    count: '09',
    tools: [
      'React',
      'Next.js',
      'Blazor',
      'Razor Pages',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Sass',
      'Tailwind CSS',
    ],
    flexRatio: 9,
  },
  {
    number: '03',
    title: 'Database',
    subtitle: 'Relational, cache & search',
    color: '#9CB8DD',
    colorVar: 'var(--c-database)',
    count: '06',
    tools: [
      'SQL Server',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Redis',
      'Elasticsearch',
    ],
    flexRatio: 6,
  },
  {
    number: '04',
    title: 'DevOps',
    subtitle: 'Delivery & observability',
    color: '#4ADE80',
    colorVar: 'var(--c-devops)',
    count: '08',
    tools: [
      'Docker',
      'Jenkins',
      'GitLab CI',
      'Git',
      'Prometheus',
      'Grafana',
      'Datadog',
      'Kibana',
    ],
    flexRatio: 8,
  },
  {
    number: '05',
    title: 'Design',
    subtitle: 'Interface & prototyping',
    color: '#FFD085',
    colorVar: 'var(--c-design)',
    count: '02',
    tools: ['Figma', 'Adobe XD'],
    flexRatio: 2,
  },
];

export const CHANNELS: ChannelItem[] = [
  {
    id: 'email',
    number: '01',
    title: 'Email',
    handle: 'itcode.ren@gmail.com',
    sub: 'Drop an inquiry',
    href: 'mailto:itcode.ren@gmail.com',
    icon: 'mail',
  },
  {
    id: 'whatsapp',
    number: '02',
    title: 'WhatsApp',
    handle: '+62 812-9962-7757',
    sub: 'Fast direct response',
    href: 'https://api.whatsapp.com/send/?phone=6281299627757',
    icon: 'whatsapp',
  },
  {
    id: 'instagram',
    number: '03',
    title: 'Instagram',
    handle: '@renaldi_smmra',
    sub: 'Connect & follow',
    href: 'https://www.instagram.com/renaldi_smmra/',
    icon: 'instagram',
  },
];

