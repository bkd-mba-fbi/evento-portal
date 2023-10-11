// vite.config.js
import { defineConfig } from "vite";

/**
 * Adjust paths of /apps/EmberApps that are fetched with wrong case
 * (due to ludicrous Windows' file system case insensitivity)
 
const EventoEmberAppsCasePlugin = {
  name: "evento-ember-apps-case",
  configureServer(server) {
    server.middlewares
      .use("/apps/EmberApps", (req, res, next) => {
        req.url = req.url
          .replace("components", "Components")
          .replace("controllers", "Controllers")
          .replace("templates", "Templates")
          .replace("views", "Views")
          .replace("//JSModules", "");
        next();
      })
      .use("/apps/Noteneingabe", (req, res, next) => {
        req.url = req.url.replace("components", "Components");
        next();
      });
  },
};
*/
export default defineConfig({
  server: {
    port: 3000,
  },
  //plugins: [EventoEmberAppsCasePlugin],
});
