import { ReactiveController, ReactiveControllerHost } from "lit";

export class DropdownToggleController implements ReactiveController {
  open = false;

  constructor(
    private host: ReactiveControllerHost,
    private toggleButtonId: string,
    private menuId: string
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
      this.handleCloseOthers as EventListener
    );
  }

  private removeListeners(): void {
    document.removeEventListener("click", this.handleClick, true);
    document.removeEventListener("keydown", this.handleKeydown, true);
    document.removeEventListener(
      "bkddropdowntoggleclose",
      this.handleCloseOthers as EventListener
    );
  }

  private handleClick = (event: MouseEvent) => {
    if (!this.targetMatchesId(event, [this.toggleButtonId, this.menuId])) {
      this.close();
    }
  };

  private handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  private handleCloseOthers = (
    event: CustomEvent<{ source: DropdownToggleController }>
  ) => {
    const { source } = event.detail;
    if (source !== this) {
      this.close();
    }
  };

  private closeOthers(): void {
    document.dispatchEvent(
      new CustomEvent<{ source: DropdownToggleController }>(
        "bkddropdowntoggleclose",
        { detail: { source: this } }
      )
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
