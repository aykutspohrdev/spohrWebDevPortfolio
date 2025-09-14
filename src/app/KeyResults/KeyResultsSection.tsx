'use client';

import { useState, useEffect } from 'react';
import {
  ChartBarIcon,
  TrophyIcon,
  StarIcon,
  RocketLaunchIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { Container, SectionWrapper, SectionHeading, Card, Grid } from '@/components/Layout';
import { scrollToSection } from '@/lib/navigation';

/**
 * Key Results Section Component
 * Displays key metrics, achievements, and trust indicators
 * Positioned between Services and Portfolio sections per navigation structure
 */
export default function KeyResultsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGetQuote = () => {
    scrollToSection('contact');
  };

  if (!mounted) {
    return null;
  }

  return (
    <SectionWrapper
      id="key-results"
      className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/10 dark:via-slate-900 dark:to-secondary-900/10"
      aria-label="Ergebnisse-Bereich"
    >
      <Container>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="Messbare Ergebnisse für Ihr Unternehmen"
            subtitle="Erfolg, den Sie spüren werden"
            centered
          />

          <p className="text-lg text-slate-600 dark:text-slate-300 mt-6 leading-relaxed">
            Zahlen lügen nicht: Meine Kunden erleben durchschnittlich
            <strong className="text-slate-900 dark:text-white"> +150% mehr Anfragen</strong> und
            <strong className="text-slate-900 dark:text-white"> +85% bessere Rankings</strong> nach dem Website-Relaunch.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <Grid cols={1} mdCols={2} lgCols={4} className="gap-8 mb-16">

          {/* More Inquiries */}
          <Card className="text-center p-8 group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-primary-200 dark:border-primary-800">
            <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <ArrowTrendingUpIcon className="w-8 h-8 text-white" />
            </div>

            <div className="text-4xl lg:text-5xl font-black text-primary-700 dark:text-primary-300 mb-2">
              +150%
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Mehr Kundenanfragen
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Durchschnittliche Steigerung der Online-Anfragen innerhalb von 6 Monaten
            </p>
          </Card>

          {/* Better Rankings */}
          <Card className="text-center p-8 group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 border-secondary-200 dark:border-secondary-800">
            <div className="w-16 h-16 bg-secondary-600 dark:bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <TrophyIcon className="w-8 h-8 text-white" />
            </div>

            <div className="text-4xl lg:text-5xl font-black text-secondary-700 dark:text-secondary-300 mb-2">
              +85%
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Bessere Rankings
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Top 10 Google-Positionen für wichtige Suchbegriffe erreicht
            </p>
          </Card>

          {/* Customer Satisfaction */}
          <Card className="text-center p-8 group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
            <div className="w-16 h-16 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <StarIcon className="w-8 h-8 text-white" />
            </div>

            <div className="flex items-center justify-center mb-2">
              <span className="text-4xl lg:text-5xl font-black text-green-700 dark:text-green-300">
                4.9
              </span>
              <StarIcon className="w-8 h-8 text-yellow-400 ml-2" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Kundenzufriedenheit
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Durchschnittsbewertung aus über 50 abgeschlossenen Projekten
            </p>
          </Card>

          {/* Fast Loading */}
          <Card className="text-center p-8 group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
            <div className="w-16 h-16 bg-orange-600 dark:bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <RocketLaunchIcon className="w-8 h-8 text-white" />
            </div>

            <div className="text-4xl lg:text-5xl font-black text-orange-700 dark:text-orange-300 mb-2">
              &lt;2s
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Ladezeit
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Weltweite Ladezeiten unter 2 Sekunden für optimale Nutzererfahrung
            </p>
          </Card>
        </Grid>

        {/* Achievement Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {/* Projects Completed */}
          <Card className="p-8 text-center bg-slate-50 dark:bg-slate-800 border-0">
            <div className="text-4xl mb-4">🏆</div>
            <div className="text-3xl font-black text-slate-900 dark:text-white mb-2">
              50+
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Erfolgreich abgeschlossene Projekte
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              In verschiedenen Branchen und Unternehmensgrößen
            </p>
          </Card>

          {/* Years Experience */}
          <Card className="p-8 text-center bg-slate-50 dark:bg-slate-800 border-0">
            <div className="text-4xl mb-4">📅</div>
            <div className="text-3xl font-black text-slate-900 dark:text-white mb-2">
              8+
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Jahre Erfahrung
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Spezialisiert auf deutsche KMU und deren Anforderungen
            </p>
          </Card>

          {/* Client Retention */}
          <Card className="p-8 text-center bg-slate-50 dark:bg-slate-800 border-0">
            <div className="text-4xl mb-4">🤝</div>
            <div className="text-3xl font-black text-slate-900 dark:text-white mb-2">
              95%
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Kundenbindungsrate
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Langfristige Partnerschaften und Folgeaufträge
            </p>
          </Card>
        </div>

        {/* Trust & Compliance Indicators */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12 bg-white dark:bg-slate-800 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
              Vertrauen & Sicherheit
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* GDPR Compliant */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  DSGVO-konform
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Vollständige Datenschutz-Compliance nach deutschen Standards
                </p>
              </div>

              {/* BFSG Ready */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  BFSG 2025 Ready
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Barrierefreiheit nach neuesten gesetzlichen Anforderungen
                </p>
              </div>

              {/* WCAG AA */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <StarIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  WCAG 2.1 AA
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Internationale Accessibility-Standards eingehalten
                </p>
              </div>

              {/* Response Time */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  4h Reaktionszeit
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Garantierte Antwort innerhalb von 4 Stunden werktags
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Industry Success Stories Preview */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Erfolg in verschiedenen Branchen
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '🥖', name: 'Bäckereien', result: '+180% Anfragen' },
              { icon: '💪', name: 'Fitness', result: '+95% Buchungen' },
              { icon: '💼', name: 'Beratung', result: '+240% Leads' },
              { icon: '⚖️', name: 'Anwälte', result: '+100% Mandate' },
              { icon: '🍽️', name: 'Gastronomie', result: '+200% Traffic' },
              { icon: '🏥', name: 'Gesundheit', result: '+120% Termine' }
            ].map((industry, index) => (
              <div key={index} className="text-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">
                  {industry.icon}
                </div>
                <div className="font-medium text-slate-900 dark:text-white text-sm mb-1">
                  {industry.name}
                </div>
                <div className="text-primary-600 dark:text-primary-400 text-xs font-semibold">
                  {industry.result}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-primary-600 to-secondary-600 text-white border-0">

            <ChartBarIcon className="w-16 h-16 mx-auto mb-6 opacity-90" />

            <h3 className="text-2xl lg:text-4xl font-bold mb-4">
              Bereit für messbare Ergebnisse?
            </h3>

            <p className="text-xl opacity-90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Schließen Sie sich über 50 zufriedenen Kunden an und erleben Sie,
              wie eine professionelle Website Ihr Geschäft nachhaltig voranbringt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetQuote}
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                Jetzt kostenlose Beratung
                <ArrowTrendingUpIcon className="w-5 h-5 ml-2" />
              </button>

              <div className="flex items-center justify-center text-white/80">
                <StarIcon className="w-5 h-5 mr-2" />
                <span>Über 50 erfolgreiche Projekte</span>
              </div>
            </div>

            <p className="text-sm opacity-75 mt-6">
              Antwort binnen 4 Stunden • 100% unverbindlich • Maßgeschneiderte Lösungen
            </p>
          </Card>
        </div>
      </Container>
    </SectionWrapper>
  );
}