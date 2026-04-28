import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const repoName = "sobot-frame-demo";

export default defineConfig(({ command }) => ({
  plugins: [svelte()],
  // GitHub Pages project site needs /<repo>/ as base in production build.
  base: command === "build" ? `/${repoName}/` : "/",
}));
