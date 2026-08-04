# Disaster Recovery

**Status:** Planned — informed by Phase 4 (Execution State Machine) and Phase 15
(Deployment). See [ROADMAP.md](../ROADMAP.md).

This document will describe recovery behavior after worker restart, control-plane
restart, Redis restart, and temporary database interruption, along with backup and
restore procedures for PostgreSQL and any operational runbooks for dead-lettered
executions.
