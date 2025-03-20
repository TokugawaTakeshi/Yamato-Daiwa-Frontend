import {
  LeftClickEventListener,
  getExpectedToBeSingleDOM_Element
} from "@yamato-daiwa/es-extensions-browserjs";
import {
  Logger,
  InvalidParameterValueError,
  isString,
  isNonEmptyString,
  isNull,
  isNotNull
} from "@yamato-daiwa/es-extensions";


class Button {


  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Accessing to DOM ─────────────────────────────────────────────────────────────────────────────────────────── */
  protected static readonly LABEL_ELEMENT_SELECTOR: string = ".Button--YDF-Label";

  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Accessing to DOM ─────────────────────────────────────────────────────────────────────────────────────────── */
  public readonly rootElement: HTMLButtonElement | HTMLInputElement | HTMLAnchorElement;
  protected readonly labelElement: Element | null;


  /* ─── Event Handling ───────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly leftClickEventListener?: LeftClickEventListener;
  protected leftClickEventExternalHandler: Button.LeftClickHandler | null = null;


  /* ─── Reactivity ───────────────────────────────────────────────────────────────────────────────────────────────── */
  /* eslint-disable no-underscore-dangle -- [ CONVENTION ]
   * The instance fields begins from the underscore MUST be changed only via setters or constructor. */
  private _label: string | null;
  private _toggled: boolean = false;

  public get $label(): string | null {
    return this._label;
  }

  public set $label(value: string | null) {

    this._label = value;

    if (isString(this.$label)) {
      if (isNotNull(this.labelElement)) {
        this.labelElement.textContent = this.$label;
      } else {
        this.rootElement.textContent = this.$label;
      }
    }

  }

  public get $toggled(): boolean {
    return this._toggled;
  }

  public set $toggled(value: boolean) {

    this._toggled = value;

    if (this.$toggled) {
      this.rootElement.setAttribute("aria-pressed", "true");
    } else {
      this.rootElement.removeAttribute("aria-pressed");
    }

  }
  /* eslint-enable no-underscore-dangle -- */


  /* ━━━ Public Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static initializeOne(properties: Button.InitializationProperties): Button {
    return new Button(properties);
  }


  /* ─── Avoiding of Instantiation ────────────────────────────────────────────────────────────────────────────────── */
  public static setTextings(
    targetButtonDefinition: Button.RootElementDefinition,
    {
      label,
      accessibilityGuidance
    }: Readonly<{
      label?: string;
      accessibilityGuidance?: string;
    }>
  ): void {


    const targetButton: HTMLButtonElement | HTMLAnchorElement | HTMLInputElement =
        Button.resolveAndValidateRootElement(targetButtonDefinition);

    if (targetButton instanceof HTMLButtonElement || targetButton instanceof HTMLAnchorElement) {

      const labelElement: Element | null = targetButton.querySelector(Button.LABEL_ELEMENT_SELECTOR);

      if (isNonEmptyString(label)) {
        if (isNull(labelElement)) {
          targetButton.textContent = label;
        } else {
          labelElement.textContent = label;
        }
      }

      if (isNonEmptyString(accessibilityGuidance)) {
        targetButton.ariaLabel = accessibilityGuidance;
      }

      return;

    }


    if (isNonEmptyString(label)) {
      targetButton.value = label;
    }

    if (isNonEmptyString(accessibilityGuidance)) {
      targetButton.ariaLabel = accessibilityGuidance;
    }

  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(properties: Button.InitializationProperties) {

    const rootElement: HTMLButtonElement | HTMLInputElement | HTMLAnchorElement =
        Button.resolveAndValidateRootElement(properties);

    this.labelElement = rootElement.querySelector(Button.LABEL_ELEMENT_SELECTOR);

    if (rootElement instanceof HTMLButtonElement || rootElement instanceof HTMLAnchorElement) {

      this.rootElement = rootElement;
      this._label = this.labelElement?.textContent ?? null;

    } else {

      this.rootElement = rootElement;
      this._label = rootElement.textContent;

    }

    this.leftClickEventExternalHandler = properties.onClickEventHandler ?? null;

    this.leftClickEventListener = new LeftClickEventListener({
      targetElement: this.rootElement,
      handler: this.onLeftClick.bind(this),
      eventPropagation: false
    });

  }


  /* ━━━ Public Instance Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public setLeftClickHandler(leftClickHandler: Button.LeftClickHandler): void {
    this.leftClickEventExternalHandler = leftClickHandler;
  }

  public removeLeftClickHandler(): void {
    this.leftClickEventExternalHandler = null;
  }


  /* ━━━ Protected Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected onLeftClick(leftClickEvent: MouseEvent): void {
    this.leftClickEventExternalHandler?.(leftClickEvent, this);
  }

}


namespace Button {

  export type InitializationProperties = Readonly<
    (
      {
        targetElement: Element;
        contextElement?: never;
      } |
      {
        targetElement: Readonly<{ selector: string; }>;
        contextElement?: ParentNode | Readonly<{ selector: string; }>;
      }
    ) &
    { onClickEventHandler?: LeftClickHandler; }
  >;

  export type InitializationProperties =
    RootElementDefinition &
    Readonly<{ onClickEventHandler?: LeftClickHandler; }>;

  export type LeftClickHandler = (event: MouseEvent, selfInstance: Button) => unknown;

}


export default Button;
