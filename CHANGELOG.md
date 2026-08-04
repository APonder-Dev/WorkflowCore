# Changelog

All notable changes to this project are documented in this file. The format is
based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); this project
does not yet follow Semantic Versioning releases (pre-1.0, `main`-only).

## [Unreleased]

### Added

- Turborepo/pnpm monorepo workspace with strict TypeScript configuration shared
  via `tsconfig.base.json`.
- Application skeletons: `control-plane` (NestJS), `execution-worker`,
  `scheduler`, `webhook-gateway`, and `web` (Next.js).
- Shared package skeletons: `workflow-definition`, `execution-engine`,
  `node-sdk`, `database` (Prisma toolchain wiring), `event-contracts`,
  `observability`, `security`, `shared-types`, `ui`.
- Root documentation: README, ARCHITECTURE, SECURITY, CONTRIBUTING, ROADMAP, and
  initial `docs/` structure with ADR 0001.
- CI/CD workflow skeletons (`ci.yml`, `security.yml`, `release.yml`), issue
  templates, CODEOWNERS, Dependabot configuration, and PR template.
- Local development infrastructure via Docker Compose (PostgreSQL, Redis, NATS,
  Prometheus, Grafana).
