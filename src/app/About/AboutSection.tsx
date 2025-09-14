'use client';

import {
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  StarIcon,
  HeartIcon,
  LightBulbIcon,
  CodeBracketIcon,
  GlobeEuropeAfricaIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { Container, SectionWrapper, SectionHeading, Card, Grid } from '@/components/Layout';
import { scrollToSection } from '@/lib/navigation';

/**
 * Personal Values Data
 */
const personalValues = [
  {
    icon: HeartIcon,
    title: 'Persönlich & Nahbar',
    description: 'Sie arbeiten direkt mit mir - keine Praktikanten, keine Subunternehmer. Persönliche Betreuung von A bis Z.'
  },
  {
    icon: CheckCircleIcon,
    title: 'Ergebnisorientiert',
    description: 'Nicht nur schön, sondern erfolgreich: Jede Website wird für messbare Geschäftsergebnisse optimiert.'
  },
  {
    icon: LightBulbIcon,
    title: 'Innovativ & Modern',
    description: 'Neueste Technologien und bewährte Methoden für zukunftssichere Lösungen mit optimaler Performance.'
  },
  {
    icon: GlobeEuropeAfricaIcon,
    title: 'Lokal Verwurzelt',
    description: '8+ Jahre Fokus auf deutsche KMU. Ich kenne die Herausforderungen und Bedürfnisse des Mittelstands.'
  }
];

/**
 * Professional Skills Data
 */
const professionalSkills = [
  {
    category: 'Frontend Development',
    skills: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'HTML5/CSS3'],
    expertise: 95
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'Python', 'REST APIs', 'Databases', 'Cloud Services'],
    expertise: 90
  },
  {
    category: 'Design & UX',
    skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'User Research'],
    expertise: 85
  },
  {
    category: 'Business & Strategy',
    skills: ['SEO', 'Analytics', 'Digital Marketing', 'Project Management', 'Client Consulting'],
    expertise: 92
  }
];

/**
 * Career Milestones Data
 */
const careerMilestones = [
  {
    year: '2016',
    title: 'Selbstständigkeit begonnen',
    description: 'Start als Freelancer mit Fokus auf deutsche KMU-Websites'
  },
  {
    year: '2018',
    title: 'Erste Großprojekte',
    description: '10+ erfolgreiche Website-Launches, spezialisiert auf lokale Unternehmen'
  },
  {
    year: '2020',
    title: 'Technologie-Fokus',
    description: 'Vollständige Umstellung auf moderne Tech-Stack (Next.js, TypeScript)'
  },
  {
    year: '2022',
    title: 'Accessibility Expertise',
    description: 'Spezialisierung auf WCAG 2.1 AA und BFSG-konforme Websites'
  },
  {
    year: '2024',
    title: '50+ Erfolgreiche Projekte',
    description: 'Über 50 zufriedene Kunden, 98% Weiterempfehlungsrate'
  }
];

/**
 * About Section Component
 * Personal story, values, skills, and credentials
 */
export default function AboutSection() {
  const handleGetInTouch = () => {
    scrollToSection('contact');
  };

  return (
    <SectionWrapper
      id="about"
      className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800"
      aria-label="Über mich-Bereich"
    >
      <Container>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="Über mich"
            subtitle="Ihr Partner für erfolgreiche Websites"
            centered
          />

          <p className="text-lg text-slate-600 dark:text-slate-300 mt-6 leading-relaxed">
            Hallo! Ich bin Aykut, Webentwickler mit über 8 Jahren Leidenschaft für
            <strong className="text-slate-900 dark:text-white"> deutsche KMU</strong> und ihre
            digitalen Herausforderungen.
          </p>
        </div>

        {/* Personal Introduction */}
        <div className="mb-20">
          <Card className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Personal Story */}
              <div>
                <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-6">
                  <UserIcon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Meine Geschichte
                </h3>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Seit 2016 entwickle ich Websites ausschließlich für deutsche kleine und mittelständische
                    Unternehmen. Was als Freelancer-Tätigkeit neben dem Studium begann, wurde schnell zur
                    Leidenschaft und dann zum Vollzeit-Business.
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Besonders fasziniert mich die Herausforderung, komplexe technische Lösungen so zu
                    entwickeln, dass sie für Unternehmer ohne IT-Hintergrund verständlich und nutzbar sind.
                    <strong className="text-slate-900 dark:text-white"> Jede Website soll nicht nur schön aussehen,
                    sondern messbar mehr Kunden bringen.</strong>
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Heute kann ich stolz sagen: Über 50 zufriedene Kunden, 98% Weiterempfehlungsrate und
                    durchschnittlich +150% mehr Online-Anfragen für meine Kunden sprechen für sich.
                  </p>
                </div>
              </div>

              {/* Stats & Achievements */}
              <div className="space-y-8">

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-3xl font-black text-primary-600 dark:text-primary-400 mb-2">
                      8+
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium text-sm">
                      Jahre Erfahrung
                    </div>
                  </div>

                  <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-3xl font-black text-secondary-600 dark:text-secondary-400 mb-2">
                      50+
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium text-sm">
                      Erfolgreiche Projekte
                    </div>
                  </div>

                  <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-3xl font-black text-green-600 dark:text-green-400 mb-2">
                      98%
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium text-sm">
                      Kundenzufriedenheit
                    </div>
                  </div>

                  <div className="text-3xl font-black text-orange-600 dark:text-orange-400 mb-2 text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-3xl font-black text-orange-600 dark:text-orange-400 mb-2">
                      &lt;4h
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium text-sm">
                      Antwortzeit
                    </div>
                  </div>
                </div>

                {/* Certifications & Credentials */}
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <AcademicCapIcon className="w-5 h-5 mr-2" />
                    Qualifikationen & Zertifizierungen
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      WCAG 2.1 AA Accessibility Specialist
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      BFSG-Konformität & Barrierefreiheit
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Google Analytics & SEO Certified
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      DSGVO-Compliance & Datenschutz
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Personal Values */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Meine Werte & Arbeitsweise
          </h3>

          <Grid cols={1} mdCols={2} lgCols={4} className="gap-8">
            {personalValues.map((value, index) => {
              const IconComponent = value.icon;

              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>

                  <h4 className="font-bold text-slate-900 dark:text-white mb-3">
                    {value.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </Grid>
        </div>

        {/* Professional Skills */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Technische Expertise
          </h3>

          <Grid cols={1} mdCols={2} className="gap-8">
            {professionalSkills.map((skillGroup, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {skillGroup.category}
                  </h4>
                  <div className="text-primary-600 dark:text-primary-400 font-bold">
                    {skillGroup.expertise}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-4">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skillGroup.expertise}%` }}
                  ></div>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </Grid>
        </div>

        {/* Career Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Mein Werdegang
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {careerMilestones.map((milestone, index) => (
                <div key={index} className="flex items-start">

                  {/* Year Badge */}
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-primary-600 text-white font-bold text-sm rounded-full flex items-center justify-center shadow-lg">
                      {milestone.year}
                    </div>
                  </div>

                  {/* Milestone Content */}
                  <Card className="flex-1 p-6">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">
                      {milestone.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal CTA */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-0">

            <HeartIcon className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-6" />

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Lassen Sie uns persönlich sprechen
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
              Ich freue mich darauf, Sie und Ihr Unternehmen kennenzulernen.
              In einem unverbindlichen Gespräch finden wir heraus, wie ich Ihnen helfen kann.
            </p>

            <button
              onClick={handleGetInTouch}
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
            >
              Persönliches Gespräch vereinbaren
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
              30 Minuten • Per Telefon oder Video-Call • 100% kostenlos & unverbindlich
            </p>
          </Card>
        </div>
      </Container>
    </SectionWrapper>
  );
}