'use client';

import {
  StarIcon,
  QuoteIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { Card } from '@/components/Layout';
import type { ClientTestimonial } from '@/types/testimonials';

/**
 * Industry Icon Mapping
 */
const INDUSTRY_ICONS = {
  'food-beverage': '🥖',
  'fitness-wellness': '💪',
  'consulting': '💼',
  'professional-services': '⚖️',
  'retail': '🛍️',
  'technology': '💻',
  'healthcare': '🏥',
  'education': '🎓',
  'finance': '🏦',
  'real-estate': '🏠',
  'automotive': '🚗',
  'other': '🏢'
} as const;

/**
 * Star Rating Component
 */
interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

function StarRating({ rating, maxRating = 5, size = 'md', showNumber = false }: StarRatingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center mr-2">
        {[...Array(maxRating)].map((_, index) => (
          <div key={index} className="relative">
            {index < rating ? (
              <StarIcon className={`${sizeClasses[size]} text-yellow-400`} />
            ) : (
              <StarOutlineIcon className={`${sizeClasses[size]} text-slate-300 dark:text-slate-600`} />
            )}
          </div>
        ))}
      </div>
      {showNumber && (
        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
          {rating}/{maxRating}
        </span>
      )}
    </div>
  );
}

/**
 * Testimonial Card Component Props
 */
interface TestimonialCardProps {
  testimonial: ClientTestimonial;
  variant?: 'default' | 'compact' | 'featured';
  showMetrics?: boolean;
  showProject?: boolean;
}

/**
 * Testimonial Card Component
 * Displays individual client testimonial with rating, metrics, and client info
 */
export default function TestimonialCard({
  testimonial,
  variant = 'default',
  showMetrics = true,
  showProject = true
}: TestimonialCardProps) {
  const industryIcon = INDUSTRY_ICONS[testimonial.clientIndustry as keyof typeof INDUSTRY_ICONS] || INDUSTRY_ICONS.other;

  const truncatedText = variant === 'compact'
    ? testimonial.testimonialText.length > 200
      ? testimonial.testimonialText.substring(0, 200) + '...'
      : testimonial.testimonialText
    : testimonial.testimonialText;

  return (
    <Card className={`h-full ${variant === 'featured' ? 'border-2 border-primary-500 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-slate-800' : ''}`}>
      <div className="p-6 lg:p-8 h-full flex flex-col">

        {/* Quote Icon & Rating */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-4">
              <QuoteIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <StarRating rating={testimonial.rating.overall} size="md" />
          </div>

          {testimonial.featured && (
            <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
              Top Bewertung
            </span>
          )}
        </div>

        {/* Testimonial Text */}
        <div className="flex-1 mb-6">
          <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed">
            „{truncatedText}"
          </blockquote>
        </div>

        {/* Key Metrics (if available and enabled) */}
        {showMetrics && testimonial.metrics && testimonial.metrics.length > 0 && variant !== 'compact' && (
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              {testimonial.metrics.slice(0, 2).map((metric, index) => (
                <div key={index} className="text-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {metric.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Client Info */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mr-4 text-xl">
              {industryIcon}
            </div>
            <div>
              <div className="font-semibold text-slate-900 dark:text-white">
                {testimonial.clientName}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {testimonial.clientTitle}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-500">
                {testimonial.clientCompany}
              </div>
            </div>
          </div>

          {/* Project Value (if available) */}
          {testimonial.projectValue && variant !== 'compact' && (
            <div className="text-right">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Projektwert
              </div>
              <div className="font-semibold text-slate-900 dark:text-white">
                €{testimonial.projectValue.toLocaleString('de-DE')}
              </div>
            </div>
          )}
        </div>

        {/* Project Type & Verification */}
        <div className="flex items-center justify-between mt-4">
          {showProject && (
            <span className="inline-flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full">
              {testimonial.projectType === 'corporate-website' && 'Unternehmenswebsite'}
              {testimonial.projectType === 'web-application' && 'Webanwendung'}
              {testimonial.projectType === 'e-commerce' && 'E-Commerce'}
              {testimonial.projectType === 'landing' && 'Landing Page'}
              {testimonial.projectType === 'redesign' && 'Redesign'}
              {testimonial.projectType === 'custom-solution' && 'Individuelle Lösung'}
            </span>
          )}

          {/* Verified Badge */}
          {testimonial.verified && (
            <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
              <StarIcon className="w-4 h-4 mr-1" />
              <span>Verifiziert</span>
            </div>
          )}
        </div>

        {/* Date */}
        <div className="text-xs text-slate-400 dark:text-slate-500 mt-2">
          {new Date(testimonial.dateGiven).toLocaleDateString('de-DE', {
            month: 'long',
            year: 'numeric'
          })}
        </div>
      </div>
    </Card>
  );
}