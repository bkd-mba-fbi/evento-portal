# Browser Testing

[back](../README.md)

## Requirements

We support the evergreen browsers (Chrome, Firefox, Safari, Edge).

## BrowserStack.com

### Live Testing

When testing browser compatibility with [BrowserStack](https://www.browserstack.com/), consider the following combination of Dev Server and URL to use.

| OS        | Browser               | Dev Server                   | URL                        | Additional configuration                                                                                     |
| --------- | --------------------- | ---------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Windows   | Chrome, Firefox, Edge | `npm start`                  | `http://localhost:3000`    |                                                                                                              |
| Android   | Chrome                | `npm start`                  | `http://localhost:3000`    |                                                                                                              |
| macOS/iOS | Safari                | `npm run start:browserstack` | `http://bs-local.com:3000` | Add `127.0.0.1 bs-local.com` to `/etc/hosts`<br/>Change `oAuthClientId` to `"browserstack"` In `settings.js` |

### Authentication & 2FA

For untrusted IP ranges, the OAuth provider requires 2FA to login with the test users (i.e. you can't login). If you are in a trusted IP range and want to test the _Evento Portal_ using BrowserStack, you can use [local testing](https://www.browserstack.com/docs/live/local-testing) and activate the _Resolve all URLs through my network_ option.
