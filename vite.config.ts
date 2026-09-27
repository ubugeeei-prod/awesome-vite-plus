import { defineConfig } from "vite-plus";

export default defineConfig({
  run: {
    tasks: {
      check: {
        command: "vp check",
      },
      format: {
        command: "vp fmt .",
        cache: false,
      },
      "format:check": {
        command: "vp fmt --check .",
      },
      lint: {
        command: "vp lint .",
      },
    },
  },
  fmt: {},
  lint: {},
});
