export const APP_CONFIG = {
  COMPANY_NAME: 'Digital Labs',
  TAGLINE: 'Soluções em Desenvolvimento',
  DESCRIPTION: 'Especialistas em desenvolvimento web, mobile e desktop. Criamos soluções digitais inovadoras para sua empresa.',
  HEADER_HEIGHT: 80,
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024
} as const;

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', route: '/home' },
  { id: 'technologies', label: 'Tecnologias', route: '/technologies' },
  { id: 'about', label: 'Sobre', route: '/about' },
  { id: 'services', label: 'Serviços', route: '/services' },
  { id: 'projects', label: 'Projetos', route: '/projects' },
  { id: 'process', label: 'Processo', route: '/process' },
  { id: 'contact', label: 'Contato', route: '/contact' }
] as const;

export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500
} as const;