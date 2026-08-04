import type { z } from "zod";

/**
 * Node integration contract.
 *
 * Phase 1 defines the shape a node integration must eventually satisfy so
 * built-in nodes (Phase 6/9) and third-party integrations can target a
 * stable interface. Execution handler wiring, retry classification, and
 * the compatibility/versioning rules land in Phase 11 (Node SDK).
 *
 * See: docs/node-sdk.md, ROADMAP.md
 */
export interface NodeDefinition<TConfig = unknown, TInput = unknown, TOutput = unknown> {
  metadata: {
    type: string;
    version: string;
    category: "trigger" | "logic" | "action";
    displayName: string;
    description: string;
  };
  configSchema: z.ZodType<TConfig>;
  inputSchema: z.ZodType<TInput>;
  outputSchema: z.ZodType<TOutput>;
  requiredCredentials?: string[];
}
