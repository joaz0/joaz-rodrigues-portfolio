import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProcessComponent } from './components/process/process.component';
import { GuaranteesComponent } from './components/guarantees/guarantees.component';
import { FaqComponent } from './components/faq/faq.component';
import { QuoteCalculatorComponent } from './components/quote-calculator/quote-calculator.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    HomeComponent,
    TechnologiesComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    ProcessComponent,
    GuaranteesComponent,
    FaqComponent,
    QuoteCalculatorComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <router-outlet></router-outlet>
    
    <!-- Floating Quote Button -->
    <div class="floating-quote">
      <button (click)="scrollToContact()" class="quote-btn" aria-label="Solicitar Cotação">
        <i class="fas fa-calculator"></i>
        <span>Cotação</span>
      </button>
    </div>
    
    <!-- WhatsApp Float Button -->
    <div class="whatsapp-float">
      <a href="https://wa.me/5535992669710?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." 
         target="_blank" 
         class="whatsapp-btn" 
         aria-label="Falar no WhatsApp">
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Joaz Rodrigues Portfolio';

  constructor(
    private readonly themeService: ThemeService,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.themeService.loadThemePreference();
    }
  }

  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}