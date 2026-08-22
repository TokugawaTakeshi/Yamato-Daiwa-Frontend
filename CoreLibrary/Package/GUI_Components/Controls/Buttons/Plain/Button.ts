/* eslint-disable no-underscore-dangle -- [ CONVENTION ]
* The instance fields begins from the underscore MUST be changed only via setters. */
/* eslint-disable @typescript-eslint/member-ordering -- The members of this class are grouped semantically. */

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
  /* ┄┄┄ Label ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
  protected _label: string | null;

  public get $label(): string | null {
    return this._label;
  }

  public set $label(value: string | null) {

    if (this._label === value) {
      return;
    }


    this._label = value;

    if (isString(this._label)) {
      if (isNotNull(this.labelElement)) {
        this.labelElement.textContent = this._label;
      } else {
        this.rootElement.textContent = this._label;
      }
    }

  }


  /* ┄┄┄ Accessibility Guidance ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
  private _accessibilityGuidance: string | null;

  public get $accessibilityGuidance(): string | null {
    return this._accessibilityGuidance;
  }

  public set $accessibilityGuidance(value: string | null) {

    if (value === this._accessibilityGuidance) {
      return;
    }


    this._accessibilityGuidance = value;
    this.rootElement.ariaLabel = this._accessibilityGuidance;

  }


  /* ┄┄┄ Toggled ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
  protected _toggled: boolean = false;

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

    this._accessibilityGuidance = this.rootElement.ariaLabel;

    this.leftClickEventExternalHandler = properties.onClickEventHandler ?? null;

    if (isNotNull(this.leftClickEventExternalHandler)) {
      this.leftClickEventListener = new LeftClickEventListener({
        targetElement: this.rootElement,
        handler: this.onLeftClick.bind(this),
        eventPropagation: false
      });
    }

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


  /* ─── Routines ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected static resolveAndValidateRootElement(
    { targetElement, contextElement }: Button.RootElementDefinition
  ): HTMLButtonElement | HTMLAnchorElement | HTMLInputElement {

    if (
      targetElement instanceof HTMLButtonElement ||
      targetElement instanceof HTMLInputElement ||
      targetElement instanceof HTMLAnchorElement
    ) {

      return targetElement;

    }


    if ("selector" in targetElement) {

      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
      * Waiting for the modification of `getExpectedToBeSingleDOM_Element` method. */
      return getExpectedToBeSingleDOM_Element({
        selector: targetElement.selector,
        contextElement
      }) as HTMLButtonElement | HTMLInputElement | HTMLAnchorElement;

    }


    Logger.throwErrorWithFormattedMessage({
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
      occurrenceLocation: "Button.resolveAndValidateRootElement(rootElementDefinition)"
    });

  }


}


namespace Button {

  export type RootElementDefinition = Readonly<(
    {
      targetElement: Element;
      contextElement?: never;
    } |
    {
      targetElement: Readonly<{ selector: string; }>;
      contextElement?: ParentNode | Readonly<{ selector: string; }>;
    }
  )>;

  export type InitializationProperties =
    RootElementDefinition &
    Readonly<{ onClickEventHandler?: LeftClickHandler; }>;

  export type LeftClickHandler = (event: MouseEvent, selfInstance: Button) => unknown;

}


export default Button;
