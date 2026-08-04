# Scaling

**Status:** Planned — informed by Phase 5 (Queue and Workers) and Phase 15
(Deployment). See [ROADMAP.md](../ROADMAP.md).

This document will describe how to scale each service independently (control
plane, execution workers, scheduler, webhook gateway), queue-depth and
worker-health signals that inform autoscaling, and known bottlenecks (database
connection limits, queue throughput, scheduler single-writer constraint).
