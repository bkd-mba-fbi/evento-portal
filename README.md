# Evento Portal

[![Lint & Test ✨](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/test.yml)
[![Build & Deploy ZIP 📦](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/zip.yml/badge.svg?branch=main)](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/zip.yml)
[![Build & Push Docker Image 🚀](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/docker.yml/badge.svg)](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/docker.yml)
[![SBOM](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/bom.yml/badge.svg?branch=main)](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/bom.yml)
[![Netlify main deploy](https://api.netlify.com/api/v1/badges/fccfe392-ffb5-4e40-b95a-5d319e431559/deploy-status)](https://app.netlify.com/sites/evtapp/deploys)

The _Evento Portal_ is used to integrate various applications for school administration in a single web portal with a common look and feel.

This project is realized using Web Components with [Lit](https://lit.dev/), [lit-localize](https://lit.dev/docs/localization/overview/), [@lit-app/state](https://github.com/lit-apps/lit-app/tree/main/packages/state), [@badgateway/oauth2-client](https://github.com/badgateway/oauth2-client), [Vite](https://vitejs.dev/) and [Cypress](https://www.cypress.io/). It is open source software, licensed under the terms of the [MIT license](./LICENSE).

Download the [latest build](https://bkd-mba-fbi.github.io/evento-portal/evento-portal.zip).

## Documentation

### General

- [Software Architecture Documentation (SAD)](./doc/sad.md)
- [App Integration & API](./doc/app-integration.md) – Things to consider when integrating _apps_

### Development

- [Setup & Development](./doc/development.md) – Start local development, run linting & tests
- [Git Workflow](./doc/git.md) – Branching & commit messages
- [Internationalization (I18n)](./doc/i18n.md) – Translating texts
- [Prettier](doc/prettier.md) – Source code formatting
- [Design](./doc/design.md) – Responsive Design & CI/CD
- [Browser Testing](./doc/browser-testing.md) – Support & BrowserStack.com
- [Progressive Web App (PWA)](./doc/pwa.md) – Installability & offline support
- [iframe Limitations & Workarounds](./doc/iframe.md) – Implementation details (iframe.js)

### Operations

- [Deployment](./doc/deployment.md) – Operation environments, releasing & Docker image builds
- [Release Instructions](./doc/releasing.md) – How to create a new regular or hotfix release
