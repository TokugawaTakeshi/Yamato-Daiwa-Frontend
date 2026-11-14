import NumberBoxBase from "./NumberBox.base";
import {
  RawObjectDataProcessor,
  isNumber,
  isUndefined
} from "@yamato-daiwa/es-extensions";
import generateValidatableControlGeneralStatesSimulationsSpecification from
    "../generateValidatableControlGeneralStatesSimulationsSpecification";


export class NumberBox extends NumberBoxBase {

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

    placeholder: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    /** @description Could be something like "{{ foo }}" in the MVC case. */
    initialValue: {
      type: RawObjectDataProcessor.ValuesTypesIDs.polymorphic,
      undefinedValueSubstitution: 0,
      isNullForbidden: true,
      alternatives: [
        {
          type: Number,
          numbersSet: RawObjectDataProcessor.NumbersSets.anyRealNumber,
          isNaN_Forbidden: true
        },
        {
          type: String,
          minimalCharactersCount: 1
        }
      ]
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

    step: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.anyRealNumber,
      isNaN_Forbidden: true,
      undefinedValueSubstitution: 1,
      isNullForbidden: true
    },

    minimalValue: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.negativeIntegerOrZero,
      isNaN_Forbidden: true,
      undefinedValueSubstitution: Number.MIN_SAFE_INTEGER,
      isNullForbidden: true
    },

    maximalValue: {
      type: Number,
      numbersSet: RawObjectDataProcessor.NumbersSets.positiveIntegerOrZero,
      isNaN_Forbidden: true,
      undefinedValueSubstitution: Number.MAX_SAFE_INTEGER,
      isNullForbidden: true,
      customValidators: {
        validationFunction:
            (
              { value: maximalValue, rawData__currentObjectDepth }:
                  RawObjectDataProcessor.PropertyOrElementCustomValidator.CompoundParameter<number>
            ): boolean =>
                isUndefined(rawData__currentObjectDepth.minimalValue) ||
                (
                  isNumber(rawData__currentObjectDepth.minimalValue, { mustConsiderNaN_AsNumber: false }) &&
                      maximalValue > rawData__currentObjectDepth.minimalValue
                ),
        descriptionForLogging: "\"maximalValue\" could not be less than \"minimalValue\"."
      }
    },

    instanceID_UniqueDynamicPart: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 10
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
      undefinedValueSubstitution: NumberBox.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(NumberBox.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `NumberBox.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: NumberBox.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: NumberBox.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(NumberBox.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `NumberBox.DecorativeVariations.${ key }`, value })
          )
    },

    orientation: {
      type: String,
      undefinedValueSubstitution: NumberBox.Orientations.horizontal,
      isNullForbidden: true,
      allowedAlternatives: Object.values(NumberBox.Orientations)
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: NumberBox.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(NumberBox.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `NumberBox.DecorativeVariations.${ key }`, value })
          )
    }

  };

  public static readonly statesSimulationsSpecification: RawObjectDataProcessor.PropertiesSpecification =

      generateValidatableControlGeneralStatesSimulationsSpecification({
        invalidInputHighlightingIfAnyValidationErrorsMessages: true,
        validValueHighlightingIfNoValidationErrorsMessages: true,
        validationErrorsMessages: true,
        asynchronousValidationsStatuses: true
      });

}
