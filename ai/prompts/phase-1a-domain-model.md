# PinoyLokal 2.0 — Phase 1A: Domain Model Validation & Completion

## Objective

Validate and complete the existing Phase 1A domain/data-model implementation.

This is NOT a greenfield implementation.

The repository already contains a substantial `src/domain/` implementation. Do not recreate, rewrite, or replace it unnecessarily.

The goal is to bring the existing implementation into alignment with the PinoyLokal 2.0 architecture while preserving existing application behavior.

---

## Required Reading

Before making changes, read:

1. `AGENTS.md`
2. `AI_RULES.md`
3. `SKILLS.md`
4. `FRAMEWORKS.md`
5. `DEPLOYMENT.md`
6. This file
7. Relevant existing project documentation

The repository code is the implementation source of truth.

---

## Operating Rule

Follow:

> Inspect → Compare → Plan → Implement → Test → Review → Report

The repository has already been inspected at the architecture level.

Do not spend implementation effort rediscovering unrelated application behavior.

---

# 1. Current Phase 1A Architecture

The repository currently contains a domain structure under:

```text
src/domain/
├── README.md
├── index.ts
├── repository.ts
├── data/
│   ├── administrative.ts
│   ├── content.ts
│   ├── discovery.ts
│   └── index.ts
└── types/
    ├── common.ts
    ├── administrative.ts
    ├── discovery.ts
    ├── content.ts
     └── index.ts
```

Phase 1A work must validate and complete this implementation in place.

Do not replace this structure with a different architecture.

---

# 2. Domain Model Requirements

Validate that the current domain model expresses and preserves:

1. Separate domain types for:
    - Administrative geography
    - Discovery geography
    - Content entities
    - Shared primitives
2. Typed static data modules aligned with those types.
3. Repository/data-access functions that expose domain data without leaking implementation details.
4. Public domain entry points that application code can import from.

The repository already implements most of this. Your task is to verify and close small gaps, not redesign.

---

# 3. Administrative Geography

Administrative hierarchy must remain explicit and distinct:

`Philippines → Region → Province → City/Municipality → Barangay`

Requirements:

1. Distinct types for each administrative level or a clearly discriminated union.
2. Parent-child relationships are represented via stable slug references.
3. Regions, provinces, and city/municipality relationships must remain fact-based.
4. Barangay entries are optional in Phase 1A and may be empty when not yet collected.

Do not fabricate missing administrative facts.

---

# 4. Discovery Geography

Discovery hierarchy must remain separate from administrative geography:

`Philippines → Destination → Island → Tourism Area → Attraction`

Requirements:

1. Discovery entities use their own types.
2. Discovery entities may link to administrative slugs for cross-reference.
3. Do not collapse discovery entities into administrative entity kinds.
4. Empty arrays for uncollected discovery sub-levels are acceptable in Phase 1A.

---

# 5. Content Domain

The content domain should support typed entities aligned with project rules:

- Place
- Food
- Business
- Service
- Provider
- Guide
- Tool

Requirements:

1. Content entities must anchor to geography through explicit location links.
2. Provider publication fields must reflect manual publication and explicit consent.
3. Private validation/identity information must not be part of public types.
4. Tools must preserve stable path semantics for public access.

---

# 6. Stable Identity and Slug Rules

All domain entities must follow stable identifier rules:

1. Slugs are durable identifiers and must not be casually changed.
2. Slugs are used for linking relationships and route compatibility.
3. Cross-entity references must use slugs, not mutable display labels.
4. Do not introduce random/generated IDs for Phase 1A.

---

# 7. Location Relationships

Validate relationship behavior in the existing repository layer:

1. Direct parent retrieval for administrative entities.
2. Direct child retrieval for administrative entities.
3. Ancestor-chain derivation.
4. Discovery-to-administrative linkage for destination compatibility.
5. Content-to-location linking that keeps administrative/discovery references separate.

Relationship logic should remain predictable, synchronous, and static in Phase 1A.

---

# 8. Repository and Data-Access Requirements

The repository/data-access layer must:

1. Expose read access through stable, typed functions.
2. Avoid exposing raw data modules directly to application UI code.
3. Support both listing and lookup patterns where already established.
4. Keep implementation synchronous for static Phase 1A data.
5. Provide static search access consistent with Phase 1A boundaries.

If small API coverage gaps exist versus existing domain types/data, fill them minimally.

---

# 9. Existing Destination Compatibility

Phase 1A must preserve compatibility with already shipped destination content.

Requirements:

1. Existing destination source content remains valid and consumable.
2. Discovery destination records can adapt from existing hero/source data.
3. Existing behavior in pages relying on destination data must not be broken.

Do not rewrite destination source libraries unless absolutely required for Phase 1A acceptance.

---

# 10. Static Data Rules

Phase 1A data is intentionally static.

Rules:

1. Use typed in-repo data modules.
2. No DB clients, ORM models, migration systems, or external search services.
3. Empty arrays are valid placeholders when facts are not yet collected.
4. Do not synthesize unknown local facts.

---

# 11. Location Coverage Boundaries

Phase 1A coverage is foundational, not exhaustive.

Requirements:

1. Major locations needed by existing content should be represented.
2. Coverage can be partial where data is not yet verified.
3. Do not claim nationwide completeness.
4. Do not invent barangay coverage.

---

# 12. Discovery Data Boundaries

Phase 1A does not require complete discovery-depth coverage.

Acceptable state:

1. Destinations are populated from existing verified source content.
2. Island/TourismArea/Attraction collections may remain empty if not yet verified.
3. Cross-links to administrative slugs should be included only when factual.

---

# 13. Tools Boundaries

Tools are part of the content domain and acquisition strategy.

Requirements:

1. Preserve existing tool path compatibility.
2. Do not remove tools from the model.
3. Do not introduce backend calculator infrastructure in Phase 1A.
4. Keep tool metadata typed and static.

---

# 14. Search Boundaries

Phase 1A search remains simple and static.

Requirements:

1. Case-insensitive in-memory matching is acceptable.
2. Search should operate on currently modeled entities exposed by repository functions.
3. No Elasticsearch/Algolia/OpenSearch/Meilisearch or similar infrastructure.
4. No backend search API required.

---

# 15. Framework Rules

Respect existing repository framework choices:

1. TypeScript strict typing and discriminated unions where appropriate.
2. Existing React/TanStack/Vite architecture remains intact.
3. No additional UI framework, routing system, or backend framework introduction.
4. Follow repository lint/type/build workflows for validation.

---

# 16. Implementation Constraints

Hard constraints for this task:

1. Target only Phase 1A domain-model validation/completion.
2. Do not expand scope into Phase 1B+.
3. Do not add database, backend, authentication, payments, booking, messaging, or advanced search.
4. Do not rewrite domain architecture.
5. Make minimal, coherent changes only where needed.

---

# 17. Specific Review Items

Review the existing domain implementation against this specification, focusing on:

1. Type coverage parity:
    - Are all modeled content/domain entity categories represented in repository access where expected?
2. Relationship integrity:
    - Parent/child/ancestor behavior.
    - Destination-by-location behavior.
3. Export boundaries:
    - Domain entry points export intended public surface.
4. Static search coverage:
    - Search includes intended in-scope entity categories.
5. Compatibility safety:
    - No breakage to existing destination/tool integration.

---

# 18. Validation Requirements

Run applicable validation checks for the repository state after your changes.

At minimum (as available in the repo):

1. Lint checks
2. Type checking
3. Production build

Rules:

1. Do not claim checks passed unless actually run.
2. If a global check fails due to pre-existing unrelated issues, report this explicitly and separate it from your scoped changes.

---

# 19. Scope Exclusions

Explicitly out of scope for this Phase 1A task:

1. New UI components or route redesign.
2. Route migrations and SEO rewrites beyond domain-model needs.
3. Database schema/migrations.
4. Auth/session/identity systems.
5. API servers for content.
6. Full-text search infrastructure.
7. Provider workflow automation.
8. Any speculative abstraction not required by acceptance criteria.

---

# 20. Acceptance Criteria

Phase 1A task is complete when all are true:

1. Existing domain architecture is preserved.
2. Domain types/data/repository are aligned with this specification.
3. Any identified Phase 1A gaps are resolved with minimal edits.
4. No Phase 1B+ scope creep is introduced.
5. Validation checks are executed and accurately reported.
6. Existing application behavior remains intact.

---

# 21. Final Report Requirements

Provide a concise completion report with:

1. What changed
2. Files changed
3. Validation performed (commands + pass/fail)
4. Known limitations or pre-existing issues encountered
5. Confirmation that Phase 1A scope was preserved

If anything blocked completion, state exactly what and why.

---

## Instruction to Copilot (Execution Prompt)

Use this exact operating intent:

"Implement the Phase 1A domain-model validation and completion task.

Read and follow:

- AGENTS.md
- AI_RULES.md
- SKILLS.md
- FRAMEWORKS.md
- DEPLOYMENT.md
- ai/prompts/phase-1a-domain-model.md

The repository has already been architecturally reviewed. Treat the Phase 1A prompt as the implementation specification.

Make only the targeted changes required to satisfy its acceptance criteria.

Do not rewrite the existing domain architecture.
Do not expand the scope into Phase 1B or later phases.
Do not add a database, backend, authentication, search infrastructure, or new UI.

Run the applicable validation checks and provide the required final report."