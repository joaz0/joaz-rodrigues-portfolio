import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollAnimateDirective],
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteFormComponent {
  quoteForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.quoteForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)]],
      projectType: ['', Validators.required],
      budget: [''],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.quoteForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  async onSubmit(): Promise<void> {
    if (this.quoteForm.valid) {
      this.isSubmitting = true;
      
      try {
        const formData = this.quoteForm.value;
        
        // Simular envio (aqui você integraria com seu backend)
        await this.sendQuoteRequest(formData);
        
        // Mostrar mensagem de sucesso e scroll para topo
        alert(`Obrigado, ${formData.name}! Sua cotação foi enviada com sucesso. Entraremos em contato em até 24h.`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error('Erro ao enviar cotação:', error);
        alert('Erro ao enviar cotação. Tente novamente.');
      } finally {
        this.isSubmitting = false;
      }
    } else {
      // Marcar todos os campos como touched para mostrar erros
      Object.keys(this.quoteForm.controls).forEach(key => {
        this.quoteForm.get(key)?.markAsTouched();
      });
    }
  }

  private async sendQuoteRequest(data: any): Promise<void> {
    // Simular delay de envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Aqui você faria a integração real com seu backend
    console.log('Dados da cotação:', data);
    
    // Opcional: Enviar via WhatsApp
    const message = this.formatWhatsAppMessage(data);
    const whatsappUrl = `https://wa.me/5535992669710?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  private formatWhatsAppMessage(data: any): string {
    return `
🎯 *Nova Solicitação de Cotação*

👤 *Cliente:* ${data.name}
📧 *E-mail:* ${data.email}
📱 *WhatsApp:* ${data.phone}

🚀 *Projeto:* ${this.getProjectTypeName(data.projectType)}
💰 *Orçamento:* ${data.budget || 'Não informado'}

📝 *Descrição:*
${data.description}

---
Enviado pelo site Digital Labs
    `.trim();
  }

  private getProjectTypeName(type: string): string {
    const types: { [key: string]: string } = {
      'website': 'Site Institucional',
      'ecommerce': 'Loja Virtual',
      'app': 'Aplicativo Mobile',
      'system': 'Sistema Web',
      'other': 'Outro'
    };
    return types[type] || type;
  }
}