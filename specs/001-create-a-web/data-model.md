# Data Model: Portfolio Website

## Core Entities

### Portfolio Project
Represents a completed client project showcased in the portfolio section.

**Attributes:**
- `id`: Unique identifier (string)
- `title`: Project name (string, required)
- `client`: Client company name (string, required)
- `problem`: Description of business problem addressed (string, required)
- `solution`: Technical/strategic approach taken (string, required)
- `outcome`: Measurable results achieved (string, required)
- `imageUrl`: Primary project visual (string, required)
- `galleryImages`: Additional project images (array of strings, optional)
- `technologies`: Tech stack used (array of strings, optional)
- `projectUrl`: Live project URL (string, optional)
- `completionDate`: Project completion date (ISO date string, required)
- `featured`: Whether to highlight in main portfolio (boolean, default: false)

**Validation Rules:**
- Title: 5-80 characters
- Problem/Solution/Outcome: 50-500 characters each
- All required fields must be present for display
- ImageUrl must be valid URL format
- CompletionDate must be valid ISO date

### Service Offering
Represents a web development service offered to clients.

**Attributes:**
- `id`: Unique identifier (string)
- `title`: Service name (string, required)
- `description`: Brief service overview (string, required)
- `benefits`: Business value statements (array of strings, required)
- `features`: Technical features included (array of strings, required)
- `icon`: Service icon identifier (string, required)
- `displayOrder`: Sort order for display (number, required)

**Validation Rules:**
- Title: 5-50 characters
- Description: 20-200 characters
- Benefits: 3-5 items, 10-100 characters each
- Features: 3-8 items, 5-80 characters each

### Pricing Tier
Represents a service package with defined features and pricing.

**Attributes:**
- `id`: Unique identifier (string)
- `name`: Tier name ("Landing", "Standard", "Custom")
- `description`: Brief tier overview (string, required)
- `features`: Included features list (array of strings, required)
- `startingPrice`: Base price or range (string, optional for Custom tier)
- `isCustom`: Whether tier requires consultation (boolean, required)
- `ctaText`: Call-to-action button text (string, required)
- `highlighted`: Whether to emphasize tier (boolean, default: false)
- `displayOrder`: Sort order for display (number, required)

**Validation Rules:**
- Name: Must be one of allowed values
- Description: 20-150 characters
- Features: 5-12 items, 5-100 characters each
- StartingPrice: Required for non-custom tiers
- CtaText: 5-30 characters

### Client Testimonial
Represents feedback from previous clients for trust building.

**Attributes:**
- `id`: Unique identifier (string)
- `quote`: Client testimonial text (string, required)
- `clientName`: Person providing testimonial (string, required)
- `company`: Client's company name (string, required)
- `position`: Client's job title (string, optional)
- `projectTitle`: Related project name (string, optional)
- `clientPhoto`: Client headshot URL (string, optional)
- `companyLogo`: Company logo URL (string, optional)
- `featured`: Whether to highlight testimonial (boolean, default: false)

**Validation Rules:**
- Quote: 50-300 characters
- ClientName: 2-50 characters
- Company: 2-100 characters
- Must have either clientPhoto or companyLogo

### Contact Inquiry
Represents a potential client's contact form submission.

**Attributes:**
- `id`: Unique identifier (string)
- `name`: Contact person name (string, required)
- `email`: Contact email address (string, required)
- `company`: Company name (string, optional)
- `phone`: Phone number (string, optional)
- `projectType`: Type of project interest (string, required)
- `budget`: Estimated project budget (string, optional)
- `timeline`: Desired project timeline (string, optional)
- `message`: Additional project details (string, required)
- `privacyConsent`: GDPR privacy consent given (boolean, required)
- `marketingConsent`: Marketing email consent (boolean, optional)
- `submissionDate`: When form was submitted (ISO date string, required)
- `status`: Inquiry processing status (string, default: "new")

**Validation Rules:**
- Name: 2-50 characters
- Email: Valid email format
- ProjectType: Must be from predefined options
- Message: 20-1000 characters
- PrivacyConsent: Must be true
- Email validation with regex pattern

### Design Token
Represents design system elements for easy customization.

**Attributes:**
- `category`: Token category ("color", "typography", "spacing", "shadow")
- `name`: Token semantic name (string, required)
- `value`: CSS value (string, required)
- `description`: Usage guidelines (string, optional)
- `darkModeValue`: Alternative value for dark theme (string, optional)

**Categories:**
- **Color**: Primary, secondary, neutral, surface, text colors
- **Typography**: Font sizes, weights, line heights, font families
- **Spacing**: Margin, padding, gap values using 8px grid
- **Shadow**: Box shadows for elevation and depth

## Relationships

### Project ↔ Testimonial
- One project may have multiple testimonials
- One testimonial references one specific project (optional)

### Pricing Tier ↔ Service Offering
- Many-to-many relationship via features
- Services can appear in multiple tiers
- Tiers include multiple services

### Contact Inquiry ↔ Pricing Tier
- Contact inquiry may reference interested pricing tier
- Used for lead qualification and response

## State Transitions

### Contact Inquiry Status Flow
```
new → reviewed → contacted → qualified → converted → closed
```

### Project Development Status
```
planning → in-progress → completed → showcased
```

## Data Persistence Strategy

**Static Content** (Portfolio Projects, Services, Pricing, Testimonials):
- Stored as JSON/TypeScript files in `/src/data/`
- Version controlled with code
- Updated through development process

**Dynamic Content** (Contact Inquiries):
- Submitted via Mailgun API
- No local database required
- Email notifications for new inquiries

**User Preferences** (Theme, Language):
- Stored in browser localStorage
- Synchronized with system preferences
- Non-persistent, user-specific data

**Design Tokens**:
- Defined as CSS custom properties
- Organized in theme configuration files
- Easily customizable via CSS variable updates