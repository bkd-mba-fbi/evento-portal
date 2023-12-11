[back](../README.md)

# iframe Limitations & Workarounds

The integration of the various _apps_ (i.e. micro frontends) is achieved with an `<iframe>`, see [ADR 2: App Integration via iframe](./sad.md#adr-2-app-integration-via-iframe) for more details on this decision. The `<iframe>` is rendered in the [\<bkd-content\>](../src/components/Content.ts) component. However, this method comes with some trade-offs & issues.

The [public/scripts/iframe.js](../public/scripts/iframe.js) script solves most of these issues and has to be included in an _app_'s `index.html`. It sets up communication between portal & iframe and initializes workarounds.

## URL Synchronization

_Apps_ can use client-side hash-routing, that means using the [hash part](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash) of the URL to store application state. The _Evento Portal_ ensures, that the hash part is mapped from the `<iframe>`'s URL to the URL in the browser's location bar and vice versa. This synchronization is achieved as follows:

- `iframe.js`: Wraps the history API in the iframe to post messages about state changes to the _Evento Portal_:
  - `history.pushState` in iframe → `bkdAppPushState` message in portal
  - `history.replaceState` in iframe → `bkdAppReplaceState` message in portal
  - `hashchange` event in iframe → `bkdAppHashChange` message in portal
- `<bkd-portal>` component: Registers the above message events and updates the portal state & URL. It also registers the `hashchange` event to propagate changes of the browser's URL to the iframe URL.

## iframe Resizing

Since an iframe has a fixed size, its width & height have to be constantly adjusted to the _app_'s document/contents. A special challenge are absolute positioned elements (like dropdowns or overlays) that just overflow if larger than the document and not cause the document to grow.

The resizing of the iframe is implemented as such:

- `iframe.js`: A `ResizeObserver` is used to track changes to the overall height of the _app_'s document. A `bkdAppResize` message is posted if the height changes.
- `iframe.js`: A `MutationObserver` is used to track the addition or removal of any absolute positioned nodes and to determine the bottom most element with absolute positioning. A `bkdAppResize` message is posted if the height changes.
- `<bkd-content>` component: Registers the `bkdAppResize` messages and sets the given height on the `<iframe>`.

## Scrolling

Since the iframe is constantly resized, it never has a vertical scrollbar. This is an issue when _apps_ want to scroll programmatically. Thus the `frame.js` scripts monkey-patches the following parts of the browser API to apply the scrolling in the _Evento Portal_ window instead, incorporating the iframe's top offset:

- `window.scrollTo` & `window.scroll`
- `window.scrollBy`
- `window.scrollY` & `window.pageYOffset`
- `Element.prototype.getBoundingClientRect`
- `Element.prototype.scrollIntoView` (an element is always top aligned, the `alignToTop`, `block` and `inline` options are not supported)

These functions/properties can be used safely by _apps_. What does not work is the `scroll` event.

## Positioning of Elements

Positioning elements relative to the viewport/scroll position – such as modal dialogs – is an issue. The CSS rule `position: fixed` does not work, since the iframe is not a scrolling container (the element will stick to the top of the iframe in this case). _Apps_ have to consider the _Evento Portal_ window's scroll position and the iframe's offset in this case.

Checkout the [BkdModalService](https://github.com/bkd-mba-fbi/webapp-schulverwaltung/blob/main/src/app/shared/services/bkd-modal.service.ts) of the webapp-schulverwaltung as an example.

## Language Attribute

The `iframe.js` script applies the _Evento Portal_'s HTML `lang` attribute to the _app_'s document.
