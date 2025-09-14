'use client';

import React, { useState, useCallback } from 'react';
import {
  ContactFormData,
  ContactFormSubmissionResult,
  ContactFormProps,
  ProjectType,
  BudgetRange,
  Timeline,
  ContactMethod,
  CONTACT_VALIDATION_RULES,
  PROJECT_TYPES,
  BUDGET_RANGES,
  TIMELINES,
  CONTACT_METHODS,
  isValidProjectType,
  isValidBudgetRange,
  isValidTimeline
} from '../../types/contact';

/**
 * Contact Form Component with GDPR Compliance
 * Implements comprehensive validation, accessibility, and German language support
 *
 * Features:
 * - Required field validation with German error messages
 * - GDPR-compliant consent handling
 * - Keyboard navigation and screen reader support
 * - Real-time validation feedback
 * - Form submission with loading states
 * - Bold Minimalism design principles
 */
export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  defaultValues = {},
  showOptionalFields = true,
  showBudgetField = true,
  showTimelineField = true,
  showPreferredContactField = true,
  compact = false,
  className = '',
  submitButtonText = 'Anfrage senden',
  loadingText = 'Wird gesendet...',
}) => {
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: defaultValues.name || '',
    email: defaultValues.email || '',
    company: defaultValues.company || '',
    phone: defaultValues.phone || '',
    projectType: defaultValues.projectType || 'standard',
    budget: defaultValues.budget || undefined,
    timeline: defaultValues.timeline || undefined,
    message: defaultValues.message || '',
    privacyConsent: defaultValues.privacyConsent || false,
    marketingConsent: defaultValues.marketingConsent || false,
    preferredContact: defaultValues.preferredContact || undefined,
  });

  // Validation and submission state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<ContactFormSubmissionResult | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Field validation functions
  const validateField = useCallback((name: keyof ContactFormData, value: any): string => {
    switch (name) {
      case 'name':
        if (!value || value.trim().length === 0) {
          return 'Name ist erforderlich.';
        }
        if (value.trim().length < CONTACT_VALIDATION_RULES.name.minLength) {
          return `Name muss mindestens ${CONTACT_VALIDATION_RULES.name.minLength} Zeichen lang sein.`;
        }
        if (value.trim().length > CONTACT_VALIDATION_RULES.name.maxLength) {
          return `Name darf maximal ${CONTACT_VALIDATION_RULES.name.maxLength} Zeichen lang sein.`;
        }
        if (!new RegExp(CONTACT_VALIDATION_RULES.name.pattern).test(value)) {
          return 'Name enthält ungültige Zeichen.';
        }
        return '';

      case 'email':
        if (!value || value.trim().length === 0) {
          return 'E-Mail-Adresse ist erforderlich.';
        }
        if (value.length > CONTACT_VALIDATION_RULES.email.maxLength) {
          return 'E-Mail-Adresse ist zu lang.';
        }
        if (!new RegExp(CONTACT_VALIDATION_RULES.email.pattern).test(value)) {
          return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        }
        return '';

      case 'message':
        if (!value || value.trim().length === 0) {
          return 'Nachricht ist erforderlich.';
        }
        if (value.trim().length < CONTACT_VALIDATION_RULES.message.minLength) {
          return `Nachricht muss mindestens ${CONTACT_VALIDATION_RULES.message.minLength} Zeichen lang sein.`;
        }
        if (value.trim().length > CONTACT_VALIDATION_RULES.message.maxLength) {
          return `Nachricht darf maximal ${CONTACT_VALIDATION_RULES.message.maxLength} Zeichen lang sein.`;
        }
        return '';

      case 'privacyConsent':
        if (!value) {
          return 'Datenschutzerklärung muss akzeptiert werden.';
        }
        return '';

      case 'phone':
        if (value && value.trim().length > 0) {
          const phonePattern = /^[\+]?[0-9\s\-\(\)\/]{7,25}$/;
          if (!phonePattern.test(value)) {
            return 'Bitte geben Sie eine gültige Telefonnummer ein.';
          }
        }
        return '';

      case 'projectType':
        if (!isValidProjectType(value)) {
          return 'Bitte wählen Sie einen gültigen Projekttyp.';
        }
        return '';

      case 'budget':
        if (value && !isValidBudgetRange(value)) {
          return 'Bitte wählen Sie einen gültigen Budgetbereich.';
        }
        return '';

      case 'timeline':
        if (value && !isValidTimeline(value)) {
          return 'Bitte wählen Sie einen gültigen Zeitrahmen.';
        }
        return '';

      default:
        return '';
    }
  }, []);

  // Handle field changes
  const handleFieldChange = useCallback((
    name: keyof ContactFormData,
    value: any
  ) => {
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  // Handle field blur for validation
  const handleFieldBlur = useCallback((name: keyof ContactFormData) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [formData, validateField]);

  // Validate entire form
  const validateForm = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate required fields
    newErrors.name = validateField('name', formData.name);
    newErrors.email = validateField('email', formData.email);
    newErrors.message = validateField('message', formData.message);
    newErrors.privacyConsent = validateField('privacyConsent', formData.privacyConsent);

    // Validate optional fields if filled
    if (formData.phone) {
      newErrors.phone = validateField('phone', formData.phone);
    }

    newErrors.projectType = validateField('projectType', formData.projectType);

    if (formData.budget) {
      newErrors.budget = validateField('budget', formData.budget);
    }

    if (formData.timeline) {
      newErrors.timeline = validateField('timeline', formData.timeline);
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  }, [formData, validateField]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting || isSubmitted) return;

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Call provided onSubmit handler or default API call
      const result = onSubmit
        ? await onSubmit(formData)
        : await submitContactForm(formData);

      setSubmissionResult(result);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        // Handle server-side validation errors
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmissionResult({
        success: false,
        message: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, isSubmitting, isSubmitted, onSubmit, validateForm]);

  // Default API submission function
  const submitContactForm = async (data: ContactFormData): Promise<ContactFormSubmissionResult> => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  };

  // Reset form
  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: 'standard',
      budget: undefined,
      timeline: undefined,
      message: '',
      privacyConsent: false,
      marketingConsent: false,
      preferredContact: undefined,
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
    setSubmissionResult(null);
  }, []);

  // Render success state
  if (isSubmitted && submissionResult?.success) {
    return (
      <div className={`contact-form-success ${className}`}>
        <div className="success-message">
          <div className="success-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="var(--color-success)" />
              <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Vielen Dank für Ihre Anfrage!</h3>
          <p>
            Ihre Nachricht wurde erfolgreich übermittelt. Ich melde mich innerhalb von 24 Stunden bei Ihnen.
          </p>
          {submissionResult.inquiryId && (
            <p className="inquiry-id">
              Ihre Anfrage-ID: <code>{submissionResult.inquiryId}</code>
            </p>
          )}
          <div className="next-steps">
            <h4>Wie es weitergeht:</h4>
            <ol>
              <li>Ich prüfe Ihre Anfrage und projektspezifischen Anforderungen</li>
              <li>Sie erhalten eine erste Einschätzung und Terminvorschläge</li>
              <li>Wir besprechen Details in einem kostenlosen Erstgespräch</li>
            </ol>
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="btn-secondary"
          >
            Neue Anfrage senden
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      className={`contact-form ${compact ? 'compact' : ''} ${className}`}
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="contact-form-title"
    >
      {/* Form Title */}
      <div className="form-header">
        <h3 id="contact-form-title">Kostenlose Erstberatung anfragen</h3>
        <p className="form-subtitle">
          Erzählen Sie mir von Ihrem Projekt. Ich antworte innerhalb von 24 Stunden.
        </p>
      </div>

      {/* Error Summary */}
      {submissionResult && !submissionResult.success && (
        <div className="form-error-summary" role="alert">
          <h4>Bitte korrigieren Sie folgende Fehler:</h4>
          <p>{submissionResult.message}</p>
        </div>
      )}

      <div className="form-grid">
        {/* Name Field - Required */}
        <div className="form-group">
          <label htmlFor="contact-name" className="form-label required">
            Ihr Name
          </label>
          <input
            type="text"
            id="contact-name"
            value={formData.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            onBlur={() => handleFieldBlur('name')}
            className={`form-input ${errors.name ? 'error' : ''}`}
            placeholder="Max Mustermann"
            required
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <div id="name-error" className="form-error" role="alert">
              {errors.name}
            </div>
          )}
        </div>

        {/* Email Field - Required */}
        <div className="form-group">
          <label htmlFor="contact-email" className="form-label required">
            E-Mail-Adresse
          </label>
          <input
            type="email"
            id="contact-email"
            value={formData.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
            onBlur={() => handleFieldBlur('email')}
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="max@musterfirma.de"
            required
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <div id="email-error" className="form-error" role="alert">
              {errors.email}
            </div>
          )}
        </div>

        {/* Company Field - Optional */}
        {showOptionalFields && (
          <div className="form-group">
            <label htmlFor="contact-company" className="form-label">
              Unternehmen <span className="optional">(optional)</span>
            </label>
            <input
              type="text"
              id="contact-company"
              value={formData.company}
              onChange={(e) => handleFieldChange('company', e.target.value)}
              className="form-input"
              placeholder="Musterfirma GmbH"
            />
          </div>
        )}

        {/* Phone Field - Optional */}
        {showOptionalFields && (
          <div className="form-group">
            <label htmlFor="contact-phone" className="form-label">
              Telefon <span className="optional">(optional)</span>
            </label>
            <input
              type="tel"
              id="contact-phone"
              value={formData.phone}
              onChange={(e) => handleFieldChange('phone', e.target.value)}
              onBlur={() => handleFieldBlur('phone')}
              className={`form-input ${errors.phone ? 'error' : ''}`}
              placeholder="+49 30 12345678"
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <div id="phone-error" className="form-error" role="alert">
                {errors.phone}
              </div>
            )}
          </div>
        )}

        {/* Project Type Field - Required */}
        <div className="form-group">
          <label htmlFor="contact-project-type" className="form-label required">
            Projekttyp
          </label>
          <select
            id="contact-project-type"
            value={formData.projectType}
            onChange={(e) => handleFieldChange('projectType', e.target.value as ProjectType)}
            onBlur={() => handleFieldBlur('projectType')}
            className={`form-select ${errors.projectType ? 'error' : ''}`}
            required
            aria-describedby={errors.projectType ? 'project-type-error' : undefined}
          >
            {Object.entries(PROJECT_TYPES).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <div id="project-type-error" className="form-error" role="alert">
              {errors.projectType}
            </div>
          )}
        </div>

        {/* Budget Field - Optional */}
        {showOptionalFields && showBudgetField && (
          <div className="form-group">
            <label htmlFor="contact-budget" className="form-label">
              Budget <span className="optional">(optional)</span>
            </label>
            <select
              id="contact-budget"
              value={formData.budget || ''}
              onChange={(e) => handleFieldChange('budget', e.target.value as BudgetRange || undefined)}
              onBlur={() => handleFieldBlur('budget')}
              className={`form-select ${errors.budget ? 'error' : ''}`}
              aria-describedby={errors.budget ? 'budget-error' : undefined}
            >
              <option value="">Budget wählen</option>
              {Object.entries(BUDGET_RANGES).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {errors.budget && (
              <div id="budget-error" className="form-error" role="alert">
                {errors.budget}
              </div>
            )}
          </div>
        )}

        {/* Timeline Field - Optional */}
        {showOptionalFields && showTimelineField && (
          <div className="form-group">
            <label htmlFor="contact-timeline" className="form-label">
              Zeitrahmen <span className="optional">(optional)</span>
            </label>
            <select
              id="contact-timeline"
              value={formData.timeline || ''}
              onChange={(e) => handleFieldChange('timeline', e.target.value as Timeline || undefined)}
              onBlur={() => handleFieldBlur('timeline')}
              className={`form-select ${errors.timeline ? 'error' : ''}`}
              aria-describedby={errors.timeline ? 'timeline-error' : undefined}
            >
              <option value="">Zeitrahmen wählen</option>
              {Object.entries(TIMELINES).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {errors.timeline && (
              <div id="timeline-error" className="form-error" role="alert">
                {errors.timeline}
              </div>
            )}
          </div>
        )}

        {/* Preferred Contact Method - Optional */}
        {showOptionalFields && showPreferredContactField && (
          <div className="form-group">
            <label htmlFor="contact-preferred-contact" className="form-label">
              Bevorzugter Kontaktweg <span className="optional">(optional)</span>
            </label>
            <select
              id="contact-preferred-contact"
              value={formData.preferredContact || ''}
              onChange={(e) => handleFieldChange('preferredContact', e.target.value as ContactMethod || undefined)}
              className="form-select"
            >
              <option value="">Kontaktweg wählen</option>
              {Object.entries(CONTACT_METHODS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Message Field - Required - Full Width */}
      <div className="form-group message-group">
        <label htmlFor="contact-message" className="form-label required">
          Ihre Nachricht
        </label>
        <textarea
          id="contact-message"
          value={formData.message}
          onChange={(e) => handleFieldChange('message', e.target.value)}
          onBlur={() => handleFieldBlur('message')}
          className={`form-textarea ${errors.message ? 'error' : ''}`}
          placeholder="Beschreiben Sie Ihr Projekt: Welche Ziele möchten Sie erreichen? Welche Funktionen sind wichtig? Gibt es bereits eine Website?"
          rows={6}
          required
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        <div className="form-help">
          {formData.message.length}/{CONTACT_VALIDATION_RULES.message.maxLength} Zeichen
        </div>
        {errors.message && (
          <div id="message-error" className="form-error" role="alert">
            {errors.message}
          </div>
        )}
      </div>

      {/* GDPR Consent - Required */}
      <div className="form-group consent-group">
        <div className="form-checkbox-group">
          <label className="form-checkbox-label required">
            <input
              type="checkbox"
              checked={formData.privacyConsent}
              onChange={(e) => handleFieldChange('privacyConsent', e.target.checked)}
              onBlur={() => handleFieldBlur('privacyConsent')}
              className={`form-checkbox ${errors.privacyConsent ? 'error' : ''}`}
              required
              aria-describedby={errors.privacyConsent ? 'privacy-error' : undefined}
            />
            <span className="checkbox-mark"></span>
            <span className="checkbox-text">
              Ich stimme der Verarbeitung meiner personenbezogenen Daten zum Zweck der Kontaktaufnahme zu.
              Weitere Informationen finden Sie in der{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Datenschutzerklärung
              </a>
              .
            </span>
          </label>
        </div>
        {errors.privacyConsent && (
          <div id="privacy-error" className="form-error" role="alert">
            {errors.privacyConsent}
          </div>
        )}
      </div>

      {/* Marketing Consent - Optional */}
      <div className="form-group consent-group">
        <div className="form-checkbox-group">
          <label className="form-checkbox-label">
            <input
              type="checkbox"
              checked={formData.marketingConsent}
              onChange={(e) => handleFieldChange('marketingConsent', e.target.checked)}
              className="form-checkbox"
            />
            <span className="checkbox-mark"></span>
            <span className="checkbox-text">
              Ja, ich möchte gelegentlich nützliche Tipps und Angebote per E-Mail erhalten.
              (Diese Einwilligung kann jederzeit widerrufen werden.)
            </span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="form-actions">
        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className="btn-primary btn-large form-submit"
        >
          {isSubmitting ? loadingText : submitButtonText}
          {isSubmitting && (
            <span className="loading-spinner" aria-hidden="true"></span>
          )}
        </button>
        <p className="form-note">
          Kostenlose Erstberatung · Antwort innerhalb von 24 Stunden · Unverbindlich
        </p>
      </div>
    </form>
  );
};