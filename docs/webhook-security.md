# Webhook Security

**Status:** Planned — implemented in Phase 7 (Webhook Triggers), with SSRF
controls for the HTTP request node landing in Phase 14 (Hardening). See
[ROADMAP.md](../ROADMAP.md).

This document will cover two related but distinct concerns:

1. **Inbound webhook ingress** — endpoint registration, request validation,
   signing-secret verification, rate limiting, payload-size limits, replay
   protection, correlation IDs, delivery-ID deduplication, and asynchronous
   processing with immediate acknowledgment.
2. **Outbound HTTP/SSRF protection** — URL validation, method allowlists, header
   validation, timeouts, maximum response size, redirect limits, private-network
   and loopback and link-local restrictions, cloud metadata-service restrictions,
   DNS-rebinding considerations, and configurable allowlists for the HTTP request
   node and any other outbound-request node.

All inbound webhook payloads are treated as untrusted input.
