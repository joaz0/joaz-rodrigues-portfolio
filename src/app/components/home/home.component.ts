<<<<<<< HEAD
import { Component, ChangeDetectionStrategy, inject, ViewChild } from '@angular/core';
import { APP_CONFIG } from '../../shared/constants/app.constants';
import { ScrollService } from '../../services/scroll.service';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { QuoteCalculatorComponent } from '../quote-calculator/quote-calculator.component';
=======
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { APP_CONFIG } from '../../shared/constants/app.constants';
import { ScrollService } from '../../services/scroll.service';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
>>>>>>> 709c3516f05f8d5c31e7c097d66426a2b05650dc

@Component({
  selector: 'app-home',
  standalone: true,
<<<<<<< HEAD
  imports: [ScrollAnimateDirective, QuoteCalculatorComponent],
=======
  imports: [ScrollAnimateDirective],
>>>>>>> 709c3516f05f8d5c31e7c097d66426a2b05650dc
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected readonly companyName = APP_CONFIG.COMPANY_NAME;
  protected readonly tagline = APP_CONFIG.TAGLINE;
  
  private readonly scrollService = inject(ScrollService);
<<<<<<< HEAD
  
  @ViewChild(QuoteCalculatorComponent) quoteCalculator!: QuoteCalculatorComponent;
=======
>>>>>>> 709c3516f05f8d5c31e7c097d66426a2b05650dc

  scrollToAbout(): void {
    this.scrollService.scrollToElement('about');
  }

  scrollToServices(): void {
    this.scrollService.scrollToElement('services');
  }

<<<<<<< HEAD
  openQuoteCalculator(): void {
    this.quoteCalculator.openCalculator();
  }

  scheduleConsultation(): void {
    const message = `
📅 **Consulta Gratuita - Joaz Rodrigues**

👋 Olá Joaz! Vim através do seu site e gostaria de agendar uma consulta gratuita.
=======
  scheduleConsultation(): void {
    const message = `
📅 **Consulta Gratuita - Digital Labs**

👋 Olá! Vim através do site e gostaria de agendar uma consulta gratuita.
>>>>>>> 709c3516f05f8d5c31e7c097d66426a2b05650dc

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
}