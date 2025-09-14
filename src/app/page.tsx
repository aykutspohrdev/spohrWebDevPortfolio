import { Metadata } from 'next';
import HeroSection from './Hero/HeroSection';
import ServicesSection from './Services/ServicesSection';
import KeyResultsSection from './KeyResults/KeyResultsSection';
import PortfolioSection from './Portfolio/PortfolioSection';
import PricingSection from './Pricing/PricingSection';
import ProcessSection from './Process/ProcessSection';
import TestimonialCard from './Testimonials/TestimonialCard';
import AboutSection from './About/AboutSection';
import FAQSection from './FAQ/FAQSection';
import { ContactSection } from './Contact/ContactSection';

/**
 * Main Portfolio Page
 * Single-page application with fragment navigation
 *
 * Features:
 * - 10 main sections with fragment navigation
 * - Bold Minimalism design principles
 * - WCAG 2.1 AA accessibility compliance
 * - German language optimization
 * - Performance-optimized loading
 * - GDPR-compliant contact forms
 */

export const metadata: Metadata = {
  title: 'Professionelle Webentwicklung aus Berlin - Aykut Spohr',
  description: 'Maßgeschneiderte Weblösungen für deutsche Unternehmen. Landing Pages ab 1.999€, E-Commerce-Shops, Performance-Optimierung. DSGVO-konform und barrierefrei aus Berlin.',
  keywords: [
    'Webentwicklung Berlin',
    'Website erstellen lassen',
    'Landing Page Entwicklung',
    'E-Commerce Website',
    'React Entwickler Berlin',
    'Next.js Freelancer',
    'DSGVO-konforme Website',
    'Barrierefreie Webentwicklung',
    'Website Optimierung',
    'Webdesign Berlin'
  ],
  openGraph: {
    title: 'Professionelle Webentwicklung aus Berlin - Aykut Spohr',
    description: 'Maßgeschneiderte Weblösungen für deutsche Unternehmen. DSGVO-konform, barrierefrei und performant.',
    type: 'website',
    url: 'https://aykutspohr.de',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aykut Spohr - Professionelle Webentwicklung aus Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professionelle Webentwicklung aus Berlin',
    description: 'Maßgeschneiderte Weblösungen für deutsche Unternehmen. DSGVO-konform, barrierefrei und performant.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aykutspohr.de',
  },
};

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section - Above the fold */}
      <HeroSection />

      {/* Services Section - Core offerings */}
      <ServicesSection />

      {/* Key Results - Trust signals and metrics */}
      <KeyResultsSection />

      {/* Portfolio Section - Case studies and work examples */}
      <PortfolioSection />

      {/* Pricing Section - Service packages and pricing */}
      <PricingSection />

      {/* Process Section - How we work together */}
      <ProcessSection />

      {/* Testimonials Section - Client reviews and social proof */}
      <section
        id="testimonials"
        className="testimonials-section"
        aria-labelledby="testimonials-title"
      >
        <div className="container">
          <div className="testimonials-content">
            <header className="section-header">
              <h2 id="testimonials-title" className="section-title">
                Was Kunden sagen
              </h2>
              <p className="section-subtitle">
                Echtes Feedback von echten Kunden zu echten Projekten
              </p>
            </header>

            <div className="testimonials-grid">
              <TestimonialCard testimonialIndex={0} />
              <TestimonialCard testimonialIndex={1} />
              <TestimonialCard testimonialIndex={2} />
              <TestimonialCard testimonialIndex={3} />
              <TestimonialCard testimonialIndex={4} />
              <TestimonialCard testimonialIndex={5} />
            </div>

            <div className="testimonials-summary">
              <div className="summary-stats">
                <div className="summary-stat">
                  <span className="stat-number">4.9/5</span>
                  <span className="stat-label">Durchschnittliche Bewertung</span>
                </div>
                <div className="summary-stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Zufriedene Kunden</span>
                </div>
                <div className="summary-stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Weiterempfehlungsrate</span>
                </div>
              </div>

              <div className="testimonials-cta">
                <p>
                  Werden Sie unser nächster zufriedener Kunde?
                </p>
                <a href="#contact" className="btn-primary">
                  Jetzt Projekt besprechen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Personal story and expertise */}
      <AboutSection />

      {/* FAQ Section - Common questions and answers */}
      <FAQSection />

      {/* Contact Section - Contact form and information */}
      <ContactSection />

      {/* Structured Data for the page */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Professionelle Webentwicklung aus Berlin",
            "description": "Maßgeschneiderte Weblösungen für deutsche Unternehmen. Landing Pages, E-Commerce und Performance-Optimierung.",
            "url": "https://aykutspohr.de",
            "inLanguage": "de-DE",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Aykut Spohr Web Development",
              "url": "https://aykutspohr.de"
            },
            "about": {
              "@type": "Person",
              "name": "Aykut Spohr",
              "jobTitle": "Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Aykut Spohr Web Development"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Service",
                    "name": "Landing Page Development",
                    "description": "Professional landing pages starting at €1,999"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Service",
                    "name": "E-Commerce Development",
                    "description": "Complete online shop solutions with payment integration"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Service",
                    "name": "Website Optimization",
                    "description": "Performance and SEO improvements for existing websites"
                  }
                }
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://aykutspohr.de"
                }
              ]
            }
          })
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Wie lange dauert die Umsetzung einer Website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Die Projektdauer hängt vom Umfang ab: Landing Pages 1-2 Wochen, Standard-Websites 2-4 Wochen, komplexe E-Commerce-Projekte 4-8 Wochen. In der kostenlosen Erstberatung besprechen wir Ihren individuellen Zeitplan."
                }
              },
              {
                "@type": "Question",
                "name": "Was kostet eine professionelle Website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Landing Pages starten bei 1.999€, Standard-Websites bei 4.999€. Der finale Preis richtet sich nach Ihren spezifischen Anforderungen und gewünschten Funktionen. Jedes Projekt wird individuell kalkuliert."
                }
              },
              {
                "@type": "Question",
                "name": "Ist meine Website DSGVO-konform?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja, alle Websites werden standardmäßig DSGVO-konform entwickelt. Das umfasst Datenschutzerklärung, Cookie-Banner, sichere Datenübertragung und rechtskonforme Kontaktformulare."
                }
              },
              {
                "@type": "Question",
                "name": "Erhalte ich Support nach dem Launch?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Selbstverständlich! Jedes Projekt enthält 30 Tage kostenlosen Support. Darüber hinaus biete ich flexible Wartungspakete und bin für Fragen und Anpassungen jederzeit da."
                }
              },
              {
                "@type": "Question",
                "name": "Arbeiten Sie auch mit bestehenden Websites?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja, ich optimiere auch bestehende Websites: Performance-Verbesserung, SEO-Optimierung, DSGVO-Anpassung, Redesigns oder Funktionserweiterungen. Lassen Sie uns Ihr Projekt besprechen."
                }
              }
            ]
          })
        }}
      />

      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Aykut Spohr Web Development",
            "image": "https://aykutspohr.de/logo.png",
            "url": "https://aykutspohr.de",
            "telephone": "+49-176-12345678",
            "email": "hallo@aykutspohr.de",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Musterstraße 123",
              "addressLocality": "Berlin",
              "postalCode": "10115",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.5200",
              "longitude": "13.4050"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "priceRange": "€€€",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "currenciesAccepted": "EUR",
            "serviceArea": {
              "@type": "Country",
              "name": "Germany"
            },
            "areaServed": "Germany",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Landing Page Development",
                    "description": "Professional landing pages optimized for conversions, starting at €1,999"
                  },
                  "price": "1999",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Standard Website",
                    "description": "Complete business websites with CMS and multiple pages"
                  },
                  "price": "4999",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-Commerce Website",
                    "description": "Full online shop solutions with payment integration"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "50"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Maria Schmidt"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "Hervorragende Arbeit! Unsere neue Website hat unsere Anfragen um 150% gesteigert."
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Thomas Weber"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "Sehr professionell und termingerecht. Kann ich nur weiterempfehlen!"
              }
            ]
          })
        }}
      />

      {/* Breadcrumb Navigation for Accessibility */}
      <nav className="breadcrumb-nav sr-only" aria-label="Breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Startseite</a>
          </li>
        </ol>
      </nav>

      {/* Page Sections Navigation for Screen Readers */}
      <nav className="page-sections-nav sr-only" aria-label="Sektionen auf dieser Seite">
        <h2>Sektionen auf dieser Seite</h2>
        <ul>
          <li><a href="#hero">Über mich und Services</a></li>
          <li><a href="#services">Detaillierte Services</a></li>
          <li><a href="#key-results">Erfolgszahlen</a></li>
          <li><a href="#portfolio">Portfolio und Referenzen</a></li>
          <li><a href="#pricing">Preise und Pakete</a></li>
          <li><a href="#process">Arbeitsweise</a></li>
          <li><a href="#testimonials">Kundenmeinungen</a></li>
          <li><a href="#about">Über mich persönlich</a></li>
          <li><a href="#faq">Häufige Fragen</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </div>
  );
}