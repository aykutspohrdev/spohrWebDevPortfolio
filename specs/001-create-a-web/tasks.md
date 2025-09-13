# Tasks: Web Development Portfolio Website for Aykut Spohr

**Input**: Design documents from `/specs/001-create-a-web/`
**Prerequisites**: plan.md, research.md, data-model.md, contracts/, quickstart.md

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → Tech stack: Next.js 14+, TailwindCSS, TypeScript, Mailgun API
   → Structure: Frontend-focused Next.js App Router structure
2. Load design documents:
   → data-model.md: Portfolio Project, Service Offering, Pricing Tier, Client Testimonial, Contact Inquiry, Design Token entities
   → contracts/: contact-form-api.yaml, section-navigation-api.yaml, theme-api.yaml
   → research.md: Bold Minimalism, German accessibility, fragment navigation, Mailgun integration
3. Generate tasks by category:
   → Setup: Next.js project, TailwindCSS, folder structure, dependencies
   → Foundation: Design tokens, theme system, navigation, layout components
   → Content: Static data models, section components
   → API: Contact form, fragment navigation, theme management
   → Integration: Mailgun setup, accessibility enhancements, manual testing
4. Apply task rules:
   → Different components/files = mark [P] for parallel
   → Shared files = sequential (no [P])
   → Foundation before content, content before API integration
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph and parallel execution examples
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
Frontend-focused Next.js App Router structure:
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
├── lib/
├── data/
└── types/
```

## Phase 3.1: Project Setup
- [x] T001 Create Next.js 14+ TypeScript project with App Router in repository root
- [x] T002 Install and configure TailwindCSS with design token structure
- [x] T003 [P] Set up project folder structure per specification in src/
- [x] T004 [P] Create standard .gitignore for Next.js project
- [x] T005 [P] Configure TypeScript with strict mode and path aliases

## Phase 3.2: Foundation & Design System
- [x] T006 [P] Create design token definitions in src/styles/tokens.css
- [x] T007 [P] Implement dark/light theme system with CSS custom properties in src/lib/theme.ts
- [ ] T008 [P] Create theme provider component in src/components/ThemeProvider.tsx
- [ ] T009 [P] Build responsive navigation component in src/components/Navigation.tsx
- [ ] T010 [P] Create fragment navigation utilities in src/lib/navigation.ts
- [ ] T011 [P] Build layout wrapper component in src/components/Layout.tsx

## Phase 3.3: Data Models & Types
- [ ] T012 [P] Portfolio Project type definition in src/types/portfolio.ts
- [ ] T013 [P] Service Offering type definition in src/types/services.ts
- [ ] T014 [P] Pricing Tier type definition in src/types/pricing.ts
- [ ] T015 [P] Client Testimonial type definition in src/types/testimonials.ts
- [ ] T016 [P] Contact Inquiry type definition in src/types/contact.ts
- [ ] T017 [P] Design Token type definition in src/types/design-tokens.ts

## Phase 3.4: Static Data Content
- [ ] T018 [P] Create portfolio projects data in src/data/portfolio.ts
- [ ] T019 [P] Create services offerings data in src/data/services.ts
- [ ] T020 [P] Create pricing tiers data in src/data/pricing.ts
- [ ] T021 [P] Create client testimonials data in src/data/testimonials.ts
- [ ] T022 [P] Create FAQ content data in src/data/faq.ts

## Phase 3.5: Section Components (Content)
- [ ] T023 [P] Hero section component in src/app/Hero/HeroSection.tsx
- [ ] T024 [P] Services section component in src/app/Services/ServicesSection.tsx
- [ ] T025 [P] Services card component in src/app/Services/ServiceCard.tsx
- [ ] T026 [P] Portfolio section component in src/app/Portfolio/PortfolioSection.tsx
- [ ] T027 [P] Case study card component in src/app/Portfolio/CaseStudyCard.tsx
- [ ] T028 [P] Pricing section component in src/app/Pricing/PricingSection.tsx
- [ ] T029 [P] Pricing tier card component in src/app/Pricing/PricingTierCard.tsx
- [ ] T030 [P] Key Results section component in src/app/KeyResults/KeyResultsSection.tsx
- [ ] T031 [P] Testimonial component in src/app/Testimonials/TestimonialCard.tsx
- [ ] T032 [P] Process section component in src/app/Process/ProcessSection.tsx
- [ ] T033 [P] About section component in src/app/About/AboutSection.tsx
- [ ] T034 [P] FAQ section component in src/app/FAQ/FAQSection.tsx

## Phase 3.6: Contact Form & APIs
- [ ] T035 Contact form component with validation in src/app/Contact/ContactForm.tsx
- [ ] T036 Contact section wrapper in src/app/Contact/ContactSection.tsx
- [ ] T037 Mailgun API integration in src/app/api/contact/route.ts
- [ ] T038 Contact form validation utilities in src/lib/validation.ts
- [ ] T039 GDPR privacy consent handling in src/lib/privacy.ts

## Phase 3.7: Footer & Legal Pages
- [ ] T040 [P] Footer component with legal links in src/app/Footer/Footer.tsx
- [ ] T041 [P] Impressum (legal notice) page in src/app/impressum/page.tsx
- [ ] T042 [P] Privacy policy page in src/app/privacy/page.tsx
- [ ] T043 [P] Accessibility statement page in src/app/accessibility/page.tsx

## Phase 3.8: Main Layout & Integration
- [ ] T044 Root layout configuration in src/app/layout.tsx
- [ ] T045 Main page assembly in src/app/page.tsx
- [ ] T046 Fragment navigation integration with scroll management
- [ ] T047 Theme persistence with localStorage integration
- [ ] T048 Accessibility enhancements (focus management, ARIA labels, keyboard navigation)

## Phase 3.9: Performance & Deployment Setup
- [ ] T049 [P] Configure Cloudflare Workers deployment with wrangler.toml
- [ ] T050 [P] Set up environment variables and secrets management
- [ ] T051 [P] Optimize images and assets for Core Web Vitals
- [ ] T052 [P] Add reduced motion support and accessibility optimizations
- [ ] T053 Configure next.config.js for Cloudflare Workers deployment

## Phase 3.10: Manual Testing & Validation
- [ ] T054 Execute quickstart.md user journey scenario 1: Hero Section Experience
- [ ] T055 Execute quickstart.md user journey scenario 2: Services Discovery
- [ ] T056 Execute quickstart.md user journey scenario 3: Portfolio Case Studies Review
- [ ] T057 Execute quickstart.md user journey scenario 4: Pricing Tier Comparison
- [ ] T058 Execute quickstart.md user journey scenario 5: Contact Form Submission
- [ ] T059 Execute quickstart.md user journey scenario 6: Fragment Navigation Testing
- [ ] T060 Execute quickstart.md user journey scenario 7: Dark/Light Mode Toggle
- [ ] T061 Execute quickstart.md user journey scenario 8: Mobile Responsiveness
- [ ] T062 Execute quickstart.md user journey scenario 9: Accessibility Compliance
- [ ] T063 Execute quickstart.md user journey scenario 10: Performance Validation

## Dependencies
**Setup Dependencies:**
- T001 (Next.js project) blocks T002-T005
- T002 (TailwindCSS) blocks T006 (design tokens)

**Foundation Dependencies:**
- T006 (design tokens) blocks all component tasks (T023-T043)
- T007-T008 (theme system) blocks T044, T047
- T009-T010 (navigation) blocks T044, T046

**Data Dependencies:**
- T012-T017 (type definitions) block T018-T022 (data files)
- T018-T022 (data files) block corresponding component tasks

**Component Dependencies:**
- T035 (contact form) depends on T016 (contact types), T038 (validation), T039 (privacy)
- T037 (API route) depends on T035 (form component), T016 (types)
- T044 (layout) depends on T007-T011 (foundation components)
- T045 (main page) depends on all section components (T023-T043)

**Integration Dependencies:**
- T046 (fragment navigation) depends on T010, T044, T045
- T047 (theme persistence) depends on T007-T008, T044
- T048 (accessibility) depends on T044-T047
- T049-T053 (deployment) depends on T044-T048
- T054-T063 (testing) depends on T049-T053 (complete implementation)

## Parallel Execution Examples

### Setup Phase (can run together after T001):
```bash
# T002-T005 after Next.js project creation
Task: "Install and configure TailwindCSS with design token structure"
Task: "Set up project folder structure per specification in src/"
Task: "Create standard .gitignore for Next.js project"
Task: "Configure TypeScript with strict mode and path aliases"
```

### Foundation Phase (can run together after T002):
```bash
# T006-T011 after TailwindCSS setup
Task: "Create design token definitions in src/styles/tokens.css"
Task: "Implement dark/light theme system with CSS custom properties in src/lib/theme.ts"
Task: "Create theme provider component in src/components/ThemeProvider.tsx"
Task: "Build responsive navigation component in src/components/Navigation.tsx"
Task: "Create fragment navigation utilities in src/lib/navigation.ts"
Task: "Build layout wrapper component in src/components/Layout.tsx"
```

### Type Definitions (can run together):
```bash
# T012-T017 all parallel
Task: "Portfolio Project type definition in src/types/portfolio.ts"
Task: "Service Offering type definition in src/types/services.ts"
Task: "Pricing Tier type definition in src/types/pricing.ts"
Task: "Client Testimonial type definition in src/types/testimonials.ts"
Task: "Contact Inquiry type definition in src/types/contact.ts"
Task: "Design Token type definition in src/types/design-tokens.ts"
```

### Data Files (can run together after types):
```bash
# T018-T022 after type definitions
Task: "Create portfolio projects data in src/data/portfolio.ts"
Task: "Create services offerings data in src/data/services.ts"
Task: "Create pricing tiers data in src/data/pricing.ts"
Task: "Create client testimonials data in src/data/testimonials.ts"
Task: "Create FAQ content data in src/data/faq.ts"
```

### Section Components (can run together after data):
```bash
# Most T023-T034 components can be parallel (different files)
Task: "Hero section component in src/app/Hero/HeroSection.tsx"
Task: "Services section component in src/app/Services/ServicesSection.tsx"
Task: "Services card component in src/app/Services/ServiceCard.tsx"
Task: "Portfolio section component in src/app/Portfolio/PortfolioSection.tsx"
Task: "Case study card component in src/app/Portfolio/CaseStudyCard.tsx"
# ... and so on for independent components
```

## Notes
- [P] tasks = different files, no dependencies between them
- Manual testing tasks (T054-T063) must be executed sequentially to validate complete user journeys
- No automated testing framework per project requirements - validation through manual quickstart scenarios
- All components implement German accessibility standards (BFSG/EAA + WCAG 2.1 AA)
- Contact form includes GDPR compliance with separate consent mechanisms
- Design follows Bold Minimalism principles with strong typography and strategic color usage

## Task Generation Rules Applied

1. **From Contracts**:
   - contact-form-api.yaml → T035-T039 (contact form implementation)
   - section-navigation-api.yaml → T009-T010, T046 (navigation system)
   - theme-api.yaml → T007-T008, T047 (theme management)

2. **From Data Model**:
   - Each entity → corresponding type definition task [P] (T012-T017)
   - Data files for static content → [P] tasks (T018-T022)

3. **From Quickstart Scenarios**:
   - Each user journey → validation task (T054-T063)
   - Manual testing approach due to no automated testing requirement

4. **Ordering Applied**:
   - Setup → Foundation → Data → Components → Integration → Testing
   - Dependencies enforced through blocking relationships

## Validation Checklist
*All items confirmed for this task list*

- [x] All contracts have corresponding implementation tasks
- [x] All entities have type definition and data tasks
- [x] Foundation tasks come before component implementation
- [x] Parallel tasks are truly independent (different files)
- [x] Each task specifies exact file path
- [x] No task modifies same file as another [P] task
- [x] Manual testing covers all quickstart scenarios