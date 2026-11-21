import BadgeBase from "./Badge.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class Badge extends BadgeBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    keyLabel: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    valueLabel: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    theme: {
      type: String,
      undefinedValueSubstitution: Badge.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Badge.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Badge.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: Badge.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: Badge.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Badge.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Badge.GeometricVariations.${ key }`, value })
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
            entries(Badge.GeometricModifiers).
            map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Badge__YDF.GeometricModifiers.${ key }`, value }))
      }
    },

    decorativeVariation: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Badge.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Badge.DecorativeVariations.${ key }`, value })
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
          entries(Badge.DecorativeModifiers).
          map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
              ({ key: `Badge__YDF.DecorativeModifiers.${ key }`, value }))
      }
    },

    rootElementTag: {
      type: String,
      undefinedValueSubstitution: "span",
      isNullForbidden: true,
      minimalCharactersCount: 1
    }

  };

}
