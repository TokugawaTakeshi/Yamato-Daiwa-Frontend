import type { YDF_Component } from "../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../_Auxiliaries/YDF_ComponentsCoordinator";


export abstract class Badge {

  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [Badge.Themes.regular]: "Badge--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof Badge {
    return YDF_ComponentsCoordinator.defineThemes(Badge, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof Badge {
    Badge.areThemesCSS_ClassesCommon = true;
    return Badge;
  }


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly GeometricVariations: Badge.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [Badge.GeometricVariations.regular]: "Badge--YDF__RegularGeometricVariation",
        [Badge.GeometricVariations.stickyNoteLike]: "Badge--YDF__StickyNoteLikeGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof Badge {
    return YDF_ComponentsCoordinator.defineGeometricVariations(Badge, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get geometricModifiersCSS_Classes(): { [geometricModifierValue: string]: string; } {
    return {
      [Badge.GeometricModifiers.pillShape]: "Badge--YDF__PillShapeGeometricModifier",
      [Badge.GeometricModifiers.singleLine]: "Badge--YDF__SingleLineGeometricModifier"
    };
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly DecorativeVariations: Badge.DecorativeVariations = {
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
        [Badge.DecorativeVariations.veryCatchyBright]: "Badge--YDF__VeryCatchyBrightDecorativeVariation",
        [Badge.DecorativeVariations.catchyBright]: "Badge--YDF__CatchyBrightDecorativeVariation",
        [Badge.DecorativeVariations.modestlyCatchyBright]: "Badge--YDF__ModestlyCatchyBrightDecorativeVariation",
        [Badge.DecorativeVariations.neutralBright]: "Badge--YDF__NeutralBrightDecorativeVariation",
        [Badge.DecorativeVariations.modestlyCalmingBright]: "Badge--YDF__ModestlyCalmingBrightDecorativeVariation",
        [Badge.DecorativeVariations.calmingBright]: "Badge--YDF__CalmingBrightDecorativeVariation",
        [Badge.DecorativeVariations.achromaticBright]: "Badge--YDF__AchromaticBrightDecorativeVariation",
        [Badge.DecorativeVariations.veryCatchyPastel]: "Badge--YDF__VeryCatchyPastelDecorativeVariation",
        [Badge.DecorativeVariations.catchyPastel]: "Badge--YDF__CatchyPastelDecorativeVariation",
        [Badge.DecorativeVariations.modestlyCatchyPastel]: "Badge--YDF__ModestlyCatchyPastelDecorativeVariation",
        [Badge.DecorativeVariations.neutralPastel]: "Badge--YDF__NeutralPastelDecorativeVariation",
        [Badge.DecorativeVariations.modestlyCalmingPastel]: "Badge--YDF__ModestlyCalmingPastelDecorativeVariation",
        [Badge.DecorativeVariations.calmingPastel]: "Badge--YDF__CalmingPastelDecorativeVariation",
        [Badge.DecorativeVariations.achromaticPastel]: "Badge--YDF__CchromaticPastelDecorativeVariation"
      };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof Badge {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(Badge, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get decorativeModifiersCSS_Classes(): { [decorativeModifierValue: string]: string; } {
    return {
      [Badge.DecorativeModifiers.bordersDisguising]: "Badge--YDF__BordersDisguisingDecorativeModifier",
      [Badge.DecorativeModifiers.noBackground]: "Badge--YDF__NoBackgroundDecorativeModifier"
    };
  }

}


export namespace Badge {

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{
          regular: "REGULAR";
          small: "SMALL";
        }
    >>;

  export enum GeometricModifiers {
    pillShape = "PILL_SHAPE",
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


export default Badge;
