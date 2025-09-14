import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { APP_CONFIG } from '../../shared/constants/app.constants';
import { ScrollService } from '../../services/scroll.service';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected readonly companyName = APP_CONFIG.COMPANY_NAME;
  protected readonly tagline = APP_CONFIG.TAGLINE;
  
  private readonly scrollService = inject(ScrollService);

  scrollToAbout(): void {
    this.scrollService.scrollToElement('about');
  }
}