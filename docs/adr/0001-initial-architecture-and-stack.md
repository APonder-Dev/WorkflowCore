# ADR 0001: Initial architecture and technology stack

**Status:** Accepted
**Date:** 2026-08-04

## Context

WorkflowCore needs a stack and repository layout that supports an event-driven,
durable workflow engine split across multiple deployable services (API, worker,
scheduler, webhook ingress, web UI), with a shared, strictly-typed domain model
between them.

## Decision

- **Monorepo** managed with pnpm workspaces + Turborepo, under `apps/` (deployable
  services) and `packages/` (shared libraries), so domain types and validation
  logic (`workflow-definition`, `execution-engine`, `event-contracts`,
  `shared-types`) are defined once and consumed everywhere.
- **TypeScript, strict mode everywhere**, via a shared `tsconfig.base.json`
  (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, and related
  flags enabled repo-wide) so type errors surface at compile time rather than at
  runtime in a durable-execution engine where runtime failures are expensive to
  diagnose.
- **NestJS** for the control plane, giving structured DI, module boundaries, and a
  conventional place to add guards/interceptors for authorization and
  observability as those land.
- **PostgreSQL + Prisma** as the system of record and schema/migration tool for
  workflows, versions, executions, credentials, and audit data.
- **Redis + BullMQ** for durable job queuing between the control plane, scheduler,
  webhook gateway, and execution workers. **NATS** is reserved for event
  distribution scenarios where multiple independent subscribers need the same
  event (e.g., audit/observability fan-out), not as a queue replacement — see
  Phase 5+ for where each is actually used.
- **Next.js + React + React Flow** for the operator web application, with
  TanStack Query for server-state management.
- **Zod** for runtime schema validation, paired with static types, across
  workflow definitions, node contracts, and event envelopes.
- **OpenTelemetry + Prometheus + Grafana** for tracing and metrics, added in
  Phase 13 rather than Phase 1, so instrumentation targets real code paths
  instead of placeholders.
- Application services (`execution-worker`, `scheduler`, `webhook-gateway`) are
  scaffolded as plain TypeScript processes in Phase 1, not NestJS apps — they
  don't yet have HTTP surfaces or DI graphs worth the framework overhead. This
  can be revisited per-service in the phase that gives it real responsibilities
  (5, 7, 8) if a DI container proves useful there.

## Consequences

- Every package must build independently under Turborepo's dependency graph;
  cross-package imports go through workspace package names
  (`@workflowcore/<package>`), never relative paths across package boundaries.
- Strict TypeScript settings apply from day one, so later phases inherit a
  codebase with no accumulated `any`/implicit-optional debt to clean up.
- The `database` package owns the Prisma schema exclusively; no other package
  or app defines its own database access layer.

## Alternatives considered

- **Single deployable app** (rejected): collapses the scaling and failure
  boundaries the spec explicitly asks for (independent worker/scheduler/gateway
  recovery).
- **npm/Yarn workspaces without Turborepo** (rejected): loses task
  caching/parallelization across ~14 apps/packages, which matters as the
  execution engine and its tests grow.
