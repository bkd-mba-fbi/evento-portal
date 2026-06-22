[back](../README.md)

# Setup & Development

## Getting Started

Preparation:

- Clone this repository.
- Use [mise](https://mise.jdx.dev/) or [nvm](https://github.com/nvm-sh/nvm) (with `nvm use`) to install/activate the project's Node.js version.
- Install Corepack and activate PNPM:

```bash
npm install --global corepack@latest
corepack enable pnpm
```

- Execute `pnpm install` to install the dependencies.
- Copy [public/settings.example.js](../public/settings.example.js) to `public/settings.js` and adjust its contents.
- You're good to go 🚀

Start the development server:

```bash
pnpm start
```

The application is then running on http://localhost:3000.

To be able to log in with the test users you have to be in a trusted IP range or the OAuth provider requires 2FA to login (i.e. you can't log in).

## Build

Build the project:

```bash
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

You can also visualize the contents of the generated bundle by running:

```bash
pnpm analyze
```

## Linting & Testing

### Linting

Verify TypeScript typing and check source files with [ESLint](https://eslint.org/):

```bash
pnpm lint
```

### E2E Tests

Run E2E tests interactively:

```bash
pnpm cy:open
```

Run E2E tests headless:

```bash
pnpm cy:run
```

For more information, see [Cypress](https://www.cypress.io/).
