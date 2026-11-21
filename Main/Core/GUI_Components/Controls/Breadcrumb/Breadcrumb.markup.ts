import BreadcrumbBase from "./Breadcrumb.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class Breadcrumb extends BreadcrumbBase {

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    items: {

      type: Array,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      areUndefinedElementsForbidden: true,
      areNullElementsForbidden: true,
      minimalElementsCount: 1,

      element: {

        type: Object,

        properties: {

          label: {
            type: String,
            isUndefinedForbidden: true,
            isNullForbidden: true,
            minimalCharactersCount: 1
          },

          URI: {
            type: String,
            isUndefinedForbidden: false,
            isNullForbidden: true,
            minimalCharactersCount: 1
          },

          isInteractive: {
            type: Boolean,
            undefinedValueSubstitution: false,
            isNullForbidden: true
          }

        }

      }

    },

    noLineBreakingInsideItems: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    theme: {
      type: String,
      undefinedValueSubstitution: Breadcrumb.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Breadcrumb.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Breadcrumb.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: Breadcrumb.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: Breadcrumb.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Breadcrumb.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Breadcrumb.GeometricVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Breadcrumb.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Breadcrumb.DecorativeVariations.${ key }`, value })
          )
    }

  };

}
