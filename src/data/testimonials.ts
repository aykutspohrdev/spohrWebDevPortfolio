/**
 * Client Testimonials Data
 * Static data for client testimonials and reviews
 * Based on ClientTestimonial type definitions and German SMB audience
 */

import type {
  ClientTestimonial,
  TestimonialCategory,
  TestimonialDisplayFormat,
  TestimonialRating
} from '@/types/testimonials';

/**
 * Client Testimonials Collection
 * Note: These are example testimonials representing typical German SMB clients
 * Replace with actual client testimonials when available
 */
export const clientTestimonials: ClientTestimonial[] = [
  {
    id: 'testimonial-mueller-bakery',
    clientName: 'Sarah Müller',
    clientTitle: 'Geschäftsführerin',
    clientCompany: 'Bäckerei Müller GmbH',
    clientIndustry: 'food-beverage',
    testimonialText: 'Herr Spohr hat unsere traditionelle Bäckerei digital transformiert. Die neue Website ist nicht nur wunderschön, sondern bringt uns täglich neue Kunden. Besonders beeindruckend war seine Geduld bei der Schulung unseres Teams im Umgang mit dem CMS. Nach nur 3 Monaten haben wir 40% mehr junge Kunden gewonnen!',
    rating: {
      overall: 5,
      communication: 5,
      technical: 5,
      timeline: 5,
      value: 5
    },
    projectType: 'corporate-website',
    projectValue: 6500,
    dateGiven: '2024-04-20',
    verified: true,
    featured: true,
    displayOrder: 1,
    category: 'project-success',
    tags: ['responsive-design', 'cms-training', 'local-seo', 'customer-acquisition'],
    projectDuration: 6,
    followUpProjects: ['maintenance-contract', 'social-media-integration'],
    permissions: {
      canDisplayFull: true,
      canUseInMarketing: true,
      canShareContact: false,
      gdprCompliant: true
    },
    clientLocation: 'Köln, Deutschland',
    clientSize: 'small-business',
    languagePreference: 'de',
    sourceProject: 'modern-bakery-website',
    metrics: [
      {
        name: 'Neue Kunden',
        value: '+40%',
        period: '3 Monate'
      },
      {
        name: 'Online-Anfragen',
        value: '+180%',
        period: '3 Monate'
      }
    ]
  },
  {
    id: 'testimonial-fitlife-studios',
    clientName: 'Michael Schmidt',
    clientTitle: 'Inhaber',
    clientCompany: 'FitLife Studios Köln',
    clientIndustry: 'fitness-wellness',
    testimonialText: 'Die Buchungsplattform von Aykut hat unser Studio revolutioniert. Endlich können sich unsere Mitglieder selbstständig für Kurse anmelden, und wir haben 60% weniger Verwaltungsaufwand. Das System läuft seit einem Jahr absolut zuverlässig, und der Support ist hervorragend. Beste Investition, die wir je gemacht haben!',
    rating: {
      overall: 5,
      communication: 5,
      technical: 5,
      timeline: 4,
      value: 5
    },
    projectType: 'web-application',
    projectValue: 15800,
    dateGiven: '2024-02-15',
    verified: true,
    featured: true,
    displayOrder: 2,
    category: 'efficiency-improvement',
    tags: ['booking-system', 'mobile-app', 'automation', 'user-training'],
    projectDuration: 12,
    followUpProjects: ['mobile-app-enhancement', 'payment-integration'],
    permissions: {
      canDisplayFull: true,
      canUseInMarketing: true,
      canShareContact: true,
      gdprCompliant: true
    },
    clientLocation: 'Köln, Deutschland',
    clientSize: 'small-business',
    languagePreference: 'de',
    sourceProject: 'fitness-studio-booking',
    metrics: [
      {
        name: 'Verwaltungsaufwand',
        value: '-60%',
        period: 'seit Launch'
      },
      {
        name: 'Online-Buchungen',
        value: '+95%',
        period: '6 Monate'
      }
    ]
  },
  {
    id: 'testimonial-schmidt-consulting',
    clientName: 'Dr. Andreas Schmidt',
    clientTitle: 'Managing Partner',
    clientCompany: 'Schmidt & Partner Consulting',
    clientIndustry: 'consulting',
    testimonialText: 'Aykut versteht es perfekt, komplexe B2B-Dienstleistungen verständlich zu präsentieren. Unsere neue Website generiert qualifizierte Leads im Wert von über 200.000 € pro Quartal. Die professionelle Darstellung unserer Case Studies hat uns bereits drei Großkunden gebracht. Absolute Weiterempfehlung!',
    rating: {
      overall: 5,
      communication: 5,
      technical: 5,
      timeline: 5,
      value: 5
    },
    projectType: 'corporate-website',
    projectValue: 12500,
    dateGiven: '2023-12-10',
    verified: true,
    featured: true,
    displayOrder: 3,
    category: 'revenue-growth',
    tags: ['b2b-focus', 'lead-generation', 'case-studies', 'seo-optimization'],
    projectDuration: 8,
    followUpProjects: ['seo-optimization', 'marketing-automation'],
    permissions: {
      canDisplayFull: true,
      canUseInMarketing: true,
      canShareContact: false,
      gdprCompliant: true
    },
    clientLocation: 'Düsseldorf, Deutschland',
    clientSize: 'medium-business',
    languagePreference: 'de',
    sourceProject: 'consulting-firm-website',
    metrics: [
      {
        name: 'Qualifizierte Leads',
        value: '+240%',
        period: '12 Monate'
      },
      {
        name: 'Quartalsumsatz',
        value: '€200k+',
        period: 'via Website'
      }
    ]
  },
  {
    id: 'testimonial-wellness-spa',
    clientName: 'Julia Hoffmann',
    clientTitle: 'Inhaberin',
    clientCompany: 'Harmony Wellness & Spa',
    clientIndustry: 'fitness-wellness',
    testimonialText: 'Nach 15 Jahren mit derselben Website brauchten wir dringend einen modernen Auftritt. Aykut hat nicht nur eine wunderschöne Website erstellt, sondern auch unser Online-Buchungssystem integriert. Seitdem sind unsere Online-Buchungen um 120% gestiegen, und wir erreichen endlich auch jüngere Zielgruppen.',
    rating: {
      overall: 5,
      communication: 5,
      technical: 4,
      timeline: 5,
      value: 4
    },
    projectType: 'redesign',
    projectValue: 8900,
    dateGiven: '2024-01-25',
    verified: true,
    featured: false,
    displayOrder: 4,
    category: 'modernization',
    tags: ['redesign', 'booking-integration', 'mobile-optimization', 'target-expansion'],
    projectDuration: 10,
    followUpProjects: ['social-media-setup'],
    permissions: {
      canDisplayFull: true,
      canUseInMarketing: true,
      canShareContact: false,
      gdprCompliant: true
    },
    clientLocation: 'Bonn, Deutschland',
    clientSize: 'small-business',
    languagePreference: 'de',
    metrics: [
      {
        name: 'Online-Buchungen',
        value: '+120%',
        period: '6 Monate'
      },
      {
        name: 'Mobile Traffic',
        value: '+85%',
        period: 'seit Relaunch'
      }
    ]
  },
  {
    id: 'testimonial-local-restaurant',
    clientName: 'Giuseppe Rossi',
    clientTitle: 'Inhaber',
    clientCompany: 'Ristorante Da Giuseppe',
    clientIndustry: 'food-beverage',
    testimonialText: 'Mama mia! Aykut hat für unser Restaurant eine fantastische Website gemacht. Online-Reservierungen funktionieren perfekt, und unsere Speisekarte sieht so appetitlich aus! Viele neue Gäste finden uns jetzt über Google. Grazie mille, Aykut!',
    rating: {
      overall: 5,
      communication: 4,
      technical: 5,
      timeline: 5,
      value: 5
    },
    projectType: 'landing',
    projectValue: 2800,
    dateGiven: '2024-03-12',
    verified: true,
    featured: false,
    displayOrder: 5,
    category: 'local-business-growth',
    tags: ['restaurant', 'online-reservations', 'local-seo', 'menu-display'],
    projectDuration: 4,
    followUpProjects: [],
    permissions: {
      canDisplayFull: true,
      canUseInMarketing: true,
      canShareContact: true,
      gdprCompliant: true
    },
    clientLocation: 'Köln, Deutschland',
    clientSize: 'micro-business',
    languagePreference: 'de',
    metrics: [
      {
        name: 'Online-Reservierungen',
        value: '45/Woche',
        period: 'Durchschnitt'
      },
      {
        name: 'Google-Traffic',
        value: '+200%',
        period: '4 Monate'
      }
    ]
  },
  {
    id: 'testimonial-legal-firm',
    clientName: 'Dr. Christina Weber',
    clientTitle: 'Rechtsanwältin',
    clientCompany: 'Kanzlei Weber & Kollegen',
    clientIndustry: 'professional-services',
    testimonialText: 'Als Anwaltskanzlei war uns Seriosität und Datenschutz besonders wichtig. Aykut hat eine DSGVO-konforme Website erstellt, die gleichzeitig modern und vertrauenswürdig wirkt. Die Mandantenanfragen haben sich verdoppelt, und das Kontaktformular funktioniert einwandfrei.',
    rating: {
      overall: 5,
      communication: 5,
      technical: 5,
      timeline: 4,
      value: 4
    },
    projectType: 'corporate-website',
    projectValue: 9800,
    dateGiven: '2023-11-28',
    verified: true,
    featured: false,
    displayOrder: 6,
    category: 'trust-building',
    tags: ['legal-sector', 'gdpr-compliance', 'trust-elements', 'lead-forms'],
    projectDuration: 7,
    followUpProjects: ['seo-optimization'],
    permissions: {
      canDisplayFull: true,
      canUseInMarketing: true,
      canShareContact: false,
      gdprCompliant: true
    },
    clientLocation: 'Frankfurt, Deutschland',
    clientSize: 'small-business',
    languagePreference: 'de',
    metrics: [
      {
        name: 'Mandantenanfragen',
        value: '+100%',
        period: '8 Monate'
      },
      {
        name: 'Verweildauer',
        value: '+180%',
        period: 'seit Relaunch'
      }
    ]
  }
];

/**
 * Featured Testimonials for Homepage
 */
export const featuredTestimonials = clientTestimonials.filter(testimonial => testimonial.featured);

/**
 * Testimonials by Category
 */
export const testimonialsByCategory = clientTestimonials.reduce((acc, testimonial) => {
  const category = testimonial.category || 'general';
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(testimonial);
  return acc;
}, {} as Record<TestimonialCategory, ClientTestimonial[]>);

/**
 * Recent Testimonials (last 12 months)
 */
export const recentTestimonials = clientTestimonials
  .filter(testimonial => {
    const givenDate = new Date(testimonial.dateGiven);
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    return givenDate >= oneYearAgo;
  })
  .sort((a, b) => new Date(b.dateGiven).getTime() - new Date(a.dateGiven).getTime());

/**
 * High-Rating Testimonials (4+ stars overall)
 */
export const highRatingTestimonials = clientTestimonials
  .filter(testimonial => testimonial.rating.overall >= 4)
  .sort((a, b) => b.rating.overall - a.rating.overall);

/**
 * Industries Represented
 */
export const industriesRepresented = Array.from(
  new Set(clientTestimonials.map(testimonial => testimonial.clientIndustry))
).sort();

/**
 * Testimonial Statistics
 */
export const testimonialStats = {
  totalTestimonials: clientTestimonials.length,
  featuredCount: featuredTestimonials.length,
  averageRating: clientTestimonials.reduce((sum, t) => sum + t.rating.overall, 0) / clientTestimonials.length,
  industriesCount: industriesRepresented.length,
  verifiedCount: clientTestimonials.filter(t => t.verified).length,
  averageProjectValue: Math.round(
    clientTestimonials
      .filter(t => t.projectValue)
      .reduce((sum, t) => sum + (t.projectValue || 0), 0) /
    clientTestimonials.filter(t => t.projectValue).length
  ),
  categoryDistribution: Object.keys(testimonialsByCategory).reduce((acc, category) => {
    acc[category as TestimonialCategory] = testimonialsByCategory[category as TestimonialCategory].length;
    return acc;
  }, {} as Record<TestimonialCategory, number>),
  projectTypeDistribution: clientTestimonials.reduce((acc, testimonial) => {
    const type = testimonial.projectType;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>),
  clientSizeDistribution: clientTestimonials.reduce((acc, testimonial) => {
    const size = testimonial.clientSize;
    acc[size] = (acc[size] || 0) + 1;
    return acc;
  }, {} as Record<string, number>)
};

/**
 * Helper Functions
 */

/**
 * Get testimonial by ID
 */
export function getTestimonialById(id: string): ClientTestimonial | undefined {
  return clientTestimonials.find(testimonial => testimonial.id === id);
}

/**
 * Get testimonials by category
 */
export function getTestimonialsByCategory(category: TestimonialCategory): ClientTestimonial[] {
  return clientTestimonials.filter(testimonial => testimonial.category === category);
}

/**
 * Get testimonials by industry
 */
export function getTestimonialsByIndustry(industry: string): ClientTestimonial[] {
  return clientTestimonials.filter(testimonial => testimonial.clientIndustry === industry);
}

/**
 * Get testimonials by project type
 */
export function getTestimonialsByProjectType(projectType: string): ClientTestimonial[] {
  return clientTestimonials.filter(testimonial => testimonial.projectType === projectType);
}

/**
 * Get testimonials with minimum rating
 */
export function getTestimonialsByMinRating(minRating: number): ClientTestimonial[] {
  return clientTestimonials.filter(testimonial => testimonial.rating.overall >= minRating);
}

/**
 * Search testimonials by text content
 */
export function searchTestimonials(searchTerm: string): ClientTestimonial[] {
  const term = searchTerm.toLowerCase();
  return clientTestimonials.filter(testimonial =>
    testimonial.testimonialText.toLowerCase().includes(term) ||
    testimonial.clientName.toLowerCase().includes(term) ||
    testimonial.clientCompany.toLowerCase().includes(term) ||
    testimonial.tags?.some(tag => tag.toLowerCase().includes(term))
  );
}

/**
 * Get random testimonials for rotation
 */
export function getRandomTestimonials(count: number = 3): ClientTestimonial[] {
  const shuffled = [...clientTestimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * Format testimonial for specific display type
 */
export function formatTestimonialForDisplay(
  testimonial: ClientTestimonial,
  format: TestimonialDisplayFormat,
  maxLength?: number
): Partial<ClientTestimonial> {
  const base = {
    id: testimonial.id,
    clientName: testimonial.clientName,
    clientCompany: testimonial.clientCompany,
    rating: testimonial.rating
  };

  switch (format) {
    case 'card':
      return {
        ...base,
        testimonialText: maxLength
          ? truncateText(testimonial.testimonialText, maxLength)
          : testimonial.testimonialText,
        clientTitle: testimonial.clientTitle,
        projectType: testimonial.projectType
      };

    case 'carousel':
      return {
        ...base,
        testimonialText: truncateText(testimonial.testimonialText, 150),
        clientIndustry: testimonial.clientIndustry
      };

    case 'grid':
      return {
        ...base,
        testimonialText: truncateText(testimonial.testimonialText, 100)
      };

    case 'list':
      return {
        ...base,
        testimonialText: testimonial.testimonialText,
        clientTitle: testimonial.clientTitle,
        projectValue: testimonial.projectValue,
        dateGiven: testimonial.dateGiven
      };

    case 'featured':
      return testimonial;

    default:
      return testimonial;
  }
}

/**
 * Truncate text helper
 */
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Get testimonials for homepage carousel (featured + high rating)
 */
export function getHomepageTestimonials(count: number = 4): ClientTestimonial[] {
  const featured = featuredTestimonials.slice(0, 2);
  const additional = highRatingTestimonials
    .filter(t => !featured.includes(t))
    .slice(0, count - featured.length);

  return [...featured, ...additional].slice(0, count);
}

/**
 * Calculate average ratings by category
 */
export function getAverageRatingsByCategory(): Record<string, number> {
  return Object.keys(testimonialsByCategory).reduce((acc, category) => {
    const testimonials = testimonialsByCategory[category as TestimonialCategory];
    const average = testimonials.reduce((sum, t) => sum + t.rating.overall, 0) / testimonials.length;
    acc[category] = Math.round(average * 10) / 10; // Round to 1 decimal
    return acc;
  }, {} as Record<string, number>);
}

/**
 * Get testimonials with contact sharing permission
 */
export function getContactShareableTestimonials(): ClientTestimonial[] {
  return clientTestimonials.filter(
    testimonial => testimonial.permissions.canShareContact && testimonial.verified
  );
}

export default clientTestimonials;