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

  trackByStepId(index: number, step: ProcessStep): number {
    return step.id;
  }
}