import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  openQuoteCalculator(): void {
    console.log('Abrir calculador de orçamento');
  }

  scheduleConsultation(): void {
    const message = `
🎯 **Consulta Gratuita - Joaz Rodrigues**

👋 Olá! Vim através do site e gostaria de agendar uma consulta gratuita.

💬 Gostaria de discutir:
• Minha ideia/projeto
• Viabilidade técnica
• Prazos e investimento
• Próximos passos

📆 Quando seria possível conversarmos?
    `;
    
    const whatsappUrl = `https://wa.me/5535992669710?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  scrollToAbout(): void {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToServices(): void {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}