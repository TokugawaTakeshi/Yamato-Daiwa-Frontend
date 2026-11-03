import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell";
import { isNotUndefined, isNumber, isString, Logger, UnexpectedEventError } from "@yamato-daiwa/es-extensions";
import InputtableControl from "../InputtableControl";
import ValidatableControl from "../ValidatableControl";
import Button from "../../Buttons/Plain/Button";
import ComponentsAuxiliaries from "../../../ComponentsAuxiliaries";
import checkForNonEmptyStringReactProperties from "../../../.././ReactPropertiesValidators/checkForNonEmptyStringReactProperties";
import InvalidReactPropertyError from "../../../../Errors/./InvalidReactProperty/InvalidReactPropertyError";


class TextBox<
  IsInputRequired extends boolean,
  NonEmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.NonEmpty,
  EmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.Empty = NonEmptyValueType,
  /* eslint-disable-next-line @stylistic/type-generic-spacing --
   * ESLint Stylistic plugin bug: this positive in completely nor related with the spacing around angled brackets. */
  ValidValue extends (IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)) =
      IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType),
  InvalidValue extends NonEmptyValueType | EmptyValueType = NonEmptyValueType | EmptyValueType
> extends InputtableControl implements ValidatableControl {

  public static CSS_NAMESPACE: string = "TextBox--YDF";


  /* ━━━ Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public declare props: TextBox.Properties<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>;

  public static get defaultProps():
      InputtableControl.DefaultProperties &
      Required<
        Pick<
          TextBox.Properties,
          "HTML_Type" |
          "multiline" |
          "autoResizingForMultilineMode" |
          "isInputtingOnlyOfNonNegativeIntegersOfRegularNotationAllowed" |
          "mustValueBeTheDigitsSequence" |
          "mustConvertEmptyValueToZero" |
          "mustConvertEmptyValueToNull" |
          "hasValueCopyingButton" |
          "hasPasswordDisplayingToggle" |
          "geometricModifiers"
        >
      >
  {
    return {
      ...InputtableControl.defaultProps,
      HTML_Type: TextBox.HTML_Types.regular,
      multiline: false,
      autoResizingForMultilineMode: true,
      isInputtingOnlyOfNonNegativeIntegersOfRegularNotationAllowed: false,
      mustValueBeTheDigitsSequence: false,
      mustConvertEmptyValueToZero: false,
      mustConvertEmptyValueToNull: false,
      hasValueCopyingButton: false,
      hasPasswordDisplayingToggle: false,
      geometricModifiers: []
    };
  }

  protected validateProperties(): void {

    checkForNonEmptyStringReactProperties({
      componentName: "TextBox",
      propertiesData: [
        {
          name: "placeholder",
          isRequiredOrHasDefaultValue: false,
          value: this.props.label
        },
        {
          name: "autocomplete",
          isRequiredOrHasDefaultValue: false,
          value: this.props.label
        },
        {
          name: "inputOrTextareaElementHTML_ID",
          isRequiredOrHasDefaultValue: false,
          value: this.props.label
        },
        {
          name: "labelElementHTML_ID",
          isRequiredOrHasDefaultValue: false,
          value: this.props.label
        },
        {
          name: "className",
          isRequiredOrHasDefaultValue: false,
          value: this.props.className
        }
      ]
    });

    if (
      isNotUndefined(this.props.minimalNumericValue) &&
          isNotUndefined(this.props.maximalNumericValue) &&
          this.props.minimalNumericValue > this.props.maximalNumericValue
    ) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidReactPropertyError({
          componentName: TextBox.CSS_NAMESPACE,
          propertyName: "minimalNumericValue",
          messageSpecificPart: "`minimalNumericValue` is greater than `maximalNumericValue`."
        }),
        title: InvalidReactPropertyError.localization.defaultTitle,
        occurrenceLocation: "textBox.InvalidReactPropertyError()"
      });
    }

    // TODO Vueにはデコレーターに間違いがあるのだ！
    //  @onVueDataOrPropertyChanged("minimalNumericValue", { immediate: true })
    //   @onVueDataOrPropertyChanged("maximalNumericValue", { immediate: true })

    if (
      isNotUndefined(this.props.minimalCharactersCount) &&
          isNotUndefined(this.props.maximalCharactersCount) &&
          this.props.minimalCharactersCount > this.props.maximalCharactersCount
    ) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidReactPropertyError({
          componentName: TextBox.CSS_NAMESPACE,
          propertyName: "minimalCharactersCount",
          messageSpecificPart: "`minimalCharactersCount` is greater than `maximalCharactersCount`."
        }),
        title: InvalidReactPropertyError.localization.defaultTitle,
        occurrenceLocation: "textBox.InvalidReactPropertyError()"
      });
    }

  }


  /* ┅┅┅ State ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */

  public state: TextBox.State;

  // public declare setState: (updatedState: Partial<TextBox.State>) => void;


  /* ━━━ Input & Validation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  // (rawValue: unknown): boolean =>
  //     isString(rawValue) ||
  //     isNumber(rawValue, { mustConsiderNaN_AsNumber: false }) ||
  //     isNull(rawValue)


  /* ┅┅┅ Highlighting ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly ValidityHighlightingActivationModes:
      typeof ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes =
          ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes;

  // TODO Vue にも「ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes」で問題ない。
  protected initialValidityHighlightingActivationMode:
      ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes;

  protected mustHighlightInputtedValueValidity: boolean;

  protected get mustHighlightInvalidInputtedValue(): boolean {
    return this.props.payload.isInvalid && this.mustHighlightInputtedValueValidity;
  }

  protected get mustHighlightValidInputtedValue(): boolean {
    return this.props.mustHighlightValidInputWhenItIsValid &&
        !this.props.payload.isInvalid &&
        this.mustHighlightInputtedValueValidity;
  }


  /* ━━━ Public Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Implementation of `ValidatableControl` interface ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public focus(): this {
    this.rootElementReactReference.focus();
    return this;
  }

  public resetValidityHighlightingStateToInitial(): void {
    this.mustHighlightInputtedValueValidity =
        this.initialValidityHighlightingActivationMode ===
            ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes.immediate;
  }


  /* ━━━ Actions Handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* [ Theory ] Action Handing in React: "keydown" → "input" → "keyup" */

  /* [ Theory ]
   * Being fired first, "keydown" can be used for the filtering of inputting of forbidden characters.
   * However, the full preventing of the invalid input by this method is impossible at least because besides the
   *   keyboard, the input may be performed by the screen-dependent browsers buttons near the textbox. */
  protected onKeyDown(event: KeyboardEvent): void {

    if (
      (
        this.props.isInputtingOnlyOfNonNegativeIntegersOfRegularNotationAllowed ||
            this.props.mustValueBeTheDigitsSequence
      ) &&
          (/^[+\-e.]$/u).test(event.key)
    ) {
      event.preventDefault();
    }

  }

   /* [ Theory ]
    * Even "input" element has "number" type, if nothing has been inputted, the "rawValue" will be the empty string. */
  protected onInput(rawValue: string): void {

    if (rawValue.length === 0) {

      if (this.props.mustConvertEmptyValueToZero) {
        this.updatePayload(0);
        this.setState({ rawInput: "0" });
        return;
      }


      if (this.props.mustConvertEmptyValueToNull) {
        this.updatePayload(null);
        return;
      }

    }


    if (isNotUndefined(this.props.rawInputTransformer)) {
      this.updatePayload(this.props.rawInputTransformer(rawValue));
      return;
    }


    if (this.props.HTML_Type === TextBox.HTML_Types.number) {

      if (this.props.mustConvertEmptyValueToZero && this.state.rawInput.startsWith("0")) {

        const inputtedValueWithoutLeadingZeros: string = this.state.rawInput.replace(/^0+/u, "");

        if (inputtedValueWithoutLeadingZeros.length === 0) {
          this.updatePayload(0);
          return;
        }


        this.setState({ rawInput: inputtedValueWithoutLeadingZeros })
        this.updatePayload(Number(inputtedValueWithoutLeadingZeros));

        return;

      }


      this.updatePayload(Number(rawValue));

      return;

    }


    this.updatePayload(rawValue);

  }

  protected updatePayload(newValue: TextBox.SupportedValidatablePayloadValuesTypes): void
  {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
    * It is unlikely that there is a way to specify the correspondence between each waw inputted value and
    *   `NonEmptyValueType | EmptyValueType`. */
    this.props.onPayloadUpdated(this.props.payload.updateImmutably(newValue as NonEmptyValueType | EmptyValueType));
  }

  // TODO Vue にも
  protected onFocusLost(): void
  {
    this.mustHighlightInputtedValueValidity = true;
    this.props.onFocusLost(this.props.payload)
  }

  // TODO Vue には"valueCopied"イベント　+ onValueCopiedExternalEventHandler重複
  protected onValueCopyingButtonClicked(): void {

    navigator.clipboard.
        writeText(this.state.rawInput).
        then((): void => {
          this.props.onValueCopiedExternalEventHandler?.(this.rawInput);
        }).
        catch(Logger.logPromiseError);

  }


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: TextBox.Themes = { regular: "REGULAR" };

  public static readonly selfAndChildrenComponentsThemesCorrespondence:
      {
        validatableControlShell: { [ownThemeValue: string]: string; };
        valueCopyingButton: { [ownThemeValue: string]: string; };
      } =
          {
            validatableControlShell: { [TextBox.Themes.regular]: ValidatableControlShell.Themes.regular },
            valueCopyingButton: { [TextBox.Themes.regular]: Button.Themes.regular }
          };


  protected get validatableControlShellTheme(): string {
    return TextBox.selfAndChildrenComponentsThemesCorrespondence.validatableControlShell[this.props.theme];
  }

  protected get valueCopyingButtonTheme(): string {
    return TextBox.selfAndChildrenComponentsThemesCorrespondence.valueCopyingButton[this.props.theme];
  }

  public static defineThemes(
    themesAndCorrespondenceDefinition: Readonly<{
      [ownThemeKey: string]:
          Readonly<{
            validatableControlShell: string;
            valueCopyingButton: string;
          }>;
    }>
  ): typeof TextBox {
    return ComponentsAuxiliaries.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(
      themesAndCorrespondenceDefinition, TextBox
    );
  }

  public static areThemesCSS_ClassesCommon: boolean = ComponentsAuxiliaries.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    TextBox.areThemesCSS_ClassesCommon = true;
  }


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: TextBox.GeometricVariations = {
    regular: "REGULAR",
    small: "SMALL",
    labelLike: "LABEL_LIKE"
  };

  public static readonly selfAndChildrenComponentsGeometricVariationsCorrespondence:
      {
        validatableControlShell: { [ownGeometricVariationValue: string]: string; };
        valueCopyingButton: { [ownGeometricVariationValue: string]: string; };
      } =
          {
            validatableControlShell: {
              [TextBox.GeometricVariations.regular]: ValidatableControlShell.GeometricVariations.regular,
              [TextBox.GeometricVariations.small]: ValidatableControlShell.GeometricVariations.small,
              [TextBox.GeometricVariations.labelLike]: ValidatableControlShell.GeometricVariations.regular
            },
            valueCopyingButton: {
              [TextBox.GeometricVariations.regular]: Button.GeometricVariations.regular,
              [TextBox.GeometricVariations.small]: Button.GeometricVariations.small,
              [TextBox.GeometricVariations.labelLike]: Button.GeometricVariations.linkLike
            }
          };


  protected get validatableControlGeometricVariation(): string {
    return TextBox.selfAndChildrenComponentsGeometricVariationsCorrespondence.validatableControlShell[this.props.geometricVariation];
  }

  protected get valueCopyingButtonGeometricVariation(): string {
    return TextBox.selfAndChildrenComponentsGeometricVariationsCorrespondence.valueCopyingButton[this.props.geometricVariation];
  }

  public static defineGeometricVariations(
    ownAndChildrenGeometricVariationsAndCorrespondenceDefinition: Readonly<{
      [ownGeometricVariationKey: string]:
          Readonly<{
            validatableControlShell: string;
            valueCopyingButton: string;
          }>;
    }>
  ): typeof TextBox {
    return ComponentsAuxiliaries.defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(
      ownAndChildrenGeometricVariationsAndCorrespondenceDefinition, TextBox
    );
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: TextBox.DecorativeVariations = {
    regular: "REGULAR",
    labelLike: "LABEL_LIKE"
  };

  public static readonly selfAndChildrenComponentsDecorativeVariationsCorrespondence:
      {
        validatableControlShell: { [ownDecorativeVariationValue: string]: string; };
        valueCopyingButton: { [ownGeometricVariationValue: string]: string; };
      } =
          {
            validatableControlShell: {
              [TextBox.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular,
              [TextBox.DecorativeVariations.labelLike]: ValidatableControlShell.DecorativeVariations.regular
            },
            valueCopyingButton: {
              [TextBox.DecorativeVariations.regular]: Button.DecorativeVariations.regular,
              [TextBox.DecorativeVariations.labelLike]: Button.DecorativeVariations.linkLike
            }
          };

  protected get validatableControlDecorativeVariation(): string {
    return TextBox.selfAndChildrenComponentsDecorativeVariationsCorrespondence.validatableControlShell[this.decorativeVariation];
  }

  protected get valueCopyingButtonDecorativeVariation(): string {
    return TextBox.selfAndChildrenComponentsDecorativeVariationsCorrespondence.valueCopyingButton[this.decorativeVariation];
  }

  public static defineDecorativeVariations(
     ownAndChildrenDecorativeVariationsAndCorrespondenceDefinition: Readonly<{
      [ownGeometricVariationKey: string]:
          Readonly<{
            validatableControlShell: string;
            valueCopyingButton: string;
          }>;
    }>
  ): typeof TextBox {
    return ComponentsAuxiliaries.defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(
      ownAndChildrenDecorativeVariationsAndCorrespondenceDefinition, TextBox
    );
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return [

      ...ComponentsAuxiliaries.addThemeCSS_ClassToArrayIfMust({
        themeValue: this.props.theme,
        allThemes: ValidatableControlShell.Themes,
        areThemesCSS_ClassesCommon: this.props.areThemesCSS_ClassesCommon,
        CSS_Namespace: ValidatableControlShell.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.generateDemandedGeometricModifiersCSS_Classes(
        ValidatableControlShell.CSS_NAMESPACE,
        this.props.geometricModifiers
      ),

      ...ComponentsAuxiliaries.addGeometricVariationCSS_ClassToArrayIfMust({
        geometricVariation: this.props.geometricVariation,
        allGeometricVariations: ValidatableControlShell.GeometricVariations,
        CSS_Namespace: ValidatableControlShell.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.addDecorativeVariationCSS_ClassToArrayIfMust({
        decorativeVariation: this.props.decorativeVariation,
        allDecorativeVariations: ValidatableControlShell.DecorativeVariations,
        CSS_Namespace: ValidatableControlShell.CSS_NAMESPACE
      }),

      ...isNotUndefined(this.props.className) ? [ this.props.className ] : [],

      ...this.props.multiline ? [ `${ TextBox.CSS_NAMESPACE }__Multiline` ] : [],
      ...this.props.disabled ? [ `${ TextBox.CSS_NAMESPACE }__DisabledState` ] : [],
      ...this.mustHighlightInvalidInputtedValue ? [ "TextBox--YDF__InvalidInputState" ] : [],
      ...this.mustHighlightValidInputtedValue ? [ "TextBox--YDF__ValidInputState" ] : []

    ];

  }


  /* ━━━ IDs ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  /* ┅┅┅ Instance ID ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected readonly INSTANCE_ID: string = TextBox.generateInstanceID();
  protected static counterForInstanceID_Generating: number = 0;

  public static generateInstanceID(): string {
    TextBox.counterForInstanceID_Generating++;
    return `TEXT_BOX--YDF-${ TextBox.counterForInstanceID_Generating }`;
  }


  /* ┅┅┅ HTML IDs ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */

  /* [ Performance Optimization ] Intended to be non-reactive and thus must be assigned in `created` lifecycle hook. */
  protected HTML_IDs!: Readonly<{
    inputOrTextarea: string;
    label: string;
  }>;


  /* ━━━ Constructor & Lifecycle Hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public constructor(properties: InputtableControl.Properties) {

    super(properties);

    this.mustHighlightInputtedValueValidity =
        this.props.validityHighlightingActivationMode ===
            ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes.immediate;

    this.initialValidityHighlightingActivationMode = this.props.validityHighlightingActivationMode;

    this.HTML_IDs = {
      inputOrTextarea: this.props.inputOrTextareaElementHTML_ID ?? `${ this.INSTANCE_ID }-INPUT_OR_TEXT_AREA`,
      label: this.props.labelElementHTML_ID ?? `${ this.INSTANCE_ID }-LABEL`
    };

    let rawInput: TextBox.SupportedValidatablePayloadValuesTypes;

    if (isString(this.props.payload.value)) {
      rawInput = this.props.payload.value;
    } else if (isNumber(this.props.payload.value, { mustConsiderNaN_AsNumber: true })) {
      rawInput = String(this.props.payload.value);
    } else {
      rawInput = "";
    }

    this.state = {
      ...InputtableControl.getInitialState(),
      rawInput,
      isPasswordDisplaying: false
    };

  }

  protected override componentDidMount(): void {

    if (this.props.multiline && this.props.autoResizingForMultilineMode) {
      TextAreaResizer(
        getElementByVueReference({
          vueReferenceID: TextBox.INPUT_OR_TEXT_AREA_ELEMENT_VUE_REFERENCE_ID,
          parentVueComponent: this,
          mustExpectExactlyOneElement: true
        })
      );
    }

  }

  protected componentDidUpdate(): void {

    if (this.props.multiline && this.props.autoResizingForMultilineMode) {
      TextAreaResizer.update(
        getElementByVueReference({
          vueReferenceID: TextBox.INPUT_OR_TEXT_AREA_ELEMENT_VUE_REFERENCE_ID,
          parentVueComponent: this,
          mustExpectExactlyOneElement: true
        })
      );
    }

  }

  protected componentWillUnmount(): void {

    if (this.props.multiline && this.props.autoResizingForMultilineMode) {
      TextAreaResizer.destroy(
        getElementByVueReference({
          vueReferenceID: TextBox.INPUT_OR_TEXT_AREA_ELEMENT_VUE_REFERENCE_ID,
          parentVueComponent: this,
          mustExpectExactlyOneElement: true
        })
      );
    }

  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: TextBoxLocalization = TextBoxYDF_GUI_ComponentLocalization__English;


  /* ━━━ Elements ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected _inputOrTextAreaElementReactReference!: React.Ref<HTMLElement>;

  protected get inputOrTextAreaElementReactReference(): Exclude<React.Ref<HTMLElement>, null> {
    return this._inputOrTextAreaElementReactReference ??
        ((): never => {
          Logger.throwErrorWithFormattedMessage({
            errorInstance: new UnexpectedEventError("Contrary to expectations, the root element has not been initialized"),
            title: UnexpectedEventError.localization.defaultTitle,
            occurrenceLocation: "textBox.inputOrTextAreaElementReactReference",
          });
        })()
  }

  /* ━━━ Raw Input Transformers ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  // TODO Vue には Identationがずれている。
  public static convertToNumberHerewithEmptyStringToZero(rawValue: string): number {

    if (rawValue === "") {
      return 0;
    }


    const numericValue: number = Number(rawValue);

    return isNaN(numericValue) ? 0 : numericValue;

  }

  public static convertToIntegerHerewithEmptyStringToNull(rawValue: string): number | null {

    if (rawValue === "") {
      return null;
    }


    const numericValue: number = Number(rawValue);

    return Number.isInteger(numericValue) ? numericValue : null;

  }

}


namespace TextBox {

  /* ━━━ Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type Properties<
    IsInputRequired extends boolean,
    NonEmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.NonEmpty,
    EmptyValueType extends TextBox.SupportedValidatablePayloadValuesTypes.Empty = NonEmptyValueType,
    /* eslint-disable-next-line @stylistic/type-generic-spacing --
     * ESLint Stylistic plugin bug: this positive in completely nor related with the spacing around angled brackets. */
    ValidValue extends (IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)) =
        IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType),
    InvalidValue extends NonEmptyValueType | EmptyValueType = NonEmptyValueType | EmptyValueType
  > =

      InputtableControl.Properties &

      Readonly<{

        payload: ValidatableControl.Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>;
        onPayloadUpdated:
            (
              updatedPayload:
                  ValidatableControl.Payload<
                    IsInputRequired,
                    NonEmptyValueType,
                    EmptyValueType,
                    ValidValue,
                    InvalidValue
                  >
            ) => void;
        HTML_Type: HTML_Types;
        placeholder?: string;

        /** @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill */
        autocomplete?: string;

        /* ┅┅┅ Multi Line Mode ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
        multiline: boolean;
        autoResizingForMultilineMode: boolean;

        /* ┅┅┅ Invalid Value Prevention ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
        minimalCharactersCount?: number;
        maximalCharactersCount?: number;
        minimalNumericValue?: number;
        maximalNumericValue?: number;
        isInputtingOnlyOfNonNegativeIntegersOfRegularNotationAllowed: boolean;
        mustValueBeTheDigitsSequence: boolean;

        /* ┅┅┅ Highlighting ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
        validityHighlightingActivationMode: ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes;

        /* ┅┅┅ Converting of Inputted Values ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
        rawInputTransformer?: (rawInput: string) => NonEmptyValueType | EmptyValueType;
        mustConvertEmptyValueToZero: boolean;
        mustConvertEmptyValueToNull: boolean;

        /* ┅┅┅ Buttons ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
        /* ╍╍╍ Value Copying ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
        hasValueCopyingButton: boolean;
        onValueCopiedExternalEventHandler?: (value: string) => unknown;

        /* ╍╍╍ Password Displaying ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
        hasPasswordDisplayingToggle: boolean;

        /* ┅┅┅ Events ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
        onFocusLost:
            (
              updatedPayload:
                  ValidatableControl.Payload<
                    IsInputRequired,
                    NonEmptyValueType,
                    EmptyValueType,
                    ValidValue,
                    InvalidValue
                  >
            ) => void;

          /* ┅┅┅ IDs ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
          inputOrTextareaElementHTML_ID?: string;
          labelElementHTML_ID?: string;

          /* ┅┅┅ Theming ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
          theme: string;
          areThemesCSS_ClassesCommon: boolean;
          geometricVariation: string;
          geometricModifiers: ReadonlyArray<TextBox.GeometricModifiers>;
          decorativeVariation: string;

          /* ┅┅┅ Other ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
          className?: string;
          rootElementAttributes?: Omit<React.HTMLAttributes<HTMLDivElement>, "className">;
          children?: React.ReactNode;

      }>;

  export enum HTML_Types {
    regular= "text",
    email= "email",
    number= "number",
    password= "password",
    phoneNumber= "tel",
    URI= "url"
  }

  export type State =

      InputtableControl.State &

      Readonly<{
        rawInput: string;
        isPasswordDisplaying: boolean;
      }>;

  export type SupportedValidatablePayloadValuesTypes =
      SupportedValidatablePayloadValuesTypes.NonEmpty |
      SupportedValidatablePayloadValuesTypes.Empty;

  export namespace SupportedValidatablePayloadValuesTypes {
    export type NonEmpty = string | number;
    export type Empty = string | number | null;
  }

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    readonly small: "SMALL";
    readonly labelLike: "LABEL_LIKE";
    [geometricVariationName: string]: string;
  };

  export enum GeometricModifiers {
    noRoundings = "NO_ROUNDINGS"
  }

  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    readonly labelLike: "LABEL_LIKE";
    [decorativeVariationName: string]: string;
  }

}


  // protected get valueCopyingButtonGeometricModifiers(): Array<string> {
  //   return [
  //     Button.GeometricModifiers.squareShape,
  //     Button.GeometricModifiers.noLeftBorderAndRoundings,
  //       ...this.geometricModifiers.includes(TextBox.GeometricModifiers.noRoundings) ?
  //           [ Button.GeometricModifiers.noRoundings ] : []
  //   ];
  // }
// <template lang="pug">
//
//   ValidatableControlShell.TextBox--YDF(
//
//     :label="label"
//     :guidance="guidance"
//
//     :required="required"
//     :mustDisplayAppropriateBadgeIfInputIsRequired="mustDisplayAppropriateBadgeIfInputIsRequired"
//     :mustDisplayAppropriateBadgeIfInputIsOptional="mustDisplayAppropriateBadgeIfInputIsOptional"
//     :mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge="mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge"
//
//     :validationErrorsMessages="payload.validationErrorsMessages"
//     :mustDisplayErrorsMessagesIfAny="mustHighlightInvalidInputtedValue"
//
//     :coreElementHTML_ID="HTML_IDs.inputOrTextarea"
//     :labelElementHTML_ID="HTML_IDs.label"
//
//     :mainSlotWrapperAdditionalCSS_Classes="[ 'TextBox--YDF-LinearFlow' ]"
//
//     :theme="validatableControlShellTheme"
//     :areThemesCSS_ClassesCommon="areThemesCSS_ClassesCommon"
//     :geometricVariation="validatableControlGeometricVariation"
//     :decorativeVariation="validatableControlDecorativeVariation"
//
//     :class="rootElementModifierCSS_Classes"
//
//   )
//
//     .TextBox--YDF-IconsPositioningWrapper
//
//       textarea.TextBox--YDF-InputOrTextAreaElement(
//         v-if="multiline"
//         v-model="rawInput"
//         :placeholder="placeholder"
//         :autocomplete="autocomplete"
//         :readonly="readonly"
//         :disabled="disabled"
//         :required="required"
//         :minlength="minimalCharactersCount"
//         :maxlength="maximalCharactersCount"
//         :id="HTML_IDs.inputOrTextarea"
//         :aria-label="accessibilityGuidance"
//         :aria-labelledby="externalLabelHTML_ID"
//         :aria-invalid="payload.isInvalid"
//         :ref="INPUT_OR_TEXT_AREA_ELEMENT_VUE_REFERENCE_ID"
//         @keydown="onKeyDown"
//         @input="$event => { onInput($event.target.value) }"
//         @blur="onFocusOut"
//       )
//
//       //- [ Bundler bug ] The `v-else` is being compiled to `v-else="v-else"`
//       input.TextBox--YDF-InputOrTextAreaElement(
//         v-else-if="!multiline"
//         :type="isPasswordDisplaying ? HTML_Types.text : HTML_Type"
//         v-model="rawInput"
//         :placeholder="placeholder"
//         :autocomplete="autocomplete"
//         :readonly="readonly"
//         :disabled="disabled"
//         :required="required"
//         :minlength="minimalCharactersCount"
//         :maxlength="maximalCharactersCount"
//         :min="minimalNumericValue"
//         :max="maximalNumericValue"
//         :id="HTML_IDs.inputOrTextarea"
//         :aria-label="accessibilityGuidance"
//         :aria-labelledby="externalLabelHTML_ID"
//         :aria-invalid="payload.isInvalid"
//         :ref="INPUT_OR_TEXT_AREA_ELEMENT_VUE_REFERENCE_ID"
//         @keydown="onKeyDown"
//         @input="$event => { onInput($event.target.value) }"
//         @blur="onFocusOut"
//       )
//
//       slot
//
//       span.TextBox--YDF-PasswordDisplayingToggle(
//         v-if="mustDisplayPasswordDisplayingToggle"
//         role="checkbox"
//         :aria-checked="isPasswordDisplaying"
//         tabindex="0"
//         :aria-label="localization.passwordDisplayingToggle.displayingOfPassword.accessibilityGuidance"
//         :aria-disabled="disabled"
//         @click="onPasswordDisplayingToggleClicked"
//       )
//
//         SigningInIcon.TextBox--YDF-PasswordDisplayingToggle-SVG_Icon(
//           v-if="isPasswordDisplaying"
//           class="TextBox--YDF-PasswordDisplayingToggle-SVG_Icon__PasswordVisibleState"
//         )
//
//         SigningOutIcon.TextBox--YDF-PasswordDisplayingToggle-SVG_Icon(
//           v-else
//           class="TextBox--YDF-PasswordDisplayingToggle-SVG_Icon__PasswordHiddenState"
//         )
//
//     Button(
//       v-if="hasValueCopyingButton"
//       :accessibilityGuidance="localization.valueCopyingButton.accessibilityGuidance"
//       :theme="valueCopyingButtonTheme"
//       :areThemesCSS_ClassesCommon="areThemesCSS_ClassesCommon"
//       :geometricVariation="valueCopyingButtonGeometricVariation"
//       :geometricModifiers="valueCopyingButtonGeometricModifiers"
//       :decorativeVariation="valueCopyingButtonDecorativeVariation"
//       @click="onValueCopyingButtonClicked"
//     ): template(v-slot:loneSVG_Icon): CopyingIcon.Button--YDF-SVG_Icon
//
// </template>
//
//
// <script lang="ts">
//
//   /* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   import TextBoxLogic from "./TextBoxLogic.vue";
//
//   /* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
//   import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell.vue";
//   import Button from "../../Buttons/Plain/Button.vue";
//   import SigningInIcon from "../../../../SVG_Icons/Authentication/SigningInIcon.vue";
//   import SigningOutIcon from "../../../../SVG_Icons/Authentication/SigningOutIcon.vue";
//   import CopyingIcon from "../../../../SVG_Icons/Copying/CopyingIcon.vue";
//
//   /* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
//   import {
//     ComponentBase as VueComponentConfiguration,
//     toNative as transformToOptionAPI_VueComponent
//   } from "vue-facing-decorator";
//   /* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//
//
//   @VueComponentConfiguration({
//     name: TextBoxLogic.CSS_NAMESPACE,
//     components: {
//       ValidatableControlShell,
//       Button,
//       SigningInIcon,
//       SigningOutIcon,
//       CopyingIcon
//     }
//   })
//   class TextBox<
//     IsInputRequired extends boolean,
//     NonEmptyValueType extends TextBoxLogic.SupportedValidatablePayloadValuesTypes.NonEmpty,
//     EmptyValueType extends TextBoxLogic.SupportedValidatablePayloadValuesTypes.Empty = NonEmptyValueType,
//     ValidValue extends (IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)) =
//         IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType),
//     InvalidValue extends NonEmptyValueType | EmptyValueType = NonEmptyValueType | EmptyValueType
//   > extends TextBoxLogic<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue> {}
//
//
//   export default TextBoxLogic.applyStaticMembersToInheritorTransformedToOptionAPI(
//     transformToOptionAPI_VueComponent(TextBox)
//   );
//
// </script>


  /* ━━━ Rendering ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  // protected get mustDisplayPasswordDisplayingToggle(): boolean {
  //   return this.props.HTML_Type === TextBox.HTML_Types.password && this.props.hasPasswordDisplayingToggle;
  // }
  //
  // protected onPasswordDisplayingToggleClicked(): void {
  //   this.setState({ isPasswordDisplaying: this.state.isPasswordDisplaying });
  //   this.focus();
  // }
  //

export default TextBox;
