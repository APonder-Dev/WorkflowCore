# Scheduler

**Status:** Planned — implemented in Phase 8 (Scheduler). See
[ROADMAP.md](../ROADMAP.md).

This document will describe cron and interval schedules, time-zone-aware
execution, pause/resume, missed-run policies, duplicate-schedule prevention,
maximum overlapping runs, next-run calculation, and the single-active-scheduler
constraint (or leader-election mechanism, if implemented instead) that prevents
multiple schedulers from silently producing duplicate executions.
