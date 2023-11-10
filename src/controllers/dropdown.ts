import { ReactiveController, ReactiveControllerHost } from "lit";

export class DropdownController implements ReactiveController {
  open = false;

  private get items(): ReadonlyArray<HTMLElement> {
    const items = this.itemQueries?.queryItems && this.itemQueries.queryItems();
    return Array.from(items ?? []);
  }

  private get focusedItem(): HTMLElement | null {
    return this.itemQueries?.queryFocused
      ? this.itemQueries.queryFocused()
      : null;
  }

  constructor(
    private host: ReactiveControllerHost,
    private toggleButtonId: string,
    private menuId: string,
    private itemQueries?: {
      /**
       * Returns all dropdown items
       */
      queryItems: () => NodeListOf<HTMLElement> | null;

      /**
       * Returns the currently focused item
       */
      queryFocused: () => HTMLElement | null;
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
      this.closeOthers();
      this.addListeners();
    } else {
      this.removeListeners();
    }
  }

  close(): void {
    if (this.open) {
      this.toggle();
    }
  }

  private addListeners(): void {
    document.addEventListener("click", this.handleClick, true);
    document.addEventListener("keydown", this.handleKeydown, true);
    document.addEventListener(
      "bkddropdowntoggleclose",
      this.handleCloseOthers as EventListener,
    );
  }

  private removeListeners(): void {
    document.removeEventListener("click", this.handleClick, true);
    document.removeEventListener("keydown", this.handleKeydown, true);
    document.removeEventListener(
      "bkddropdowntoggleclose",
      this.handleCloseOthers as EventListener,
    );
  }

  private handleClick = (event: MouseEvent) => {
    if (!this.targetMatchesId(event, [this.toggleButtonId, this.menuId])) {
      this.close();
    }
  };

  private handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
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

  private handleCloseOthers = (
    event: CustomEvent<{ source: DropdownController }>,
  ) => {
    const { source } = event.detail;
    if (source !== this) {
      this.close();
    }
  };

  private closeOthers(): void {
    document.dispatchEvent(
      new CustomEvent<{ source: DropdownController }>(
        "bkddropdowntoggleclose",
        { detail: { source: this } },
      ),
    );
  }

  /**
   * Whether the event originates from an element with any of the given ids.
   */
  private targetMatchesId(event: Event, ids: ReadonlyArray<string>): boolean {
    // Apparently we cannot use `closest` due to shadow dom
    // restrictions, but we can observe the `composedPath`
    return event
      .composedPath()
      .some((element) => ids.includes((element as HTMLElement).id));
  }
}
