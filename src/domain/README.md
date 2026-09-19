# PinoyLokal Domain Layer (Phase 1A)

Typed domain foundation only. No database, backend, auth, search service, or new dependency.

```text
src/domain/
  types/        administrative.ts, discovery.ts, content.ts, common.ts
  data/         static typed data (administrative.ts, discovery.ts, content.ts)
  repository.ts access functions (getLocation, getChildren, getParent, getDestination, ...)
  index.ts      public entry point for the app
```

## Geography

Two distinct hierarchies, never collapsed:

- Administrative: `Philippines → Region → Province → City/Municipality → Barangay`
- Discovery: `Philippines → Destination → Island → Tourism Area → Attraction`

Content entities (Place, Food, Business, Service, Provider, Guide, Tool) link to geography through
`LocationLinks`, which keeps administrative and discovery references separate.

## Rules

- Import from `@/domain` in app code; do not import `@/domain/data/*` directly outside the domain layer.
- Data is static and synchronous today. Swapping `repository.ts` to a database/API later should not
  require UI restructuring.
- No fabricated local information. Empty arrays mean "not yet collected", not "none exists".
- `src/lib/destinations.ts` remains the source of the homepage hero content; `data/discovery.ts`
  adapts it into the domain model.
- Provider publication requires manual approval and explicit consent (`consentToPublish`). Private
  validation data is intentionally not part of the public `Provider` type.
