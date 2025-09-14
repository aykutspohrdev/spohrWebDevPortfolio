'use client';

import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactFormData, ContactFormSubmissionResult } from '../../types/contact';

/**
 * Contact Section Component
 * Complete contact section with form, introduction, and trust signals
 *
 * Features:
 * - Bold Minimalism design with strong visual hierarchy
 * - Trust signals and social proof
 * - Contact information and response time expectations
 * - GDPR-compliant form integration
 * - Accessibility-first approach
 * - German language localization
 */
export const ContactSection: React.FC = () => {
  // Handle form submission
  const handleFormSubmit = async (data: ContactFormData): Promise<ContactFormSubmissionResult> => {
    // This will be replaced with actual API call in T037
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: 'website-form',
          language: 'de',
          submissionDate: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Contact form submission error:', error);
      return {
        success: false,
        message: 'Es ist ein technischer Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie mich direkt per E-Mail.',
      };
    }
  };

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-content">
          {/* Section Header */}
          <div className="contact-header">
            <h2 id="contact-title" className="section-title">
              Lassen Sie uns Ihr Projekt besprechen
            </h2>
            <p className="section-subtitle">
              Kostenlose Erstberatung für Ihr Webprojekt. Gemeinsam finden wir die perfekte Lösung für Ihr Unternehmen.
            </p>
          </div>

          <div className="contact-layout">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="contact-intro">
                <h3>Warum mit mir arbeiten?</h3>
                <ul className="benefits-list">
                  <li>
                    <span className="benefit-icon" aria-hidden="true">⚡</span>
                    <div>
                      <strong>Schnelle Antwort</strong>
                      <p>Antwort innerhalb von 24 Stunden, meist schon am selben Tag</p>
                    </div>
                  </li>
                  <li>
                    <span className="benefit-icon" aria-hidden="true">🎯</span>
                    <div>
                      <strong>Maßgeschneiderte Lösungen</strong>
                      <p>Jedes Projekt wird individuell auf Ihre Bedürfnisse zugeschnitten</p>
                    </div>
                  </li>
                  <li>
                    <span className="benefit-icon" aria-hidden="true">💪</span>
                    <div>
                      <strong>Bewährte Expertise</strong>
                      <p>Über 50 erfolgreiche Projekte für deutsche Unternehmen</p>
                    </div>
                  </li>
                  <li>
                    <span className="benefit-icon" aria-hidden="true">🔒</span>
                    <div>
                      <strong>Rechtssicherheit</strong>
                      <p>DSGVO-konforme Umsetzung und deutsche Rechtssicherheit</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Direct Contact Options */}
              <div className="contact-direct">
                <h4>Direkter Kontakt</h4>
                <div className="contact-methods">
                  <a
                    href="mailto:hallo@aykutspohr.de"
                    className="contact-method"
                    aria-label="E-Mail senden an hallo@aykutspohr.de"
                  >
                    <span className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <span className="contact-label">E-Mail</span>
                      <span className="contact-value">hallo@aykutspohr.de</span>
                    </div>
                  </a>

                  <a
                    href="tel:+4917612345678"
                    className="contact-method"
                    aria-label="Anrufen unter +49 176 12345678"
                  >
                    <span className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <span className="contact-label">Telefon</span>
                      <span className="contact-value">+49 176 12345678</span>
                    </div>
                  </a>

                  <div className="contact-method">
                    <span className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <span className="contact-label">Antwortzeit</span>
                      <span className="contact-value">Innerhalb von 24h</span>
                    </div>
                  </div>

                  <div className="contact-method">
                    <span className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </span>
                    <div>
                      <span className="contact-label">Standort</span>
                      <span className="contact-value">Berlin, Deutschland</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Commitment */}
              <div className="response-commitment">
                <div className="commitment-badge">
                  <span className="commitment-icon">📞</span>
                  <div className="commitment-text">
                    <strong>Garantierte Antwort</strong>
                    <p>Ich melde mich spätestens am nächsten Werktag bei Ihnen</p>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="trust-signals">
                <h4>Vertrauen Sie auf Expertise</h4>
                <div className="trust-stats">
                  <div className="trust-stat">
                    <span className="trust-number">50+</span>
                    <span className="trust-label">Erfolgreiche Projekte</span>
                  </div>
                  <div className="trust-stat">
                    <span className="trust-number">5★</span>
                    <span className="trust-label">Durchschnittliche Bewertung</span>
                  </div>
                  <div className="trust-stat">
                    <span className="trust-number">100%</span>
                    <span className="trust-label">DSGVO-Konformität</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <ContactForm
                onSubmit={handleFormSubmit}
                showOptionalFields={true}
                showBudgetField={true}
                showTimelineField={true}
                showPreferredContactField={true}
                className="contact-main-form"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="contact-additional">
            <div className="contact-cards">
              <div className="contact-card">
                <h4>Erstberatung</h4>
                <p>
                  In einem kostenlosen 30-minütigen Gespräch klären wir Ihre Anforderungen und besprechen
                  mögliche Lösungsansätze für Ihr Projekt.
                </p>
                <ul>
                  <li>Analyse Ihrer aktuellen Situation</li>
                  <li>Empfehlungen für Ihr Projekt</li>
                  <li>Unverbindliches Angebot</li>
                  <li>Nächste Schritte definieren</li>
                </ul>
              </div>

              <div className="contact-card">
                <h4>Projektablauf</h4>
                <p>
                  Transparenter Projektablauf mit festen Meilensteinen und regelmäßigen Updates über
                  den Fortschritt Ihres Projekts.
                </p>
                <ol>
                  <li>Beratung & Konzeption</li>
                  <li>Design & Prototyping</li>
                  <li>Entwicklung & Testing</li>
                  <li>Launch & Optimierung</li>
                </ol>
              </div>

              <div className="contact-card">
                <h4>Nach dem Launch</h4>
                <p>
                  Ihre Website ist nur der Anfang. Ich unterstütze Sie langfristig bei der Pflege,
                  Optimierung und Weiterentwicklung.
                </p>
                <ul>
                  <li>Technischer Support</li>
                  <li>Performance-Monitoring</li>
                  <li>Sicherheitsupdates</li>
                  <li>Erweiterungen & Verbesserungen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="contact-faq-preview">
            <h3>Häufige Fragen</h3>
            <div className="faq-items">
              <details className="faq-item">
                <summary>Wie lange dauert die Umsetzung eines Webprojekts?</summary>
                <p>
                  Die Projektdauer hängt vom Umfang ab: Landing Pages 1-2 Wochen, Standard-Websites 2-4 Wochen,
                  komplexe Projekte 4-8 Wochen. In der Erstberatung besprechen wir Ihren individuellen Zeitplan.
                </p>
              </details>

              <details className="faq-item">
                <summary>Was kostet eine professionelle Website?</summary>
                <p>
                  Preise starten bei 1.999€ für Landing Pages. Standard-Websites beginnen bei 4.999€.
                  Der finale Preis richtet sich nach Ihren spezifischen Anforderungen und gewünschten Funktionen.
                </p>
              </details>

              <details className="faq-item">
                <summary>Erhalte ich auch Unterstützung nach dem Launch?</summary>
                <p>
                  Selbstverständlich! Jedes Projekt enthält 30 Tage kostenlosen Support. Darüber hinaus biete ich
                  flexible Wartungspakete und bin für Fragen und Anpassungen jederzeit da.
                </p>
              </details>
            </div>
            <a href="#faq" className="faq-link">
              Alle häufigen Fragen ansehen →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};