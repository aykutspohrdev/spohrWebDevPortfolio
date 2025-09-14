/**
 * FAQ (Frequently Asked Questions) Data
 * Static data for common questions and comprehensive answers
 * Based on FAQ type definitions and German SMB audience
 */

import type {
  FAQItem,
  FAQCategory,
  FAQItemWithCategory
} from '@/types/testimonials'; // FAQ types are defined in testimonials.ts

/**
 * FAQ Items Collection
 * Comprehensive answers to common questions from German SMB clients
 */
export const faqItems: FAQItem[] = [
  // PROCESS & TIMELINE
  {
    id: 'faq-process-timeline',
    question: 'Wie läuft ein typisches Website-Projekt ab und wie lange dauert es?',
    answer: 'Ein Website-Projekt gliedert sich in 5 Hauptphasen: **1. Analyse & Konzeption (1-2 Wochen)** - Wir besprechen Ihre Ziele, analysieren Ihre Zielgruppe und erstellen ein detailliertes Konzept. **2. Design & Prototyping (2-3 Wochen)** - Entwicklung des visuellen Designs und interaktiver Prototypen zur Abstimmung. **3. Entwicklung (3-6 Wochen)** - Programmierung der Website mit modernster Technologie und laufenden Abstimmungen. **4. Testing & Optimierung (1 Woche)** - Umfassende Tests auf allen Geräten und Browsern, Performance-Optimierung. **5. Launch & Schulung (1 Woche)** - Go-Live mit Überwachung und Einschulung Ihres Teams. Die Gesamtdauer beträgt je nach Projektumfang 2-4 Monate.',
    category: 'process',
    featured: true,
    displayOrder: 1,
    tags: ['timeline', 'process', 'phases'],
    relatedFAQs: ['faq-communication', 'faq-revisions'],
    lastUpdated: '2024-09-14'
  },
  {
    id: 'faq-communication',
    question: 'Wie bleiben wir während des Projekts in Kontakt und auf dem Laufenden?',
    answer: 'Transparente Kommunikation ist mir sehr wichtig. Wir nutzen **wöchentliche Status-Updates per E-Mail**, ein **Online-Projektportal** wo Sie den Fortschritt jederzeit einsehen können, und **regelmäßige Video-Calls** (alle 2 Wochen oder bei Bedarf). Sie erhalten Zugang zu Entwicklungsversionen der Website für direktes Feedback. Für dringende Fragen bin ich per WhatsApp oder E-Mail erreichbar - meist antworte ich innerhalb von 4 Stunden während der Geschäftszeiten.',
    category: 'process',
    featured: true,
    displayOrder: 2,
    tags: ['communication', 'updates', 'contact'],
    relatedFAQs: ['faq-process-timeline', 'faq-support'],
    lastUpdated: '2024-09-14'
  },
  {
    id: 'faq-revisions',
    question: 'Wie viele Änderungen sind im Projektpreis inkludiert?',
    answer: 'Jedes Paket beinhaltet **unbegrenzte kleinere Anpassungen** während der Entwicklung (Texte, Farben, Bilder). Für größere strukturelle Änderungen sind **3 Revisions-Runden** inkludiert. Eine Revision kann z.B. eine neue Seitenstruktur oder größere Design-Anpassungen umfassen. Zusätzliche Revisionen werden transparent mit €150/Stunde abgerechnet. Wichtig: Je früher wir Feedback erhalten, desto effizienter können wir Änderungen umsetzen.',
    category: 'process',
    featured: false,
    displayOrder: 8,
    tags: ['revisions', 'changes', 'pricing'],
    relatedFAQs: ['faq-pricing', 'faq-communication'],
    lastUpdated: '2024-09-14'
  },

  // PRICING & SERVICES
  {
    id: 'faq-pricing',
    question: 'Wie setzen sich die Preise zusammen und gibt es versteckte Kosten?',
    answer: 'Meine Preise sind vollkommen transparent. **Landing Pages** starten bei €1.999 und beinhalten Design, Entwicklung, 6 Monate Hosting und Support. **Standard Websites** kosten €4.999-€8.999 je nach Funktionsumfang. **Individuelle Lösungen** werden nach Aufwand kalkuliert (€150/Stunde). Alle Preise beinhalten: responsive Design, DSGVO-Konformität, Suchmaschinenoptimierung, SSL-Zertifikat und 6 Monate kostenlosen Support. Die einzigen optionalen Kosten sind Domain (€15/Jahr) und erweiterte Wartungsverträge.',
    category: 'pricing',
    featured: true,
    displayOrder: 3,
    tags: ['pricing', 'costs', 'packages'],
    relatedFAQs: ['faq-maintenance', 'faq-hosting'],
    lastUpdated: '2024-09-14'
  },
  {
    id: 'faq-payment',
    question: 'Wie sind die Zahlungskonditionen und welche Zahlungsmethoden akzeptieren Sie?',
    answer: 'Die Zahlung erfolgt in **3 Raten**: 40% Anzahlung bei Projektstart, 40% nach Design-Freigabe, 20% nach Go-Live. Ich akzeptiere **Banküberweisung, PayPal und Kreditkarte**. Für Unternehmen biete ich auch **Rechnung mit 14 Tagen Zahlungsziel**. Bei größeren Projekten (>€15.000) sind individuelle Zahlungspläne möglich. Alle Rechnungen sind DSGVO-konform und Sie erhalten ordnungsgemäße Belege für Ihre Buchhaltung.',
    category: 'pricing',
    featured: false,
    displayOrder: 9,
    tags: ['payment', 'invoicing', 'terms'],
    relatedFAQs: ['faq-pricing', 'faq-contract'],
    lastUpdated: '2024-09-14'
  },
  {
    id: 'faq-maintenance',
    question: 'Wie funktioniert die Wartung meiner Website nach dem Launch?',
    answer: 'Nach dem Launch erhalten Sie **6 Monate kostenlosen Support** inkl. kleinerer Anpassungen, Sicherheits-Updates und technischer Hilfe. Danach biete ich **Wartungsverträge** ab €99/Monat an: monatliche Sicherheits-Updates, Performance-Monitoring, Content-Pflege, SEO-Berichte und Backup-Service. Sie können auch **stundenweise Support** (€125/Stunde) buchen oder Ihre Website selbst verwalten - ich schule Ihr Team gerne im Umgang mit dem CMS.',
    category: 'pricing',
    featured: false,
    displayOrder: 10,
    tags: ['maintenance', 'support', 'updates'],
    relatedFAQs: ['faq-cms-training', 'faq-hosting'],
    lastUpdated: '2024-09-14'
  },

  // TECHNICAL
  {
    id: 'faq-technology',
    question: 'Welche Technologien verwenden Sie und warum?',
    answer: 'Ich setze auf **moderne, bewährte Technologien**: **Next.js mit TypeScript** für maximale Performance und Sicherheit, **TailwindCSS** für responsives Design, **Headless CMS** (Sanity/Contentful) für einfache Content-Verwaltung. Für E-Commerce nutze ich **Shopify oder WooCommerce**. Alle Websites werden auf **Cloudflare** gehostet für beste Geschwindigkeit weltweit. Diese Technologien gewährleisten: schnelle Ladezeiten, Suchmaschinenfreundlichkeit, mobile Optimierung und zukunftssichere Wartung.',
    category: 'technical',
    featured: true,
    displayOrder: 4,
    tags: ['technology', 'performance', 'modern-stack'],
    relatedFAQs: ['faq-seo', 'faq-mobile'],
    lastUpdated: '2024-09-14'
  },
  {
    id: 'faq-cms-training',
    question: 'Kann ich meine Website selbst bearbeiten und wie schwer ist das?',
    answer: 'Ja, definitiv! Ich verwende **benutzerfreundliche Content Management Systeme**, die auch technische Laien schnell erlernen können. Sie können Texte, Bilder, Blog-Artikel und einfache Inhalte selbstständig bearbeiten. **Jedes Projekt beinhaltet**: 2-stündige Schulung für Ihr Team, schriftliche Anleitungen mit Screenshots, Video-Tutorials für häufige Aufgaben. Die meisten Kunden sind nach der Schulung vollkommen selbstständig. Für komplexere Änderungen stehe ich natürlich weiterhin zur Verfügung.',
    category: 'technical',
    featured: false,
    displayOrder: 11,
    tags: ['cms', 'training', 'self-editing'],
    relatedFAQs: ['faq-maintenance', 'faq-support'],
    lastUpdated: '2024-09-14'
  },
  {
    id: 'faq-mobile',
    question: 'Ist meine Website auf Smartphones und Tablets optimiert?',
    answer: '**Selbstverständlich!** Alle meine Websites sind **Mobile-First** entwickelt, das bedeutet sie sind primär für Smartphones optimiert und funktionieren perfekt auf allen Bildschirmgrößen. Da über 70% der Nutzer mobil surfen, ist dies essentiell. Ihre Website wird auf **iPhone, Android, Tablet und Desktop** getestet und optimiert. Das beinhaltet: Touch-optimierte Bedienung, schnelle Ladezeiten auf mobilen Daten, lesbare Schriften und gut erreichbare Buttons.',
    category: 'technical',
    featured: false,
    displayOrder: 12,
    tags: ['mobile', 'responsive', 'optimization'],
    relatedFAQs: ['faq-seo', 'faq-technology'],
    lastUpdated: '2024-09-14'
  },
  {
    id: 'faq-hosting',
    question: 'Wo wird meine Website gehostet und wie sicher sind meine Daten?',
    answer: 'Ihre Website wird auf **Cloudflare\'s globalem Netzwerk** gehostet - einem der sichersten und schnellsten Services weltweit. **Sicherheitsfeatures**: SSL-Verschlüsselung, DDoS-Schutz, tägliche Backups, Malware-Scanning. **Performance**: Ihre Website lädt dank CDN weltweit in unter 2 Sekunden. **DSGVO-Konformität**: Server in der EU, vollständige Datenschutz-Compliance. 6 Monate Hosting sind kostenlos inkludiert, danach €29/Monat. Alternativ kann ich Ihnen bei der Einrichtung auf Ihrem eigenen Hosting helfen.',
    category: 'technical',
    featured: false,
    displayOrder: 13,
    tags: ['hosting', 'security', 'performance'],
    relatedFAQs: ['faq-gdpr', 'faq-technology'],
    lastUpdated: '2024-09-14'
  },

  // LEGAL & COMPLIANCE
  {
    id: 'faq-gdpr',
    question: 'Ist meine Website DSGVO-konform und rechtlich abgesichert?',
    answer: '**Ja, DSGVO-Konformität ist Standard** bei allen meinen Projekten. Das beinhaltet: **Cookie-Banner** mit Opt-in, **Datenschutzerklärung** nach DSGVO, **Impressum** rechtssicher, **SSL-Verschlüsselung**, datenschutzfreundliche Analytics (ohne Cookies), DSGVO-konforme Kontaktformulare mit expliziter Einwilligung. Ich arbeite mit spezialisierten Rechtsanwälten zusammen und halte mich über aktuelle Rechtsprechung auf dem Laufenden. Ihre Website ist rechtlich auf der sicheren Seite.',
    category: 'legal',
    featured: true,
    displayOrder: 5,
    tags: ['gdpr', 'legal', 'compliance'],
    relatedFAQs: ['faq-hosting', 'faq-accessibility'],
    lastUpdated: '2024-09-14'
  },
  {
    id: 'faq-accessibility',
    question: 'Ist meine Website barrierefrei und BFSG-konform?',
    answer: '**Ja, Barrierefreiheit ist mir sehr wichtig.** Alle Websites entsprechen den **WCAG 2.1 AA Standards** und werden BFSG-konform entwickelt (wichtig für Unternehmen ab Juni 2025). Das bedeutet: **Screenreader-Kompatibilität**, ausreichende Farbkontraste, Keyboard-Navigation, alternative Texte für Bilder, verständliche Sprache und Struktur. Ich teste mit echten Barrierefreiheits-Tools und hole Feedback von Nutzern mit Behinderungen ein. Barrierefreie Websites haben auch **SEO-Vorteile** und erreichen mehr Nutzer.',
    category: 'legal',
    featured: false,
    displayOrder: 14,
    tags: ['accessibility', 'bfsg', 'inclusive'],
    relatedFAQs: ['faq-seo', 'faq-gdpr'],
    lastUpdated: '2024-09-14'
  },

  // SEO & MARKETING
  {
    id: 'faq-seo',
    question: 'Wird meine Website bei Google gefunden und wie funktioniert SEO?',
    answer: '**SEO (Suchmaschinenoptimierung) ist in allen Paketen inkludiert.** Das beinhaltet: **technische SEO** (schnelle Ladezeiten, mobile Optimierung, sauberer Code), **OnPage-SEO** (optimierte Titel, Beschreibungen, Überschriften), **lokale SEO** für regionale Unternehmen, **Google My Business** Optimierung. Nach dem Launch: Google Search Console Einrichtung, monatliche SEO-Berichte, Keyword-Beratung. **Realistische Erwartung**: Erste Ergebnisse nach 3-6 Monaten, signifikante Verbesserungen nach 6-12 Monaten. SEO ist ein langfristiger Prozess, aber die Investition lohnt sich.',
    category: 'marketing',
    featured: true,
    displayOrder: 6,
    tags: ['seo', 'google', 'visibility'],
    relatedFAQs: ['faq-analytics', 'faq-technology'],
    lastUpdated: '2024-09-14'
  },
  {
    id: 'faq-analytics',
    question: 'Kann ich sehen, wie viele Besucher meine Website hat und woher sie kommen?',
    answer: '**Ja, Sie erhalten detaillierte Einblicke** in Ihre Website-Performance. Ich richte **datenschutzfreundliche Analytics** ein (ohne Cookies, DSGVO-konform) mit: Besucherzahlen, Seitenaufrufe, Verweildauer, Herkunftsquellen (Google, Social Media, direkt), beliebteste Inhalte, mobile vs. Desktop Nutzung. **Monatliche Berichte** mit Interpretation der Daten und Optimierungsempfehlungen. Zusätzlich: **Google Search Console** für SEO-Daten und **Kontaktformular-Analytics** für Lead-Tracking. Alle Daten werden verständlich aufbereitet.',
    category: 'marketing',
    featured: false,
    displayOrder: 15,
    tags: ['analytics', 'tracking', 'reports'],
    relatedFAQs: ['faq-seo', 'faq-gdpr'],
    lastUpdated: '2024-09-14'
  },

  // GENERAL
  {
    id: 'faq-experience',
    question: 'Warum sollte ich Sie für mein Website-Projekt wählen?',
    answer: '**8+ Jahre Erfahrung** ausschließlich mit deutschen KMU, **über 50 erfolgreiche Projekte** in verschiedenen Branchen. **Meine Stärken**: persönliche Betreuung (keine Agentur-Anonymität), **lokales Verständnis** für deutsche Geschäftskunden, moderne Technologie für beste Performance, **transparente Preise** ohne Überraschungen, DSGVO & BFSG Expertise. **Messbare Ergebnisse**: durchschnittlich +150% mehr Website-Anfragen, +85% bessere Google-Rankings. **100% meiner Kunden** würden mich weiterempfehlen. Sie arbeiten direkt mit mir - keine Praktikanten oder Subunternehmer.',
    category: 'general',
    featured: true,
    displayOrder: 7,
    tags: ['experience', 'results', 'personal'],
    relatedFAQs: ['faq-references', 'faq-support'],
    lastUpdated: '2024-09-14'
  },
  {
    id: 'faq-support',
    question: 'Was passiert, wenn ich nach dem Launch Probleme oder Fragen habe?',
    answer: '**Sie sind nicht allein!** Nach dem Launch erhalten Sie: **6 Monate kostenlosen Support** für technische Fragen, Bugfixes und kleinere Anpassungen, **E-Mail Support** mit Antwort binnen 24h (werktags binnen 4h), **Telefon/Video-Support** nach Vereinbarung, **Notfall-Hotline** für kritische Probleme. Danach: Wartungsvertrag oder stundenweise Betreuung. **Die meisten Probleme** löse ich remote binnen weniger Stunden. Mein Ziel: Sie sollen sich auf Ihr Geschäft konzentrieren können, nicht auf technische Details.',
    category: 'general',
    featured: false,
    displayOrder: 16,
    tags: ['support', 'help', 'after-launch'],
    relatedFAQs: ['faq-maintenance', 'faq-cms-training'],
    lastUpdated: '2024-09-14'
  },
  {
    id: 'faq-references',
    question: 'Kann ich mit bisherigen Kunden sprechen oder Referenzen erhalten?',
    answer: '**Selbstverständlich!** Ich habe eine Auswahl zufriedener Kunden, die gerne über ihre Erfahrungen sprechen. **Portfolio** mit konkreten Zahlen und Ergebnissen auf meiner Website, **schriftliche Testimonials** von über 30 Kunden, **Referenz-Gespräche** auf Anfrage möglich (mit Einverständnis der Kunden), **Case Studies** mit detaillierten Projekt-Insights. Besonders gerne vermittele ich Kontakt zu Kunden aus Ihrer Branche. **100% meiner Projekte** sind erfolgreich abgeschlossen - überzeugen Sie sich selbst!',
    category: 'general',
    featured: false,
    displayOrder: 17,
    tags: ['references', 'testimonials', 'portfolio'],
    relatedFAQs: ['faq-experience', 'faq-case-studies'],
    lastUpdated: '2024-09-14'
  },
  {
    id: 'faq-contract',
    question: 'Wie ist der Vertrag gestaltet und kann ich jederzeit kündigen?',
    answer: '**Faire, transparente Verträge** ohne Kleingedrucktes: **Werkvertrag** für die Website-Entwicklung mit festgelegten Leistungen und Preisen, **keine Mindestlaufzeit** für das Projekt selbst, **klare Meilensteine** und Abnahmekriterien, **Kündigungsrecht** bei groben Verstößen meinerseits, **Ihre Inhalte und Domain** bleiben immer Ihr Eigentum. **Nach Projektende**: keine Bindung, Sie können Hosting und Wartung frei wählen. Wartungsverträge sind **monatlich kündbar**. Ich arbeite nur mit Kunden, die zu 100% zufrieden sind.',
    category: 'general',
    featured: false,
    displayOrder: 18,
    tags: ['contract', 'terms', 'flexibility'],
    relatedFAQs: ['faq-payment', 'faq-ownership'],
    lastUpdated: '2024-09-14'
  },
  {
    id: 'faq-ownership',
    question: 'Gehört mir die Website nach der Fertigstellung oder haben Sie Rechte daran?',
    answer: '**Die Website gehört 100% Ihnen!** Nach der finalen Zahlung erhalten Sie: **vollständige Eigentumsrechte** an Design, Code und Inhalten, **Quellcode-Zugang** für Entwickler Ihrer Wahl, **Domain-Kontrolle** (Sie sind Owner), **Content-Rechte** an allen erstellten Inhalten, **keine laufenden Lizenzgebühren**. Ich behalte nur das **Portfolio-Recht** (mit Ihrer Zustimmung) und verwende gerne **Testimonials**. Sie können jederzeit zu einem anderen Entwickler oder einer Agentur wechseln - Ihre Website ist nicht an mich gebunden.',
    category: 'general',
    featured: false,
    displayOrder: 19,
    tags: ['ownership', 'rights', 'independence'],
    relatedFAQs: ['faq-contract', 'faq-hosting'],
    lastUpdated: '2024-09-14'
  }
];

/**
 * FAQ Categories with German Labels
 */
export const FAQ_CATEGORIES = {
  'process': 'Ablauf & Kommunikation',
  'pricing': 'Preise & Konditionen',
  'technical': 'Technik & Funktionen',
  'legal': 'Recht & Datenschutz',
  'marketing': 'SEO & Marketing',
  'general': 'Allgemeine Fragen'
} as const;

/**
 * Featured FAQs for Homepage
 */
export const featuredFAQs = faqItems.filter(faq => faq.featured);

/**
 * FAQs by Category
 */
export const faqsByCategory = faqItems.reduce((acc, faq) => {
  const category = faq.category || 'general';
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(faq);
  return acc;
}, {} as Record<FAQCategory, FAQItem[]>);

/**
 * FAQ Items with Category Labels
 */
export const faqItemsWithCategories: FAQItemWithCategory[] = faqItems.map(faq => ({
  ...faq,
  categoryLabel: FAQ_CATEGORIES[faq.category as keyof typeof FAQ_CATEGORIES] || FAQ_CATEGORIES.general
}));

/**
 * FAQ Statistics
 */
export const faqStats = {
  totalFAQs: faqItems.length,
  featuredCount: featuredFAQs.length,
  categoriesCount: Object.keys(faqsByCategory).length,
  categoryDistribution: Object.keys(faqsByCategory).reduce((acc, category) => {
    acc[category as FAQCategory] = faqsByCategory[category as FAQCategory].length;
    return acc;
  }, {} as Record<FAQCategory, number>),
  averageAnswerLength: Math.round(
    faqItems.reduce((sum, faq) => sum + faq.answer.length, 0) / faqItems.length
  ),
  lastUpdated: Math.max(
    ...faqItems.map(faq => new Date(faq.lastUpdated).getTime())
  )
};

/**
 * Helper Functions
 */

/**
 * Get FAQ by ID
 */
export function getFAQById(id: string): FAQItem | undefined {
  return faqItems.find(faq => faq.id === id);
}

/**
 * Get FAQs by category
 */
export function getFAQsByCategory(category: FAQCategory): FAQItem[] {
  return faqItems.filter(faq => faq.category === category);
}

/**
 * Search FAQs by question or answer content
 */
export function searchFAQs(searchTerm: string): FAQItem[] {
  const term = searchTerm.toLowerCase();
  return faqItems.filter(faq =>
    faq.question.toLowerCase().includes(term) ||
    faq.answer.toLowerCase().includes(term) ||
    faq.tags?.some(tag => tag.toLowerCase().includes(term))
  );
}

/**
 * Get related FAQs for a specific FAQ
 */
export function getRelatedFAQs(faqId: string, limit: number = 3): FAQItem[] {
  const currentFAQ = getFAQById(faqId);
  if (!currentFAQ || !currentFAQ.relatedFAQs) return [];

  return currentFAQ.relatedFAQs
    .map(id => getFAQById(id))
    .filter((faq): faq is FAQItem => faq !== undefined)
    .slice(0, limit);
}

/**
 * Get most popular FAQs (featured + high display order)
 */
export function getPopularFAQs(limit: number = 6): FAQItem[] {
  return faqItems
    .filter(faq => faq.featured)
    .sort((a, b) => (a.displayOrder || 999) - (b.displayOrder || 999))
    .slice(0, limit);
}

/**
 * Get FAQ quick answers (shortened answers for previews)
 */
export function getFAQQuickAnswers(maxLength: number = 150): Array<FAQItem & { quickAnswer: string }> {
  return faqItems.map(faq => ({
    ...faq,
    quickAnswer: faq.answer.length > maxLength
      ? faq.answer.substring(0, maxLength).replace(/\*\*/g, '').trim() + '...'
      : faq.answer.replace(/\*\*/g, '')
  }));
}

/**
 * Get FAQs for specific audience/use case
 */
export function getFAQsForContext(context: 'homepage' | 'pricing' | 'process' | 'technical'): FAQItem[] {
  const contextMap = {
    homepage: ['faq-process-timeline', 'faq-pricing', 'faq-experience', 'faq-gdpr'],
    pricing: ['faq-pricing', 'faq-payment', 'faq-maintenance', 'faq-revisions'],
    process: ['faq-process-timeline', 'faq-communication', 'faq-revisions', 'faq-support'],
    technical: ['faq-technology', 'faq-cms-training', 'faq-mobile', 'faq-hosting']
  };

  return contextMap[context]
    .map(id => getFAQById(id))
    .filter((faq): faq is FAQItem => faq !== undefined);
}

/**
 * Format FAQ answer for display (handle markdown-style formatting)
 */
export function formatFAQAnswer(answer: string): string {
  return answer
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
    .replace(/\n\n/g, '</p><p>') // Paragraphs
    .replace(/^(.+)$/, '<p>$1</p>'); // Wrap in paragraph
}

export default faqItems;