# PinoyLokal AI Engineering Rules

## Purpose
These rules govern AI-assisted development of PinoyLokal, a Philippine local discovery and knowledge platform.

Core areas: Places, Food, Travel, Local businesses/services, How-To, Money/tools, Culture, Providers, and community/local knowledge.

## Core Rules
1. Preserve the existing application. Inspect before changing; avoid unnecessary rewrites.
2. Build incrementally. Phase 1 currently focuses on the location/discovery foundation.
3. No premature database. Phase 1 uses typed static data; Google Forms/Sheets can handle surveys, feedback, requests, and provider intake.
4. Separate domain data from presentation. Do not put large datasets inside React components.
5. Treat location as first-class data.
6. Keep administrative geography separate from discovery geography.
7. Never invent factual local information, businesses, providers, attractions, food claims, or cultural claims.
8. Protect privacy. Private provider validation information must never be public.
9. Provider publication requires manual approval and explicit consent.
10. Identity validation, consent, and skill/credential verification are separate concepts.
11. Basic discovery must work without login.
12. AI is not the source of truth. Build structured, verified local knowledge first.
13. Preserve SEO and existing calculator/tool URLs.
14. Existing tools/calculators are an important acquisition channel; do not remove them casually.
15. Prefer small, testable changes and avoid unnecessary dependencies/infrastructure.
16. Never claim completion without actual verification.

## Phase 1 Scope
Build:
- Major Philippine locations
- Administrative and discovery location models
- Location routes/pages
- Reusable content/data access
- Static search foundation
- SEO foundation
- Existing tools integration

Do not add yet:
- Database
- Authentication
- Payments
- Booking
- Messaging
- Reviews
- Full provider marketplace
- AI backend
- Complex search infrastructure
- NGO/donation infrastructure

## Geography
Administrative:
`Philippines → Region → Province → City/Municipality → Barangay`

Discovery:
`Philippines → Destination → Island → Tourism Area → Attraction`

Do not collapse these into one generic location type.

## Coding Discipline
Before editing:
1. Inspect relevant code.
2. Find existing implementations.
3. Reuse existing components.
4. Make the smallest appropriate change.
5. Run relevant tests/typecheck/build.
6. Report exactly what was verified.

## Definition of Done
A change is complete only when it matches scope, preserves existing behavior, passes applicable checks, introduces no unnecessary infrastructure, and considers SEO/accessibility for public pages.
