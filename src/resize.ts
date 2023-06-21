/*
 * Observes the size of the HTML element and triggers a message with the new height if the size changes.
 * Can be used to dynamically adjust the height of an iframe.
 */

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const height = entry.contentBoxSize
      ? entry.contentBoxSize[0].blockSize
      : entry.contentRect.height;
    parent.window.postMessage({ height }, window.parent.origin); // TODO target
  }
});

window.onload = () => {
  resizeObserver.observe(document.documentElement);
};
