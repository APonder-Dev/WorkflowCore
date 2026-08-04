# Roadmap

WorkflowCore is built as a deliberately scoped engine, not a clone of every n8n or
Zapier feature. Phases are sequenced so the execution engine is durable and
well-tested before breadth (more nodes, more UI surface) is added.

| Phase | Scope                                                                                          | Status          |
| ----- | ---------------------------------------------------------------------------------------------- | --------------- |
| 1     | Monorepo foundation — workspace, apps/packages skeletons, shared tooling, CI, root docs        | **In progress** |
| 2     | Workflow schema — definition/node/edge models, graph validation, versioning                    | Planned         |
| 3     | Database model — workflows, versions, executions, nodes, jobs, credentials, auditing           | Planned         |
| 4     | Execution state machine — workflow/node states, transition validation, persistence             | Planned         |
| 5     | Queue and workers — BullMQ, worker registration, job consumption, result persistence, recovery | Planned         |
| 6     | Manual workflow execution — manual trigger, transform node, HTTP node, execution results       | Planned         |
| 7     | Webhook triggers — gateway, signing, deduplication, asynchronous execution                     | Planned         |
| 8     | Scheduler — cron, intervals, time zones, missed-run policy                                     | Planned         |
| 9     | Built-in nodes — logic nodes, action nodes, child workflows                                    | Planned         |
| 10    | Credentials — encryption, scoping, redaction, auditing                                         | Planned         |
| 11    | Node SDK — contracts, validation, examples, version compatibility                              | Planned         |
| 12    | Web application — editor, execution history, credentials, schedules, operations                | Planned         |
| 13    | Observability — metrics, traces, health, Grafana examples                                      | Planned         |
| 14    | Hardening — SSRF controls, rate limits, payload limits, tenant isolation, security tests       | Planned         |
| 15    | Deployment — Docker Compose, environment configuration, backup/recovery, release workflow      | Planned         |

## Initial vertical slice (target: end of Phase 6)

`Manual Trigger → Transform Data → HTTP Request → Persisted Execution Result`,
including workflow creation, validation, publication, execution request, queue
dispatch, worker execution, result persistence, an execution-detail page, and
automated tests.

## Non-goals

- Reproducing n8n's or Zapier's full integration catalog.
- Claiming exactly-once execution (see
  [docs/execution-semantics.md](./docs/execution-semantics.md)).
- Unrestricted arbitrary database access from workflows.
- Multiple concurrently active schedulers without leader election or an explicit
  single-active-scheduler constraint.
