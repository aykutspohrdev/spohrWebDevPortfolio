import type { Metadata } from 'next';
import { ThemeProvider } from '../components/ThemeProvider';
import { AccessibilityProvider, SkipNavigation } from '../components/AccessibilityProvider';
import { Navigation } from '../components/Navigation';
import { Footer } from './Footer/Footer';
import { themeInitScript } from '../lib/theme';
import '../styles/tokens.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Aykut Spohr - Web Development',
    default: 'Aykut Spohr - Professionelle Webentwicklung für deutsche Unternehmen',
  },
  description: 'Professionelle Webentwicklung aus Berlin. Landing Pages, E-Commerce und maßgeschneiderte Weblösungen für deutsche Unternehmen. DSGVO-konform, barrierefrei und performant.',
  keywords: [
    'Webentwicklung Berlin',
    'Website erstellen lassen',
    'E-Commerce Entwicklung',
    'Landing Page',
    'Webdesign',
    'DSGVO-konforme Website',
    'Barrierefreie Website',
    'Next.js Entwickler',
    'React Entwickler',
    'Freelancer Berlin'
  ],
  authors: [{ name: 'Aykut Spohr', url: 'https://aykutspohr.de' }],
  creator: 'Aykut Spohr',
  publisher: 'Aykut Spohr Web Development',
  alternates: {
    canonical: 'https://aykutspohr.de',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://aykutspohr.de',
    siteName: 'Aykut Spohr Web Development',
    title: 'Professionelle Webentwicklung aus Berlin',
    description: 'Maßgeschneiderte Weblösungen für deutsche Unternehmen. DSGVO-konform, barrierefrei und performant.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aykut Spohr - Web Development aus Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aykutspohr',
    creator: '@aykutspohr',
    title: 'Professionelle Webentwicklung aus Berlin',
    description: 'Maßgeschneiderte Weblösungen für deutsche Unternehmen. DSGVO-konform, barrierefrei und performant.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  classification: 'Web Development Services',
  other: {
    'msapplication-TileColor': '#dc2626',
    'theme-color': '#dc2626',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Initialization Script - Prevents FOUC */}
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aykut Spohr Web Development",
              "alternateName": "Aykut Spohr",
              "url": "https://aykutspohr.de",
              "logo": "https://aykutspohr.de/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+49-176-12345678",
                "contactType": "customer service",
                "areaServed": "DE",
                "availableLanguage": ["German", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Musterstraße 123",
                "addressLocality": "Berlin",
                "postalCode": "10115",
                "addressCountry": "DE"
              },
              "founder": {
                "@type": "Person",
                "name": "Aykut Spohr",
                "jobTitle": "Web Developer",
                "knowsAbout": ["Web Development", "React", "Next.js", "E-Commerce", "GDPR Compliance"]
              },
              "sameAs": [
                "https://github.com/aykutspohr",
                "https://linkedin.com/in/aykutspohr",
                "https://twitter.com/aykutspohr"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Custom website development using modern technologies"
                },
                {
                  "@type": "Service",
                  "name": "E-Commerce Development",
                  "description": "Online shop development with payment integration"
                },
                {
                  "@type": "Service",
                  "name": "Website Optimization",
                  "description": "Performance and SEO optimization for existing websites"
                }
              ]
            })
          }}
        />

        {/* Person Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aykut Spohr",
              "jobTitle": "Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Aykut Spohr Web Development"
              },
              "url": "https://aykutspohr.de",
              "image": "https://aykutspohr.de/aykut-spohr.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Berlin",
                "addressCountry": "DE"
              },
              "email": "hallo@aykutspohr.de",
              "telephone": "+49-176-12345678",
              "knowsAbout": [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Web Development",
                "E-Commerce",
                "GDPR Compliance",
                "Web Accessibility"
              ],
              "alumniOf": "Your University/Education",
              "nationality": "German"
            })
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Aykut Spohr Web Development",
              "alternateName": "Aykut Spohr Portfolio",
              "url": "https://aykutspohr.de",
              "description": "Professional web development services from Berlin, Germany",
              "publisher": {
                "@type": "Person",
                "name": "Aykut Spohr"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://aykutspohr.de/?search={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "inLanguage": "de-DE",
              "copyrightYear": "2025",
              "copyrightHolder": {
                "@type": "Person",
                "name": "Aykut Spohr"
              }
            })
          }}
        />

        {/* Professional Service Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
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
              "priceRange": "€€€",
              "serviceType": "Web Development",
              "areaServed": {
                "@type": "Country",
                "name": "Germany"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Landing Page Development",
                      "description": "Professional landing pages optimized for conversions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-Commerce Website",
                      "description": "Complete online shop solutions with payment integration"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Web Application",
                      "description": "Tailored web applications for specific business needs"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>

      <body className="antialiased font-sans">
        {/* Theme Provider and Accessibility Provider wrap entire app */}
        <ThemeProvider>
          <AccessibilityProvider>
            {/* Skip Navigation Links */}
            <SkipNavigation />

            {/* Site Header with Navigation */}
            <header className="site-header" role="banner">
              <Navigation />
            </header>

            {/* Main Content Area */}
            <main
              id="main-content"
              className="main-content"
              role="main"
              tabIndex={-1}
            >
              {children}
            </main>

            {/* Site Footer */}
            <Footer />

            {/* Focus Manager for Accessibility */}
            <div
              id="focus-manager"
              tabIndex={-1}
              aria-hidden="true"
              className="focus-manager"
            />

            {/* Announcement Region for Screen Readers - Managed by AccessibilityProvider */}
            <div
              id="announcements"
              aria-live="polite"
              aria-atomic="true"
              className="sr-only"
            />

            {/* High Priority Announcements - Managed by AccessibilityProvider */}
            <div
              id="urgent-announcements"
              aria-live="assertive"
              aria-atomic="true"
              className="sr-only"
            />
          </AccessibilityProvider>
        </ThemeProvider>

        {/* Performance and Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                      console.log('LCP:', entry.startTime);
                    }
                    if (entry.entryType === 'first-input') {
                      console.log('FID:', entry.processingStart - entry.startTime);
                    }
                    if (entry.entryType === 'layout-shift') {
                      if (!entry.hadRecentInput) {
                        console.log('CLS:', entry.value);
                      }
                    }
                  }
                });

                observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
              }

              // Reduced motion detection
              if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.documentElement.classList.add('reduce-motion');
              }

              // High contrast detection
              if (window.matchMedia('(prefers-contrast: high)').matches) {
                document.documentElement.classList.add('high-contrast');
              }

              // Focus visible polyfill
              (function() {
                let hadKeyboardEvent = true;
                let keyboardThrottleTimeout;

                function setHadKeyboardEvent() {
                  hadKeyboardEvent = true;
                  clearTimeout(keyboardThrottleTimeout);
                  keyboardThrottleTimeout = setTimeout(() => {
                    hadKeyboardEvent = false;
                  }, 100);
                }

                document.addEventListener('keydown', setHadKeyboardEvent);
                document.addEventListener('mousedown', () => hadKeyboardEvent = false);

                document.addEventListener('focusin', (e) => {
                  if (hadKeyboardEvent) {
                    e.target.classList.add('focus-visible');
                  }
                });

                document.addEventListener('focusout', (e) => {
                  e.target.classList.remove('focus-visible');
                });
              })();
            `
          }}
        />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                      console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}