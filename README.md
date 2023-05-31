# Evento Portal

[![Linting & Testing ✨](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/test.yml)
[![Build & Deployment 🚀](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/build.yml/badge.svg)](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/build.yml)

The _Evento Portal_ is used to integrate various applications for school administration in a single portal with a common look and feel.

This project is realised with:

- [Vite](https://vitejs.dev/)
- [Lit](https://lit.dev/) and [lit-localize](https://lit.dev/docs/localization/overview/)
- [Cypress](https://www.cypress.io/)

Download the [latest build](https://bkd-mba-fbi.github.io/evento-portal/evento-portal.zip).

## Getting Started

Install the dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

The application is now available at http://localhost:3000

## Linting & Testing

### Linting

Run TypeScript compiler & ESLint:

```
npm run lint
```

### E2E Tests

Run E2E tests interactively:

```
npm run cy:open
```

Run E2E tests headless:

```
npm run cy:run
```

For more information, see [Cypress](https://www.cypress.io/).

## I18n

The portal is translated using [lit-localize](https://lit.dev/docs/localization/overview/). The texts of the base language (german) are contained in the source files. The other languages (currently only french) can be translated using a [XLIFF](https://en.wikipedia.org/wiki/XLIFF) file.

### Translation Workflow

Update the french translation file by extracting the base language texts from the source files:

```
npm run locale:extract
```

The generated translation file `xliff/fr.xlf` can then be edited manually with a text editor or more conveniently with a XLIFF-compatible editor like [Poedit](https://poedit.net/) (open source).

When all texts are translated, generate the locale artifacts:

```
npm run locale:build
```

## Responsive Design

Mobile breakpoints:

- > 1920px content centered
- < 1200px hamburger menu
- < 767px mobile compact
