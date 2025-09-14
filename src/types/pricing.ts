/**
 * Pricing Tier Type Definitions
 * Based on data model specifications for service packages and pricing
 * Implements validation rules from requirements analysis
 */

/**
 * Pricing Tier Entity
 * Represents a service package with defined features and pricing
 */
export interface PricingTier {
  /** Unique identifier for the pricing tier */
  id: string;

  /** Tier name - must be "Landing", "Standard", or "Custom" */
  name: PricingTierName;

  /** Brief tier overview - 20-150 characters */
  description: string;

  /** Included features list - 5-12 items, 5-100 characters each */
  features: string[];

  /** Base price or range - optional for Custom tier */
  startingPrice?: PriceInfo;

  /** Whether tier requires consultation */
  isCustom: boolean;

  /** Call-to-action button text - 5-30 characters */
  ctaText: string;

  /** Whether to emphasize this tier */
  highlighted: boolean;

  /** Sort order for display */
  displayOrder: number;

  /** Tier status */
  status: TierStatus;

  /** Popular badge */
  popular?: boolean;

  /** Additional tier benefits */
  benefits?: string[];

  /** What's NOT included (for comparison) */
  limitations?: string[];

  /** Estimated project timeline */
  timeline?: string;

  /** Number of revisions included */
  revisions?: number;

  /** Support duration included */
  supportDuration?: string;

  /** Additional services available */
  addOns?: PricingAddOn[];

  /** Tier category for grouping */
  category: TierCategory;

  /** Target client types */
  targetClients?: ClientSegment[];

  /** Tier subtitle */
  subtitle?: string;

  /** Custom tier contact information */
  customContact?: ContactInfo;
}

/**
 * Pricing Tier Names
 */
export type PricingTierName = 'Landing' | 'Standard' | 'Custom';

/**
 * Tier Status
 */
export type TierStatus = 'active' | 'featured' | 'deprecated' | 'coming-soon';

/**
 * Tier Category
 */
export type TierCategory = 'website' | 'application' | 'consultation' | 'maintenance';

/**
 * Client Segments
 */
export type ClientSegment =
  | 'startup'
  | 'small-business'
  | 'medium-business'
  | 'enterprise'
  | 'agency'
  | 'personal';

/**
 * Price Information
 */
export interface PriceInfo {
  /** Base amount */
  amount: number;

  /** Price range maximum */
  maxAmount?: number;

  /** Currency */
  currency: 'EUR' | 'USD';

  /** Billing period */
  period?: 'one-time' | 'monthly' | 'yearly';

  /** Price display format */
  display: string;

  /** Additional price notes */
  notes?: string[];

  /** Discount information */
  discount?: DiscountInfo;
}

/**
 * Discount Information
 */
export interface DiscountInfo {
  /** Discount percentage */
  percentage: number;

  /** Original price */
  originalAmount: number;

  /** Discount reason/label */
  label: string;

  /** Discount expiry */
  expiresAt?: string;
}

/**
 * Pricing Add-On
 */
export interface PricingAddOn {
  /** Add-on ID */
  id: string;

  /** Add-on name */
  name: string;

  /** Add-on description */
  description: string;

  /** Add-on price */
  price: PriceInfo;

  /** Whether it's recommended */
  recommended?: boolean;

  /** Add-on category */
  category: 'design' | 'development' | 'content' | 'marketing' | 'maintenance';
}

/**
 * Contact Information for Custom Tier
 */
export interface ContactInfo {
  /** Contact method */
  method: 'email' | 'phone' | 'form' | 'calendar';

  /** Contact value */
  value: string;

  /** Contact label */
  label: string;

  /** Available hours */
  availability?: string;
}

/**
 * Pricing Comparison
 */
export interface PricingComparison {
  /** Feature name */
  feature: string;

  /** Feature description */
  description?: string;

  /** Availability per tier */
  availability: Record<PricingTierName, boolean | string>;

  /** Feature category */
  category: ComparisonCategory;

  /** Display order */
  order: number;
}

/**
 * Comparison Categories
 */
export type ComparisonCategory =
  | 'design'
  | 'development'
  | 'content'
  | 'seo'
  | 'support'
  | 'extras';

/**
 * Pricing Display Options
 */
export interface PricingDisplayOptions {
  /** Show annual discount */
  showAnnualDiscount?: boolean;

  /** Currency to display */
  currency?: 'EUR' | 'USD';

  /** Show comparison table */
  showComparison?: boolean;

  /** Highlight specific tier */
  highlightTier?: PricingTierName;

  /** Show add-ons */
  showAddOns?: boolean;

  /** Compact display mode */
  compact?: boolean;
}

/**
 * Pricing Validation Rules
 */
export interface PricingValidationRules {
  name: {
    allowedValues: PricingTierName[];
    required: true;
  };
  description: {
    minLength: 20;
    maxLength: 150;
    required: true;
  };
  features: {
    minItems: 5;
    maxItems: 12;
    itemMinLength: 5;
    itemMaxLength: 100;
    required: true;
  };
  ctaText: {
    minLength: 5;
    maxLength: 30;
    required: true;
  };
}

/**
 * Pricing Tier Creation Input
 */
export interface CreatePricingTierInput {
  name: PricingTierName;
  description: string;
  features: string[];
  startingPrice?: PriceInfo;
  isCustom?: boolean;
  ctaText: string;
  highlighted?: boolean;
  displayOrder?: number;
  status?: TierStatus;
  popular?: boolean;
  benefits?: string[];
  limitations?: string[];
  timeline?: string;
  revisions?: number;
  supportDuration?: string;
  addOns?: PricingAddOn[];
  category: TierCategory;
  targetClients?: ClientSegment[];
  subtitle?: string;
  customContact?: ContactInfo;
}

/**
 * Pricing Tier Update Input
 */
export interface UpdatePricingTierInput {
  name?: PricingTierName;
  description?: string;
  features?: string[];
  startingPrice?: PriceInfo;
  isCustom?: boolean;
  ctaText?: string;
  highlighted?: boolean;
  displayOrder?: number;
  status?: TierStatus;
  popular?: boolean;
  benefits?: string[];
  limitations?: string[];
  timeline?: string;
  revisions?: number;
  supportDuration?: string;
  addOns?: PricingAddOn[];
  category?: TierCategory;
  targetClients?: ClientSegment[];
  subtitle?: string;
  customContact?: ContactInfo;
}

/**
 * Pricing Analytics
 */
export interface PricingAnalytics {
  /** Most selected tier */
  mostPopular: PricingTierName;

  /** Conversion rates per tier */
  conversionRates: Record<PricingTierName, number>;

  /** Average project value */
  averageValue: number;

  /** Tier selection distribution */
  tierDistribution: Record<PricingTierName, number>;

  /** Add-on popularity */
  popularAddOns: Array<{ id: string; selectionRate: number }>;
}

/**
 * Pricing Card Props
 */
export interface PricingCardProps {
  tier: PricingTier;
  variant?: 'default' | 'highlighted' | 'compact';
  showFeatures?: boolean;
  showBenefits?: boolean;
  showAddOns?: boolean;
  onSelect?: (tier: PricingTier) => void;
  onContactClick?: () => void;
  className?: string;
  currency?: 'EUR' | 'USD';
}

/**
 * Pricing Table Props
 */
export interface PricingTableProps {
  tiers: PricingTier[];
  comparison?: PricingComparison[];
  displayOptions?: PricingDisplayOptions;
  onTierSelect?: (tier: PricingTier) => void;
  loading?: boolean;
  error?: string;
  className?: string;
}

/**
 * Pricing Calculator Props
 */
export interface PricingCalculatorProps {
  baseTiers: PricingTier[];
  onCalculate?: (total: number, selections: CalculatorSelection[]) => void;
  className?: string;
}

/**
 * Calculator Selection
 */
export interface CalculatorSelection {
  type: 'tier' | 'addon';
  id: string;
  name: string;
  price: number;
  quantity?: number;
}

/**
 * Type Guards
 */
export function isValidPricingTierName(name: string): name is PricingTierName {
  return ['Landing', 'Standard', 'Custom'].includes(name as PricingTierName);
}

export function isValidTierStatus(status: string): status is TierStatus {
  return ['active', 'featured', 'deprecated', 'coming-soon'].includes(status as TierStatus);
}

export function isCustomTier(tier: PricingTier): boolean {
  return tier.isCustom === true || tier.name === 'Custom';
}

export function isHighlightedTier(tier: PricingTier): boolean {
  return tier.highlighted === true;
}

export function isPopularTier(tier: PricingTier): boolean {
  return tier.popular === true;
}

/**
 * Utility Types
 */
export type PricingTierSummary = Pick<
  PricingTier,
  'id' | 'name' | 'description' | 'startingPrice' | 'highlighted' | 'popular'
>;

export type PricingTierPreview = Pick<
  PricingTier,
  'id' | 'name' | 'description' | 'features' | 'startingPrice' | 'ctaText'
>;

/**
 * Constants
 */
export const PRICING_VALIDATION_RULES: PricingValidationRules = {
  name: {
    allowedValues: ['Landing', 'Standard', 'Custom'],
    required: true,
  },
  description: {
    minLength: 20,
    maxLength: 150,
    required: true,
  },
  features: {
    minItems: 5,
    maxItems: 12,
    itemMinLength: 5,
    itemMaxLength: 100,
    required: true,
  },
  ctaText: {
    minLength: 5,
    maxLength: 30,
    required: true,
  },
} as const;

export const PRICING_TIER_NAMES: Record<PricingTierName, string> = {
  'Landing': 'Landing',
  'Standard': 'Standard',
  'Custom': 'Individuell',
} as const;

export const TIER_STATUSES: Record<TierStatus, string> = {
  'active': 'Aktiv',
  'featured': 'Hervorgehoben',
  'deprecated': 'Eingestellt',
  'coming-soon': 'Demnächst',
} as const;

export const TIER_CATEGORIES: Record<TierCategory, string> = {
  'website': 'Website',
  'application': 'Anwendung',
  'consultation': 'Beratung',
  'maintenance': 'Wartung',
} as const;

export const CLIENT_SEGMENTS: Record<ClientSegment, string> = {
  'startup': 'Startup',
  'small-business': 'Kleinunternehmen',
  'medium-business': 'Mittelständisches Unternehmen',
  'enterprise': 'Großunternehmen',
  'agency': 'Agentur',
  'personal': 'Privatperson',
} as const;

export const COMPARISON_CATEGORIES: Record<ComparisonCategory, string> = {
  'design': 'Design',
  'development': 'Entwicklung',
  'content': 'Inhalte',
  'seo': 'SEO',
  'support': 'Support',
  'extras': 'Zusätzlich',
} as const;