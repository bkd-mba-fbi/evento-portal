[back](../README.md)

# App Integration & API

## Build Artefacts in public/ Directory

A static build of the _apps_ is committed to this repository in the [public/apps/](../public/apps/) directory. In case of the [webapp-schulverwaltung](https://github.com/bkd-mba-fbi/webapp-schulverwaltung) this happens automatically via a GitHub Actions Workflow. For the other _apps_ the latest build has to be committed manually.

For more details see [Deployment View](./sad.md#deployment-view).

## Integration via iframe

The _Evento Portal_ loads the _apps_ in an `<iframe>` to ensure a proper separation of the runtime environment. For more details on this decision see [ADR 2: App Integration via iframe](./sad.md#adr-2-app-integration-via-iframe).

To [compensate the limitations](./iframe.md) of the `<iframe>` and setup communication between the _Evento Portal_ and the _app_, each _app_ has to include the [public/scripts/iframe.js](../public/scripts/iframe.js) script in its `index.html`:

```
<body>
  <!-- App contents... -->
  <script src="../../scripts/iframe.js" type="module"></script>
</body>
```

## App Routing

_Apps_ can use client-side hash-routing, that means using the [hash part](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash) of the URL to store application state. The _Evento Portal_ ensures, that the hash part is mapped from the `<iframe>`'s URL to the browser URL and vice versa.

## Evento Portal ↔ App API

An _app_ can rely on the following information that is provided by the _Evento Portal_:

| What                             | Where                                                                                                                                       | Note                                                                                                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Access token                     | `sessionStorage.getItem("CLX.LoginToken")`                                                                                                  | Value: quoted string (`"ey..."`)                                                                                                                                                 |
| Access token (legacy)            | `localStorage.getItem("CLX.LoginToken")`                                                                                                    | Value: quoted string (`"ey..."`) <br> ⚠️ Should not be used since there are issues if the user opens different _apps_ in various tabs. Read value from `sessionStorage` instead. |
| Access token expiration (legacy) | `localStorage.getItem("CLX.TokenExpire")`                                                                                                   | Value: Unix timestamp in milliseconds when access token expires as string.                                                                                                       |
| User's locale                    | • `localStorage.getItem("uiCulture")`<br>• Document's `lang` attribute (`<html lang="de-CH">`)<br>• `culture_info` property in access token | Value: string of user's locale such as `de-CH` or `fr-CH`                                                                                                                        |

⚠️ Important: _apps_ should only read, never update the provided values in session- or localStorage.
