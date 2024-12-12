[back](../README.md)

# Unrestricted Content Pages

The pages linked in the footer (contact, legal & imprint) are rendered by the _Evento Portal_, not within the `<iframe>`. These are "static" content, that is sourced from the i18n translations.

For the external OAuth login page to be able to link to these pages from its footer, there is an unrestricted version of them under the `/unrestricted` path which is accessible without being authenticated.

Technically it is implemented as follows:

- We have a second Vite entry point [unrestricted/index.html](../unrestricted/index.html) (see `build.rollupOptions.build` in [vite.config.ts](../vite.config.ts)).
- This version of the app uses a separate `<bkd-portal-unrestricted>` component, that works without authentication and uses the `<bkd-header-unrestricted>` and `<bkd-content-unrestricted` components for rendering the contents for unauthenticated users.
- The unrestricted variant has no navigation or service menu. It also does not initiate the OAuth login flow or the token renewal logic.
- The unrestricted pages are available under the following paths:
  - `/unrestricted/?locale=de-CH&module=contact`
  - `/unrestricted/?locale=de-CH&module=legal`
  - `/unrestricted/?locale=de-CH&module=imprint`
