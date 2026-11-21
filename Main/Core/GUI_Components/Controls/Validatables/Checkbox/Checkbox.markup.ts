import CheckboxBase from "./Checkbox.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";
import generateValidatableControlGeneralStatesSimulationsSpecification from
    "../generateValidatableControlGeneralStatesSimulationsSpecification";


export abstract class Checkbox extends CheckboxBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    label: {
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

    HTML_Name: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    HTML_Value: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
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

    checked: {
      type: Boolean,
      undefinedValueSubstitution: false,
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

    theme: {
      type: String,
      undefinedValueSubstitution: Checkbox.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(CheckboxBase.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Checkbox.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: Checkbox.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: Checkbox.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Checkbox.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Checkbox.DecorativeVariations.${ key }`, value })
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
        allowedAlternatives: Object.values(Checkbox.GeometricModifiers)
      }
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: Checkbox.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Checkbox.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Checkbox.DecorativeVariations.${ key }`, value })
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
