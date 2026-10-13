import path from "node:path";
import { fileURLToPath } from "node:url";

const workspaceRoot = path.dirname(fileURLToPath(import.meta.url));
process.chdir(workspaceRoot);

await import("./scripts/start-services.mjs");