# PinoyLokal AI Skills

## Repository Reconnaissance
Inspect repository structure, package scripts, routes, components, data, and documentation before implementation.

## Domain Modeling
Maintain typed models for:
- Region
- Province
- City/Municipality
- Barangay
- Destination
- Island
- Tourism Area
- Attraction
- Place
- Food
- Guide
- Business
- Service
- Provider
- Tool

## Location Modeling
Maintain two complementary hierarchies:

### Administrative
`Philippines → Region → Province → City/Municipality → Barangay`

### Discovery
`Philippines → Destination → Island → Tourism Area → Attraction`

Allow appropriate cross-references between the two.

## Static Content
Phase 1 should use typed TypeScript data.

Prefer access functions such as:
- `getLocation(slug)`
- `getChildren(slug)`
- `getParent(slug)`
- `getDestination(slug)`
- `getDestinationsByLocation(slug)`
- `searchContent(query)`

Keep content out of UI components.

## Routing
Use stable, SEO-friendly routes such as:
- `/places`
- `/places/[slug]`
- `/food`
- `/food/[slug]`
- `/travel`
- `/travel/[slug]`
- `/how-to`
- `/how-to/[slug]`
- `/local`
- `/local/[slug]`
- `/culture`
- `/culture/[slug]`
- `/providers`
- `/tools`

Do not break existing public URLs.

## Location Pages
A location should be able to connect to:
- Food
- Travel
- Places
- Local
- How-To
- Money
- Culture

Do not fabricate content to fill empty sections.

## SEO
Public pages should have:
- Unique title
- Meta description
- Canonical URL
- Proper headings
- Breadcrumbs where useful
- Stable slugs
- Internal links
- Open Graph metadata where supported

## UI/UX
Use the existing design system. Prioritize mobile usability, accessibility, fast loading, clear navigation, and useful empty states.

## Images
Cloudflare R2 may store images. Use logical prefixes such as:
`destinations/`, `places/`, `food/`, `guides/`, `travel/`, `culture/`, `providers/`

Optimize images for web delivery.

## External Collection
Google Forms/Sheets may collect:
- Surveys
- Feedback
- Location requests
- Place requests
- Content suggestions
- Provider applications

Do not create a submission database in Phase 1.

## Testing
Run relevant:
- Typecheck
- Unit/integration tests
- Build
- Route smoke tests

## Migration
Preserve existing data and URLs. Prefer adapters/incremental migration over rewrites.

## Documentation
Update Markdown documentation when architecture or deployment behavior changes. Document actual implementation, not planned features.
