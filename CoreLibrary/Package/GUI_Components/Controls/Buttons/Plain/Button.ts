import {
  LeftClickEventListener,
  getExpectedToBeSingleDOM_Element
} from "@yamato-daiwa/es-extensions-browserjs";
import {
  Logger,
  InvalidParameterValueError,
  isString,
  isNull,
  isNotNull
} from "@yamato-daiwa/es-extensions";


class Button {


  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Accessing to DOM ─────────────────────────────────────────────────────────────────────────────────────────── */
  protected static readonly LABEL_ELEMENT_SELECTOR: string = ".Button--YDF-Label";

  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Accessing to DOM ─────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly rootElement: HTMLButtonElement | HTMLInputElement | HTMLAnchorElement;
  protected readonly labelElement: Element | null;


  /* ─── Event Handling ───────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly leftClickEventListener: LeftClickEventListener;
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
  public static pickOneBySelector(properties: Button.InitializationProperties): Button {
    return new Button(properties);
  }


  /* ─── Avoiding of Instantiation ────────────────────────────────────────────────────────────────────────────────── */
  public static setLabel(targetButton: Element, label: string): void {

    if (targetButton instanceof HTMLButtonElement || targetButton instanceof HTMLAnchorElement) {

      const labelElement: Element | null = targetButton.querySelector(Button.LABEL_ELEMENT_SELECTOR);

      if (isNull(labelElement)) {
        targetButton.textContent = label;
      } else {
        labelElement.textContent = label;
      }

      return;

    }


    if (targetButton instanceof HTMLInputElement) {
      targetButton.value = label;
    }


    Logger.throwErrorAndLog({

      errorInstance: new InvalidParameterValueError({
        parameterNumber: 1,
        parameterName: "targetButton",
        messageSpecificPart:
            "The first parameter must be instance of either `HTMLButtonElement`, `HTMLAnchorElement` or " +
              "HTMLInputElement while actually neither of."
      }),
      title: InvalidParameterValueError.localization.defaultTitle,
      occurrenceLocation: "Button.setLabel(compoundParameter)"
    });

  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(properties: Button.InitializationProperties) {

    let rootElement: HTMLButtonElement | HTMLInputElement | HTMLAnchorElement;

    if (
      properties.targetElement instanceof HTMLButtonElement ||
      properties.targetElement instanceof HTMLInputElement ||
      properties.targetElement instanceof HTMLAnchorElement
    ) {

      rootElement = properties.targetElement;

    } else if ("selector" in properties.targetElement) {

      /* Waiting for the modification of `getExpectedToBeSingleDOM_Element` method */
      rootElement = getExpectedToBeSingleDOM_Element({
        selector: properties.targetElement.selector,
        contextElement: properties.contextElement
      }) as HTMLButtonElement | HTMLInputElement | HTMLAnchorElement;

    } else {

      Logger.throwErrorAndLog({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "properties",
          messageSpecificPart: [
            "Invalid value of `targetElement` property. The valid alternatives are:",
            "● Instance of `HTMLButtonElement`",
            "● Instance of `HTMLInputElement`",
            "● Instance of `HTMLAnchorElement`",
            "● Object with `selector` property referring to singe element. The element is not single on the page " +
                "but single inside specific container, specify `contextElement` property additionally."
          ].join("\n")
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "Button.pickOneBySelector -> button.constructor(properties)"
      });

    }

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

  export type LeftClickHandler = (event: MouseEvent, selfInstance: Button) => unknown;

}


export default Button;
