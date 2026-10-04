import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";


export default class ModalDialog {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Accessing to DOM ─────────────────────────────────────────────────────────────────────────────────────────── */
  protected static readonly TITLE_ELEMENT_SELECTOR: string = ".ModalDialog--YDF-Title";


  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected rootElement: HTMLElement;
  protected titleElement: Element;


  /* ─── Reactivity ───────────────────────────────────────────────────────────────────────────────────────────────── */
  /* eslint-disable no-underscore-dangle -- [ CONVENTION ]
   * The instance fields begins from the underscore MUST be changed only via setters or constructor. */
  protected _title: string = "";
  private _isDisplaying: boolean = false;


  protected get $title(): string {
    return this._title;
  }

  protected set $title(value: string) {
    this._title = value;
    this.titleElement.textContent = this._title;
  }

  public get $isDisplaying(): boolean {
    return this._isDisplaying;
  }

  public set $isDisplaying(value: boolean) {
    if (this._isDisplaying !== value) {
      this._isDisplaying = value;
      this.rootElement.toggleAttribute("hidden");
    }
  }
  /* eslint-enable no-underscore-dangle */


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(rootElementSelector: string) {

    this.rootElement = getExpectedToBeSingleDOM_Element({
      selector: rootElementSelector,
      expectedDOM_ElementSubtype: HTMLElement
    });

    this.titleElement = getExpectedToBeSingleDOM_Element({
      selector: ModalDialog.TITLE_ELEMENT_SELECTOR,
      contextElement: this.rootElement
    });

  }


  /* ━━━ Protected Instance Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected dismiss(): void {
    this.$title = "";
    this.$isDisplaying = false;
  }

}
