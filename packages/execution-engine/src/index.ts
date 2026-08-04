/**
 * Durable execution state machine.
 *
 * Phase 1 defines only the execution/node-execution state enums so that
 * dependent packages (database, apps) can reference stable state names
 * before the transition table and orchestration logic land in Phase 4
 * (Execution State Machine) and Phase 5 (Queue and Workers).
 *
 * See: docs/execution-semantics.md, ROADMAP.md
 */
export const WORKFLOW_EXECUTION_STATES = [
  "queued",
  "running",
  "waiting",
  "retrying",
  "succeeded",
  "failed",
  "cancelled",
  "timed_out",
  "dead_lettered",
] as const;
export type WorkflowExecutionState = (typeof WORKFLOW_EXECUTION_STATES)[number];

export const NODE_EXECUTION_STATES = [
  "pending",
  "ready",
  "running",
  "waiting",
  "retrying",
  "succeeded",
  "failed",
  "skipped",
  "cancelled",
  "timed_out",
] as const;
export type NodeExecutionState = (typeof NODE_EXECUTION_STATES)[number];
