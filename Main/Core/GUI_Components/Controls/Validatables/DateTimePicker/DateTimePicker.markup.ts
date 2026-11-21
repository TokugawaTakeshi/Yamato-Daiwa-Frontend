import DateTimePickerBase from "./DateTimePicker.base";
import DateTimePickerDOM_AccessResources from "./DateTimePickerDOM_AccessResources";
import generateValidatableControlGeneralStatesSimulationsSpecification from
    "../generateValidatableControlGeneralStatesSimulationsSpecification";
import {
  RawObjectDataProcessor,
  isIntegerOfAnySign,
  isUndefined
} from "@yamato-daiwa/es-extensions";


export abstract class DateTimePicker extends DateTimePickerBase {

  public static readonly DOM_AccessResources: DateTimePickerDOM_AccessResources = DateTimePickerDOM_AccessResources;

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    label: {
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

    guidance: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    mode: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(DateTimePickerBase.Modes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `DateTimePicker.Modes.${ key }`, value })
          )
    },

    value: {
      type: RawObjectDataProcessor.ValuesTypesIDs.polymorphic,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      alternatives: [
        {
          type: String,
          minimalCharactersCount: 1
        },
        {
          type: Number,
          numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumberOrZero,
          isNaN_Forbidden: true
        }
      ]
    },

    disabled: {
      type: Boolean,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    readonly: {
      type: Boolean,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    required: {
      type: Boolean,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    mustDisplayAppropriateBadgeIfInputIsRequired: {
      type: Boolean,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    mustDisplayAppropriateBadgeIfInputIsOptional: {
      type: Boolean,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge: {
      type: Boolean,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    minimalCharactersCount: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumberOrZero,
      isNaN_Forbidden: true,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    maximalCharactersCount: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumberOrZero,
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
                  isIntegerOfAnySign(rawData__currentObjectDepth.minimalCharactersCount) &&
                  maximalCharactersCount >= rawData__currentObjectDepth.minimalCharactersCount
                ),
        descriptionForLogging: "\"maximalCharactersCount\" could not be less than \"minimalCharactersCount\"."
      }
    },

    minimalNumericValue: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumberOrZero,
      isNaN_Forbidden: true,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    maximalNumericValue: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.naturalNumberOrZero,
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
                  isIntegerOfAnySign(rawData__currentObjectDepth.minimalNumericValue) &&
                  maximalNumericValue >= rawData__currentObjectDepth.minimalNumericValue
                ),
        descriptionForLogging: "\"maximalNumericValue\" could not be less than \"minimalNumericValue\"."
      }
    },

    /** @description
     * 1 minimal character is definitely not enough for unique string, but in MVC mode it could be the variable. */
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

        input: {
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

    nativeInputElementHTML_ID: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    labelElementHTML_ID: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    theme: {
      type: String,
      undefinedValueSubstitution: DateTimePicker.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(DateTimePickerBase.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `DateTimePicker.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: DateTimePicker.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: DateTimePicker.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(DateTimePicker.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `DateTimePicker.DecorativeVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: DateTimePicker.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(DateTimePicker.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `DateTimePicker.DecorativeVariations.${ key }`, value })
          )
    }

  };

  public static readonly statesSimulationsSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    expanded: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    activeMatrix: {
      type: String,
      undefinedValueSubstitution: DateTimePicker.Matrices.days,
      isNullForbidden: true,
      allowedAlternatives: Object.values(DateTimePicker.Matrices)
    },

    ...generateValidatableControlGeneralStatesSimulationsSpecification({
      invalidInputHighlightingIfAnyValidationErrorsMessages: true,
      validValueHighlightingIfNoValidationErrorsMessages: true,
      validationErrorsMessages: true,
      asynchronousValidationsStatuses: true
    })

  };

}
