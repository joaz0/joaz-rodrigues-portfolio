import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
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

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.contactForm = this.createContactForm();
    // Inicializar EmailJS
    emailjs.init('Hl5P3kwBNxOGjTpHL');
  }

  trackByContactType(index: number, contact: ContactInfo): string {
    return contact.type;
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      
      // Enviar automaticamente por WhatsApp e Email
      await this.sendAutomatically(formData);
      
      // Redirecionar para página de agradecimento
      this.router.navigate(['/sucesso'], {
        queryParams: {
          name: formData.name,
          type: 'quote'
        }
      });
    }
  }

  private async sendAutomatically(data: any): Promise<void> {
    // Enviar por WhatsApp (abre automaticamente)
    const message = this.formatWhatsAppMessage(data);
    const whatsappUrl = `https://wa.me/5535992669710?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Enviar por Email (usando EmailJS ou serviço similar)
    await this.sendByEmail(data);
  }
  
  private async sendByEmail(data: any): Promise<void> {
    try {
      const emailData = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Não informado',
        company: data.company || 'Não informado',
        project_type: this.getProjectTypeName(data.projectType),
        budget: this.getBudgetName(data.budget),
        message: data.message
      };
      
      // Email 1: Para VOCÊ (Contact Us)
      await emailjs.send(
        'service_i9k018m',
        'template_oanfdmv',
        emailData,
        'Hl5P3kwBNxOGjTpHL'
      );
      
      // Email 2: Para o CLIENTE (Auto-Reply)
      await emailjs.send(
        'service_i9k018m',
        'template_49xq44n',
        emailData,
        'Hl5P3kwBNxOGjTpHL'
      );
      
      console.log('Emails enviados com sucesso!');
      
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    }
  }
  
  private getProjectTypeName(type: string): string {
    const types: { [key: string]: string } = {
      'website': 'Website Institucional',
      'ecommerce': 'E-commerce',
      'webapp': 'Aplicação Web',
      'mobile': 'App Mobile',
      'system': 'Sistema Personalizado',
      'other': 'Outro'
    };
    return types[type] || type;
  }
  
  private getBudgetName(budget: string): string {
    const budgets: { [key: string]: string } = {
      '5k-10k': 'R$ 5.000 - R$ 10.000',
      '10k-25k': 'R$ 10.000 - R$ 25.000',
      '25k-50k': 'R$ 25.000 - R$ 50.000',
      '50k+': 'Acima de R$ 50.000',
      'discuss': 'Prefiro discutir'
    };
    return budgets[budget] || 'A discutir';
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