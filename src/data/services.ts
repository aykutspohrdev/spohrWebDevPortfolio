/**
 * Services Offerings Data
 * Static data for web development services offered to German SMB clients
 * Based on ServiceOffering type definitions and market research
 */

import type {
  ServiceOffering,
  ServiceCategory,
  ServiceStatus,
  ServiceIcon,
  ClientType,
  DurationRange,
  PriceRange
} from '@/types/services';

/**
 * Services Collection
 * Core web development services targeting German SMBs
 */
export const serviceOfferings: ServiceOffering[] = [
  {
    id: 'modern-website-development',
    title: 'Moderne Website-Entwicklung',
    description: 'Professionelle, responsive Websites mit modernem Design und optimaler Performance für Ihr Unternehmen.',
    benefits: [
      'Professioneller Webauftritt stärkt Vertrauen bei Kunden',
      'Mobile-optimiert für alle Endgeräte und Bildschirmgrößen',
      'Suchmaschinenoptimiert für bessere Google-Auffindbarkeit',
      'Schnelle Ladezeiten verbessern Nutzererfahrung',
      'Benutzerfreundliche Verwaltung ohne Programmierkenntnisse'
    ],
    features: [
      'Responsive Webdesign für alle Geräte',
      'Content Management System (CMS)',
      'SEO-Grundoptimierung',
      'SSL-Verschlüsselung',
      'Google Analytics Integration',
      'Kontaktformular mit Spam-Schutz',
      'Social Media Integration',
      'Cookie-Banner (DSGVO-konform)'
    ],
    icon: 'code',
    displayOrder: 1,
    category: 'web-development',
    status: 'featured',
    duration: {
      min: 3,
      max: 8,
      unit: 'weeks',
      notes: 'Je nach Projektumfang und Anzahl der Seiten'
    },
    startingPrice: {
      min: 2500,
      max: 8000,
      currency: 'EUR',
      unit: 'project',
      notes: 'Abhängig von Funktionsumfang und Design-Komplexität'
    },
    deliveryTimeline: '3-8 Wochen',
    prerequisites: [
      'Bereitstellung von Texten und Bildmaterial',
      'Klare Vorstellung der Zielgruppe',
      'Beispiele gewünschter Design-Richtungen'
    ],
    deliverables: [
      'Vollständig funktionsfähige Website',
      'CMS-Schulung für Ihr Team',
      'Technische Dokumentation',
      'SEO-Basisoptimierung',
      '3 Monate kostenloser Support'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Sanity CMS'],
    targetClients: ['small-business', 'medium-business', 'startup'],
    slug: 'moderne-website-entwicklung',
    longDescription: 'Ihre Website ist oft der erste Eindruck, den potenzielle Kunden von Ihrem Unternehmen bekommen. Mit einer modernen, professionellen Website stärken Sie das Vertrauen in Ihr Unternehmen und erreichen neue Kunden online. Ich entwickle responsive Websites, die auf allen Geräten perfekt funktionieren und Ihre Marke optimal repräsentieren.',
    faqs: [
      {
        question: 'Wie lange dauert die Entwicklung einer Website?',
        answer: 'Die Entwicklungsdauer hängt vom Projektumfang ab. Eine einfache Unternehmenswebsite benötigt 3-4 Wochen, komplexere Projekte mit vielen Seiten und Funktionen bis zu 8 Wochen.',
        order: 1
      },
      {
        question: 'Kann ich die Website selbst bearbeiten?',
        answer: 'Ja, jede Website wird mit einem benutzerfreundlichen Content Management System (CMS) geliefert. Sie erhalten eine Einschulung und können Texte, Bilder und Seiten selbst verwalten.',
        order: 2
      },
      {
        question: 'Ist die Website für Suchmaschinen optimiert?',
        answer: 'Alle Websites werden mit SEO-Grundoptimierung entwickelt: technische SEO, Meta-Tags, strukturierte Daten und Performance-Optimierung für bessere Google-Rankings.',
        order: 3
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Beratung & Konzept',
        description: 'Gemeinsame Analyse Ihrer Ziele, Zielgruppe und Anforderungen',
        duration: '1 Woche',
        deliverables: ['Projektkonzept', 'Sitemap', 'Wireframes']
      },
      {
        step: 2,
        title: 'Design & Prototyping',
        description: 'Erstellung des visuellen Designs und interaktiver Prototypen',
        duration: '1-2 Wochen',
        deliverables: ['Design-Mockups', 'Klickbarer Prototyp']
      },
      {
        step: 3,
        title: 'Entwicklung',
        description: 'Technische Umsetzung mit modernen Webtechnologien',
        duration: '2-4 Wochen',
        deliverables: ['Funktionsfähige Website', 'CMS-Integration']
      },
      {
        step: 4,
        title: 'Testing & Launch',
        description: 'Ausführliche Tests und Live-Schaltung der Website',
        duration: '1 Woche',
        deliverables: ['Live-Website', 'Schulungsunterlagen', 'Support-Paket']
      }
    ]
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-Commerce Lösungen',
    description: 'Professionelle Online-Shops mit sicheren Bezahlsystemen und optimaler Benutzerführung für Ihren Verkaufserfolg.',
    benefits: [
      '24/7 Verkauf ohne Ladenöffnungszeiten',
      'Erreichen Sie Kunden deutschlandweit',
      'Automatisierte Bestellabwicklung spart Zeit',
      'Detaillierte Verkaufsanalysen und Kundeninsights',
      'Integration in bestehende Warenwirtschaftssysteme'
    ],
    features: [
      'Produktkatalog mit Suchfunktion',
      'Warenkorb und Checkout-Prozess',
      'Bezahlung: PayPal, Kreditkarte, SEPA',
      'Kundenkonten und Bestellhistorie',
      'Lagerverwaltung und Bestandsanzeige',
      'Versandkostenberechnung',
      'Rabattcodes und Aktionen',
      'DSGVO-konforme Datenverarbeitung'
    ],
    icon: 'ecommerce',
    displayOrder: 2,
    category: 'web-development',
    status: 'active',
    duration: {
      min: 6,
      max: 16,
      unit: 'weeks',
      notes: 'Abhängig von Produktanzahl und gewünschten Integrationen'
    },
    startingPrice: {
      min: 5000,
      max: 25000,
      currency: 'EUR',
      unit: 'project',
      notes: 'Je nach Funktionsumfang und Anzahl der Produkte'
    },
    deliveryTimeline: '6-16 Wochen',
    prerequisites: [
      'Produktdaten und hochqualitative Produktbilder',
      'Rechtliche Dokumente (AGB, Datenschutz, Widerrufsrecht)',
      'Gewerbeanmeldung und Steuernummer',
      'Entscheidung über Bezahl- und Versandmethoden'
    ],
    deliverables: [
      'Vollständiger Online-Shop',
      'Admin-Panel für Produktverwaltung',
      'Zahlungsabwicklung-Integration',
      'Rechtskonformer Checkout',
      'Analytics und Reporting',
      'Schulung für Shop-Verwaltung'
    ],
    technologies: ['Next.js', 'Shopify', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    targetClients: ['small-business', 'medium-business'],
    slug: 'ecommerce-loesungen',
    longDescription: 'Ein professioneller Online-Shop öffnet Ihnen neue Verkaufskanäle und ermöglicht Umsatz rund um die Uhr. Ich entwickle benutzerfreundliche E-Commerce-Lösungen, die Ihre Kunden zum Kauf motivieren und gleichzeitig alle rechtlichen Anforderungen in Deutschland erfüllen.',
    faqs: [
      {
        question: 'Welche Bezahlmethoden werden unterstützt?',
        answer: 'Standard sind PayPal, Kreditkarten und SEPA-Lastschrift. Weitere Zahlungsarten wie Klarna, Apple Pay oder Bitcoin können nach Bedarf integriert werden.',
        order: 1
      },
      {
        question: 'Ist der Shop rechtssicher für Deutschland?',
        answer: 'Ja, alle Shops werden DSGVO-konform entwickelt mit ordnungsgemäßem Impressum, AGB, Datenschutzerklärung und Widerrufsrecht nach deutschem Recht.',
        order: 2
      },
      {
        question: 'Kann der Shop mit meiner Warenwirtschaft verbunden werden?',
        answer: 'Ja, über APIs können die meisten Warenwirtschaftssysteme angebunden werden. Dies ermöglicht automatische Lagerupdates und Bestellübertragungen.',
        order: 3
      }
    ]
  },
  {
    id: 'website-optimization',
    title: 'Website-Optimierung',
    description: 'Performance-Verbesserung und SEO-Optimierung bestehender Websites für bessere Rankings und Nutzererfahrung.',
    benefits: [
      'Schnellere Ladezeiten reduzieren Absprungrate',
      'Bessere Google-Rankings durch technische SEO',
      'Höhere Conversion-Rate durch optimierte Benutzerführung',
      'Verbesserte Sicherheit und Datenschutz-Compliance',
      'Mobile-Optimierung für Smartphone-Nutzer'
    ],
    features: [
      'Performance-Analyse und Optimierung',
      'SEO-Audit und Verbesserungsmaßnahmen',
      'Mobile-Responsiveness Optimierung',
      'Sicherheits-Updates und SSL-Einrichtung',
      'DSGVO-Compliance Überprüfung',
      'Page Speed Optimierung',
      'User Experience (UX) Verbesserungen',
      'Analytics und Tracking-Setup'
    ],
    icon: 'optimization',
    displayOrder: 3,
    category: 'optimization',
    status: 'active',
    duration: {
      min: 2,
      max: 6,
      unit: 'weeks',
      notes: 'Abhängig vom aktuellen Zustand der Website'
    },
    startingPrice: {
      min: 1500,
      max: 5000,
      currency: 'EUR',
      unit: 'project',
      notes: 'Basierend auf dem Optimierungsaufwand'
    },
    deliveryTimeline: '2-6 Wochen',
    prerequisites: [
      'Zugang zur bestehenden Website',
      'Analytics-Daten (falls vorhanden)',
      'Informationen über aktuelle Probleme',
      'Ziele der Optimierung definieren'
    ],
    deliverables: [
      'Detaillierter Website-Audit Report',
      'Implementierte Performance-Verbesserungen',
      'SEO-Optimierung on-page',
      'Mobile-Optimierung',
      'Sicherheits-Updates',
      'Empfehlungen für weitere Maßnahmen'
    ],
    technologies: ['Google PageSpeed', 'SEO Tools', 'Security Plugins', 'Analytics'],
    targetClients: ['small-business', 'medium-business', 'startup'],
    slug: 'website-optimierung'
  },
  {
    id: 'web-consulting',
    title: 'Web-Beratung & Strategieentwicklung',
    description: 'Strategische Beratung für Ihre digitale Präsenz, Technologie-Auswahl und Online-Marketing-Strategien.',
    benefits: [
      'Fundierte Entscheidungen durch Experten-Know-how',
      'Kostenersparnis durch richtige Technologie-Wahl',
      'Klare Roadmap für Ihre digitalen Projekte',
      'Risiken erkennen und vermeiden',
      'Wettbewerbsvorteile durch innovative Ansätze'
    ],
    features: [
      'Digital-Strategie Entwicklung',
      'Technische Machbarkeitsstudien',
      'Wettbewerbsanalyse',
      'Budgetplanung für Web-Projekte',
      'Projektmanagement-Beratung',
      'Hosting und Domain-Beratung',
      'Online-Marketing Strategien',
      'Datenschutz und Compliance-Beratung'
    ],
    icon: 'consulting',
    displayOrder: 4,
    category: 'consulting',
    status: 'active',
    duration: {
      min: 1,
      max: 4,
      unit: 'weeks',
      notes: 'Flexibel nach Beratungsbedarf'
    },
    startingPrice: {
      min: 150,
      max: 200,
      currency: 'EUR',
      unit: 'hour',
      notes: 'Stundensatz für Beratungsleistungen'
    },
    deliveryTimeline: '1-4 Wochen',
    prerequisites: [
      'Informationen über aktuelle Situation',
      'Defined Ziele und Herausforderungen',
      'Budget-Vorstellungen',
      'Zeitrahmen für Umsetzung'
    ],
    deliverables: [
      'Strategisches Beratungskonzept',
      'Technische Empfehlungen',
      'Budgetplan mit Kostenschätzung',
      'Projekt-Roadmap',
      'Risiko-Analyse',
      'Anbieter-Empfehlungen'
    ],
    technologies: ['Strategy Tools', 'Analytics', 'Market Research'],
    targetClients: ['startup', 'small-business', 'medium-business', 'enterprise'],
    slug: 'web-beratung-strategie'
  },
  {
    id: 'website-maintenance',
    title: 'Website-Wartung & Support',
    description: 'Regelmäßige Wartung, Updates und technischer Support für Ihre Website - damit Sie sich auf Ihr Geschäft konzentrieren können.',
    benefits: [
      'Sicherheit durch regelmäßige Updates',
      'Minimale Ausfallzeiten und zuverlässige Performance',
      'Schnelle Hilfe bei technischen Problemen',
      'Backup-Schutz vor Datenverlust',
      'Monitoring und proaktive Fehlerbehebung'
    ],
    features: [
      'Regelmäßige Software-Updates',
      'Sicherheits-Monitoring',
      'Tägliche Backups',
      'Performance-Überwachung',
      '24/7 Uptime-Monitoring',
      'Malware-Scanner und Bereinigung',
      'Content-Updates auf Anfrage',
      'Priority-Support per E-Mail/Telefon'
    ],
    icon: 'maintenance',
    displayOrder: 5,
    category: 'maintenance',
    status: 'active',
    duration: {
      min: 12,
      max: 12,
      unit: 'months',
      notes: 'Laufende Betreuung mit monatlicher Abrechnung'
    },
    startingPrice: {
      min: 99,
      max: 299,
      currency: 'EUR',
      unit: 'month',
      notes: 'Je nach Wartungsumfang und Support-Level'
    },
    deliveryTimeline: 'Sofort verfügbar',
    prerequisites: [
      'Bestehende Website',
      'Zugang zu Hosting und Domain',
      'Definition der gewünschten Services',
      'Notfall-Kontaktdaten'
    ],
    deliverables: [
      'Monatliche Wartungsberichte',
      'Automatische Backups',
      'Sicherheits-Updates',
      'Performance-Reports',
      'Support bei technischen Fragen',
      'Notfall-Support'
    ],
    technologies: ['Monitoring Tools', 'Backup Solutions', 'Security Tools'],
    targetClients: ['small-business', 'medium-business'],
    slug: 'website-wartung-support'
  }
];

/**
 * Featured Services for Homepage
 */
export const featuredServices = serviceOfferings
  .filter(service => service.status === 'featured')
  .sort((a, b) => a.displayOrder - b.displayOrder);

/**
 * Services by Category
 */
export const servicesByCategory = serviceOfferings.reduce((acc, service) => {
  const category = service.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(service);
  return acc;
}, {} as Record<ServiceCategory, ServiceOffering[]>);

/**
 * Active Services Only
 */
export const activeServices = serviceOfferings
  .filter(service => ['active', 'featured'].includes(service.status))
  .sort((a, b) => a.displayOrder - b.displayOrder);

/**
 * All Technologies Used
 */
export const allServiceTechnologies = Array.from(
  new Set(
    serviceOfferings
      .flatMap(service => service.technologies || [])
      .sort()
  )
);

/**
 * Services Statistics
 */
export const servicesStats = {
  totalServices: serviceOfferings.length,
  activeServices: activeServices.length,
  featuredServices: featuredServices.length,
  categoriesCount: Object.keys(servicesByCategory).reduce((acc, category) => {
    acc[category as ServiceCategory] = servicesByCategory[category as ServiceCategory].length;
    return acc;
  }, {} as Record<ServiceCategory, number>),
  averagePrice: Math.round(
    serviceOfferings
      .filter(s => s.startingPrice && s.startingPrice.unit === 'project')
      .reduce((sum, s) => sum + (s.startingPrice?.min || 0), 0) /
    serviceOfferings.filter(s => s.startingPrice && s.startingPrice.unit === 'project').length
  ),
  averageDuration: Math.round(
    serviceOfferings
      .filter(s => s.duration && s.duration.unit === 'weeks')
      .reduce((sum, s) => sum + (s.duration?.min || 0), 0) /
    serviceOfferings.filter(s => s.duration && s.duration.unit === 'weeks').length
  ),
  popularTechnologies: allServiceTechnologies.reduce((acc, tech) => {
    acc[tech] = serviceOfferings.filter(service =>
      service.technologies?.includes(tech)
    ).length;
    return acc;
  }, {} as Record<string, number>),
  clientTypesServed: serviceOfferings
    .flatMap(service => service.targetClients || [])
    .reduce((acc, clientType) => {
      acc[clientType] = (acc[clientType] || 0) + 1;
      return acc;
    }, {} as Record<ClientType, number>)
};

/**
 * Helper Functions
 */

/**
 * Get service by ID
 */
export function getServiceById(id: string): ServiceOffering | undefined {
  return serviceOfferings.find(service => service.id === id);
}

/**
 * Get service by slug
 */
export function getServiceBySlug(slug: string): ServiceOffering | undefined {
  return serviceOfferings.find(service => service.slug === slug);
}

/**
 * Get services by category
 */
export function getServicesByCategory(category: ServiceCategory): ServiceOffering[] {
  return serviceOfferings.filter(service => service.category === category);
}

/**
 * Get services for specific client type
 */
export function getServicesForClientType(clientType: ClientType): ServiceOffering[] {
  return serviceOfferings.filter(service =>
    service.targetClients?.includes(clientType)
  );
}

/**
 * Search services by term
 */
export function searchServices(searchTerm: string): ServiceOffering[] {
  const term = searchTerm.toLowerCase();
  return serviceOfferings.filter(service =>
    service.title.toLowerCase().includes(term) ||
    service.description.toLowerCase().includes(term) ||
    service.benefits.some(benefit => benefit.toLowerCase().includes(term)) ||
    service.features.some(feature => feature.toLowerCase().includes(term))
  );
}

/**
 * Get related services (same category, excluding current)
 */
export function getRelatedServices(currentServiceId: string, limit: number = 2): ServiceOffering[] {
  const currentService = getServiceById(currentServiceId);
  if (!currentService) return [];

  return serviceOfferings
    .filter(service =>
      service.id !== currentServiceId &&
      service.category === currentService.category &&
      ['active', 'featured'].includes(service.status)
    )
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .slice(0, limit);
}

export default serviceOfferings;