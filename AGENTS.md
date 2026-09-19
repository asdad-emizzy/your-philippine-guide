<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->


# PinoyLokal AI Agent Operating Rules

## Mission
Implement PinoyLokal changes safely, incrementally, and consistently with product and architecture rules.

## Required Reading
Before substantial implementation, read:
1. `AI_RULES.md`
2. `SKILLS.md`
3. `FRAMEWORKS.md`
4. `DEPLOYMENT.md`
5. Existing repository `AGENTS.md`, if present
6. Relevant project documentation

The actual repository code is the implementation source of truth.

## Operating Loop
`Understand → Inspect → Plan → Implement → Test → Review → Report`

## Understand
Identify:
- Requested behavior
- Current product phase
- Existing functionality to preserve
- Public URL impact
- Data/UI/routing/deployment impact

## Inspect
Before editing:
- Search for existing implementations.
- Inspect route structure.
- Inspect package scripts.
- Inspect reusable components.
- Inspect current data models.

Never rewrite blindly.

## Plan
For non-trivial work identify:
- Files to change
- Data model impact
- Route impact
- UI impact
- Tests
- SEO/migration impact

## Implement
- Make small coherent changes.
- Preserve behavior.
- Avoid speculative abstractions.
- Avoid unnecessary infrastructure.
- Follow project conventions.

## Test
Run applicable tests, typecheck, build, and route checks. Never state a check passed unless it was actually run.

## Phase 1 Location Rules
- Administrative and discovery geography are distinct.
- Use stable slugs.
- Avoid duplicate location entities.
- Do not invent barangay coverage.
- Start with major locations and expand progressively.

## Content Rules
Do not fabricate restaurant names, businesses, provider credentials, attractions, cultural claims, or local specialties. Clearly identify placeholders.

## Provider Rules
Provider intake is manual and login-free in the initial model:
- Google Form may collect applications.
- Private identity validation may be performed by the owner.
- Consent is required before publication.
- Identity validation, consent, and credential/skill verification are separate.
- Private ID information must never be displayed publicly.

## Visitor Contributions
Surveys, feedback, location requests, and suggestions may use Google Forms/Sheets in Phase 1. Do not build a database-backed submission system without explicit approval.

## Completion Report
Always report:
1. What changed
2. Files changed
3. Checks performed
4. Known limitations
5. Next step

## Stop Conditions
Ask before proceeding if a change could destroy production functionality, requires an unclear destructive migration, changes public URLs without a redirect strategy, or creates a privacy/security risk.

## Product Philosophy
PinoyLokal should become:

> Filipino local knowledge, organized for discovery.

Target journey:

`Search → Knowledge → Location → Food/Travel/Places → Local → Action`
