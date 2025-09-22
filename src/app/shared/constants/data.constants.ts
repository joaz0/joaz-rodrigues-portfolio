import { Technology, Service, Project, ProcessStep, ContactInfo, CompanyStats } from '../interfaces';

export const COMPANY_STATS: CompanyStats = {
  projects: 50,
  experience: 3,
  satisfaction: 100
} as const;

export const TECHNOLOGIES: readonly Technology[] = [
  {
    id: 'angular',
    name: 'Angular',
    description: 'Framework moderno para aplicações web',
    icon: 'fab fa-angular',
    category: 'frontend'
  },
  {
    id: 'react',
    name: 'React',
    description: 'Biblioteca para interfaces de usuário',
    icon: 'fab fa-react',
    category: 'frontend'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    description: 'Runtime JavaScript para backend',
    icon: 'fab fa-node-js',
    category: 'backend'
  }
] as const;

export const SERVICES: readonly Service[] = [
  {
    id: 'web-dev',
    title: 'Desenvolvimento Web',
    description: 'Criamos sites e aplicações web modernas, responsivas e otimizadas para performance.',
    icon: 'fas fa-code',
    features: ['Responsive Design', 'SEO Otimizado', 'Performance']
  },
  {
    id: 'mobile-dev',
    title: 'Apps Mobile',
    description: 'Desenvolvemos aplicativos nativos e híbridos para iOS e Android.',
    icon: 'fas fa-mobile-alt',
    features: ['iOS & Android', 'React Native', 'Flutter']
  },
  {
    id: 'desktop-dev',
    title: 'Sistemas Desktop',
    description: 'Soluções desktop robustas e eficientes para sua empresa.',
    icon: 'fas fa-desktop',
    features: ['Cross-platform', 'Electron', 'Performance']
  }
] as const;

export const PROJECTS: readonly Project[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com painel administrativo.',
    image: 'fas fa-shopping-cart',
    technologies: ['Angular', 'Node.js']
  },
  {
    id: 'dashboard',
    title: 'Dashboard Analytics',
    description: 'Sistema de análise de dados com gráficos interativos.',
    image: 'fas fa-chart-line',
    technologies: ['React', 'Python']
  },
  {
    id: 'crm',
    title: 'Sistema CRM',
    description: 'Gestão completa de relacionamento com clientes.',
    image: 'fas fa-users',
    technologies: ['Vue.js', 'Laravel']
  }
] as const;

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: 1,
    title: 'Análise',
    description: 'Entendemos suas necessidades e objetivos para criar a melhor solução.',
    icon: 'fas fa-search'
  },
  {
    id: 2,
    title: 'Planejamento',
    description: 'Definimos a arquitetura e tecnologias mais adequadas para o projeto.',
    icon: 'fas fa-clipboard-list'
  },
  {
    id: 3,
    title: 'Desenvolvimento',
    description: 'Codificamos com as melhores práticas e padrões de qualidade.',
    icon: 'fas fa-code'
  },
  {
    id: 4,
    title: 'Entrega',
    description: 'Testamos, otimizamos e entregamos sua solução funcionando perfeitamente.',
    icon: 'fas fa-rocket'
  }
] as const;

export const CONTACT_INFO: readonly ContactInfo[] = [
  {
    type: 'email',
    label: 'Email',
    value: 'contato@digitallabs.com',
    icon: 'fas fa-envelope',
    href: 'mailto:contato@digitallabs.com'
  },
  {
    type: 'phone',
    label: 'Telefone',
    value: '(11) 99999-9999',
    icon: 'fas fa-phone',
    href: 'tel:+5511999999999'
  },
  {
    type: 'location',
    label: 'Localização',
    value: 'São Paulo, SP',
    icon: 'fas fa-map-marker-alt'
  }
] as const;