/* eslint-disable @typescript-eslint/member-ordering --
 * The members of this class has been organized semantically. */

/* ─── Validation ─────────────────────────────────────────────────────────────────────────────────────────────────── */
import ValidatableControl from "../../_Validation/ValidatableControl";
import type InputtedValueValidation from "../../_Validation/InputtedValueValidation";

/* ─── Children Components ────────────────────────────────────────────────────────────────────────────────────────── */
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import type { RootElementDefinition } from "../../../../Logic/Types/RootElementDefinition";
import {
  InvalidParameterValueError,
  isNumber,
  isNotUndefined,
  isNotNull,
  Logger
} from "@yamato-daiwa/es-extensions";
import {
  getExpectedToBeSingleDOM_Element,
  InputEventListener,
  LeftClickEventListener,
  cloneDOM_Element
} from "@yamato-daiwa/es-extensions-browserjs";
import onDifferentValueAssigned from "../../../_Auxiliaries/Decorators/onDifferentValueAssigned";


/** @beta */
class NumberBox<
  IsInputRequired extends boolean,
  NonEmptyValueType extends NumberBox.SupportedValidatablePayloadValuesTypes.NonEmpty,
  EmptyValueType extends NumberBox.SupportedValidatablePayloadValuesTypes.Empty = NonEmptyValueType,
  /* eslint-disable-next-line @stylistic/type-generic-spacing -- Looks like the false positive. */
  ValidValue extends (IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)) =
      IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType),
  InvalidValue extends NonEmptyValueType | EmptyValueType = NonEmptyValueType | EmptyValueType
> implements ValidatableControl {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Accessing to DOM ─────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly CSS_NAMESPACE: string = "NumberBox--YDF";
  public static readonly ROOT_ELEMENT_SELECTOR: string = `.${ NumberBox.CSS_NAMESPACE }`;

  protected static readonly NATIVE_INPUT_ELEMENT_SELECTOR: string = ".NumberBox--YDF-NativeInput";
  protected static readonly VALUE_INCREMENTING_BUTTON_DATE_ATTRIBUTE_KEY: string = "data-button-incrementing";
  protected static readonly VALUE_DECREMENTING_BUTTON_DATE_ATTRIBUTE_KEY: string = "data-button-decrementing";

  protected static readonly INVALID_VALUE_STATE_CSS_CLASS: string = "NumberBox--YDF__InvalidInputState";


  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public readonly payload:
      ValidatableControl.Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>;

  /* [ Theory ] `null` will be converted to `0`. */
  protected payloadNumericalValue(): number { return Number(this.payload.value); }

  protected readonly ID: string = NumberBox.generateSelfID();

  protected readonly scenario: NumberBox.Scenarios;
  protected readonly validityHighlightingActivationMode: NumberBox.ValidityHighlightingActivationModes;
  protected readonly step: number;


  /* ─── DOM ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly shellComponent: ValidatableControlShell;
  protected readonly nativeInputElement: HTMLInputElement;
  protected readonly valueIncrementingButton: HTMLButtonElement;
  protected readonly valueDecrementingButton: HTMLButtonElement;


  /* ─── Reactivity ───────────────────────────────────────────────────────────────────────────────────────────────── */
  /* eslint-disable no-underscore-dangle -- [ CONVENTION ]
   * The instance fields begins from the underscore MUST be changed only via setters. */

  /* ┄┄┄ Invalid Input Highlighting ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
  protected _mustHighlightInvalidInputIfAnyValidationErrorsMessages!: boolean;

  protected get $mustHighlightInvalidInputIfAnyValidationErrorsMessages(): boolean {
    return this._mustHighlightInvalidInputIfAnyValidationErrorsMessages;
  }

  @onDifferentValueAssigned()
  protected set $mustHighlightInvalidInputIfAnyValidationErrorsMessages(_value: boolean) {

    if (this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages) {

      this.shellComponent.$mustDisplayValidationErrorsMessagesIfAny = true;

      if (this.payload.isInvalid) {
        this.shellComponent.rootElement.classList.add(NumberBox.INVALID_VALUE_STATE_CSS_CLASS);
      }

      return;

    }

    this.shellComponent.rootElement.classList.remove(NumberBox.INVALID_VALUE_STATE_CSS_CLASS);
    this.shellComponent.$mustDisplayValidationErrorsMessagesIfAny = false;

  }


  /* ┄┄┄ Minimal Value ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
  protected _minimalValue!: number;

  public get $minimalValue(): number {
    return this._minimalValue;
  }

  @onDifferentValueAssigned()
  public set $minimalValue(_value: number) {
    this.nativeInputElement.min = String(this._minimalValue);
    this.valueDecrementingButton.disabled = (this.payload.value ?? 0) <= this.$minimalValue;
  }


  /* ┄┄┄ Maximal Value ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ */
  protected _maximalValue!: number;

  public get $maximalValue(): number {
    return this._maximalValue;
  }

  @onDifferentValueAssigned()
  public set $maximalValue(_value: number) {
    this.nativeInputElement.max = String(this._maximalValue);
    this.valueIncrementingButton.disabled = (this.payload.value ?? 0) >= this.$maximalValue;
  }
  /* eslint-enable no-underscore-dangle */


  /* ━━━ Public Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* @ts-ignore: TS2394 Acceptable during α/β versions of this component but must and will be fixed before official release. */
  public static initializeOne<IsInputRequired extends boolean>(
    initializationProperties: NumberBox.Initialization.AlwaysNonEmptyValueScenario.Properties
  ): NumberBox<IsInputRequired, number, number, number, number>;

  public static initializeOne(
    initializationProperties: NumberBox.Initialization.CouldBeInitiallyEmptyButRequiredValueScenario.Properties
  ): NumberBox<true, number, number | null, number, number | null>;

  public static initializeOne(
    initializationProperties: NumberBox.Initialization.OptionalValueScenario.Properties
  ): NumberBox<false, number, number | null, number | null, number | null>;

  public static initializeOne<IsInputRequired extends boolean>(
    initializationProperties: NumberBox.Initialization.Properties
  ): NumberBox<
    IsInputRequired,
    NumberBox.SupportedValidatablePayloadValuesTypes.NonEmpty,
    NumberBox.SupportedValidatablePayloadValuesTypes.Empty,
    IsInputRequired extends true ?
        NumberBox.SupportedValidatablePayloadValuesTypes.NonEmpty :
        NumberBox.SupportedValidatablePayloadValuesTypes.NonEmpty |
            NumberBox.SupportedValidatablePayloadValuesTypes.Empty,
    NumberBox.SupportedValidatablePayloadValuesTypes.NonEmpty |
       NumberBox.SupportedValidatablePayloadValuesTypes.Empty
  > {
    return new NumberBox<
      IsInputRequired,
      NumberBox.SupportedValidatablePayloadValuesTypes.NonEmpty,
      NumberBox.SupportedValidatablePayloadValuesTypes.Empty,
      IsInputRequired extends true ?
        NumberBox.SupportedValidatablePayloadValuesTypes.NonEmpty :
        NumberBox.SupportedValidatablePayloadValuesTypes.NonEmpty |
            NumberBox.SupportedValidatablePayloadValuesTypes.Empty,
      NumberBox.SupportedValidatablePayloadValuesTypes.NonEmpty |
         NumberBox.SupportedValidatablePayloadValuesTypes.Empty
    >({
      ...initializationProperties,
      rootElement: "selector" in initializationProperties.rootElement ?
          getExpectedToBeSingleDOM_Element({
            selector: initializationProperties.rootElement.selector,
            contextElement: initializationProperties.contextElement
          }) :
          initializationProperties.rootElement
    });
  }


  /* ━━━ Interface implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public highlightInvalidInput(): this {
    this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages = true;
    return this;
  }

  public focus(): this {
    this.nativeInputElement.focus();
    return this;
  }

  public getRootElementOffsetCoordinates(): ValidatableControl.RootElementOffsetCoordinates {
    return {
      top: this.shellComponent.rootElement.offsetTop,
      left: this.shellComponent.rootElement.offsetLeft
    };
  }

  public resetValidityHighlightingStateToInitial(): void {
    this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages =
        this.validityHighlightingActivationMode === NumberBox.ValidityHighlightingActivationModes.immediate;
  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(
    {
      rootElement,
      validityHighlightingActivationMode,
      scenario,
      minimalValue,
      maximalValue,
      ...initializationProperties
    }: NumberBox.ConstructorParameter
  ) {

    if (rootElement.classList.contains(NumberBox.ROOT_ELEMENT_SELECTOR)) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "compoundParameter",
          messageSpecificPart:
              "The following root element definitely not belong to TextBox, the YDF GUI component.\n" +
              cloneDOM_Element({ targetElement: rootElement, mustCopyAllChildren: false }).outerHTML
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "NumberBox.<initilizingMethod>->constructor(initializationProperties)"
      });
    }


    /* ─── DOM ────────────────────────────────────────────────────────────────────────────────────────────────────── */
    const mustHighlightInvalidInputIfAnyValidationErrorsMessages: boolean =
        validityHighlightingActivationMode === NumberBox.ValidityHighlightingActivationModes.immediate;

    this.shellComponent = ValidatableControlShell.initializeOne({
      rootElement,
      mustDisplayErrorsMessagesIfAny: mustHighlightInvalidInputIfAnyValidationErrorsMessages
    });

    this.nativeInputElement = getExpectedToBeSingleDOM_Element({
      selector: NumberBox.NATIVE_INPUT_ELEMENT_SELECTOR,
      contextElement: this.shellComponent.rootElement,
      expectedDOM_ElementSubtype: HTMLInputElement
    });

    this.valueIncrementingButton = getExpectedToBeSingleDOM_Element({
      selector: `[${ NumberBox.VALUE_INCREMENTING_BUTTON_DATE_ATTRIBUTE_KEY }]`,
      contextElement: this.shellComponent.rootElement,
      expectedDOM_ElementSubtype: HTMLButtonElement
    });

    this.valueIncrementingButton.removeAttribute(NumberBox.VALUE_INCREMENTING_BUTTON_DATE_ATTRIBUTE_KEY);

    this.valueDecrementingButton = getExpectedToBeSingleDOM_Element({
      selector: `[${ NumberBox.VALUE_DECREMENTING_BUTTON_DATE_ATTRIBUTE_KEY }]`,
      contextElement: this.shellComponent.rootElement,
      expectedDOM_ElementSubtype: HTMLButtonElement
    });

    this.valueDecrementingButton.removeAttribute(NumberBox.VALUE_DECREMENTING_BUTTON_DATE_ATTRIBUTE_KEY);


    /* ─── Payload ────────────────────────────────────────────────────────────────────────────────────────────────── */
    let payloadInitialValue: NumberBox.SupportedValidatablePayloadValuesTypes;

    if (isNotUndefined(initializationProperties.overridingPreInputtedInitialValue)) {

      payloadInitialValue = initializationProperties.overridingPreInputtedInitialValue;

      this.nativeInputElement.value =
          isNumber(payloadInitialValue, { mustConsiderNaN_AsNumber: true }) ? payloadInitialValue.toString() : "";

    } else {

      payloadInitialValue = this.transformInputtedRawValue(this.nativeInputElement.value);

      if (
        this.nativeInputElement.value.length === 0 && scenario === NumberBox.Scenarios.alwaysNonEmptyValue
      ) {
        this.nativeInputElement.value = "0";
      }

    }

    this.payload = new ValidatableControl.Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>({

      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
      * Although both `ValidValue` and `InvalidValue` constrained to `NumberBox.SupportedValidatablePayloadValuesTypes`
      *   it is not enough to convince the TypeScript. Most likely, there is no way to pass the correspondence
      *   between specific scenario and `ValidValue`/`InvalidValue`. */
      initialValue: payloadInitialValue as ValidValue | InvalidValue,
      getComponentInstance: (): ValidatableControl => this,
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
       * Acceptable during α/β versions of this component but must and will be fixed before official release. */
      validation: initializationProperties.validation as unknown as InputtedValueValidation<NonEmptyValueType, EmptyValueType>,
      onAnyChangeEventHandler: {
        handler: this.onPayloadInitializedOrChanged.bind(this),
        ID: NumberBox.generateOnAnyChangeOfPayloadEventHandlerID(this.ID)
      },
      onHasBecomeValidEventHandler: {
        handler: this.onPayloadHasBecomeValidEventHandler.bind(this),
        ID: NumberBox.generateOnPayloadHasBecomeValidEventHandlerID(this.ID)
      },
      onHasBecomeInvalidEventHandler: {
        handler: this.onPayloadHasBecomeInvalidEventHandler.bind(this),
        ID: NumberBox.generateOnPayloadHasBecomeInvalidEventHandlerID(this.ID)
      },
      onAsynchronousValidationStatusChangedEventHandler: {
        handler: this.onPayloadAsynchronousValidationStatusChangedEventHandler.bind(this),
        ID: NumberBox.generateOnAsynchronousValidationStatusChangedEventHandlerID(this.ID)
      }

    });

    this.onPayloadInitializedOrChanged();


    /* ─── Reactivity ─────────────────────────────────────────────────────────────────────────────────────────────── */
    this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages = mustHighlightInvalidInputIfAnyValidationErrorsMessages;

    if (isNotUndefined(minimalValue)) {
      this.$minimalValue = minimalValue;
    } else {

      const minAttributeValue: string | null = this.nativeInputElement.getAttribute("min");

      if (isNotNull(minAttributeValue)) {
        this.$minimalValue = Number(minAttributeValue);
      } else {
        this.$minimalValue = Number.MAX_SAFE_INTEGER;
      }

    }

    if (isNotUndefined(maximalValue)) {
      this.$maximalValue = maximalValue;
    } else {

      const maxAttributeValue: string | null = this.nativeInputElement.getAttribute("max");

      if (isNotNull(maxAttributeValue)) {
        this.$maximalValue = Number(maxAttributeValue);
      } else {
        this.$maximalValue = Number.MAX_SAFE_INTEGER;
      }

    }


    /* ─── Not Organized Yet ──────────────────────────────────────────────────────────────────────────────────────── */
    this.scenario = scenario;
    this.validityHighlightingActivationMode = validityHighlightingActivationMode;

    this.step = initializationProperties.step ?? Number(this.nativeInputElement.dataset.step);

    this.shellComponent.$validationErrorsMessages = this.payload.validationErrorsMessages;

    InputEventListener.createAndAssign({
      targetElement: this.nativeInputElement,
      handler: this.onTypeCharacterEventListener.bind(this)
    });

    LeftClickEventListener.createAndAssign({
      targetElement: this.valueIncrementingButton,
      handler: this.onIncrementValue.bind(this)
    });

    LeftClickEventListener.createAndAssign({
      targetElement: this.valueDecrementingButton,
      handler: this.onDecrementValue.bind(this)
    });

    this.nativeInputElement.addEventListener("blur", this.onFocusOutEventListener.bind(this));

    this.initializeHTML_AttributesOfNativeInputElement();

  }


  /* ━━━ Public Accessors / Mutators ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public get $isReadonly(): boolean {
    return this.nativeInputElement.readOnly;
  }

  public set $isReadonly(value: boolean) {
    if (this.nativeInputElement.readOnly !== value) {
      this.nativeInputElement.readOnly = value;
    }
  }

  public get $isDisabled(): boolean {
    return this.nativeInputElement.disabled;
  }

  public set $isDisabled(value: boolean) {
    if (this.nativeInputElement.disabled !== value) {
      this.nativeInputElement.disabled = value;
    }
  }


  /* ━━━ Events Handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected onPayloadInitializedOrChanged(): void {
    this.valueIncrementingButton.disabled = (this.payload.value ?? 0) >= this.$maximalValue;
    this.valueDecrementingButton.disabled = (this.payload.value ?? 0) <= this.$minimalValue;
  }

  protected onPayloadHasBecomeValidEventHandler(): void {
    this.shellComponent.rootElement.classList.remove(NumberBox.INVALID_VALUE_STATE_CSS_CLASS);
    this.nativeInputElement.removeAttribute("aria-invalid");
  }

  protected onPayloadHasBecomeInvalidEventHandler(): void {

    if (this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages) {
      this.shellComponent.rootElement.classList.add(NumberBox.INVALID_VALUE_STATE_CSS_CLASS);
    }

    this.nativeInputElement.setAttribute("aria-invalid", "");

  }

  protected onPayloadAsynchronousValidationStatusChangedEventHandler(
    asynchronousValidationStatus: InputtedValueValidation.AsynchronousChecks.Status
  ): void {

    this.shellComponent.$asynchronousValidationsStatus = asynchronousValidationStatus;
    this.shellComponent.$validationErrorsMessages = this.payload.validationErrorsMessages;

    if (asynchronousValidationStatus.hasAtLeastOneInvalidValueBeenConfirmed) {
      this.shellComponent.$mustDisplayValidationErrorsMessagesIfAny = true;
    }

  }

  protected onTypeCharacterEventListener(): void {

    const newValue: ValidValue | InvalidValue = this.transformInputtedRawValue(this.nativeInputElement.value);

    this.payload.$setValue({
      newValue,
      asynchronousValidationDelay__seconds: 1
    });

    this.shellComponent.$validationErrorsMessages = this.payload.validationErrorsMessages;

    if (
      !this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages &&
      this.validityHighlightingActivationMode === NumberBox.ValidityHighlightingActivationModes.onFirstInputtedCharacter
    ) {
      this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages = true;
    }

  }

  protected onIncrementValue(): void {

    const newValue: number = Number(this.payload.value) + this.step;
    this.nativeInputElement.value = String(newValue);

    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- [ Theory ] The `Number(null)` will be `0`. */
    this.payload.$setValue({ newValue: newValue as ValidValue | InvalidValue });

  }

  protected onDecrementValue(): void {

    const newValue: number = Number(this.payload.value) - this.step;
    this.nativeInputElement.value = String(newValue);

    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- [ Theory ] The `Number(null)` will be `0`. */
    this.payload.$setValue({ newValue: newValue as ValidValue | InvalidValue });

  }

  protected onFocusOutEventListener(): void {
    this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages = true;
  }


  /* ━━━ Initialization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected initializeHTML_AttributesOfNativeInputElement(): void {
    if (this.payload.validation.isInputRequired()) {
      this.nativeInputElement.setAttribute("required", "");
    } else {
      this.nativeInputElement.removeAttribute("required");
    }
  }


  /* ━━━ Routines ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected transformInputtedRawValue(rawValue: string): ValidValue | InvalidValue {

    if (rawValue.length > 0) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
       * Acceptable during α/β versions of this component but must and will be fixed before official release. */
      return Number(rawValue) as ValidValue | InvalidValue;
    }


    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
       * Acceptable during α/β versions of this component but must and will be fixed before official release. */
    return (this.scenario === NumberBox.Scenarios.alwaysNonEmptyValue ? 0 : null) as ValidValue | InvalidValue;

  }


  /* ─── IDs generating ───────────────────────────────────────────────────────────────────────────────────────────── */
  protected static counterForSelfID_Generating: number = 0;

  protected static generateSelfID(): string {
    NumberBox.counterForSelfID_Generating++;
    return `NUMBER_BOX--YDF-${ NumberBox.counterForSelfID_Generating }`;
  }

  protected static counterForOnAnyChangeOfPayloadEventHandlerID_Generating: number = 0;

  protected static generateOnAnyChangeOfPayloadEventHandlerID(componentID: string): string {
    NumberBox.counterForOnAnyChangeOfPayloadEventHandlerID_Generating++;
    return `${ componentID }-ON_ANY_CHANGE_OF_PAYLOAD_EVENT_HANDLER-` +
        `${ NumberBox.counterForOnAnyChangeOfPayloadEventHandlerID_Generating }`;
  }


  protected static counterForOnPayloadHasBecomeValidEventHandlerID_Generating: number = 0;

  protected static generateOnPayloadHasBecomeValidEventHandlerID(componentID: string): string {
    NumberBox.counterForOnPayloadHasBecomeValidEventHandlerID_Generating++;
    return `${ componentID }-ON_PAYLOAD_HAS_BECOME_VALID_EVENT_HANDLER-` +
        `${ NumberBox.counterForOnPayloadHasBecomeValidEventHandlerID_Generating }`;
  }


  protected static counterForOnPayloadHasBecomeInvalidEventHandlerID_Generating: number = 0;

  protected static generateOnPayloadHasBecomeInvalidEventHandlerID(componentID: string): string {
    NumberBox.counterForOnPayloadHasBecomeInvalidEventHandlerID_Generating++;
    return `${ componentID }-ON_PAYLOAD_HAS_BECOME_INVALID_EVENT_HANDLER-` +
        `${ NumberBox.counterForOnPayloadHasBecomeInvalidEventHandlerID_Generating }`;
  }


  protected static counterForOnAsynchronousValidationStatusChangedEventHandlerIDsGenerating: number = 0;

  protected static generateOnAsynchronousValidationStatusChangedEventHandlerID(componentID: string): string {
    NumberBox.counterForOnAsynchronousValidationStatusChangedEventHandlerIDsGenerating++;
    return `${ componentID }-ON_ASYNCHRONOUS_VALIDATION_STATUS_CHANGED_EVENT_HANDLER-` +
        `${ NumberBox.counterForOnAsynchronousValidationStatusChangedEventHandlerIDsGenerating }`;
  }

}


namespace NumberBox {

  export type SupportedValidatablePayloadValuesTypes =
      SupportedValidatablePayloadValuesTypes.NonEmpty |
      SupportedValidatablePayloadValuesTypes.Empty;

  export namespace SupportedValidatablePayloadValuesTypes {
    export type NonEmpty = number;
    export type Empty = number | null;
  }

  export enum Scenarios {
    alwaysNonEmptyValue = "ALWAYS_NON_EMPTY_VALUE",
    couldBeInitiallyEmptyButRequiredValue = "COULD_BE_INITIALLY_EMPTY_BUT_REQUIRED_VALUE",
    optionalValue = "OPTIONAL_VALUE"
  }

  export type ConstructorParameter =
      Readonly<{ rootElement: Element; }> &
      Omit<
        Initialization.Properties,
            "rootElements" |
            "contextElement"
      >;

  export namespace Initialization {

    export type Properties =
          AlwaysNonEmptyValueScenario.Properties |
          CouldBeInitiallyEmptyButRequiredValueScenario.Properties |
          OptionalValueScenario.Properties;

    export namespace Properties {

      export type Common<
        NonEmptyValueType extends SupportedValidatablePayloadValuesTypes.NonEmpty,
        EmptyValueType extends SupportedValidatablePayloadValuesTypes.Empty
      > = Readonly<{
        minimalValue?: number;
        maximalValue?: number;
        step?: number;
        validation: InputtedValueValidation<NonEmptyValueType, EmptyValueType>;
        validityHighlightingActivationMode: ValidityHighlightingActivationModes;
      }>;

    }

    export namespace AlwaysNonEmptyValueScenario {

      export type Properties =
          Readonly<{
            scenario: Scenarios.alwaysNonEmptyValue;
            overridingPreInputtedInitialValue?: number;
          }> &
          Initialization.Properties.Common<number, number> &
          RootElementDefinition;

    }

    export namespace CouldBeInitiallyEmptyButRequiredValueScenario {

      export type Properties =
          Readonly<{
            scenario: Scenarios.couldBeInitiallyEmptyButRequiredValue;
            overridingPreInputtedInitialValue?: SupportedValidatablePayloadValuesTypes;
          }> &
          Initialization.Properties.Common<number, null> &
          RootElementDefinition;

    }

    export namespace OptionalValueScenario {

      export type Properties =
          Readonly<{
            scenario: Scenarios.optionalValue;
            overridingPreInputtedInitialValue?: number | null;
          }> &
          Initialization.Properties.Common<number, null> &
          RootElementDefinition;

    }

  }

  export type Localization = Readonly<{
    buttons: Readonly<{
      incrementing: Readonly<{
        generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>) => string;
      }>;
      decrementing: Readonly<{
        generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>) => string;
      }>;
    }>;
  }>;

  export enum ValidityHighlightingActivationModes {
    immediate = "IMMEDIATE",
    onFirstInputtedCharacter = "ON_FIRST_INPUTTED_CHARACTER",
    onFocusOut = "ON_FOCUS_OUT"
  }

}


export default NumberBox;
