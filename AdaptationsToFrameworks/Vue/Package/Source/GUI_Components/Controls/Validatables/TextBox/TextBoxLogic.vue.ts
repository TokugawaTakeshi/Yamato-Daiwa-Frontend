/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Validations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import VuePropertyValidator from "../../../_VuePropertiesValidators/VuePropertyValidator";
import BooleanVuePropertyValidator from "../../../_VuePropertiesValidators/BooleanVuePropertyValidator";
import ElementOfEnumerationVuePropertyValidator from "../../../_VuePropertiesValidators/ElementOfEnumerationVuePropertyValidator";
import NonEmptyStringVuePropertyValidator from "../../../_VuePropertiesValidators/NonEmptyStringVuePropertyValidator";
import NaturalNumberOrZeroVuePropertyValidator from "../../../_VuePropertiesValidators/NaturalNumberOrZeroVuePropertyValidator";
import ThemeVuePropertyValidator from "../../../_VuePropertiesValidators/ThemeVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../../../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import GeometricModifiersVuePropertyValidator from "../../../_VuePropertiesValidators/GeometricModifiersVuePropertyValidator";
import DecorativeVariationVuePropertyValidator from "../../../_VuePropertiesValidators/DecorativeVariationVuePropertyValidator";
import preventNullForOptionalVueProperty from "../../../_Decorators/preventNullForOptionalVueProperty";

/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  type TextBoxLocalization,
  TextBoxYDF_GUI_ComponentLocalization__English
} from "@yamato-daiwa/frontend";

/* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import InputtableControl from "../InputtableControl.vue";
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShellLogic.vue";
import Button from "../../Buttons/Plain/ButtonLogic.vue";

/* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  ComponentBase as VueComponentConfiguration,
  Prop as VueProperty,
  Model as VModel,
  Emit as emitVueEvent,
  Watch as onVueDataOrPropertyChanged
} from "vue-facing-decorator";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import ValidatableControl from "../ValidatableControl";
import InvalidVuePropertyError from "../../../_Errors/InvalidVueProperty/InvalidVuePropertyError";
import YDF_ComponentsCoordinator from "../../../YDF_ComponentsCoordinator";
import getElementByVueReference from "../../../../Functions/getElementByVueReference";
import AccessibleFromTemplateAsNonReactive from "../../../_Decorators/AccessibleFromTemplateAsNonReactive";
import NonReactiveVueData from "../../../_Decorators/NonReactiveVueData";
import {
  type ElementOfPseudoEnumeration,
  Logger,
  isNumber,
  isString,
  isNull,
  isNotUndefined
} from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


@VueComponentConfiguration({ name: TextBox.CSS_NAMESPACE })
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
        propertyName: "isInputtingOnlyOfNonNegativeIntegersOfRegularNotationAllowed",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly isInputtingOnlyOfNonNegativeIntegersOfRegularNotationAllowed!: boolean;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "mustValueBeTheDigitsSequence",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly mustValueBeTheDigitsSequence!: boolean;


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


  /* ┅┅┅ Buttons ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Value Copying Button ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "hasValueCopyingButton",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly hasValueCopyingButton!: boolean;

  protected get valueCopyingButtonGeometricModifiers(): Array<string> {
    return [
      Button.GeometricModifiers.squareShape,
      Button.GeometricModifiers.noLeftBorderAndRoundings,
        ...this.geometricModifiers.includes(TextBox.GeometricModifiers.noRoundings) ?
            [ Button.GeometricModifiers.noRoundings ] : []
    ];
  }

  @VueProperty({
    required: false,
    type: Function
  })
  protected onValueCopiedExternalEventHandler?: (value: string) => unknown;

  protected onValueCopyingButtonClicked(): void {
    navigator.clipboard.writeText(this.rawInput).catch(Logger.logPromiseError);
    this.onValueCopiedExternalEventHandler?.(this.rawInput);
  }


  /* ╍╍╍ Password Displaying Toggle ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "hasPasswordDisplayingToggle",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly hasPasswordDisplayingToggle!: boolean;

  protected get mustDisplayPasswordDisplayingToggle(): boolean {
    return this.HTML_Type === TextBox.HTML_Types.password && this.hasPasswordDisplayingToggle;
  }

  protected isPasswordDisplaying: boolean = false;

  protected onPasswordDisplayingToggleClicked(): void {
    this.isPasswordDisplaying = !this.isPasswordDisplaying;
  }


  /* ━━━ Input & Validation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VModel({
    type: ValidatableControl.Payload,
    required: true,
    validator: VuePropertyValidator.create({
      checker: (rawVModel: unknown): boolean =>
          ValidatableControl.VModelChecker(
            rawVModel,
            (rawValue: unknown): boolean =>
                isString(rawValue) ||
                isNumber(rawValue, { mustConsiderNaN_AsNumber: false }) ||
                isNull(rawValue)
          ),
      messageSpecificPart: "Must be either string or number or null.",
      propertyName: "v-model",
      componentName: TextBox.CSS_NAMESPACE
    })
  })
  protected readonly validatablePayload!:
      ValidatableControl.Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>;

  protected rawInput: string = "";


  /* ┅┅┅ Highlighting ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  @VueProperty({
    required: true,
    get validator(): VuePropertyValidator {
      return ElementOfEnumerationVuePropertyValidator({
        enumerationFullyQualifiedName: "TextBox.ValidityHighlightingActivationModes",
        enumeration: ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes,
        propertyName: "validityHighlightingActivationMode",
        componentName: TextBox.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  protected validityHighlightingActivationMode!:
      ElementOfPseudoEnumeration<typeof ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes>;

  @NonReactiveVueData(null)
  protected initialValidityHighlightingActivationMode!:
      ElementOfPseudoEnumeration<typeof ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes>;

  /* [ Theory ] Need initial value to be reactive but actual initial value will be set in `beforeCreate` lifecycle hook. */
  protected mustHighlightInputtedValueValidity: boolean = false;

  protected get mustHighlightInvalidInputtedValue(): boolean {
    return this.validatablePayload.isInvalid && this.mustHighlightInputtedValueValidity;
  }

  protected get mustHighlightValidInputtedValue(): boolean {
    return this.mustHighlightValidInputWhenItIsValid &&
        !this.validatablePayload.isInvalid &&
        this.mustHighlightInputtedValueValidity;
  }


  /* ━━━ Public Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Implementation of `ValidatableControl` interface ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public focus(): this {

    getElementByVueReference({
      vueReferenceID: TextBox.INPUT_OR_TEXT_AREA_ELEMENT_VUE_REFERENCE_ID,
      parentVueComponent: this,
      expectedDOM_ElementSubtype: HTMLElement,
      mustExpectExactlyOneElement: true
    }).
        focus();

    return this;

  }

  public resetValidityHighlightingStateToInitial(): void {
    this.mustHighlightInputtedValueValidity =
        this.initialValidityHighlightingActivationMode ===
            ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes.immediate;
  }


  /* ━━━ Actions Handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* [ Theory ] Action Handing in Vue: "keydown" → "input" → "keyup" */

  /* [ Theory ]
   * Being fired first, "keydown" can be used for the filtering of inputting of forbidden characters.
   * However, the full preventing of the invalid input by this method is impossible at least because besides the
   *   keyboard, the input may be performed by the screen-dependent browsers buttons near the textbox. */
  protected onKeyDown(event: KeyboardEvent): void {

    if (
      (
        this.isInputtingOnlyOfNonNegativeIntegersOfRegularNotationAllowed ||
            this.mustValueBeTheDigitsSequence
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
        this.updateVModel(0);
        this.rawInput = "0";
        return;
      }


      if (this.mustConvertEmptyValueToNull) {
        this.updateVModel(null);
        return;
      }

    }


    if (this.HTML_Type === TextBox.HTML_Types.number) {

      if (this.mustConvertEmptyValueToZero && this.rawInput.startsWith("0")) {

        const inputtedValueWithoutLeadingZeros: string = this.rawInput.replace(/^0+/u, "");

        if (inputtedValueWithoutLeadingZeros.length === 0) {
          this.updateVModel(0);
          return;
        }


        this.rawInput = inputtedValueWithoutLeadingZeros;
        this.updateVModel(Number(inputtedValueWithoutLeadingZeros));

        return;

      }


      this.updateVModel(Number(rawValue));

      return;

    }


    this.updateVModel(rawValue);

  }

  @emitVueEvent("update:modelValue")
  protected updateVModel(newValue: TextBox.SupportedValidatablePayloadValuesTypes):
      ValidatableControl.Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>
  {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
    * It is unlikely that there is a way to specify the correspondence between each waw inputted value and
    *   `NonEmptyValueType | EmptyValueType`. */
    return this.validatablePayload.updateImmutably(newValue as NonEmptyValueType | EmptyValueType);
  }

  @emitVueEvent("BLUR")
  protected onFocusOut(): void {
    this.mustHighlightInputtedValueValidity = true;
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

  @VueProperty({
    default: TextBox.Themes.regular,
    validator: ThemeVuePropertyValidator(TextBox)
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  protected get validatableControlShellTheme(): string {
    return TextBox.selfAndChildrenComponentsThemesCorrespondence.validatableControlShell[this.theme];
  }

  protected get valueCopyingButtonTheme(): string {
    return TextBox.selfAndChildrenComponentsThemesCorrespondence.valueCopyingButton[this.theme];
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
    return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(
      themesAndCorrespondenceDefinition, TextBox
    );
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    TextBox.areThemesCSS_ClassesCommon = true;
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
  protected readonly areThemesCSS_ClassesCommon!: boolean;


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

  @VueProperty({
    default: TextBox.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator(TextBox)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  protected get validatableControlGeometricVariation(): string {
    return TextBox.selfAndChildrenComponentsGeometricVariationsCorrespondence.validatableControlShell[this.geometricVariation];
  }

  protected get valueCopyingButtonGeometricVariation(): string {
    return TextBox.selfAndChildrenComponentsGeometricVariationsCorrespondence.valueCopyingButton[this.geometricVariation];
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
    return YDF_ComponentsCoordinator.defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(
      ownAndChildrenGeometricVariationsAndCorrespondenceDefinition, TextBox
    );
  }

  public static readonly GeometricModifiers: TextBox.GeometricModifiers = {
    noRoundings: "NO_ROUNDINGS"
  };

  @VueProperty({
    default: (): ReadonlyArray<ElementOfPseudoEnumeration<Button.GeometricModifiers>> => [],
    validator: GeometricModifiersVuePropertyValidator(Button)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricModifiers!: ReadonlyArray<ElementOfPseudoEnumeration<Button.GeometricModifiers>>;


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

  @VueProperty({
    default: TextBox.DecorativeVariations.regular,
    validator: DecorativeVariationVuePropertyValidator(TextBox)
  })
  protected readonly decorativeVariation!: string;

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
    return YDF_ComponentsCoordinator.defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(
      ownAndChildrenDecorativeVariationsAndCorrespondenceDefinition, TextBox
    );
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
      activeGeometricModifiers: this.geometricModifiers,
      activeDecorativeVariation: this.decorativeVariation,
      allDecorativeVariations: TextBox.DecorativeVariations,
      other: [
        ...this.multiline ? [ `${ TextBox.CSS_NAMESPACE }__Multiline` ] : [],
        ...this.disabled ? [ `${ TextBox.CSS_NAMESPACE }__DisabledState` ] : [],
        ...this.mustHighlightInvalidInputtedValue ? [ "TextBox--YDF__InvalidInputState" ] : [],
        ...this.mustHighlightValidInputtedValue ? [ "TextBox--YDF__ValidInputState" ] : []
      ]
    });
  }


  /* ━━━ IDs ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @AccessibleFromTemplateAsNonReactive
  protected static readonly INPUT_OR_TEXT_AREA_ELEMENT_VUE_REFERENCE_ID: string = "INPUT_OR_TEXT_AREA_ELEMENT";


  /* ┅┅┅ Instance ID ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected readonly INSTANCE_ID: string = TextBox.generateInstanceID();
  protected static counterForInstanceID_Generating: number = 0;

  public static generateInstanceID(): string {
    TextBox.counterForInstanceID_Generating++;
    return `TEXT_BOX--YDF-${ TextBox.counterForInstanceID_Generating }`;
  }


  /* ┅┅┅ HTML IDs ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
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
  protected readonly inputOrTextareaElementHTML_ID?: string;

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
  protected readonly labelElementHTML_ID?: string;

  /* [ Performance Optimization ] Intended to be non-reactive and thus must be assigned in `created` lifecycle hook. */
  protected HTML_IDs!: Readonly<{
    inputOrTextarea: string;
    label: string;
  }>;


  /* ━━━ Additional Validations of Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @onVueDataOrPropertyChanged("minimalNumericValue", { immediate: true })
  @onVueDataOrPropertyChanged("maximalNumericValue", { immediate: true })
  protected validateNumericValueLimitations(): void {

    if (
      isNotUndefined(this.minimalNumericValue) &&
          isNotUndefined(this.maximalNumericValue) &&
          this.minimalNumericValue > this.maximalNumericValue
    ) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidVuePropertyError({
          componentName: TextBox.CSS_NAMESPACE,
          propertyName: "minimalNumericValue",
          messageSpecificPart: "`minimalNumericValue` is greater than `maximalNumericValue`."
        }),
        title: InvalidVuePropertyError.localization.defaultTitle,
        occurrenceLocation: "textBox.validateNumericValueLimitations()"
      });
    }

  }

  @onVueDataOrPropertyChanged("minimalNumericValue", { immediate: true })
  @onVueDataOrPropertyChanged("maximalNumericValue", { immediate: true })
  protected validateCharactersCountLimitationsValueLimitations(): void {

    if (
      isNotUndefined(this.minimalCharactersCount) &&
          isNotUndefined(this.maximalCharactersCount) &&
          this.minimalCharactersCount > this.maximalCharactersCount
    ) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidVuePropertyError({
          componentName: TextBox.CSS_NAMESPACE,
          propertyName: "minimalCharactersCount",
          messageSpecificPart: "`minimalCharactersCount` is greater than `maximalCharactersCount`."
        }),
        title: InvalidVuePropertyError.localization.defaultTitle,
        occurrenceLocation: "textBox.validateCharactersCountLimitationsValueLimitations()"
      });
    }

  }


  /* ━━━ Lifecycle Hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected beforeCreate(): void {

    this.mustHighlightInputtedValueValidity =
        this.validityHighlightingActivationMode ===
            ValidatableControl.CharactersInputtingType.ValidityHighlightingActivationModes.immediate;

    this.initialValidityHighlightingActivationMode = this.validityHighlightingActivationMode;

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


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @AccessibleFromTemplateAsNonReactive
  public static localization: TextBoxLocalization = TextBoxYDF_GUI_ComponentLocalization__English;


  /* ━━━ Transforming to Options API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static applyStaticMembersToInheritorTransformedToOptionAPI(inheritedComponent: object): object {
    return Object.defineProperties(
      inheritedComponent,
      {
        CSS_NAMESPACE: { value: TextBox.CSS_NAMESPACE },
        HTML_Types: { value: TextBox.HTML_Types },
        Themes: { value: TextBox.Themes },
        defineThemes: { value: TextBox.defineThemes },
        GeometricVariations: { value: TextBox.GeometricVariations },
        defineGeometricVariations: { value: TextBox.defineGeometricVariations },
        geometricModifiers: { value: TextBox.GeometricModifiers },
        DecorativeVariations: { value: TextBox.DecorativeVariations },
        defineDecorativeVariations: { value: TextBox.defineDecorativeVariations },
        localization: { value: TextBox.localization }
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

  export type GeometricModifiers = Readonly<{
    noRoundings: "NO_ROUNDINGS";
  }>;

  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    readonly labelLike: "LABEL_LIKE";
    [decorativeVariationName: string]: string;
  };

}


export default TextBox;
