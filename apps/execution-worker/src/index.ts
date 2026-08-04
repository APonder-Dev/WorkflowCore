/**
 * Execution worker entrypoint (placeholder).
 *
 * Phase 1 scope: monorepo scaffolding only. BullMQ job consumption, node
 * execution, checkpointing, and crash recovery are implemented in
 * Phase 5 (Queue and Workers) and Phase 4 (Execution State Machine).
 *
 * See: docs/execution-semantics.md, ROADMAP.md
 */
function main(): void {
  // eslint-disable-next-line no-console
  console.log("[execution-worker] placeholder process starting; no queues wired yet");
}

main();
