import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface QuoteOption {
  id: string;
  name: string;
  basePrice: number;
  features: string[];
}

interface QuoteResult {
  total: number;
  timeline: string;
  features: string[];
  roi: number;
}

@Component({
  selector: 'app-quote-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quote-calculator.component.html',
  styleUrls: ['./quote-calculator.component.scss']
})
export class QuoteCalculatorComponent implements OnInit {
  isOpen = false;
  currentStep = 1;
  totalSteps = 4;

  // Form data
  projectType = '';
  complexity = '';
  features: string[] = [];
  timeline = '';
  budget = '';
  
  // Contact info
  name = '';
  email = '';
  phone = '';
  company = '';

  projectTypes: QuoteOption[] = [
    {
      id: 'website',
      name: 'Website Institucional',
      basePrice: 3500,
      features: ['Design Responsivo', 'SEO Básico', 'Formulário Contato']
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      basePrice: 8500,
      features: ['Carrinho de Compras', 'Gateway Pagamento', 'Painel Admin']
    },
    {
      id: 'webapp',
      name: 'Aplicação Web',
      basePrice: 12000,
      features: ['Dashboard', 'Autenticação', 'API REST']
    },
    {
      id: 'mobile',
      name: 'App Mobile',
      basePrice: 15000,
      features: ['iOS & Android', 'Push Notifications', 'Offline Mode']
    }
  ];

  complexityOptions = [
    { id: 'simple', name: 'Simples', multiplier: 1 },
    { id: 'medium', name: 'Médio', multiplier: 1.5 },
    { id: 'complex', name: 'Complexo', multiplier: 2.2 }
  ];

  additionalFeatures = [
    { id: 'cms', name: 'Sistema de Gerenciamento', price: 2000 },
    { id: 'analytics', name: 'Analytics Avançado', price: 1500 },
    { id: 'chat', name: 'Chat ao Vivo', price: 800 },
    { id: 'multilang', name: 'Multi-idioma', price: 1200 },
    { id: 'api', name: 'Integração APIs', price: 2500 },
    { id: 'security', name: 'Segurança Avançada', price: 1800 }
  ];

  ngOnInit() {}

  openCalculator() {
    this.isOpen = true;
    document.body.classList.add('no-scroll');
  }

  closeCalculator() {
    this.isOpen = false;
    document.body.classList.remove('no-scroll');
    this.resetForm();
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  toggleFeature(featureId: string) {
    const index = this.features.indexOf(featureId);
    if (index > -1) {
      this.features.splice(index, 1);
    } else {
      this.features.push(featureId);
    }
  }

  calculateQuote(): QuoteResult {
    const selectedProject = this.projectTypes.find(p => p.id === this.projectType);
    const selectedComplexity = this.complexityOptions.find(c => c.id === this.complexity);
    
    if (!selectedProject || !selectedComplexity) {
      return { total: 0, timeline: '', features: [], roi: 0 };
    }

    let total = selectedProject.basePrice * selectedComplexity.multiplier;
    
    // Add additional features
    this.features.forEach(featureId => {
      const feature = this.additionalFeatures.find(f => f.id === featureId);
      if (feature) {
        total += feature.price;
      }
    });

    // Calculate timeline
    let timelineWeeks = 4;
    if (this.complexity === 'medium') timelineWeeks = 6;
    if (this.complexity === 'complex') timelineWeeks = 10;
    
    const timeline = `${timelineWeeks} semanas`;
    
    // Calculate ROI (simplified)
    const roi = Math.round(total * 2.5);

    return {
      total: Math.round(total),
      timeline,
      features: [...selectedProject.features, ...this.getSelectedFeatureNames()],
      roi
    };
  }

  getSelectedFeatureNames(): string[] {
    return this.features.map(id => {
      const feature = this.additionalFeatures.find(f => f.id === id);
      return feature ? feature.name : '';
    }).filter(name => name);
  }

  submitQuote() {
    const quote = this.calculateQuote();
    
    // Here you would typically send this data to your backend
    console.log('Quote submitted:', {
      quote,
      contact: {
        name: this.name,
        email: this.email,
        phone: this.phone,
        company: this.company
      },
      projectDetails: {
        type: this.projectType,
        complexity: this.complexity,
        features: this.features,
        timeline: this.timeline,
        budget: this.budget
      }
    });

    // Show success message and close
    alert('Orçamento enviado com sucesso! Entraremos em contato em até 24h.');
    this.closeCalculator();
  }

  resetForm() {
    this.currentStep = 1;
    this.projectType = '';
    this.complexity = '';
    this.features = [];
    this.timeline = '';
    this.budget = '';
    this.name = '';
    this.email = '';
    this.phone = '';
    this.company = '';
  }

  get progressPercentage(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  get canProceed(): boolean {
    switch (this.currentStep) {
      case 1: return !!this.projectType;
      case 2: return !!this.complexity;
      case 3: return !!this.timeline && !!this.budget;
      case 4: return !!this.name && !!this.email;
      default: return false;
    }
  }

  getProjectTypeName(): string {
    const project = this.projectTypes.find(p => p.id === this.projectType);
    return project ? project.name : '';
  }

  getComplexityName(): string {
    const complexity = this.complexityOptions.find(c => c.id === this.complexity);
    return complexity ? complexity.name : '';
  }
}