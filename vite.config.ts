// vite.config.js
import basicSsl from "@vitejs/plugin-basic-ssl";
import { execSync } from "child_process";
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

/**
 * Returns the application version in the format `YY.MM.<short-sha>`,
 * or the value of the `APP_VERSION` environment variable if set.
 */
function getAppVersion(): string {
  if (process.env.APP_VERSION) return process.env.APP_VERSION;
  try {
    const sha = execSync("git rev-parse --short=7 HEAD").toString().trim();
    const now = new Date();
    const year = String(now.getUTCFullYear()).slice(-2);
    const month = String(now.getUTCMonth() + 1).padStart(2, "0");
    return `${year}.${month}.${sha}`;
  } catch {
    return "";
  }
}

export default defineConfig(({ command }) => ({
  define: {
    // Only show the version in builds, not on the dev server
    __APP_VERSION__: JSON.stringify(command === "build" ? getAppVersion() : ""),
  },
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
}));
