import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

interface Guarantee {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

@Component({
  selector: 'app-guarantees',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './guarantees.component.html',
  styleUrls: ['./guarantees.component.scss']
})
export class GuaranteesComponent {
  guarantees: Guarantee[] = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Garantia de Entrega',
      description: 'Seu projeto será entregue no prazo acordado ou você recebe 20% de desconto',
      highlight: '100% Garantido'
    },
    {
      icon: 'fas fa-redo-alt',
      title: 'Revisões Ilimitadas',
      description: 'Fazemos quantas revisões forem necessárias até você ficar 100% satisfeito',
      highlight: 'Sem Limite'
    },
    {
      icon: 'fas fa-headset',
      title: 'Suporte 2 Meses',
      description: 'Suporte técnico gratuito por 2 meses após a entrega do projeto',
      highlight: '2 Meses Grátis'
    },
    {
      icon: 'fas fa-lock',
      title: 'Código Seguro',
      description: 'Seguimos as melhores práticas de segurança e compliance LGPD',
      highlight: 'LGPD Compliant'
    }
  ];

  stats = [
    { number: '10+', label: 'Projetos Entregues', icon: 'fas fa-project-diagram' },
    { number: '98%', label: 'Taxa de Satisfação', icon: 'fas fa-heart' },
    { number: '24h', label: 'Tempo de Resposta', icon: 'fas fa-clock' },
    { number: '2+', label: 'Anos de Experiência', icon: 'fas fa-calendar-alt' }
  ];

  openWhatsApp(): void {
    const message = `
🛡️ **Garantias - Joaz Rodrigues**

👋 Olá Joaz! Vi as garantias no seu site e gostaria de saber mais sobre:

✅ Garantia de entrega no prazo
✅ Revisões ilimitadas
✅ Suporte de 6 meses
✅ Segurança e compliance

Pode me explicar melhor como funciona?
    `;
    
    const whatsappUrl = `https://wa.me/5535992669710?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}