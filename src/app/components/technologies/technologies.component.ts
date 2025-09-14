import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECHNOLOGIES } from '../../shared/constants/data.constants';
import type { Technology } from '../../shared/interfaces';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologiesComponent {
  protected readonly technologies: readonly Technology[] = TECHNOLOGIES;

  trackByTechId(index: number, tech: Technology): string {
    return tech.id;
  }
}