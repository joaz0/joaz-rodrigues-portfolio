import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { throttleTime, map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new BehaviorSubject<number>(0);
  public scroll$ = this.scrollSubject.asObservable();
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initScrollListener();
  }

  private initScrollListener(): void {
    if (isPlatformBrowser(this.platformId)) {
      fromEvent(window, 'scroll')
        .pipe(
          throttleTime(16), // ~60fps
          map(() => window.pageYOffset),
          distinctUntilChanged()
        )
        .subscribe(scrollY => this.scrollSubject.next(scrollY));
    }
  }

  scrollToElement(elementId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(elementId);
      if (element) {
        const headerHeight = this.getHeaderHeight();
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerHeight - 20; // Extra padding

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  isScrolled(): Observable<boolean> {
    return this.scroll$.pipe(
      map(scrollY => scrollY > 50),
      distinctUntilChanged()
    );
  }

  private getHeaderHeight(): number {
    if (isPlatformBrowser(this.platformId)) {
      const header = document.querySelector('.header') as HTMLElement;
      return header ? header.offsetHeight : 80;
    }
    return 80;
  }

  getCurrentScrollPosition(): number {
    return this.scrollSubject.value;
  }
}