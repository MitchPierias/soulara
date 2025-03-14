import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["packages/**/*.test.(ts|tsx)"],
    exclude: ["**/index.ts", "**/node_modules/**"],
    globals: true,
    coverage: {
      provider: "v8",
      skipFull: true,
      include: ["packages"],
      exclude: ["**/index.ts"],
      thresholds: {
        autoUpdate: true,
        statements: 84.21,
        branches: 95,
        functions: 87.09,
        lines: 84.21,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./packages"),
    },
  },
});
