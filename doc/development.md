[back](../README.md)

# Setup & Development

## Getting Started

Preparation:

- Install Node.js (preferably using [NVM](https://github.com/creationix/nvm)).
- Clone this repository.
- Execute `nvm use` to enable the correct Node version.
- Execute `npm install` to install the dependencies.
- Copy [public/settings.example.js](../public/settings.example.js) to `public/settings.js` and adjust its contents.
- You're good to go 🚀

Start the development server:

```
npm start
```

The application is now running on http://localhost:3000

To be able to login with the test users you have to be in a trusted IP range or the OAuth provider requires 2FA to login (i.e. you can't login).

## Build

Build the project:

```
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Linting & Testing

### Linting

Run TypeScript compiler & ESLint:

```
npm run lint
```

Print a report of unused dependencies, files & exports using [Knip](https://github.com/webpro/knip) (for the configuration, see [.knip.json](../.knip.json)):

```
npm run unused
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
