/**
 * Service Offering Type Definitions
 * Based on data model specifications for web development services
 * Implements validation rules from requirements analysis
 */

/**
 * Service Offering Entity
 * Represents a web development service offered to clients
 */
export interface ServiceOffering {
  /** Unique identifier for the service */
  id: string;

  /** Service name - 5-50 characters */
  title: string;

  /** Brief service overview - 20-200 characters */
  description: string;

  /** Business value statements - 3-5 items, 10-100 characters each */
  benefits: string[];

  /** Technical features included - 3-8 items, 5-80 characters each */
  features: string[];

  /** Service icon identifier */
  icon: ServiceIcon;

  /** Sort order for display */
  displayOrder: number;

  /** Service category */
  category: ServiceCategory;

  /** Service status */
  status: ServiceStatus;

  /** Estimated duration range */
  duration?: DurationRange;

  /** Starting price information */
  startingPrice?: PriceRange;

  /** Delivery timeline */
  deliveryTimeline?: string;

  /** Prerequisites for the service */
  prerequisites?: string[];

  /** Deliverables included */
  deliverables?: string[];

  /** Technologies typically used */
  technologies?: string[];

  /** Target client types */
  targetClients?: ClientType[];

  /** SEO-friendly slug */
  slug: string;

  /** Long-form service description */
  longDescription?: string;

  /** Frequently asked questions */
  faqs?: ServiceFAQ[];

  /** Service process steps */
  processSteps?: ProcessStep[];
}

/**
 * Service Categories
 */
export type ServiceCategory =
  | 'web-development'
  | 'design'
  | 'consulting'
  | 'maintenance'
  | 'optimization';

/**
 * Service Status
 */
export type ServiceStatus =
  | 'active'
  | 'featured'
  | 'seasonal'
  | 'deprecated'
  | 'coming-soon';

/**
 * Service Icons
 */
export type ServiceIcon =
  | 'code'
  | 'design'
  | 'mobile'
  | 'ecommerce'
  | 'consulting'
  | 'maintenance'
  | 'optimization'
  | 'analytics'
  | 'security'
  | 'custom';

/**
 * Duration Range
 */
export interface DurationRange {
  /** Minimum duration in weeks */
  min: number;
  /** Maximum duration in weeks */
  max: number;
  /** Duration unit */
  unit: 'days' | 'weeks' | 'months';
  /** Notes about duration */
  notes?: string;
}

/**
 * Price Range
 */
export interface PriceRange {
  /** Minimum price */
  min: number;
  /** Maximum price */
  max?: number;
  /** Currency */
  currency: 'EUR' | 'USD';
  /** Price unit */
  unit?: 'project' | 'hour' | 'day' | 'month';
  /** Additional price notes */
  notes?: string;
}

/**
 * Client Types
 */
export type ClientType =
  | 'startup'
  | 'small-business'
  | 'medium-business'
  | 'enterprise'
  | 'agency'
  | 'nonprofit'
  | 'personal';

/**
 * Service FAQ
 */
export interface ServiceFAQ {
  /** Question */
  question: string;
  /** Answer */
  answer: string;
  /** FAQ order */
  order: number;
}

/**
 * Process Step
 */
export interface ProcessStep {
  /** Step number */
  step: number;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** Estimated duration */
  duration?: string;
  /** Deliverables for this step */
  deliverables?: string[];
}

/**
 * Service Package
 * Combination of multiple services
 */
export interface ServicePackage {
  /** Package identifier */
  id: string;
  /** Package name */
  name: string;
  /** Package description */
  description: string;
  /** Included services */
  services: string[]; // Service IDs
  /** Package discount */
  discount?: number;
  /** Package price */
  price?: PriceRange;
  /** Package features */
  features: string[];
  /** Package benefits */
  benefits: string[];
  /** Is featured package */
  featured: boolean;
  /** Package category */
  category: 'landing' | 'standard' | 'custom';
}

/**
 * Service Filter Options
 */
export interface ServiceFilter {
  category?: ServiceCategory[];
  targetClient?: ClientType[];
  priceRange?: {
    min?: number;
    max?: number;
  };
  duration?: DurationRange;
  technology?: string[];
  status?: ServiceStatus[];
}

/**
 * Service Sort Options
 */
export type ServiceSort =
  | 'display-order'
  | 'title-asc'
  | 'title-desc'
  | 'price-asc'
  | 'price-desc'
  | 'duration-asc'
  | 'duration-desc'
  | 'featured-first';

/**
 * Service Display Options
 */
export interface ServiceDisplayOptions {
  filter?: ServiceFilter;
  sort?: ServiceSort;
  limit?: number;
  showFeaturedOnly?: boolean;
  groupByCategory?: boolean;
}

/**
 * Service Validation Rules
 */
export interface ServiceValidationRules {
  title: {
    minLength: 5;
    maxLength: 50;
    required: true;
  };
  description: {
    minLength: 20;
    maxLength: 200;
    required: true;
  };
  benefits: {
    minItems: 3;
    maxItems: 5;
    itemMinLength: 10;
    itemMaxLength: 100;
    required: true;
  };
  features: {
    minItems: 3;
    maxItems: 8;
    itemMinLength: 5;
    itemMaxLength: 80;
    required: true;
  };
}

/**
 * Service Creation Input
 */
export interface CreateServiceInput {
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  icon: ServiceIcon;
  displayOrder?: number;
  category: ServiceCategory;
  status?: ServiceStatus;
  duration?: DurationRange;
  startingPrice?: PriceRange;
  deliveryTimeline?: string;
  prerequisites?: string[];
  deliverables?: string[];
  technologies?: string[];
  targetClients?: ClientType[];
  slug: string;
  longDescription?: string;
  faqs?: ServiceFAQ[];
  processSteps?: ProcessStep[];
}

/**
 * Service Update Input
 */
export interface UpdateServiceInput {
  title?: string;
  description?: string;
  benefits?: string[];
  features?: string[];
  icon?: ServiceIcon;
  displayOrder?: number;
  category?: ServiceCategory;
  status?: ServiceStatus;
  duration?: DurationRange;
  startingPrice?: PriceRange;
  deliveryTimeline?: string;
  prerequisites?: string[];
  deliverables?: string[];
  technologies?: string[];
  targetClients?: ClientType[];
  slug?: string;
  longDescription?: string;
  faqs?: ServiceFAQ[];
  processSteps?: ProcessStep[];
}

/**
 * Service Statistics
 */
export interface ServiceStats {
  totalServices: number;
  activeServices: number;
  featuredServices: number;
  categoriesCount: Record<ServiceCategory, number>;
  averagePrice: number;
  averageDuration: number;
  popularTechnologies: Record<string, number>;
  clientTypesServed: Record<ClientType, number>;
}

/**
 * Service Card Props
 */
export interface ServiceCardProps {
  service: ServiceOffering;
  variant?: 'default' | 'featured' | 'compact';
  showPrice?: boolean;
  showDuration?: boolean;
  showFeatures?: boolean;
  showBenefits?: boolean;
  onClick?: (service: ServiceOffering) => void;
  className?: string;
}

/**
 * Services Grid Props
 */
export interface ServicesGridProps {
  services: ServiceOffering[];
  displayOptions?: ServiceDisplayOptions;
  onServiceSelect?: (service: ServiceOffering) => void;
  loading?: boolean;
  error?: string;
  className?: string;
}

/**
 * Service Detail Props
 */
export interface ServiceDetailProps {
  service: ServiceOffering;
  showRelated?: boolean;
  showProcess?: boolean;
  showFAQs?: boolean;
  onContactClick?: () => void;
  className?: string;
}

/**
 * Type Guards
 */
export function isValidServiceCategory(category: string): category is ServiceCategory {
  return [
    'web-development',
    'design',
    'consulting',
    'maintenance',
    'optimization'
  ].includes(category as ServiceCategory);
}

export function isValidServiceStatus(status: string): status is ServiceStatus {
  return [
    'active',
    'featured',
    'seasonal',
    'deprecated',
    'coming-soon'
  ].includes(status as ServiceStatus);
}

export function isValidClientType(type: string): type is ClientType {
  return [
    'startup',
    'small-business',
    'medium-business',
    'enterprise',
    'agency',
    'nonprofit',
    'personal'
  ].includes(type as ClientType);
}

export function isFeaturedService(service: ServiceOffering): boolean {
  return service.status === 'featured';
}

export function isActiveService(service: ServiceOffering): boolean {
  return ['active', 'featured'].includes(service.status);
}

/**
 * Utility Types
 */
export type ServiceSummary = Pick<
  ServiceOffering,
  'id' | 'title' | 'description' | 'icon' | 'category' | 'status'
>;

export type ServicePreview = Pick<
  ServiceOffering,
  'id' | 'title' | 'description' | 'benefits' | 'icon' | 'startingPrice'
>;

/**
 * Constants
 */
export const SERVICE_VALIDATION_RULES: ServiceValidationRules = {
  title: {
    minLength: 5,
    maxLength: 50,
    required: true,
  },
  description: {
    minLength: 20,
    maxLength: 200,
    required: true,
  },
  benefits: {
    minItems: 3,
    maxItems: 5,
    itemMinLength: 10,
    itemMaxLength: 100,
    required: true,
  },
  features: {
    minItems: 3,
    maxItems: 8,
    itemMinLength: 5,
    itemMaxLength: 80,
    required: true,
  },
} as const;

export const SERVICE_CATEGORIES: Record<ServiceCategory, string> = {
  'web-development': 'Webentwicklung',
  'design': 'Design',
  'consulting': 'Beratung',
  'maintenance': 'Wartung',
  'optimization': 'Optimierung',
} as const;

export const SERVICE_STATUSES: Record<ServiceStatus, string> = {
  'active': 'Aktiv',
  'featured': 'Hervorgehoben',
  'seasonal': 'Saisonal',
  'deprecated': 'Eingestellt',
  'coming-soon': 'Demnächst',
} as const;

export const CLIENT_TYPES: Record<ClientType, string> = {
  'startup': 'Startup',
  'small-business': 'Kleinunternehmen',
  'medium-business': 'Mittelständisches Unternehmen',
  'enterprise': 'Großunternehmen',
  'agency': 'Agentur',
  'nonprofit': 'Gemeinnützige Organisation',
  'personal': 'Privatperson',
} as const;

export const SERVICE_ICONS: Record<ServiceIcon, string> = {
  'code': '💻',
  'design': '🎨',
  'mobile': '📱',
  'ecommerce': '🛒',
  'consulting': '💡',
  'maintenance': '🔧',
  'optimization': '⚡',
  'analytics': '📊',
  'security': '🔒',
  'custom': '⚙️',
} as const;