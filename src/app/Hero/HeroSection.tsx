'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowDownIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Container, SectionWrapper } from '@/components/Layout';
import { scrollToSection } from '@/lib/navigation';

/**
 * Hero Section Component
 * Main landing section with bold typography and clear value proposition
 * Implements Bold Minimalism design principles with strong visual hierarchy
 */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToServices = () => {
    scrollToSection('services');
  };

  const handleScrollToContact = () => {
    scrollToSection('contact');
  };

  if (!mounted) {
    return null;
  }

  return (
    <SectionWrapper
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      aria-label="Hero-Bereich"
    >
      <Container className="py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Main Content */}
          <div className="space-y-8">

            {/* Tagline */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse"></span>
              Verfügbar für neue Projekte
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                <span className="block">Websites, die</span>
                <span className="block text-primary-600 dark:text-primary-400">
                  Kunden gewinnen
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Spezialisiert auf deutsche KMU. Moderne, barrierefreie Websites
                mit <strong className="text-slate-900 dark:text-white">nachweisbaren Ergebnissen</strong>:
                durchschnittlich +150% mehr Anfragen.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-6 py-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">DSGVO-konform</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Barrierefrei</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">SEO-optimiert</span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleScrollToServices}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
                aria-label="Zu den Leistungen scrollen"
              >
                Leistungen entdecken
                <ArrowDownIcon className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                onClick={handleScrollToContact}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 hover:border-primary-600 dark:hover:border-primary-500 rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-500/50"
                aria-label="Kostenlose Beratung anfragen"
              >
                <PhoneIcon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Kostenlose Beratung
              </button>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center">
                <PhoneIcon className="w-4 h-4 mr-2" />
                <span>Antwort binnen 4h</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-4 h-4 mr-2" />
                <span>Kostenlose Erstberatung</span>
              </div>
            </div>
          </div>

          {/* Visual Element / Stats */}
          <div className="relative">

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl transform rotate-6 scale-105"></div>

            {/* Main Stats Card */}
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 lg:p-12 border border-slate-100 dark:border-slate-700">

              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Bewiesene Ergebnisse
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Durchschnittliche Verbesserungen meiner Kunden
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary-600 dark:text-primary-400 mb-2">
                    +150%
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 font-medium">
                    Mehr Anfragen
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                    innerhalb 6 Monaten
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-black text-secondary-600 dark:text-secondary-400 mb-2">
                    +85%
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 font-medium">
                    Google Rankings
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                    Top 10 Positionen
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-black text-green-600 dark:text-green-400 mb-2">
                    98%
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 font-medium">
                    Zufriedenheit
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                    Kundenbewertung
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-black text-orange-600 dark:text-orange-400 mb-2">
                    &lt;2s
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 font-medium">
                    Ladezeit
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                    weltweit
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="flex justify-center items-center space-x-6 text-xs text-slate-500 dark:text-slate-500">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    BFSG 2025 Ready
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    WCAG 2.1 AA
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Core Web Vitals
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary-200 dark:bg-secondary-800 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 lg:mt-24">
          <button
            onClick={handleScrollToServices}
            className="group flex flex-col items-center text-slate-400 dark:text-slate-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:text-primary-600 dark:focus:text-primary-400"
            aria-label="Nach unten scrollen zu den Leistungen"
          >
            <span className="text-sm font-medium mb-2">Mehr erfahren</span>
            <ArrowDownIcon className="w-6 h-6 animate-bounce group-hover:text-primary-600 dark:group-hover:text-primary-400" />
          </button>
        </div>
      </Container>
    </SectionWrapper>
  );
}