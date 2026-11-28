import BlockquoteBase from "./Blockquote.base";
import type { RawObjectDataProcessor } from "@yamato-daiwa/es-extensions";


export abstract class Blockquote extends BlockquoteBase {

  /* ━━━ Properties Specification ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly propertiesSpecification: RawObjectDataProcessor.PropertiesSpecification = {

    authorPhotoURI: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    authorPhotoAlternatingText: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    publicationPhotoURI: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    publicationPhotoAlternatingText: {
      type: String,
      isUndefinedForbidden: false,
      isNullForbidden: true,
      minimalCharactersCount: 1
    },

    theme: {
      type: String,
      undefinedValueSubstitution: Blockquote.Themes.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Blockquote.Themes).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Blockquote__YDF.Themes.${ key }`, value })
          )
    },

    areThemesCSS_ClassesCommon: {
      type: Boolean,
      undefinedValueSubstitution: Blockquote.areThemesCSS_ClassesCommon,
      isNullForbidden: true
    },

    geometricVariation: {
      type: String,
      undefinedValueSubstitution: Blockquote.GeometricVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Blockquote.GeometricVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Blockquote__YDF.GeometricVariations.${ key }`, value })
          )
    },

    decorativeVariation: {
      type: String,
      undefinedValueSubstitution: Blockquote.DecorativeVariations.regular,
      isNullForbidden: true,
      allowedAlternatives: Object.
          entries(Blockquote.DecorativeVariations).
          map(
            ([ key, value ]: Readonly<[ string, string ]>): Readonly<{ key: string; value: string; }> =>
                ({ key: `Blockquote__YDF.DecorativeVariations.${ key }`, value })
          )
    }

  };

}
