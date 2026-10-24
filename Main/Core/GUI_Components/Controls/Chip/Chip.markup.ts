import ChipBase from "./Chip.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class Chip extends ChipBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    keyLabel: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true
    },

    valueLabel: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true
    },

    theme: {
      type: String,
      undefinedValueSubstitution: Chip.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Chip.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Chip.Themes.${ key }`, value })
          )
    },

    dismissingButtonAccessibilityGuidance: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: Chip.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: Chip.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Chip.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Chip.GeometricVariations.${ key }`, value })
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
            entries(Chip.GeometricModifiers).
            map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Chip.GeometricModifiers.${ key }`, value }))
      }
    },

    decorativeVariation: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Chip.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Chip.DecorativeVariations.${ key }`, value })
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
          entries(Chip.DecorativeModifiers).
          map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
              ({ key: `Chip.DecorativeModifiers.${ key }`, value }))
      }
    }

  };

}
