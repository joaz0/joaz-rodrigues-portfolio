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
}