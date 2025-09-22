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
      title: 'Discovery & Business Analysis',
      details: 'Workshop completo com stakeholders para entender objetivos de negócio, mapear requisitos funcionais e não-funcionais, definir personas e jornadas do usuário.',
      tools: ['Miro', 'Figma', 'Google Analytics', 'Hotjar'],
      deliverables: ['Business Requirements Document', 'User Personas', 'Journey Maps', 'Technical Feasibility Report']
    },
    2: {
      title: 'Architecture & Sprint Planning',
      details: 'Definição da arquitetura de software, escolha do stack tecnológico, modelagem do banco de dados, design de APIs.',
      tools: ['Draw.io', 'Postman', 'Docker', 'AWS/Azure'],
      deliverables: ['System Architecture Diagram', 'Database Schema', 'API Documentation', 'Development Environment']
    },
    3: {
      title: 'Agile Development & QA',
      details: 'Desenvolvimento em sprints com metodologia Scrum, code review obrigatório, testes automatizados e integração contínua.',
      tools: ['Git', 'Jest/Cypress', 'SonarQube', 'Jenkins/GitHub Actions'],
      deliverables: ['Working Software', 'Test Reports', 'Code Quality Metrics', 'Sprint Reviews']
    },
    4: {
      title: 'Production & Support',
      details: 'Deploy em produção com estratégia blue-green, configuração de monitoramento, alertas e backup.',
      tools: ['Kubernetes', 'Prometheus', 'Grafana', 'New Relic'],
      deliverables: ['Production Environment', 'Monitoring Dashboard', 'User Documentation', 'Support Procedures']
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

📋 **Descrição:**
${step.details}

🛠️ **Ferramentas:**
${step.tools.join(', ')}

📦 **Entregáveis:**
${step.deliverables.map(item => `• ${item}`).join('\n')}

💬 Quer saber mais sobre esta etapa? Entre em contato conosco!
      `;
      
      const whatsappUrl = `https://wa.me/5535992669710?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  }
}