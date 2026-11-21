import type { YDF_Component } from "../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../_Auxiliaries/YDF_ComponentsCoordinator";


export abstract class Snackbar {

  public static readonly CSS_NAMESPACE: string = "Snackbar--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static themesCSS_Classes: { [decorativeVariationName: string]: string; } =
      { [Snackbar.Themes.regular]: "Snackbar--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof Snackbar {
    return YDF_ComponentsCoordinator.defineThemes(Snackbar, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof Snackbar {
    Snackbar.areThemesCSS_ClassesCommon = true;
    return Snackbar;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static GeometricVariations: Snackbar.GeometricVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static geometricVariationsCSS_Classes: { [decorativeVariationName: string]: string; } =
      { [Snackbar.Themes.regular]: "Snackbar--YDF__RegularTheme" };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof Snackbar {
    return YDF_ComponentsCoordinator.defineGeometricVariations(Snackbar, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static DecorativeVariations: Snackbar.DecorativeVariations =
      {
        error: "ERROR",
        warning: "WARNING",
        guidance: "GUIDANCE",
        success: "SUCCESS"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static decorativeVariationsCSS_Classes: { [decorativeVariationName: string]: string; } =
      {
        [Snackbar.DecorativeVariations.error]: "Snackbar--YDF__ErrorDecorativeVariation",
        [Snackbar.DecorativeVariations.warning]: "Snackbar--YDF__WarningDecorativeVariation",
        [Snackbar.DecorativeVariations.guidance]: "Snackbar--YDF__GuidanceDecorativeVariation",
        [Snackbar.DecorativeVariations.success]: "Snackbar--YDF__SuccessDecorativeVariation"
      };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomDecorativeVariationDefinition
  ): typeof Snackbar {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(Snackbar, definitions);
  }

}


export namespace Snackbar {

  export type GeometricVariations =
      YDF_Component.GeometricVariations<Readonly<{ regular: "REGULAR"; }>>;

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{
          error: "ERROR";
          warning: "WARNING";
          guidance: "GUIDANCE";
          success: "SUCCESS";
        }>
      >;

  export enum Positions {
    topLeft = "TOP_LEFT",
    topMiddle = "TOP_MIDDLE",
    topRight = "TOP_RIGHT",
    bottomLeft = "BOTTOM_LEFT",
    bottomMiddle = "BOTTOM_MIDDLE",
    bottomRight = "BOTTOM_RIGHT"
  }

}


export default Snackbar;
