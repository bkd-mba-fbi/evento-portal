# Evento Portal

[![Linting & Testing ✨](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/test.yml/badge.svg)](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/test.yml)
[![Build & Deployment 🚀](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/build.yml/badge.svg)](https://github.com/bkd-mba-fbi/evento-portal/actions/workflows/build.yml)

The _Evento Portal_ is used to integrate various applications for school administration in a single web portal with a common look and feel.

This project is realised with:

- [Vite](https://vitejs.dev/)
- [Lit](https://lit.dev/) with [lit-localize](https://lit.dev/docs/localization/overview/) and [@lit-app/state](https://github.com/lit-apps/lit-app/tree/main/packages/state).
- [Cypress](https://www.cypress.io/)

Download the [latest build](https://bkd-mba-fbi.github.io/evento-portal/evento-portal.zip).

## Terminology

- **Evento API** \
  A [backend](https://clx-evento.bitbucket.io/master_eventodoc/Api/) by [Swiss Learning Hub](https://www.swisslearninghub.com/) that provides access to school-related data and handles aspects like authorization.
- **Evento Portal** \
  A frontend application that takes care of login/authentication using the _Evento API_, renders the base layout & the role-specific navigation and integrates various _apps_. This is the main entry point for the users.
- **Apps** \
  Various mini applications – like [webapp-schulverwaltung](https://github.com/bkd-mba-fbi/webapp-schulverwaltung) (Angular) or [kursausschreibung](https://github.com/bkd-mba-fbi/kursausschreibung) (Ember) – that provide a frontend for different aspects of the daily school routine. They are managed & integrated by the _Evento Portal_ and use the provided access token to access the _Evento API_.
- **Modules** \
  The _apps_ may consist of multiple _modules_ like _presence control_ or _tests_ that are individually integrated in the _Evento Portal_'s navigation.

## App Integration/Evento Portal API

A static build of the _apps_ is committed to this repository in the `public/apps/` directory. The _Evento Portal_ loads the _apps_ in an `<iframe>` to ensure a separation of the runtime environment, a proper cleanup when switching _apps_ and no memory leaks. The `public/scripts/iframe.js` script has to be included in an _app_'s `index.html` to setup communication between portal & iframe.

_Apps_ can use client-side hash-routing, that means using the [hash part](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash) of the URL to store application state. The _Evento Portal_ ensures, that the hash part is mapped from the `<iframe>`'s URL to the browser URL and vice versa.

Furthemore an _app_ can rely on the following information that is provided by the _Evento Portal_:

| What                             | Where                                                                                                                                       | Note                                                                                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Access token                     | `sessionStorage.getItem("CLX.LoginToken")`                                                                                                  | Quoted string (`"ey..."`)                                                                                                                                        |
| Access token (legacy)            | `localStorage.getItem("CLX.LoginToken")`                                                                                                    | Quoted string (`"ey..."`). Should not be used since there are issues if the user opens diffent _apps_ in various tabs. Read value from `sessionStorage` instead. |
| Access token expiration (legacy) | `localStorage.getItem("CLX.TokenExpire")`                                                                                                   | Unix timestamp in milliseconds when access token expires as string.                                                                                              |
| User's locale                    | • `localStorage.getItem("uiCulture")`<br>• Document's `lang` attribute (`<html lang="de-CH">`)<br>• `culture_info` property in access token | String of user's locale such as `de-CH` or `fr-CH`                                                                                                               |

Note: _Apps_ should only read, never update the provided values in session- or localStorage.

## Getting Started

Install the dependencies:

```
npm install
```

Copy `public/settings.example.js` to `public/settings.js` and adjust its contents.

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

## Responsive Design

Mobile breakpoints:

- bigger than 1920px: content centered
- smaller than 1200px: hamburger menu
- smaller than 767px: mobile compact

## I18n

The portal is translated using [lit-localize](https://lit.dev/docs/localization/overview/). The texts of the base language (german) are contained in the source files. The other languages (currently only french) can be translated using a [XLIFF](https://en.wikipedia.org/wiki/XLIFF) file.

### Translation Workflow

Update the french translation file by extracting the base language texts from the source files:

```
npm run locale:extract
```

The generated translation file `xliff/fr-CH.xlf` can then be edited manually with a text editor or more conveniently with a XLIFF-compatible editor like [Poedit](https://poedit.net/) (open source).

When all texts are translated, generate the locale artifacts:

```
npm run locale:build
```

## Authentication via OAuth 2.0

The _Evento Portal_ is handling the authentication using the the [OAuth 2.0 Authorization Code Flow mit Proof Key for Code Exchange (PKCE)](https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/Login-OAuth-Server/#authorization-code-flow-mit-proof-key-for-code-exchange-pkce). It makes sure the user is authenticated and an access token is available in sessionStorage under the `CLX.LoginToken` key to be used by the _apps_.

The flow works as follows:

- A random _code verifier_ is generated and remembered in sessionStorage. Then the user is redirected to the [OAuth login page](https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/Login-OAuth-Server/#login-mit-dem-formular) with a _code challenge_ (i.e. a hash of the _code verifier_).
- The user is redirected back from the login page to the _Evento Portal_ with a resulting _code_.
- The _Evento Portal_ exchanges this _code_ together with the original _code verifier_ for an access & refresh token using the [token endpoint](https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/Login-OAuth-Server/#authorization-code-flow-mit-proof-key-for-code-exchange-pkce) (XHR). The tokens are then stored in localStorage (see [storage.ts](src/utils/storage.ts)).

For the implementation/details see [auth.ts](src/utils/auth.ts).

### About Tokens & Scopes

The access tokens are bound to a specific [OAuth scope](https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/ApplicationScopes_Intro/) that is specified when getting a token via login page or refresh token endpoint. Each _app_ requires a certain scope since the scope determines what the user can access. Due to this design by the _Evento API_, it is not possible to aquire and work with a single token for multiple scopes.

The _Evento Portal_ handles tokens & scopes as follows:

- Depending on the current URL (i.e. _app_) it determines the required scope ("current scope").
- For each scope, the fetched access token as well as the latest refresh token are stored in localStorage. The access token for the "current scope" is stored in sessionStorage under the `CLX.LoginToken` key.
- Initially an access token is fetched for the "current scope" via the login form. For subsequent navigations the access token for the new scope is either loaded from localStorage (if already cached), or fetched via the refresh token endpoint for the new scope (and then also cached for later usages).

### Token Refreshing

Apparently, at the time writing this, the _Evento API_ does not provide any way to refresh tokens asynchronously. We therefore do the following whenever the scope changes (i.e. the user clicked in the navigation):

- If the refresh token expired, redirect to the login page.
- If the access token half expired, redirect to the [refresh token endpoint](https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/RefreshToken/) to get a new one. Like this, we try to make sure that the token does not expire during usage of the _apps_. If they do expire, the user must reload the app and a new token is fetched.

### Login with BrowserStack

For untrusted IP ranges, the OAuth provider requires 2FA to login with the test users (i.e. you can't login). If you are in a trusted IP range and want to test the _Evento Portal_ using BrowserStack, you can use [local testing](https://www.browserstack.com/docs/live/local-testing) and activate the _Resolve all URLs through my network_ option.
