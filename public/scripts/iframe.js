/**
 * This script is executed within the apps' iframe and allows to setup
 * aspects that have to be controlled from within the iframe.
 */

///// iframe resizing /////

/*
 * Observes the size of the HTML element and triggers a message with the new height if the size changes.
 * Can be used to dynamically adjust the height of an iframe.
 */
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const height = entry.contentBoxSize
      ? entry.contentBoxSize[0].blockSize
      : entry.contentRect.height;
    parent.window.postMessage(
      { type: "bkdAppResize", height },
      window.parent.origin
    );
  }
});

window.onload = () => {
  resizeObserver.observe(document.documentElement);
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
