import ValidatableControlShellBase from "./ValidatableControlShell.base";
import ValidatableControlShellDOM_AccessResources from "./ValidatableControlShellDOM_AccessResources";
import generateValidatableControlGeneralStatesSimulationsSpecification from
    "../Validatables/generateValidatableControlGeneralStatesSimulationsSpecification";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class ValidatableControlShell extends ValidatableControlShellBase {

  public static readonly DOM_AccessResources: ValidatableControlShellDOM_AccessResources =
      ValidatableControlShellDOM_AccessResources;


  /* ━━━ Properties Specification ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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

    coreElementHTML_ID: {
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

    mainSlotWrapperAdditionalCSS_Classes: {
      type: Array,
      undefinedValueSubstitution: [],
      isNullForbidden: true,
      areUndefinedElementsForbidden: true,
      areNullElementsForbidden: true,
      element: {
        type: String,
        minimalCharactersCount: 1
      }
    },

    theme: {
      type: String,
      undefinedValueSubstitution: ValidatableControlShell.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ValidatableControlShell.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ValidatableControlShell.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: ValidatableControlShell.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: ValidatableControlShell.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ValidatableControlShell.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ValidatableControlShell.GeometricVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ValidatableControlShell.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ValidatableControlShell.DecorativeVariations.${ key }`, value })
          )
    }

  };

  public static readonly loadingPlaceholderPropertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    label: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    guidance: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    badge: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    mainSlotWrapperAdditionalCSS_Classes: {
      type: Array,
      undefinedValueSubstitution: [],
      isNullForbidden: true,
      areUndefinedElementsForbidden: true,
      areNullElementsForbidden: true,
      element: {
        type: String,
        minimalCharactersCount: 1
      }
    },

    theme: {
      type: String,
      undefinedValueSubstitution: ValidatableControlShell.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ValidatableControlShell.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ValidatableControlShell.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: ValidatableControlShell.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: ValidatableControlShell.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ValidatableControlShell.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ValidatableControlShell.GeometricVariations.${ key }`, value })
          )
    }

  };


  /* ━━━ State Simulations Specification ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly statesSimulationsSpecification: RawObjectDataProcessor.PropertiesSpecification =
      generateValidatableControlGeneralStatesSimulationsSpecification({
        validationErrorsMessages: true,
        asynchronousValidationsStatuses: true
      });

}
