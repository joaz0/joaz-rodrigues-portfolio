import { Component, ChangeDetectionStrategy } from '@angular/core';
import { COMPANY_STATS } from '../../shared/constants/data.constants';
import { APP_CONFIG } from '../../shared/constants/app.constants';
import type { CompanyStats } from '../../shared/interfaces';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  protected readonly companyName = APP_CONFIG.COMPANY_NAME;
  protected readonly stats: CompanyStats = COMPANY_STATS;
}