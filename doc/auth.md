[back](../README.md)

# Authentication via OAuth 2.0

The _Evento Portal_ is handling the authentication using the the [OAuth 2.0 Authorization Code Flow mit Proof Key for Code Exchange (PKCE)](https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/Login-OAuth-Server/#authorization-code-flow-mit-proof-key-for-code-exchange-pkce). It makes sure the user is authenticated and an access token is available in sessionStorage under the `CLX.LoginToken` key to be used by the _apps_.

The flow works as follows:

- A random _code verifier_ is generated and remembered in sessionStorage. Then the user is redirected to the [OAuth login page](https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/Login-OAuth-Server/#login-mit-dem-formular) with a _code challenge_ (i.e. a hash of the _code verifier_).
- The user is redirected back from the login page to the _Evento Portal_ with a resulting _code_.
- The _Evento Portal_ exchanges this _code_ together with the original _code verifier_ for an access & refresh token using the [token endpoint](https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/Login-OAuth-Server/#authorization-code-flow-mit-proof-key-for-code-exchange-pkce) (XHR). The tokens are then stored in localStorage (see [storage.ts](src/utils/storage.ts)).

For the implementation/details see [auth.ts](../src/utils/auth.ts).

## About Tokens & Scopes

The access tokens are bound to a specific [OAuth scope](https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/ApplicationScopes_Intro/) that is specified when getting a token via login page or refresh token endpoint. Each _app_ requires a certain scope since the scope determines what the user can access. Due to this design by the _Evento API_, it is not possible to aquire and work with a single token for multiple scopes.

The _Evento Portal_ handles tokens & scopes as follows:

- Depending on the current URL (i.e. _app_) it determines the required scope ("current scope").
- For each scope, the fetched access token as well as the latest refresh token are stored in localStorage. The access token for the "current scope" is stored in sessionStorage under the `CLX.LoginToken` key.
- Initially an access token is fetched for the "current scope" via the login form. For subsequent navigations the access token for the new scope is either loaded from localStorage (if already cached), or fetched via the refresh token endpoint for the new scope (and then also cached for later usages).

## Token Refreshing

Apparently, at the time writing this, the _Evento API_ does not provide any way to refresh tokens asynchronously. We therefore do the following whenever the scope changes (i.e. the user clicked in the navigation):

- If the refresh token expired, redirect to the login page.
- If the access token half expired, redirect to the [refresh token endpoint](https://clx-evento.bitbucket.io/master_eventodoc/Api/Autorisierung/RefreshToken/) to get a new one. Like this, we try to make sure that the token does not expire during usage of the _apps_. If they do expire, the user must reload the app and a new token is fetched.

## Login with BrowserStack

For untrusted IP ranges, the OAuth provider requires 2FA to login with the test users (i.e. you can't login). If you are in a trusted IP range and want to test the _Evento Portal_ using BrowserStack, you can use [local testing](https://www.browserstack.com/docs/live/local-testing) and activate the _Resolve all URLs through my network_ option.
