'use client';

import {
  CheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { Card } from '@/components/Layout';
import type { PricingTier } from '@/types/pricing';

/**
 * Pricing Tier Card Component Props
 */
interface PricingTierCardProps {
  tier: PricingTier;
  isPopular?: boolean;
  onSelectTier: (tierId: string) => void;
}

/**
 * Pricing Tier Card Component
 * Displays individual pricing tier with features and CTA
 */
export default function PricingTierCard({ tier, isPopular = false, onSelectTier }: PricingTierCardProps) {
  const handleSelectTier = () => {
    onSelectTier(tier.id);
  };

  const displayPrice = tier.pricing.type === 'fixed'
    ? `€${tier.pricing.basePrice?.toLocaleString('de-DE')}`
    : 'Auf Anfrage';

  return (
    <Card className={`relative h-full p-8 ${isPopular ? 'border-2 border-primary-500 shadow-2xl scale-105 z-10' : ''}`}>

      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center px-6 py-2 bg-primary-600 text-white font-semibold text-sm rounded-full shadow-lg">
            <StarIcon className="w-4 h-4 mr-2" />
            Beliebteste Wahl
          </span>
        </div>
      )}

      <div className="h-full flex flex-col">

        {/* Tier Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {tier.name}
          </h3>

          <p className="text-slate-600 dark:text-slate-300 mb-6">
            {tier.shortDescription}
          </p>

          {/* Price */}
          <div className="mb-6">
            <div className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-2">
              {displayPrice}
            </div>

            {tier.pricing.type === 'fixed' && tier.pricing.priceRange && (
              <div className="text-slate-500 dark:text-slate-400">
                {tier.pricing.priceRange.min !== tier.pricing.priceRange.max && (
                  <span className="text-sm">
                    €{tier.pricing.priceRange.min?.toLocaleString('de-DE')} - €{tier.pricing.priceRange.max?.toLocaleString('de-DE')}
                  </span>
                )}
              </div>
            )}

            {tier.pricing.type === 'hourly' && (
              <div className="text-slate-500 dark:text-slate-400 text-sm">
                Ab €{tier.pricing.hourlyRate}/Stunde
              </div>
            )}
          </div>

          {/* What's Included Label */}
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
            Leistungen inklusive:
          </div>
        </div>

        {/* Features List */}
        <div className="flex-1 mb-8">
          <ul className="space-y-4">
            {tier.features.slice(0, 8).map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">
                  {feature}
                </span>
              </li>
            ))}

            {tier.features.length > 8 && (
              <li className="text-slate-500 dark:text-slate-400 text-sm italic">
                +{tier.features.length - 8} weitere Leistungen
              </li>
            )}
          </ul>
        </div>

        {/* Target Audience */}
        <div className="mb-6">
          <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Perfekt für:
          </div>
          <div className="flex flex-wrap gap-2">
            {tier.targetAudience.slice(0, 2).map((audience, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full"
              >
                {audience === 'small-business' && 'Kleine Unternehmen'}
                {audience === 'medium-business' && 'Mittelstand'}
                {audience === 'startups' && 'Startups'}
                {audience === 'local-business' && 'Lokale Betriebe'}
                {audience === 'enterprise' && 'Großunternehmen'}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleSelectTier}
          className={`w-full py-4 px-6 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 ${
            isPopular
              ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl focus:ring-primary-500/50'
              : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white focus:ring-slate-500/50'
          }`}
        >
          {tier.pricing.type === 'consultation' ? 'Beratung anfragen' : 'Angebot anfragen'}
        </button>

        {/* Additional Info */}
        <div className="text-center mt-4 text-xs text-slate-500 dark:text-slate-400">
          {tier.pricing.type === 'fixed' && '6 Monate Support inklusive'}
          {tier.pricing.type === 'hourly' && 'Flexible Abrechnung'}
          {tier.pricing.type === 'consultation' && 'Unverbindliches Gespräch'}
        </div>
      </div>
    </Card>
  );
}