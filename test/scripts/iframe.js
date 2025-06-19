// @ts-check

/**
 * This script is executed within the apps' iframe and allows to setup
 * aspects that have to be controlled from within the iframe.
 */

///// iframe resizing /////

/**
 * Fix scrollbar flickering on iframe resizing. Hidden overflow-y on html element.
 */
document.documentElement.style.overflowY = "hidden";

/**
 * An array to track the absolute positioned elements
 *
 * @type {Array<Node>}
 */
let positionedNodes = [];

/**
 * Observes the size of the HTML element and triggers a message with
 * the new height if the size changes. The parent window will then
 * dynamically adjust the height of the iframe.
 */
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const height = entry.contentBoxSize
      ? entry.contentBoxSize[0].blockSize
      : entry.contentRect.height;
    postAppResize(height);
  }
});

/**
 * Observes absolute positioned elements that are added/removed
 * from/to the DOM and triggers a message with the new height. The
 * parent window will then dynamically adjust the height of the
 * iframe.
 */
const mutationObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (isAbsolutePositioned(node)) {
        positionedNodes.push(node);
        postAppResize();
      }
    });

    mutation.removedNodes.forEach((node) => {
      const index = positionedNodes.findIndex((n) => n === node);
      if (index >= 0) {
        positionedNodes.splice(index, 1);
        postAppResize();
      }
    });
  });
});

/**
 * @param {Node} node
 * @returns {boolean}
 */
function isAbsolutePositioned(node) {
  if (!(node instanceof HTMLElement)) return false;

  // For some nodes we have to consider the computed style to get the
  // correct position value, but to avoid any performance issues we
  // only do this for the nodes where it is a problem.
  const position =
    node.nodeName === "NG-DROPDOWN-PANEL"
      ? getComputedStyle(node).position
      : node.style?.position;

  return (
    position === "absolute" || position === "fixed" || position === "sticky"
  );
}

/**
 * Notify the parent window that the iframe should be resized, either
 * to the body height, or to the lowest bottom of any absolute
 * positioned element.
 *
 * @param {number=} height
 * @returns {void}
 */
function postAppResize(height) {
  const viewportHeight =
    height ?? document.documentElement.getBoundingClientRect().height;
  const maxBottom = getMaxPositionedBottom();

  const tolerance = 10; // Add some tolerance to show complete content of iframe and prevent scrollbar
  parent.window.postMessage(
    {
      type: "bkdAppResize",
      height: Math.max(maxBottom + tolerance, viewportHeight),
    },
    window.parent.origin,
  );
}

/**
 * @returns {number}
 */
function getMaxPositionedBottom() {
  return positionedNodes.reduce((maxBottom, node) => {
    const nodeBottom =
      node instanceof HTMLElement
        ? window.scrollY + node.getBoundingClientRect().top + node.clientHeight
        : 0;
    return Math.max(maxBottom, nodeBottom);
  }, 0);
}

window.addEventListener("load", () => {
  // For reasons we don't understand, the <body> in the
  // kursauschreibung app always has full height in Chrome (not in
  // Firefox), although there is no CSS causing this and the child
  // element is smaller. As a workaround we observe the child in the
  // kursausschreibung app. See also
  // https://github.com/bkd-mba-fbi/evento-portal/issues/117
  const mainElement =
    (document.getElementById("kursausschreibung-root") &&
      document.querySelector("body > div")) ||
    document.documentElement;
  resizeObserver.observe(mainElement);

  const body = document.querySelector("body");
  if (body) {
    mutationObserver.observe(body, {
      subtree: true,
      childList: true,
    });
  }
});

///// HTML lang attribute updating /////

const url = new URL(parent.window.location.href);
const locale = url.searchParams.get("locale");
if (typeof locale === "string") {
  document.documentElement.lang = locale;
}

///// Notify portal on state (URL) changes /////

// Post pushState calls to parent window
const pushState = history.pushState;
history.pushState = (...args) => {
  pushState.call(history, ...args);
  parent.window.postMessage(
    { type: "bkdAppPushState", args },
    parent.window.origin,
  );
};

// Post replaceState calls to parent window
const replaceState = history.replaceState;
history.replaceState = (...args) => {
  replaceState.call(history, ...args);
  parent.window.postMessage(
    { type: "bkdAppReplaceState", args },
    parent.window.origin,
  );
};

// Post hashchange events to parent window
window.addEventListener("hashchange", (event) => {
  parent.window.postMessage(
    { type: "bkdAppHashChange", url: event.newURL },
    parent.window.origin,
  );
});

///// Scrolling /////

// Since the iframe is always resized to contain the full height of
// its contents (with the observers above), it never has
// scrollbars. So if the app wants to scroll vertically or read the
// vertical scroll position, we have to do this in the Evento Portal
// window, while also considering the iframe's top-offset within the
// portal. Therefore we monkey-patch the scroll-relevant browser APIs
// to make the app's scroll logic work.

/**
 * @type {any}
 */
const iFrameScrollTo = window.scrollTo;

/**
 * Monkey-patch `window.scrollTo` & `window.scroll` to scroll Evento
 * Portal window instead.
 *
 * @param {...*} args
 * @returns {void}
 */
function patchedScrollTo(...args) {
  if (args.length === 2) {
    const [x, y] = args;

    // Scroll portal vertically
    window.parent.scrollTo(0, y + getPortalOffset());

    // Scroll iframe horizontally
    iFrameScrollTo.call(window, x, 0);
  } else if (args[0]) {
    const { top, left, behavior } = args[0];
    if (top != null) {
      // Scroll portal vertically
      window.parent.scrollTo({
        top: top + getPortalOffset(),
        behavior,
      });
    }
    if (left != null) {
      // Scroll iframe horizontally
      iFrameScrollTo.call(window, { left, behavior });
    }
  }
}
window.scrollTo = patchedScrollTo;
window.scroll = patchedScrollTo;

/**
 * @type {any}
 */
const iFrameScrollBy = window.scrollBy;

/**
 * Monkey-patch `window.scrollBy` to scroll Evento Portal window
 * instead.
 *
 * @param {...*} args
 * @returns {void}
 */
function patchedScrollBy(...args) {
  if (args.length === 2) {
    const [x, y] = args;

    // Scroll portal vertically
    window.parent.scrollBy(0, y);

    // Scroll iframe horizontally
    iFrameScrollBy.call(window, x, 0);
  } else if (args[0]) {
    const { top, left, behavior } = args[0];
    if (top != null) {
      // Scroll portal vertically
      window.parent.scrollBy({ top, behavior });
    }
    if (left != null) {
      // Scroll iframe horizontally
      iFrameScrollBy.call(window, { left, behavior });
    }
  }
}
window.scrollBy = patchedScrollBy;

/**
 * Monkey-patch the `window.scrollY` & `window.pageYOffset`
 * read-only properties to return the Evento Portal window's scroll
 * position instead.
 *
 * @returns {number}
 */
function patchedScrollY() {
  return Math.max(window.parent.scrollY - getPortalOffset(), 0);
}
Object.defineProperty(window, "scrollY", { get: patchedScrollY });
Object.defineProperty(window, "pageYOffset", { get: patchedScrollY });

const iFrameGetBoundingClientRect = Element.prototype.getBoundingClientRect;

/**
 * Monkey-patch `Element.prototype.getBoundingClientRect` to
 * incorporate Evento Portal window scroll position.
 *
 * @returns {DOMRect}
 * @this {Element}
 */
function patchedGetBoundingClientRect() {
  const rect = iFrameGetBoundingClientRect.call(this);
  const y = rect.y - window.scrollY;
  return new DOMRect(rect.x, y, rect.width, rect.height);
}
Element.prototype.getBoundingClientRect = patchedGetBoundingClientRect;

/**
 * Monkey-patch `window.scrollIntoView` to scroll Evento Portal window
 * instead.
 *
 * @param {Parameters<typeof Element.prototype.scrollIntoView>[0]} arg
 * @returns {void}
 * @this {Element}
 */
function patchedScrollIntoView(arg) {
  let behavior;
  if (typeof arg === "object") {
    behavior = arg?.behavior;
    if (arg?.block) {
      console.warn(
        "The block option is not supported by the simulated scrollIntoView of the Evento Portal",
      );
    }
    if (arg?.inline) {
      console.warn(
        "The inline option is not supported by the simulated scrollIntoView of the Evento Portal",
      );
    }
  } else if (typeof arg === "boolean") {
    console.warn(
      "The alignToTop option is not supported by the simulated scrollIntoView of the Evento Portal",
    );
  }

  const { top, bottom } = this.getBoundingClientRect();
  const viewportTop = window.parent.scrollY;
  const viewportBottom = viewportTop + window.parent.innerHeight;
  const offset = getPortalOffset();

  if (top + offset < viewportTop || bottom + offset > viewportBottom) {
    window.parent.scrollTo({ top: top + offset, behavior });
  }
}
Element.prototype.scrollIntoView = patchedScrollIntoView;

/**
 * Returns the offset of the iframe to the top of the Evento Portal
 * document.
 *
 * @returns {number}
 */
function getPortalOffset() {
  const parentDocument = window.parent.document;
  const portalRoot = parentDocument?.querySelector("bkd-portal")?.shadowRoot;
  const contentRoot = portalRoot?.querySelector("bkd-content")?.shadowRoot;
  const iframe = contentRoot?.querySelector("iframe");
  return (
    (iframe?.getBoundingClientRect()?.top ?? 0) +
    parentDocument.documentElement.scrollTop
  );
}
