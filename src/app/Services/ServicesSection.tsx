'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Container, SectionWrapper, SectionHeading, Card, Grid } from '@/components/Layout';
import { scrollToSection } from '@/lib/navigation';
import { serviceOfferings } from '@/data/services';
import ServiceCard from './ServiceCard';

/**
 * Services Section Component
 * Displays all service offerings with expandable details and process overview
 */
export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleToggleExpand = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const handleViewAllServices = () => {
    scrollToSection('pricing');
  };

  return (
    <SectionWrapper
      id="services"
      className="py-20 lg:py-32 bg-white dark:bg-slate-900"
      aria-label="Leistungen-Bereich"
    >
      <Container>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="Leistungen für Ihren Erfolg"
            subtitle="Spezialisiert auf deutsche KMU mit bewährten Lösungen"
            centered
          />

          <p className="text-lg text-slate-600 dark:text-slate-300 mt-6 leading-relaxed">
            Von der ersten Idee bis zum langfristigen Erfolg:
            Ich begleite Sie mit <strong className="text-slate-900 dark:text-white">maßgeschneiderten Lösungen</strong>,
            die Ihre Zielgruppe erreichen und Ihr Geschäft voranbringen.
          </p>
        </div>

        {/* Services Grid */}
        <Grid cols={1} mdCols={2} lgCols={3} className="gap-8 mb-16">
          {serviceOfferings.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isExpanded={expandedService === service.id}
              onToggleExpand={() => handleToggleExpand(service.id)}
            />
          ))}
        </Grid>

        {/* Process Preview */}
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border-0">

            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Ihr Weg zur erfolgreichen Website
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                Transparent, strukturiert und mit garantierten Ergebnissen
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-5 gap-6 lg:gap-8">
              {[
                {
                  step: '1',
                  title: 'Analyse',
                  description: 'Ziele & Zielgruppe definieren',
                  duration: '1-2 Wochen'
                },
                {
                  step: '2',
                  title: 'Konzept',
                  description: 'Strategie & Design planen',
                  duration: '1 Woche'
                },
                {
                  step: '3',
                  title: 'Entwicklung',
                  description: 'Website programmieren',
                  duration: '3-6 Wochen'
                },
                {
                  step: '4',
                  title: 'Testing',
                  description: 'Qualität sicherstellen',
                  duration: '1 Woche'
                },
                {
                  step: '5',
                  title: 'Launch',
                  description: 'Live gehen & betreuen',
                  duration: '1 Woche'
                }
              ].map((item, index) => (
                <div key={index} className="text-center relative">

                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white font-bold text-xl rounded-full mb-4 shadow-lg">
                    {item.step}
                  </div>

                  {/* Step Content */}
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                    {item.description}
                  </p>

                  <div className="text-xs text-slate-500 dark:text-slate-500 font-medium">
                    {item.duration}
                  </div>

                  {/* Arrow (not for last item) */}
                  {index < 4 && (
                    <ArrowRightIcon className="hidden md:block absolute top-8 -right-4 lg:-right-6 w-6 h-6 text-slate-300 dark:text-slate-600" />
                  )}
                </div>
              ))}
            </div>

            {/* Process CTA */}
            <div className="text-center mt-12">
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                <strong className="text-slate-900 dark:text-white">Durchschnittlich 2-4 Monate</strong> von der ersten Idee bis zum erfolgreichen Launch
              </p>

              <button
                onClick={handleViewAllServices}
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-600 hover:border-primary-600 dark:hover:border-primary-500 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-500/50"
              >
                Preise & Pakete ansehen
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </div>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>8+ Jahre Erfahrung</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>50+ erfolgreiche Projekte</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span>100% Kundenzufriedenheit</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              <span>6 Monate Support inkl.</span>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}