'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowTopRightOnSquareIcon,
  ChartBarIcon,
  ClockIcon,
  BuildingOfficeIcon,
  TagIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { Container, SectionWrapper, SectionHeading, Card, Grid } from '@/components/Layout';
import { scrollToSection } from '@/lib/navigation';
import { portfolioProjects, featuredProjects } from '@/data/portfolio';
import CaseStudyCard from './CaseStudyCard';
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
 * Project Modal Component
 */
interface ProjectModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              {project.client}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
            aria-label="Modal schließen"
          >
            <XMarkIcon className="w-6 h-6 text-slate-500 dark:text-slate-400" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-8">

          {/* Project Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700">
            <Image
              src={project.imageUrl}
              alt={`Screenshot von ${project.title}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Left Column - Problem & Solution */}
            <div className="space-y-6">

              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Die Herausforderung
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Die Lösung
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Das Ergebnis
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Right Column - Metrics & Details */}
            <div className="space-y-6">

              {/* Key Metrics */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Wichtige Kennzahlen
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {project.metrics?.slice(0, 3).map((metric, index) => (
                    <div key={index} className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          {metric.name}
                        </span>
                        <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                          {metric.value}
                        </span>
                      </div>
                      {metric.change && (
                        <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                          {metric.change.period && `in ${metric.change.period}`}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <ClockIcon className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-2" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Projektdauer
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">
                    {project.duration} Wochen
                  </span>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <BuildingOfficeIcon className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-2" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Kategorie
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">
                    {CATEGORY_LABELS[project.category as keyof typeof CATEGORY_LABELS]}
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Verwendete Technologien
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Link */}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Projekt ansehen
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Portfolio Section Component
 * Displays portfolio projects with case study details and statistics
 */
export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayProjects = showAll ? portfolioProjects : featuredProjects;

  const handleProjectClick = (project: PortfolioProject) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleGetQuote = () => {
    scrollToSection('contact');
  };

  return (
    <SectionWrapper
      id="portfolio"
      className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800"
      aria-label="Portfolio-Bereich"
    >
      <Container>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="Erfolgreiche Projekte"
            subtitle="Bewährte Lösungen für deutsche Unternehmen"
            centered
          />

          <p className="text-lg text-slate-600 dark:text-slate-300 mt-6 leading-relaxed">
            Entdecken Sie, wie ich anderen Unternehmen dabei geholfen habe,
            <strong className="text-slate-900 dark:text-white"> mehr Kunden zu gewinnen</strong> und
            ihre Online-Präsenz zu stärken.
          </p>
        </div>

        {/* Featured Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-primary-600 dark:text-primary-400 mb-2">
              50+
            </div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">
              Erfolgreiche Projekte
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-secondary-600 dark:text-secondary-400 mb-2">
              +150%
            </div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">
              Mehr Kundenanfragen
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-green-600 dark:text-green-400 mb-2">
              98%
            </div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">
              Kundenzufriedenheit
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-orange-600 dark:text-orange-400 mb-2">
              8+
            </div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">
              Jahre Erfahrung
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <Grid cols={1} mdCols={2} lgCols={3} className="gap-8 mb-12">
          {displayProjects.map((project) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </Grid>

        {/* Show More/Less Toggle */}
        {portfolioProjects.length > featuredProjects.length && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-600 hover:border-primary-600 dark:hover:border-primary-500 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-500/50"
            >
              {showAll ? (
                <>
                  <TagIcon className="w-5 h-5 mr-2" />
                  Nur Featured-Projekte
                </>
              ) : (
                <>
                  <ChartBarIcon className="w-5 h-5 mr-2" />
                  Alle Projekte anzeigen ({portfolioProjects.length})
                </>
              )}
            </button>
          </div>
        )}

        {/* Call-to-Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-0">

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Bereit für Ihr erfolgreiches Projekt?
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam eine Website entwickeln, die Ihr Unternehmen
              voranbringt und messbare Ergebnisse liefert.
            </p>

            <button
              onClick={handleGetQuote}
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
            >
              Kostenloses Beratungsgespräch
              <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
            </button>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
              Unverbindlich • Antwort binnen 4 Stunden • 100% kostenlos
            </p>
          </Card>
        </div>
      </Container>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={handleCloseModal}
      />
    </SectionWrapper>
  );
}