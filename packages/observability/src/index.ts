/**
 * Observability helpers shared across services.
 *
 * Phase 1 exposes a minimal correlation-id helper only. Structured
 * logging, OpenTelemetry tracer/exporter setup, and Prometheus metric
 * registries are implemented in Phase 13 (Observability).
 *
 * See: docs/operations.md, ROADMAP.md
 */
import { randomUUID } from "node:crypto";

export function createCorrelationId(): string {
  return randomUUID();
}
