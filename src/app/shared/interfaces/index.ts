export interface Technology {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly icon: string;
  readonly category: TechCategory;
}

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly features: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly technologies: readonly string[];
  readonly demoUrl?: string;
  readonly githubUrl?: string;
}

export interface ProcessStep {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface ContactInfo {
  readonly type: ContactType;
  readonly label: string;
  readonly value: string;
  readonly icon: string;
  readonly href?: string;
}

export interface CompanyStats {
  readonly projects: number;
  readonly experience: number;
  readonly satisfaction: number;
}

export type TechCategory = 'frontend' | 'backend' | 'mobile' | 'database' | 'devops';
export type ContactType = 'email' | 'phone' | 'location' | 'social';