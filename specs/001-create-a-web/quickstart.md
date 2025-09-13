# Portfolio Website Quickstart Guide

## Overview
This guide validates the core functionality of Aykut Spohr's portfolio website through user scenarios and acceptance tests.

## Prerequisites
- Website deployed and accessible
- All sections properly configured with content
- Contact form integrated with Mailgun API
- Theme toggle functionality implemented

## Core User Journey Tests

### 1. Hero Section Experience
**Scenario**: First-time visitor evaluating services

**Steps**:
1. Navigate to website homepage
2. Verify hero section displays immediately above the fold
3. Check that value proposition is clear and in German
4. Click primary CTA button
5. Verify smooth scroll to target section

**Expected Results**:
- Hero section loads within 2.5 seconds (LCP)
- Bold headline communicates web development services
- Supporting text explains value for German SMBs
- CTA is prominent and accessible (min 44x44px)
- Smooth scroll to referenced section works

### 2. Services Discovery
**Scenario**: Business owner exploring service offerings

**Steps**:
1. Navigate to services section via menu or scroll
2. Review 3-5 service cards displayed
3. Verify each card shows title and business benefits
4. Check that icons and layout are visually consistent
5. Test keyboard navigation through service cards

**Expected Results**:
- Services section clearly displays 3-5 distinct offerings
- Each service has clear business benefit statements
- Visual hierarchy guides attention to key information
- Keyboard navigation works with visible focus states
- Content is in German with business-focused language

### 3. Portfolio Case Studies Review
**Scenario**: Potential client evaluating work quality

**Steps**:
1. Navigate to portfolio section
2. Review 3 featured case studies
3. Check each case study has problem-solution-outcome format
4. Verify project visuals display properly
5. Test any interactive elements (image galleries, links)

**Expected Results**:
- 3 case studies clearly presented with consistent format
- Each study shows client name, problem, solution, outcome
- High-quality project visuals enhance credibility
- Content demonstrates value delivered to previous clients
- No broken images or missing content

### 4. Pricing Tier Comparison
**Scenario**: SMB owner evaluating service packages

**Steps**:
1. Navigate to pricing section
2. Compare three tiers: Landing, Standard, Custom/Contact
3. Review feature lists for each tier
4. Check pricing information where provided
5. Test CTA buttons for each tier

**Expected Results**:
- Three distinct pricing tiers clearly differentiated
- Feature lists help with service comparison
- Landing and Standard tiers show pricing guidance
- Custom tier encourages consultation contact
- CTAs lead to appropriate next steps

### 5. Contact Form Submission (GDPR Compliant)
**Scenario**: Interested client requesting quote

**Steps**:
1. Navigate to contact section
2. Fill out contact form with test data:
   - Name: "Max Mustermann"
   - Email: "test@example.com"
   - Company: "Test GmbH"
   - Project Type: "Standard"
   - Message: "Ich interessiere mich für eine professionelle Website für mein Unternehmen..."
3. Check privacy consent checkbox
4. Leave marketing consent unchecked
5. Submit form
6. Verify success message appears

**Expected Results**:
- Form includes all required fields with German labels
- Privacy consent checkbox is separate and required
- Marketing consent is optional and unchecked by default
- Form validation provides clear error messages
- Success message confirms submission and sets expectations
- Email is sent via Mailgun API

### 6. Fragment Navigation Testing
**Scenario**: User sharing specific section links

**Steps**:
1. Use navigation menu to visit different sections
2. Verify URL updates with fragment (#services, #portfolio, etc.)
3. Copy and paste fragment URL in new browser tab
4. Test browser back/forward buttons
5. Check that direct links to sections work

**Expected Results**:
- Navigation updates URL with proper fragments
- Fragment URLs work when shared or bookmarked
- Page scrolls to correct section on fragment URL load
- Browser history works correctly with fragments
- Focus moves to section heading for accessibility

### 7. Dark/Light Mode Toggle
**Scenario**: User preferring dark interface

**Steps**:
1. Locate theme toggle control
2. Switch from light to dark mode
3. Verify all sections update with dark theme
4. Refresh page and check theme persistence
5. Switch back to light mode
6. Test system preference detection

**Expected Results**:
- Theme toggle is accessible and clearly labeled
- All content updates consistently with theme change
- User preference persists across page refreshes
- System preference is respected on first visit
- No content becomes unreadable in either theme

### 8. Mobile Responsiveness
**Scenario**: Mobile user browsing portfolio

**Steps**:
1. View site on mobile device or responsive view
2. Test navigation menu functionality
3. Verify content reflows properly
4. Check that touch targets are adequate (44x44px minimum)
5. Test form completion on mobile
6. Verify images and text remain readable

**Expected Results**:
- Site is fully functional on mobile devices
- Navigation adapts to mobile with hamburger menu or equivalent
- Content remains readable without horizontal scrolling
- Touch targets meet accessibility guidelines
- Forms are easy to complete on small screens
- Performance remains good on mobile connections

### 9. Accessibility Compliance
**Scenario**: Screen reader user navigating site

**Steps**:
1. Navigate site using only keyboard (Tab/Shift+Tab)
2. Verify all interactive elements are reachable
3. Check focus indicators are visible
4. Test with screen reader (if available)
5. Verify heading hierarchy is logical
6. Check color contrast meets WCAG AA

**Expected Results**:
- All functionality available via keyboard navigation
- Focus indicators clearly show current element
- Screen reader can navigate and understand content
- Heading structure follows logical hierarchy (h1 > h2 > h3)
- Color contrast ratios meet WCAG 2.1 AA standards
- Form errors are announced to screen readers

### 10. Performance Validation
**Scenario**: User on slower connection

**Steps**:
1. Test site loading with throttled connection
2. Verify Core Web Vitals metrics
3. Check that critical content loads first
4. Test image loading and optimization
5. Verify no layout shift occurs during loading

**Expected Results**:
- LCP (Largest Contentful Paint) < 2.5 seconds
- CLS (Cumulative Layout Shift) < 0.1
- FID (First Input Delay) < 100ms
- Images load progressively without blocking content
- Layout remains stable during loading process

## Success Criteria

All tests above must pass for the website to be considered ready for launch:

- ✅ All navigation flows work smoothly
- ✅ Contact form successfully sends emails via Mailgun
- ✅ Theme switching works with persistence
- ✅ Fragment navigation enables section sharing
- ✅ Site meets German accessibility requirements (BFSG/EAA)
- ✅ GDPR compliance implemented in contact form
- ✅ Performance meets Core Web Vitals targets
- ✅ Mobile experience is fully functional
- ✅ Content effectively communicates value to SMB audience
- ✅ Design reflects Bold Minimalism principles

## Troubleshooting Common Issues

**Contact form not submitting**: Check Mailgun API key configuration and rate limiting settings

**Theme not persisting**: Verify localStorage functionality and browser compatibility

**Fragments not working**: Check section ID naming conventions and JavaScript navigation handlers

**Accessibility issues**: Run automated tests with axe-core and manual keyboard navigation

**Performance problems**: Optimize images, check bundle size, and verify Cloudflare Workers configuration