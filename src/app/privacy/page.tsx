import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

/**
 * Privacy Policy Page (Datenschutzerklärung)
 * GDPR-compliant privacy policy for German websites
 *
 * Compliance:
 * - EU GDPR (General Data Protection Regulation)
 * - German BDSG (Bundesdatenschutzgesetz)
 * - TMG (Telemediengesetz) privacy requirements
 * - ePrivacy Directive compliance
 */

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - Aykut Spohr Web Development',
  description: 'Datenschutzerklärung gemäß DSGVO für die Website von Aykut Spohr Web Development. Informationen zum Umgang mit personenbezogenen Daten.',
  robots: 'noindex, nofollow', // Legal pages typically don't need SEO indexing
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="container">
        <div className="legal-content">
          {/* Page Header */}
          <header className="legal-header">
            <h1>Datenschutzerklärung</h1>
            <p className="legal-subtitle">
              Informationen zum Datenschutz gemäß Art. 13, 14 DSGVO
            </p>
            <nav aria-label="Seitennavigation">
              <Link href="/" className="back-link">
                ← Zurück zur Startseite
              </Link>
            </nav>
          </header>

          {/* Table of Contents */}
          <section className="legal-section" aria-labelledby="table-of-contents">
            <h2 id="table-of-contents">Inhalt dieser Datenschutzerklärung</h2>
            <nav className="toc">
              <ol>
                <li><a href="#controller">Verantwortlicher</a></li>
                <li><a href="#dpo">Datenschutzbeauftragter</a></li>
                <li><a href="#data-processing">Datenverarbeitung auf dieser Website</a></li>
                <li><a href="#contact-form">Kontaktformular</a></li>
                <li><a href="#email-contact">E-Mail-Kontakt</a></li>
                <li><a href="#hosting">Hosting</a></li>
                <li><a href="#cdn">Content Delivery Network</a></li>
                <li><a href="#analytics">Webanalyse</a></li>
                <li><a href="#cookies">Cookies</a></li>
                <li><a href="#data-rights">Ihre Rechte</a></li>
                <li><a href="#data-retention">Speicherdauer</a></li>
                <li><a href="#data-security">Datensicherheit</a></li>
                <li><a href="#changes">Änderungen dieser Erklärung</a></li>
              </ol>
            </nav>
          </section>

          {/* Controller Information */}
          <section className="legal-section" aria-labelledby="controller">
            <h2 id="controller">1. Verantwortlicher für die Datenverarbeitung</h2>
            <div className="controller-info">
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <div className="contact-box">
                <p><strong>Aykut Spohr</strong></p>
                <p>Freiberuflicher Webentwickler</p>
                <p>Musterstraße 123</p>
                <p>10115 Berlin</p>
                <p>Deutschland</p>
                <br />
                <p><strong>E-Mail:</strong> <a href="mailto:hallo@aykutspohr.de">hallo@aykutspohr.de</a></p>
                <p><strong>Telefon:</strong> <a href="tel:+4917612345678">+49 176 12345678</a></p>
              </div>
            </div>
          </section>

          {/* Data Protection Officer */}
          <section className="legal-section" aria-labelledby="dpo">
            <h2 id="dpo">2. Datenschutzbeauftragter</h2>
            <div className="dpo-info">
              <p>
                Als Einzelunternehmer sind wir nicht zur Bestellung eines Datenschutzbeauftragten
                verpflichtet. Bei datenschutzrechtlichen Fragen wenden Sie sich direkt an uns:
              </p>
              <p>
                <strong>E-Mail:</strong> <a href="mailto:datenschutz@aykutspohr.de">datenschutz@aykutspohr.de</a>
              </p>
            </div>
          </section>

          {/* General Data Processing */}
          <section className="legal-section" aria-labelledby="data-processing">
            <h2 id="data-processing">3. Datenverarbeitung auf dieser Website</h2>

            <div className="processing-section">
              <h3>Automatische Datenerhebung</h3>
              <p>
                Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst.
                Diese Informationen (Server-Logfiles) beinhalten etwa:
              </p>
              <ul>
                <li>Den Typ und die Version Ihres Internetbrowsers</li>
                <li>Das verwendete Betriebssystem</li>
                <li>Die Referrer URL (zuvor besuchte Seite)</li>
                <li>Die IP-Adresse des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>Aufgerufene Dateien</li>
              </ul>

              <div className="legal-basis">
                <h4>Rechtsgrundlage</h4>
                <p>
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Unser berechtigtes Interesse
                  liegt im ordnungsgemäßen Betrieb der Website, der Gewährleistung der Systemsicherheit
                  und der Optimierung unserer Internetpräsenz.
                </p>
              </div>

              <div className="data-purpose">
                <h4>Zweck der Datenverarbeitung</h4>
                <ul>
                  <li>Bereitstellung der Website und ihrer Funktionalitäten</li>
                  <li>Gewährleistung der Systemsicherheit</li>
                  <li>Optimierung der Website</li>
                  <li>Fehlerdiagnose und -behebung</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="legal-section" aria-labelledby="contact-form">
            <h2 id="contact-form">4. Kontaktformular</h2>

            <div className="contact-form-info">
              <h3>Erhobene Daten</h3>
              <p>Wenn Sie unser Kontaktformular nutzen, erheben wir folgende Daten:</p>

              <div className="data-categories">
                <div className="data-category">
                  <h4>Pflichtangaben</h4>
                  <ul>
                    <li>Name</li>
                    <li>E-Mail-Adresse</li>
                    <li>Projekttyp</li>
                    <li>Nachricht</li>
                    <li>Datenschutz-Einverständnis</li>
                  </ul>
                </div>

                <div className="data-category">
                  <h4>Freiwillige Angaben</h4>
                  <ul>
                    <li>Firmenname</li>
                    <li>Telefonnummer</li>
                    <li>Projektbudget</li>
                    <li>Gewünschter Zeitrahmen</li>
                    <li>Bevorzugte Kontaktmethode</li>
                    <li>Marketing-Einverständnis</li>
                  </ul>
                </div>

                <div className="data-category">
                  <h4>Technische Daten</h4>
                  <ul>
                    <li>IP-Adresse (anonymisiert)</li>
                    <li>Zeitstempel der Übermittlung</li>
                    <li>Browser-Information (User Agent)</li>
                  </ul>
                </div>
              </div>

              <div className="legal-basis">
                <h4>Rechtsgrundlage</h4>
                <p>
                  <strong>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong> für alle Daten, die Sie
                  durch das Ausfüllen des Kontaktformulars freiwillig übermitteln.
                </p>
              </div>

              <div class="data-purpose">
                <h4>Zweck der Datenverarbeitung</h4>
                <ul>
                  <li>Bearbeitung Ihrer Kontaktanfrage</li>
                  <li>Erstberatung und Angebotserstellung</li>
                  <li>Projektabwicklung (bei Vertragsschluss)</li>
                  <li>Marketing-Kommunikation (nur bei separater Einwilligung)</li>
                </ul>
              </div>

              <div className="consent-info">
                <h4>Einwilligungen</h4>
                <div className="consent-details">
                  <p><strong>Erforderliche Einwilligung (Pflicht):</strong></p>
                  <p>
                    "Ich stimme der Verarbeitung meiner personenbezogenen Daten zum Zweck der
                    Kontaktaufnahme und Projektanfrage zu."
                  </p>

                  <p><strong>Marketing-Einwilligung (freiwillig):</strong></p>
                  <p>
                    "Ja, ich möchte gelegentlich nützliche Tipps und Angebote per E-Mail erhalten."
                  </p>

                  <p className="consent-withdrawal">
                    <strong>Widerruf:</strong> Beide Einwilligungen können Sie jederzeit durch eine
                    E-Mail an <a href="mailto:hallo@aykutspohr.de">hallo@aykutspohr.de</a> widerrufen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* E-Mail Contact */}
          <section className="legal-section" aria-labelledby="email-contact">
            <h2 id="email-contact">5. E-Mail-Kontakt</h2>
            <div className="email-info">
              <p>
                Bei der Kontaktaufnahme per E-Mail werden die von Ihnen mitgeteilten Daten
                (E-Mail-Adresse, gegebenenfalls Name und Telefonnummer) von uns gespeichert,
                um Ihre Fragen zu beantworten.
              </p>

              <div className="legal-basis">
                <h4>Rechtsgrundlage</h4>
                <p>
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
                </p>
              </div>

              <div className="data-retention">
                <h4>Löschung</h4>
                <p>
                  Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung
                  nicht mehr erforderlich sind. Für E-Mail-Anfragen ist dies der Fall, wenn die
                  jeweilige Konversation beendet ist.
                </p>
              </div>
            </div>
          </section>

          {/* Hosting */}
          <section className="legal-section" aria-labelledby="hosting">
            <h2 id="hosting">6. Hosting und Content Delivery Network</h2>

            <div className="hosting-info">
              <h3>Cloudflare</h3>
              <p>
                Diese Website wird über das Content Delivery Network (CDN) von Cloudflare bereitgestellt:
              </p>

              <div className="provider-info">
                <p><strong>Cloudflare, Inc.</strong></p>
                <p>101 Townsend St</p>
                <p>San Francisco, CA 94107</p>
                <p>USA</p>
                <p>
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Datenschutzerklärung von Cloudflare
                  </a>
                </p>
              </div>

              <div className="legal-basis">
                <h4>Rechtsgrundlage</h4>
                <p>
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren und effizienten
                  Bereitstellung unserer Website).
                </p>
              </div>

              <div className="data-transfer">
                <h4>Datenübertragung in Drittländer</h4>
                <p>
                  Cloudflare verarbeitet Daten auch in den USA. Die Datenübertragung erfolgt auf Basis
                  der EU-Standardvertragsklauseln und Cloudflares Binding Corporate Rules.
                </p>
              </div>

              <div className="processed-data">
                <h4>Verarbeitete Daten</h4>
                <ul>
                  <li>IP-Adresse (anonymisiert nach 24 Stunden)</li>
                  <li>Informationen über den verwendeten Browser</li>
                  <li>Referrer URL</li>
                  <li>Zeitstempel der Anfrage</li>
                  <li>Übertragene Datenmenge</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Analytics */}
          <section className="legal-section" aria-labelledby="analytics">
            <h2 id="analytics">7. Webanalyse</h2>

            <div className="analytics-info">
              <h3>Privacy-First Ansatz</h3>
              <p>
                Wir verwenden <strong>keine</strong> herkömmlichen Tracking-Tools wie Google Analytics.
                Stattdessen setzen wir auf datenschutzfreundliche Alternativen:
              </p>

              <div className="analytics-method">
                <h4>Server-basierte Analyse</h4>
                <p>
                  Wir analysieren aggregierte, anonymisierte Zugriffsdaten aus unseren Server-Logs:
                </p>
                <ul>
                  <li>Seitenaufrufe (ohne Personenbezug)</li>
                  <li>Beliebteste Inhalte</li>
                  <li>Technische Performance-Daten</li>
                  <li>Fehlerrate und Ladezeiten</li>
                </ul>
                <p><strong>Keine Cookies, keine IP-Adressen, keine Personenzuordnung.</strong></p>
              </div>

              <div className="legal-basis">
                <h4>Rechtsgrundlage</h4>
                <p>
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Optimierung unserer Website).
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="legal-section" aria-labelledby="cookies">
            <h2 id="cookies">8. Cookies</h2>

            <div className="cookies-info">
              <h3>Cookie-freier Ansatz</h3>
              <p>
                Diese Website funktioniert <strong>weitgehend ohne Cookies</strong>. Die einzigen
                gespeicherten Daten werden lokal in Ihrem Browser gespeichert für:
              </p>

              <div className="cookie-types">
                <div className="cookie-type">
                  <h4>LocalStorage (Lokal gespeicherte Daten)</h4>
                  <ul>
                    <li><strong>Theme-Einstellung:</strong> Ihre Präferenz für Dark/Light Mode</li>
                    <li><strong>Einwilligungen:</strong> Ihre Datenschutz-Einwilligungen</li>
                  </ul>
                  <p>
                    Diese Daten bleiben nur auf Ihrem Gerät und werden nicht an Server übertragen.
                  </p>
                </div>

                <div className="cookie-type">
                  <h4>Technisch notwendige Cookies</h4>
                  <p>
                    Cloudflare kann technisch notwendige Cookies setzen für:
                  </p>
                  <ul>
                    <li>DDoS-Schutz und Sicherheit</li>
                    <li>Load Balancing</li>
                    <li>Bot-Erkennung</li>
                  </ul>
                  <p>
                    Diese sind für den sicheren Betrieb der Website erforderlich.
                  </p>
                </div>
              </div>

              <div className="cookie-control">
                <h4>Kontrolle über Cookies</h4>
                <p>
                  Sie können in Ihren Browser-Einstellungen das Setzen von Cookies generell verhindern,
                  selektiv akzeptieren oder Cookies für bestimmte Bereiche ausschließen.
                </p>
              </div>
            </div>
          </section>

          {/* Data Rights */}
          <section className="legal-section" aria-labelledby="data-rights">
            <h2 id="data-rights">9. Ihre Rechte als betroffene Person</h2>

            <div className="rights-info">
              <p>
                Sie haben folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
              </p>

              <div className="rights-list">
                <div className="right-item">
                  <h4>Recht auf Auskunft (Art. 15 DSGVO)</h4>
                  <p>
                    Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.
                  </p>
                </div>

                <div className="right-item">
                  <h4>Recht auf Berichtigung (Art. 16 DSGVO)</h4>
                  <p>
                    Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung
                    richtiger Daten zu verlangen.
                  </p>
                </div>

                <div className="right-item">
                  <h4>Recht auf Löschung (Art. 17 DSGVO)</h4>
                  <p>
                    Sie können die Löschung Ihrer personenbezogenen Daten verlangen, sofern keine
                    gesetzlichen Aufbewahrungspflichten entgegenstehen.
                  </p>
                </div>

                <div className="right-item">
                  <h4>Recht auf Einschränkung (Art. 18 DSGVO)</h4>
                  <p>
                    Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.
                  </p>
                </div>

                <div className="right-item">
                  <h4>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h4>
                  <p>
                    Sie können verlangen, dass wir Ihnen Ihre Daten in einem strukturierten, gängigen
                    und maschinenlesbaren Format übermitteln.
                  </p>
                </div>

                <div className="right-item">
                  <h4>Widerspruchsrecht (Art. 21 DSGVO)</h4>
                  <p>
                    Sie können jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
                    einlegen, wenn die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht.
                  </p>
                </div>

                <div className="right-item">
                  <h4>Widerruf von Einwilligungen</h4>
                  <p>
                    Sie können erteilte Einwilligungen jederzeit mit Wirkung für die Zukunft widerrufen.
                  </p>
                </div>
              </div>

              <div className="rights-contact">
                <h4>Ausübung Ihrer Rechte</h4>
                <p>
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
                </p>
                <div className="contact-box">
                  <p><strong>E-Mail:</strong> <a href="mailto:datenschutz@aykutspohr.de">datenschutz@aykutspohr.de</a></p>
                  <p><strong>Betreff:</strong> "Betroffenenrecht - [Ihr Anliegen]"</p>
                  <p><strong>Antwortzeit:</strong> Innerhalb eines Monats</p>
                </div>
              </div>

              <div className="complaint-right">
                <h4>Beschwerderecht</h4>
                <p>
                  Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung
                  Ihrer personenbezogenen Daten durch uns zu beschweren.
                </p>
                <p>
                  <strong>Zuständige Aufsichtsbehörde:</strong><br />
                  Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
                  Friedrichstr. 219, 10969 Berlin<br />
                  <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer">
                    www.datenschutz-berlin.de
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section className="legal-section" aria-labelledby="data-retention">
            <h2 id="data-retention">10. Speicherdauer</h2>

            <div className="retention-info">
              <h3>Grundsätze der Datenspeicherung</h3>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie es für die Erfüllung der
                jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
              </p>

              <div className="retention-periods">
                <div className="retention-item">
                  <h4>Kontaktanfragen</h4>
                  <p><strong>Dauer:</strong> 3 Jahre</p>
                  <p><strong>Grund:</strong> Geschäftliche Korrespondenz und Nachweispflichten</p>
                </div>

                <div className="retention-item">
                  <h4>Marketing-Einwilligungen</h4>
                  <p><strong>Dauer:</strong> Bis zum Widerruf</p>
                  <p><strong>Grund:</strong> Nachweis der erteilten Einwilligung</p>
                </div>

                <div className="retention-item">
                  <h4>Vertragsdaten</h4>
                  <p><strong>Dauer:</strong> 10 Jahre</p>
                  <p><strong>Grund:</strong> Handelsrechtliche Aufbewahrungspflichten (§ 257 HGB)</p>
                </div>

                <div className="retention-item">
                  <h4>Server-Logs</h4>
                  <p><strong>Dauer:</strong> 30 Tage</p>
                  <p><strong>Grund:</strong> Sicherheit und Fehlerdiagnose</p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="legal-section" aria-labelledby="data-security">
            <h2 id="data-security">11. Datensicherheit</h2>

            <div className="security-info">
              <h3>Technische und organisatorische Maßnahmen</h3>
              <p>
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten
                gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen
                den Zugriff unberechtigter Personen zu schützen.
              </p>

              <div className="security-measures">
                <div className="security-category">
                  <h4>Verschlüsselung</h4>
                  <ul>
                    <li>SSL/TLS-Verschlüsselung für alle Datenübertragungen</li>
                    <li>HTTPS für die gesamte Website</li>
                    <li>Ende-zu-Ende-Verschlüsselung für E-Mail-Kommunikation</li>
                  </ul>
                </div>

                <div className="security-category">
                  <h4>Zugriffskontrolle</h4>
                  <ul>
                    <li>Starke Authentifizierung</li>
                    <li>Regelmäßige Passwort-Updates</li>
                    <li>Minimale Zugriffsrechte (Least Privilege)</li>
                  </ul>
                </div>

                <div className="security-category">
                  <h4>Infrastruktur-Sicherheit</h4>
                  <ul>
                    <li>DDoS-Schutz durch Cloudflare</li>
                    <li>Firewall-Schutz</li>
                    <li>Regelmäßige Sicherheitsupdates</li>
                    <li>Monitoring und Incident Response</li>
                  </ul>
                </div>

                <div className="security-category">
                  <h4>Datensicherung</h4>
                  <ul>
                    <li>Regelmäßige, verschlüsselte Backups</li>
                    <li>Geografisch verteilte Datenspeicherung</li>
                    <li>Disaster Recovery Pläne</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="legal-section" aria-labelledby="changes">
            <h2 id="changes">12. Änderungen dieser Datenschutzerklärung</h2>

            <div className="changes-info">
              <h3>Aktualisierungen</h3>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025.
              </p>
              <p>
                Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter
                gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden,
                diese Datenschutzerklärung zu ändern.
              </p>

              <h4>Benachrichtigung bei Änderungen</h4>
              <p>
                Bei wesentlichen Änderungen werden wir Sie darüber informieren:
              </p>
              <ul>
                <li>Durch einen deutlichen Hinweis auf der Website</li>
                <li>Per E-Mail (wenn Sie uns Ihre E-Mail-Adresse mitgeteilt haben)</li>
                <li>Durch eine neue Einverständniserklärung (wenn erforderlich)</li>
              </ul>

              <h4>Versionierung</h4>
              <p>
                <strong>Aktuelle Version:</strong> 2.1<br />
                <strong>Letzte Aktualisierung:</strong> Januar 2025<br />
                <strong>Nächste Überprüfung:</strong> Juli 2025
              </p>
            </div>
          </section>

          {/* Contact for Data Protection */}
          <section className="legal-section" aria-labelledby="data-protection-contact">
            <h2 id="data-protection-contact">Kontakt bei Datenschutzfragen</h2>

            <div className="contact-info">
              <p>
                Bei Fragen zum Datenschutz oder zur Verarbeitung Ihrer personenbezogenen Daten
                kontaktieren Sie uns gerne:
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <h4>Allgemeine Datenschutzfragen</h4>
                  <p>
                    <strong>E-Mail:</strong> <a href="mailto:datenschutz@aykutspohr.de">datenschutz@aykutspohr.de</a><br />
                    <strong>Antwortzeit:</strong> Innerhalb von 48 Stunden
                  </p>
                </div>

                <div className="contact-method">
                  <h4>Ausübung von Betroffenenrechten</h4>
                  <p>
                    <strong>E-Mail:</strong> <a href="mailto:datenschutz@aykutspohr.de">datenschutz@aykutspohr.de</a><br />
                    <strong>Betreff:</strong> "Betroffenenrecht - [Ihr Anliegen]"<br />
                    <strong>Antwortzeit:</strong> Innerhalb eines Monats
                  </p>
                </div>

                <div className="contact-method">
                  <h4>Datenschutz-Notfälle</h4>
                  <p>
                    Bei vermuteten Datenschutzverletzungen:<br />
                    <strong>E-Mail:</strong> <a href="mailto:incident@aykutspohr.de">incident@aykutspohr.de</a><br />
                    <strong>Antwortzeit:</strong> Innerhalb von 24 Stunden
                  </p>
                </div>
              </div>
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
                <Link href="/accessibility">
                  Barrierefreiheitserklärung →
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  Kontakt aufnehmen →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Back to Top */}
          <div className="back-to-top">
            <a href="#top">↑ Zum Seitenanfang</a>
          </div>
        </div>
      </div>
    </main>
  );
}