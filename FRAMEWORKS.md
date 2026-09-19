# PinoyLokal Frameworks & Technology Rules

## Current Direction
The revamp is a modern TypeScript/React application using the existing repository stack, including React, TypeScript, Vite, TanStack Router/Start, Tailwind CSS, shadcn/ui/Radix, and React Query where already present.

**The agent must inspect the repository before assuming exact versions or package usage.**

## React
- Functional components.
- Composition over duplication.
- Focused components.
- Domain/content data stays outside presentation components.

## TypeScript
- Prefer strict typing.
- Avoid `any`.
- Use discriminated unions for meaningful variants.
- Reuse shared domain types.
- Do not duplicate models.

## TanStack Router
- Follow the existing route conventions.
- Use stable route parameters/slugs.
- Do not introduce another routing system.
- Follow the repository's established data-loading approach.

## TanStack Query
Use for async/server state when actually needed. Do not add or use it merely because it exists.

Phase 1 static content may use direct typed data access.

## Tailwind
Follow the existing configuration, tokens, and patterns. Do not introduce a second styling system.

## shadcn/ui / Radix
Reuse existing components. Do not add another UI library without explicit approval.

## Data Architecture
Phase 1 is intentionally database-free:

`Application → Typed domain/data modules → Static content`

Supporting services:
- Google Forms/Sheets for collection
- Cloudflare R2 for object/image storage

A database is a future decision based on demonstrated product need.

## Search
Phase 1 may use a static search index. Do not add Elasticsearch, Algolia, OpenSearch, or similar infrastructure unless explicitly requested.

## Backend
Do not introduce a backend solely for static content, image references, feedback forms, location requests, or basic provider applications.

## Dependencies
Before adding a dependency:
1. Check existing dependencies.
2. Check whether the framework already provides the capability.
3. Prefer a simple local implementation when sufficient.
4. Add only when materially useful.

## Version Changes
Do not perform major framework upgrades as part of unrelated feature work. If required, document the reason and test the application.
