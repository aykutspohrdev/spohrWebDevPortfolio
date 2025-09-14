'use client';

import { useState } from 'react';
import {
  ChartBarIcon,
  LightBulbIcon,
  CodeBracketIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { Container, SectionWrapper, SectionHeading, Card, Grid } from '@/components/Layout';
import { scrollToSection } from '@/lib/navigation';

/**
 * Process Step Data
 */
const processSteps = [
  {
    id: 'analysis',
    step: 1,
    title: 'Analyse & Strategie',
    duration: '1-2 Wochen',
    icon: ChartBarIcon,
    shortDescription: 'Ziele definieren und Zielgruppe verstehen',
    detailedDescription: 'In einem ausführlichen Strategiegespräch analysieren wir Ihre Geschäftsziele, Zielgruppe und Wettbewerb. Gemeinsam entwickeln wir eine klare Roadmap für Ihren digitalen Erfolg.',
    deliverables: [
      'Zielgruppen-Analyse',
      'Wettbewerbs-Research',
      'Content-Strategie',
      'Technische Anforderungen',
      'Projekt-Roadmap'
    ],
    activities: [
      'Kick-off Meeting (2h)',
      'Stakeholder Interviews',
      'Marktanalyse',
      'User Journey Mapping',
      'Strategiedokument'
    ]
  },
  {
    id: 'concept',
    step: 2,
    title: 'Konzept & Design',
    duration: '2-3 Wochen',
    icon: LightBulbIcon,
    shortDescription: 'Wireframes und visuelles Design erstellen',
    detailedDescription: 'Basierend auf der Analyse erstelle ich Wireframes und das visuelle Design Ihrer Website. Sie erhalten mehrere Designvarianten zur Auswahl und können Feedback geben.',
    deliverables: [
      'Wireframes & Mockups',
      'Design-System',
      'Style Guide',
      'Prototyp',
      'Asset-Sammlung'
    ],
    activities: [
      'Wireframe Erstellung',
      'Design-Konzepte (2-3 Varianten)',
      'Feedback-Runden',
      'Finales Design',
      'Asset-Vorbereitung'
    ]
  },
  {
    id: 'development',
    step: 3,
    title: 'Entwicklung',
    duration: '3-6 Wochen',
    icon: CodeBracketIcon,
    shortDescription: 'Programmierung der Website',
    detailedDescription: 'Die eigentliche Entwicklung Ihrer Website mit modernsten Technologien. Sie erhalten regelmäßig Zwischenstände und können live den Fortschritt verfolgen.',
    deliverables: [
      'Frontend-Entwicklung',
      'Backend-Integration',
      'CMS-Setup',
      'Responsive Design',
      'Performance-Optimierung'
    ],
    activities: [
      'Setup Development Environment',
      'Frontend-Programmierung',
      'Backend-Integration',
      'Content Management System',
      'Cross-Browser Testing'
    ]
  },
  {
    id: 'testing',
    step: 4,
    title: 'Testing & Optimierung',
    duration: '1 Woche',
    icon: CheckCircleIcon,
    shortDescription: 'Qualitätssicherung und Feintuning',
    detailedDescription: 'Umfassende Tests auf allen Geräten und Browsern. Performance-Optimierung, SEO-Setup und finale Anpassungen basierend auf Ihrem Feedback.',
    deliverables: [
      'Cross-Browser Testing',
      'Mobile Optimierung',
      'Performance Audit',
      'SEO-Setup',
      'Accessibility Check'
    ],
    activities: [
      'Funktionalitäts-Tests',
      'Performance-Optimierung',
      'SEO-Implementierung',
      'Accessibility Audit',
      'User Acceptance Testing'
    ]
  },
  {
    id: 'launch',
    step: 5,
    title: 'Launch & Support',
    duration: '1 Woche',
    icon: RocketLaunchIcon,
    shortDescription: 'Go-Live und Betreuung',
    detailedDescription: 'Der große Tag: Ihre Website geht live! Inklusive Domain-Setup, SSL-Zertifikat und 6 Monate kostenlosem Support für technische Fragen und kleinere Anpassungen.',
    deliverables: [
      'Website Launch',
      'Domain & SSL Setup',
      'Analytics Integration',
      'Team-Schulung',
      '6 Monate Support'
    ],
    activities: [
      'Production Deployment',
      'DNS-Konfiguration',
      'Monitoring Setup',
      'Team Training',
      'Launch-Kommunikation'
    ]
  }
];

/**
 * Process Step Card Component
 */
interface ProcessStepCardProps {
  step: typeof processSteps[0];
  isExpanded: boolean;
  onToggle: () => void;
}

function ProcessStepCard({ step, isExpanded, onToggle }: ProcessStepCardProps) {
  const IconComponent = step.icon;

  return (
    <Card className="overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-700/50"
        aria-expanded={isExpanded}
        aria-controls={`process-step-${step.id}`}
      >
        <div className="flex items-start">
          {/* Step Number & Icon */}
          <div className="flex-shrink-0 mr-6">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
              <span className="text-xl font-bold">{step.step}</span>
            </div>
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
          </div>

          {/* Step Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-3">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  {step.duration}
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {step.shortDescription}
                </p>
              </div>

              <ArrowRightIcon
                className={`w-6 h-6 text-slate-400 transform transition-transform ${
                  isExpanded ? 'rotate-90' : ''
                }`}
              />
            </div>
          </div>
        </div>
      </button>

      {isExpanded && (
        <div
          id={`process-step-${step.id}`}
          className="px-6 pb-6 border-t border-slate-100 dark:border-slate-700"
        >
          <div className="pt-6 ml-22">

            {/* Detailed Description */}
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              {step.detailedDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Deliverables */}
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                  <DocumentTextIcon className="w-4 h-4 mr-2" />
                  Deliverables
                </h4>
                <ul className="space-y-2">
                  {step.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activities */}
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                  <UserGroupIcon className="w-4 h-4 mr-2" />
                  Aktivitäten
                </h4>
                <ul className="space-y-2">
                  {step.activities.map((activity, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <ArrowRightIcon className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

/**
 * Process Section Component
 * Displays detailed project process with expandable steps
 */
export default function ProcessSection() {
  const [expandedStep, setExpandedStep] = useState<string | null>('analysis');

  const handleToggleStep = (stepId: string) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  return (
    <SectionWrapper
      id="process"
      className="py-20 lg:py-32 bg-white dark:bg-slate-900"
      aria-label="Prozess-Bereich"
    >
      <Container>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="Wie ich arbeite"
            subtitle="Ihr Weg zur erfolgreichen Website"
            centered
          />

          <p className="text-lg text-slate-600 dark:text-slate-300 mt-6 leading-relaxed">
            Transparent, strukturiert und mit klaren Meilensteinen:
            So führe ich Sie <strong className="text-slate-900 dark:text-white">Schritt für Schritt</strong> zu
            Ihrer erfolgreichen Website.
          </p>
        </div>

        {/* Process Overview */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border-0">

            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                5 Phasen zum Erfolg
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                Durchschnittlich 2-4 Monate von der ersten Idee bis zum Launch
              </p>
            </div>

            {/* Process Timeline */}
            <div className="grid md:grid-cols-5 gap-6 lg:gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;

                return (
                  <div key={step.id} className="text-center relative">

                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white font-bold text-xl rounded-full mb-4 shadow-lg">
                      {step.step}
                    </div>

                    {/* Step Content */}
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                      {step.shortDescription}
                    </p>

                    <div className="text-xs text-slate-500 dark:text-slate-500 font-medium">
                      {step.duration}
                    </div>

                    {/* Arrow (not for last item) */}
                    {index < processSteps.length - 1 && (
                      <ArrowRightIcon className="hidden md:block absolute top-8 -right-4 lg:-right-6 w-6 h-6 text-slate-300 dark:text-slate-600" />
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Detailed Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Detaillierter Projektablauf
          </h3>

          <div className="space-y-4">
            {processSteps.map((step) => (
              <ProcessStepCard
                key={step.id}
                step={step}
                isExpanded={expandedStep === step.id}
                onToggle={() => handleToggleStep(step.id)}
              />
            ))}
          </div>
        </div>

        {/* Communication & Support */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12 bg-slate-50 dark:bg-slate-800 border-0">

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
              Kommunikation & Support
            </h3>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Wöchentliche Updates
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Jeden Freitag erhalten Sie einen detaillierten Fortschrittsbericht per E-Mail
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  Direkter Draht
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  WhatsApp, E-Mail oder Telefon - Sie erreichen mich immer schnell und unkompliziert
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  6 Monate Support
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Nach dem Launch unterstütze ich Sie kostenlos bei Fragen und kleineren Anpassungen
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Process CTA */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-0">

            <RocketLaunchIcon className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-6" />

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Bereit für Ihr Website-Projekt?
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
              Lassen Sie uns in einem kostenlosen Beratungsgespräch über Ihr Projekt sprechen
              und den optimalen Weg zu Ihrer erfolgreichen Website planen.
            </p>

            <button
              onClick={handleGetStarted}
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
            >
              Kostenloses Strategiegespräch
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
              30 Minuten • 100% unverbindlich • Konkrete nächste Schritte
            </p>
          </Card>
        </div>
      </Container>
    </SectionWrapper>
  );
}