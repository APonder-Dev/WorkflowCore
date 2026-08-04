# Node SDK

**Status:** Planned — implemented in Phase 11 (Node SDK). See
[ROADMAP.md](../ROADMAP.md).

This document will describe how to build a node integration: metadata, version,
category, input/output/config schemas, credential requirements, the execution
handler contract, validation, error mapping, retry classification, and node
version compatibility rules, plus example integrations and the test contract
node authors must satisfy.

A minimal `NodeDefinition<TConfig, TInput, TOutput>` contract currently lives in
`packages/node-sdk/src/index.ts`.
