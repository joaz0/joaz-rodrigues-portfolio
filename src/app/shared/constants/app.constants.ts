export const APP_CONFIG = {
  name: 'Joaz Rodrigues Portfolio',
  version: '1.0.0',
  author: 'Joaz Rodrigues',
  description: 'Desenvolvedor Full-Stack especializado em soluções web, mobile e desktop',
  COMPANY_NAME: 'Joaz Rodrigues',
  TAGLINE: 'Desenvolvedor Full-Stack'
};

export const CONTACT_INFO = {
  whatsapp: '5535992669710',
  email: 'joaz.rodrigues@email.com',
  linkedin: 'https://linkedin.com/in/joaz-rodrigues',
  github: 'https://github.com/joaz0'
};

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${CONTACT_INFO.whatsapp}`,
  email: `mailto:${CONTACT_INFO.email}`,
  linkedin: CONTACT_INFO.linkedin,
  github: CONTACT_INFO.github
};

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' }
];