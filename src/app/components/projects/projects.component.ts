import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../shared/constants/data.constants';
import type { Project } from '../../shared/interfaces';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  protected readonly projects: readonly Project[] = PROJECTS;

  trackByProjectId(index: number, project: Project): string {
    return project.id;
  }

  trackByTech(index: number, tech: string): string {
    return tech;
  }

  startProject(): void {
    const message = `
🚀 **Iniciar Novo Projeto - Digital Labs**

👋 Olá! Vi os projetos no portfólio e gostaria de iniciar meu projeto.

💼 **Sobre meu projeto:**
• Tipo: [Descreva o tipo de projeto]
• Objetivo: [Qual o objetivo principal]
• Prazo: [Prazo desejado]
• Orçamento: [Faixa de investimento]

💬 Vamos conversar sobre como transformar minha ideia em realidade?
    `;
    
    const whatsappUrl = `https://wa.me/5535992669710?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}