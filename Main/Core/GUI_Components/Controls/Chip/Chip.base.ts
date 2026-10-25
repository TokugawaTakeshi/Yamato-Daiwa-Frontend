import type { YDF_Component } from "../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../_Auxiliaries/YDF_ComponentsCoordinator";


export abstract class Chip {

  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [Chip.Themes.regular]: "Chip--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof Chip {
    return YDF_ComponentsCoordinator.defineThemes(Chip, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof Chip {
    Chip.areThemesCSS_ClassesCommon = true;
    return Chip;
  }


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly GeometricVariations: Chip.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [Chip.GeometricVariations.regular]: "Chip--YDF__RegularGeometricVariation",
        [Chip.GeometricVariations.stickyNoteLike]: "Chip--YDF__StickyNoteLikeGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof Chip {
    return YDF_ComponentsCoordinator.defineGeometricVariations(Chip, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get geometricModifiersCSS_Classes(): { [geometricModifierValue: string]: string; } {
    return {
      [Chip.GeometricModifiers.singleLine]: "Chip--YDF__SingleLineGeometricModifier"
    };
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly DecorativeVariations: Chip.DecorativeVariations = {
    veryCatchyBright: "VERY_CATCHY_BRIGHT",
    catchyBright: "CATCHY_BRIGHT",
    modestlyCatchyBright: "MODESTLY_CATCHY_BRIGHT",
    neutralBright: "NEUTRAL_BRIGHT",
    modestlyCalmingBright: "MODESTLY_CALMING_BRIGHT",
    calmingBright: "CALMING_BRIGHT",
    achromaticBright: "ACHROMATIC_BRIGHT",
    veryCatchyPastel: "VERY_CATCHY_PASTEL",
    catchyPastel: "CATCHY_PASTEL",
    modestlyCatchyPastel: "MODESTLY_CATCHY_PASTEL",
    neutralPastel: "NEUTRAL_PASTEL",
    modestlyCalmingPastel: "MODESTLY_CALMING_PASTEL",
    calmingPastel: "CALMING_PASTEL",
    achromaticPastel: "ACHROMATIC_PASTEL"
  };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      {
        [Chip.DecorativeVariations.veryCatchyBright]: "Chip--YDF__VeryCatchyBrightDecorativeVariation",
        [Chip.DecorativeVariations.catchyBright]: "Chip--YDF__CatchyBrightDecorativeVariation",
        [Chip.DecorativeVariations.modestlyCatchyBright]: "Chip--YDF__ModestlyCatchyBrightDecorativeVariation",
        [Chip.DecorativeVariations.neutralBright]: "Chip--YDF__NeutralBrightDecorativeVariation",
        [Chip.DecorativeVariations.modestlyCalmingBright]: "Chip--YDF__ModestlyCalmingBrightDecorativeVariation",
        [Chip.DecorativeVariations.calmingBright]: "Chip--YDF__CalmingBrightDecorativeVariation",
        [Chip.DecorativeVariations.achromaticBright]: "Chip--YDF__AchromaticBrightDecorativeVariation",
        [Chip.DecorativeVariations.veryCatchyPastel]: "Chip--YDF__VeryCatchyPastelDecorativeVariation",
        [Chip.DecorativeVariations.catchyPastel]: "Chip--YDF__CatchyPastelDecorativeVariation",
        [Chip.DecorativeVariations.modestlyCatchyPastel]: "Chip--YDF__ModestlyCatchyPastelDecorativeVariation",
        [Chip.DecorativeVariations.neutralPastel]: "Chip--YDF__NeutralPastelDecorativeVariation",
        [Chip.DecorativeVariations.modestlyCalmingPastel]: "Chip--YDF__ModestlyCalmingPastelDecorativeVariation",
        [Chip.DecorativeVariations.calmingPastel]: "Chip--YDF__CalmingPastelDecorativeVariation",
        [Chip.DecorativeVariations.achromaticPastel]: "Chip--YDF__CchromaticPastelDecorativeVariation"
      };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof Chip {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(Chip, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get decorativeModifiersCSS_Classes(): { [decorativeModifierValue: string]: string; } {
    return {
      [Chip.DecorativeModifiers.bordersDisguising]: "Chip--YDF__BordersDisguisingDecorativeModifier",
      [Chip.DecorativeModifiers.noBackground]: "Chip--YDF__NoBackgroundDecorativeModifier"
    };
  }

}


export namespace Chip {

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{
          regular: "REGULAR";
          small: "SMALL";
        }
    >>;

  export enum GeometricModifiers {
    singleLine = "SINGLE_LINE"
  }

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{
          veryCatchyBright: "VERY_CATCHY_BRIGHT";
          catchyBright: "CATCHY_BRIGHT";
          modestlyCatchyBright: "MODESTLY_CATCHY_BRIGHT";
          neutralBright: "NEUTRAL_BRIGHT";
          modestlyCalmingBright: "MODESTLY_CALMING_BRIGHT";
          calmingBright: "CALMING_BRIGHT";
          achromaticBright: "ACHROMATIC_BRIGHT";
          veryCatchyPastel: "VERY_CATCHY_PASTEL";
          catchyPastel: "CATCHY_PASTEL";
          modestlyCatchyPastel: "MODESTLY_CATCHY_PASTEL";
          neutralPastel: "NEUTRAL_PASTEL";
          modestlyCalmingPastel: "MODESTLY_CALMING_PASTEL";
          calmingPastel: "CALMING_PASTEL";
          achromaticPastel: "ACHROMATIC_PASTEL";
        }>
      >;

  export enum DecorativeModifiers {
    bordersDisguising = "BORDERS_DISGUISING",
    noBackground = "NO_BACKGROUND"
  }

}


export default Chip;
