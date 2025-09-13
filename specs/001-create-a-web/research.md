# Research Report: Portfolio Website Implementation

## Bold Minimalism Design Language

**Decision**: Implement Bold Minimalism using strong typography hierarchy, strategic bold color accents, and generous whitespace
**Rationale**: Bold minimalism transforms "less is more" into "less is impactful," perfect for a portfolio targeting German SMBs who need clear value communication
**Alternatives considered**: Regular minimalism (too subtle), maximalist design (conflicts with professional target audience)

### Key Implementation Details:
- **Typography Scale**: Use font weights 300 (light), 400 (normal), 600 (semibold), 800 (extrabold), 900 (black)
- **Color Strategy**: Neutral foundation (grays, whites) + one dominant accent color (fiery red #dc2626)
- **Spacing System**: Generous whitespace using 8px grid system (0.25rem base unit)
- **Visual Hierarchy**: High contrast through size, weight, and color variations

## German Accessibility Requirements (BFSG/EAA + WCAG)

**Decision**: Implement WCAG 2.1 AA standards with German-specific requirements (BFSG compliance required by June 28, 2025)
**Rationale**: Legal requirement for commercial websites in Germany; improves usability for all users
**Alternatives considered**: Basic accessibility (insufficient for legal compliance), WCAG AAA (unnecessary complexity for this project)

### Key Implementation Details:
- **Keyboard Navigation**: Full tab sequence, Enter/Space key support, arrow key navigation
- **Screen Reader Support**: Proper ARIA labeling, semantic HTML, skip links
- **Focus Management**: Visible focus indicators (2px solid #005fcc outline)
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Required Elements**: German accessibility statement, contact information for feedback

## URL Fragment Navigation in Next.js

**Decision**: Use Next.js Link component with scroll={false} + custom smooth scrolling implementation
**Rationale**: Built-in browser support + enhanced UX with smooth scrolling and proper focus management
**Alternatives considered**: React Router (unnecessary for single-page), full page navigation (poor UX for one-pager)

### Key Implementation Details:
- **Fragment Format**: /#sectionName using kebab-case IDs
- **Smooth Scrolling**: CSS scroll-behavior: smooth + JavaScript fallback
- **History Management**: Use window.history.replaceState for URL updates
- **Focus Management**: Move focus to section headings for accessibility
- **Deep Linking**: Support direct navigation to sections on page load

## Mailgun API Integration

**Decision**: Use Mailgun API with Next.js API routes for contact form handling
**Rationale**: Reliable email delivery, GDPR compliance features, good documentation for Next.js integration
**Alternatives considered**: SendGrid (more complex setup), native SMTP (less reliable), Resend (newer service)

### Key Implementation Details:
- **Authentication**: API key stored as Cloudflare Workers secret
- **Error Handling**: Try/catch blocks with user-friendly error messages
- **GDPR Compliance**: Separate consent checkboxes, privacy notices
- **Spam Protection**: Cloudflare Turnstile integration recommended
- **Rate Limiting**: Cloudflare Workers built-in rate limiting

## Next.js on Cloudflare Workers Deployment

**Decision**: Use Next.js 14+ with @opennextjs/cloudflare adapter for Workers deployment
**Rationale**: Edge performance, auto-scaling, built-in security, cost-effective for portfolio site
**Alternatives considered**: Vercel (more expensive for commercial use), Netlify (less performance optimization), traditional hosting (more maintenance)

### Key Implementation Details:
- **Compatibility**: Requires nodejs_compat flag and April 2025 compatibility date
- **Bundle Size**: Stay under 3MB limit for free tier, 10MB for paid
- **Environment Variables**: Use Cloudflare secrets for sensitive data
- **Performance**: Edge computing reduces latency for German audience

## Internationalization (i18n) Preparation

**Decision**: Set up Next.js i18n structure without English translations initially
**Rationale**: Future-proofs the application while keeping initial scope focused on German content
**Alternatives considered**: Full bilingual implementation (scope creep), no i18n preparation (technical debt)

### Key Implementation Details:
- **Library**: Use next-intl for type-safe translations
- **File Structure**: Separate locale files, namespace organization
- **URL Structure**: Subdirectory routing (/de/, /en/) for future expansion
- **Fallback**: German as default/fallback language

## Dark/Light Mode Implementation

**Decision**: CSS custom properties + localStorage persistence with system preference detection
**Rationale**: Modern UX expectation, improves accessibility, technically straightforward
**Alternatives considered**: No theme toggle (poor UX), complex theme system (over-engineered)

### Key Implementation Details:
- **Storage**: localStorage for user preference persistence
- **Detection**: matchMedia('prefers-color-scheme: dark') for system preference
- **Implementation**: CSS custom properties for theme colors
- **Accessibility**: Respect prefers-reduced-motion for toggle animations

## Design Token System

**Decision**: Create comprehensive design token structure using CSS custom properties
**Rationale**: Enables easy client customization, maintains design consistency, supports theming
**Alternatives considered**: Hard-coded values (inflexible), complex design system (over-engineered)

### Key Implementation Details:
- **Color Tokens**: Semantic naming (primary, secondary, surface, text)
- **Typography Tokens**: Size scale, weight scale, font families
- **Spacing Tokens**: 8px grid system with consistent scaling
- **Component Tokens**: Button sizes, border radius, shadows
- **Easy Modification**: Single source of truth for design changes