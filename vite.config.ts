// vite.config.js
import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: process.env.SSL ? [basicSsl()] : [],
});
