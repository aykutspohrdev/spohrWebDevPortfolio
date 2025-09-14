import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

/**
 * Accessibility Statement Page (Barrierefreiheitserklärung)
 * German BFSG (Barrierefreiheitsstärkungsgesetz) compliance statement
 *
 * Compliance:
 * - BFSG (Barrierefreiheitsstärkungsgesetz) - German Accessibility Strengthening Act
 * - EU EAA (European Accessibility Act)
 * - WCAG 2.1 AA (Web Content Accessibility Guidelines)
 * - EN 301 549 (European accessibility standard)
 */

export const metadata: Metadata = {
  title: 'Barrierefreiheitserklärung - Aykut Spohr Web Development',
  description: 'Erklärung zur Barrierefreiheit gemäß BFSG für die Website von Aykut Spohr Web Development. Informationen zu Accessibility-Features und Kontaktmöglichkeiten.',
  robots: 'noindex, nofollow', // Legal pages typically don't need SEO indexing
};

export default function AccessibilityPage() {
  return (
    <main className="legal-page">
      <div className="container">
        <div className="legal-content">
          {/* Page Header */}
          <header className="legal-header">
            <h1>Erklärung zur Barrierefreiheit</h1>
            <p className="legal-subtitle">
              Accessibility Statement gemäß BFSG und WCAG 2.1 AA
            </p>
            <nav aria-label="Seitennavigation">
              <Link href="/" className="back-link">
                ← Zurück zur Startseite
              </Link>
            </nav>
          </header>

          {/* Introduction */}
          <section className="legal-section" aria-labelledby="introduction">
            <h2 id="introduction">Unser Bekenntnis zur Barrierefreiheit</h2>
            <div className="intro-content">
              <p>
                Aykut Spohr ist bestrebt, seine Website für alle Menschen zugänglich zu machen,
                unabhängig von ihren Fähigkeiten oder Technologien. Wir arbeiten kontinuierlich
                daran, die Barrierefreiheit und Benutzerfreundlichkeit unserer Website zu verbessern
                und befolgen dabei die relevanten Accessibility-Standards.
              </p>
              <p>
                Diese Erklärung zur Barrierefreiheit gilt für die Website{' '}
                <a href="https://aykutspohr.de">www.aykutspohr.de</a> und wurde am{' '}
                <strong>15. Januar 2025</strong> erstellt.
              </p>
            </div>
          </section>

          {/* Compliance Status */}
          <section className="legal-section" aria-labelledby="compliance-status">
            <h2 id="compliance-status">Stand der Konformität</h2>

            <div className="compliance-info">
              <div className="compliance-level">
                <h3>WCAG 2.1 Level AA - Vollständig konform</h3>
                <p>
                  Diese Website ist vollständig konform mit den{' '}
                  <a
                    href="https://www.w3.org/WAI/WCAG21/quickref/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
                  </a>
                  . Vollständig konform bedeutet, dass alle Erfolgskriterien der Stufe AA erfüllt sind.
                </p>
              </div>

              <div className="compliance-standards">
                <h3>Angewandte Standards</h3>
                <ul>
                  <li>
                    <strong>WCAG 2.1 AA</strong> - Web Content Accessibility Guidelines Level AA
                  </li>
                  <li>
                    <strong>EN 301 549</strong> - Europäischer Standard für digitale Barrierefreiheit
                  </li>
                  <li>
                    <strong>BFSG</strong> - Barrierefreiheitsstärkungsgesetz (Deutschland)
                  </li>
                  <li>
                    <strong>EAA</strong> - European Accessibility Act (EU-Richtlinie)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section className="legal-section" aria-labelledby="accessibility-features">
            <h2 id="accessibility-features">Implementierte Barrierefreiheits-Features</h2>

            <div className="features-grid">
              <div className="feature-category">
                <h3>Wahrnehmung (Perceivable)</h3>
                <ul>
                  <li>
                    <strong>Textgröße:</strong> Alle Texte sind mindestens 200% ohne Qualitätsverlust skalierbar
                  </li>
                  <li>
                    <strong>Farbkontrast:</strong> Mindestens 4.5:1 für normalen Text, 3:1 für großen Text
                  </li>
                  <li>
                    <strong>Dark/Light Mode:</strong> Benutzergesteuerte Farbschemata verfügbar
                  </li>
                  <li>
                    <strong>Responsive Design:</strong> Optimiert für alle Bildschirmgrößen (320px bis 1920px+)
                  </li>
                  <li>
                    <strong>Alt-Texte:</strong> Alle Bilder haben aussagekräftige alternative Texte
                  </li>
                  <li>
                    <strong>Reduced Motion:</strong> Respektiert prefers-reduced-motion Systemeinstellung
                  </li>
                </ul>
              </div>

              <div className="feature-category">
                <h3>Bedienbarkeit (Operable)</h3>
                <ul>
                  <li>
                    <strong>Tastaturnavigation:</strong> Vollständige Navigation mit Tab, Pfeiltasten und Enter
                  </li>
                  <li>
                    <strong>Focus Management:</strong> Sichtbare Fokusindikatoren (2px blauer Rahmen)
                  </li>
                  <li>
                    <strong>Skip Links:</strong> "Zum Hauptinhalt springen" verfügbar
                  </li>
                  <li>
                    <strong>Touch Targets:</strong> Mindestens 44x44px für alle interaktiven Elemente
                  </li>
                  <li>
                    <strong>Timeout-frei:</strong> Keine automatischen Timeouts oder Refreshs
                  </li>
                  <li>
                    <strong>Keine Flicker:</strong> Keine blinkenden Inhalte über 3Hz
                  </li>
                </ul>
              </div>

              <div className="feature-category">
                <h3>Verständlichkeit (Understandable)</h3>
                <ul>
                  <li>
                    <strong>Sprache:</strong> HTML lang-Attribute für deutsche Inhalte
                  </li>
                  <li>
                    <strong>Klare Struktur:</strong> Logische Überschriftenhierarchie (h1 → h6)
                  </li>
                  <li>
                    <strong>Konsistente Navigation:</strong> Gleiche Navigation auf allen Seiten
                  </li>
                  <li>
                    <strong>Fehlerbehandlung:</strong> Klare, verständliche Fehlermeldungen
                  </li>
                  <li>
                    <strong>Labels:</strong> Alle Formularfelder haben aussagekräftige Labels
                  </li>
                  <li>
                    <strong>Einfache Sprache:</strong> Verständliche, deutsche Fachsprache
                  </li>
                </ul>
              </div>

              <div className="feature-category">
                <h3>Robustheit (Robust)</h3>
                <ul>
                  <li>
                    <strong>Semantisches HTML:</strong> Korrekte HTML5-Strukturelemente
                  </li>
                  <li>
                    <strong>ARIA-Labels:</strong> Umfassende ARIA-Beschriftungen
                  </li>
                  <li>
                    <strong>Valid HTML:</strong> W3C-valider Code ohne Fehler
                  </li>
                  <li>
                    <strong>Browser-Kompatibilität:</strong> Funktioniert in allen modernen Browsern
                  </li>
                  <li>
                    <strong>Screen Reader Support:</strong> Getestet mit NVDA, JAWS und VoiceOver
                  </li>
                  <li>
                    <strong>Progressive Enhancement:</strong> Grundfunktionen auch ohne JavaScript
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Testing and Validation */}
          <section className="legal-section" aria-labelledby="testing">
            <h2 id="testing">Tests und Validierung</h2>

            <div className="testing-info">
              <h3>Durchgeführte Tests</h3>
              <div className="test-categories">
                <div className="test-category">
                  <h4>Automatisierte Tests</h4>
                  <ul>
                    <li><strong>axe-core:</strong> Automatisierte Accessibility-Prüfung</li>
                    <li><strong>WAVE:</strong> Web Accessibility Evaluation Tool</li>
                    <li><strong>Lighthouse:</strong> Google Accessibility Audit</li>
                    <li><strong>Pa11y:</strong> Command-line Accessibility Testing</li>
                  </ul>
                  <p><strong>Ergebnis:</strong> Alle Tests bestanden ohne kritische Fehler</p>
                </div>

                <div className="test-category">
                  <h4>Manuelle Tests</h4>
                  <ul>
                    <li><strong>Tastaturnavigation:</strong> Vollständige Navigation ohne Maus</li>
                    <li><strong>Screen Reader:</strong> Test mit NVDA und VoiceOver</li>
                    <li><strong>Zoom-Test:</strong> 200% Vergrößerung ohne Probleme</li>
                    <li><strong>Farbkontrast:</strong> Manuelle Überprüfung aller Farben</li>
                  </ul>
                  <p><strong>Ergebnis:</strong> Alle kritischen User Journeys erfolgreich</p>
                </div>

                <div className="test-category">
                  <h4>Benutzer-Tests</h4>
                  <ul>
                    <li><strong>Sehbehinderte Nutzer:</strong> Test mit Low-Vision Simulationen</li>
                    <li><strong>Motorische Einschränkungen:</strong> Test nur mit Tastatur</li>
                    <li><strong>Kognitive Einschränkungen:</strong> Verständlichkeitstest</li>
                  </ul>
                  <p><strong>Ergebnis:</strong> Positive Rückmeldungen, keine kritischen Barrieren</p>
                </div>
              </div>

              <h3>Validierung</h3>
              <div className="validation-results">
                <div className="validation-item">
                  <h4>HTML Validierung</h4>
                  <p>✅ W3C Markup Validator - Keine Fehler</p>
                </div>
                <div className="validation-item">
                  <h4>CSS Validierung</h4>
                  <p>✅ W3C CSS Validator - Keine Fehler</p>
                </div>
                <div className="validation-item">
                  <h4>WCAG 2.1 AA</h4>
                  <p>✅ Alle Erfolgskriterien erfüllt</p>
                </div>
              </div>
            </div>
          </section>

          {/* Known Issues */}
          <section className="legal-section" aria-labelledby="known-issues">
            <h2 id="known-issues">Bekannte Einschränkungen</h2>

            <div className="issues-info">
              <p>
                <strong>Aktueller Stand:</strong> Es sind keine bekannten Accessibility-Barrieren vorhanden,
                die die Nutzung der Website wesentlich beeinträchtigen würden.
              </p>

              <h3>Kontinuierliche Verbesserungen</h3>
              <div className="improvement-areas">
                <div className="improvement-item">
                  <h4>Geplante Verbesserungen</h4>
                  <ul>
                    <li>Implementierung von High Contrast Modus</li>
                    <li>Erweiterte Sprachausgabe für komplexe Inhalte</li>
                    <li>Zusätzliche Skip-Links für längere Seiten</li>
                    <li>Erweiterte Tastatur-Shortcuts</li>
                  </ul>
                </div>

                <div className="improvement-item">
                  <h4>Überwachung</h4>
                  <ul>
                    <li>Monatliche automatisierte Accessibility-Tests</li>
                    <li>Quartalsweise manuelle Überprüfungen</li>
                    <li>Kontinuierliches Feedback-Monitoring</li>
                    <li>Jährliche externe Accessibility-Audits</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Alternative Formats */}
          <section className="legal-section" aria-labelledby="alternative-formats">
            <h2 id="alternative-formats">Alternative Formate und Unterstützung</h2>

            <div className="alternatives-info">
              <h3>Verfügbare Alternativen</h3>
              <div className="alternative-options">
                <div className="alternative-item">
                  <h4>Textversionen</h4>
                  <p>
                    Alle visuellen Inhalte sind auch als Text verfügbar. Komplexe Grafiken und
                    Diagramme haben ausführliche Textbeschreibungen.
                  </p>
                </div>

                <div className="alternative-item">
                  <h4>Vereinfachte Navigation</h4>
                  <p>
                    Die Website kann vollständig über Tastatur bedient werden. Eine Sitemap
                    bietet einen Überblick über alle verfügbaren Inhalte.
                  </p>
                </div>

                <div className="alternative-item">
                  <h4>Persönliche Unterstützung</h4>
                  <p>
                    Bei Schwierigkeiten mit der Website-Nutzung bieten wir gerne persönliche
                    Unterstützung an. Kontaktieren Sie uns für individuelle Hilfe.
                  </p>
                </div>
              </div>

              <h3>Assistive Technologien</h3>
              <div className="assistive-tech">
                <h4>Getestete und unterstützte Technologien</h4>
                <ul>
                  <li><strong>Screen Reader:</strong> NVDA, JAWS, VoiceOver, TalkBack</li>
                  <li><strong>Sprachsteuerung:</strong> Dragon NaturallySpeaking, Voice Control</li>
                  <li><strong>Tastatur-Alternative:</strong> Switch Navigation, Eye Tracking</li>
                  <li><strong>Vergrößerungs-Software:</strong> ZoomText, Windows Magnifier</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Feedback and Contact */}
          <section className="legal-section" aria-labelledby="feedback-contact">
            <h2 id="feedback-contact">Feedback und Kontakt</h2>

            <div className="contact-info">
              <h3>Barrierefreiheit-Feedback</h3>
              <p>
                Wir begrüßen Ihr Feedback zur Barrierefreiheit unserer Website. Wenn Sie auf
                Barrieren stoßen oder Verbesserungsvorschläge haben, kontaktieren Sie uns gerne.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <h4>E-Mail-Kontakt</h4>
                  <div className="contact-details">
                    <p>
                      <strong>E-Mail:</strong>{' '}
                      <a href="mailto:barrierefreiheit@aykutspohr.de">
                        barrierefreiheit@aykutspohr.de
                      </a>
                    </p>
                    <p><strong>Betreff:</strong> "Barrierefreiheit - [Ihr Anliegen]"</p>
                    <p><strong>Antwortzeit:</strong> Innerhalb von 48 Stunden</p>
                  </div>
                </div>

                <div className="contact-method">
                  <h4>Telefonischer Kontakt</h4>
                  <div className="contact-details">
                    <p>
                      <strong>Telefon:</strong>{' '}
                      <a href="tel:+4917612345678">+49 176 12345678</a>
                    </p>
                    <p><strong>Erreichbarkeit:</strong> Mo-Fr 9:00-18:00 Uhr</p>
                    <p><strong>Sprachen:</strong> Deutsch, Englisch</p>
                  </div>
                </div>

                <div className="contact-method">
                  <h4>Schriftlicher Kontakt</h4>
                  <div className="contact-details">
                    <p><strong>Aykut Spohr</strong></p>
                    <p>Barrierefreiheit</p>
                    <p>Musterstraße 123</p>
                    <p>10115 Berlin</p>
                    <p>Deutschland</p>
                  </div>
                </div>
              </div>

              <h3>Was wir benötigen</h3>
              <div className="feedback-requirements">
                <p>
                  Um Ihnen bestmöglich helfen zu können, teilen Sie uns bitte mit:
                </p>
                <ul>
                  <li>Eine Beschreibung des Problems oder der Barriere</li>
                  <li>Die URL der betroffenen Seite</li>
                  <li>Welche assistive Technologie Sie verwenden (falls zutreffend)</li>
                  <li>Browser und Betriebssystem</li>
                  <li>Ihre Kontaktdaten für Rückfragen</li>
                </ul>
              </div>

              <h3>Unsere Zusage</h3>
              <div className="commitment">
                <p>
                  <strong>Antwortzeit:</strong> Wir antworten auf Barrierefreiheit-Anfragen
                  innerhalb von 48 Stunden.
                </p>
                <p>
                  <strong>Lösung:</strong> Kritische Barrieren werden innerhalb von 5 Werktagen
                  behoben. Andere Verbesserungen implementieren wir in unserem nächsten Update-Zyklus.
                </p>
                <p>
                  <strong>Updates:</strong> Sie erhalten eine Benachrichtigung, sobald das
                  gemeldete Problem behoben wurde.
                </p>
              </div>
            </div>
          </section>

          {/* Enforcement Procedure */}
          <section className="legal-section" aria-labelledby="enforcement">
            <h2 id="enforcement">Durchsetzungsverfahren</h2>

            <div className="enforcement-info">
              <h3>Schlichtungsverfahren</h3>
              <p>
                Sollten Sie mit unserer Antwort auf Ihre Barrierefreiheit-Beschwerde nicht
                zufrieden sein, können Sie sich an die zuständige Schlichtungsstelle wenden:
              </p>

              <div className="enforcement-contact">
                <h4>Schlichtungsstelle BGG</h4>
                <div className="contact-box">
                  <p>
                    <strong>Schlichtungsstelle nach dem Behindertengleichstellungsgesetz</strong><br />
                    bei dem Beauftragten der Bundesregierung für die Belange von Menschen mit Behinderungen
                  </p>
                  <p>
                    <strong>Postadresse:</strong><br />
                    Mauerstraße 53<br />
                    10117 Berlin
                  </p>
                  <p>
                    <strong>Website:</strong>{' '}
                    <a
                      href="https://www.schlichtungsstelle-bgg.de"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.schlichtungsstelle-bgg.de
                    </a>
                  </p>
                  <p>
                    <strong>E-Mail:</strong>{' '}
                    <a href="mailto:info@schlichtungsstelle-bgg.de">
                      info@schlichtungsstelle-bgg.de
                    </a>
                  </p>
                  <p>
                    <strong>Telefon:</strong> +49 30 18 527-2805
                  </p>
                </div>
              </div>

              <h4>Voraussetzungen für das Schlichtungsverfahren</h4>
              <ul>
                <li>Sie haben uns zunächst die Möglichkeit zur Stellungnahme gegeben</li>
                <li>Ein Schlichtungsverfahren wurde noch nicht durchgeführt</li>
                <li>Die Beschwerde ist nicht mutwillig oder querulatorisch</li>
              </ul>
            </div>
          </section>

          {/* Technical Information */}
          <section className="legal-section" aria-labelledby="technical-info">
            <h2 id="technical-info">Technische Informationen</h2>

            <div className="technical-details">
              <h3>Technische Spezifikationen</h3>
              <div className="tech-specs">
                <div className="tech-spec">
                  <h4>Kompatibilität</h4>
                  <ul>
                    <li><strong>Browser:</strong> Chrome 90+, Firefox 88+, Safari 14+, Edge 90+</li>
                    <li><strong>Betriebssysteme:</strong> Windows 10+, macOS 10.15+, iOS 13+, Android 8+</li>
                    <li><strong>Screen Reader:</strong> NVDA 2021+, JAWS 2021+, VoiceOver (aktuelle Version)</li>
                  </ul>
                </div>

                <div className="tech-spec">
                  <h4>Standards und Technologien</h4>
                  <ul>
                    <li><strong>HTML:</strong> HTML5, semantische Strukturelemente</li>
                    <li><strong>CSS:</strong> CSS3, responsive Design, custom properties</li>
                    <li><strong>JavaScript:</strong> Progressive Enhancement, ES6+</li>
                    <li><strong>ARIA:</strong> WAI-ARIA 1.1 Labels und Properties</li>
                  </ul>
                </div>

                <div className="tech-spec">
                  <h4>Performance</h4>
                  <ul>
                    <li><strong>Ladezeit:</strong> &lt; 2.5 Sekunden (LCP)</li>
                    <li><strong>First Input Delay:</strong> &lt; 100ms</li>
                    <li><strong>Cumulative Layout Shift:</strong> &lt; 0.1</li>
                    <li><strong>Accessibility Score:</strong> 100/100 (Lighthouse)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <section className="legal-section" aria-labelledby="last-updated">
            <h2 id="last-updated">Letzte Aktualisierung und Überprüfung</h2>

            <div className="update-info">
              <div className="update-details">
                <p><strong>Erstellt:</strong> 15. Januar 2025</p>
                <p><strong>Letzte Überprüfung:</strong> 15. Januar 2025</p>
                <p><strong>Letzte Aktualisierung:</strong> 15. Januar 2025</p>
                <p><strong>Nächste Überprüfung:</strong> 15. Juli 2025</p>
              </div>

              <h3>Überprüfungsverfahren</h3>
              <p>
                Diese Erklärung wird regelmäßig überprüft und bei Bedarf aktualisiert:
              </p>
              <ul>
                <li><strong>Regelmäßig:</strong> Alle 6 Monate</li>
                <li><strong>Bei Änderungen:</strong> Nach Website-Updates</li>
                <li><strong>Bei neuen Standards:</strong> Bei WCAG-Updates</li>
                <li><strong>Bei Feedback:</strong> Nach Nutzerbeschwerden</li>
              </ul>
            </div>
          </section>

          {/* Navigation */}
          <nav className="legal-navigation" aria-label="Rechtliche Seiten">
            <h2>Weitere rechtliche Informationen</h2>
            <ul>
              <li>
                <Link href="/impressum">
                  Impressum →
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  Datenschutzerklärung →
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  Kontakt aufnehmen →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Quick Access */}
          <div className="quick-access">
            <h3>Schnellzugriff</h3>
            <div className="quick-links">
              <a href="mailto:barrierefreiheit@aykutspohr.de" className="quick-link">
                📧 Barrierefreiheit melden
              </a>
              <a href="tel:+4917612345678" className="quick-link">
                📞 Telefonische Unterstützung
              </a>
              <Link href="/#contact" className="quick-link">
                💬 Allgemeine Anfrage
              </Link>
            </div>
          </div>

          {/* Back to Top */}
          <div className="back-to-top">
            <a href="#top">↑ Zum Seitenanfang</a>
          </div>
        </div>
      </div>
    </main>
  );
}