import { Directive, ElementRef, OnInit, OnDestroy, Input, inject } from '@angular/core';
import { ScrollAnimationService } from '../services/scroll-animation.service';

@Directive({
  selector: '[scrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input() scrollAnimate: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' = 'fadeInUp';
  
  private elementRef = inject(ElementRef);
  private scrollAnimationService = inject(ScrollAnimationService);

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;
    element.classList.add('scroll-animate', this.scrollAnimate);
    this.scrollAnimationService.observeElement(element);
  }

  ngOnDestroy(): void {
    this.scrollAnimationService.unobserveElement(this.elementRef.nativeElement);
  }
}