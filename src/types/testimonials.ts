/**
 * Client Testimonial Type Definitions
 * Based on data model specifications for client feedback and trust building
 * Implements validation rules from requirements analysis
 */

/**
 * Client Testimonial Entity
 * Represents feedback from previous clients for trust building
 */
export interface ClientTestimonial {
  /** Unique identifier for the testimonial */
  id: string;

  /** Client testimonial text - 50-300 characters */
  quote: string;

  /** Person providing testimonial - 2-50 characters */
  clientName: string;

  /** Client's company name - 2-100 characters */
  company: string;

  /** Client's job title */
  position?: string;

  /** Related project name */
  projectTitle?: string;

  /** Related project ID for linking */
  projectId?: string;

  /** Client headshot URL */
  clientPhoto?: string;

  /** Company logo URL */
  companyLogo?: string;

  /** Whether to highlight testimonial */
  featured: boolean;

  /** Display order for sorting */
  displayOrder: number;

  /** Testimonial status */
  status: TestimonialStatus;

  /** Date testimonial was given */
  dateGiven: string;

  /** Rating given by client (1-5 stars) */
  rating?: TestimonialRating;

  /** Testimonial category */
  category: TestimonialCategory;

  /** Service area testimonial relates to */
  serviceArea?: ServiceArea[];

  /** Industry of the client */
  industry?: Industry;

  /** Project outcome metrics mentioned */
  metrics?: TestimonialMetric[];

  /** Long form testimonial */
  fullTestimonial?: string;

  /** Client location */
  location?: string;

  /** Client's website */
  clientWebsite?: string;

  /** Testimonial language */
  language: 'de' | 'en';

  /** Permission to use name/company */
  hasPermission: boolean;

  /** Source of testimonial */
  source: TestimonialSource;

  /** Tags for filtering */
  tags?: string[];
}

/**
 * Testimonial Status
 */
export type TestimonialStatus =
  | 'pending'
  | 'approved'
  | 'featured'
  | 'archived'
  | 'rejected';

/**
 * Testimonial Rating
 */
export type TestimonialRating = 1 | 2 | 3 | 4 | 5;

/**
 * Testimonial Category
 */
export type TestimonialCategory =
  | 'project-completion'
  | 'service-quality'
  | 'communication'
  | 'technical-expertise'
  | 'results-achieved'
  | 'overall-experience';

/**
 * Service Areas
 */
export type ServiceArea =
  | 'web-development'
  | 'web-design'
  | 'e-commerce'
  | 'mobile-development'
  | 'consulting'
  | 'maintenance'
  | 'seo-optimization';

/**
 * Industries
 */
export type Industry =
  | 'technology'
  | 'healthcare'
  | 'finance'
  | 'education'
  | 'retail'
  | 'manufacturing'
  | 'real-estate'
  | 'hospitality'
  | 'nonprofit'
  | 'other';

/**
 * Testimonial Source
 */
export type TestimonialSource =
  | 'direct-feedback'
  | 'email'
  | 'survey'
  | 'interview'
  | 'review-platform'
  | 'social-media';

/**
 * Testimonial Metric
 */
export interface TestimonialMetric {
  /** Metric name */
  name: string;
  /** Metric value */
  value: string | number;
  /** Improvement indicator */
  improvement?: {
    type: 'increase' | 'decrease';
    amount: string;
  };
}

/**
 * Testimonial Collection
 */
export interface TestimonialCollection {
  /** Collection name */
  name: string;
  /** Collection description */
  description: string;
  /** Testimonials in collection */
  testimonials: ClientTestimonial[];
  /** Collection theme/focus */
  theme: TestimonialCategory;
  /** Is featured collection */
  featured: boolean;
}

/**
 * Testimonial Filter Options
 */
export interface TestimonialFilter {
  category?: TestimonialCategory[];
  serviceArea?: ServiceArea[];
  industry?: Industry[];
  rating?: TestimonialRating[];
  status?: TestimonialStatus[];
  featured?: boolean;
  hasPhoto?: boolean;
  hasLogo?: boolean;
  language?: ('de' | 'en')[];
  tags?: string[];
}

/**
 * Testimonial Sort Options
 */
export type TestimonialSort =
  | 'date-desc'
  | 'date-asc'
  | 'rating-desc'
  | 'rating-asc'
  | 'display-order'
  | 'client-name'
  | 'company-name'
  | 'featured-first';

/**
 * Testimonial Display Options
 */
export interface TestimonialDisplayOptions {
  filter?: TestimonialFilter;
  sort?: TestimonialSort;
  limit?: number;
  showFeaturedOnly?: boolean;
  groupByCategory?: boolean;
  showRatings?: boolean;
  showPhotos?: boolean;
  showLogos?: boolean;
  showMetrics?: boolean;
}

/**
 * Testimonial Validation Rules
 */
export interface TestimonialValidationRules {
  quote: {
    minLength: 50;
    maxLength: 300;
    required: true;
  };
  clientName: {
    minLength: 2;
    maxLength: 50;
    required: true;
  };
  company: {
    minLength: 2;
    maxLength: 100;
    required: true;
  };
  visualRequirement: {
    requiresPhotoOrLogo: true;
  };
}

/**
 * Testimonial Creation Input
 */
export interface CreateTestimonialInput {
  quote: string;
  clientName: string;
  company: string;
  position?: string;
  projectTitle?: string;
  projectId?: string;
  clientPhoto?: string;
  companyLogo?: string;
  featured?: boolean;
  displayOrder?: number;
  status?: TestimonialStatus;
  dateGiven: string;
  rating?: TestimonialRating;
  category: TestimonialCategory;
  serviceArea?: ServiceArea[];
  industry?: Industry;
  metrics?: TestimonialMetric[];
  fullTestimonial?: string;
  location?: string;
  clientWebsite?: string;
  language?: 'de' | 'en';
  hasPermission: boolean;
  source: TestimonialSource;
  tags?: string[];
}

/**
 * Testimonial Update Input
 */
export interface UpdateTestimonialInput {
  quote?: string;
  clientName?: string;
  company?: string;
  position?: string;
  projectTitle?: string;
  projectId?: string;
  clientPhoto?: string;
  companyLogo?: string;
  featured?: boolean;
  displayOrder?: number;
  status?: TestimonialStatus;
  dateGiven?: string;
  rating?: TestimonialRating;
  category?: TestimonialCategory;
  serviceArea?: ServiceArea[];
  industry?: Industry;
  metrics?: TestimonialMetric[];
  fullTestimonial?: string;
  location?: string;
  clientWebsite?: string;
  language?: 'de' | 'en';
  hasPermission?: boolean;
  source?: TestimonialSource;
  tags?: string[];
}

/**
 * Testimonial Analytics
 */
export interface TestimonialAnalytics {
  totalTestimonials: number;
  averageRating: number;
  ratingDistribution: Record<TestimonialRating, number>;
  categoryDistribution: Record<TestimonialCategory, number>;
  industryDistribution: Record<Industry, number>;
  serviceAreaDistribution: Record<ServiceArea, number>;
  featuredCount: number;
  recentTestimonials: number; // Last 3 months
  conversionFromTestimonials: number; // If tracked
}

/**
 * Testimonial Card Props
 */
export interface TestimonialCardProps {
  testimonial: ClientTestimonial;
  variant?: 'default' | 'featured' | 'compact' | 'detailed';
  showRating?: boolean;
  showPhoto?: boolean;
  showLogo?: boolean;
  showMetrics?: boolean;
  showFullQuote?: boolean;
  onClick?: (testimonial: ClientTestimonial) => void;
  className?: string;
}

/**
 * Testimonials Grid Props
 */
export interface TestimonialsGridProps {
  testimonials: ClientTestimonial[];
  displayOptions?: TestimonialDisplayOptions;
  onTestimonialSelect?: (testimonial: ClientTestimonial) => void;
  loading?: boolean;
  error?: string;
  className?: string;
}

/**
 * Testimonial Carousel Props
 */
export interface TestimonialCarouselProps {
  testimonials: ClientTestimonial[];
  autoplay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  variant?: 'default' | 'featured';
  className?: string;
}

/**
 * Type Guards
 */
export function isValidTestimonialStatus(status: string): status is TestimonialStatus {
  return [
    'pending',
    'approved',
    'featured',
    'archived',
    'rejected'
  ].includes(status as TestimonialStatus);
}

export function isValidTestimonialRating(rating: number): rating is TestimonialRating {
  return [1, 2, 3, 4, 5].includes(rating as TestimonialRating);
}

export function isValidTestimonialCategory(category: string): category is TestimonialCategory {
  return [
    'project-completion',
    'service-quality',
    'communication',
    'technical-expertise',
    'results-achieved',
    'overall-experience'
  ].includes(category as TestimonialCategory);
}

export function isFeaturedTestimonial(testimonial: ClientTestimonial): boolean {
  return testimonial.featured === true || testimonial.status === 'featured';
}

export function hasVisualAsset(testimonial: ClientTestimonial): boolean {
  return !!(testimonial.clientPhoto || testimonial.companyLogo);
}

export function isHighRated(testimonial: ClientTestimonial): boolean {
  return testimonial.rating ? testimonial.rating >= 4 : false;
}

/**
 * Utility Types
 */
export type TestimonialSummary = Pick<
  ClientTestimonial,
  'id' | 'quote' | 'clientName' | 'company' | 'rating' | 'featured'
>;

export type TestimonialPreview = Pick<
  ClientTestimonial,
  'id' | 'quote' | 'clientName' | 'company' | 'clientPhoto' | 'companyLogo'
>;

/**
 * Constants
 */
export const TESTIMONIAL_VALIDATION_RULES: TestimonialValidationRules = {
  quote: {
    minLength: 50,
    maxLength: 300,
    required: true,
  },
  clientName: {
    minLength: 2,
    maxLength: 50,
    required: true,
  },
  company: {
    minLength: 2,
    maxLength: 100,
    required: true,
  },
  visualRequirement: {
    requiresPhotoOrLogo: true,
  },
} as const;

export const TESTIMONIAL_STATUSES: Record<TestimonialStatus, string> = {
  'pending': 'Ausstehend',
  'approved': 'Genehmigt',
  'featured': 'Hervorgehoben',
  'archived': 'Archiviert',
  'rejected': 'Abgelehnt',
} as const;

export const TESTIMONIAL_CATEGORIES: Record<TestimonialCategory, string> = {
  'project-completion': 'Projektabschluss',
  'service-quality': 'Servicequalität',
  'communication': 'Kommunikation',
  'technical-expertise': 'Technische Expertise',
  'results-achieved': 'Erreichte Ergebnisse',
  'overall-experience': 'Gesamterfahrung',
} as const;

export const SERVICE_AREAS: Record<ServiceArea, string> = {
  'web-development': 'Webentwicklung',
  'web-design': 'Webdesign',
  'e-commerce': 'E-Commerce',
  'mobile-development': 'Mobile Entwicklung',
  'consulting': 'Beratung',
  'maintenance': 'Wartung',
  'seo-optimization': 'SEO-Optimierung',
} as const;

export const INDUSTRIES: Record<Industry, string> = {
  'technology': 'Technologie',
  'healthcare': 'Gesundheitswesen',
  'finance': 'Finanzwesen',
  'education': 'Bildung',
  'retail': 'Einzelhandel',
  'manufacturing': 'Fertigung',
  'real-estate': 'Immobilien',
  'hospitality': 'Gastgewerbe',
  'nonprofit': 'Gemeinnützig',
  'other': 'Andere',
} as const;

export const TESTIMONIAL_SOURCES: Record<TestimonialSource, string> = {
  'direct-feedback': 'Direktes Feedback',
  'email': 'E-Mail',
  'survey': 'Umfrage',
  'interview': 'Interview',
  'review-platform': 'Bewertungsplattform',
  'social-media': 'Social Media',
} as const;