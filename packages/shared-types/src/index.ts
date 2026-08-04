/**
 * Cross-cutting types shared across apps and packages.
 *
 * Domain-specific types (Workflow, WorkflowVersion, WorkflowExecution, etc.)
 * live in their owning packages (workflow-definition, execution-engine,
 * database) and are re-exported from here as the domain model solidifies.
 * This package is intentionally minimal in Phase 1.
 */

/** Branded identifier type to avoid mixing up unrelated string IDs. */
export type Id<Brand extends string> = string & { readonly __brand: Brand };

/** Standard API error envelope used across all HTTP-facing services. */
export interface ApiErrorEnvelope {
  error: {
    code: string;
    message: string;
    correlationId: string;
    details?: Record<string, unknown>;
  };
}

export const PACKAGE_NAME = "@workflowcore/shared-types" as const;
