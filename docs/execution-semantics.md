# Execution Semantics

**Status:** Planned — implemented alongside Phase 4 (Execution State Machine) and
Phase 5 (Queue and Workers). See [ROADMAP.md](../ROADMAP.md).

This document will specify, precisely and without overclaiming:

- Delivery guarantees: WorkflowCore targets **at-least-once** node execution, not
  exactly-once. The conditions under which duplicate execution can occur (worker
  crash after side effect but before checkpoint, queue redelivery, etc.) will be
  enumerated here.
- Idempotency requirements placed on node authors, and which built-in nodes are
  idempotent by construction.
- Duplicate-event handling (webhook delivery IDs, schedule run keys).
- Retry behavior and classification (retryable vs. non-retryable errors),
  backoff, and maximum-delay bounds.
- Timeout, cancellation, and compensation behavior.
- Concurrency limits, loop limits, recursion limits, maximum node executions per
  run, and maximum payload sizes.

Until this document is filled in, no execution guarantees should be assumed or
advertised beyond what is stated in [ARCHITECTURE.md](../ARCHITECTURE.md) and
[ROADMAP.md](../ROADMAP.md).
