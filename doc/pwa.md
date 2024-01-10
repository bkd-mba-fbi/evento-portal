[back](../README.md)

# Progressive Web App (PWA)

The _Evento Portal_ is installable and offers a simple offline page when no internet connection is available. We use the [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa) that builds on Workbox to achieve this. The configuration is in [vite.config.ts](../vite.config.ts):

- We define the Web Manifest with the appropriate colors and icons.
- The ServiceWorker should pre-cache all necessary assets of the _Evento Portal_ to render the base layout or "shell" (`index.html`, logo, icons and JavaScript files) but not the _apps_' files in `public/apps`.
- When building the application with `npm run build`, the ServiceWorker is generated to `dist/sw.js`, containing the file paths to pre-cache.

## Testing with ServiceWorker

To test the _Evento Portal_ with the ServiceWorker locally, you have to serve the app with a valid SSL certificate using the following command (with `browserstack` as `oAuthClientId` in `public/settings.js`):

```
npm run preview:ssl
```

The application is served under https://bs-local.com:3000.

## Offline Page

When no Internet connection is available (`!navigator.onLine`), the [\<bkd-content\>](../src/components/Content.ts) component is rendering an offline message instead of the _app_'s content.
