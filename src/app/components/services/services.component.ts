import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES } from '../../shared/constants/data.constants';
import type { Service } from '../../shared/interfaces';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
  protected readonly services: readonly Service[] = SERVICES;

  private readonly serviceDetails = {
    frontend: {
      name: 'Desenvolvimento Front-end',
      technologies: ['React', 'Angular', 'Vue.js', 'TypeScript', 'Next.js'],
      deliverables: ['Design System', 'Componentes Reutilizáveis', 'PWA', 'Testes Automatizados', 'Documentação Técnica'],
      timeline: '4-8 semanas',
      price: 'R$ 3.500 - R$ 15.000'
    },
    backend: {
      name: 'Desenvolvimento Back-end',
      technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'Redis'],
      deliverables: ['APIs REST/GraphQL', 'Documentação Swagger', 'Testes Unitários', 'Deploy Automatizado', 'Monitoramento'],
      timeline: '6-12 semanas',
      price: 'R$ 4.500 - R$ 25.000'
    },
    mobile: {
      name: 'Desenvolvimento Mobile',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      deliverables: ['App iOS/Android', 'Push Notifications', 'Analytics', 'App Store Submission', 'Documentação'],
      timeline: '8-16 semanas',
      price: 'R$ 6.500 - R$ 35.000'
    },
    devops: {
      name: 'DevOps & Cloud',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
      deliverables: ['Infraestrutura Cloud', 'CI/CD Pipeline', 'Monitoramento', 'Backup Strategy', 'Documentação'],
      timeline: 'Setup: 2-4 semanas',
      price: 'Setup: R$ 5.000 + R$ 2.500/mês'
    }
  };

  trackByServiceId(index: number, service: Service): string {
    return service.id;
  }

  requestQuote(serviceType: keyof typeof this.serviceDetails): void {
    const service = this.serviceDetails[serviceType];
    if (service) {
      const message = `
🚀 **Solicitação de Orçamento - ${service.name}**

💼 **Serviço:** ${service.name}

🛠️ **Tecnologias:**
${service.technologies.join(', ')}

📦 **Entregáveis:**
${service.deliverables.map(item => `• ${item}`).join('\n')}

⏱️ **Prazo:** ${service.timeline}
💰 **Investimento:** ${service.price}

💬 Gostaria de receber um orçamento personalizado para este serviço!
      `;
      
      const whatsappUrl = `https://wa.me/5535992669710?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  }

  scheduleConsultation(): void {
    const message = `
📅 **Agendamento de Consulta Gratuita**

👋 Olá! Gostaria de agendar uma consulta gratuita para discutir meu projeto.

💬 Podem me ajudar a entender:
• Qual a melhor solução para minha necessidade
• Prazo e investimento necessário
• Processo de desenvolvimento
• Próximos passos

📆 Quando seria possível conversarmos?
    `;
    
    const whatsappUrl = `https://wa.me/5535992669710?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}