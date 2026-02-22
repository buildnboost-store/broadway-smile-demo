import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client", // frontend lives here

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "~shared": path.resolve(__dirname, "shared")
    }
  },

  build: {
    outDir: "../dist", // built output goes to root/dist
    emptyOutDir: true
  },

  base: "./" // important for correct asset paths
});
