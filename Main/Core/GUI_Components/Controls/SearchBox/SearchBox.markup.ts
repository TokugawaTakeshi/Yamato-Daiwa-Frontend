import SearchBoxBase from "./SearchBox.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export class SearchBox extends SearchBoxBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    accessibilityGuidance: {
      type: String,
      undefinedValueSubstitution: SearchBox.localization.inputElement.defaultAccessibilityGuidance,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    placeholder: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    disables: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    theme: {
      type: String,
      undefinedValueSubstitution: SearchBox.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(SearchBox.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `SearchBox__YDF.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: SearchBox.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: SearchBox.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(SearchBox.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `SearchBox__YDF.GeometricVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(SearchBox.DecorativeVariations).
          map(([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
              ({ key: `SearchBox__YDF.DecorativeVariations.${ key }`, value }))
    }

  };

  public static readonly statesSimulationsSpecification: RawObjectDataProcessor.PropertiesSpecification = {
     tooltip: {
      type: Boolean,
      undefinedValueSubstitution: SearchBox.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    }
  };

}
