# Security Policy

## Status

WorkflowCore is in early development (Phase 1 — monorepo foundation). No workflow
execution, credential storage, or webhook ingress exists yet, so most controls
described below are design commitments tracked by [ROADMAP.md](./ROADMAP.md)
rather than shipped behavior. This document will be updated as each control lands.

## Reporting a vulnerability

Please report suspected vulnerabilities privately via GitHub's
[Security Advisories](https://github.com/APonder-Dev/WorkflowCore/security/advisories/new)
for this repository rather than opening a public issue. Include reproduction steps,
affected version/commit, and impact assessment where possible.

## Supported versions

Pre-1.0: only the `main` branch is supported. There is no versioned release yet.

## Security principles

These are the controls WorkflowCore commits to as functionality is implemented:

- **Credential security** — credentials are encrypted at rest, never embedded in
  workflow definitions, and redacted from logs, execution snapshots, API
  responses, error messages, and audit events. See
  [docs/credential-security.md](./docs/credential-security.md).
- **SSRF protection** — the HTTP request node and any outbound-request node
  restrict private-network, loopback, link-local, and cloud metadata-service
  addresses by default, with documented, explicit allowlisting. See
  [docs/webhook-security.md](./docs/webhook-security.md).
- **Tenant isolation** — organizations, workflows, credentials, and executions are
  scoped by membership and role; cross-organization access is denied at the
  authorization layer, not just hidden in the UI.
- **Untrusted input** — webhook payloads, HTTP responses, and node outputs are
  treated as untrusted: size limits, timeouts, and schema validation apply before
  data flows further into the engine.
- **Execution containment** — loop limits, recursion limits, maximum node
  executions, and payload-size limits bound what a workflow can do, both to
  contain bugs and malicious definitions.
- **Least-privilege database access** — the controlled database node defaults to
  read-only, parameterized queries, with query timeouts and row/result-size
  limits; it does not expose arbitrary SQL by default.
- **Dependency and secret scanning** — CI runs dependency and secret scanning on
  every change (see `.github/workflows/security.yml`).

## Non-goals

WorkflowCore does not claim exactly-once execution. Delivery semantics are
documented explicitly in
[docs/execution-semantics.md](./docs/execution-semantics.md) once implemented,
including duplicate-execution risk and the idempotency responsibilities placed on
node authors.
