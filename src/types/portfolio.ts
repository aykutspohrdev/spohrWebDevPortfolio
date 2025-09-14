/**
 * Portfolio Project Type Definitions
 * Based on data model specifications for showcasing client projects
 * Implements validation rules from requirements analysis
 */

/**
 * Portfolio Project Entity
 * Represents a completed client project showcased in the portfolio section
 */
export interface PortfolioProject {
  /** Unique identifier for the project */
  id: string;

  /** Project name - 5-80 characters */
  title: string;

  /** Client company name */
  client: string;

  /** Description of business problem addressed - 50-500 characters */
  problem: string;

  /** Technical/strategic approach taken - 50-500 characters */
  solution: string;

  /** Measurable results achieved - 50-500 characters */
  outcome: string;

  /** Primary project visual URL */
  imageUrl: string;

  /** Additional project images */
  galleryImages?: string[];

  /** Tech stack used in the project */
  technologies?: string[];

  /** Live project URL */
  projectUrl?: string;

  /** Project completion date in ISO format */
  completionDate: string;

  /** Whether to highlight in main portfolio */
  featured: boolean;

  /** Display order for sorting */
  displayOrder: number;

  /** Project category for filtering */
  category?: PortfolioCategory;

  /** Project status */
  status: ProjectStatus;

  /** Project duration in months */
  duration?: number;

  /** Team size involved */
  teamSize?: number;

  /** Brief project description for SEO */
  description?: string;

  /** Project challenges faced */
  challenges?: string[];

  /** Key learnings from the project */
  learnings?: string[];

  /** Metrics and KPIs achieved */
  metrics?: ProjectMetric[];
}

/**
 * Portfolio Categories
 */
export type PortfolioCategory =
  | 'landing-page'
  | 'corporate-website'
  | 'e-commerce'
  | 'web-application'
  | 'mobile-app'
  | 'custom-solution';

/**
 * Project Status
 */
export type ProjectStatus =
  | 'planning'
  | 'in-progress'
  | 'completed'
  | 'showcased'
  | 'archived';

/**
 * Project Metric
 */
export interface ProjectMetric {
  /** Metric name */
  name: string;

  /** Metric value */
  value: string | number;

  /** Metric unit (%, €, users, etc.) */
  unit?: string;

  /** Change from previous state */
  change?: {
    value: number;
    type: 'increase' | 'decrease';
    period?: string;
  };
}

/**
 * Portfolio Filter Options
 */
export interface PortfolioFilter {
  category?: PortfolioCategory[];
  technology?: string[];
  featured?: boolean;
  status?: ProjectStatus[];
  year?: number[];
}

/**
 * Portfolio Sort Options
 */
export type PortfolioSort =
  | 'completion-date-desc'
  | 'completion-date-asc'
  | 'display-order'
  | 'title-asc'
  | 'title-desc'
  | 'featured-first';

/**
 * Portfolio Display Options
 */
export interface PortfolioDisplayOptions {
  filter?: PortfolioFilter;
  sort?: PortfolioSort;
  limit?: number;
  showFeaturedOnly?: boolean;
  groupByCategory?: boolean;
}

/**
 * Portfolio Project Validation Rules
 */
export interface PortfolioValidationRules {
  title: {
    minLength: 5;
    maxLength: 80;
    required: true;
  };
  problem: {
    minLength: 50;
    maxLength: 500;
    required: true;
  };
  solution: {
    minLength: 50;
    maxLength: 500;
    required: true;
  };
  outcome: {
    minLength: 50;
    maxLength: 500;
    required: true;
  };
  imageUrl: {
    required: true;
    format: 'url';
  };
  completionDate: {
    required: true;
    format: 'iso-date';
  };
}

/**
 * Portfolio Project Creation Input
 */
export interface CreatePortfolioProjectInput {
  title: string;
  client: string;
  problem: string;
  solution: string;
  outcome: string;
  imageUrl: string;
  galleryImages?: string[];
  technologies?: string[];
  projectUrl?: string;
  completionDate: string;
  featured?: boolean;
  displayOrder?: number;
  category?: PortfolioCategory;
  duration?: number;
  teamSize?: number;
  description?: string;
  challenges?: string[];
  learnings?: string[];
  metrics?: ProjectMetric[];
}

/**
 * Portfolio Project Update Input
 */
export interface UpdatePortfolioProjectInput {
  title?: string;
  client?: string;
  problem?: string;
  solution?: string;
  outcome?: string;
  imageUrl?: string;
  galleryImages?: string[];
  technologies?: string[];
  projectUrl?: string;
  completionDate?: string;
  featured?: boolean;
  displayOrder?: number;
  category?: PortfolioCategory;
  status?: ProjectStatus;
  duration?: number;
  teamSize?: number;
  description?: string;
  challenges?: string[];
  learnings?: string[];
  metrics?: ProjectMetric[];
}

/**
 * Portfolio Statistics
 */
export interface PortfolioStats {
  totalProjects: number;
  featuredProjects: number;
  categoriesCount: Record<PortfolioCategory, number>;
  technologiesCount: Record<string, number>;
  averageDuration: number;
  completedThisYear: number;
  clientsSatisfactionRate?: number;
}

/**
 * Portfolio Project Card Props
 */
export interface PortfolioProjectCardProps {
  project: PortfolioProject;
  variant?: 'default' | 'featured' | 'compact';
  showTechnologies?: boolean;
  showMetrics?: boolean;
  showClient?: boolean;
  onClick?: (project: PortfolioProject) => void;
  className?: string;
}

/**
 * Portfolio Gallery Props
 */
export interface PortfolioGalleryProps {
  projects: PortfolioProject[];
  displayOptions?: PortfolioDisplayOptions;
  onProjectSelect?: (project: PortfolioProject) => void;
  loading?: boolean;
  error?: string;
  className?: string;
}

/**
 * Portfolio Detail Props
 */
export interface PortfolioDetailProps {
  project: PortfolioProject;
  showRelated?: boolean;
  onClose?: () => void;
  className?: string;
}

/**
 * Type Guards
 */
export function isValidPortfolioCategory(category: string): category is PortfolioCategory {
  return [
    'landing-page',
    'corporate-website',
    'e-commerce',
    'web-application',
    'mobile-app',
    'custom-solution'
  ].includes(category as PortfolioCategory);
}

export function isValidProjectStatus(status: string): status is ProjectStatus {
  return [
    'planning',
    'in-progress',
    'completed',
    'showcased',
    'archived'
  ].includes(status as ProjectStatus);
}

export function isFeaturedProject(project: PortfolioProject): boolean {
  return project.featured === true;
}

export function isCompletedProject(project: PortfolioProject): boolean {
  return ['completed', 'showcased'].includes(project.status);
}

/**
 * Utility Types
 */
export type PortfolioProjectSummary = Pick<
  PortfolioProject,
  'id' | 'title' | 'client' | 'imageUrl' | 'category' | 'featured' | 'completionDate'
>;

export type PortfolioProjectPreview = Pick<
  PortfolioProject,
  'id' | 'title' | 'client' | 'problem' | 'imageUrl' | 'technologies' | 'category'
>;

/**
 * Constants
 */
export const PORTFOLIO_VALIDATION_RULES: PortfolioValidationRules = {
  title: {
    minLength: 5,
    maxLength: 80,
    required: true,
  },
  problem: {
    minLength: 50,
    maxLength: 500,
    required: true,
  },
  solution: {
    minLength: 50,
    maxLength: 500,
    required: true,
  },
  outcome: {
    minLength: 50,
    maxLength: 500,
    required: true,
  },
  imageUrl: {
    required: true,
    format: 'url',
  },
  completionDate: {
    required: true,
    format: 'iso-date',
  },
} as const;

export const PORTFOLIO_CATEGORIES: Record<PortfolioCategory, string> = {
  'landing-page': 'Landing Page',
  'corporate-website': 'Unternehmenswebsite',
  'e-commerce': 'E-Commerce',
  'web-application': 'Webanwendung',
  'mobile-app': 'Mobile App',
  'custom-solution': 'Individuelle Lösung',
} as const;

export const PROJECT_STATUSES: Record<ProjectStatus, string> = {
  'planning': 'In Planung',
  'in-progress': 'In Bearbeitung',
  'completed': 'Abgeschlossen',
  'showcased': 'Präsentiert',
  'archived': 'Archiviert',
} as const;