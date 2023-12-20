[back](../README.md)

# Architecture

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

A static build of the _apps_ is committed to this repository in the [public/apps/](../public/apps/) directory. The _Evento Portal_ loads the _apps_ in an `<iframe>` to ensure a separation of the runtime environment, a proper cleanup when switching _apps_ and no memory leaks. For more details see [App Integration with iframe](./app-integration.md).

_Apps_ can use client-side hash-routing, that means using the [hash part](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash) of the URL to store application state. The _Evento Portal_ ensures, that the hash part is mapped from the `<iframe>`'s URL to the browser URL and vice versa.

Furthemore an _app_ can rely on the following information that is provided by the _Evento Portal_:

| What                             | Where                                                                                                                                       | Note                                                                                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Access token                     | `sessionStorage.getItem("CLX.LoginToken")`                                                                                                  | Quoted string (`"ey..."`)                                                                                                                                        |
| Access token (legacy)            | `localStorage.getItem("CLX.LoginToken")`                                                                                                    | Quoted string (`"ey..."`). Should not be used since there are issues if the user opens diffent _apps_ in various tabs. Read value from `sessionStorage` instead. |
| Access token expiration (legacy) | `localStorage.getItem("CLX.TokenExpire")`                                                                                                   | Unix timestamp in milliseconds when access token expires as string.                                                                                              |
| User's locale                    | • `localStorage.getItem("uiCulture")`<br>• Document's `lang` attribute (`<html lang="de-CH">`)<br>• `culture_info` property in access token | String of user's locale such as `de-CH` or `fr-CH`                                                                                                               |

Note: _Apps_ should only read, never update the provided values in session- or localStorage.
