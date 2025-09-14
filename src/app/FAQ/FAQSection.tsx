'use client';

import { useState } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon,
  TagIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Container, SectionWrapper, SectionHeading, Card } from '@/components/Layout';
import { scrollToSection } from '@/lib/navigation';
import { faqItems, featuredFAQs, faqsByCategory, getFAQsForContext, searchFAQs, FAQ_CATEGORIES } from '@/data/faq';
import type { FAQItem, FAQCategory } from '@/types/testimonials';

/**
 * FAQ Item Component
 */
interface FAQItemComponentProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ faq, isOpen, onToggle }: FAQItemComponentProps) {
  const formatAnswer = (answer: string) => {
    // Simple markdown-style formatting for bold text
    return answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <Card className="overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-700/50"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1 mr-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight">
              {faq.question}
            </h3>

            {/* Category Badge */}
            <div className="flex items-center mt-2">
              <span className="inline-flex items-center px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-medium rounded">
                {FAQ_CATEGORIES[faq.category as keyof typeof FAQ_CATEGORIES]}
              </span>
              {faq.featured && (
                <span className="ml-2 inline-flex items-center px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded">
                  Häufig gefragt
                </span>
              )}
            </div>
          </div>

          <div className="flex-shrink-0 ml-4">
            {isOpen ? (
              <ChevronUpIcon className="w-6 h-6 text-slate-400" />
            ) : (
              <ChevronDownIcon className="w-6 h-6 text-slate-400" />
            )}
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          id={`faq-answer-${faq.id}`}
          className="px-6 pb-6 border-t border-slate-100 dark:border-slate-700"
        >
          <div className="pt-6">
            <div
              className="text-slate-700 dark:text-slate-300 leading-relaxed prose prose-sm max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{
                __html: formatAnswer(faq.answer)
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/^(.+)$/, '<p>$1</p>')
              }}
            />

            {/* Tags */}
            {faq.tags && faq.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mr-2">
                  Tags:
                </div>
                {faq.tags.slice(0, 4).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded"
                  >
                    <TagIcon className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}

/**
 * FAQ Search Component
 */
interface FAQSearchProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

function FAQSearch({ onSearch, searchQuery }: FAQSearchProps) {
  return (
    <div className="relative max-w-md mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="w-5 h-5 text-slate-400" />
      </div>
      <input
        type="text"
        placeholder="FAQ durchsuchen..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-4 focus:border-primary-500 focus:ring-primary-500/50 bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all"
      />
    </div>
  );
}

/**
 * FAQ Categories Filter Component
 */
interface FAQCategoriesProps {
  selectedCategory: FAQCategory | 'all';
  onCategoryChange: (category: FAQCategory | 'all') => void;
}

function FAQCategories({ selectedCategory, onCategoryChange }: FAQCategoriesProps) {
  const categories: Array<{ key: FAQCategory | 'all', label: string, count: number }> = [
    { key: 'all', label: 'Alle Fragen', count: faqItems.length },
    ...Object.entries(FAQ_CATEGORIES).map(([key, label]) => ({
      key: key as FAQCategory,
      label,
      count: faqsByCategory[key as FAQCategory]?.length || 0
    }))
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === category.key
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:border-primary-600 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
          }`}
        >
          {category.label}
          <span className="ml-2 text-xs opacity-75">
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
}

/**
 * FAQ Section Component
 * Main FAQ section with search, filtering, and expandable questions
 */
export default function FAQSection() {
  const [openFAQs, setOpenFAQs] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter FAQs based on category and search
  const getFilteredFAQs = (): FAQItem[] => {
    let filtered = faqItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = faqsByCategory[selectedCategory] || [];
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = searchFAQs(searchQuery.trim()).filter(faq =>
        selectedCategory === 'all' || faq.category === selectedCategory
      );
    }

    // Sort by featured first, then by display order
    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (a.displayOrder || 999) - (b.displayOrder || 999);
    });
  };

  const filteredFAQs = getFilteredFAQs();

  const toggleFAQ = (faqId: string) => {
    setOpenFAQs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(faqId)) {
        newSet.delete(faqId);
      } else {
        newSet.add(faqId);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setOpenFAQs(new Set(filteredFAQs.map(faq => faq.id)));
  };

  const collapseAll = () => {
    setOpenFAQs(new Set());
  };

  const handleContactForHelp = () => {
    scrollToSection('contact');
  };

  return (
    <SectionWrapper
      id="faq"
      className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800"
      aria-label="FAQ-Bereich"
    >
      <Container>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="Häufig gestellte Fragen"
            subtitle="Antworten auf alle wichtigen Fragen rund um Ihre Website"
            centered
          />

          <p className="text-lg text-slate-600 dark:text-slate-300 mt-6 leading-relaxed">
            Hier finden Sie detaillierte Antworten auf die häufigsten Fragen meiner Kunden.
            <strong className="text-slate-900 dark:text-white"> Transparenz</strong> und
            <strong className="text-slate-900 dark:text-white"> Klarheit</strong> sind mir wichtig.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-8 mb-12">

          {/* Search */}
          <FAQSearch searchQuery={searchQuery} onSearch={setSearchQuery} />

          {/* Categories */}
          <FAQCategories
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Controls */}
          <div className="flex justify-center gap-4">
            <button
              onClick={expandAll}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors"
            >
              Alle öffnen
            </button>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <button
              onClick={collapseAll}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors"
            >
              Alle schließen
            </button>
          </div>
        </div>

        {/* Results Count */}
        {(searchQuery || selectedCategory !== 'all') && (
          <div className="text-center mb-8">
            <p className="text-slate-600 dark:text-slate-400">
              {filteredFAQs.length === 0
                ? 'Keine FAQs gefunden'
                : `${filteredFAQs.length} ${filteredFAQs.length === 1 ? 'FAQ gefunden' : 'FAQs gefunden'}`
              }
              {searchQuery && ` für "${searchQuery}"`}
            </p>
          </div>
        )}

        {/* FAQ List */}
        {filteredFAQs.length > 0 ? (
          <div className="space-y-4 mb-16">
            {filteredFAQs.map((faq) => (
              <FAQItemComponent
                key={faq.id}
                faq={faq}
                isOpen={openFAQs.has(faq.id)}
                onToggle={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <QuestionMarkCircleIcon className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Keine passenden FAQs gefunden
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Versuchen Sie eine andere Suchbegriff oder Kategorie, oder stellen Sie mir Ihre Frage direkt.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              Alle FAQs anzeigen
            </button>
          </div>
        )}

        {/* Quick Help Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Schnelle Hilfe nach Themen
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                context: 'process' as const,
                title: 'Ablauf & Prozess',
                description: 'Wie läuft ein Website-Projekt ab?',
                icon: '🔄',
                faqs: getFAQsForContext('process')
              },
              {
                context: 'pricing' as const,
                title: 'Preise & Kosten',
                description: 'Was kostet eine Website?',
                icon: '💰',
                faqs: getFAQsForContext('pricing')
              },
              {
                context: 'technical' as const,
                title: 'Technik & Features',
                description: 'Welche Technologien verwende ich?',
                icon: '⚙️',
                faqs: getFAQsForContext('technical')
              },
              {
                context: 'homepage' as const,
                title: 'Erste Schritte',
                description: 'Grundlegende Informationen',
                icon: '🚀',
                faqs: getFAQsForContext('homepage')
              }
            ].map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  // Open the first few FAQs from this context
                  const contextFAQs = category.faqs.slice(0, 3);
                  setOpenFAQs(new Set(contextFAQs.map(faq => faq.id)));
                  // Scroll to FAQ section
                  setTimeout(() => {
                    const firstFAQ = document.getElementById(`faq-answer-${contextFAQs[0]?.id}`);
                    if (firstFAQ) {
                      firstFAQ.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }, 100);
                }}
              >
                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {category.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  {category.description}
                </p>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {category.faqs.length} {category.faqs.length === 1 ? 'Frage' : 'Fragen'}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Still Need Help CTA */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-0">

            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <ChatBubbleLeftRightIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Ihre Frage nicht dabei?
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
              Kein Problem! Stellen Sie mir Ihre Frage direkt und ich antworte
              <strong className="text-slate-900 dark:text-white"> binnen 4 Stunden</strong> mit
              einer ausführlichen und persönlichen Antwort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactForHelp}
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
              >
                Frage stellen
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>

              <a
                href="mailto:hello@aykutspohr.de?subject=FAQ%20Anfrage"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-600 hover:border-primary-600 dark:hover:border-primary-500 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-500/50"
              >
                Direkt per E-Mail
                <ChatBubbleLeftRightIcon className="w-5 h-5 ml-2" />
              </a>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
              Kostenlose Beratung • Antwort binnen 4 Stunden • Individuelle Lösungen
            </p>
          </Card>
        </div>
      </Container>
    </SectionWrapper>
  );
}