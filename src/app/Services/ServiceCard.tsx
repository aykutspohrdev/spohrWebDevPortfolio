'use client';

import {
  GlobeAltIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { Card } from '@/components/Layout';
import { scrollToSection } from '@/lib/navigation';
import type { ServiceOffering } from '@/types/services';

/**
 * Service Icon Mapping
 * Maps service IDs to appropriate Heroicons
 */
const SERVICE_ICONS = {
  'website-development': GlobeAltIcon,
  'ecommerce-solutions': ShoppingCartIcon,
  'website-optimization': ChartBarIcon,
  'digital-consulting': LightBulbIcon,
  'maintenance-support': WrenchScrewdriverIcon,
} as const;

/**
 * Service Card Component Props
 */
interface ServiceCardProps {
  service: ServiceOffering;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

/**
 * Individual Service Card Component
 * Displays service information with pricing, features, and CTA
 */
export default function ServiceCard({ service, isExpanded = false, onToggleExpand }: ServiceCardProps) {
  const IconComponent = SERVICE_ICONS[service.id as keyof typeof SERVICE_ICONS] || GlobeAltIcon;

  const handleGetQuote = () => {
    scrollToSection('contact');
  };

  return (
    <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="p-8 h-full flex flex-col">

        {/* Service Icon & Category */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
              <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>

            <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
              {service.category === 'development' && 'Entwicklung'}
              {service.category === 'optimization' && 'Optimierung'}
              {service.category === 'consulting' && 'Beratung'}
              {service.category === 'maintenance' && 'Wartung'}
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">ab</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              €{service.startingPrice.min.toLocaleString('de-DE')}
            </div>
          </div>
        </div>

        {/* Title & Description */}
        <div className="mb-6 flex-1">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {service.name}
          </h3>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <ul className="space-y-2">
            {service.features.slice(0, isExpanded ? undefined : 3).map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                <CheckIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          {service.features.length > 3 && !isExpanded && (
            <button
              onClick={onToggleExpand}
              className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mt-2 font-medium"
            >
              +{service.features.length - 3} weitere Features
            </button>
          )}
        </div>

        {/* Target Audience */}
        <div className="mb-6">
          <div className="text-sm font-medium text-slate-900 dark:text-white mb-2">
            Perfekt für:
          </div>
          <div className="flex flex-wrap gap-2">
            {service.targetClients.slice(0, 2).map((audience, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full"
              >
                {audience === 'small-business' && 'Kleine Unternehmen'}
                {audience === 'medium-business' && 'Mittelständische Unternehmen'}
                {audience === 'startups' && 'Startups'}
                {audience === 'local-business' && 'Lokale Unternehmen'}
                {audience === 'existing-websites' && 'Bestehende Websites'}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleGetQuote}
          className="group/btn w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-500/50"
        >
          Angebot anfragen
          <ArrowRightIcon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </Card>
  );
}