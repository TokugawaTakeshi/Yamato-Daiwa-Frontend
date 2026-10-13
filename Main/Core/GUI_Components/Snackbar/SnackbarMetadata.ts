import type { YDF_Component } from "../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../_Auxiliaries/YDF_ComponentsCoordinator";


export abstract class SnackbarMetadata {

  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static themesCSS_Classes: { [decorativeVariationName: string]: string; } =
      { [SnackbarMetadata.Themes.regular]: "Snackbar--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof SnackbarMetadata {
    return YDF_ComponentsCoordinator.defineThemes(SnackbarMetadata, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof SnackbarMetadata {
    SnackbarMetadata.areThemesCSS_ClassesCommon = true;
    return SnackbarMetadata;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static GeometricVariations: SnackbarMetadata.GeometricVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static geometricVariationsCSS_Classes: { [decorativeVariationName: string]: string; } =
      { [SnackbarMetadata.Themes.regular]: "Snackbar--YDF__RegularTheme" };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof SnackbarMetadata {
    return YDF_ComponentsCoordinator.defineGeometricVariations(SnackbarMetadata, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static DecorativeVariations: SnackbarMetadata.DecorativeVariations =
      {
        error: "ERROR",
        warning: "WARNING",
        guidance: "GUIDANCE",
        success: "SUCCESS"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static decorativeVariationsCSS_Classes: { [decorativeVariationName: string]: string; } =
      {
        [SnackbarMetadata.DecorativeVariations.error]: "Snackbar--YDF__ErrorDecorativeVariation",
        [SnackbarMetadata.DecorativeVariations.warning]: "Snackbar--YDF__WarningDecorativeVariation",
        [SnackbarMetadata.DecorativeVariations.guidance]: "Snackbar--YDF__GuidanceDecorativeVariation",
        [SnackbarMetadata.DecorativeVariations.success]: "Snackbar--YDF__SuccessDecorativeVariation"
      };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof SnackbarMetadata {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(SnackbarMetadata, definitions);
  }

}


export namespace SnackbarMetadata {

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
