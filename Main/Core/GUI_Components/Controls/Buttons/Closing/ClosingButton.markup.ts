import ClosingButtonBase from "./ClosingButton.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class ClosingButton extends ClosingButtonBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    customLabel: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    noLabel: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    labelLetterCase: {
      type: String,
      undefinedValueSubstitution: ClosingButton.LabelLetterCases.lowercase,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ClosingButton.LabelLetterCases).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ClosingButton__YDF.LabelLetterCases.${ key }`, value })
          )
    },

    accessibilityGuidance: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    theme: {
      type: String,
      undefinedValueSubstitution: ClosingButton.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ClosingButton.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ClosingButton__YDF.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: ClosingButton.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: ClosingButton.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ClosingButton.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ClosingButton__YDF.GeometricVariations.${ key }`, value })
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
            entries(ClosingButton.GeometricModifiers).
            map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ClosingButton__YDF.GeometricModifiers.${ key }`, value }))
      }
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: ClosingButton.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(ClosingButton.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `ClosingButton__YDF.DecorativeVariations.${ key }`, value })
          )
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
          entries(ClosingButton.DecorativeModifiers).
          map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
              ({ key: `ClosingButton__YDF.DecorativeModifiers.${ key }`, value }))
      }
    }

  };

}
