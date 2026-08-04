import { Controller, Get } from "@nestjs/common";

interface HealthResponse {
  status: "ok";
  service: "control-plane";
  timestamp: string;
}

/**
 * Liveness/readiness placeholder for the control plane.
 *
 * TODO(phase 3/4): extend readiness to check database and Redis
 * connectivity once those integrations land.
 */
@Controller("health")
export class HealthController {
  @Get()
  getHealth(): HealthResponse {
    return {
      status: "ok",
      service: "control-plane",
      timestamp: new Date().toISOString(),
    };
  }
}
