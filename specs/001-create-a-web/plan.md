# Implementation Plan: Web Development Portfolio Website for Aykut Spohr

**Branch**: `001-create-a-web` | **Date**: 2025-09-13 | **Spec**: [/specs/001-create-a-web/spec.md](/home/aspo/pers_projects/spohrWebDevPortfolio/specs/001-create-a-web/spec.md)
**Input**: Feature specification from `/specs/001-create-a-web/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
4. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
5. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, or `GEMINI.md` for Gemini CLI).
6. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
7. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
8. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
Bold Minimalism portfolio website for German web developer targeting SMBs. Single-page application with fragment navigation, accessibility compliance (BFSG/EAA + WCAG AA), dark/light mode, GDPR-compliant contact form, and design token system for easy customization.

## Technical Context
**Language/Version**: TypeScript with Next.js (latest stable version)
**Primary Dependencies**: Next.js, TailwindCSS, Mailgun API integration, i18next for i18n preparation
**Storage**: Static content management, contact form submissions via Mailgun API, localStorage for theme preferences
**Testing**: No unit/E2E testing required per specifications
**Target Platform**: Web browsers, deployed on Cloudflare Workers via Wrangler
**Project Type**: web - determines source structure
**Performance Goals**: Core Web Vitals compliance (LCP < 2.5s, CLS < 0.1), WCAG AA accessibility standards
**Constraints**: German legal compliance (BFSG/EAA), GDPR compliance, reduced-motion support, keyboard/screen reader navigation
**Scale/Scope**: Single-page portfolio with 9 sections, 3 case studies, 3 pricing tiers, responsive design

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Simplicity**: ✅ PASS
- Projects: 1 (Next.js frontend application)
- Using framework directly? Yes (Next.js App Router, TailwindCSS)
- Single data model? Yes (entities defined in data-model.md)
- Avoiding patterns? Yes (no unnecessary abstractions)

**Architecture**: ⚠️ MODIFIED (Frontend-focused project)
- EVERY feature as library? N/A (Frontend component-based architecture)
- Libraries listed: Next.js, TailwindCSS, Mailgun client
- CLI per library: N/A (Web application, not CLI tool)
- Library docs: Component documentation in JSDoc format

**Testing (NON-NEGOTIABLE)**: ❌ WAIVED (Per project requirements)
- RED-GREEN-Refactor cycle enforced? WAIVED - No unit/E2E testing required
- Git commits show tests before implementation? WAIVED
- Order: Contract→Integration→E2E→Unit strictly followed? WAIVED
- Real dependencies used? N/A
- Integration tests for: N/A
- Manual testing via quickstart.md user scenarios

**Observability**: ✅ PASS
- Structured logging included? Yes (Next.js built-in + Cloudflare Workers)
- Frontend logs → backend? Yes (contact form error handling)
- Error context sufficient? Yes (user-friendly error messages)

**Versioning**: ✅ PASS
- Version number assigned? 1.0.0
- BUILD increments on every change? Yes
- Breaking changes handled? N/A (initial release)

## Project Structure

### Documentation (this feature)
```
specs/[###-feature]/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
# Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure]
```

**Structure Decision**: Option 2: Web application structure (frontend-focused Next.js app)

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:
   ```
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: ✅ research.md completed with Bold Minimalism, German accessibility, Next.js fragment navigation, and Mailgun integration research

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Generate contract tests** from contracts:
   - One test file per endpoint
   - Assert request/response schemas
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:
   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `/scripts/bash/update-agent-context.sh claude` for your AI assistant
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: ✅ data-model.md, contracts/ (contact-form-api.yaml, section-navigation-api.yaml, theme-api.yaml), quickstart.md, CLAUDE.md updated

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `/templates/tasks-template.md` as base
- Generate setup tasks: Next.js project, TailwindCSS, folder structure, .gitignore
- Generate component creation tasks from functional requirements (FR-003 to FR-025)
- Each section → component creation task [P] (Hero, Services, Portfolio, etc.)
- Each API → implementation task (contact form, theme management, navigation)
- Integration tasks: Mailgun setup, Cloudflare Workers deployment, accessibility testing

**Ordering Strategy**:
- Setup first: Project initialization, dependencies, folder structure
- Foundation: Design tokens, theme system, layout components
- Content sections: Hero → Services → Portfolio → Pricing → Contact (parallel where possible)
- Integration: API routes, theme persistence, fragment navigation
- Polish: Accessibility enhancements, performance optimization, manual testing

**Task Categories**:
1. **Setup (1-5)**: Project initialization, dependencies, configuration files
2. **Foundation (6-15)**: Design system, theme, layout, navigation components
3. **Content Sections (16-25)**: Individual section components with content [P]
4. **Integration (26-35)**: APIs, form handling, accessibility features
5. **Deployment (36-40)**: Cloudflare Workers setup, performance optimization

**Estimated Output**: 35-40 numbered, prioritized tasks in tasks.md with clear dependencies marked

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Constitution deviations documented and justified*

| Deviation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| No testing implementation | Project requirements explicitly exclude unit/E2E testing | Manual testing via quickstart.md provides sufficient validation for portfolio site |
| Frontend-only architecture | Portfolio website doesn't need backend services beyond API routes | Full-stack separation would add unnecessary complexity for static content site |


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS (with documented deviations)
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [x] Complexity deviations documented

---
*Based on Constitution v2.1.1 - See `/memory/constitution.md`*