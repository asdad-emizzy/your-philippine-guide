# PinoyLokal Deployment Rules

## Philosophy
Keep Phase 1 deployment simple. Avoid complex backend infrastructure.

## Phase 1 Architecture

```text
User
  ↓
PinoyLokal Web App
  ├── Typed static content
  ├── Location data
  └── Tools
  │
  ├── Cloudflare R2
  │     └── Images / objects
  │
  └── Google Forms / Sheets
        └── Surveys / feedback / requests
```

No application database is required for Phase 1.

## Environment Variables
Never commit secrets. Use environment variables for deployment credentials, R2 credentials where server-side access is required, API keys, analytics IDs, and environment-specific configuration.

Never put secrets in source code or public assets.

## Cloudflare R2
R2 may be used for images/objects.

Recommended prefixes:
- `destinations/`
- `places/`
- `food/`
- `guides/`
- `travel/`
- `culture/`
- `providers/`

Use stable object names where practical and optimize images before upload.

Do not assume R2 is permanently free; verify current Cloudflare pricing and allowances before production budgeting.

## Image Delivery
Prefer CDN-friendly delivery, responsive sizes, WebP/AVIF where practical, compression, descriptive alt text, and stable image references. Avoid serving unnecessarily large originals.

## Google Forms
Use for Phase 1:
- Location requests
- Place requests
- Surveys
- Feedback
- Local knowledge suggestions
- Provider applications

Private provider validation information must not be publicly exposed.

## Build Pipeline
Use repository-defined commands for:

`Install → Lint/Typecheck → Tests → Production Build → Preview/Staging → Production`

Do not invent package scripts without need.

## Preview Validation
Before production, check:
- Homepage
- Existing tools
- Location routes
- Images
- Navigation
- Metadata
- Mobile layout
- Public URL compatibility

## Production Safety
Before route changes:
1. Identify affected URLs.
2. Preserve existing URLs where possible.
3. Add redirects where required.
4. Test representative old/new URLs.

Avoid destructive production changes.

## Rollback
Use the chosen deployment platform's rollback mechanism. Phase 1 should avoid irreversible database migrations because it intentionally has no application database.

## Future Infrastructure
Backend APIs, databases, authentication, provider portals, moderation systems, advanced search, payments, and donation infrastructure belong to later phases unless explicitly approved.
