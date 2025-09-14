import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

/**
 * Impressum (Legal Notice) Page
 * German legal requirement for commercial websites
 *
 * Compliance:
 * - TMG (Telemediengesetz) § 5
 * - RStV (Rundfunkstaatsvertrag) § 55
 * - German commercial law requirements
 * - EU E-Commerce Directive
 */

export const metadata: Metadata = {
  title: 'Impressum - Aykut Spohr Web Development',
  description: 'Rechtliche Angaben und Kontaktinformationen gemäß TMG § 5 für Aykut Spohr Web Development.',
  robots: 'noindex, nofollow', // Legal pages typically don't need SEO indexing
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="container">
        <div className="legal-content">
          {/* Page Header */}
          <header className="legal-header">
            <h1>Impressum</h1>
            <p className="legal-subtitle">
              Angaben gemäß § 5 TMG (Telemediengesetz)
            </p>
            <nav aria-label="Seitennavigation">
              <Link href="/" className="back-link">
                ← Zurück zur Startseite
              </Link>
            </nav>
          </header>

          {/* Service Provider Information */}
          <section className="legal-section" aria-labelledby="service-provider">
            <h2 id="service-provider">Diensteanbieter</h2>
            <div className="contact-info">
              <p><strong>Aykut Spohr</strong></p>
              <p>Freiberuflicher Webentwickler</p>
              <p>Musterstraße 123</p>
              <p>10115 Berlin</p>
              <p>Deutschland</p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="legal-section" aria-labelledby="contact-info">
            <h2 id="contact-info">Kontaktaufnahme</h2>
            <div className="contact-details">
              <div className="contact-item">
                <h3>E-Mail-Adresse</h3>
                <p>
                  <a href="mailto:hallo@aykutspohr.de">hallo@aykutspohr.de</a>
                </p>
              </div>

              <div className="contact-item">
                <h3>Telefon</h3>
                <p>
                  <a href="tel:+4917612345678">+49 176 12345678</a>
                </p>
              </div>

              <div className="contact-item">
                <h3>Geschäftszeiten</h3>
                <p>Montag bis Freitag: 9:00 - 18:00 Uhr</p>
                <p>Termine nach Vereinbarung</p>
              </div>
            </div>
          </section>

          {/* Tax and Business Registration */}
          <section className="legal-section" aria-labelledby="tax-info">
            <h2 id="tax-info">Steuerliche Angaben</h2>
            <div className="tax-details">
              <div className="tax-item">
                <h3>Umsatzsteuer-Identifikationsnummer</h3>
                <p>DE123456789 (Beispiel)</p>
                <p className="note">
                  <strong>Hinweis:</strong> Als Kleinunternehmer nach § 19 UStG wird keine Umsatzsteuer ausgewiesen.
                </p>
              </div>

              <div className="tax-item">
                <h3>Steuernummer</h3>
                <p>12/345/67890 (Beispiel)</p>
                <p>Finanzamt Berlin Mitte/Tiergarten</p>
              </div>
            </div>
          </section>

          {/* Professional Information */}
          <section className="legal-section" aria-labelledby="professional-info">
            <h2 id="professional-info">Berufliche Angaben</h2>
            <div className="professional-details">
              <div className="professional-item">
                <h3>Berufsbezeichnung</h3>
                <p>Freiberuflicher Webentwickler und Consultant für digitale Lösungen</p>
              </div>

              <div className="professional-item">
                <h3>Tätigkeitsbereiche</h3>
                <ul>
                  <li>Webentwicklung und -design</li>
                  <li>E-Commerce-Lösungen</li>
                  <li>Performance-Optimierung</li>
                  <li>Digitale Beratung</li>
                  <li>Website-Wartung und -pflege</li>
                </ul>
              </div>

              <div className="professional-item">
                <h3>Berufsordnung</h3>
                <p>
                  Es gelten die allgemeinen Geschäftsbedingungen für IT-Dienstleistungen
                  sowie die Bestimmungen des deutschen Zivilrechts.
                </p>
              </div>
            </div>
          </section>

          {/* Editorial Responsibility */}
          <section className="legal-section" aria-labelledby="editorial">
            <h2 id="editorial">Redaktionell verantwortlich</h2>
            <div className="editorial-info">
              <p><strong>Aykut Spohr</strong></p>
              <p>Musterstraße 123</p>
              <p>10115 Berlin</p>
              <p>Deutschland</p>
              <p className="note">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </p>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="legal-section" aria-labelledby="dispute-resolution">
            <h2 id="dispute-resolution">Verbraucherstreitbeilegung</h2>
            <div className="dispute-info">
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h3>Online-Streitbeilegung (OS)</h3>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </div>
          </section>

          {/* Liability Disclaimer */}
          <section className="legal-section" aria-labelledby="liability">
            <h2 id="liability">Haftungsausschluss</h2>

            <div className="liability-section">
              <h3>Inhalte der Website</h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich.
              </p>
              <p>
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung,
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            <div className="liability-section">
              <h3>Externe Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </div>

            <div className="liability-section">
              <h3>Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis.
              </p>
            </div>
          </section>

          {/* Technical Information */}
          <section className="legal-section" aria-labelledby="technical">
            <h2 id="technical">Technische Umsetzung</h2>
            <div className="technical-info">
              <div className="tech-item">
                <h3>Hosting</h3>
                <p>Diese Website wird gehostet bei:</p>
                <p>
                  <strong>Cloudflare, Inc.</strong><br />
                  101 Townsend St<br />
                  San Francisco, CA 94107<br />
                  USA
                </p>
                <p>
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    Datenschutzerklärung des Hosting-Anbieters
                  </a>
                </p>
              </div>

              <div className="tech-item">
                <h3>SSL-Verschlüsselung</h3>
                <p>
                  Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung
                  vertraulicher Inhalte eine SSL-Verschlüsselung.
                </p>
              </div>

              <div className="tech-item">
                <h3>Content Delivery Network (CDN)</h3>
                <p>
                  Zur optimalen Auslieferung der Website-Inhalte nutzen wir das Cloudflare CDN.
                  Weitere Informationen finden Sie in unserer Datenschutzerklärung.
                </p>
              </div>
            </div>
          </section>

          {/* Copyright Notice */}
          <section className="legal-section" aria-labelledby="copyright">
            <h2 id="copyright">Urheberrechtshinweis</h2>
            <div className="copyright-info">
              <p>
                <strong>© {new Date().getFullYear()} Aykut Spohr</strong> - Alle Rechte vorbehalten.
              </p>
              <p>
                Das Layout, die verwendeten Grafiken sowie sämtliche Inhalte dieser Website sind
                urheberrechtlich geschützt. Jede Verwendung bedarf der ausdrücklichen Genehmigung.
              </p>

              <h3>Verwendete Ressourcen</h3>
              <ul>
                <li>Icons: Lucide Icons (MIT License)</li>
                <li>Schriftarten: System-Schriftarten</li>
                <li>Fotos: Eigene Aufnahmen oder lizenzfreie Stockfotos</li>
              </ul>
            </div>
          </section>

          {/* Contact for Legal Matters */}
          <section className="legal-section" aria-labelledby="legal-contact">
            <h2 id="legal-contact">Rechtliche Anfragen</h2>
            <div className="legal-contact-info">
              <p>
                Für rechtliche Anfragen, Beschwerden oder Hinweise auf Rechtsverletzungen
                wenden Sie sich bitte an:
              </p>
              <div className="contact-box">
                <p><strong>E-Mail:</strong> <a href="mailto:legal@aykutspohr.de">legal@aykutspohr.de</a></p>
                <p><strong>Betreff:</strong> "Rechtliche Angelegenheit - [Ihr Anliegen]"</p>
                <p><strong>Antwortzeit:</strong> Innerhalb von 48 Stunden</p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <section className="legal-section" aria-labelledby="last-updated">
            <h2 id="last-updated">Letzte Aktualisierung</h2>
            <div className="update-info">
              <p><strong>Stand:</strong> Januar 2025</p>
              <p>
                Dieses Impressum wird regelmäßig überprüft und bei Bedarf aktualisiert.
                Änderungen werden hier bekannt gegeben.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <nav className="legal-navigation" aria-label="Rechtliche Seiten">
            <h2>Weitere rechtliche Informationen</h2>
            <ul>
              <li>
                <Link href="/privacy">
                  Datenschutzerklärung →
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