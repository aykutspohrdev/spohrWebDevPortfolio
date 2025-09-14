/**
 * Contact Inquiry Type Definitions
 * Based on data model specifications for GDPR-compliant contact form handling
 * Implements validation rules from requirements analysis
 */

/**
 * Contact Inquiry Entity
 * Represents a potential client's contact form submission
 */
export interface ContactInquiry {
  /** Unique identifier for the inquiry */
  id: string;

  /** Contact person name - 2-50 characters */
  name: string;

  /** Contact email address - valid email format */
  email: string;

  /** Company name - optional */
  company?: string;

  /** Phone number - optional */
  phone?: string;

  /** Type of project interest - required */
  projectType: ProjectType;

  /** Estimated project budget - optional */
  budget?: BudgetRange;

  /** Desired project timeline - optional */
  timeline?: Timeline;

  /** Additional project details - 20-1000 characters */
  message: string;

  /** GDPR privacy consent given - must be true */
  privacyConsent: boolean;

  /** Marketing email consent - optional */
  marketingConsent: boolean;

  /** When form was submitted */
  submissionDate: string;

  /** Inquiry processing status */
  status: InquiryStatus;

  /** Source of the inquiry */
  source: InquirySource;

  /** Client's IP address (for security) */
  ipAddress?: string;

  /** User agent string */
  userAgent?: string;

  /** Preferred contact method */
  preferredContact?: ContactMethod;

  /** Language preference */
  language: 'de' | 'en';

  /** Additional form fields */
  additionalFields?: Record<string, string>;

  /** Inquiry priority */
  priority: InquiryPriority;

  /** Tags for categorization */
  tags?: string[];

  /** Follow-up notes */
  notes?: InquiryNote[];

  /** Response sent date */
  responseDate?: string;

  /** Response method used */
  responseMethod?: ContactMethod;

  /** Lead score (if calculated) */
  leadScore?: number;

  /** UTM parameters */
  utm?: UTMParameters;
}

/**
 * Project Types
 */
export type ProjectType =
  | 'landing'
  | 'standard'
  | 'custom'
  | 'consultation'
  | 'maintenance'
  | 'redesign'
  | 'e-commerce'
  | 'other';

/**
 * Budget Ranges
 */
export type BudgetRange =
  | 'under-5000'
  | '5000-10000'
  | '10000-25000'
  | '25000-50000'
  | 'over-50000'
  | 'to-discuss';

/**
 * Timeline Options
 */
export type Timeline =
  | 'asap'
  | '1-month'
  | '2-3-months'
  | '3-6-months'
  | 'flexible'
  | 'planning-phase';

/**
 * Inquiry Status
 */
export type InquiryStatus =
  | 'new'
  | 'reviewed'
  | 'contacted'
  | 'qualified'
  | 'proposal-sent'
  | 'converted'
  | 'declined'
  | 'closed'
  | 'spam';

/**
 * Inquiry Source
 */
export type InquirySource =
  | 'website-form'
  | 'landing-page'
  | 'social-media'
  | 'referral'
  | 'search-engine'
  | 'direct-email'
  | 'phone-call'
  | 'networking'
  | 'other';

/**
 * Contact Methods
 */
export type ContactMethod =
  | 'email'
  | 'phone'
  | 'whatsapp'
  | 'video-call'
  | 'in-person'
  | 'no-preference';

/**
 * Inquiry Priority
 */
export type InquiryPriority =
  | 'low'
  | 'medium'
  | 'high'
  | 'urgent';

/**
 * Inquiry Note
 */
export interface InquiryNote {
  /** Note ID */
  id: string;
  /** Note content */
  content: string;
  /** Note author */
  author: string;
  /** Note timestamp */
  timestamp: string;
  /** Note type */
  type: 'internal' | 'client-facing' | 'follow-up';
}

/**
 * UTM Parameters
 */
export interface UTMParameters {
  /** Campaign source */
  source?: string;
  /** Campaign medium */
  medium?: string;
  /** Campaign name */
  campaign?: string;
  /** Campaign term */
  term?: string;
  /** Campaign content */
  content?: string;
}

/**
 * Contact Form Validation
 */
export interface ContactFormValidation {
  /** Field-specific errors */
  errors: Record<string, string>;
  /** Overall form validity */
  isValid: boolean;
  /** Validation timestamp */
  validatedAt: string;
}

/**
 * Contact Form Data
 * Input type for form submission
 */
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: ProjectType;
  budget?: BudgetRange;
  timeline?: Timeline;
  message: string;
  privacyConsent: boolean;
  marketingConsent?: boolean;
  preferredContact?: ContactMethod;
  additionalFields?: Record<string, string>;
}

/**
 * Contact Form Submission Result
 */
export interface ContactFormSubmissionResult {
  /** Submission success */
  success: boolean;
  /** Inquiry ID if successful */
  inquiryId?: string;
  /** Error message if failed */
  message?: string;
  /** Validation errors */
  errors?: Record<string, string>;
  /** Next steps for user */
  nextSteps?: string;
}

/**
 * Contact Inquiry Filter Options
 */
export interface ContactInquiryFilter {
  status?: InquiryStatus[];
  projectType?: ProjectType[];
  budget?: BudgetRange[];
  timeline?: Timeline[];
  source?: InquirySource[];
  priority?: InquiryPriority[];
  dateRange?: {
    from: string;
    to: string;
  };
  hasResponse?: boolean;
  leadScore?: {
    min?: number;
    max?: number;
  };
  tags?: string[];
}

/**
 * Contact Inquiry Sort Options
 */
export type ContactInquirySort =
  | 'submission-date-desc'
  | 'submission-date-asc'
  | 'priority-desc'
  | 'lead-score-desc'
  | 'status'
  | 'name'
  | 'company';

/**
 * Contact Inquiry Display Options
 */
export interface ContactInquiryDisplayOptions {
  filter?: ContactInquiryFilter;
  sort?: ContactInquirySort;
  limit?: number;
  showNewOnly?: boolean;
  groupByStatus?: boolean;
  showNotes?: boolean;
}

/**
 * Contact Validation Rules
 */
export interface ContactValidationRules {
  name: {
    minLength: 2;
    maxLength: 50;
    pattern: string; // Regex pattern
    required: true;
  };
  email: {
    maxLength: 254;
    pattern: string; // Email regex
    required: true;
  };
  message: {
    minLength: 20;
    maxLength: 1000;
    required: true;
  };
  privacyConsent: {
    mustBeTrue: true;
    required: true;
  };
}

/**
 * Contact Analytics
 */
export interface ContactAnalytics {
  totalInquiries: number;
  inquiriesThisMonth: number;
  conversionRate: number;
  averageResponseTime: number; // in hours
  statusDistribution: Record<InquiryStatus, number>;
  projectTypeDistribution: Record<ProjectType, number>;
  budgetDistribution: Record<BudgetRange, number>;
  sourceDistribution: Record<InquirySource, number>;
  averageLeadScore: number;
  topReferralSources: Array<{ source: string; count: number }>;
}

/**
 * Contact Form Props
 */
export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<ContactFormSubmissionResult>;
  defaultValues?: Partial<ContactFormData>;
  showOptionalFields?: boolean;
  showBudgetField?: boolean;
  showTimelineField?: boolean;
  showPreferredContactField?: boolean;
  compact?: boolean;
  className?: string;
  submitButtonText?: string;
  loadingText?: string;
}

/**
 * Inquiry List Props
 */
export interface InquiryListProps {
  inquiries: ContactInquiry[];
  displayOptions?: ContactInquiryDisplayOptions;
  onInquirySelect?: (inquiry: ContactInquiry) => void;
  onStatusChange?: (inquiryId: string, status: InquiryStatus) => void;
  loading?: boolean;
  error?: string;
  className?: string;
}

/**
 * Inquiry Detail Props
 */
export interface InquiryDetailProps {
  inquiry: ContactInquiry;
  onStatusUpdate?: (status: InquiryStatus) => void;
  onNoteAdd?: (note: string) => void;
  onResponseSend?: (method: ContactMethod) => void;
  showTimeline?: boolean;
  className?: string;
}

/**
 * Type Guards
 */
export function isValidProjectType(type: string): type is ProjectType {
  return [
    'landing',
    'standard',
    'custom',
    'consultation',
    'maintenance',
    'redesign',
    'e-commerce',
    'other'
  ].includes(type as ProjectType);
}

export function isValidBudgetRange(budget: string): budget is BudgetRange {
  return [
    'under-5000',
    '5000-10000',
    '10000-25000',
    '25000-50000',
    'over-50000',
    'to-discuss'
  ].includes(budget as BudgetRange);
}

export function isValidTimeline(timeline: string): timeline is Timeline {
  return [
    'asap',
    '1-month',
    '2-3-months',
    '3-6-months',
    'flexible',
    'planning-phase'
  ].includes(timeline as Timeline);
}

export function isValidInquiryStatus(status: string): status is InquiryStatus {
  return [
    'new',
    'reviewed',
    'contacted',
    'qualified',
    'proposal-sent',
    'converted',
    'declined',
    'closed',
    'spam'
  ].includes(status as InquiryStatus);
}

export function isHighPriorityInquiry(inquiry: ContactInquiry): boolean {
  return inquiry.priority === 'high' || inquiry.priority === 'urgent';
}

export function isQualifiedLead(inquiry: ContactInquiry): boolean {
  return inquiry.leadScore ? inquiry.leadScore >= 70 : false;
}

export function hasGdprConsent(inquiry: ContactInquiry): boolean {
  return inquiry.privacyConsent === true;
}

/**
 * Utility Types
 */
export type ContactInquirySummary = Pick<
  ContactInquiry,
  'id' | 'name' | 'email' | 'company' | 'projectType' | 'status' | 'submissionDate'
>;

export type ContactInquiryPreview = Pick<
  ContactInquiry,
  'id' | 'name' | 'email' | 'projectType' | 'message' | 'status'
>;

/**
 * Constants
 */
export const CONTACT_VALIDATION_RULES: ContactValidationRules = {
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: '^[a-zA-ZäöüßÄÖÜ\\s\\-\\.]+$',
    required: true,
  },
  email: {
    maxLength: 254,
    pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
    required: true,
  },
  message: {
    minLength: 20,
    maxLength: 1000,
    required: true,
  },
  privacyConsent: {
    mustBeTrue: true,
    required: true,
  },
} as const;

export const PROJECT_TYPES: Record<ProjectType, string> = {
  'landing': 'Landing Page',
  'standard': 'Standard Website',
  'custom': 'Individuelle Lösung',
  'consultation': 'Beratung',
  'maintenance': 'Wartung',
  'redesign': 'Redesign',
  'e-commerce': 'E-Commerce',
  'other': 'Andere',
} as const;

export const BUDGET_RANGES: Record<BudgetRange, string> = {
  'under-5000': 'Unter 5.000 €',
  '5000-10000': '5.000 € - 10.000 €',
  '10000-25000': '10.000 € - 25.000 €',
  '25000-50000': '25.000 € - 50.000 €',
  'over-50000': 'Über 50.000 €',
  'to-discuss': 'Zu besprechen',
} as const;

export const TIMELINES: Record<Timeline, string> = {
  'asap': 'So schnell wie möglich',
  '1-month': '1 Monat',
  '2-3-months': '2-3 Monate',
  '3-6-months': '3-6 Monate',
  'flexible': 'Flexibel',
  'planning-phase': 'Planungsphase',
} as const;

export const INQUIRY_STATUSES: Record<InquiryStatus, string> = {
  'new': 'Neu',
  'reviewed': 'Geprüft',
  'contacted': 'Kontaktiert',
  'qualified': 'Qualifiziert',
  'proposal-sent': 'Angebot gesendet',
  'converted': 'Kunde gewonnen',
  'declined': 'Abgelehnt',
  'closed': 'Geschlossen',
  'spam': 'Spam',
} as const;

export const CONTACT_METHODS: Record<ContactMethod, string> = {
  'email': 'E-Mail',
  'phone': 'Telefon',
  'whatsapp': 'WhatsApp',
  'video-call': 'Videoanruf',
  'in-person': 'Persönlich',
  'no-preference': 'Keine Präferenz',
} as const;

export const INQUIRY_PRIORITIES: Record<InquiryPriority, string> = {
  'low': 'Niedrig',
  'medium': 'Mittel',
  'high': 'Hoch',
  'urgent': 'Dringend',
} as const;