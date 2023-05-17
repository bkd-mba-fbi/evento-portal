# Evento Portal

The _Evento Portal_ is used to provide various applications for school administration in a single portal with a common look and feel.

This project is realised with:

- [Vite](https://vitejs.dev/)
- [Lit](https://lit.dev/) and [lit-localize](https://lit.dev/docs/localization/overview/)
- [Cypress](https://www.cypress.io/)

## Getting Started

Install the dependencies

```
npm install
```

and start the development server

```
npm run dev
```

The application is now available at http://localhost:3000

## Testing

### E2E

Run the e2e tests interactively

```
npm run cy:open
```

or headless

```
npm run cy:run
```

For more information, see [Cypress](https://www.cypress.io/).

## I18n

Update the translation file by extracting the german texts from the source files

```
npm run locale:extract
```

The generated translation file `xliff/fr.xlf` can be edited manually with a text editor or with [Poedit](https://poedit.net/).

When finished, generate the locale artifacts

```
npm run locale:build
```

For more information, see [lit-localize](https://lit.dev/docs/localization/overview/).
