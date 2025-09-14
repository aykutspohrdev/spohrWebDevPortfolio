'use client';

import Image from 'next/image';
import {
  ClockIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { Card } from '@/components/Layout';
import type { PortfolioProject } from '@/types/portfolio';

/**
 * Project Category Labels
 */
const CATEGORY_LABELS = {
  'corporate-website': 'Unternehmenswebsite',
  'web-application': 'Webanwendung',
  'e-commerce': 'E-Commerce',
  'landing-page': 'Landing Page',
  'custom-solution': 'Individuelle Lösung'
} as const;

/**
 * Case Study Card Component Props
 */
interface CaseStudyCardProps {
  project: PortfolioProject;
  onClick: () => void;
}

/**
 * Case Study Card Component
 * Displays portfolio project preview with image, metrics, and details
 */
export default function CaseStudyCard({ project, onClick }: CaseStudyCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">

      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-700">
        <Image
          src={project.imageUrl}
          alt={`Screenshot von ${project.title}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <button
              onClick={onClick}
              className="inline-flex items-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg shadow-lg hover:shadow-xl"
            >
              <EyeIcon className="w-4 h-4 mr-2" />
              Details ansehen
            </button>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur text-slate-800 text-xs font-semibold rounded-full">
            {CATEGORY_LABELS[project.category as keyof typeof CATEGORY_LABELS]}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
              Empfohlen
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">

        {/* Client & Title */}
        <div className="mb-4">
          <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
            {project.client}
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Metrics Preview */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {project.metrics.slice(0, 2).map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500">
                  {metric.name}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies Preview */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies?.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies && project.technologies.length > 3 && (
            <span className="px-2 py-1 text-slate-500 dark:text-slate-400 text-xs">
              +{project.technologies.length - 3} mehr
            </span>
          )}
        </div>

        {/* Project Details */}
        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center">
            <ClockIcon className="w-4 h-4 mr-1" />
            {project.duration} Wochen
          </div>
          <div>
            {new Date(project.completionDate).toLocaleDateString('de-DE', {
              month: 'short',
              year: 'numeric'
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}