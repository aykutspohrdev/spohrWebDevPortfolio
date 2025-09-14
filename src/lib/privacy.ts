/**
 * GDPR Privacy Consent Handling
 * Comprehensive GDPR compliance utilities for privacy consent management
 *
 * Features:
 * - GDPR Article 6 (lawful basis) compliance
 * - GDPR Article 7 (consent) compliance
 * - German BDSG (Bundesdatenschutzgesetz) compliance
 * - Consent tracking and management
 * - Data retention and deletion policies
 * - Privacy-friendly analytics
 * - Cookie-less consent tracking (localStorage)
 */

import { ContactInquiry, ContactFormData } from '../types/contact';

// GDPR consent types based on Article 6
export type LawfulBasis =
  | 'consent'           // Article 6(1)(a) - Consent
  | 'contract'          // Article 6(1)(b) - Contract performance
  | 'legal-obligation'  // Article 6(1)(c) - Legal obligation
  | 'vital-interests'   // Article 6(1)(d) - Vital interests
  | 'public-task'       // Article 6(1)(e) - Public task
  | 'legitimate-interests'; // Article 6(1)(f) - Legitimate interests

// Consent record interface
export interface ConsentRecord {
  id: string;
  timestamp: string;
  email: string;
  privacyConsent: boolean;
  marketingConsent: boolean;
  lawfulBasis: LawfulBasis;
  purpose: string[];
  dataTypes: string[];
  retentionPeriod: string;
  source: 'contact-form' | 'newsletter' | 'cookie-banner' | 'other';
  ipAddress?: string;
  userAgent?: string;
  consentMethod: 'explicit' | 'implicit' | 'pre-ticked' | 'opt-out';
  language: 'de' | 'en';
  version: string; // Privacy policy version
}

// Data processing purposes
export type DataProcessingPurpose =
  | 'contact-response'
  | 'project-evaluation'
  | 'service-delivery'
  | 'marketing-communication'
  | 'newsletter'
  | 'analytics'
  | 'legal-compliance';

// Personal data types processed
export type PersonalDataType =
  | 'name'
  | 'email'
  | 'phone'
  | 'company'
  | 'ip-address'
  | 'browser-data'
  | 'communication-content'
  | 'project-requirements';

// Data retention periods (German standard)
export const DATA_RETENTION_PERIODS = {
  'contact-inquiries': '3 years', // Standard business correspondence retention
  'marketing-consent': 'Until withdrawn',
  'contract-data': '10 years', // HGB requirement for business records
  'analytics-data': '14 months', // GDPR compliant analytics retention
  'logs': '30 days', // Security logs
} as const;

// Privacy policy versions
export const PRIVACY_POLICY_VERSION = '2025-01-01';

// Create consent record for contact form submission
export function createConsentRecord(
  formData: ContactFormData,
  inquiry: ContactInquiry,
  ipAddress?: string,
  userAgent?: string
): ConsentRecord {
  const purposes: DataProcessingPurpose[] = [
    'contact-response',
    'project-evaluation',
  ];

  if (formData.marketingConsent) {
    purposes.push('marketing-communication');
  }

  const dataTypes: PersonalDataType[] = [
    'name',
    'email',
    'communication-content',
    'project-requirements',
  ];

  if (formData.company) dataTypes.push('company');
  if (formData.phone) dataTypes.push('phone');
  if (ipAddress) dataTypes.push('ip-address');
  if (userAgent) dataTypes.push('browser-data');

  return {
    id: `consent-${inquiry.id}`,
    timestamp: inquiry.submissionDate,
    email: formData.email,
    privacyConsent: formData.privacyConsent,
    marketingConsent: formData.marketingConsent || false,
    lawfulBasis: 'consent',
    purpose: purposes,
    dataTypes,
    retentionPeriod: DATA_RETENTION_PERIODS['contact-inquiries'],
    source: 'contact-form',
    ipAddress,
    userAgent,
    consentMethod: 'explicit',
    language: 'de',
    version: PRIVACY_POLICY_VERSION,
  };
}

// Validate GDPR compliance
export function validateGDPRCompliance(formData: ContactFormData): {
  compliant: boolean;
  issues: string[];
  recommendations: string[];
} {
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Check privacy consent (required)
  if (!formData.privacyConsent) {
    issues.push('Privacy consent not given');
  }

  // Check consent method (must be explicit, not pre-ticked)
  if (formData.privacyConsent && formData.marketingConsent === undefined) {
    recommendations.push('Separate marketing consent checkbox recommended');
  }

  // Validate email for data minimization
  if (!formData.email || formData.email.length === 0) {
    issues.push('Email required for lawful processing');
  }

  // Check data minimization principle
  if (formData.company && formData.company.length > 100) {
    recommendations.push('Company name should be limited for data minimization');
  }

  return {
    compliant: issues.length === 0,
    issues,
    recommendations,
  };
}

// Generate privacy notice text for contact form
export function getPrivacyNoticeText(language: 'de' | 'en' = 'de'): {
  required: string;
  marketing: string;
  dataController: string;
  rights: string;
} {
  if (language === 'de') {
    return {
      required: `Ich stimme der Verarbeitung meiner personenbezogenen Daten (Name, E-Mail-Adresse, Nachricht) zum Zweck der Kontaktaufnahme und Projektanfrage zu. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Eine Weitergabe an Dritte erfolgt nicht.`,

      marketing: `Ja, ich möchte gelegentlich nützliche Tipps zu Webentwicklung und Angebote per E-Mail erhalten. Diese Einwilligung kann jederzeit durch eine E-Mail an hallo@aykutspohr.de oder über einen Abmeldelink in der E-Mail widerrufen werden.`,

      dataController: `Verantwortlicher für die Datenverarbeitung: Aykut Spohr, Web Development, Berlin, Deutschland. Kontakt: hallo@aykutspohr.de`,

      rights: `Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Bei Beschwerden können Sie sich an eine Datenschutzaufsichtsbehörde wenden.`,
    };
  } else {
    return {
      required: `I consent to the processing of my personal data (name, email address, message) for the purpose of contact and project inquiry. Processing is based on Art. 6 para. 1 lit. a GDPR (consent). No data is shared with third parties.`,

      marketing: `Yes, I would like to occasionally receive useful web development tips and offers via email. This consent can be withdrawn at any time by sending an email to hello@aykutspohr.de or via an unsubscribe link in the email.`,

      dataController: `Data controller: Aykut Spohr, Web Development, Berlin, Germany. Contact: hello@aykutspohr.de`,

      rights: `You have the right to information, correction, deletion, restriction of processing, data portability and objection. In case of complaints, you can contact a data protection supervisory authority.`,
    };
  }
}

// Check if consent is still valid
export function isConsentValid(consentRecord: ConsentRecord): {
  valid: boolean;
  reason?: string;
  renewalRequired?: boolean;
} {
  const consentDate = new Date(consentRecord.timestamp);
  const now = new Date();
  const monthsSinceConsent = (now.getTime() - consentDate.getTime()) / (1000 * 60 * 60 * 24 * 30);

  // Check if consent is too old (German practice: renew after 2 years for marketing)
  if (consentRecord.marketingConsent && monthsSinceConsent > 24) {
    return {
      valid: false,
      reason: 'Marketing consent older than 2 years',
      renewalRequired: true,
    };
  }

  // Check if privacy policy version has changed significantly
  if (consentRecord.version !== PRIVACY_POLICY_VERSION) {
    const oldVersion = new Date(consentRecord.version);
    const newVersion = new Date(PRIVACY_POLICY_VERSION);
    const versionDiff = (newVersion.getTime() - oldVersion.getTime()) / (1000 * 60 * 60 * 24);

    // If privacy policy changed more than 90 days ago, renewal might be required
    if (versionDiff > 90) {
      return {
        valid: false,
        reason: 'Privacy policy significantly updated',
        renewalRequired: true,
      };
    }
  }

  return { valid: true };
}

// Generate data processing summary for transparency
export function generateDataProcessingSummary(formData: ContactFormData): {
  purposes: { purpose: DataProcessingPurpose; lawfulBasis: LawfulBasis; retention: string }[];
  dataTypes: PersonalDataType[];
  recipients: string[];
  transfers: string[];
} {
  const purposes = [
    {
      purpose: 'contact-response' as DataProcessingPurpose,
      lawfulBasis: 'consent' as LawfulBasis,
      retention: DATA_RETENTION_PERIODS['contact-inquiries'],
    },
    {
      purpose: 'project-evaluation' as DataProcessingPurpose,
      lawfulBasis: 'consent' as LawfulBasis,
      retention: DATA_RETENTION_PERIODS['contact-inquiries'],
    },
  ];

  if (formData.marketingConsent) {
    purposes.push({
      purpose: 'marketing-communication' as DataProcessingPurpose,
      lawfulBasis: 'consent' as LawfulBasis,
      retention: DATA_RETENTION_PERIODS['marketing-consent'],
    });
  }

  const dataTypes: PersonalDataType[] = ['name', 'email', 'communication-content'];
  if (formData.company) dataTypes.push('company');
  if (formData.phone) dataTypes.push('phone');

  return {
    purposes,
    dataTypes,
    recipients: ['Aykut Spohr (Data Controller)', 'Mailgun (Email Service Provider)'],
    transfers: ['EU/EEA'], // Mailgun EU region
  };
}

// Create withdrawal instruction text
export function getConsentWithdrawalInstructions(language: 'de' | 'en' = 'de'): {
  email: string;
  subject: string;
  body: string;
  rights: string[];
} {
  if (language === 'de') {
    return {
      email: 'hallo@aykutspohr.de',
      subject: 'Widerruf der Einwilligung zur Datenverarbeitung',
      body: `Hiermit widerrufe ich meine Einwilligung zur Verarbeitung meiner personenbezogenen Daten. Bitte löschen Sie alle meine Daten und bestätigen Sie die Löschung.

E-Mail-Adresse: [Ihre E-Mail-Adresse]
Datum der ursprünglichen Anfrage: [Falls bekannt]

Mit freundlichen Grüßen`,
      rights: [
        'Auskunft über verarbeitete Daten',
        'Berichtigung falscher Daten',
        'Löschung der Daten',
        'Einschränkung der Verarbeitung',
        'Datenübertragbarkeit',
        'Widerspruch gegen die Verarbeitung',
        'Beschwerde bei der Aufsichtsbehörde',
      ],
    };
  } else {
    return {
      email: 'hello@aykutspohr.de',
      subject: 'Withdrawal of Consent for Data Processing',
      body: `I hereby withdraw my consent to the processing of my personal data. Please delete all my data and confirm the deletion.

Email address: [Your email address]
Date of original inquiry: [If known]

Best regards`,
      rights: [
        'Information about processed data',
        'Correction of incorrect data',
        'Deletion of data',
        'Restriction of processing',
        'Data portability',
        'Objection to processing',
        'Complaint to supervisory authority',
      ],
    };
  }
}

// Cookie-less consent tracking using localStorage
export const ConsentStorage = {
  // Store consent locally (no cookies needed)
  store: (consentRecord: ConsentRecord): boolean => {
    try {
      localStorage.setItem('gdpr-consent', JSON.stringify(consentRecord));
      localStorage.setItem('gdpr-consent-date', new Date().toISOString());
      return true;
    } catch (error) {
      console.error('Failed to store consent:', error);
      return false;
    }
  },

  // Retrieve stored consent
  retrieve: (): ConsentRecord | null => {
    try {
      const stored = localStorage.getItem('gdpr-consent');
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to retrieve consent:', error);
      return null;
    }
  },

  // Check if consent exists and is valid
  isValid: (): boolean => {
    const consent = ConsentStorage.retrieve();
    if (!consent) return false;

    const validation = isConsentValid(consent);
    return validation.valid;
  },

  // Clear stored consent
  clear: (): boolean => {
    try {
      localStorage.removeItem('gdpr-consent');
      localStorage.removeItem('gdpr-consent-date');
      return true;
    } catch (error) {
      console.error('Failed to clear consent:', error);
      return false;
    }
  },
};

// Privacy-friendly analytics (no personal data)
export const PrivacyAnalytics = {
  // Track form submission without personal data
  trackFormSubmission: (projectType: string, hasMarketingConsent: boolean) => {
    try {
      // Only track non-personal metrics
      const metrics = {
        timestamp: new Date().toISOString(),
        projectType,
        hasMarketingConsent,
        source: 'contact-form',
        // No IP, no user agent, no personal identifiers
      };

      // Store locally or send to privacy-compliant analytics
      const stored = localStorage.getItem('privacy-analytics') || '[]';
      const analytics = JSON.parse(stored);
      analytics.push(metrics);

      // Keep only last 50 entries for storage efficiency
      if (analytics.length > 50) {
        analytics.splice(0, analytics.length - 50);
      }

      localStorage.setItem('privacy-analytics', JSON.stringify(analytics));
    } catch (error) {
      console.error('Analytics tracking failed:', error);
    }
  },

  // Get aggregated metrics (privacy-compliant)
  getMetrics: (): {
    totalSubmissions: number;
    projectTypeDistribution: Record<string, number>;
    marketingConsentRate: number;
    submissionsThisMonth: number;
  } => {
    try {
      const stored = localStorage.getItem('privacy-analytics') || '[]';
      const analytics = JSON.parse(stored);

      const now = new Date();
      const thisMonth = now.getMonth();
      const thisYear = now.getFullYear();

      const projectTypes: Record<string, number> = {};
      let marketingConsents = 0;
      let submissionsThisMonth = 0;

      analytics.forEach((entry: any) => {
        const entryDate = new Date(entry.timestamp);

        // Project type distribution
        projectTypes[entry.projectType] = (projectTypes[entry.projectType] || 0) + 1;

        // Marketing consent rate
        if (entry.hasMarketingConsent) {
          marketingConsents++;
        }

        // This month submissions
        if (entryDate.getMonth() === thisMonth && entryDate.getFullYear() === thisYear) {
          submissionsThisMonth++;
        }
      });

      return {
        totalSubmissions: analytics.length,
        projectTypeDistribution: projectTypes,
        marketingConsentRate: analytics.length > 0 ? marketingConsents / analytics.length : 0,
        submissionsThisMonth,
      };
    } catch (error) {
      console.error('Failed to get metrics:', error);
      return {
        totalSubmissions: 0,
        projectTypeDistribution: {},
        marketingConsentRate: 0,
        submissionsThisMonth: 0,
      };
    }
  },
};

// Export main utilities
export const PrivacyUtils = {
  createConsentRecord,
  validateGDPRCompliance,
  getPrivacyNoticeText,
  isConsentValid,
  generateDataProcessingSummary,
  getConsentWithdrawalInstructions,
  ConsentStorage,
  PrivacyAnalytics,
} as const;

// Export types
export type {
  LawfulBasis,
  ConsentRecord,
  DataProcessingPurpose,
  PersonalDataType,
};

// Export constants
export {
  DATA_RETENTION_PERIODS,
  PRIVACY_POLICY_VERSION,
};