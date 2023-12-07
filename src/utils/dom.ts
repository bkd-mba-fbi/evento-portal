/**
 * Returns whether the given `target` is a descendant node of
 * `element`, including all contained shadow trees.
 */
export function isEqualOrContains(
  element: Element | ShadowRoot,
  target: HTMLElement,
): boolean {
  if (element === target || element.contains(target)) return true;

  // Traverse through shadow tree of given element
  if ("shadowRoot" in element && element.shadowRoot) {
    return isEqualOrContains(element.shadowRoot, target);
  }

  // Traverse through shadow trees of children of the given element
  for (const child of Array.from(element.children)) {
    if (isEqualOrContains(child, target)) {
      return true;
    }
  }

  return false;
}
