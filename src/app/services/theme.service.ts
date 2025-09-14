import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkSubject = new BehaviorSubject<boolean>(false);
  public isDark$ = this.isDarkSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get isDarkTheme(): boolean {
    return this.isDarkSubject.value;
  }

  toggleTheme(): void {
    const newTheme = !this.isDarkSubject.value;
    this.isDarkSubject.next(newTheme);
    this.applyTheme(newTheme);
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('darkTheme', newTheme.toString());
    }
  }

  loadThemePreference(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('darkTheme');
      const isDark = savedTheme === 'true';
      this.isDarkSubject.next(isDark);
      this.applyTheme(isDark);
    }
  }

  private applyTheme(isDark: boolean): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(isDark ? 'dark' : 'light');
    }
  }
}