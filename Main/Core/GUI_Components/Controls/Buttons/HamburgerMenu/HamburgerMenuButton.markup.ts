import HamburgerMenuButtonBase from "./HamburgerMenuButton.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class HamburgerMenuButton extends HamburgerMenuButtonBase {

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
      undefinedValueSubstitution: HamburgerMenuButton.LabelLetterCases.lowercase,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(HamburgerMenuButton.LabelLetterCases).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `HamburgerMenuButton__YDF.LabelLetterCases.${ key }`, value })
          )
    },

    alwaysEnglishLabel: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    accessibilityGuidance: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    theme: {
      type: String,
      undefinedValueSubstitution: HamburgerMenuButton.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(HamburgerMenuButton.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `HamburgerMenuButton__YDF.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: HamburgerMenuButton.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: HamburgerMenuButton.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(HamburgerMenuButton.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `HamburgerMenuButton__YDF.GeometricVariations.${ key }`, value })
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
            entries(HamburgerMenuButton.GeometricModifiers).
            map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `HamburgerMenuButton__YDF.GeometricModifiers.${ key }`, value }))
      }
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: HamburgerMenuButton.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(HamburgerMenuButton.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `HamburgerMenuButton__YDF.DecorativeVariations.${ key }`, value })
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
          entries(HamburgerMenuButton.DecorativeModifiers).
          map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
              ({ key: `HamburgerMenuButton__YDF.DecorativeModifiers.${ key }`, value }))
      }
    }

  };

}
