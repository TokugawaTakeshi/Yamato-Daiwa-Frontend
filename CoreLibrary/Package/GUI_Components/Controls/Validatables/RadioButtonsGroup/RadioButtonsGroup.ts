/* eslint-disable @typescript-eslint/member-ordering --
 * The members of this class has been organized semantically. */

/* ─── Validation ─────────────────────────────────────────────────────────────────────────────────────────────────── */
import ValidatableControl from "../../_Validation/ValidatableControl";
import type InputtedValueValidation from "../../_Validation/InputtedValueValidation";

/* ─── Children components ────────────────────────────────────────────────────────────────────────────────────────── */
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell";
import RadioButton from "../../RadioButton/RadioButton";
import { isNotNull, isNull, Logger } from "@yamato-daiwa/es-extensions";


/** @beta */
class RadioButtonsGroup<
  IsInputRequired extends boolean,
  NonEmptyValueType extends RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.NonEmpty,
  EmptyValueType extends RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.Empty = NonEmptyValueType,
  ValidValue extends (IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)) =
      IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType),
  InvalidValue extends NonEmptyValueType | EmptyValueType = NonEmptyValueType | EmptyValueType
> implements ValidatableControl {

  /* ━━━ Static fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Accessing to DOM ─────────────────────────────────────────────────────────────────────────────────────────── */
  protected static readonly RADIO_BUTTONS_SELECTOR: string = ".RadioButtonsGroup--YDF-RadioButton";

  protected static readonly INVALID_VALUE_STATE_CSS_CLASS: string = "RadioButtonsGroup--YDF__InvalidInputState";


  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public readonly payload:
      ValidatableControl.Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>;

  protected readonly mustDisplayErrorsMessagesImmediatelyIfAny: boolean;

  protected readonly rawOptionKeyParser: (rawKey: string) => ValidValue | InvalidValue;
  protected readonly ableToUnselectOption: boolean;


  /* ─── DOM ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly shellComponent: ValidatableControlShell;
  protected readonly radioButtons: ReadonlyArray<RadioButton>;


  /* ─── Reactivity ───────────────────────────────────────────────────────────────────────────────────────────────── */
  /* eslint-disable no-underscore-dangle -- [ CONVENTION ]
   * The instance fields begins from the underscore MUST be changed only via setters or constructor. */
  protected _mustHighlightInvalidInputIfAnyValidationErrorsMessages: boolean = false;

  protected get $mustHighlightInvalidInputIfAnyValidationErrorsMessages(): boolean {
    return this._mustHighlightInvalidInputIfAnyValidationErrorsMessages;
  }

  protected set $mustHighlightInvalidInputIfAnyValidationErrorsMessages(value: boolean) {

    if (this._mustHighlightInvalidInputIfAnyValidationErrorsMessages === value) {
      return;
    }


    this._mustHighlightInvalidInputIfAnyValidationErrorsMessages = value;

    if (this._mustHighlightInvalidInputIfAnyValidationErrorsMessages) {

      this.shellComponent.$mustDisplayValidationErrorsMessagesIfAny = true;

      if (this.payload.isInvalid) {
        this.shellComponent.rootElement.classList.add(RadioButtonsGroup.INVALID_VALUE_STATE_CSS_CLASS);
      }

      return;

    }


    this.shellComponent.rootElement.classList.remove(RadioButtonsGroup.INVALID_VALUE_STATE_CSS_CLASS);
    this.shellComponent.$mustDisplayValidationErrorsMessagesIfAny = false;

  }
  /* eslint-enable no-underscore-dangle */


  /* ━━━ Public Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* @ts-ignore: TS2394 Acceptable during α/β versions of this component but must and will be fixed before official release. */
  public static pickOneBySelector(
    initializationProperties: RadioButtonsGroup.InitializationProperties.AlwaysSelectedStringKeyOptionScenario
  ): RadioButtonsGroup<true, string>;

  public static pickOneBySelector(
    initializationProperties:
        RadioButtonsGroup.InitializationProperties.CouldBeUnselectedInitiallyButRequiredStringKeyOptionScenario
  ): RadioButtonsGroup<true, string, null, string, null | string>;

  public static pickOneBySelector(
    initializationProperties: RadioButtonsGroup.InitializationProperties.OptionalStringKeyOptionScenario
  ): RadioButtonsGroup<false, string, null, string | null, string | null>;

  public static pickOneBySelector(
    initializationProperties:
        RadioButtonsGroup.InitializationProperties.AlwaysHasSelectedNumericValueScenario
  ): RadioButtonsGroup<true, number>;

  public static pickOneBySelector(
    initializationProperties:
        RadioButtonsGroup.InitializationProperties.CouldBeUnselectedInitiallyButRequiredNumericKeyOptionScenario
  ): RadioButtonsGroup<true, number, null, number, null | number>;

  public static pickOneBySelector(
    initializationProperties: RadioButtonsGroup.InitializationProperties.OptionalNumericKeyOptionScenario
  ): RadioButtonsGroup<false, number, null, number | null, number | null>;

  public static pickOneBySelector<IsInputRequired extends boolean>(
    initializationProperties: RadioButtonsGroup.InitializationProperties
  ): RadioButtonsGroup<
    IsInputRequired,
    RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.NonEmpty,
    RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.Empty,
    IsInputRequired extends true ?
        RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.NonEmpty :
        RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.NonEmpty |
            RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.Empty,
    RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.NonEmpty |
        RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.Empty
  > {
    return new RadioButtonsGroup<
      IsInputRequired,
      RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.NonEmpty,
      RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.Empty,
      IsInputRequired extends true ?
        RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.NonEmpty :
        RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.NonEmpty |
            RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.Empty,
      RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.NonEmpty |
          RadioButtonsGroup.SupportedValidatablePayloadValuesTypes.Empty
    >(initializationProperties);
  }


  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public highlightInvalidInput(): this {
    this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages = true;
    return this;
  }

  public focus(): this {
    return this;
  }

  public getRootElementOffsetCoordinates(): ValidatableControl.RootElementOffsetCoordinates {
    return {
      top: this.shellComponent.rootElement.offsetTop,
      left: this.shellComponent.rootElement.offsetLeft
    };
  }

  public resetValidityHighlightingStateToInitial(): void {
    this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages = this.mustDisplayErrorsMessagesImmediatelyIfAny;
  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(initializationProperties: RadioButtonsGroup.InitializationProperties) {

    this.mustDisplayErrorsMessagesImmediatelyIfAny = initializationProperties.mustDisplayErrorsMessagesImmediatelyIfAny;

    this.shellComponent = ValidatableControlShell.initializeOne({
      mustDisplayErrorsMessagesIfAny: this.mustDisplayErrorsMessagesImmediatelyIfAny,
      ...initializationProperties
    });

    let selectedOptionRawKey: string | null = null;
    const radioButtons: Array<RadioButton> = [];

    for (
      const radioButtonComponentRootElement of
          this.shellComponent.rootElement.querySelectorAll(RadioButtonsGroup.RADIO_BUTTONS_SELECTOR)
    ) {

      const radioButton: RadioButton = new RadioButton({
        rootElement: radioButtonComponentRootElement,
        onClickEventHandler: this.onClickRadioButton.bind(this)
      });

      const currentOptionKey: string = radioButton.selectingOptionKey;

      if (radioButton.$isSelected) {

        if (isNotNull(selectedOptionRawKey)) {
          radioButton.$isSelected = false;
        }

        selectedOptionRawKey = currentOptionKey;

      }

      radioButtons.push(radioButton);

    }

    if (radioButtons.length < 2) {
      Logger.throwErrorWithFormattedMessage({
        errorType: "NotEnoughSelectingOptionsError",
        title: "Not Enough Selecting Options",
        description: `It must be at least two radio buttons per group while ${ radioButtons.length } found.`,
        occurrenceLocation: "RadioButtonsGroup.constructor(initializationProperties)"
      });
    }

    this.radioButtons = radioButtons;


    let initialValue: RadioButtonsGroup.SupportedValidatablePayloadValuesTypes;
    let rawOptionKeyParser: (rawKey: string) => RadioButtonsGroup.SupportedValidatablePayloadValuesTypes;

    switch (initializationProperties.scenario) {

      case RadioButtonsGroup.Scenarios.alwaysSelectedStringKeyOption:
      case RadioButtonsGroup.Scenarios.couldBeUnselectedInitiallyButRequiredStringKeyOption:
      case RadioButtonsGroup.Scenarios.optionalStringKeyOption:
      {

        rawOptionKeyParser = (rawKey: string): string => rawKey;

        this.ableToUnselectOption =
            initializationProperties.scenario === RadioButtonsGroup.Scenarios.optionalStringKeyOption;

        break;

      }

      case RadioButtonsGroup.Scenarios.alwaysSelectedNumericKeyOption:
      case RadioButtonsGroup.Scenarios.couldBeUnselectedInitiallyButRequiredNumericKeyOption:
      case RadioButtonsGroup.Scenarios.optionalNumericKeyOption:
      {

        rawOptionKeyParser = initializationProperties.rawOptionKeyParser;

        this.ableToUnselectOption =
            initializationProperties.scenario === RadioButtonsGroup.Scenarios.optionalNumericKeyOption;

      }

    }

    this.ableToUnselectOption =
        initializationProperties.scenario === RadioButtonsGroup.Scenarios.optionalStringKeyOption ||
        initializationProperties.scenario === RadioButtonsGroup.Scenarios.optionalNumericKeyOption;

    if (isNull(selectedOptionRawKey)) {

      if (
        initializationProperties.scenario === RadioButtonsGroup.Scenarios.alwaysSelectedStringKeyOption ||
        initializationProperties.scenario === RadioButtonsGroup.Scenarios.alwaysSelectedNumericKeyOption
      ) {

        Logger.logError({
          errorType: "GUI_ComponentInvalidInitializationPropertiesCombinationError",
          title: "GUI Component Invalid Initialization Properties Combination",
          description:
              "\"alwaysSelectedStringKeyOption\" or \"alwaysSelectedNumericKeyOption\" scenario has been set while " +
                "no pre-selected radio button detected." +
              "The first one will be set as selected.",
          occurrenceLocation: "RadioButtonsGroup.constructor(initializationProperties)"
        });

        radioButtons[0].$isSelected = true;
        initialValue = radioButtons[0].HTML_ValueAsOptionKey;

      } else {

        initialValue = null;

      }

    } else {

      initialValue = rawOptionKeyParser(selectedOptionRawKey);

    }


    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
    * Maybe it is impossible to specify the correct correspondence of "rawOptionKeyParser" and
    *   "RadioButtonsGroup.Scenarios" with the current overloading mechanism in TypeScript. */
    this.rawOptionKeyParser = rawOptionKeyParser as (rawKey: string) => ValidValue | InvalidValue;

    this.payload = new ValidatableControl.Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>({

      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
       * Maybe it is not possible to tell TypeScript the correspondence of "rawOptionKeyParser" and
       *   "RadioButtonsGroup.Scenarios". */
      initialValue: initialValue as ValidValue | InvalidValue,

      getComponentInstance: (): ValidatableControl => this,

      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
       * Acceptable during α/β versions of this component but must and will be fixed before official release.
       * The switch/case may be the possible solution for this case. */
      validation: initializationProperties.validation as unknown as InputtedValueValidation<NonEmptyValueType, EmptyValueType>,

      onHasBecomeValidEventHandler: this.onPayloadHasBecomeValidEventHandler.bind(this),
      onHasBecomeInvalidEventHandler: this.onPayloadHasBecomeInvalidEventHandler.bind(this),
      onAsynchronousValidationStatusChangedEventHandler:
          this.onPayloadAsynchronousValidationStatusChangedEventHandler.bind(this)
    });

    this.shellComponent.$validationErrorsMessages = this.payload.validationErrorsMessages;

  }


  /* ━━━ Events Handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected onClickRadioButton(clickedRadioButton: RadioButton): void {

    if (clickedRadioButton.HTML_ValueAsOptionKey === this.payload.value) {
      return;
    }

    clickedRadioButton.$isSelected = true;

    for (const radioButton of this.radioButtons) {
      if (radioButton !== clickedRadioButton) {
        radioButton.$isSelected = false;
      }
    }


    this.payload.$setValue({ newValue: this.rawOptionKeyParser(clickedRadioButton.HTML_ValueAsOptionKey) });

    this.shellComponent.$validationErrorsMessages = this.payload.validationErrorsMessages;
    this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages = true;

  }

  protected onPayloadHasBecomeValidEventHandler(): void {
    this.shellComponent.rootElement.classList.remove(RadioButtonsGroup.INVALID_VALUE_STATE_CSS_CLASS);
  }

  protected onPayloadHasBecomeInvalidEventHandler(): void {

    if (this.$mustHighlightInvalidInputIfAnyValidationErrorsMessages) {
      this.shellComponent.rootElement.classList.add(RadioButtonsGroup.INVALID_VALUE_STATE_CSS_CLASS);
    }

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

}


namespace RadioButtonsGroup {

  export type SupportedValidatablePayloadValuesTypes =
      SupportedValidatablePayloadValuesTypes.NonEmpty |
      SupportedValidatablePayloadValuesTypes.Empty;

  export namespace SupportedValidatablePayloadValuesTypes {
    export type NonEmpty = string | number;
    export type Empty = string | number | null;
  }

  export enum Scenarios {
    alwaysSelectedStringKeyOption = "ALWAYS_SELECTED_STRING_KEY_OPTION",
    couldBeUnselectedInitiallyButRequiredStringKeyOption = "COULD_BE_UNSELECTED_INITIALLY_BUT_REQUIRED_STRING_KEY_OPTION",
    optionalStringKeyOption = "OPTIONAL_STRING_KEY_OPTION",
    alwaysSelectedNumericKeyOption = "ALWAYS_SELECTED_NUMERIC_KEY_OPTION",
    couldBeUnselectedInitiallyButRequiredNumericKeyOption = "COULD_BE_UNSELECTED_INITIALLY_BUT_REQUIRED_NUMERIC_KEY_OPTION",
    optionalNumericKeyOption = "OPTIONAL_NUMERIC_KEY_OPTION"
  }

  export type InitializationProperties =
      InitializationProperties.AlwaysSelectedStringKeyOptionScenario |
      InitializationProperties.CouldBeUnselectedInitiallyButRequiredStringKeyOptionScenario |
      InitializationProperties.OptionalStringKeyOptionScenario |
      InitializationProperties.AlwaysHasSelectedNumericValueScenario |
      InitializationProperties.CouldBeUnselectedInitiallyButRequiredNumericKeyOptionScenario |
      InitializationProperties.OptionalNumericKeyOptionScenario;

  export namespace InitializationProperties {

    export type Common<
      NonEmptyValueType extends SupportedValidatablePayloadValuesTypes.NonEmpty,
      EmptyValueType extends SupportedValidatablePayloadValuesTypes.Empty
    > = Readonly<
      (
        {
          rootElement: Readonly<{ selector: string; }>;
          contextElement?: ParentNode | Readonly<{ selector: string; }>;
        } |
        {
          rootElement: Element;
          contextElement?: never;
        }
      ) &
      {
        mustDisplayErrorsMessagesImmediatelyIfAny: boolean;
        validation: InputtedValueValidation<NonEmptyValueType, EmptyValueType>;
      }
    >;

    export type AlwaysSelectedStringKeyOptionScenario =
        Readonly<{
          scenario: Scenarios.alwaysSelectedStringKeyOption;
          overridingPreInputtedInitialValue?: string;
        }> &
        Common<string, string>;

    export type CouldBeUnselectedInitiallyButRequiredStringKeyOptionScenario =
        Readonly<{
          scenario: Scenarios.couldBeUnselectedInitiallyButRequiredStringKeyOption;
          overridingPreInputtedInitialValue?: string | null;
        }> &
        Common<string, null>;

    export type OptionalStringKeyOptionScenario =
        Readonly<{
          scenario: Scenarios.optionalStringKeyOption;
          overridingPreInputtedInitialValue?: string | null;
        }> &
        Common<string, null>;

    export type AlwaysHasSelectedNumericValueScenario =
        Readonly<{
          scenario: Scenarios.alwaysSelectedNumericKeyOption;
          overridingPreInputtedInitialValue?: number;
          rawOptionKeyParser: NumericRawKeyParser;
        }> &
        Common<number, number>;

    export type CouldBeUnselectedInitiallyButRequiredNumericKeyOptionScenario =
        Readonly<{
          scenario: Scenarios.couldBeUnselectedInitiallyButRequiredNumericKeyOption;
          overridingPreInputtedInitialValue?: number | null;
          rawOptionKeyParser: NumericRawKeyParser;
        }> &
        Common<number, null>;

    export type OptionalNumericKeyOptionScenario =
        Readonly<{
          scenario: Scenarios.optionalNumericKeyOption;
          overridingPreInputtedInitialValue?: number | null;
          rawOptionKeyParser: NumericRawKeyParser;
        }> &
        Common<number, null>;

  }


  export type NumericRawKeyParser = (rawKey: string) => number;

  export namespace RawKeysParses {

    export const DecimalSystemIntegerKeyParser: NumericRawKeyParser =
        (rawNumericKey: string): number => parseInt(rawNumericKey, 10);

    export const FloatingPointNumberKeyParser: NumericRawKeyParser =
        (rawNumericKey: string): number => parseFloat(rawNumericKey);

  }

}


export default RadioButtonsGroup;
