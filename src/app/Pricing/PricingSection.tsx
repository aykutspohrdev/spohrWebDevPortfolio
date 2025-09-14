'use client';

import { useState } from 'react';
import {
  CheckIcon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';
import { Container, SectionWrapper, SectionHeading, Card, Grid } from '@/components/Layout';
import { scrollToSection } from '@/lib/navigation';
import { pricingTiers, pricingAddOns, TIER_COMPARISON_FEATURES } from '@/data/pricing';
import PricingTierCard from './PricingTierCard';

/**
 * Feature Comparison Table Component
 */
function ComparisonTable() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const displayFeatures = showAllFeatures
    ? TIER_COMPARISON_FEATURES
    : TIER_COMPARISON_FEATURES.slice(0, 8);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center">
          Detaillierter Leistungsvergleich
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th className="text-left py-4 px-6 text-slate-900 dark:text-white font-semibold">
                Leistung
              </th>
              {pricingTiers.map((tier) => (
                <th key={tier.id} className="text-center py-4 px-4 text-slate-900 dark:text-white font-semibold">
                  {tier.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayFeatures.map((feature, index) => (
              <tr key={index} className="border-b border-slate-100 dark:border-slate-700">
                <td className="py-4 px-6 text-slate-700 dark:text-slate-300 font-medium">
                  {feature.name}
                </td>
                {pricingTiers.map((tier) => (
                  <td key={tier.id} className="text-center py-4 px-4">
                    {feature.tiers[tier.id as keyof typeof feature.tiers] === true ? (
                      <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                    ) : feature.tiers[tier.id as keyof typeof feature.tiers] === false ? (
                      <XMarkIcon className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" />
                    ) : (
                      <span className="text-slate-600 dark:text-slate-400 text-sm">
                        {feature.tiers[tier.id as keyof typeof feature.tiers]}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 text-center border-t border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setShowAllFeatures(!showAllFeatures)}
          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
        >
          {showAllFeatures ? 'Weniger anzeigen' : `Alle ${TIER_COMPARISON_FEATURES.length} Features anzeigen`}
        </button>
      </div>
    </div>
  );
}

/**
 * Add-Ons Section Component
 */
function AddOnsSection() {
  return (
    <div>
      <SectionHeading
        title="Zusätzliche Services"
        subtitle="Erweitern Sie Ihr Paket nach Bedarf"
        centered
        className="mb-12"
      />

      <Grid cols={1} mdCols={2} lgCols={3} className="gap-6">
        {pricingAddOns.map((addon) => (
          <Card key={addon.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                {addon.name}
              </h4>
              <div className="text-right">
                <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                  €{addon.price.toLocaleString('de-DE')}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {addon.billing === 'monthly' && '/Monat'}
                  {addon.billing === 'yearly' && '/Jahr'}
                  {addon.billing === 'one-time' && 'einmalig'}
                </div>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
              {addon.description}
            </p>

            <div className="space-y-2">
              {addon.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

/**
 * Pricing Section Component
 * Displays pricing tiers, comparison table, and add-ons
 */
export default function PricingSection() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleSelectTier = (tierId: string) => {
    setSelectedTier(tierId);
    scrollToSection('contact');
  };

  const handleContactForQuote = () => {
    scrollToSection('contact');
  };

  return (
    <SectionWrapper
      id="pricing"
      className="py-20 lg:py-32 bg-white dark:bg-slate-900"
      aria-label="Preise-Bereich"
    >
      <Container>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="Transparente Preise"
            subtitle="Faire Konditionen ohne versteckte Kosten"
            centered
          />

          <p className="text-lg text-slate-600 dark:text-slate-300 mt-6 leading-relaxed">
            Wählen Sie das passende Paket für Ihr Unternehmen.
            <strong className="text-slate-900 dark:text-white"> Alle Preise</strong> beinhalten
            6 Monate kostenlosen Support und DSGVO-konforme Umsetzung.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center">
            <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
            <span>6 Monate Support inklusive</span>
          </div>
          <div className="flex items-center">
            <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
            <span>DSGVO & BFSG konform</span>
          </div>
          <div className="flex items-center">
            <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
            <span>Keine versteckten Kosten</span>
          </div>
          <div className="flex items-center">
            <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
            <span>Kostenlose Erstberatung</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <Grid cols={1} lgCols={3} className="gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <PricingTierCard
              key={tier.id}
              tier={tier}
              isPopular={tier.featured}
              onSelectTier={handleSelectTier}
            />
          ))}
        </Grid>

        {/* Feature Comparison */}
        <div className="mb-20">
          <ComparisonTable />
        </div>

        {/* Add-Ons */}
        <div className="mb-20">
          <AddOnsSection />
        </div>

        {/* FAQ Preview */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 lg:p-12 bg-slate-50 dark:bg-slate-800 border-0">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
              Häufige Fragen zu den Preisen
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start mb-4">
                  <QuestionMarkCircleIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Sind alle Kosten im Preis enthalten?
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Ja, alle genannten Preise sind Festpreise. Einzige zusätzliche Kosten können Domain (€15/Jahr) und optionale Add-Ons sein.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <QuestionMarkCircleIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Wie funktioniert die Zahlung?
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Zahlung in 3 Raten: 40% bei Start, 40% nach Design-Freigabe, 20% nach Launch. PayPal, Überweisung oder Rechnung möglich.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start mb-4">
                  <QuestionMarkCircleIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Was ist nach den 6 Monaten Support?
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Sie können einen Wartungsvertrag ab €99/Monat abschließen oder Support stundenweise (€125/h) buchen. Keine Pflicht!
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <QuestionMarkCircleIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Kann ich mein Paket später erweitern?
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Selbstverständlich! Add-Ons können jederzeit hinzugebucht werden. Auch Upgrades sind problemlos möglich.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-0">

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Noch unsicher? Lassen Sie uns sprechen!
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
              In einem kostenlosen 30-minütigen Beratungsgespräch finden wir gemeinsam
              die perfekte Lösung für Ihr Unternehmen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactForQuote}
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Kostenlose Beratung
              </button>

              <a
                href="mailto:hello@aykutspohr.de"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-600 hover:border-primary-600 dark:hover:border-primary-500 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-500/50"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                E-Mail senden
              </a>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
              Antwort binnen 4 Stunden • 100% unverbindlich • Individuelle Lösungen möglich
            </p>
          </Card>
        </div>
      </Container>
    </SectionWrapper>
  );
}