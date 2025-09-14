/**
 * Contact Form Validation Utilities
 * Comprehensive validation functions for contact forms and user input
 *
 * Features:
 * - German language error messages
 * - GDPR compliance validation
 * - Consistent validation rules between client and server
 * - Type-safe validation with TypeScript
 * - Input sanitization and security checks
 * - Accessibility-friendly error messaging
 */

import {
  ContactFormData,
  ProjectType,
  BudgetRange,
  Timeline,
  ContactMethod,
  ContactFormValidation,
  CONTACT_VALIDATION_RULES,
  isValidProjectType,
  isValidBudgetRange,
  isValidTimeline
} from '../types/contact';

// Validation error messages in German
export const VALIDATION_MESSAGES = {
  required: 'Dieses Feld ist erforderlich.',
  email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
  minLength: (min: number) => `Mindestens ${min} Zeichen erforderlich.`,
  maxLength: (max: number) => `Maximal ${max} Zeichen erlaubt.`,
  pattern: 'Ungültiges Format.',
  phone: 'Bitte geben Sie eine gültige Telefonnummer ein.',
  privacy: 'Die Datenschutzerklärung muss akzeptiert werden.',
  projectType: 'Bitte wählen Sie einen gültigen Projekttyp.',
  budget: 'Bitte wählen Sie einen gültigen Budgetbereich.',
  timeline: 'Bitte wählen Sie einen gültigen Zeitrahmen.',
  contactMethod: 'Bitte wählen Sie eine gültige Kontaktmethode.',
  honeypot: 'Spam-Schutz aktiviert.',
  rateLimit: 'Zu viele Anfragen. Bitte warten Sie einen Moment.',
} as const;

// Input sanitization
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';

  return input
    .trim()
    .replace(/\r\n/g, '\n') // Normalize line endings
    .replace(/\r/g, '\n')   // Handle old Mac line endings
    .replace(/\n{3,}/g, '\n\n') // Limit consecutive line breaks
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // Remove control characters except \n and \t
    .substring(0, 5000); // Prevent extremely long inputs
}

// HTML entity encoding for security
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Email validation
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;

  const sanitized = sanitizeInput(email);
  if (sanitized.length === 0) return false;
  if (sanitized.length > CONTACT_VALIDATION_RULES.email.maxLength) return false;

  // Use the regex from contact types
  const emailRegex = new RegExp(CONTACT_VALIDATION_RULES.email.pattern);
  return emailRegex.test(sanitized);
}

// Name validation
export function isValidName(name: string): boolean {
  if (!name || typeof name !== 'string') return false;

  const sanitized = sanitizeInput(name);
  if (sanitized.length < CONTACT_VALIDATION_RULES.name.minLength) return false;
  if (sanitized.length > CONTACT_VALIDATION_RULES.name.maxLength) return false;

  // Use the regex from contact types (allows German characters)
  const nameRegex = new RegExp(CONTACT_VALIDATION_RULES.name.pattern);
  return nameRegex.test(sanitized);
}

// Message validation
export function isValidMessage(message: string): boolean {
  if (!message || typeof message !== 'string') return false;

  const sanitized = sanitizeInput(message);
  if (sanitized.length < CONTACT_VALIDATION_RULES.message.minLength) return false;
  if (sanitized.length > CONTACT_VALIDATION_RULES.message.maxLength) return false;

  return true;
}

// Phone validation (international formats)
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return true; // Optional field

  const sanitized = sanitizeInput(phone);
  if (sanitized.length === 0) return true; // Empty is valid for optional field

  // Allow international phone formats
  const phoneRegex = /^[\+]?[0-9\s\-\(\)\/]{7,25}$/;
  return phoneRegex.test(sanitized);
}

// Company name validation
export function isValidCompany(company: string): boolean {
  if (!company || typeof company !== 'string') return true; // Optional field

  const sanitized = sanitizeInput(company);
  if (sanitized.length === 0) return true; // Empty is valid for optional field
  if (sanitized.length > 100) return false; // Reasonable max length

  // Allow company names with various characters
  const companyRegex = /^[a-zA-ZäöüßÄÖÜ0-9\s\-\.\,\&\(\)\/]+$/;
  return companyRegex.test(sanitized);
}

// Individual field validation functions
export const validateField = {
  name: (value: string): string => {
    const sanitized = sanitizeInput(value);

    if (!sanitized) {
      return VALIDATION_MESSAGES.required;
    }

    if (sanitized.length < CONTACT_VALIDATION_RULES.name.minLength) {
      return VALIDATION_MESSAGES.minLength(CONTACT_VALIDATION_RULES.name.minLength);
    }

    if (sanitized.length > CONTACT_VALIDATION_RULES.name.maxLength) {
      return VALIDATION_MESSAGES.maxLength(CONTACT_VALIDATION_RULES.name.maxLength);
    }

    if (!isValidName(sanitized)) {
      return VALIDATION_MESSAGES.pattern;
    }

    return '';
  },

  email: (value: string): string => {
    const sanitized = sanitizeInput(value);

    if (!sanitized) {
      return VALIDATION_MESSAGES.required;
    }

    if (sanitized.length > CONTACT_VALIDATION_RULES.email.maxLength) {
      return VALIDATION_MESSAGES.maxLength(CONTACT_VALIDATION_RULES.email.maxLength);
    }

    if (!isValidEmail(sanitized)) {
      return VALIDATION_MESSAGES.email;
    }

    return '';
  },

  company: (value: string): string => {
    if (!value) return ''; // Optional field

    const sanitized = sanitizeInput(value);

    if (sanitized.length > 100) {
      return VALIDATION_MESSAGES.maxLength(100);
    }

    if (!isValidCompany(sanitized)) {
      return VALIDATION_MESSAGES.pattern;
    }

    return '';
  },

  phone: (value: string): string => {
    if (!value) return ''; // Optional field

    const sanitized = sanitizeInput(value);

    if (!isValidPhone(sanitized)) {
      return VALIDATION_MESSAGES.phone;
    }

    return '';
  },

  projectType: (value: string): string => {
    if (!value) {
      return VALIDATION_MESSAGES.required;
    }

    if (!isValidProjectType(value)) {
      return VALIDATION_MESSAGES.projectType;
    }

    return '';
  },

  budget: (value: string): string => {
    if (!value) return ''; // Optional field

    if (!isValidBudgetRange(value)) {
      return VALIDATION_MESSAGES.budget;
    }

    return '';
  },

  timeline: (value: string): string => {
    if (!value) return ''; // Optional field

    if (!isValidTimeline(value)) {
      return VALIDATION_MESSAGES.timeline;
    }

    return '';
  },

  message: (value: string): string => {
    const sanitized = sanitizeInput(value);

    if (!sanitized) {
      return VALIDATION_MESSAGES.required;
    }

    if (sanitized.length < CONTACT_VALIDATION_RULES.message.minLength) {
      return VALIDATION_MESSAGES.minLength(CONTACT_VALIDATION_RULES.message.minLength);
    }

    if (sanitized.length > CONTACT_VALIDATION_RULES.message.maxLength) {
      return VALIDATION_MESSAGES.maxLength(CONTACT_VALIDATION_RULES.message.maxLength);
    }

    return '';
  },

  privacyConsent: (value: boolean): string => {
    if (!value) {
      return VALIDATION_MESSAGES.privacy;
    }

    return '';
  },

  marketingConsent: (value: boolean): string => {
    // Marketing consent is always optional
    return '';
  },

  preferredContact: (value: string): string => {
    if (!value) return ''; // Optional field

    const validMethods: ContactMethod[] = [
      'email', 'phone', 'whatsapp', 'video-call', 'in-person', 'no-preference'
    ];

    if (!validMethods.includes(value as ContactMethod)) {
      return VALIDATION_MESSAGES.contactMethod;
    }

    return '';
  },
};

// Comprehensive form validation
export function validateContactForm(data: ContactFormData): ContactFormValidation {
  const errors: Record<string, string> = {};

  // Validate required fields
  errors.name = validateField.name(data.name);
  errors.email = validateField.email(data.email);
  errors.message = validateField.message(data.message);
  errors.privacyConsent = validateField.privacyConsent(data.privacyConsent);
  errors.projectType = validateField.projectType(data.projectType);

  // Validate optional fields if present
  if (data.company) {
    errors.company = validateField.company(data.company);
  }

  if (data.phone) {
    errors.phone = validateField.phone(data.phone);
  }

  if (data.budget) {
    errors.budget = validateField.budget(data.budget);
  }

  if (data.timeline) {
    errors.timeline = validateField.timeline(data.timeline);
  }

  if (data.preferredContact) {
    errors.preferredContact = validateField.preferredContact(data.preferredContact);
  }

  // Remove empty error messages
  Object.keys(errors).forEach(key => {
    if (!errors[key]) {
      delete errors[key];
    }
  });

  const isValid = Object.keys(errors).length === 0;

  return {
    errors,
    isValid,
    validatedAt: new Date().toISOString(),
  };
}

// Sanitize entire form data
export function sanitizeContactFormData(data: ContactFormData): ContactFormData {
  return {
    name: sanitizeInput(data.name || ''),
    email: sanitizeInput(data.email || ''),
    company: data.company ? sanitizeInput(data.company) : undefined,
    phone: data.phone ? sanitizeInput(data.phone) : undefined,
    projectType: data.projectType,
    budget: data.budget,
    timeline: data.timeline,
    message: sanitizeInput(data.message || ''),
    privacyConsent: Boolean(data.privacyConsent),
    marketingConsent: Boolean(data.marketingConsent),
    preferredContact: data.preferredContact,
    additionalFields: data.additionalFields,
  };
}

// Spam detection utilities
export function detectSpam(data: ContactFormData): { isSpam: boolean; reasons: string[] } {
  const reasons: string[] = [];

  // Check for excessive links in message
  const linkCount = (data.message.match(/https?:\/\//g) || []).length;
  if (linkCount > 2) {
    reasons.push('Too many links in message');
  }

  // Check for common spam patterns
  const spamPatterns = [
    /seo\s+services?/i,
    /increase\s+your\s+ranking/i,
    /guaranteed\s+traffic/i,
    /buy\s+now/i,
    /click\s+here/i,
    /free\s+money/i,
    /earn\s+\$\d+/i,
  ];

  const messageContent = data.message.toLowerCase();
  spamPatterns.forEach(pattern => {
    if (pattern.test(messageContent)) {
      reasons.push('Spam pattern detected');
    }
  });

  // Check for suspicious email patterns
  const suspiciousEmailPatterns = [
    /@yopmail\./i,
    /@tempmail\./i,
    /@guerrillamail\./i,
    /@10minutemail\./i,
  ];

  const emailContent = data.email.toLowerCase();
  suspiciousEmailPatterns.forEach(pattern => {
    if (pattern.test(emailContent)) {
      reasons.push('Suspicious email domain');
    }
  });

  // Check message quality (too short but not meaningful)
  if (data.message.length < 20 && /^(hi|hello|hey|test)\.?$/i.test(data.message.trim())) {
    reasons.push('Low quality message');
  }

  return {
    isSpam: reasons.length > 0,
    reasons,
  };
}

// Message quality scoring
export function getMessageQuality(message: string): {
  score: number;
  factors: string[];
} {
  let score = 0;
  const factors: string[] = [];

  const length = message.length;
  const words = message.split(/\s+/).filter(word => word.length > 0);

  // Length scoring
  if (length >= 100) {
    score += 20;
    factors.push('Good message length');
  } else if (length >= 50) {
    score += 10;
    factors.push('Adequate message length');
  }

  // Word count scoring
  if (words.length >= 20) {
    score += 15;
    factors.push('Detailed message');
  } else if (words.length >= 10) {
    score += 10;
    factors.push('Reasonable detail level');
  }

  // Business-related keywords
  const businessKeywords = [
    'website', 'business', 'company', 'service', 'project',
    'budget', 'timeline', 'requirements', 'goal', 'objective'
  ];

  const keywordMatches = businessKeywords.filter(keyword =>
    message.toLowerCase().includes(keyword)
  );

  if (keywordMatches.length >= 3) {
    score += 20;
    factors.push('Business-focused content');
  } else if (keywordMatches.length >= 1) {
    score += 10;
    factors.push('Some business relevance');
  }

  // Grammar and structure (basic check)
  const sentences = message.split(/[.!?]+/).filter(s => s.trim().length > 0);
  if (sentences.length >= 3) {
    score += 10;
    factors.push('Well-structured message');
  }

  // Politeness indicators
  const politeWords = ['please', 'thank', 'bitte', 'danke', 'freundlich'];
  const hasPoliteWords = politeWords.some(word =>
    message.toLowerCase().includes(word)
  );

  if (hasPoliteWords) {
    score += 5;
    factors.push('Polite tone');
  }

  return {
    score: Math.min(100, score),
    factors,
  };
}

// Form field focus management for accessibility
export function getFocusOrder(): string[] {
  return [
    'contact-name',
    'contact-email',
    'contact-company',
    'contact-phone',
    'contact-project-type',
    'contact-budget',
    'contact-timeline',
    'contact-preferred-contact',
    'contact-message',
    'contact-privacy-consent',
    'contact-marketing-consent',
    'contact-submit'
  ];
}

// Get field importance for validation prioritization
export function getFieldImportance(fieldName: string): 'critical' | 'important' | 'optional' {
  const criticalFields = ['name', 'email', 'message', 'privacyConsent'];
  const importantFields = ['projectType'];

  if (criticalFields.includes(fieldName)) {
    return 'critical';
  } else if (importantFields.includes(fieldName)) {
    return 'important';
  } else {
    return 'optional';
  }
}

// Generate validation summary for screen readers
export function getValidationSummary(errors: Record<string, string>): string {
  const errorCount = Object.keys(errors).length;

  if (errorCount === 0) {
    return 'Formular ist vollständig ausgefüllt.';
  }

  const criticalErrors = Object.keys(errors).filter(field =>
    getFieldImportance(field) === 'critical'
  ).length;

  const importantErrors = Object.keys(errors).filter(field =>
    getFieldImportance(field) === 'important'
  ).length;

  let summary = `${errorCount} Fehler gefunden. `;

  if (criticalErrors > 0) {
    summary += `${criticalErrors} kritische Fehler. `;
  }

  if (importantErrors > 0) {
    summary += `${importantErrors} wichtige Fehler. `;
  }

  summary += 'Bitte korrigieren Sie die markierten Felder.';

  return summary;
}

// Export utility functions
export const ValidationUtils = {
  sanitizeInput,
  escapeHtml,
  isValidEmail,
  isValidName,
  isValidMessage,
  isValidPhone,
  isValidCompany,
  validateContactForm,
  sanitizeContactFormData,
  detectSpam,
  getMessageQuality,
  getFocusOrder,
  getFieldImportance,
  getValidationSummary,
  validateField,
} as const;