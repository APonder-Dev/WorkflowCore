import { z } from "zod";

/**
 * Versioned workflow definition schema.
 *
 * Phase 1 defines only the lifecycle status enum and a minimal skeleton so
 * dependent packages have a stable import target. The full definition
 * (nodes, edges, trigger config, retry/error/concurrency policy, checksum,
 * graph validation) is implemented in Phase 2 (Workflow Schema).
 *
 * See: docs/workflow-schema.md, ROADMAP.md
 */
export const workflowStatusSchema = z.enum(["draft", "published", "paused", "archived"]);
export type WorkflowStatus = z.infer<typeof workflowStatusSchema>;

export const workflowVersionSkeletonSchema = z.object({
  id: z.string().uuid(),
  workflowId: z.string().uuid(),
  version: z.number().int().positive(),
  name: z.string().min(1),
  status: workflowStatusSchema,
});

export type WorkflowVersionSkeleton = z.infer<typeof workflowVersionSkeletonSchema>;
