# WorkflowCore

**Event-driven workflow automation engine.**

WorkflowCore is a self-hosted platform for building and running workflows made of
triggers, conditions, actions, schedules, webhooks, delays, and data transformations,
with durable execution, retry handling, and failure recovery. It is a focused engine,
not an attempt to reproduce every feature of tools like n8n or Zapier — see
[ROADMAP.md](./ROADMAP.md) for scope and sequencing.

> **Status:** Phase 1 — monorepo foundation. No workflow, execution, or scheduling
> logic exists yet; this stage establishes the workspace, tooling, and service
> skeletons that later phases build on. See [ROADMAP.md](./ROADMAP.md).

## Tech stack

TypeScript (strict) · NestJS · PostgreSQL · Prisma · Redis · BullMQ · NATS ·
Next.js · React · React Flow · Zod · TanStack Query · Docker Compose ·
OpenTelemetry · Prometheus · Grafana · pnpm · Turborepo

## Repository layout

```
apps/
  control-plane/     REST API: workflows, versions, executions, credentials, auth
  execution-worker/  BullMQ worker driving durable node/workflow execution
  scheduler/         Cron/interval schedule evaluation and dispatch
  webhook-gateway/   Inbound webhook ingress: validation, signing, dedup
  web/               Operator web app (Next.js): editor, history, credentials
packages/
  workflow-definition/  Versioned workflow schema and graph validation
  execution-engine/     Durable execution state machine and orchestration
  node-sdk/              Extension SDK contract for node integrations
  database/               Prisma schema, generated client, repositories
  event-contracts/        Typed event/job contracts shared across services
  observability/          Logging, tracing, metrics helpers
  security/                Credential encryption, redaction, SSRF guards
  shared-types/            Cross-cutting TypeScript types
  ui/                      Shared React components (React Flow, forms, etc.)
tests/            Cross-package integration/E2E tests
docs/             Architecture, security, and operational documentation
infrastructure/   Docker Compose and local dev infra
```

## Getting started

Prerequisites: Node.js ≥ 20.11, pnpm ≥ 9, Docker (for local Postgres/Redis/NATS).

```bash
pnpm install
cp packages/database/.env.example packages/database/.env
docker compose -f infrastructure/docker-compose.yml up -d

pnpm build
pnpm typecheck
pnpm lint
pnpm test
```

Run an individual app in watch mode via Turborepo filtering, e.g.:

```bash
pnpm --filter @workflowcore/control-plane dev
```

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) — system design and diagrams
- [SECURITY.md](./SECURITY.md) — security model and vulnerability reporting
- [CONTRIBUTING.md](./CONTRIBUTING.md) — development workflow and standards
- [ROADMAP.md](./ROADMAP.md) — phased delivery plan
- [docs/](./docs/) — schema, execution semantics, node SDK, credential
  security, webhook security, scheduler, scaling, disaster recovery,
  operations, and architecture decision records

## License

[MIT](./LICENSE) © Anthony Ponder
