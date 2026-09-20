# PinoyLokal 2.0 — Phase 1B: Location Hierarchy

## Objective

Implement the initial Philippine location and discovery-geography foundation for PinoyLokal 2.0.

Phase 1A established the domain model.

Phase 1B populates that model with a structured, curated initial set of Philippine locations and discovery destinations.

The objective is NOT to create a complete Philippine geographic database.

The objective is to establish a strong initial location foundation that PinoyLokal can progressively expand.

---

# 1. Required Reading

Before implementation, read:

1. `AGENTS.md`
2. `AI_RULES.md`
3. `SKILLS.md`
4. `FRAMEWORKS.md`
5. `DEPLOYMENT.md`
6. `ai/prompts/phase-1a-domain-model.md`
7. This file
8. Existing files under `src/domain/`

The existing repository is the implementation source of truth.

Do not replace the Phase 1A domain architecture.

---

# 2. Operating Model

Follow:

> Inspect → Compare → Plan → Implement → Validate → Report

Phase 1A is already established.

Phase 1B should primarily populate and validate the existing location model.

Do not redesign the domain model unless a concrete Phase 1B requirement exposes an actual modeling defect.

---

# 3. Geographic Architecture

PinoyLokal has TWO geographic systems.

They must remain separate.

## 3A. Administrative Geography

```text
Philippines
└── Region
    └── Province
        └── City / Municipality
            └── Barangay
```

## 3B. Discovery Geography

```text
Philippines
└── Destination
    └── Island
        └── Tourism Area
            └── Attraction
```

Rules:

1. Administrative and discovery entities must remain distinct.
2. Do not merge both systems into a generic single location type.
3. Discovery records may cross-reference administrative slugs.

---

# 4. Cross-Reference Rules

Cross-reference behavior for Phase 1B:

1. Discovery entities may reference administrative slugs where factually correct.
2. Destination-to-administrative references should support existing repository behavior (for example, destination lookup by location ancestry).
3. Cross-references must be additive and non-destructive.
4. Never use free-text labels as relationship keys; use slugs.

---

# 5. Stable Identity and Slug Rules

All entities added in Phase 1B must follow stable identity rules:

1. Slugs are durable identifiers.
2. Slugs must be unique within each entity set.
3. Existing slugs must not be renamed unless absolutely required to fix a defect.
4. Route-facing or integration-facing slugs must remain backward compatible.

---

# 6. Administrative Coverage

Phase 1B must expand administrative data beyond minimum Phase 1A coverage while keeping scope curated.

Requirements:

1. Ensure core region-level representation across Luzon, Visayas, and Mindanao.
2. Add representative provinces needed for current and near-term discovery coverage.
3. Add major city/municipality entries where they are required by existing destinations or clear priority coverage.
4. Keep coverage intentionally partial where verification is incomplete.

---

# 7. Initial Regional Coverage

Initial regional coverage should include a practical spread of major Philippine regions for discoverability.

Guidelines:

1. Keep a balanced baseline across island groups.
2. Prefer locations that support current destination and tourism context.
3. Avoid over-expansion that attempts nationwide completeness in this phase.

---

# 8. Priority Locations

Prioritize:

1. Locations already referenced by destination content.
2. Major cities and municipalities relevant to national user discovery.
3. Provinces and regions needed for coherent hierarchy traversal.

Do not fabricate fine-grained locality coverage.

---

# 9. Duplicate-Location Rules

To prevent data ambiguity:

1. Do not create duplicate slugs for the same administrative or discovery entity.
2. Do not model the same place under conflicting kinds without explicit justification.
3. Where naming collisions are possible, use clear, stable slug conventions.

---

# 10. Barangay Boundaries

Barangay-level data in Phase 1B remains constrained.

Rules:

1. Barangay coverage is optional and can remain empty.
2. Do not invent barangay entries.
3. Add barangays only when verified and clearly required.

---

# 11. Discovery Destinations

Phase 1B must preserve and build around existing destination data.

Requirements:

1. Existing destination hero data remains the canonical source for current destination set.
2. Destination records in the domain layer remain compatible with existing homepage behavior.
3. Existing destination slugs and semantics must be preserved.

---

# 12. Island Model

Phase 1B introduces initial island-level discovery records.

Rules:

1. Island records should represent meaningful discovery geography, not exhaustive island catalogs.
2. Islands may link to parent destination and administrative slugs where appropriate.
3. Keep entries factual and minimal.

---

# 13. Tourism-Area Model

Phase 1B introduces initial tourism-area records.

Rules:

1. Tourism areas should represent known travel clusters or recognized areas.
2. A tourism area may reference a destination and/or island parent.
3. Do not create speculative tourism areas without clear basis.

---

# 14. Attraction Model

Phase 1B introduces initial attraction records under discovery geography.

Rules:

1. Attraction records must use defined attraction types from the existing domain model.
2. Attraction records should reference destination/island/tourism area/admin slugs when known.
3. Attraction naming and relationships must remain factual.

---

# 15. Location/Content Relationships

Phase 1B focuses on location hierarchy population, but must preserve content relationships.

Requirements:

1. Existing content-location model from Phase 1A remains unchanged.
2. Added locations should support future content linkage without schema changes.
3. Do not alter content domain architecture in this phase.

---

# 16. Data-Quality Rules

All Phase 1B data updates must follow strict quality controls:

1. Factual over comprehensive.
2. No fabricated local claims.
3. No unverifiable provider/business/cultural claims.
4. Use consistent naming and slug standards.
5. Keep relationships internally consistent.

---

# 17. Existing-Data Preservation

Preserve current behavior and compatibility.

Must preserve:

1. Existing destination hero behavior.
2. Existing domain architecture from Phase 1A.
3. Existing stable slugs unless correction is essential.

---

# 18. Data Organization

Phase 1B must continue using the static typed architecture:

1. Administrative data in `src/domain/data/administrative.ts`.
2. Discovery data in `src/domain/data/discovery.ts`.
3. Existing type files and repository surface are reused, not redesigned.
4. Keep imports/exports aligned with current `src/domain/data/index.ts` and `src/domain/index.ts` patterns.

---

# 19. Phase 1B Scope

In scope:

1. Populate and refine administrative hierarchy data.
2. Populate and refine discovery hierarchy data (destination compatibility + island/tourism area/attraction baseline).
3. Validate type/build compatibility of data updates.

Out of scope:

1. Phase 1C+ tasks.
2. UI/page implementation changes.
3. Search architecture changes.
4. Backend, auth, or infrastructure changes.

---

# 20. No-Database Rule

Phase 1B remains database-free.

Rules:

1. Use static TypeScript data only.
2. Do not add DB drivers, ORM models, migrations, or external storage requirements.
3. Do not add new service infrastructure.

---

# 21. Validation

Run applicable checks after Phase 1B changes:

1. Typecheck
2. Tests (if available)
3. Build
4. Lint where practical

Validation reporting rules:

1. Only report checks that were actually run.
2. Distinguish pre-existing failures from Phase 1B regressions.

---

# 22. Implementation Constraints

Hard constraints:

1. Do not redesign Phase 1A domain model.
2. Do not implement Phase 1C or later phases.
3. Do not add UI pages, search infrastructure, database, backend, authentication, or new infrastructure.
4. Preserve existing functionality, including existing destination hero behavior.
5. Keep changes minimal and targeted to Phase 1B goals.

---

# 23. Acceptance Criteria

Phase 1B is complete when all are true:

1. Administrative and discovery hierarchies are both represented and expanded in static data.
2. Existing destination behavior is preserved.
3. Added coverage follows quality and slug rules.
4. No out-of-scope architecture changes are introduced.
5. Validation checks are run and honestly reported.

---

# 24. Final Report

At task completion, provide:

1. What changed
2. Administrative coverage added
3. Discovery coverage added
4. Files changed
5. Validation results
6. Known limitations
7. Whether Phase 1B is ready for review

If anything is blocked, state what is blocked and why.