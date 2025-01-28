// vite.config.js
import basicSsl from "@vitejs/plugin-basic-ssl";
import { resolve } from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const commonPlugins = [
  VitePWA({
    disable: process.env.DISABLE_SERVICE_WORKER === "true",
    registerType: "autoUpdate",
    includeAssets: [
      "favicon.ico",
      "icon.svg",
      "icons/apple-touch-icon-180x180.png",
    ],
    workbox: {
      // Exclude all files in apps/ and unrestricted/ directories from
      // being intercepted by the service worker
      navigateFallbackDenylist: [/^\/apps/, /^\/unrestricted/],

      // Define files to be pre-cached with a few exceptions
      globIgnores: [
        "apps/**/*",
        "settings*.js",
        "unrestricted/**/*",
        "assets/unrestricted-*.js",
      ],
      globPatterns: ["**/*{js,css,html,ico,png,svg,woff}"],
    },
    manifest: {
      name: "Evento",
      short_name: "Evento",
      description: "Schulverwaltungsapplikation des Kantons Bern",
      theme_color: "#3C505A",
      icons: [
        {
          src: "icons/pwa-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "icons/maskable-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  }),
];

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        unrestricted: resolve(__dirname, "unrestricted/index.html"),
      },
    },
  },
  plugins: process.env.SSL ? [...commonPlugins, basicSsl()] : commonPlugins,
});
