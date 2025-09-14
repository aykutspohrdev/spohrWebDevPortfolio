/**
 * Pricing Tiers Data
 * Static data for service packages targeting German SMB market
 * Based on PricingTier type definitions and competitive analysis
 */

import type {
  PricingTier,
  PricingTierName,
  TierStatus,
  TierCategory,
  PriceInfo,
  PricingAddOn,
  ContactInfo,
  PricingComparison,
  ComparisonCategory
} from '@/types/pricing';

/**
 * Main Pricing Tiers
 * Three core packages: Landing, Standard, Custom
 */
export const pricingTiers: PricingTier[] = [
  {
    id: 'landing-tier',
    name: 'Landing',
    description: 'Perfekt für Startups und kleine Unternehmen, die professionell online starten möchten.',
    features: [
      'Moderne One-Page Website',
      'Responsive Design für alle Geräte',
      'SEO-Grundoptimierung',
      'Kontaktformular mit Spam-Schutz',
      'SSL-Zertifikat inklusive',
      'Google Analytics Integration',
      'Social Media Verlinkung',
      '3 Monate kostenloser Support'
    ],
    startingPrice: {
      amount: 1999,
      currency: 'EUR',
      period: 'one-time',
      display: 'ab 1.999 €',
      notes: ['Einmalige Zahlung', 'Keine versteckten Kosten']
    },
    isCustom: false,
    ctaText: 'Landing Page starten',
    highlighted: false,
    displayOrder: 1,
    status: 'active',
    popular: false,
    benefits: [
      'Schneller Online-Start in nur 2-3 Wochen',
      'Kosteneffiziente Lösung für den Einstieg',
      'Professionelles Design stärkt Vertrauen',
      'Mobile-optimiert für alle Besucher',
      'Suchmaschinenoptimiert für bessere Auffindbarkeit'
    ],
    limitations: [
      'Nur eine Seite (One-Pager)',
      'Begrenzte Content-Bereiche',
      'Kein Content Management System',
      'Keine E-Commerce Funktionen',
      'Keine komplexen Integrationen'
    ],
    timeline: '2-3 Wochen',
    revisions: 2,
    supportDuration: '3 Monate',
    category: 'website',
    targetClients: ['startup', 'small-business', 'personal'],
    subtitle: 'Der perfekte Start'
  },
  {
    id: 'standard-tier',
    name: 'Standard',
    description: 'Die beliebteste Lösung für etablierte Unternehmen mit umfangreichen Website-Anforderungen.',
    features: [
      'Mehrseitige Website (bis zu 10 Seiten)',
      'Content Management System (CMS)',
      'Professionelles Corporate Design',
      'SEO-Optimierung für alle Seiten',
      'Blog-System für Content-Marketing',
      'Erweiterte Kontaktformulare',
      'Newsletter-Integration',
      'Google Maps Integration',
      'Performance-Optimierung',
      'DSGVO-konforme Cookie-Banner',
      '6 Monate Premium-Support'
    ],
    startingPrice: {
      amount: 4999,
      maxAmount: 8999,
      currency: 'EUR',
      period: 'one-time',
      display: '4.999 € - 8.999 €',
      notes: ['Je nach Seitenanzahl und Funktionsumfang', 'Ratenzahlung möglich']
    },
    isCustom: false,
    ctaText: 'Standard Website anfragen',
    highlighted: true,
    displayOrder: 2,
    status: 'featured',
    popular: true,
    benefits: [
      'Vollständige Unternehmenswebsite mit CMS',
      'Selbstständige Inhaltspflege ohne Programmierkenntnisse',
      'Professionelle SEO für bessere Google-Rankings',
      'Blog-System für Content-Marketing',
      'Umfassender Support für 6 Monate inklusive'
    ],
    limitations: [
      'Keine E-Commerce Funktionen',
      'Standard-Integrationen (keine individuellen APIs)',
      'Basierend auf bewährten Templates'
    ],
    timeline: '4-6 Wochen',
    revisions: 3,
    supportDuration: '6 Monate',
    category: 'website',
    targetClients: ['small-business', 'medium-business'],
    subtitle: 'Beliebteste Wahl',
    addOns: [
      {
        id: 'professional-photography',
        name: 'Professionelle Fotografie',
        description: 'Business-Shooting für authentische Unternehmensfotos',
        price: {
          amount: 899,
          currency: 'EUR',
          period: 'one-time',
          display: '899 €'
        },
        recommended: true,
        category: 'content'
      },
      {
        id: 'advanced-seo',
        name: 'Erweiterte SEO-Optimierung',
        description: 'Umfassende Keyword-Recherche und On-Page-Optimierung',
        price: {
          amount: 1299,
          currency: 'EUR',
          period: 'one-time',
          display: '1.299 €'
        },
        category: 'marketing'
      },
      {
        id: 'multilingual',
        name: 'Mehrsprachigkeit (EN/DE)',
        description: 'Website in deutscher und englischer Sprache',
        price: {
          amount: 1999,
          currency: 'EUR',
          period: 'one-time',
          display: '1.999 €'
        },
        category: 'development'
      }
    ]
  },
  {
    id: 'custom-tier',
    name: 'Custom',
    description: 'Maßgeschneiderte Lösungen für komplexe Anforderungen und individuelle Unternehmensprozesse.',
    features: [
      'Individuelles Website-Design',
      'Unbegrenzte Seitenzahl',
      'Maßgeschneiderte Funktionen',
      'E-Commerce Integration möglich',
      'Externe System-Integrationen',
      'Custom API-Entwicklung',
      'Erweiterte SEO-Strategien',
      'Performance-Optimierung',
      'Schulung für Ihr Team',
      'Wartungsvertrag optional',
      '12 Monate Premium-Support'
    ],
    isCustom: true,
    ctaText: 'Kostenlose Beratung buchen',
    highlighted: false,
    displayOrder: 3,
    status: 'active',
    popular: false,
    benefits: [
      'Vollständig individuell auf Ihr Unternehmen zugeschnitten',
      'Komplexe Geschäftsprozesse digital abbildbar',
      'Skalierbare Lösung für wachsende Anforderungen',
      'Wettbewerbsvorteil durch einzigartige Features',
      'Langfristige Betreuung und Weiterentwicklung'
    ],
    timeline: '8-16 Wochen',
    revisions: 5,
    supportDuration: '12 Monate',
    category: 'website',
    targetClients: ['medium-business', 'enterprise'],
    subtitle: 'Individuell & Skalierbar',
    customContact: {
      method: 'form',
      value: '/kontakt#custom-project',
      label: 'Kostenlose Erstberatung vereinbaren',
      availability: 'Mo-Fr 9:00-18:00 Uhr'
    }
  }
];

/**
 * Feature Comparison Table
 * Detailed comparison of features across all tiers
 */
export const featureComparison: PricingComparison[] = [
  // Design & Development
  {
    feature: 'Responsive Design',
    description: 'Optimierung für alle Bildschirmgrößen',
    availability: {
      'Landing': true,
      'Standard': true,
      'Custom': true
    },
    category: 'design',
    order: 1
  },
  {
    feature: 'Seitenzahl',
    availability: {
      'Landing': '1 Seite (One-Pager)',
      'Standard': 'Bis zu 10 Seiten',
      'Custom': 'Unbegrenzt'
    },
    category: 'development',
    order: 2
  },
  {
    feature: 'Content Management System',
    description: 'Selbständige Bearbeitung von Inhalten',
    availability: {
      'Landing': false,
      'Standard': true,
      'Custom': true
    },
    category: 'development',
    order: 3
  },
  {
    feature: 'Blog-System',
    availability: {
      'Landing': false,
      'Standard': true,
      'Custom': true
    },
    category: 'content',
    order: 4
  },
  {
    feature: 'E-Commerce Funktionen',
    availability: {
      'Landing': false,
      'Standard': false,
      'Custom': 'Optional verfügbar'
    },
    category: 'development',
    order: 5
  },

  // SEO & Marketing
  {
    feature: 'SEO-Grundoptimierung',
    availability: {
      'Landing': true,
      'Standard': true,
      'Custom': true
    },
    category: 'seo',
    order: 6
  },
  {
    feature: 'Erweiterte SEO-Strategien',
    availability: {
      'Landing': false,
      'Standard': 'Als Add-on',
      'Custom': true
    },
    category: 'seo',
    order: 7
  },
  {
    feature: 'Google Analytics',
    availability: {
      'Landing': true,
      'Standard': true,
      'Custom': 'Erweitert'
    },
    category: 'seo',
    order: 8
  },

  // Support & Extras
  {
    feature: 'Kostenloses Support',
    availability: {
      'Landing': '3 Monate',
      'Standard': '6 Monate',
      'Custom': '12 Monate'
    },
    category: 'support',
    order: 9
  },
  {
    feature: 'Anzahl Revisionen',
    availability: {
      'Landing': '2 Runden',
      'Standard': '3 Runden',
      'Custom': '5 Runden'
    },
    category: 'support',
    order: 10
  },
  {
    feature: 'Team-Schulung',
    availability: {
      'Landing': false,
      'Standard': 'CMS-Einführung',
      'Custom': 'Umfassende Schulung'
    },
    category: 'support',
    order: 11
  },
  {
    feature: 'System-Integrationen',
    availability: {
      'Landing': 'Basis (Social Media)',
      'Standard': 'Standard (Newsletter, Maps)',
      'Custom': 'Individuell'
    },
    category: 'extras',
    order: 12
  }
];

/**
 * Available Add-Ons for all tiers
 */
export const availableAddOns: PricingAddOn[] = [
  {
    id: 'professional-photography',
    name: 'Professionelle Fotografie',
    description: 'Business-Shooting mit bis zu 50 bearbeiteten Fotos',
    price: {
      amount: 899,
      currency: 'EUR',
      period: 'one-time',
      display: '899 €',
      notes: ['Halbtags-Shooting', 'Nachbearbeitung inklusive']
    },
    recommended: true,
    category: 'content'
  },
  {
    id: 'copywriting',
    name: 'Professionelle Texterstellung',
    description: 'SEO-optimierte Texte für alle Website-Bereiche',
    price: {
      amount: 149,
      currency: 'EUR',
      period: 'one-time',
      display: 'ab 149 €/Seite',
      notes: ['Pro Seite', 'SEO-optimiert', 'Zielgruppengerecht']
    },
    category: 'content'
  },
  {
    id: 'advanced-seo',
    name: 'Erweiterte SEO-Optimierung',
    description: 'Keyword-Recherche, Konkurrenzanalyse und technische SEO',
    price: {
      amount: 1299,
      currency: 'EUR',
      period: 'one-time',
      display: '1.299 €'
    },
    category: 'marketing'
  },
  {
    id: 'multilingual-setup',
    name: 'Mehrsprachige Website',
    description: 'Komplette Website in deutscher und englischer Sprache',
    price: {
      amount: 1999,
      currency: 'EUR',
      period: 'one-time',
      display: '1.999 €'
    },
    category: 'development'
  },
  {
    id: 'social-media-integration',
    name: 'Social Media Integration',
    description: 'Automatische Beitragseinbindung von Instagram, Facebook, LinkedIn',
    price: {
      amount: 499,
      currency: 'EUR',
      period: 'one-time',
      display: '499 €'
    },
    category: 'marketing'
  },
  {
    id: 'maintenance-package',
    name: 'Website-Wartungspaket',
    description: 'Monatliche Updates, Backups und technischer Support',
    price: {
      amount: 149,
      currency: 'EUR',
      period: 'monthly',
      display: 'ab 149 €/Monat'
    },
    category: 'maintenance'
  }
];

/**
 * Frequently Asked Questions about Pricing
 */
export const pricingFAQs = [
  {
    question: 'Sind die Preise final oder kommen noch Kosten hinzu?',
    answer: 'Die angegebenen Preise sind transparent und enthalten alle Entwicklungskosten. Hosting und Domain (ca. 10-20 €/Monat) sind separat zu zahlen. Optional buchbare Add-ons werden klar ausgewiesen.',
    category: 'pricing'
  },
  {
    question: 'Ist eine Ratenzahlung möglich?',
    answer: 'Ja, bei Projekten ab 3.000 € biete ich eine 3-teilige Ratenzahlung an: 50% Anzahlung, 30% bei Designfreigabe, 20% bei Projektabschluss.',
    category: 'payment'
  },
  {
    question: 'Was passiert nach Ablauf des kostenlosen Supports?',
    answer: 'Nach dem kostenlosen Support-Zeitraum können Sie bei Bedarf stundenweise Support (89 €/h) oder ein monatliches Wartungspaket (ab 149 €/Monat) buchen.',
    category: 'support'
  },
  {
    question: 'Kann ich später von Landing auf Standard upgraden?',
    answer: 'Ja, ein Upgrade ist jederzeit möglich. Bereits bezahlte Beträge werden vollständig angerechnet. Sie zahlen nur die Differenz plus eventuell zusätzliche Entwicklungskosten.',
    category: 'upgrades'
  },
  {
    question: 'Welche Zahlungsmethoden werden akzeptiert?',
    answer: 'Rechnung mit Banküberweisung (Skonto möglich), PayPal, oder bei größeren Projekten auch Lastschrift nach Vereinbarung.',
    category: 'payment'
  },
  {
    question: 'Was ist im kostenlosen Support enthalten?',
    answer: 'Bugfixes, kleine Anpassungen, technische Hilfe bei der Content-Pflege und Antworten auf Fragen zur Website-Nutzung. Neue Features oder größere Änderungen sind kostenpflichtig.',
    category: 'support'
  }
];

/**
 * Helper Functions
 */

/**
 * Get tier by name
 */
export function getTierByName(name: PricingTierName): PricingTier | undefined {
  return pricingTiers.find(tier => tier.name === name);
}

/**
 * Get featured/highlighted tier
 */
export function getFeaturedTier(): PricingTier | undefined {
  return pricingTiers.find(tier => tier.highlighted || tier.popular);
}

/**
 * Get active tiers only
 */
export function getActiveTiers(): PricingTier[] {
  return pricingTiers.filter(tier => ['active', 'featured'].includes(tier.status));
}

/**
 * Get comparison for specific feature
 */
export function getFeatureComparison(featureName: string): PricingComparison | undefined {
  return featureComparison.find(comparison => comparison.feature === featureName);
}

/**
 * Get features by category
 */
export function getFeaturesByCategory(category: ComparisonCategory): PricingComparison[] {
  return featureComparison.filter(comparison => comparison.category === category);
}

/**
 * Get add-ons by category
 */
export function getAddOnsByCategory(category: string): PricingAddOn[] {
  return availableAddOns.filter(addon => addon.category === category);
}

/**
 * Calculate total price with add-ons
 */
export function calculateTotalPrice(
  tierName: PricingTierName,
  addOnIds: string[]
): number {
  const tier = getTierByName(tierName);
  if (!tier || !tier.startingPrice) return 0;

  const basePrice = tier.startingPrice.amount;
  const addOnsPrice = addOnIds.reduce((total, id) => {
    const addon = availableAddOns.find(a => a.id === id);
    return total + (addon?.price.amount || 0);
  }, 0);

  return basePrice + addOnsPrice;
}

/**
 * Pricing Statistics
 */
export const pricingStats = {
  totalTiers: pricingTiers.length,
  averagePrice: Math.round(
    pricingTiers
      .filter(t => t.startingPrice && !t.isCustom)
      .reduce((sum, t) => sum + (t.startingPrice?.amount || 0), 0) /
    pricingTiers.filter(t => t.startingPrice && !t.isCustom).length
  ),
  mostPopularTier: pricingTiers.find(t => t.popular)?.name || 'Standard',
  totalAddOns: availableAddOns.length,
  supportDuration: {
    min: Math.min(...pricingTiers.map(t => parseInt(t.supportDuration?.split(' ')[0] || '0'))),
    max: Math.max(...pricingTiers.map(t => parseInt(t.supportDuration?.split(' ')[0] || '0')))
  }
};

export default pricingTiers;