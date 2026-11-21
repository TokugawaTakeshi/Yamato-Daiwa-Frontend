import RadioButtonBase from "./RadioButton.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class RadioButton extends RadioButtonBase {

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
      isUndefinedForbidden: true,
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
     * 1 minimal character is definitely not enough for a unique string, but in MVC mode it could be the variable. */
    instanceID_UniqueDynamicPart: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    inputElementHTML_ID: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
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
      undefinedValueSubstitution: RadioButton.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(RadioButton.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `RadioButton__YDF.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: RadioButton.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: RadioButton.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(RadioButton.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `RadioButton__YDF.GeometricVariations.${ key }`, value })
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
            entries(RadioButton.GeometricModifiers).
            map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `RadioButton__YDF.GeometricModifiers.${ key }`, value }))
      }
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: RadioButton.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(RadioButton.DecorativeVariations).
          map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
              ({ key: `RadioButton__YDF.DecorativeVariations.${ key }`, value }))
    },

    decorativeModifiers: {
      type: Array,
      undefinedValueSubstitution: [],
      isNullForbidden: true,
      areUndefinedElementsForbidden: true,
      areNullElementsForbidden: true,
      element: {
        type: String,
        allowedAlternatives: Object.
          entries(RadioButton.DecorativeModifiers).
          map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
              ({ key: `RadioButton__YDF.DecorativeModifiers.${ key }`, value }))
      }
    }

  };

}
