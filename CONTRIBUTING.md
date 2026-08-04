# Contributing

## Prerequisites

- Node.js ≥ 20.11 (see `.nvmrc`)
- pnpm ≥ 9 (`corepack enable` will pick up the pinned version from `package.json`)
- Docker, for local Postgres/Redis/NATS via `infrastructure/docker-compose.yml`

## Workflow

1. Branch from `main`. Never commit directly to `main`.
2. Use descriptive branch names matching the area of work, e.g.:
   - `feature/workflow-schema`, `feature/execution-engine`,
     `feature/webhook-gateway`, `feature/scheduler`,
     `feature/credential-vault`, `feature/node-sdk`
   - `fix/execution-recovery`
   - `docs/execution-semantics`
   - `test/worker-failure-recovery`
3. Make focused commits using [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   feat: add versioned workflow definition schema
   fix: prevent duplicate webhook execution
   test: add worker restart recovery coverage
   docs: document execution guarantees
   ci: add monorepo validation pipeline
   ```
4. Before committing, run the full local check suite:
   ```bash
   pnpm install
   pnpm format:check
   pnpm lint
   pnpm typecheck
   pnpm test
   pnpm build
   git status
   git diff
   git add .
   git diff --cached
   ```
5. Open a pull request against `main` using the provided template. Do not merge
   pull requests yourself unless explicitly asked to.
6. Do not force-push shared branches unless explicitly instructed.

## Code standards

- TypeScript strict mode is enabled repo-wide (`tsconfig.base.json`); do not
  loosen it in individual packages without a documented reason.
- Formatting is enforced by Prettier, linting by ESLint (flat config,
  `typescript-eslint` recommended rules). Run `pnpm format` / `pnpm lint:fix`
  locally rather than hand-formatting.
- Keep packages focused: shared domain logic belongs in `packages/`, not
  duplicated across `apps/`.
- New node integrations should prioritize correctness and reliability over
  breadth — see [ROADMAP.md](./ROADMAP.md) for sequencing rationale.

## Attribution

Contributions are attributed to their human author. Do not add AI tools,
assistants, or generation notices as authors, co-authors, or contributors in
commit trailers, changelog entries, or documentation.

## Reporting security issues

See [SECURITY.md](./SECURITY.md) — do not open public issues for suspected
vulnerabilities.
