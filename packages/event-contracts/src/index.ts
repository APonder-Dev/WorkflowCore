import { z } from "zod";

/**
 * Event/job contracts shared between the control plane, execution workers,
 * scheduler, and webhook gateway.
 *
 * Phase 1 defines the envelope shape only. Concrete event payloads
 * (node-ready, execution-completed, webhook-received, schedule-fired, etc.)
 * are added alongside the queue/worker implementation in Phase 5+.
 */
export const eventEnvelopeSchema = z.object({
  eventId: z.string().uuid(),
  eventType: z.string().min(1),
  occurredAt: z.string().datetime(),
  correlationId: z.string().min(1),
  payload: z.record(z.unknown()),
});

export type EventEnvelope = z.infer<typeof eventEnvelopeSchema>;
