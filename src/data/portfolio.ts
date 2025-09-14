/**
 * Portfolio Projects Data
 * Static data for showcasing completed client projects
 * Based on PortfolioProject type definitions and German SMB audience
 */

import type { PortfolioProject, PortfolioCategory, ProjectStatus } from '@/types/portfolio';

/**
 * Portfolio Projects Collection
 * Note: These are example projects representing typical German SMB work
 * Replace with actual client projects when available
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'modern-bakery-website',
    title: 'Moderne Bäckerei Website',
    client: 'Bäckerei Müller GmbH',
    problem: 'Die traditionelle Bäckerei hatte keine Online-Präsenz und verlor Kunden an moderne Konkurrenten. Besonders jüngere Zielgruppen konnten nicht erreicht werden, und die Öffnungszeiten und aktuellen Angebote waren schwer zu kommunizieren.',
    solution: 'Entwicklung einer modernen, responsiven Website mit Online-Katalog, Öffnungszeiten-Widget, News-Bereich für tagesaktuelle Angebote und Integration von Google Maps. Design mit warmen Farben und appetitlichen Produktfotos für emotionale Ansprache.',
    outcome: 'Steigerung der Online-Anfragen um 180%, 40% mehr junge Kunden (18-35 Jahre), verbesserte Auffindbarkeit in lokalen Google-Suchen. Durchschnittlich 15% höhere Tagesumsätze durch beworbene Spezialangebote auf der Website.',
    imageUrl: '/images/portfolio/bakery-hero.jpg',
    galleryImages: [
      '/images/portfolio/bakery-products.jpg',
      '/images/portfolio/bakery-mobile.jpg',
      '/images/portfolio/bakery-contact.jpg'
    ],
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Google Maps API', 'Sanity CMS'],
    projectUrl: 'https://baeckerei-mueller-demo.de',
    completionDate: '2024-03-15',
    featured: true,
    displayOrder: 1,
    category: 'corporate-website',
    status: 'showcased',
    duration: 6,
    teamSize: 1,
    description: 'Responsive Unternehmenswebsite für traditionelle Bäckerei mit modernem Design und CMS-Integration.',
    challenges: [
      'Balance zwischen traditionellem Handwerk und modernem Webdesign',
      'Benutzerfreundliche CMS-Integration für nicht-technische Mitarbeiter',
      'Optimierung für lokale SEO und mobile Nutzung'
    ],
    learnings: [
      'Wichtigkeit von emotionaler Ansprache in der Lebensmittelbranche',
      'Lokale SEO-Strategien für kleine Unternehmen',
      'Einfache Content-Verwaltung steigert Website-Aktivität'
    ],
    metrics: [
      {
        name: 'Online-Anfragen',
        value: '+180%',
        change: { value: 180, type: 'increase', period: '3 Monate' }
      },
      {
        name: 'Neue Kundengruppe',
        value: '40%',
        unit: 'junge Kunden'
      },
      {
        name: 'Tagesumsatz',
        value: '+15%',
        change: { value: 15, type: 'increase' }
      }
    ]
  },
  {
    id: 'fitness-studio-booking',
    title: 'Fitnessstudio Buchungsplattform',
    client: 'FitLife Studios Köln',
    problem: 'Komplizierte Kursanmeldung über Telefon führte zu verpassten Buchungen und Kundenfrustration. Keine Übersicht über verfügbare Plätze und Wartelisten. Verwaltungsaufwand für Personal sehr hoch.',
    solution: 'Entwicklung einer Online-Buchungsplattform mit Echtzeit-Verfügbarkeit, automatischen Wartelisten, Mitglieder-Dashboard und mobiler App. Integration in bestehende Verwaltungssoftware und Payment-Gateway.',
    outcome: 'Buchungen stiegen um 95%, Verwaltungsaufwand reduziert um 60%, Kundenzufriedenheit verbessert (4.8/5 Sterne). Neue Einnahmequelle durch Online-Personal-Training-Buchungen generiert.',
    imageUrl: '/images/portfolio/fitness-dashboard.jpg',
    galleryImages: [
      '/images/portfolio/fitness-booking.jpg',
      '/images/portfolio/fitness-mobile-app.jpg',
      '/images/portfolio/fitness-admin.jpg'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'PWA', 'Socket.io'],
    projectUrl: 'https://fitlife-booking-demo.de',
    completionDate: '2024-01-20',
    featured: true,
    displayOrder: 2,
    category: 'web-application',
    status: 'showcased',
    duration: 12,
    teamSize: 1,
    description: 'Vollständige Buchungsplattform mit Echtzeit-Synchronisation und Mobile App für Fitnessstudio.',
    challenges: [
      'Echtzeit-Synchronisation zwischen mehreren Geräten',
      'Komplexe Buchungslogik mit Wartelisten und Stornierungen',
      'Integration in bestehende Kassensysteme'
    ],
    learnings: [
      'WebSocket-Integration für Live-Updates',
      'Benutzerfreundliches Design reduziert Support-Anfragen erheblich',
      'Mobile-First Ansatz essentiell für Fitness-Branche'
    ],
    metrics: [
      {
        name: 'Online-Buchungen',
        value: '+95%',
        change: { value: 95, type: 'increase', period: '6 Monate' }
      },
      {
        name: 'Verwaltungsaufwand',
        value: '-60%',
        change: { value: 60, type: 'decrease' }
      },
      {
        name: 'Kundenzufriedenheit',
        value: 4.8,
        unit: '/ 5 Sterne'
      }
    ]
  },
  {
    id: 'consulting-firm-website',
    title: 'Unternehmensberatung Digital Presence',
    client: 'Schmidt & Partner Consulting',
    problem: 'Veraltete Website ohne klare Positionierung schreckte potenzielle Großkunden ab. Fehlende Case Studies und Referenzen. Keine Lead-Generierung oder Kontaktmöglichkeiten für verschiedene Zielgruppen.',
    solution: 'Neugestaltung mit professionellem Corporate Design, strukturierte Service-Darstellung, ausführliche Case Studies, mehrstufiges Kontaktformular für unterschiedliche Anfragen und SEO-Optimierung für Beratungsthemen.',
    outcome: 'Qualifizierte Leads stiegen um 240%, durchschnittlicher Projektwert um 85% höher, Verweildauer auf Website um 320% gestiegen. Drei neue Großkunden direkt über Website-Kontakt gewonnen.',
    imageUrl: '/images/portfolio/consulting-hero.jpg',
    galleryImages: [
      '/images/portfolio/consulting-services.jpg',
      '/images/portfolio/consulting-case-studies.jpg',
      '/images/portfolio/consulting-contact.jpg'
    ],
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Contentful', 'Google Analytics'],
    projectUrl: 'https://schmidt-partner-demo.de',
    completionDate: '2023-11-10',
    featured: false,
    displayOrder: 3,
    category: 'corporate-website',
    status: 'showcased',
    duration: 8,
    teamSize: 1,
    description: 'Premium Corporate Website für Unternehmensberatung mit Lead-Generation-Fokus.',
    challenges: [
      'Vertrauensaufbau für hochpreisige B2B-Dienstleistungen',
      'Komplexe Services verständlich kommunizieren',
      'SEO für konkurrenzschwere Beratungsthemen'
    ],
    learnings: [
      'Ausführliche Case Studies sind entscheidend für B2B-Vertrauen',
      'Mehrstufige Kontaktformulare qualifizieren Leads besser',
      'Professionelle Fotografie macht großen Unterschied'
    ],
    metrics: [
      {
        name: 'Qualifizierte Leads',
        value: '+240%',
        change: { value: 240, type: 'increase', period: '12 Monate' }
      },
      {
        name: 'Projektwert',
        value: '+85%',
        change: { value: 85, type: 'increase' }
      },
      {
        name: 'Verweildauer',
        value: '+320%',
        change: { value: 320, type: 'increase' }
      }
    ]
  }
];

/**
 * Featured Projects for Homepage
 */
export const featuredProjects = portfolioProjects.filter(project => project.featured);

/**
 * Projects by Category
 */
export const projectsByCategory = portfolioProjects.reduce((acc, project) => {
  const category = project.category || 'custom-solution';
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(project);
  return acc;
}, {} as Record<PortfolioCategory, PortfolioProject[]>);

/**
 * Recent Projects (last 12 months)
 */
export const recentProjects = portfolioProjects
  .filter(project => {
    const completionDate = new Date(project.completionDate);
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    return completionDate >= oneYearAgo;
  })
  .sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime());

/**
 * Technologies Used Across Projects
 */
export const allTechnologies = Array.from(
  new Set(
    portfolioProjects
      .flatMap(project => project.technologies || [])
      .sort()
  )
);

/**
 * Project Statistics
 */
export const portfolioStats = {
  totalProjects: portfolioProjects.length,
  featuredProjects: featuredProjects.length,
  categoriesCount: Object.keys(projectsByCategory).reduce((acc, category) => {
    acc[category as PortfolioCategory] = projectsByCategory[category as PortfolioCategory].length;
    return acc;
  }, {} as Record<PortfolioCategory, number>),
  technologiesCount: allTechnologies.reduce((acc, tech) => {
    acc[tech] = portfolioProjects.filter(project =>
      project.technologies?.includes(tech)
    ).length;
    return acc;
  }, {} as Record<string, number>),
  averageDuration: Math.round(
    portfolioProjects
      .filter(p => p.duration)
      .reduce((sum, p) => sum + (p.duration || 0), 0) /
    portfolioProjects.filter(p => p.duration).length
  ),
  completedThisYear: portfolioProjects.filter(project => {
    const year = new Date(project.completionDate).getFullYear();
    return year === new Date().getFullYear();
  }).length,
  clientsSatisfactionRate: 98 // Based on testimonials and feedback
};

/**
 * Helper Functions
 */

/**
 * Get project by ID
 */
export function getProjectById(id: string): PortfolioProject | undefined {
  return portfolioProjects.find(project => project.id === id);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: PortfolioCategory): PortfolioProject[] {
  return portfolioProjects.filter(project => project.category === category);
}

/**
 * Get related projects (same category, excluding current)
 */
export function getRelatedProjects(currentProjectId: string, limit: number = 2): PortfolioProject[] {
  const currentProject = getProjectById(currentProjectId);
  if (!currentProject) return [];

  return portfolioProjects
    .filter(project =>
      project.id !== currentProjectId &&
      project.category === currentProject.category
    )
    .sort((a, b) => b.displayOrder - a.displayOrder)
    .slice(0, limit);
}

/**
 * Search projects by term
 */
export function searchProjects(searchTerm: string): PortfolioProject[] {
  const term = searchTerm.toLowerCase();
  return portfolioProjects.filter(project =>
    project.title.toLowerCase().includes(term) ||
    project.client.toLowerCase().includes(term) ||
    project.problem.toLowerCase().includes(term) ||
    project.solution.toLowerCase().includes(term) ||
    project.technologies?.some(tech => tech.toLowerCase().includes(term))
  );
}

/**
 * Get projects with specific technology
 */
export function getProjectsByTechnology(technology: string): PortfolioProject[] {
  return portfolioProjects.filter(project =>
    project.technologies?.includes(technology)
  );
}

export default portfolioProjects;