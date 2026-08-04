# Workflow Schema

**Status:** Planned — implemented in Phase 2 (Workflow Schema). See
[ROADMAP.md](../ROADMAP.md).

This document will define the versioned workflow definition schema: the
`WorkflowVersion` shape (nodes, edges, trigger definition, input/output schema,
variables, credential references, timeout/retry/error/concurrency policy,
metadata, definition checksum), publication immutability rules, and graph
validation rules (missing nodes/edges, unreachable nodes, unsupported cycles,
invalid trigger count, recursion risk, excessive graph size, and related
diagnostics).

A minimal skeleton of the schema currently lives in
`packages/workflow-definition/src/index.ts` as `workflowVersionSkeletonSchema`.
