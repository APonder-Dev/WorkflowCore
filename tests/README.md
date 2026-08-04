# tests/

Cross-package integration and end-to-end tests (workflow validation, execution
ordering, retry/timeout/cancellation behavior, webhook verification, scheduler
calculations, authorization boundaries, failure-injection scenarios, etc.) live
here rather than inside individual packages, since they exercise multiple
apps/packages together.

Empty in Phase 1 — populated starting Phase 4 (Execution State Machine) as
there is behavior worth testing across package boundaries. Package-local unit
tests live alongside their source in each package.
