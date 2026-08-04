/**
 * Security primitives shared across services: credential encryption at
 * rest, secret redaction for logs/snapshots/audit events, and outbound
 * HTTP SSRF guards.
 *
 * Phase 1 scope: package scaffolding only. Implementation lands in
 * Phase 10 (Credentials) and Phase 14 (Hardening).
 *
 * See: docs/credential-security.md, docs/webhook-security.md, ROADMAP.md
 */
export const REDACTED_PLACEHOLDER = "[REDACTED]" as const;
