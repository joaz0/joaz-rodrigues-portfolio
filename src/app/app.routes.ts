import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent)
  },
  { 
    path: 'home', 
    loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent)
  },
  { 
    path: 'cotacao', 
    loadComponent: () => import('./components/quote-form/quote-form.component').then(m => m.QuoteFormComponent)
  },
  { 
    path: 'obrigado', 
    loadComponent: () => import('./components/thank-you/thank-you.component').then(m => m.ThankYouComponent)
  },
  { path: '**', redirectTo: '/' }
];