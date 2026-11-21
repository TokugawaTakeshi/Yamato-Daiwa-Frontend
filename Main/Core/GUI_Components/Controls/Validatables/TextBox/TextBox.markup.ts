import TextBoxBase from "./TextBox.base";
import TextBoxDOM_AccessResources from "./TextBoxDOM_AccessResources";
import generateValidatableControlGeneralStatesSimulationsSpecification from
    "../generateValidatableControlGeneralStatesSimulationsSpecification";
import { RawObjectDataProcessor, isNumber, isUndefined } from "@yamato-daiwa/es-extensions";


export abstract class TextBox extends TextBoxBase {

  public static readonly DOM_AccessResources: TextBoxDOM_AccessResources = TextBoxDOM_AccessResources;

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    HTML_Type: {
      type: String,
      undefinedValueSubstitution: TextBox.HTML_Types.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(TextBox.HTML_Types).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `TextBox.Themes.${ key }`, value })
          )
    },

    label: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    guidance: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    accessibilityGuidance: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    externalLabelHTML_ID: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    placeholder: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    /** @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill */
    autocomplete: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    value: {
      preValidationModifications:
          (rawValue: unknown): unknown =>
              (isNumber(rawValue, { mustConsiderNaN_AsNumber: false }) ? String(rawValue) : rawValue),
      type: String,
      undefinedValueSubstitution: "",
      isNullForbidden: true
    },

    multiline: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    autoResizingForMultilineMode: {
      type: Boolean,
      undefinedValueSubstitution: true,
      isNullForbidden: true
    },

    disabled: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    readonly: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    required: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    mustDisplayAppropriateBadgeIfInputIsRequired: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    mustDisplayAppropriateBadgeIfInputIsOptional: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    minimalCharactersCount: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.positiveIntegerOrZero,
      isNaN_Forbidden: true,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    maximalCharactersCount: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.positiveIntegerOrZero,
      isNaN_Forbidden: true,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      customValidators: {
        validationFunction:
            (
              { value: maximalCharactersCount, rawData__currentObjectDepth }:
                  RawObjectDataProcessor.PropertyOrElementCustomValidator.CompoundParameter<number>
            ): boolean =>
                isUndefined(rawData__currentObjectDepth.minimalCharactersCount) ||
                (
                  isNumber(rawData__currentObjectDepth.minimalCharactersCount, { mustConsiderNaN_AsNumber: false }) &&
                      maximalCharactersCount >= rawData__currentObjectDepth.minimalCharactersCount
                ),
        descriptionForLogging: "\"maximalCharactersCount\" can not be less than \"minimalCharactersCount\"."
      }
    },

    minimalNumericValue: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.positiveIntegerOrZero,
      isNaN_Forbidden: true,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    maximalNumericValue: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.positiveIntegerOrZero,
      isNaN_Forbidden: true,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      customValidators: {
        validationFunction:
          (
            { value: maximalNumericValue, rawData__currentObjectDepth }:
                RawObjectDataProcessor.PropertyOrElementCustomValidator.CompoundParameter<number>
          ): boolean =>
              isUndefined(rawData__currentObjectDepth.minimalNumericValue) ||
              (
                isNumber(rawData__currentObjectDepth.minimalNumericValue, { mustConsiderNaN_AsNumber: false }) &&
                    maximalNumericValue >= rawData__currentObjectDepth.minimalNumericValue
              ),
        descriptionForLogging: "\"maximalNumericValue\" can not be less than \"minimalNumericValue\"."
      }
    },

    hasValueCopyingButton: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    hasPasswordDisplayingToggle: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    /** @description
     * 1 minimal character is definitely not enough for unique string, but in MVC mode it can be a variable. */
    instanceID_UniqueDynamicPart: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    HTML_IDs: {

      type: Object,
      isUndefinedForbidden: false,
      isNullForbidden: true,

      properties: {

        inputOrTextArea: {
          type: String,
          isUndefinedForbidden: false,
          isNullForbidden: true,
          minimalCharactersCount: 1
        },

        label: {
          type: String,
          isUndefinedForbidden: false,
          isNullForbidden: true,
          minimalCharactersCount: 1
        }

      }

    },

    theme: {
      type: String,
      undefinedValueSubstitution: TextBox.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(TextBox.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `TextBox.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: TextBox.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: TextBox.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(TextBox.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `TextBox.GeometricVariations.${ key }`, value })
          )
    },

    geometricModifiers: {
      type: Array,
      undefinedValueSubstitution: [],
      isNullForbidden: true,
      areUndefinedElementsForbidden: true,
      areNullElementsForbidden: true,
      element: {
        type: String,
        allowedAlternatives: Object.
            entries(TextBox.GeometricModifiers).
            map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `TextBox.GeometricModifiers.${ key }`, value })
          )
      }
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: TextBox.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(TextBox.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `TextBox.DecorativeVariations.${ key }`, value })
          )
    }

  };


  /* ━━━ State Simulations Specification ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly statesSimulationsSpecification: RawObjectDataProcessor.PropertiesSpecification =
      generateValidatableControlGeneralStatesSimulationsSpecification({
        invalidInputHighlightingIfAnyValidationErrorsMessages: true,
        validValueHighlightingIfNoValidationErrorsMessages: true,
        validationErrorsMessages: true,
        asynchronousValidationsStatuses: true
      });

}
