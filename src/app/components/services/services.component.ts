import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES } from '../../shared/constants/data.constants';
import type { Service } from '../../shared/interfaces';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
  protected readonly services: readonly Service[] = SERVICES;

  trackByServiceId(index: number, service: Service): string {
    return service.id;
  }
}