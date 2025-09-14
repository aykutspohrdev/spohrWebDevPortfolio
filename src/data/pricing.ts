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
export const pricingTiers = [
  {
    id: 'landing-tier',
    name: 'Landing',
    shortDescription: 'Perfekt für Startups und kleine Unternehmen, die professionell online starten möchten.',
    description: 'Moderne One-Page Website mit allem was Sie für den professionellen Online-Start brauchen.',
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
    pricing: {
      type: 'fixed',
      basePrice: 1999,
      currency: 'EUR',
      priceRange: {
        min: 1999,
        max: 1999
      }
    },
    ctaText: 'Landing Page starten',
    featured: false,
    targetAudience: ['startups', 'small-business'],
    timeline: '2-3 Wochen',
    benefits: [
      'Schneller Online-Start in nur 2-3 Wochen',
      'Kosteneffiziente Lösung für den Einstieg',
      'Professionelles Design stärkt Vertrauen',
      'Mobile-optimiert für alle Besucher',
      'Suchmaschinenoptimiert für bessere Auffindbarkeit'
    ]
  },
  {
    id: 'standard-tier',
    name: 'Standard',
    shortDescription: 'Die beliebteste Lösung für etablierte Unternehmen mit umfangreichen Website-Anforderungen.',
    description: 'Vollständige Unternehmenswebsite mit CMS, Blog und erweiterten Marketing-Features.',
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
    pricing: {
      type: 'fixed',
      basePrice: 6499,
      currency: 'EUR',
      priceRange: {
        min: 4999,
        max: 8999
      }
    },
    ctaText: 'Standard Website anfragen',
    featured: true,
    targetAudience: ['small-business', 'medium-business'],
    timeline: '4-6 Wochen',
    benefits: [
      'Vollständige Unternehmenswebsite mit CMS',
      'Selbstständige Inhaltspflege ohne Programmierkenntnisse',
      'Professionelle SEO für bessere Google-Rankings',
      'Blog-System für Content-Marketing',
      'Umfassender Support für 6 Monate inklusive'
    ]
  },
  {
    id: 'custom-tier',
    name: 'Custom',
    shortDescription: 'Maßgeschneiderte Lösungen für komplexe Anforderungen und individuelle Unternehmensprozesse.',
    description: 'Vollständig individuell entwickelte Website mit maßgeschneiderten Funktionen und unbegrenzten Möglichkeiten.',
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
    pricing: {
      type: 'consultation'
    },
    ctaText: 'Kostenlose Beratung buchen',
    featured: false,
    targetAudience: ['medium-business', 'enterprise'],
    timeline: '8-16 Wochen',
    benefits: [
      'Vollständig individuell auf Ihr Unternehmen zugeschnitten',
      'Komplexe Geschäftsprozesse digital abbildbar',
      'Skalierbare Lösung für wachsende Anforderungen',
      'Wettbewerbsvorteil durch einzigartige Features',
      'Langfristige Betreuung und Weiterentwicklung'
    ]
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
 * Tier Comparison Features
 * Structured data for feature comparison table
 */
export const TIER_COMPARISON_FEATURES = [
  {
    name: 'Responsive Design',
    tiers: {
      'landing-tier': true,
      'standard-tier': true,
      'custom-tier': true
    }
  },
  {
    name: 'Seitenzahl',
    tiers: {
      'landing-tier': '1 Seite',
      'standard-tier': 'Bis zu 10',
      'custom-tier': 'Unbegrenzt'
    }
  },
  {
    name: 'Content Management',
    tiers: {
      'landing-tier': false,
      'standard-tier': true,
      'custom-tier': true
    }
  },
  {
    name: 'Blog-System',
    tiers: {
      'landing-tier': false,
      'standard-tier': true,
      'custom-tier': true
    }
  },
  {
    name: 'E-Commerce',
    tiers: {
      'landing-tier': false,
      'standard-tier': false,
      'custom-tier': 'Optional'
    }
  },
  {
    name: 'SEO-Optimierung',
    tiers: {
      'landing-tier': 'Basis',
      'standard-tier': 'Erweitert',
      'custom-tier': 'Vollständig'
    }
  },
  {
    name: 'Google Analytics',
    tiers: {
      'landing-tier': true,
      'standard-tier': true,
      'custom-tier': true
    }
  },
  {
    name: 'Support-Dauer',
    tiers: {
      'landing-tier': '3 Monate',
      'standard-tier': '6 Monate',
      'custom-tier': '12 Monate'
    }
  },
  {
    name: 'Revisionen',
    tiers: {
      'landing-tier': '2 Runden',
      'standard-tier': '3 Runden',
      'custom-tier': '5 Runden'
    }
  },
  {
    name: 'Team-Schulung',
    tiers: {
      'landing-tier': false,
      'standard-tier': 'CMS Basic',
      'custom-tier': 'Umfassend'
    }
  },
  {
    name: 'System-Integrationen',
    tiers: {
      'landing-tier': 'Social Media',
      'standard-tier': 'Newsletter & Maps',
      'custom-tier': 'Individuell'
    }
  },
  {
    name: 'Performance-Optimierung',
    tiers: {
      'landing-tier': 'Standard',
      'standard-tier': 'Erweitert',
      'custom-tier': 'Maximum'
    }
  }
];

/**
 * Available Add-Ons for all tiers
 */
export const availableAddOns = [
  {
    id: 'professional-photography',
    name: 'Professionelle Fotografie',
    description: 'Business-Shooting mit bis zu 50 bearbeiteten Fotos für authentische Unternehmensdarstellung',
    price: 899,
    billing: 'one-time',
    features: [
      'Halbtags Business-Shooting vor Ort',
      'Bis zu 50 professionell bearbeitete Fotos',
      'High-Resolution Downloads für Web und Print',
      'Nutzungsrechte für Website und Marketing'
    ],
    recommended: true,
    category: 'content'
  },
  {
    id: 'copywriting',
    name: 'Professionelle Texterstellung',
    description: 'SEO-optimierte Texte für alle Website-Bereiche von erfahrenen Textern',
    price: 149,
    billing: 'per-page',
    features: [
      'Zielgruppengerechte Ansprache',
      'SEO-optimierte Keywords',
      'Call-to-Action Optimierung',
      'Bis zu 2 Korrekturschleifen pro Seite'
    ],
    category: 'content'
  },
  {
    id: 'advanced-seo',
    name: 'Erweiterte SEO-Optimierung',
    description: 'Umfassende SEO-Strategie für bessere Google-Rankings und mehr organischen Traffic',
    price: 1299,
    billing: 'one-time',
    features: [
      'Ausführliche Keyword-Recherche und -Analyse',
      'Konkurrenzanalyse und Marktpositionierung',
      'Technische SEO-Optimierung',
      'Google My Business Optimierung'
    ],
    category: 'marketing'
  },
  {
    id: 'multilingual-setup',
    name: 'Mehrsprachige Website',
    description: 'Komplette Website-Umsetzung in deutscher und englischer Sprache',
    price: 1999,
    billing: 'one-time',
    features: [
      'Vollständige Übersetzung aller Inhalte',
      'Separate URL-Struktur für jede Sprache',
      'Automatische Spracherkennung',
      'SEO-Optimierung für beide Sprachen'
    ],
    category: 'development'
  },
  {
    id: 'social-media-integration',
    name: 'Social Media Integration',
    description: 'Automatische Einbindung Ihrer Social Media Kanäle in die Website',
    price: 499,
    billing: 'one-time',
    features: [
      'Instagram Feed-Integration',
      'Facebook und LinkedIn Verknüpfung',
      'Automatische Social Media Icons',
      'Social Sharing Buttons auf allen Seiten'
    ],
    category: 'marketing'
  },
  {
    id: 'maintenance-package',
    name: 'Website-Wartungspaket',
    description: 'Monatliche Website-Betreuung für optimale Performance und Sicherheit',
    price: 149,
    billing: 'monthly',
    features: [
      'Regelmäßige Updates und Backups',
      'Performance-Monitoring und -Optimierung',
      'Technischer Support und Bugfixes',
      'Monatlicher Performance-Report'
    ],
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

// Export alias for component compatibility
export const pricingAddOns = availableAddOns;

export default pricingTiers;