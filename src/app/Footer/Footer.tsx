'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Footer Component
 * Comprehensive footer with legal compliance, contact information, and navigation
 *
 * Features:
 * - German legal compliance (DSGVO, BFSG/EAA requirements)
 * - Professional contact information
 * - Legal page links (Impressum, Datenschutz, Barrierefreiheit)
 * - Social media links
 * - Copyright and business information
 * - Accessibility-compliant navigation
 * - Bold Minimalism design principles
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" aria-label="Website-Footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Brand and Contact */}
            <div className="footer-brand">
              <div className="footer-logo">
                <h3>Aykut Spohr</h3>
                <p className="footer-tagline">Web Development & Digital Solutions</p>
              </div>

              <div className="footer-contact">
                <h4>Kontakt</h4>
                <div className="contact-details">
                  <a
                    href="mailto:hallo@aykutspohr.de"
                    className="contact-link"
                    aria-label="E-Mail senden an hallo@aykutspohr.de"
                  >
                    <span className="contact-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    hallo@aykutspohr.de
                  </a>

                  <a
                    href="tel:+4917612345678"
                    className="contact-link"
                    aria-label="Anrufen unter +49 176 12345678"
                  >
                    <span className="contact-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    +49 176 12345678
                  </a>

                  <div className="contact-item">
                    <span className="contact-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </span>
                    <span>Berlin, Deutschland</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="footer-nav">
              <div className="footer-nav-section">
                <h4>Services</h4>
                <nav aria-label="Service-Navigation">
                  <ul>
                    <li><Link href="/#services">Webentwicklung</Link></li>
                    <li><Link href="/#services">E-Commerce</Link></li>
                    <li><Link href="/#services">Optimierung</Link></li>
                    <li><Link href="/#services">Beratung</Link></li>
                    <li><Link href="/#services">Wartung</Link></li>
                  </ul>
                </nav>
              </div>

              <div className="footer-nav-section">
                <h4>Unternehmen</h4>
                <nav aria-label="Unternehmens-Navigation">
                  <ul>
                    <li><Link href="/#about">Über mich</Link></li>
                    <li><Link href="/#portfolio">Portfolio</Link></li>
                    <li><Link href="/#testimonials">Referenzen</Link></li>
                    <li><Link href="/#process">Vorgehen</Link></li>
                    <li><Link href="/#faq">FAQ</Link></li>
                  </ul>
                </nav>
              </div>

              <div className="footer-nav-section">
                <h4>Support</h4>
                <nav aria-label="Support-Navigation">
                  <ul>
                    <li><Link href="/#contact">Kontakt</Link></li>
                    <li><Link href="/#pricing">Preise</Link></li>
                    <li><Link href="/#faq">Häufige Fragen</Link></li>
                    <li>
                      <a href="mailto:hallo@aykutspohr.de?subject=Support-Anfrage">
                        Support anfragen
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Social Media & Professional Networks */}
            <div className="footer-social">
              <h4>Vernetzen</h4>
              <div className="social-links">
                <a
                  href="https://github.com/aykutspohr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub Profil besuchen"
                >
                  <span className="social-icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/aykutspohr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profil besuchen"
                >
                  <span className="social-icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </span>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://twitter.com/aykutspohr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter Profil besuchen"
                >
                  <span className="social-icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>Twitter</span>
                </a>
              </div>

              {/* Newsletter Signup */}
              <div className="newsletter-signup">
                <h5>Newsletter</h5>
                <p>Tipps zu Webentwicklung und digitalen Trends</p>
                <Link href="/#contact" className="newsletter-link">
                  Newsletter abonnieren →
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom - Legal & Copyright */}
          <div className="footer-bottom">
            {/* Business Information */}
            <div className="footer-business">
              <div className="business-info">
                <span className="business-name">Aykut Spohr</span>
                <span className="business-separator">•</span>
                <span className="business-type">Freiberuflicher Webentwickler</span>
                <span className="business-separator">•</span>
                <span className="business-location">Berlin, Deutschland</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="footer-legal">
              <nav aria-label="Rechtliche Seiten">
                <ul className="legal-links">
                  <li>
                    <Link href="/impressum" className="legal-link">
                      Impressum
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="legal-link">
                      Datenschutz
                    </Link>
                  </li>
                  <li>
                    <Link href="/accessibility" className="legal-link">
                      Barrierefreiheit
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
              <p>
                © {currentYear} Aykut Spohr. Alle Rechte vorbehalten.
              </p>
              <p className="footer-note">
                Webentwicklung aus Berlin für deutsche Unternehmen
              </p>
            </div>
          </div>

          {/* Accessibility & Quality Badges */}
          <div className="footer-badges">
            <div className="quality-badges">
              <div className="badge" title="DSGVO-konform">
                <span className="badge-icon">🔒</span>
                <span>DSGVO-konform</span>
              </div>
              <div className="badge" title="Barrierefrei nach WCAG 2.1 AA">
                <span className="badge-icon">♿</span>
                <span>Barrierefrei</span>
              </div>
              <div className="badge" title="Responsives Design">
                <span className="badge-icon">📱</span>
                <span>Responsive</span>
              </div>
              <div className="badge" title="Performance optimiert">
                <span className="badge-icon">⚡</span>
                <span>Schnell</span>
              </div>
            </div>
          </div>

          {/* German Legal Compliance Notice */}
          <div className="footer-compliance">
            <p className="compliance-text">
              Diese Website erfüllt die Anforderungen der EU-Datenschutz-Grundverordnung (DSGVO)
              und des Barrierefreiheitsstärkungsgesetzes (BFSG). Bei Fragen zur Barrierefreiheit
              oder zum Datenschutz kontaktieren Sie uns unter{' '}
              <a href="mailto:hallo@aykutspohr.de">hallo@aykutspohr.de</a>.
            </p>
          </div>

          {/* Skip to Top Link */}
          <div className="footer-skip">
            <a href="#top" className="skip-to-top">
              <span className="skip-icon" aria-hidden="true">↑</span>
              Zurück zum Seitenanfang
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};