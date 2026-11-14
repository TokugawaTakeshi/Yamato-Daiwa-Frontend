import RadioButtonsGroupBase from "./RadioButtonsGroup.base";
import { isNonEmptyString, RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";
import generateValidatableControlGeneralStatesSimulationsSpecification from
    "../generateValidatableControlGeneralStatesSimulationsSpecification";


export class RadioButtonsGroup extends RadioButtonsGroupBase {

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
      undefinedForbiddenIf: {
        predicate:
            (
              { rawData__full: properties }:
                  RawObjectDataProcessor.ConditionAssociatedWithProperty.Predicate.Parameter
            ): boolean =>
                !isNonEmptyString(properties.label) &&
                !isNonEmptyString(properties.accessibilityGuidance),
        descriptionForLogging:
            "Neither \"label\" nor \"accessibilityGuidance\" has been specified with non-empty strings"
      },
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    guidance: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    selectingOptions: {

      type: Array,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      areUndefinedElementsForbidden: true,
      areNullElementsForbidden: true,

      element: {
        type: Object,
        properties: {
          key: {
            type: RawObjectDataProcessor.ValuesTypesIDs.polymorphic,
            isUndefinedForbidden: true,
            isNullForbidden: true,
            alternatives: [
              {
                type: String,
                minimalCharactersCount: 1
              },
              {
                type: Number,
                numbersSet: RawObjectDataProcessor.NumbersSets.anyRealNumber,
                isNaN_Forbidden: true
              }
            ]
          },
          label: {
            type: RawObjectDataProcessor.ValuesTypesIDs.polymorphic,
            isUndefinedForbidden: true,
            isNullForbidden: true,
            alternatives: [
              {
                type: String,
                minimalCharactersCount: 1
              },
              {
                type: Number,
                numbersSet: RawObjectDataProcessor.NumbersSets.anyRealNumber,
                isNaN_Forbidden: true
              }
            ]
          }
        }
      }

    },

    initiallySelectedOptionKey: {
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
          numbersSet: RawObjectDataProcessor.NumbersSets.anyRealNumber,
          isNaN_Forbidden: true
        }
      ]
    },

    radioButtonsHTML_Name: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
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

    labelElementHTML_ID: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    theme: {
      type: String,
      undefinedValueSubstitution: RadioButtonsGroup.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(RadioButtonsGroup.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `RadioButtonsGroup.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: RadioButtonsGroup.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: RadioButtonsGroup.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(RadioButtonsGroup.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `RadioButtonsGroup.DecorativeVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      isNullForbidden: true,
      undefinedValueSubstitution: RadioButtonsGroup.DecorativeVariations.regular,
      allowedAlternatives: Object.
          entries(RadioButtonsGroup.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `RadioButtonsGroup.DecorativeVariations.${ key }`, value })
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
