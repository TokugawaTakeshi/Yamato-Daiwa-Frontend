/* eslint-disable no-underscore-dangle -- [ CONVENTION ]
* The instance fields begins from the underscore MUST be changed only via setters. */
/* eslint-disable @typescript-eslint/member-ordering -- The members of this class are grouped semantically. */

/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import TextBoxYDF_GUI_ComponentDOM_AccessResources from "./TextBoxDOM_AccessResources";
import YDF_BUG_REPORTING_PAGE_URI from "../../../_Auxiliaries/YDF_BUG_REPORTING_PAGE_URI";

/* ─── Validation ─────────────────────────────────────────────────────────────────────────────────────────────────── */
import ValidatableControl from "../../_Validation/ValidatableControl";
import type InputtedValueValidation from "../../_Validation/InputtedValueValidation";

/* ─── Children Components ────────────────────────────────────────────────────────────────────────────────────────── */
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import type { RootElementDefinition } from "../../../../Logic/Types/RootElementDefinition";
import {
  isString,
  isNumber,
  isNaturalNumberOrZero,
  isUndefined,
  isNotUndefined,
  isNotNull,
  Logger,
  UnexpectedEventError,
  PoliteErrorsMessagesBuilder,
  InvalidParameterValueError
} from "@yamato-daiwa/es-extensions";
import {
  getExpectedToBeSingleDOM_Element,
  InputEventListener,
  FocusOutEventListener,
  DelegatedLeftClickEventListener,
  resolveContextDOM_ElementPolymorphicSpecification,
  cloneDOM_Element,
  extractAndValidateDatasetFromDOM_Element
} from "@yamato-daiwa/es-extensions-browserjs";
import onDifferentValueAssigned from "../../../_Auxiliaries/Decorators/onDifferentValueAssigned";


class TextBox<
  IsInputRequired extends boolean,
  NonEmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.NonEmpty,
  EmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.Empty = NonEmptyValueType,
  /* eslint-disable-next-line @stylistic/type-generic-spacing --
   * ESLint Stylistic plugin bug: this positive in completely nor related with the spacing around angled brackets. */
  ValidValue extends (IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)) =
      IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType),
  InvalidValue extends NonEmptyValueType | EmptyValueType = NonEmptyValueType | EmptyValueType
> implements ValidatableControl {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Accessing to DOM ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected static DOM_AccessResources: TextBox.DOM_AccessResources = TextBoxYDF_GUI_ComponentDOM_AccessResources;

  public static get ROOT_ELEMENT_SELECTOR(): string {
    return TextBox.DOM_AccessResources.rootElement.SELECTOR_BY_CSS_NAMESPACE_CLASS;
  }


  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Public ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public readonly INSTANCE_ID: string = TextBox.generateInstanceID();

  public readonly payload:
      ValidatableControl.Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>;

  public get rootElement(): HTMLElement {
    return this.shellComponent.rootElement;
  }


  /* ┅┅┅ Protected ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected readonly rawInputTypeTransformer: (rawInput: string) => NonEmptyValueType | EmptyValueType;

  protected readonly validityHighlightingActivationMode:
      ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes;

  protected readonly initialValidityHighlightingActivationMode:
      ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes;

  /* [ Approach ]
   * Unlike the invalid value highlighting, the library user may not wish the specific highlighting (usually green-color
   *   based) for inputted valid value, thus the additional flag is required. */
  protected readonly mustHighlightValidInputWhenItIsValid: boolean;

  protected readonly isAutoSizingEnabled: boolean = true;


  /* ╍╍╍ DOM ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  protected readonly shellComponent: ValidatableControlShell;
  protected readonly nativeInputAcceptingElement: HTMLInputElement | HTMLTextAreaElement;

  protected passwordDisplayingToggle?: HTMLElement;


  /* ─── Events ───────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected inputEventListener: InputEventListener;

  protected focusOutEventListener: FocusOutEventListener;
  protected readonly onFocusOutExternalEventHandler?: () => unknown;

  protected clickEventListener?: DelegatedLeftClickEventListener;

  protected onValueCopiedExternalEventHandler?: (copiedValue: string) => unknown;


  /* ━━━ Reactivity ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  /* ┅┅┅ Invalid Input Highlighting ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected _mustHighlightInputtedValueValidity: boolean;

  protected get $mustHighlightInputtedValueValidity(): boolean {
    return this._mustHighlightInputtedValueValidity;
  }

  @onDifferentValueAssigned()
  protected set $mustHighlightInputtedValueValidity(_value: boolean) {

    if (this.$mustHighlightInputtedValueValidity) {

      this.shellComponent.$mustDisplayValidationErrorsMessagesIfAny = true;

      if (this.payload.isInvalid) {

        this.shellComponent.rootElement.classList.add(
          TextBox.DOM_AccessResources.rootElement.stateDependentCSS_Classes.invalidInputState
        );

        if (this.mustHighlightValidInputWhenItIsValid) {
          this.shellComponent.rootElement.classList.remove(
            TextBox.DOM_AccessResources.rootElement.stateDependentCSS_Classes.validInputState
          );
        }

      }

      return;

    }


    this.shellComponent.rootElement.classList.remove(
      TextBox.DOM_AccessResources.rootElement.stateDependentCSS_Classes.invalidInputState
    );

    if (this.mustHighlightValidInputWhenItIsValid) {
      this.shellComponent.rootElement.classList.add(
        TextBox.DOM_AccessResources.rootElement.stateDependentCSS_Classes.validInputState
      );
    }

    this.shellComponent.$mustDisplayValidationErrorsMessagesIfAny = false;

  }


  /* ┅┅┅ Password Displaying ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* [ Approach ]
   * This field is actually mutable but must be updated only via setter with `@onDifferentValueAssigned` decorator. */
  private readonly _isPasswordDisplaying: boolean = false;

  protected get $isPasswordDisplaying(): boolean {
    return this._isPasswordDisplaying;
  }

  @onDifferentValueAssigned()
  protected set $isPasswordDisplaying(_mustDisplayPasswordNow: boolean) {

    (
      this.passwordDisplayingToggle ??
      (
        this.passwordDisplayingToggle = getExpectedToBeSingleDOM_Element({
          selector: TextBox.DOM_AccessResources.passwordDisplayingToggle.INTERNALLY_UNIQUE_SELECTOR,
          contextElement: this.rootElement,
          expectedDOM_ElementSubtype: HTMLElement
        })
      )
    ).ariaChecked = String(this.$isPasswordDisplaying);

    this.nativeInputAcceptingElement.setAttribute("type", this.$isPasswordDisplaying ? "text" : "password");
    this.nativeInputAcceptingElement.focus();

  }


  /* ━━━ Public Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Initialization of One ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static initializeOne<IsRequired extends boolean>(
    initializationProperties: TextBox.Initialization.Singular.StringPayloadValue.Properties<IsRequired>
  ): TextBox<IsRequired, string>;

  public static initializeOne<
    IsRequired extends boolean,
    NonEmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.NonEmpty,
    EmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.Empty = NonEmptyValueType,
    ValidValue extends NonEmptyValueType = NonEmptyValueType,
    InvalidValue extends (NonEmptyValueType | EmptyValueType) = ValidValue
  >(
    initializationProperties:
        TextBox.Initialization.Singular.CustomPayloadValue.
            Properties<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>
  ): TextBox<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>;

  public static initializeOne<
    IsRequired extends boolean,
    NonEmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.NonEmpty,
    EmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.Empty = NonEmptyValueType,
    ValidValue extends NonEmptyValueType = NonEmptyValueType,
    InvalidValue extends (NonEmptyValueType | EmptyValueType) = ValidValue
  >(
    initializationProperties:
        TextBox.Initialization.Singular.Properties<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>
  ): TextBox<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue> {
    return new TextBox<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>({
      ...initializationProperties,
      rootElement: "selector" in initializationProperties.rootElement ?
          getExpectedToBeSingleDOM_Element({
            selector: initializationProperties.rootElement.selector,
            contextElement: initializationProperties.contextElement
          }) :
          initializationProperties.rootElement
    });
  }

  /* ┅┅┅ Initialization of Multiple Ones ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static initializeMultiple<IsRequired extends boolean>(
    initializationProperties: TextBox.Initialization.Multi.StringPayloadValue.Properties<IsRequired>
  ): Array<TextBox<IsRequired, string>>;

  public static initializeMultiple<
    IsRequired extends boolean,
    NonEmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.NonEmpty,
    EmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.Empty = NonEmptyValueType,
    ValidValue extends NonEmptyValueType = NonEmptyValueType,
    InvalidValue extends (NonEmptyValueType | EmptyValueType) = ValidValue
  >(
    initializationProperties:
        TextBox.Initialization.Multi.CustomPayloadValue.
            Properties<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>
  ): Array<TextBox<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>>;

  public static initializeMultiple<
    IsRequired extends boolean,
    NonEmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.NonEmpty,
    EmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.Empty = NonEmptyValueType,
    ValidValue extends NonEmptyValueType = NonEmptyValueType,
    InvalidValue extends (NonEmptyValueType | EmptyValueType) = ValidValue
  >(
    initializationProperties:
        TextBox.Initialization.Multi.Properties<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>
  ): Array<TextBox<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>> {
    return (
      Array.isArray(initializationProperties.rootElements) ?
          initializationProperties.rootElements :
          Array.from(
            (resolveContextDOM_ElementPolymorphicSpecification(initializationProperties.contextElement) ?? document).
                querySelectorAll(TextBox.ROOT_ELEMENT_SELECTOR)
          )
    ).
        map(
          (rootElement: Element): TextBox<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue> =>
              new TextBox<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>({
                ...initializationProperties,
                rootElement
              })
        );
  }


  /* ━━━ Public Instance Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Interface Implementation ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public highlightInvalidInput(): this {
    this.$mustHighlightInputtedValueValidity = true;
    return this;
  }

  public focus(): this {
    this.nativeInputAcceptingElement.focus();
    return this;
  }

  public getRootElementOffsetCoordinates(): ValidatableControl.RootElementOffsetCoordinates {
    return this.shellComponent.getRootElementOffsetCoordinates();
  }

  public resetValidityHighlightingStateToInitial(): void {
    this.$mustHighlightInputtedValueValidity =
        this.initialValidityHighlightingActivationMode ===
            ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes.immediate;
  }


  /* ┅┅┅ Other ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public unmountAndFinalize(): void {
    this.rootElement.remove();
    this.inputEventListener.utilize();
    this.focusOutEventListener.utilize();
    this.clickEventListener?.utilize();
  }


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(
    {
      rootElement,
      overridingPreInputtedInitialValue,
      invalidInputPrevention,
      mustHighlightValidInputWhenItIsValid = false,
      onFocusLostEventHandler,
      validation,
      ...initializationProperties
    }: TextBox.ConstructorParameter<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>
  ) {

    if (!rootElement.classList.contains(TextBox.DOM_AccessResources.rootElement.CSS_NAMESPACE_CLASS)) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "initializationProperties",
          messageSpecificPart:
              "The following root element definitely not belong to TextBox, the YDF GUI component.\n" +
              cloneDOM_Element({ targetElement: rootElement, mustCopyAllChildren: false }).outerHTML
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "TextBox.<initilizingMethod>(initializationProperties)->constructor(initializationProperties)"
      });
    }


    /* ┅┅┅ DOM I ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    /* ╍╍╍ Native Input Accepting Element ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
    const nativeInputAcceptingElement: Element = getExpectedToBeSingleDOM_Element({
      selector: TextBox.DOM_AccessResources.inputOrTextArea.INTERNALLY_UNIQUE_SELECTOR,
      contextElement: rootElement
    });

    if (nativeInputAcceptingElement instanceof HTMLInputElement || nativeInputAcceptingElement instanceof HTMLTextAreaElement) {

      this.nativeInputAcceptingElement = nativeInputAcceptingElement;

    } else {

      Logger.logError({
        errorType: UnexpectedEventError.NAME,
        title: UnexpectedEventError.localization.defaultTitle,
        description: PoliteErrorsMessagesBuilder.buildMessage({
          technicalDetails:
              "The element corresponding to selector " +
                `"${ TextBox.DOM_AccessResources.inputOrTextArea.INTERNALLY_UNIQUE_SELECTOR }" ` +
                "must be the instance of either \"HTMLInputElement\" or \"HTMLTextAreaElement\" while actually none of them.",
          politeExplanation:
              "The problem has occurred during the accessing to \"input\" or \"textarea\" element in the DOM three " +
              "Of course this functionality has been checked during the testing, however it looks like we has missed " +
                "some combination of circumstances when it does not work.",
          bugTrackerURI: YDF_BUG_REPORTING_PAGE_URI
        }),
        occurrenceLocation: "TextBox.constructor(initializationProperties)"
      });

      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
      * For the valid TypeScript, ever `nativeInputAcceptingElement` must be initialized, or the error must be thrown.
      * The second scenario makes this class completely unable to use. */
      this.nativeInputAcceptingElement = nativeInputAcceptingElement as HTMLInputElement;

    }


    /* ┅┅┅ Payload ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    this.rawInputTypeTransformer = "rawInputTypeTransformer" in initializationProperties ?

        initializationProperties.rawInputTypeTransformer :

        /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
        * With current limitations of overloading API in TypeScript, it is unlikely that there is another way to tell
        *   TypeScript: "When the constructor parameter is compatible with the `StringPayloadValue` subtype, the `TextBox`
        *   instance will have `TextBox<string, string, string, string>` generic parameters, thus the
        *   `rawInputTypeTransformer` field will be of `(rawValue: string): string` type, otherwise it will be of
        *   `(rawInput: string) => NonEmptyValueType | EmptyValueType` type". */
        ((rawValue: string): string => rawValue) as (rawInput: string) => NonEmptyValueType | EmptyValueType;


    let payloadInitialValue: NonEmptyValueType | EmptyValueType;

    if (isUndefined(overridingPreInputtedInitialValue)) {

      payloadInitialValue = this.rawInputTypeTransformer(this.nativeInputAcceptingElement.value);

    } else {

       if (isString(overridingPreInputtedInitialValue)) {

        /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
        * With current limitations of overloading API in TypeScript, it is unlikely that there is another way to tell
        *   TypeScript: "When the constructor parameter is compatible with the `StringPayloadValue` subtype, the value
        *   of `payloadInitialValue` will be a string, otherwise it will be of type `NonEmptyValueType | EmptyValueType` */
        payloadInitialValue = overridingPreInputtedInitialValue as NonEmptyValueType | EmptyValueType;

      } else {

        payloadInitialValue = overridingPreInputtedInitialValue;

      }


      if (isString(payloadInitialValue)) {
        this.nativeInputAcceptingElement.value = payloadInitialValue;
      } else if (isNumber(payloadInitialValue, { mustConsiderNaN_AsNumber: true })) {
        this.nativeInputAcceptingElement.value = payloadInitialValue.toString();
      } else {
        this.nativeInputAcceptingElement.value = "";
      }

    }

    this.payload = new ValidatableControl.Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>({

      initialValue: payloadInitialValue,

      getComponentInstance: (): ValidatableControl => this,

      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
        * With current limitations of overloading API in TypeScript, it is unlikely that there is another way to tell
        *   TypeScript: "When the constructor parameter is compatible with the `StringPayloadValue` subtype, the first
        *   two generic parameters of the `payload` field will be of `string` type, otherwise of explicitly specified
        *   `NonEmptyValueType`/`EmptyValueType` respectively". */
      validation: validation as InputtedValueValidation<NonEmptyValueType, EmptyValueType>,

      onHasBecomeValidEventHandler: {
        handler: this.onPayloadHasBecomeValidEventHandler.bind(this),
        ID: TextBox.generateOnPayloadHasBecomeValidEventHandlerID(this.INSTANCE_ID)
      },

      onHasBecomeInvalidEventHandler: {
        handler: this.onPayloadHasBecomeInvalidEventHandler.bind(this),
        ID: TextBox.generateOnPayloadHasBecomeInvalidEventHandlerID(this.INSTANCE_ID)
      },

      onAsynchronousValidationStatusChangedEventHandler: {
        handler: this.onPayloadAsynchronousValidationStatusChangedEventHandler.bind(this),
        ID: TextBox.generateOnAsynchronousValidationStatusChangedEventHandlerID(this.INSTANCE_ID)
      }

    });

    this.validityHighlightingActivationMode =

        "validityHighlightingActivationMode" in initializationProperties ?

            initializationProperties.validityHighlightingActivationMode :

            initializationProperties.decideValidityHighlightingActivationMode(
              /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
              * Possibly the TypeScript bug. According to the error message, "argument of type
              *   'Payload<NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>' is not assignable to parameter
              *   of type 'Payload<string, string, string, string> &
              *   Payload<NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>'", while actually
              *   `decideValidityHighlightingActivationMode` is a union, not an intersection (see the definition of
              *   the `ConstructorParameter`). */
              this.payload as (
                ValidatableControl.Payload<IsInputRequired, string, string, string, string> &
                ValidatableControl.Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>
              )
            );

    this.initialValidityHighlightingActivationMode = this.validityHighlightingActivationMode;

    this.mustHighlightValidInputWhenItIsValid = mustHighlightValidInputWhenItIsValid;


    /* ┅┅┅ DOM II ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    /* ╍╍╍ Shell Component ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
    this.shellComponent = ValidatableControlShell.initializeOne({
      rootElement,
      mustDisplayErrorsMessagesIfAny: this.$mustHighlightInputtedValueValidity,
      initialValidationErrorsMessages: this.payload.validationErrorsMessages
    });

    const {
      autoResizingForMultilineMode
    }: Readonly<{
      autoResizingForMultilineMode: boolean;
    }> = extractAndValidateDatasetFromDOM_Element({
      targetDOM_Element: this.shellComponent.rootElement,
      mustDeleteMentionedDataAttributesOnceExtracted: true,
      targetDOM_ElementNameOrSelectorForLogging: "root element",
      validDataSpecification: {
        auto_resizing_for_multiline_mode: {
          newName: "autoResizingForMultilineMode",
          preValidationModifications: (rawValue: unknown): unknown => isString(rawValue),
          type: Boolean,
          isUndefinedForbidden: true,
          isNullForbidden: true
        }
      }
    });


    /* ╍╍╍ Native Input Accepting Element ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
    this.isAutoSizingEnabled =
        this.nativeInputAcceptingElement instanceof HTMLTextAreaElement && autoResizingForMultilineMode;

    this.initializeHTML_AttributesOfNativeInputAcceptingElement(invalidInputPrevention);


    /* ┅┅┅ Reactivity ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    this._mustHighlightInputtedValueValidity =
        this.validityHighlightingActivationMode ===
            ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes.immediate;


    /* ┅┅┅ Events ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
    this.inputEventListener = new InputEventListener({
      targetElement: this.nativeInputAcceptingElement,
      handler: this.onInput.bind(this)
    });

    this.focusOutEventListener = new FocusOutEventListener({
      targetElement: this.nativeInputAcceptingElement,
      handler: this.onFocusOut.bind(this)
    });

    if (isNotUndefined(onFocusLostEventHandler)) {
      this.onFocusOutExternalEventHandler = onFocusLostEventHandler;
    }

    if (
      isNotNull(
        this.rootElement.querySelector(TextBox.DOM_AccessResources.passwordDisplayingToggle.INTERNALLY_UNIQUE_SELECTOR)
      ) ||
          isNotNull(this.rootElement.querySelector(TextBox.DOM_AccessResources.valueCopyingButton.INTERNALLY_UNIQUE_SELECTOR))
    ) {

      this.clickEventListener = DelegatedLeftClickEventListener.createAndAssign({
        delegatingContainer: this.rootElement,
        handlersBySelectors: {
          [TextBox.DOM_AccessResources.passwordDisplayingToggle.INTERNALLY_UNIQUE_SELECTOR]:
              this.onPasswordDisplayingToggleClicked.bind(this),
          [TextBox.DOM_AccessResources.valueCopyingButton.INTERNALLY_UNIQUE_SELECTOR]:
              this.onValueCopyingButtonClicked.bind(this)
        }
      });

    }

  }


  /* ━━━ Public Accessors / Mutators ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public get $isReadonly(): boolean {
    return this.nativeInputAcceptingElement.readOnly;
  }

  public set $isReadonly(value: boolean) {
    if (this.nativeInputAcceptingElement.readOnly !== value) {
      this.nativeInputAcceptingElement.readOnly = value;
    }
  }

  public get $isDisabled(): boolean {
    return this.nativeInputAcceptingElement.disabled;
  }

  public set $isDisabled(value: boolean) {
    if (this.nativeInputAcceptingElement.disabled !== value) {
      this.nativeInputAcceptingElement.disabled = value;
    }
  }


  /* ━━━ Events Handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected onInput(): void {

    this.payload.$setValue({
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
      * `newValue` requires the parameter of `ValidValue | InvalidValue` type while `rawInputTypeTransformer` returns
      *    the value of the `NonEmptyValueType | EmptyValueType` type.
      *  However, according to the constraints, both `NonEmptyValueType` and `EmptyValueType` can be the `InvalidValue`,
      *    and `ValidValue` can be at least `NonEmptyValueType` and depending on `IsInputRequired` also the
      *    `NonEmptyValueType`.
      *  From the view point of the logic, no TypeScript errors should be. */
      newValue: this.rawInputTypeTransformer(this.nativeInputAcceptingElement.value) as ValidValue | InvalidValue,
      asynchronousValidationDelay__seconds: 1
    });

    this.shellComponent.$validationErrorsMessages = this.payload.validationErrorsMessages;

    if (
      !this.$mustHighlightInputtedValueValidity &&
          this.validityHighlightingActivationMode ===
              ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes.onFirstInputtedCharacter
    ) {
      this.$mustHighlightInputtedValueValidity = true;
    }

    if (this.isAutoSizingEnabled) {
      this.nativeInputAcceptingElement.style.height = "auto";
      this.nativeInputAcceptingElement.style.height = `${ this.nativeInputAcceptingElement.scrollHeight }px`;
    }

  }

  protected onFocusOut(): void {
    this.$mustHighlightInputtedValueValidity = true;
    this.onFocusOutExternalEventHandler?.();
  }

  protected onPasswordDisplayingToggleClicked(): void {
    this.$isPasswordDisplaying = !this.$isPasswordDisplaying;
  }

  protected onValueCopyingButtonClicked(): void {

    const stringifiedValueToCopy: string = String(this.payload.value ?? "");

    navigator.clipboard.writeText(stringifiedValueToCopy).catch(Logger.logPromiseError);
    this.onValueCopiedExternalEventHandler?.(stringifiedValueToCopy);

  }


  /* ┅┅┅ Payload ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected onPayloadHasBecomeValidEventHandler(): void {

    this.shellComponent.rootElement.classList.
        remove(TextBox.DOM_AccessResources.rootElement.stateDependentCSS_Classes.invalidInputState);

    if (this.mustHighlightValidInputWhenItIsValid) {
      this.shellComponent.rootElement.classList.
          add(TextBox.DOM_AccessResources.rootElement.stateDependentCSS_Classes.validInputState);
    }

    this.nativeInputAcceptingElement.removeAttribute("aria-invalid");

  }

  protected onPayloadHasBecomeInvalidEventHandler(): void {

    if (this.$mustHighlightInputtedValueValidity) {

      this.shellComponent.rootElement.classList.
          add(TextBox.DOM_AccessResources.rootElement.stateDependentCSS_Classes.invalidInputState);

      if (this.mustHighlightValidInputWhenItIsValid) {
        this.shellComponent.rootElement.classList.
            remove(TextBox.DOM_AccessResources.rootElement.stateDependentCSS_Classes.validInputState);
      }

    }

    this.nativeInputAcceptingElement.setAttribute("aria-invalid", "");

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


  /* ━━━ Initialization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected initializeHTML_AttributesOfNativeInputAcceptingElement(
    invalidInputPrevention?: TextBox.Initialization.Common.Properties.PayloadTypeIndependent.InvalidInputPrevention
  ): void {

    if (this.isAutoSizingEnabled) {
      this.nativeInputAcceptingElement.style.height = `${ this.nativeInputAcceptingElement.scrollHeight }px`;
      this.nativeInputAcceptingElement.style.overflowY = "hidden";
    }

    if (this.payload.validation.isInputRequired()) {
      this.nativeInputAcceptingElement.setAttribute("required", "");
    } else {
      this.nativeInputAcceptingElement.removeAttribute("required");
    }

    if (isNaturalNumberOrZero(invalidInputPrevention?.minimalCharactersCount)) {
      this.nativeInputAcceptingElement.setAttribute(
        "minlength", String(invalidInputPrevention.minimalCharactersCount)
      );
    }

    if (isNaturalNumberOrZero(invalidInputPrevention?.maximalCharactersCount)) {
      this.nativeInputAcceptingElement.setAttribute(
        "maxlength", String(invalidInputPrevention.maximalCharactersCount)
      );
    }

    if (isNaturalNumberOrZero(invalidInputPrevention?.minimalNumericValue)) {
      this.nativeInputAcceptingElement.setAttribute(
        "min", String(invalidInputPrevention.minimalNumericValue)
      );
    }

    if (isNaturalNumberOrZero(invalidInputPrevention?.maximalNumericValue)) {
      this.nativeInputAcceptingElement.setAttribute(
        "max", String(invalidInputPrevention.maximalNumericValue)
      );
    }

  }


  /* ━━━ Routines ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ IDs Generating ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected static counterForInstanceID_Generating: number = 0;

  protected static generateInstanceID(): string {
    TextBox.counterForInstanceID_Generating++;
    return `TEXT_BOX--YDF-${ TextBox.counterForInstanceID_Generating }`;
  }


  protected static counterForOnPayloadHasBecomeValidEventHandlerID_Generating: number = 0;

  protected static generateOnPayloadHasBecomeValidEventHandlerID(componentID: string): string {
    TextBox.counterForOnPayloadHasBecomeValidEventHandlerID_Generating++;
    return `${ componentID }-ON_PAYLOAD_HAS_BECOME_VALID_EVENT_HANDLER-` +
        `${ TextBox.counterForOnPayloadHasBecomeValidEventHandlerID_Generating }`;
  }


  protected static counterForOnPayloadHasBecomeInvalidEventHandlerID_Generating: number = 0;

  protected static generateOnPayloadHasBecomeInvalidEventHandlerID(componentID: string): string {
    TextBox.counterForOnPayloadHasBecomeInvalidEventHandlerID_Generating++;
    return `${ componentID }-ON_PAYLOAD_HAS_BECOME_INVALID_EVENT_HANDLER-` +
        `${ TextBox.counterForOnPayloadHasBecomeInvalidEventHandlerID_Generating }`;
  }


  protected static counterForOnAsynchronousValidationStatusChangedEventHandlerIDsGenerating: number = 0;

  protected static generateOnAsynchronousValidationStatusChangedEventHandlerID(componentID: string): string {
    TextBox.counterForOnAsynchronousValidationStatusChangedEventHandlerIDsGenerating++;
    return `${ componentID }-ON_ASYNCHRONOUS_VALIDATION_STATUS_CHANGED_EVENT_HANDLER-` +
        `${ TextBox.counterForOnAsynchronousValidationStatusChangedEventHandlerIDsGenerating }`;
  }

}


namespace TextBox {

  export namespace SupportedValidatablePayloadValuesTypes {
    export type NonEmpty = string | number;
    export type Empty = string | number | null;
  }

  export type ConstructorParameter<
    IsInputRequired extends boolean,
    NonEmptyValueType extends SupportedValidatablePayloadValuesTypes.NonEmpty,
    EmptyValueType extends SupportedValidatablePayloadValuesTypes.Empty,
    ValidValue extends (IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)),
    InvalidValue extends NonEmptyValueType | EmptyValueType
  > =
      Readonly<{ rootElement: Element; }> &
      (
        Initialization.Common.Properties.StringPayloadValue<IsInputRequired> |
        Initialization.Common.Properties.
            CustomPayloadValue<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>
      );

  export namespace Initialization {

    export namespace Common {

      export namespace Properties {

        export type PayloadTypeIndependent =
            Readonly<{
              invalidInputPrevention?: PayloadTypeIndependent.InvalidInputPrevention;
              mustHighlightValidInputWhenItIsValid?: boolean;
              onFocusLostEventHandler?: () => void;
              onValueCopiedExternalEventHandler?: () => void;
            }>;

        export namespace PayloadTypeIndependent {

          export type InvalidInputPrevention = Readonly<{
            minimalCharactersCount?: number;
            maximalCharactersCount?: number;
            minimalNumericValue?: number;
            maximalNumericValue?: number;
          }>;

        }

        export type StringPayloadValue<IsInputRequired extends boolean> =

            PayloadTypeIndependent &

            Readonly<{
              overridingPreInputtedInitialValue?: string;
              validation: InputtedValueValidation<string, string>;
            }> &

            ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModeDefinition<
              IsInputRequired, string, string, string, string
            >;

        export type CustomPayloadValue<
          IsInputRequired extends boolean,
          NonEmptyValueType extends SupportedValidatablePayloadValuesTypes.NonEmpty,
          EmptyValueType extends SupportedValidatablePayloadValuesTypes.Empty,
          ValidValue extends (IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)),
          InvalidValue extends NonEmptyValueType | EmptyValueType
        > =

            PayloadTypeIndependent &

            Readonly<{
              rawInputTypeTransformer: (rawInput: string) => NonEmptyValueType | EmptyValueType;
              overridingPreInputtedInitialValue?: NonEmptyValueType | EmptyValueType;
              validation: InputtedValueValidation<NonEmptyValueType, EmptyValueType>;
            }> &

            ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModeDefinition<
              IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue
            >;

      }

    }

    export namespace Singular {

      export type Properties<
        IsRequired extends boolean,
        NonEmptyValueType extends SupportedValidatablePayloadValuesTypes.NonEmpty,
        EmptyValueType extends SupportedValidatablePayloadValuesTypes.Empty,
        ValidValue extends (IsRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)),
        InvalidValue extends NonEmptyValueType | EmptyValueType
      > =
          StringPayloadValue.Properties<IsRequired> |
          CustomPayloadValue.Properties<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>;

      export namespace StringPayloadValue {

        /* eslint-disable-next-line @typescript-eslint/no-shadow --
        * The generalizing top-level "property" type must not be accessed from here. */
        export type Properties<IsRequired extends boolean> =
            RootElementDefinition &
            Common.Properties.StringPayloadValue<IsRequired>;

      }

      export namespace CustomPayloadValue {

        /* eslint-disable-next-line @typescript-eslint/no-shadow --
         * The generalizing top-level "property" type must not be accessed from here. */
        export type Properties<
          IsRequired extends boolean,
          NonEmptyValueType extends SupportedValidatablePayloadValuesTypes.NonEmpty,
          EmptyValueType extends SupportedValidatablePayloadValuesTypes.Empty,
          ValidValue extends (IsRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)),
          InvalidValue extends NonEmptyValueType | EmptyValueType
        > =
            RootElementDefinition &
            Common.Properties.CustomPayloadValue<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>;

      }

    }

    export namespace Multi {

      export type Properties<
        IsRequired extends boolean,
        NonEmptyValueType extends SupportedValidatablePayloadValuesTypes.NonEmpty,
        EmptyValueType extends SupportedValidatablePayloadValuesTypes.Empty,
        ValidValue extends (IsRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)),
        InvalidValue extends NonEmptyValueType | EmptyValueType
      > =
          StringPayloadValue.Properties<IsRequired> |
          CustomPayloadValue.Properties<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>;

      export namespace StringPayloadValue {

        /* eslint-disable-next-line @typescript-eslint/no-shadow --
         * The generalizing top-level "property" type must not be accessed from here. */
        export type Properties<IsRequired extends boolean> =
            RootElementsDefinition &
            Common.Properties.StringPayloadValue<IsRequired>;

      }

      export namespace CustomPayloadValue {

        /* eslint-disable-next-line @typescript-eslint/no-shadow --
         * The generalizing top-level "property" type must not be accessed from here. */
        export type Properties<
          IsRequired extends boolean,
          NonEmptyValueType extends SupportedValidatablePayloadValuesTypes.NonEmpty,
          EmptyValueType extends SupportedValidatablePayloadValuesTypes.Empty,
          ValidValue extends (IsRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)),
          InvalidValue extends NonEmptyValueType | EmptyValueType
        > =
            RootElementsDefinition &
            Common.Properties.CustomPayloadValue<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>;

      }

      export type RootElementsDefinition = Readonly<
        {
          rootElements: Readonly<{ selector: string; }>;
          contextElement?: ParentNode | Readonly<{ selector: string; }>;
        } |
        {
          rootElements: ReadonlyArray<Element>;
          contextElement?: never;
        }
      >;

    }

  }

  export namespace RawInputModifiers {

    export function keepStringValueAsIs(rawValue: string): string { return rawValue; }

    export function convertToNumberHerewithEmptyStringToZero(rawValue: string): number {

      if (rawValue === "") {
        return 0;
      }


      const numericValue: number = Number(rawValue);

      return isNaN(numericValue) ? 0 : numericValue;

    }

    export function convertToIntegerHerewithEmptyStringToNull(rawValue: string): number | null {

      if (rawValue === "") {
        return null;
      }


      const numericValue: number = Number(rawValue);

      return Number.isInteger(numericValue) ? numericValue : null;

    }

  }

  export type DOM_AccessResources = Readonly<{

    rootElement: Readonly<{

      CSS_NAMESPACE_CLASS: string;
      SELECTOR_BY_CSS_NAMESPACE_CLASS: string;

      stateDependentCSS_Classes: Readonly<{
        validInputState: string;
        invalidInputState: string;
      }>;

      dataset: Readonly<{
        [
          key in
              "instanceID" |
              "autoResizingForMultilineMode"
        ]: Readonly<{
          DATESET_KEY: string;
          DATA_ATTRIBUTE_KEY: string;
        }>
      }>;

    }>;

    inputOrTextArea: Readonly<{
      DATA_ATTRIBUTE_KEY: string;
      INTERNALLY_UNIQUE_SELECTOR: string;
    }>;

    passwordDisplayingToggle: Readonly<{

      DATA_ATTRIBUTE_KEY: string;
      INTERNALLY_UNIQUE_SELECTOR: string;

      icons: Readonly<{
        [
          key in
              "passwordDisplayingState" |
              "passwordHiddenState"
        ]: Readonly<{
          DATA_ATTRIBUTE_KEY: string;
          INTERNALLY_UNIQUE_SELECTOR: string;
        }>
      }>;

    }>;

    valueCopyingButton: Readonly<{
      DATA_ATTRIBUTE_KEY: string;
      INTERNALLY_UNIQUE_SELECTOR: string;
    }>;

  }>;

}


export default TextBox;
