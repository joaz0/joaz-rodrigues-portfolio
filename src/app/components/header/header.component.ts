import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, HostBinding, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from '../../services/scroll.service';
import { NAVIGATION_ITEMS } from '../../shared/constants/app.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  protected readonly navigationItems = NAVIGATION_ITEMS;
  protected isMenuOpen = false;
  
  @HostBinding('class.scrolled') isScrolled = false;
  
  private readonly destroy$ = new Subject<void>();

  protected readonly themeService = inject(ThemeService);
  private readonly scrollService = inject(ScrollService);

  constructor() {}

  ngOnInit(): void {
    this.scrollService.isScrolled()
      .pipe(takeUntil(this.destroy$))
      .subscribe(scrolled => {
        this.isScrolled = scrolled;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    
    // Prevent body scroll when menu is open on mobile
    if (typeof document !== 'undefined') {
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }
  }

  scrollTo(section: string): void {
    this.scrollService.scrollToElement(section);
    this.closeMenu();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  trackByNavId(index: number, item: any): string {
    return item.id;
  }

  private closeMenu(): void {
    this.isMenuOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}