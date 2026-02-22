import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client", // tells Vite your frontend is inside client folder

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },

  build: {
    outDir: "../dist",      // build output goes to root/dist
    emptyOutDir: true,
  },

  server: {
    port: 5000,
  },

  base: "./", // prevents blank page on Vercel
});
