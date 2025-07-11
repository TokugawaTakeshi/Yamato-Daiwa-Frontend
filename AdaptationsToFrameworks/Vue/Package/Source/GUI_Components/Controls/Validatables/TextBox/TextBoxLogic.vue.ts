/* ─── Validations ─────────────────────────────────────────────────────────────────────────────────────── */
import VuePropertyValidator from "../../../_VuePropertiesValidators/VuePropertyValidator";
import BooleanVuePropertyValidator from "../../../_VuePropertiesValidators/BooleanVuePropertyValidator";
import ElementOfEnumerationVuePropertyValidator from "../../../_VuePropertiesValidators/ElementOfEnumerationVuePropertyValidator";
import NonEmptyStringVuePropertyValidator from "../../../_VuePropertiesValidators/NonEmptyStringVuePropertyValidator";
import NaturalNumberOrZeroVuePropertyValidator from "../../../_VuePropertiesValidators/NaturalNumberOrZeroVuePropertyValidator";
import ThemeVuePropertyValidator from "../../../_VuePropertiesValidators/ThemeVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../../../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import DecorativeVariationVuePropertyValidator from "../../../_VuePropertiesValidators/DecorativeVariationVuePropertyValidator";
import preventNullForOptionalVueProperty from "../../../_Decorators/preventNullForOptionalVueProperty";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import InputtableControl from "../InputtableControl.vue";
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell.vue";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ComponentBase as VueComponentConfiguration,
  Prop as VueProperty,
  Model as VModel,
  Emit as emitVueEvent
} from "vue-facing-decorator";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import ValidatableControl from "../ValidatableControl";
import InvalidVuePropertyError from "../../../_Errors/InvalidVueProperty/InvalidVuePropertyError";
import YDF_ComponentsCoordinator from "../../../YDF_ComponentsCoordinator";
import getElementByVueReference from "../../../../Functions/getElementByVueReference";
import AccessibleFromTemplateAsNonReactive from "../../../_Decorators/AccessibleFromTemplateAsNonReactive";
import {
  type ElementOfPseudoEnumeration,
  Logger,
  isNumber,
  isString,
  isNull,
  isNotUndefined
} from "@yamato-daiwa/es-extensions";


@VueComponentConfiguration({ name: TextBox.CSS_NAMESPACE })
class TextBox extends InputtableControl implements ValidatableControl {

  /* ━━━ Common Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static CSS_NAMESPACE: string = "TextBox--YDF";

  public static HTML_Types: TextBox.HTML_Types = {
    regular: "text",
    email: "email",
    number: "number",
    password: "password",
    phoneNumber: "tel",
    URI: "url"
  };

  public static ValidityHighlightingActivationModes: TextBox.ValidityHighlightingActivationModes = {
    immediate: "IMMEDIATE",
    onFirstInputtedCharacter: "ON_FIRST_INPUTTED_CHARACTER",
    onFocusOut: "ON_FOCUS_OUT"
  };


  /* ━━━ Component Common Parameters ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VueProperty({
    default: TextBox.HTML_Types.regular,
    get validator(): VuePropertyValidator {
      return ElementOfEnumerationVuePropertyValidator({
        enumerationFullyQualifiedName: "Button.HTML_Types",
        enumeration: TextBox.HTML_Types,
        propertyName: "HTML_Type",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected HTML_Type!: ElementOfPseudoEnumeration<TextBox.HTML_Types>;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        propertyName: "placeholder",
        isPropertyRequired: this.required === true,
        componentName: TextBox.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly placeholder?: string;

  /** @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill */
  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        propertyName: "autocomplete",
        isPropertyRequired: this.required === true,
        componentName: TextBox.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly autocomplete?: string;


  /* ┅┅┅ Multi Line Mode ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "multiline",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly multiline!: boolean;

  @VueProperty({
    default: true,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "autoResizingForMultilineMode",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly autoResizingForMultilineMode!: boolean;


  /* ┅┅┅ Invalid Value Prevention ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NaturalNumberOrZeroVuePropertyValidator({
        propertyName: "minimalCharactersCount",
        isPropertyRequired: this.required === true,
        componentName: TextBox.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly minimalCharactersCount?: number;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NaturalNumberOrZeroVuePropertyValidator({
        propertyName: "maximalCharactersCount",
        isPropertyRequired: this.required === true,
        componentName: TextBox.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly maximalCharactersCount?: number;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NaturalNumberOrZeroVuePropertyValidator({
        propertyName: "minimalNumericValue",
        isPropertyRequired: this.required === true,
        componentName: TextBox.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly minimalNumericValue?: number;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NaturalNumberOrZeroVuePropertyValidator({
        propertyName: "maximalNumericValue",
        isPropertyRequired: this.required === true,
        componentName: TextBox.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly maximalNumericValue?: number;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "valueMustBeTheNonNegativeIntegerOfRegularNotation",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly valueMustBeTheNonNegativeIntegerOfRegularNotation!: boolean;


  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "valueMustBeTheDigitsSequence",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly valueMustBeTheDigitsSequence!: boolean;


  /* ┅┅┅ Converting of Inputted Values ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "mustConvertEmptyValueToZero",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly mustConvertEmptyValueToZero!: boolean;


  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "mustConvertEmptyValueToNull",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly mustConvertEmptyValueToNull!: boolean;


  /* ━━━ Public Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Implementation of `ValidatableControl` interface ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */

  public focus(): this {

    getElementByVueReference({
      vueReferenceID: TextBox.INPUT_OR_TEXT_AREA_ELEMENT_VUE_REFERENCE_ID,
      parentVueComponent: this,
      expectedDOM_ElementSubtype: HTMLElement,
      mustExpectExactlyOneElement: true
    }).focus();

    return this;

  }
  /* ━━━ Actions Handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  /* [ Theory ] Action Handing in Vue: "keydown" → "input" → "keyup" */
  protected rawInput: string = "";

  protected invalidInputHighlightingIfAnyValidationErrorsMessages: boolean = false;
  protected validInputHighlightingIfNoErrorsMessages: boolean = false;

  @VueProperty({
    required: true,
    get validator(): VuePropertyValidator {
      return ElementOfEnumerationVuePropertyValidator({
        enumerationFullyQualifiedName: "TextBox.ValidityHighlightingActivationModes",
        enumeration: TextBox.ValidityHighlightingActivationModes,
        propertyName: "validityHighlightingActivationMode",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  protected validityHighlightingActivationMode!: ElementOfPseudoEnumeration<typeof TextBox.ValidityHighlightingActivationModes>;

  @VModel({
    type: ValidatableControl.Payload,
    required: true,
    validator: VuePropertyValidator.create({
      checker: (rawVModel: unknown): boolean =>
          ValidatableControl.VModelChecker(
            rawVModel, (rawValue: unknown): boolean =>
                isString(rawValue) ||
                isNumber(rawValue, { mustConsiderNaN_AsNumber: false }) ||
                isNull(rawValue)
          ),
      messageSpecificPart: "Must be either string or number or null.",
      propertyName: "v-model",
      componentName: TextBox.CSS_NAMESPACE
    })
  })
  protected readonly validatablePayload!: ValidatableControl.Payload<
    TextBox.SupportedValidatablePayloadValuesTypes,
    TextBox.SupportedValidatablePayloadValuesTypes,
    InputtedValueValidation
  >;

  /* [ Theory ]
   * Being fired first, "keydown" can be used for preventing of inputting of forbidden characters, but filtering out
   *   except allowed character is challenging because it is required to respect the "Enter", "Backspace", arrow keys
   *   etc. */
  protected onKeyDown(event: KeyboardEvent): void {

    if (
      (
        this.valueMustBeTheNonNegativeIntegerOfRegularNotation ||
        this.valueMustBeTheDigitsSequence
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

      if (this.mustConvertEmptyValueToZero) {
        this.$emit(TextBox.Events.input, this.validatablePayload.updateImmutably({ newValue: 0 }));
        this.rawInput = "0";
        return;
      }


      if (this.mustConvertEmptyValueToNull) {
        this.$emit(TextBox.Events.input, this.validatablePayload.updateImmutably({ newValue: null }));
        return;
      }

    }


    if (
      this.HTML_Type === TextBox.HTML_Types.number &&
      this.mustConvertEmptyValueToZero &&
      this.rawInput.startsWith("0")
    ) {

      const inputtedValueWithoutPrependedZeros: string = this.rawInput.replace(/^0+/u, "");

      if (inputtedValueWithoutPrependedZeros.length === 0) {
        this.$emit(TextBox.Events.input, this.validatablePayload.updateImmutably({ newValue: 0 }));
        return;
      }


      this.rawInput = inputtedValueWithoutPrependedZeros;

      this.$emit(
        TextBox.Events.input,
        this.validatablePayload.updateImmutably({
          newValue: Number(inputtedValueWithoutPrependedZeros)
        })
      );

      return;

    }


    if (this.HTML_Type === TextBox.HTML_Types.number) {

      this.$emit(TextBox.Events.input, this.validatablePayload.updateImmutably({ newValue: Number(rawValue) }));

      return;

    }


    this.$emit(TextBox.Events.input, this.validatablePayload.updateImmutably({ newValue: rawValue }));

  }
  protected onFocusOut(): void {
    this.invalidInputHighlightingIfAnyValidationErrorsMessages = true;
    this.validInputHighlightingIfNoErrorsMessages = true;
  }


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: ValidatableControlShell.Themes = { regular: "REGULAR" };

  public static readonly selfAndChildrenComponentsThemesCorrespondence:
      { validatableControlShell: { [ownThemeValue: string]: string; }; } =
          { validatableControlShell: { [TextBox.Themes.regular]: ValidatableControlShell.Themes.regular } };

  @VueProperty({
    default: TextBox.Themes.regular,
    validator: ThemeVuePropertyValidator(TextBox)
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  protected get validatableControlShellTheme(): string {
    return TextBox.selfAndChildrenComponentsThemesCorrespondence.validatableControlShell[this.theme];
  }

  public static defineThemes(
    themesAndCorrespondenceDefinition: Readonly<{
      [ownThemeKey: string]: Readonly<{ validatableControlShell: string; }>;
    }>
  ): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(
      themesAndCorrespondenceDefinition, ValidatableControlShell
    );
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    ValidatableControlShell.areThemesCSS_ClassesCommon = true;
  }

  @VueProperty({
    default: TextBox.areThemesCSS_ClassesCommon,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "areThemesCSS_ClassesCommon",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  private readonly areThemesCSS_ClassesCommon!: boolean;


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly GeometricVariations: ValidatableControlShell.GeometricVariations = {
    regular: "REGULAR",
    small: "SMALL"
  };

  public static readonly selfAndChildrenComponentsGeometricVariationsCorrespondence:
      { validatableControlShell: { [ownGeometricVariationValue: string]: string; }; } =
          {
            validatableControlShell: {
              [TextBox.GeometricVariations.regular]: ValidatableControlShell.GeometricVariations.regular,
              [TextBox.GeometricVariations.small]: ValidatableControlShell.GeometricVariations.small
            }
          };

  @VueProperty({
    default: TextBox.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator(TextBox)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  protected validatableControlGeometricVariation(): string {
    return TextBox.selfAndChildrenComponentsGeometricVariationsCorrespondence.validatableControlShell[this.geometricVariation];
  }

  public static defineGeometricVariations(
    ownAndChildrenGeometricVariationsAndCorrespondenceDefinition: Readonly<{
      [ownGeometricVariationKey: string]: Readonly<{ badge: string; }>;
    }>
  ): typeof TextBox {
    return YDF_ComponentsCoordinator.defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(
      ownAndChildrenGeometricVariationsAndCorrespondenceDefinition, TextBox
    );
  }


  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly DecorativeVariations: ValidatableControlShell.DecorativeVariations = {
    regular: "REGULAR"
  };

  public static readonly selfAndChildrenComponentsDecorativeVariationsCorrespondence:
      { validatableControlShell: { [ownDecorativeVariationValue: string]: string; }; } =
          {
            validatableControlShell: {
              [TextBox.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular
            }
          };

  @VueProperty({
    default: TextBox.DecorativeVariations.regular,
    validator: DecorativeVariationVuePropertyValidator(TextBox)
  })
  protected readonly decorativeVariation!: string;

  protected validatableControlDecorativeVariation(): string {
    return TextBox.selfAndChildrenComponentsDecorativeVariationsCorrespondence.
        validatableControlShell[this.decorativeVariation];
  }

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(decorativeVariationsNames, ValidatableControlShell);
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return YDF_ComponentsCoordinator.generateRootElementModifierCSS_Classes({
      CSS_Namespace: TextBox.CSS_NAMESPACE,
      activeTheme: this.theme,
      allThemes: TextBox.Themes,
      areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
      activeGeometricVariation: this.geometricVariation,
      allGeometricVariations: TextBox.GeometricVariations,
      activeDecorativeVariation: this.decorativeVariation,
      allDecorativeVariations: TextBox.DecorativeVariations,
      other: [
        ...this.multiline ? [ `${ TextBox.CSS_NAMESPACE }__Multiline` ] : [],
        ...this.disabled ? [ `${ TextBox.CSS_NAMESPACE }__DisabledState` ] : [],
        ...this.invalidInputHighlightingIfAnyValidationErrorsMessages && this.validatablePayload.isInvalid ?
            [ "TextBox--YDF__InvalidInputState" ] : [],
        ...this.validInputHighlightingIfNoErrorsMessages && !this.validatablePayload.isInvalid ?
            [ "TextBox--YDF__ValidInputState" ] : []
      ]
    });
  }


  /* ━━━ Properties Additional Validations ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /** @descriptioin
   * Validation with referencing of multiple properties is possible only via lifecycle hooks.
   * This method is static because non-static methods are not accessible from the viewpoint of "vue-facing-decorator" */
  protected static override validateProperties(instance: TextBox): void {

    if (
      isNotUndefined(instance.minimalNumericValue) &&
      isNotUndefined(instance.maximalNumericValue) &&
      instance.minimalNumericValue > instance.maximalNumericValue
    ) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidVuePropertyError({
          componentName: TextBox.CSS_NAMESPACE,
          propertyName: "minimalNumericValue",
          messageSpecificPart: "`minimalNumericValue` is greater than `maximalNumericValue`."
        }),
        title: InvalidVuePropertyError.localization.defaultTitle,
        occurrenceLocation: "TextBox.validateProperties(instance)"
      });
    }


    if (
      isNotUndefined(instance.minimalCharactersCount) &&
      isNotUndefined(instance.maximalCharactersCount) &&
      instance.minimalCharactersCount > instance.maximalCharactersCount
    ) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidVuePropertyError({
          componentName: TextBox.CSS_NAMESPACE,
          propertyName: "minimalCharactersCount",
          messageSpecificPart: "`minimalCharactersCount` is greater than `maximalCharactersCount`."
        }),
        title: InvalidVuePropertyError.localization.defaultTitle,
        occurrenceLocation: "TextBox.validateProperties(instance)"
      });
    }

  }


  /* ━━━ ID Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Instance ID ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected readonly INSTANCE_ID: string = TextBox.generateInstanceID();
  protected static counterForInstanceID_Generating: number = 0;

  public static generateInstanceID(): string {
    TextBox.counterForInstanceID_Generating++;
    return `TEXT_BOX--YDF-${ TextBox.counterForInstanceID_Generating }`;
  }


  /* ┅┅┅ HTML IDs ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  @VueProperty({ type: String })
  protected readonly inputOrTextareaElementHTML_ID?: string;

  @VueProperty({ type: String, required: false })
  protected readonly labelElementHTML_ID?: string;

  /* [ Performance Optimization ] Intended to be non-reactive and thus must be assigned in `create` lifecycle hook. */
  protected HTML_IDs!: Readonly<{
    inputOrTextarea: string;
    label: string;
  }>;


  /* ━━━ Lifecycle Hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected beforeCreate(): void {

    TextBox.validateProperties(this);

    this.invalidInputHighlightingIfAnyValidationErrorsMessages =
        this.validityHighlightingActivationMode === TextBox.ValidityHighlightingActivationModes.immediate;

    this.validInputHighlightingIfNoErrorsMessages = this.invalidInputHighlightingIfAnyValidationErrorsMessages;

  }

  protected created(): void {

    this.HTML_IDs = {
      inputOrTextarea: this.inputOrTextareaElementHTML_ID ?? `${ this.INSTANCE_ID }-INPUT_OR_TEXT_AREA`,
      label: this.labelElementHTML_ID ?? `${ this.INSTANCE_ID }-LABEL`
    };

    if (isString(this.validatablePayload.value)) {
      this.rawInput = this.validatablePayload.value;
    } else if (isNumber(this.validatablePayload.value, { mustConsiderNaN_AsNumber: true })) {
      this.rawInput = String(this.validatablePayload.value);
    } else {
      this.rawInput = "";
    }

  }

  protected beforeUpdate(): void {
    TextBox.validateProperties(this);
  }


  /* ━━━ Transforming to Options API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static applyStaticMembersToInheritorTransformedToOptionAPI(inheritedComponent: object): object {
    return Object.defineProperties(
      inheritedComponent,
      {
        CSS_NAMESPACE: { value: TextBox.CSS_NAMESPACE },
        HTML_Types: { value: TextBox.HTML_Types },
        ValidityHighlightingActivationModes: { value: TextBox.ValidityHighlightingActivationModes },
        Themes: { value: TextBox.Themes },
        defineThemes: { value: TextBox.defineThemes },
        GeometricVariations: { value: TextBox.GeometricVariations },
        defineGeometricVariations: { value: TextBox.defineGeometricVariations },
        DecorativeVariations: { value: TextBox.DecorativeVariations },
        defineDecorativeVariations: { value: TextBox.defineDecorativeVariations }
      }
    );
  }

}


namespace TextBox {

  export type HTML_Types = Readonly<{
    regular: "text";
    email: "email";
    number: "number";
    password: "password";
    phoneNumber: "tel";
    URI: "url";
  }>;

  export type SupportedValidatablePayloadValuesTypes = string | number | null;

  }

  export type ValidityHighlightingActivationModes = Readonly<{
    immediate: "IMMEDIATE";
    onFirstInputtedCharacter: "ON_FIRST_INPUTTED_CHARACTER";
    onFocusOut: "ON_FOCUS_OUT";
  }>;

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    readonly small: "SMALL";
    [geometricVariationName: string]: string;
  };

  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    [decorativeVariationName: string]: string;
  };

}


export default TextBox;
