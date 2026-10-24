import AdmonitionBlockBase from "./AdmonitionBlock.base";
import AdmonitionBlockDOM_AccessResources from "./AdmonitionBlockDOM_AccessResources";
import { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class AdmonitionBlock extends AdmonitionBlockBase {

  public static readonly DOM_AccessResources: AdmonitionBlockDOM_AccessResources =
      AdmonitionBlockDOM_AccessResources;

  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    title: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    SVG_Icon: {

      type: RawObjectDataProcessor.ValuesTypesIDs.polymorphic,
      isUndefinedForbidden: false,
      isNullForbidden: true,

      alternatives: [
        { type: Boolean },
        {

          type: Object,

          properties: {

            innerElementID: {
              type: String,
              isUndefinedForbidden: true,
              isNullForbidden: true,
              minimalCharactersCount: 1
            },

            SVG_ElementAttributes: {
              type: RawObjectDataProcessor.ValuesTypesIDs.associativeArray,
              undefinedValueSubstitution: {},
              isNullForbidden: true,
              areUndefinedTypeValuesForbidden: true,
              areNullTypeValuesForbidden: true,
              value: {
                type: String,
                minimalCharactersCount: 1
              }
            }

          }

        }
      ]

    },

    dismissible: {
      type: Boolean,
      undefinedValueSubstitution: false,
      isNullForbidden: true
    },

    theme: {
      type: String,
      undefinedValueSubstitution: AdmonitionBlock.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(AdmonitionBlock.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `AdmonitionBlock.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: AdmonitionBlock.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: AdmonitionBlock.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(AdmonitionBlock.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `AdmonitionBlock.GeometricVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      isUndefinedForbidden: true,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(AdmonitionBlock.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `AdmonitionBlock.DecorativeVariations.${ key }`, value })
          )
    }

  };


  /* ━━━ IDs Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private static counterForID_Generating: number = 0;

  public static generateInstanceID(uniqueDynamicPart?: string): string {
    return `ADMONITION_BLOCK--YDF-${ uniqueDynamicPart ?? ++AdmonitionBlock.counterForID_Generating }`;
  }


  /* ┅┅┅ SVG Icons ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  private static counterForCustomSVG_IconsIDs_Generating: number = 0;
  private static customSVG_IconCurrentID: string | null = null;

  public static generateCustomIconNewID(): string {

    AdmonitionBlock.counterForCustomSVG_IconsIDs_Generating++;
    AdmonitionBlock.customSVG_IconCurrentID =
        `ADMONITION_BLOCK--YDF-SVG_ICON-${ this.counterForCustomSVG_IconsIDs_Generating }`;

    return AdmonitionBlock.customSVG_IconCurrentID;

  }

}
