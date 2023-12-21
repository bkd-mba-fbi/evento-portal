import { ReactiveController, ReactiveControllerHost } from "lit";
import { isEqualOrContains } from "../utils/dom";

export class DropdownController implements ReactiveController {
  open = false;

  private get toggleElement(): HTMLElement | ShadowRoot | null {
    return this.options.queryToggleElement();
  }

  private get menuElement(): HTMLElement | ShadowRoot | null {
    return this.options.queryMenuElement();
  }

  private get items(): ReadonlyArray<HTMLElement> {
    const items = this.options?.queryItems && this.options.queryItems();
    return Array.from(items ?? []);
  }

  private get focusedItem(): HTMLElement | null {
    return this.options?.queryFocused ? this.options.queryFocused() : null;
  }

  constructor(
    private host: ReactiveControllerHost & HTMLElement,
    private options: {
      /**
       * Returns the dropdown toggle element
       */
      queryToggleElement: () => HTMLElement | ShadowRoot | null;

      /**
       * Returns the dropdown menu element
       */
      queryMenuElement: () => HTMLElement | ShadowRoot | null;

      /**
       * Per default the dropdown menu is closed when the user presses tab and
       * the focus continues outside of the dropdown. Set to true to keep menu
       * open and continue with focus inside dropdown.
       */
      tabInside?: boolean;

      /**
       * Returns all dropdown items
       */
      queryItems?: () => NodeListOf<HTMLElement> | null;

      /**
       * Returns the currently focused item
       */
      queryFocused?: () => HTMLElement | null;
    },
  ) {
    this.host.addController(this);
  }

  hostDisconnected(): void {
    this.removeListeners();
  }

  toggle(): void {
    this.open = !this.open;
    this.host.requestUpdate();

    if (this.open) {
      this.addListeners();
    } else {
      setTimeout(() => {
        this.removeListeners();
      });
    }
  }

  close(): void {
    if (this.open) {
      this.toggle();
    }
  }

  /**
   * Use this function to escape current callstack to avoid
   * interfering with any toggle calls that would reopen the menu
   * again instead of closing it.
   */
  private closeDeferred(): void {
    setTimeout(() => this.close());
  }

  private addListeners(): void {
    // Make sure to register events after rendering, for elements to
    // be present
    setTimeout(() => {
      if (this.options.tabInside) {
        this.menuElement?.addEventListener("focusout", this.closeOnBlur, true);
      }

      // To detect clicks into iframe, add event listener to iframe
      // document
      this.iframeDocument?.addEventListener(
        "click",
        this.handleIframeClick,
        true,
      );
    });
    document.addEventListener("click", this.handleDocumentClick, true);

    this.host.addEventListener("keydown", this.handleKeydown, true);
  }

  private removeListeners(): void {
    if (this.options.tabInside) {
      this.menuElement?.removeEventListener("focusout", this.closeOnBlur, true);
    }
    document.removeEventListener("click", this.handleDocumentClick, true);
    this.iframeDocument?.removeEventListener(
      "click",
      this.handleIframeClick,
      true,
    );

    this.host.removeEventListener("keydown", this.handleKeydown, true);
  }

  /**
   * Close dropdown when tabbing out of menu.
   */
  private closeOnBlur = (event: Event) => {
    if (this.menuElement && "relatedTarget" in event) {
      if (!this.menuElement.contains(event.relatedTarget as Node | null)) {
        this.closeDeferred();
      }
    }
  };

  /**
   * Close dropdown when clicking outside of toggle and menu
   */
  private handleDocumentClick = (event: MouseEvent) => {
    const target = event.composedPath()[0] as HTMLElement | undefined;
    if (!target) return;

    const outsideToggle =
      this.toggleElement && !isEqualOrContains(this.toggleElement, target);
    const outsideMenu =
      this.menuElement && !isEqualOrContains(this.menuElement, target);
    if (outsideToggle && outsideMenu) {
      this.closeDeferred();
    }
  };

  /**
   * Close dropdown when clicking into iframe
   */
  private handleIframeClick = () => {
    this.closeDeferred();
  };

  private handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "Tab": {
        if (!this.options.tabInside) this.close();
        break;
      }
      case "Escape": {
        this.close();
        break;
      }
      case "ArrowDown": {
        const next = this.items[this.nextLinkIndex(1)];
        next?.focus();
        break;
      }
      case "ArrowUp": {
        const previous = this.items[this.nextLinkIndex(-1)];
        previous?.focus();
        break;
      }
    }
  };

  private get iframeDocument() {
    const portal = document.querySelector("bkd-portal")?.shadowRoot;
    const content = portal?.querySelector("bkd-content")?.shadowRoot;
    const iframe = content?.querySelector("iframe");
    return iframe?.contentDocument ?? null;
  }

  private activeLinkIndex(): number | null {
    const index = this.focusedItem ? this.items.indexOf(this.focusedItem) : -1;
    return index === -1 ? null : index;
  }

  private nextLinkIndex(offset: number): number {
    const active = this.activeLinkIndex();
    const first = 0;
    const last = this.items.length - 1;

    if (active === null) {
      return offset > 0 ? first : last;
    }

    const next = active + offset;
    if (next > last) return first;
    if (next < first) return last;
    return next;
  }
}
