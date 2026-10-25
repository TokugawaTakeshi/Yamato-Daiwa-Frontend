import type { YDF_Component } from "../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../_Auxiliaries/YDF_ComponentsCoordinator";
import AdmonitionBlockYDF_GUI_ComponentLocalization__English from "./AdmonitionBlockLocalization.english";


export abstract class AdmonitionBlock {

  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [AdmonitionBlock.Themes.regular]: "AdmonitionBlock--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof AdmonitionBlock {
    return YDF_ComponentsCoordinator.defineThemes(AdmonitionBlock, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof AdmonitionBlock {
    AdmonitionBlock.areThemesCSS_ClassesCommon = true;
    return AdmonitionBlock;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: AdmonitionBlock.GeometricVariations =
      {
        regular: "REGULAR",
        stickyNoteLike: "STICKY_NOTE_LIKE"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [AdmonitionBlock.GeometricVariations.regular]: "AdmonitionBlock--YDF__RegularGeometricVariation",
        [AdmonitionBlock.GeometricVariations.stickyNoteLike]: "AdmonitionBlock--YDF__StickyNoteLikeGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof AdmonitionBlock {
    return YDF_ComponentsCoordinator.defineGeometricVariations(AdmonitionBlock, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: AdmonitionBlock.DecorativeVariations =
      {
        notice: "NOTICE",
        error: "ERROR",
        warning: "WARNING",
        success: "SUCCESS",
        guidance: "GUIDANCE",
        question: "QUESTION"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      {
        [AdmonitionBlock.DecorativeVariations.notice]: "AdmonitionBlock--YDF__NoticeDecorativeVariation",
        [AdmonitionBlock.DecorativeVariations.error]: "AdmonitionBlock--YDF__ErrorDecorativeVariation",
        [AdmonitionBlock.DecorativeVariations.warning]: "AdmonitionBlock--YDF__WarningDecorativeVariation",
        [AdmonitionBlock.DecorativeVariations.success]: "AdmonitionBlock--YDF__SuccessDecorativeVariation",
        [AdmonitionBlock.DecorativeVariations.guidance]: "AdmonitionBlock--YDF__GuidanceDecorativeVariation",
        [AdmonitionBlock.DecorativeVariations.question]: "AdmonitionBlock--YDF_QuestionDecorativeVariation"
      };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof AdmonitionBlock {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(AdmonitionBlock, definitions);
  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: AdmonitionBlock.Localization =
      AdmonitionBlockYDF_GUI_ComponentLocalization__English;

}


export namespace AdmonitionBlock {

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{
          regular: "REGULAR";
          stickyNoteLike: "STICKY_NOTE_LIKE";
        }
    >>;

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{
          notice: "NOTICE";
          error: "ERROR";
          warning: "WARNING";
          success: "SUCCESS";
          guidance: "GUIDANCE";
          question: "QUESTION";
        }>
      >;

  export type Localization =
      Readonly<{
        dismissingButton: Readonly<{
          accessibilityGuidance: string;
        }>;
      }>;

}


export default AdmonitionBlock;
