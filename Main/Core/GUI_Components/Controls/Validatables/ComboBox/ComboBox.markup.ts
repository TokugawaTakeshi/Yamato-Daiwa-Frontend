import ComboBoxBase from "./ComboBox.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";
import generateValidatableControlGeneralStatesSimulationsSpecification from
    "../generateValidatableControlGeneralStatesSimulationsSpecification";


export abstract class ComboBox extends ComboBoxBase {

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

    isMultiSelectionAllowed: {
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

    HTML_IDs: {

      type: Object,
      isUndefinedForbidden: false,
      isNullForbidden: true,

      properties: {

        label: {
          type: String,
          isUndefinedForbidden: false,
          isNullForbidden: true,
          minimalCharactersCount: 1
        },

        inputElement: {
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
      isUndefinedForbidden: false,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ComboBoxBase.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ComboBox.Themes.${ key }`, value })
          )
    },

    areThemesExternal: {
      type: Boolean,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ComboBox.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ComboBox.DecorativeVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ComboBox.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ComboBox.DecorativeVariations.${ key }`, value })
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
