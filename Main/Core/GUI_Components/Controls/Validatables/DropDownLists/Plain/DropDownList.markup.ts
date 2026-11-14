import DropDownListBase from "./DropDownList.base";
import generateValidatableControlGeneralStatesSimulationsSpecification from
    "../../generateValidatableControlGeneralStatesSimulationsSpecification";
import { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class DropDownList extends DropDownListBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

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

    accessibilityGuidances: {

      type: Object,
      isUndefinedForbidden: true,
      isNullForbidden: true,

      properties: {

        inputElement: {
          type: String,
          isUndefinedForbidden: true,
          isNullForbidden: true,
          minimalCharactersCount: 1
        },

        button: {
          type: String,
          isUndefinedForbidden: true,
          isNullForbidden: true,
          minimalCharactersCount: 1
        },

        listBox: {
          type: String,
          isUndefinedForbidden: true,
          isNullForbidden: true,
          minimalCharactersCount: 1
        }

      }

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

        inputElement: {
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
        },

        button: {
          type: String,
          isUndefinedForbidden: false,
          isNullForbidden: true,
          minimalCharactersCount: 1
        },

        listBox: {
          type: String,
          isUndefinedForbidden: false,
          isNullForbidden: true,
          minimalCharactersCount: 1
        }

      }

    },

    theme: {
      type: String,
      undefinedValueSubstitution: DropDownList.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(DropDownList.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `DateTimePicker.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: DropDownList.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: DropDownList.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(DropDownList.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `DateTimePicker.DecorativeVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: DropDownList.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(DropDownList.DecorativeVariations).
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

    ...generateValidatableControlGeneralStatesSimulationsSpecification({
      invalidInputHighlightingIfAnyValidationErrorsMessages: true,
      validValueHighlightingIfNoValidationErrorsMessages: true,
      validationErrorsMessages: true,
      asynchronousValidationsStatuses: true
    })

  };

}
