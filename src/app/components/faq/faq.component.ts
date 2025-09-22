import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimateDirective],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  selectedCategory = 'all';
  searchTerm = '';

  categories = [
    { id: 'all', name: 'Todas', icon: 'fas fa-list' },
    { id: 'pricing', name: 'Preços', icon: 'fas fa-dollar-sign' },
    { id: 'process', name: 'Processo', icon: 'fas fa-cogs' },
    { id: 'technical', name: 'Técnico', icon: 'fas fa-code' },
    { id: 'support', name: 'Suporte', icon: 'fas fa-headset' }
  ];

  faqItems: FAQItem[] = [
    {
      id: 1,
      category: 'pricing',
      question: 'Qual o investimento para desenvolver um site?',
      answer: 'O investimento varia conforme a complexidade do projeto. Sites institucionais começam em R$ 3.500, e-commerce a partir de R$ 8.500, e aplicações web customizadas desde R$ 12.000. Oferecemos orçamento gratuito e detalhado para seu projeto específico.',
      isOpen: false
    },
    {
      id: 2,
      category: 'process',
      question: 'Quanto tempo leva para desenvolver meu projeto?',
      answer: 'O prazo depende da complexidade: sites simples (2-4 semanas), e-commerce (4-6 semanas), aplicações complexas (6-12 semanas). Trabalhamos com metodologia ágil e você acompanha o progresso em tempo real através de nossa plataforma.',
      isOpen: false
    },
    {
      id: 3,
      category: 'technical',
      question: 'Quais tecnologias vocês utilizam?',
      answer: 'Utilizamos tecnologias modernas e consolidadas: React, Angular, Vue.js no front-end; Node.js, Python, Java no back-end; AWS, Azure, Google Cloud para infraestrutura. Sempre escolhemos a melhor stack para cada projeto específico.',
      isOpen: false
    },
    {
      id: 4,
      category: 'support',
      question: 'Vocês oferecem suporte após a entrega?',
      answer: 'Sim! Oferecemos 6 meses de suporte técnico gratuito, incluindo correções de bugs, pequenos ajustes e orientações. Também temos planos de manutenção mensal para atualizações contínuas e melhorias.',
      isOpen: false
    },
    {
      id: 5,
      category: 'process',
      question: 'Como funciona o processo de desenvolvimento?',
      answer: 'Seguimos 5 etapas: 1) Descoberta e planejamento, 2) Design e prototipação, 3) Desenvolvimento, 4) Testes e ajustes, 5) Entrega e treinamento. Você participa ativamente de cada fase e recebe atualizações semanais.',
      isOpen: false
    },
    {
      id: 6,
      category: 'pricing',
      question: 'Posso parcelar o pagamento?',
      answer: 'Sim! Oferecemos parcelamento em até 12x no cartão ou divisão em etapas do projeto (30% início, 40% desenvolvimento, 30% entrega). Também aceitamos PIX com 5% de desconto à vista.',
      isOpen: false
    },
    {
      id: 7,
      category: 'technical',
      question: 'O site será responsivo e otimizado para SEO?',
      answer: 'Absolutamente! Todos os nossos projetos são mobile-first, 100% responsivos e otimizados para SEO. Incluímos estrutura semântica, meta tags, sitemap, schema markup e otimização de performance (Core Web Vitals).',
      isOpen: false
    },
    {
      id: 8,
      category: 'support',
      question: 'Vocês fazem manutenção de sites existentes?',
      answer: 'Sim! Oferecemos serviços de manutenção, atualização e melhorias para sites existentes, independente de quem desenvolveu. Fazemos análise gratuita e proposta personalizada.',
      isOpen: false
    },
    {
      id: 9,
      category: 'process',
      question: 'Preciso fornecer conteúdo e imagens?',
      answer: 'Podemos trabalhar das duas formas: você fornece o conteúdo ou criamos para você. Temos parceria com redatores e fotógrafos profissionais. Também oferecemos banco de imagens premium incluído no projeto.',
      isOpen: false
    },
    {
      id: 10,
      category: 'technical',
      question: 'O site terá painel administrativo?',
      answer: 'Sim! Desenvolvemos CMS personalizado ou utilizamos plataformas como WordPress, dependendo da necessidade. Você terá total autonomia para gerenciar conteúdo, produtos, usuários e relatórios.',
      isOpen: false
    }
  ];

  get filteredFAQs(): FAQItem[] {
    let filtered = this.faqItems;

    // Filter by category
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === this.selectedCategory);
    }

    // Filter by search term
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.question.toLowerCase().includes(term) || 
        item.answer.toLowerCase().includes(term)
      );
    }

    return filtered;
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
    // Close all items when changing category
    this.faqItems.forEach(item => item.isOpen = false);
  }

  toggleFAQ(faqId: number): void {
    const faq = this.faqItems.find(item => item.id === faqId);
    if (faq) {
      faq.isOpen = !faq.isOpen;
    }
  }

  openWhatsApp(): void {
    const message = `
❓ **Dúvidas - Joaz Rodrigues**

👋 Olá Joaz! Tenho algumas dúvidas sobre seus serviços:

🤔 Minha pergunta:
[Descreva sua dúvida aqui]

📋 Tipo de projeto:
[ ] Site institucional
[ ] E-commerce
[ ] Aplicação web
[ ] App mobile
[ ] Outro: ___________

Pode me ajudar?
    `;
    
    const whatsappUrl = `https://wa.me/5535992669710?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}