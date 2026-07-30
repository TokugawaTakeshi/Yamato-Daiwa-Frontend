import {
  LeftClickEventListener,
  getExpectedToBeSingleDOM_Element
} from "@yamato-daiwa/es-extensions-browserjs";


export default class RadioButton {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Accessing to DOM ─────────────────────────────────────────────────────────────────────────────────────────── */
  protected static readonly NATIVE_INPUT_ELEMENT_SELECTOR: string = ".RadioButton--YDF-HiddenInputElement";

  protected static readonly ROOT_ELEMENT_SELECTED_STATE_MODIFIER_CSS_CLASS: string =
      "RadioButton--YDF__CheckedState";
  protected static readonly ROOT_ELEMENT_UNSELECTED_STATE_MODIFIER_CSS_CLASS: string =
      "RadioButton--YDF__UncheckedState";
  protected static readonly ROOT_ELEMENT_READONLY_STATE_MODIFIER_CSS_CLASS: string =
      "RadioButton--YDF__DisabledState";
  protected static readonly ROOT_ELEMENT_DISABLED_STATE_MODIFIER_CSS_CLASS: string =
      "RadioButton--YDF__ReadOnlyState";


  /* ━━━ Instance fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Data ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
  public readonly HTML_ValueAsOptionKey: string;

  /* ─── Accessing to DOM ─────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly rootElement: Element;
  protected readonly nativeInputElement: HTMLInputElement;

  /* ─── Event Handlers ───────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly onClickEventHandler: (selfInstance: RadioButton, event: MouseEvent) => void;

  /* ─── Must be Changed Only Via Setters ─────────────────────────────────────────────────────────────────────────── */
  /* eslint-disable no-underscore-dangle -- [ CONVENTION ]
   * The instance fields begins from the underscore MUST be changed only via setters or constructor. */
  protected _isSelected: boolean = false;


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public constructor(
    {
      rootElement,
      onClickEventHandler
    }: Readonly<{
      rootElement: Element;
      onClickEventHandler: (selfInstance: RadioButton, event: MouseEvent) => void;
    }>
  ) {

    this.rootElement = rootElement;

    this.nativeInputElement = getExpectedToBeSingleDOM_Element({
      selector: RadioButton.NATIVE_INPUT_ELEMENT_SELECTOR,
      contextElement: rootElement,
      expectedDOM_ElementSubtype: HTMLInputElement
    });

    this.HTML_ValueAsOptionKey = this.nativeInputElement.value;

    this.onClickEventHandler = onClickEventHandler;

    this._isSelected = this.nativeInputElement.checked;

    LeftClickEventListener.createAndAssign({
      targetElement: this.rootElement,
      handler: this.onLeftClick.bind(this)
    });

  }


  /* ━━━ Public Methods & Getters ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public get selectingOptionKey(): string {
    return this.nativeInputElement.value;
  }


  /* ━━━ Events Handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected onLeftClick(event: MouseEvent): void {

    /* [ Approach ]
     * In this component, native `input` could not be clicked directly because it is invisible.
     * It `event.target` is native `input` element, it has been clicked by related label (default HTML behaviour). */
    if (event.target !== this.nativeInputElement) {
      this.onClickEventHandler(this, event);
    }

  }


  /* ━━━ Reactivity ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public get $isSelected(): boolean {
    return this._isSelected;
  }

  public set $isSelected(isSelectedNow: boolean) {

    if (this._isSelected === isSelectedNow) {
      return;
    }


    this._isSelected = isSelectedNow;

    if (this._isSelected) {

      this.nativeInputElement.checked = true;

      this.rootElement.classList.remove(RadioButton.ROOT_ELEMENT_UNSELECTED_STATE_MODIFIER_CSS_CLASS);
      this.rootElement.classList.add(RadioButton.ROOT_ELEMENT_SELECTED_STATE_MODIFIER_CSS_CLASS);

      return;
    }


    this.nativeInputElement.checked = false;

    this.rootElement.classList.remove(RadioButton.ROOT_ELEMENT_SELECTED_STATE_MODIFIER_CSS_CLASS);
    this.rootElement.classList.add(RadioButton.ROOT_ELEMENT_UNSELECTED_STATE_MODIFIER_CSS_CLASS);

  }
  /* eslint-enable no-underscore-dangle */

}
