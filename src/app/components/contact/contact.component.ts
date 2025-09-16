import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONTACT_INFO } from '../../shared/constants/data.constants';
import type { ContactInfo } from '../../shared/interfaces';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollAnimateDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  protected readonly contactInfo: readonly ContactInfo[] = CONTACT_INFO;
  protected readonly contactForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.contactForm = this.createContactForm();
  }

  trackByContactType(index: number, contact: ContactInfo): string {
    return contact.type;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Implementar lógica de envio
      this.sendToWhatsApp();
    }
  }

  private sendToWhatsApp(): void {
    const formData = this.contactForm.value;
    const message = this.formatWhatsAppMessage(formData);
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  private formatWhatsAppMessage(data: any): string {
    return `
🚀 *Nova Solicitação de Orçamento*

👤 *Nome:* ${data.name}
📧 *Email:* ${data.email}
📱 *Telefone:* ${data.phone || 'Não informado'}
🏢 *Empresa:* ${data.company || 'Não informado'}
💼 *Tipo de Projeto:* ${data.projectType}
💰 *Orçamento:* ${data.budget || 'A discutir'}

📝 *Descrição do Projeto:*
${data.message}

---
Enviado via Digital Labs Website
    `.trim();
  }

  scheduleCall(): void {
    const message = `
📞 **Agendamento de Ligação - Digital Labs**

👋 Olá! Gostaria de agendar uma ligação para discutir meu projeto.

📅 **Preferência de horário:**
• Manhã (9h-12h)
• Tarde (14h-17h)
• Noite (19h-21h)

💬 **Assuntos a discutir:**
• Detalhes do projeto
• Cronograma e prazos
• Investimento necessário
• Próximos passos

📆 Qual seria o melhor dia e horário para vocês?
    `;
    
    const whatsappUrl = `https://wa.me/5535992669710?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  private createContactForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      projectType: ['', Validators.required],
      budget: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
}