# Claude Code Context: Aykut Spohr Web Development Portfolio

## Project Overview
Bold Minimalism portfolio website targeting German SMBs. Single-page application with fragment navigation, accessibility compliance (BFSG/EAA + WCAG AA), and GDPR-compliant contact form.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: TailwindCSS with design tokens
- **Deployment**: Cloudflare Workers via Wrangler
- **Email**: Mailgun API integration
- **i18n**: next-intl (prepared for DE/EN, German primary)
- **Accessibility**: WCAG 2.1 AA compliance

## Architecture Decisions

### Design Principles
- **Bold Minimalism**: Strong typography (weights 300-900), strategic accent colors, generous whitespace
- **Accessibility First**: BFSG/EAA compliance, keyboard navigation, screen reader support
- **Performance**: Core Web Vitals optimization, edge deployment

### Key Features
- **Fragment Navigation**: /#sectionName URLs with smooth scrolling and focus management
- **Theme System**: Dark/light mode with localStorage persistence
- **Contact Form**: GDPR-compliant with Mailgun integration and privacy notices
- **Design Tokens**: CSS custom properties for easy client customization

## Project Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── Hero/
│   ├── Services/
│   ├── Portfolio/
│   ├── Pricing/
│   ├── Contact/
│   └── Footer/
├── components/
│   ├── UI/
│   ├── Layout/
│   └── Animations/
├── lib/
│   ├── i18n/
│   ├── api/
│   └── utils/
└── types/
```

## Current Development Phase
**Phase 1 Complete**: Research, data model, API contracts, quickstart guide
**Next Phase**: Task generation via /tasks command

## Key Constraints
- **German Legal**: BFSG accessibility compliance by June 2025
- **GDPR**: Explicit consent mechanisms, privacy notices
- **Performance**: LCP < 2.5s, CLS < 0.1
- **No Testing**: Skip unit/E2E tests per requirements
- **Bold Minimalism**: Strong visual hierarchy, limited color palette

## Recent Changes
1. **2025-09-13**: Initial specification and planning phase completed
2. **Research Phase**: Bold Minimalism principles, German accessibility law, Next.js fragment navigation
3. **Design Phase**: Data models, API contracts for contact/navigation/theme management

## Development Notes
- Use semantic HTML with proper ARIA labeling
- Implement keyboard navigation for all interactive elements
- Maintain 4.5:1 color contrast minimum (WCAG AA)
- Support prefers-reduced-motion for animations
- Store theme preference in localStorage with system preference fallback

## Contact Form Requirements
- **Required Fields**: name, email, projectType, message, privacyConsent
- **Optional Fields**: company, phone, budget, timeline, marketingConsent
- **Validation**: Client-side + server-side with clear German error messages
- **Privacy**: Separate consent checkboxes, unchecked by default for marketing

## Navigation Sections
1. Hero (hero)
2. Services (services)
3. Key Results/Trust (key-results)
4. Portfolio (portfolio)
5. Pricing (pricing)
6. Process (process)
7. Testimonials (testimonials)
8. About (about)
9. FAQ (faq)
10. Contact (contact)