import { NextRequest, NextResponse } from 'next/server';
import {
  ContactFormData,
  ContactInquiry,
  ContactFormSubmissionResult,
  InquiryStatus,
  InquiryPriority,
  isValidProjectType,
  isValidBudgetRange,
  isValidTimeline,
  CONTACT_VALIDATION_RULES
} from '../../../types/contact';

/**
 * Contact Form API Route
 * Handles contact form submissions with Mailgun integration
 *
 * Features:
 * - Server-side validation with German error messages
 * - Mailgun API integration for email delivery
 * - GDPR compliance with consent tracking
 * - Lead scoring and inquiry management
 * - Rate limiting and spam protection
 * - Comprehensive error handling
 */

// Rate limiting storage (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Environment variables validation
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const MAILGUN_API_BASE_URL = process.env.MAILGUN_API_BASE_URL || 'https://api.mailgun.net/v3';
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'hallo@aykutspohr.de';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@aykutspohr.de';

// Validate environment setup
function validateEnvironment(): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!MAILGUN_API_KEY) {
    errors.push('MAILGUN_API_KEY environment variable is required');
  }

  if (!MAILGUN_DOMAIN) {
    errors.push('MAILGUN_DOMAIN environment variable is required');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Rate limiting function
function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const key = `contact_${ip}`;
  const limit = rateLimitStore.get(key);

  // Reset if time window has passed (5 submissions per hour)
  if (!limit || now > limit.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return { allowed: true };
  }

  // Check if limit exceeded
  if (limit.count >= 5) {
    return { allowed: false, resetTime: limit.resetTime };
  }

  // Increment counter
  rateLimitStore.set(key, { ...limit, count: limit.count + 1 });
  return { allowed: true };
}

// Server-side validation
function validateFormData(data: any): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  // Validate name
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.name = 'Name ist erforderlich.';
  } else {
    const name = data.name.trim();
    if (name.length < CONTACT_VALIDATION_RULES.name.minLength) {
      errors.name = `Name muss mindestens ${CONTACT_VALIDATION_RULES.name.minLength} Zeichen lang sein.`;
    } else if (name.length > CONTACT_VALIDATION_RULES.name.maxLength) {
      errors.name = `Name darf maximal ${CONTACT_VALIDATION_RULES.name.maxLength} Zeichen lang sein.`;
    } else if (!new RegExp(CONTACT_VALIDATION_RULES.name.pattern).test(name)) {
      errors.name = 'Name enthält ungültige Zeichen.';
    }
  }

  // Validate email
  if (!data.email || typeof data.email !== 'string' || data.email.trim().length === 0) {
    errors.email = 'E-Mail-Adresse ist erforderlich.';
  } else {
    const email = data.email.trim();
    if (email.length > CONTACT_VALIDATION_RULES.email.maxLength) {
      errors.email = 'E-Mail-Adresse ist zu lang.';
    } else if (!new RegExp(CONTACT_VALIDATION_RULES.email.pattern).test(email)) {
      errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
  }

  // Validate message
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    errors.message = 'Nachricht ist erforderlich.';
  } else {
    const message = data.message.trim();
    if (message.length < CONTACT_VALIDATION_RULES.message.minLength) {
      errors.message = `Nachricht muss mindestens ${CONTACT_VALIDATION_RULES.message.minLength} Zeichen lang sein.`;
    } else if (message.length > CONTACT_VALIDATION_RULES.message.maxLength) {
      errors.message = `Nachricht darf maximal ${CONTACT_VALIDATION_RULES.message.maxLength} Zeichen lang sein.`;
    }
  }

  // Validate privacy consent
  if (!data.privacyConsent || data.privacyConsent !== true) {
    errors.privacyConsent = 'Datenschutzerklärung muss akzeptiert werden.';
  }

  // Validate project type
  if (!data.projectType || !isValidProjectType(data.projectType)) {
    errors.projectType = 'Bitte wählen Sie einen gültigen Projekttyp.';
  }

  // Validate optional fields
  if (data.phone && typeof data.phone === 'string' && data.phone.trim().length > 0) {
    const phonePattern = /^[\+]?[0-9\s\-\(\)\/]{7,25}$/;
    if (!phonePattern.test(data.phone.trim())) {
      errors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein.';
    }
  }

  if (data.budget && !isValidBudgetRange(data.budget)) {
    errors.budget = 'Bitte wählen Sie einen gültigen Budgetbereich.';
  }

  if (data.timeline && !isValidTimeline(data.timeline)) {
    errors.timeline = 'Bitte wählen Sie einen gültigen Zeitrahmen.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

// Calculate lead score
function calculateLeadScore(data: ContactFormData, inquiry: ContactInquiry): number {
  let score = 50; // Base score

  // Project type scoring
  switch (data.projectType) {
    case 'custom':
      score += 25;
      break;
    case 'standard':
      score += 20;
      break;
    case 'e-commerce':
      score += 15;
      break;
    case 'landing':
      score += 10;
      break;
    default:
      score += 5;
  }

  // Budget scoring
  switch (data.budget) {
    case 'over-50000':
      score += 20;
      break;
    case '25000-50000':
      score += 15;
      break;
    case '10000-25000':
      score += 10;
      break;
    case '5000-10000':
      score += 5;
      break;
    default:
      score += 2;
  }

  // Timeline urgency scoring
  switch (data.timeline) {
    case 'asap':
      score += 10;
      break;
    case '1-month':
      score += 8;
      break;
    case '2-3-months':
      score += 5;
      break;
    default:
      score += 2;
  }

  // Company presence scoring
  if (data.company && data.company.trim().length > 0) {
    score += 10;
  }

  // Phone number presence scoring
  if (data.phone && data.phone.trim().length > 0) {
    score += 5;
  }

  // Message quality scoring (longer, detailed messages score higher)
  if (data.message.length > 200) {
    score += 10;
  } else if (data.message.length > 100) {
    score += 5;
  }

  // Marketing consent scoring (shows engagement)
  if (data.marketingConsent) {
    score += 5;
  }

  return Math.min(100, Math.max(0, score));
}

// Determine inquiry priority
function determinePriority(leadScore: number, data: ContactFormData): InquiryPriority {
  if (leadScore >= 80 || data.timeline === 'asap') {
    return 'urgent';
  } else if (leadScore >= 65 || data.budget === 'over-50000' || data.budget === '25000-50000') {
    return 'high';
  } else if (leadScore >= 50) {
    return 'medium';
  } else {
    return 'low';
  }
}

// Send email via Mailgun
async function sendNotificationEmail(inquiry: ContactInquiry): Promise<boolean> {
  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
    console.error('Mailgun configuration missing');
    return false;
  }

  try {
    const emailData = new FormData();
    emailData.append('from', `Portfolio Website <${FROM_EMAIL}>`);
    emailData.append('to', NOTIFICATION_EMAIL);
    emailData.append('subject', `Neue Anfrage: ${inquiry.projectType} von ${inquiry.name}`);
    emailData.append('html', generateNotificationEmail(inquiry));
    emailData.append('text', generateNotificationEmailText(inquiry));

    const response = await fetch(`${MAILGUN_API_BASE_URL}/${MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`,
      },
      body: emailData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Mailgun API error:', response.status, errorText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

// Send confirmation email to user
async function sendConfirmationEmail(inquiry: ContactInquiry): Promise<boolean> {
  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
    return false;
  }

  try {
    const emailData = new FormData();
    emailData.append('from', `Aykut Spohr <${FROM_EMAIL}>`);
    emailData.append('to', inquiry.email);
    emailData.append('subject', 'Bestätigung Ihrer Anfrage - Antwort folgt in Kürze');
    emailData.append('html', generateConfirmationEmail(inquiry));
    emailData.append('text', generateConfirmationEmailText(inquiry));

    const response = await fetch(`${MAILGUN_API_BASE_URL}/${MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`,
      },
      body: emailData,
    });

    return response.ok;
  } catch (error) {
    console.error('Confirmation email error:', error);
    return false;
  }
}

// Generate notification email HTML
function generateNotificationEmail(inquiry: ContactInquiry): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Neue Kontaktanfrage</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #dc2626; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { margin-top: 5px; }
    .priority-urgent { color: #dc2626; font-weight: bold; }
    .priority-high { color: #ea580c; font-weight: bold; }
    .priority-medium { color: #d97706; }
    .priority-low { color: #65a30d; }
    .score { background: #e5e7eb; padding: 10px; border-radius: 4px; margin: 10px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Neue Kontaktanfrage</h2>
      <p>Priorität: <span class="priority-${inquiry.priority}">${inquiry.priority.toUpperCase()}</span></p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${inquiry.name}</div>
      </div>

      <div class="field">
        <div class="label">E-Mail:</div>
        <div class="value"><a href="mailto:${inquiry.email}">${inquiry.email}</a></div>
      </div>

      ${inquiry.company ? `
      <div class="field">
        <div class="label">Unternehmen:</div>
        <div class="value">${inquiry.company}</div>
      </div>
      ` : ''}

      ${inquiry.phone ? `
      <div class="field">
        <div class="label">Telefon:</div>
        <div class="value"><a href="tel:${inquiry.phone}">${inquiry.phone}</a></div>
      </div>
      ` : ''}

      <div class="field">
        <div class="label">Projekttyp:</div>
        <div class="value">${inquiry.projectType}</div>
      </div>

      ${inquiry.budget ? `
      <div class="field">
        <div class="label">Budget:</div>
        <div class="value">${inquiry.budget}</div>
      </div>
      ` : ''}

      ${inquiry.timeline ? `
      <div class="field">
        <div class="label">Zeitrahmen:</div>
        <div class="value">${inquiry.timeline}</div>
      </div>
      ` : ''}

      ${inquiry.preferredContact ? `
      <div class="field">
        <div class="label">Bevorzugter Kontakt:</div>
        <div class="value">${inquiry.preferredContact}</div>
      </div>
      ` : ''}

      <div class="field">
        <div class="label">Nachricht:</div>
        <div class="value">${inquiry.message.replace(/\n/g, '<br>')}</div>
      </div>

      <div class="score">
        <strong>Lead Score: ${inquiry.leadScore}/100</strong>
      </div>

      <div class="field">
        <div class="label">DSGVO-Einverständnis:</div>
        <div class="value">${inquiry.privacyConsent ? 'Erteilt' : 'Nicht erteilt'}</div>
      </div>

      <div class="field">
        <div class="label">Marketing-Einverständnis:</div>
        <div class="value">${inquiry.marketingConsent ? 'Erteilt' : 'Nicht erteilt'}</div>
      </div>

      <div class="field">
        <div class="label">Eingereicht:</div>
        <div class="value">${new Date(inquiry.submissionDate).toLocaleString('de-DE')}</div>
      </div>

      <div class="field">
        <div class="label">Anfrage-ID:</div>
        <div class="value">${inquiry.id}</div>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

// Generate notification email text
function generateNotificationEmailText(inquiry: ContactInquiry): string {
  return `
Neue Kontaktanfrage

Priorität: ${inquiry.priority.toUpperCase()}

Name: ${inquiry.name}
E-Mail: ${inquiry.email}
${inquiry.company ? `Unternehmen: ${inquiry.company}\n` : ''}
${inquiry.phone ? `Telefon: ${inquiry.phone}\n` : ''}
Projekttyp: ${inquiry.projectType}
${inquiry.budget ? `Budget: ${inquiry.budget}\n` : ''}
${inquiry.timeline ? `Zeitrahmen: ${inquiry.timeline}\n` : ''}
${inquiry.preferredContact ? `Bevorzugter Kontakt: ${inquiry.preferredContact}\n` : ''}

Nachricht:
${inquiry.message}

Lead Score: ${inquiry.leadScore}/100

DSGVO-Einverständnis: ${inquiry.privacyConsent ? 'Erteilt' : 'Nicht erteilt'}
Marketing-Einverständnis: ${inquiry.marketingConsent ? 'Erteilt' : 'Nicht erteilt'}

Eingereicht: ${new Date(inquiry.submissionDate).toLocaleString('de-DE')}
Anfrage-ID: ${inquiry.id}
  `;
}

// Generate confirmation email HTML
function generateConfirmationEmail(inquiry: ContactInquiry): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Bestätigung Ihrer Anfrage</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #dc2626; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .next-steps { background: #e0f2fe; padding: 15px; border-radius: 4px; margin: 20px 0; }
    .contact-info { background: #f3f4f6; padding: 15px; border-radius: 4px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Vielen Dank für Ihre Anfrage!</h2>
      <p>Ihre Nachricht ist bei mir angekommen</p>
    </div>
    <div class="content">
      <p>Hallo ${inquiry.name},</p>

      <p>vielen Dank für Ihr Interesse an meinen Dienstleistungen. Ihre Anfrage zum Thema <strong>${inquiry.projectType}</strong> habe ich erhalten und werde sie zeitnah bearbeiten.</p>

      <div class="next-steps">
        <h3>Wie es weitergeht:</h3>
        <ol>
          <li>Ich prüfe Ihre Anfrage und projektspezifischen Anforderungen</li>
          <li>Sie erhalten eine erste Einschätzung und Terminvorschläge innerhalb von 24 Stunden</li>
          <li>Wir besprechen Details in einem kostenlosen 30-minütigen Erstgespräch</li>
          <li>Sie erhalten ein unverbindliches Angebot mit transparenter Kostenaufstellung</li>
        </ol>
      </div>

      <p>Sollten Sie noch Fragen haben oder zusätzliche Informationen benötigen, können Sie mich gerne direkt kontaktieren:</p>

      <div class="contact-info">
        <p><strong>Direkter Kontakt:</strong></p>
        <p>📧 E-Mail: <a href="mailto:hallo@aykutspohr.de">hallo@aykutspohr.de</a></p>
        <p>📞 Telefon: <a href="tel:+4917612345678">+49 176 12345678</a></p>
        <p>⏰ Antwortzeit: Innerhalb von 24 Stunden</p>
      </div>

      <p>Mit freundlichen Grüßen<br>
      Aykut Spohr<br>
      Web Development & Digital Solutions</p>

      <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">

      <p style="font-size: 12px; color: #666;">
        Ihre Anfrage-ID: ${inquiry.id}<br>
        Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht direkt auf diese E-Mail.
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

// Generate confirmation email text
function generateConfirmationEmailText(inquiry: ContactInquiry): string {
  return `
Vielen Dank für Ihre Anfrage!

Hallo ${inquiry.name},

vielen Dank für Ihr Interesse an meinen Dienstleistungen. Ihre Anfrage zum Thema ${inquiry.projectType} habe ich erhalten und werde sie zeitnah bearbeiten.

Wie es weitergeht:
1. Ich prüfe Ihre Anfrage und projektspezifischen Anforderungen
2. Sie erhalten eine erste Einschätzung und Terminvorschläge innerhalb von 24 Stunden
3. Wir besprechen Details in einem kostenlosen 30-minütigen Erstgespräch
4. Sie erhalten ein unverbindliches Angebot mit transparenter Kostenaufstellung

Direkter Kontakt:
E-Mail: hallo@aykutspohr.de
Telefon: +49 176 12345678
Antwortzeit: Innerhalb von 24 Stunden

Mit freundlichen Grüßen
Aykut Spohr
Web Development & Digital Solutions

---
Ihre Anfrage-ID: ${inquiry.id}
Diese E-Mail wurde automatisch generiert.
  `;
}

// Main POST handler
export async function POST(request: NextRequest) {
  try {
    // Validate environment
    const envCheck = validateEnvironment();
    if (!envCheck.isValid) {
      console.error('Environment validation failed:', envCheck.errors);
      return NextResponse.json(
        {
          success: false,
          message: 'Serverkonfigurationsfehler. Bitte versuchen Sie es später erneut.',
        } as ContactFormSubmissionResult,
        { status: 500 }
      );
    }

    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Check rate limit
    const rateLimitCheck = checkRateLimit(ip);
    if (!rateLimitCheck.allowed) {
      const resetTime = rateLimitCheck.resetTime ? new Date(rateLimitCheck.resetTime).toLocaleString('de-DE') : 'unbekannt';
      return NextResponse.json(
        {
          success: false,
          message: `Zu viele Anfragen. Bitte versuchen Sie es nach ${resetTime} erneut.`,
        } as ContactFormSubmissionResult,
        { status: 429 }
      );
    }

    // Parse request body
    let formData: ContactFormData;
    try {
      formData = await request.json();
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          message: 'Ungültige Anfragedaten.',
        } as ContactFormSubmissionResult,
        { status: 400 }
      );
    }

    // Validate form data
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Bitte korrigieren Sie die markierten Felder.',
          errors: validation.errors,
        } as ContactFormSubmissionResult,
        { status: 400 }
      );
    }

    // Create inquiry object
    const inquiryId = `INQ-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const submissionDate = new Date().toISOString();

    const inquiry: ContactInquiry = {
      id: inquiryId,
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company?.trim(),
      phone: formData.phone?.trim(),
      projectType: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message.trim(),
      privacyConsent: formData.privacyConsent,
      marketingConsent: formData.marketingConsent || false,
      preferredContact: formData.preferredContact,
      submissionDate,
      status: 'new' as InquiryStatus,
      source: 'website-form',
      ipAddress: ip,
      userAgent: request.headers.get('user-agent') || undefined,
      language: 'de',
      priority: 'medium', // Will be calculated below
      leadScore: 0, // Will be calculated below
      tags: [`project-${formData.projectType}`, 'website-form'],
    };

    // Calculate lead score and priority
    inquiry.leadScore = calculateLeadScore(formData, inquiry);
    inquiry.priority = determinePriority(inquiry.leadScore, formData);

    // Send notification email
    const notificationSent = await sendNotificationEmail(inquiry);
    if (!notificationSent) {
      console.error('Failed to send notification email for inquiry:', inquiryId);
    }

    // Send confirmation email to user
    const confirmationSent = await sendConfirmationEmail(inquiry);
    if (!confirmationSent) {
      console.error('Failed to send confirmation email for inquiry:', inquiryId);
    }

    // Log successful submission (in production, save to database)
    console.log('Contact form submission successful:', {
      id: inquiryId,
      name: inquiry.name,
      email: inquiry.email,
      projectType: inquiry.projectType,
      priority: inquiry.priority,
      leadScore: inquiry.leadScore,
      notificationSent,
      confirmationSent,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        inquiryId,
        message: 'Ihre Anfrage wurde erfolgreich übermittelt.',
        nextSteps: 'Sie erhalten innerhalb von 24 Stunden eine Antwort per E-Mail.',
      } as ContactFormSubmissionResult,
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
      } as ContactFormSubmissionResult,
      { status: 500 }
    );
  }
}

// OPTIONS handler for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}