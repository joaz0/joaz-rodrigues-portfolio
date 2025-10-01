import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProcessComponent } from './components/process/process.component';
<<<<<<< HEAD
import { GuaranteesComponent } from './components/guarantees/guarantees.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';
=======
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';
// Correção: importação correta do environment
import { environment } from '../environments/environment';
>>>>>>> 709c3516f05f8d5c31e7c097d66426a2b05650dc

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    TechnologiesComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    ProcessComponent,
<<<<<<< HEAD
    GuaranteesComponent,
    FaqComponent,
=======
>>>>>>> 709c3516f05f8d5c31e7c097d66426a2b05650dc
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-home></app-home>
      <app-technologies></app-technologies>
      <app-about></app-about>
      <app-services></app-services>
      <app-projects></app-projects>
      <app-process></app-process>
<<<<<<< HEAD
      <app-guarantees></app-guarantees>
      <app-faq></app-faq>
=======
>>>>>>> 709c3516f05f8d5c31e7c097d66426a2b05650dc
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  
<<<<<<< HEAD
  <!-- WhatsApp Float Button -->
  <div class="whatsapp-float">
    <a href="https://wa.me/5535992669710?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." 
       target="_blank" 
       class="whatsapp-btn" 
       aria-label="Falar no WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>
  </div>
=======
    <!-- WhatsApp Float Button -->
    <div class="whatsapp-float">
      <a href="https://wa.me/5535992669710?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." 
         target="_blank" 
         class="whatsapp-btn" 
         aria-label="Falar no WhatsApp">
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
>>>>>>> 709c3516f05f8d5c31e7c097d66426a2b05650dc
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Digital Labs';

  constructor(
    private readonly themeService: ThemeService,
    @Inject(PLATFORM_ID) private readonly platformId: Object
<<<<<<< HEAD
  ) {}
=======
  ) {
    // Usando o environment para debug ou configurações
    if (environment.production) {
      console.log('Rodando em modo produção');
    } else {
      console.log('Rodando em modo desenvolvimento');
    }
  }
>>>>>>> 709c3516f05f8d5c31e7c097d66426a2b05650dc

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.themeService.loadThemePreference();
    }
  }
}