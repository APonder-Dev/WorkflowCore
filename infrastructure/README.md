# Infrastructure

Local development infrastructure via Docker Compose: PostgreSQL, Redis, NATS,
Prometheus, and Grafana.

```bash
docker compose -f infrastructure/docker-compose.yml up -d
docker compose -f infrastructure/docker-compose.yml ps
docker compose -f infrastructure/docker-compose.yml down
```

| Service    | Port                             | Notes                                        |
| ---------- | -------------------------------- | -------------------------------------------- |
| PostgreSQL | 5432                             | user/pass/db: `workflowcore`                 |
| Redis      | 6379                             | no auth (dev only)                           |
| NATS       | 4222 (client), 8222 (monitoring) | JetStream enabled                            |
| Prometheus | 9090                             | scrape config at `prometheus/prometheus.yml` |
| Grafana    | 3001                             | admin/admin (dev only)                       |

Application services are run directly with `pnpm --filter <app> dev` in Phase 1;
containerized app deployment is added in Phase 15. See
[../ROADMAP.md](../ROADMAP.md).
