# Browser support

[back](../README.md)

We support the evergreen browsers (Chrome, Firefox, Safari, Edge).

## Testing with BrowserStack

When testing browser compatibility with [BrowserStack](https://www.browserstack.com/), consider the following combination of Dev Server and URL to use.

| OS        | Browser               | Dev Server                   | URL                        | Additional configuration                                                                                     |
| --------- | --------------------- | ---------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Windows   | Chrome, Firefox, Edge | `npm start`                  | `http://localhost:3000`    |                                                                                                              |
| Android   | Chrome                | `npm start`                  | `http://localhost:3000`    |                                                                                                              |
| macOS/iOS | Safari                | `npm run start:browserstack` | `http://bs-local.com:3000` | Add `127.0.0.1 bs-local.com` to `/etc/hosts`<br/>Change `oAuthClientId` to `"browserstack"` In `settings.js` |

In order to log in without two-factor authentication, you will need to enable _Resolve all URLs through my network_ under [_Local testing_](https://www.browserstack.com/docs/live/local-testing/test-using-local-testing#test-websites-hosted-on-private-or-internal-servers).
