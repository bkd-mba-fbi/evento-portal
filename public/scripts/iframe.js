// @ts-check

/**
 * This script is executed within the apps' iframe and allows to setup
 * aspects that have to be controlled from within the iframe.
 */

///// iframe resizing /////

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
      if (
        node instanceof HTMLElement &&
        (node.style?.position === "absolute" ||
          node.style?.position === "fixed" ||
          node.style?.position === "sticky")
      ) {
        positionedNodes.push(node);
        postAppResize();
      }
    });

    mutation.removedNodes.forEach((node) => {
      const index = positionedNodes.findIndex((n) => n === node);
      if (index >= 0) {
        positionedNodes = positionedNodes.splice(index, 1);
        postAppResize();
      }
    });
  });
});

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

  parent.window.postMessage(
    {
      type: "bkdAppResize",
      height: Math.max(maxBottom, viewportHeight),
    },
    window.parent.origin
  );
}

/**
 * @returns {number}
 */
function getMaxPositionedBottom() {
  return positionedNodes.reduce((maxBottom, node) => {
    const nodeBottom =
      node instanceof HTMLElement
        ? node.getBoundingClientRect().top + node.clientHeight
        : 0;
    return Math.max(maxBottom, nodeBottom);
  }, 0);
}

window.onload = () => {
  resizeObserver.observe(document.documentElement);

  const body = document.querySelector("body");
  if (body) {
    mutationObserver.observe(body, {
      subtree: true,
      childList: true,
    });
  }
};

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
    parent.window.origin
  );
};

// Post replaceState calls to parent window
const replaceState = history.replaceState;
history.replaceState = (...args) => {
  replaceState.call(history, ...args);
  parent.window.postMessage(
    { type: "bkdAppReplaceState", args },
    parent.window.origin
  );
};

// Post hashchange events to parent window
window.addEventListener("hashchange", (event) => {
  parent.window.postMessage(
    { type: "bkdAppHashChange", url: event.newURL },
    parent.window.origin
  );
});
