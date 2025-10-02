import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROCESS_STEPS } from '../../shared/constants/data.constants';
import type { ProcessStep } from '../../shared/interfaces';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessComponent {
  protected readonly processSteps: readonly ProcessStep[] = PROCESS_STEPS;

  private readonly stepDetails = {
    1: {
      title: 'Entendendo Sua Ideia',
      details: 'Conversamos para entender suas necessidades, objetivos e como podemos ajudar seu negócio crescer.',
      tools: ['Reunião Online', 'WhatsApp', 'E-mail'],
      deliverables: ['Briefing Detalhado', 'Orçamento Personalizado', 'Cronograma', 'Proposta Comercial']
    },
    2: {
      title: 'Planejamento e Design',
      details: 'Criamos o design e estrutura do seu projeto, sempre com sua aprovação em cada etapa.',
      tools: ['Figma', 'Photoshop', 'Canva'],
      deliverables: ['Layout Visual', 'Protótipo Interativo', 'Estrutura do Sistema', 'Aprovação Final']
    },
    3: {
      title: 'Desenvolvimento',
      details: 'Desenvolvemos seu projeto com atualizações regulares e possibilidade de ajustes durante o processo.',
      tools: ['VS Code', 'Git', 'Angular/React', 'Node.js'],
      deliverables: ['Código do Sistema', 'Testes de Funcionamento', 'Relatórios de Progresso', 'Versão de Testes']
    },
    4: {
      title: 'Entrega e Suporte',
      details: 'Colocamos seu projeto no ar, ensinamos como usar e oferecemos suporte para dúvidas.',
      tools: ['Hospedagem', 'Domínio', 'SSL', 'Backup'],
      deliverables: ['Site/App Online', 'Manual de Uso', 'Treinamento', 'Suporte Pós-Entrega']
    }
  };

  trackByStepId(index: number, step: ProcessStep): number {
    return step.id;
  }

  openStepDetails(stepId: number): void {
    const step = this.stepDetails[stepId as keyof typeof this.stepDetails];
    if (step) {
      const message = `
🚀 **${step.title}**

📋 **O que fazemos:**
${step.details}

🛠️ **Como trabalhamos:**
${step.tools.join(', ')}

📦 **O que você recebe:**
${step.deliverables.map(item => `• ${item}`).join('\n')}

💬 Quer saber mais? Vamos conversar!
      `;
      
      const whatsappUrl = `https://wa.me/5535992669710?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  }
}