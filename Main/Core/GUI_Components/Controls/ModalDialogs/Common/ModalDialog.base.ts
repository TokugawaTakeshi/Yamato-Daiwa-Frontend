import type { YDF_Component } from "../../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../../_Auxiliaries/YDF_ComponentsCoordinator";


export class ModalDialog {

  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static themesCSS_Classes: { [themeValue: string]: string; } =
      { [ModalDialog.Themes.regular]: "ModalDialog--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof ModalDialog {
    return YDF_ComponentsCoordinator.defineThemes(ModalDialog, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof ModalDialog {
    ModalDialog.areThemesCSS_ClassesCommon = true;
    return ModalDialog;
  }


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static GeometricVariations: ModalDialog.GeometricVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      { [ModalDialog.GeometricVariations.regular]: "ModalDialog--YDF__RegularGeometricVariation" };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof ModalDialog {
    return YDF_ComponentsCoordinator.defineGeometricVariations(ModalDialog, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get geometricModifiersCSS_Classes(): { [geometricModifierValue: string]: string; } {
    return {
      [ModalDialog.GeometricModifiers.compact]: "ModalDialog--YDF__CompactLineGeometricModifier",
      [ModalDialog.GeometricModifiers.fillingOfScreenWithSmallGaps]:
          "ModalDialog--YDF__FillingOfScreenWithSmallGapsGeometricModifier",
      [ModalDialog.GeometricModifiers.fullScreens]: "ModalDialog--YDF__FullScreensGeometricModifier"
    };
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static DecorativeVariations: ModalDialog.DecorativeVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [ModalDialog.DecorativeVariations.regular]: "ModalDialog--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof ModalDialog {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(ModalDialog, definitions);
  }
}


export namespace ModalDialog {

  export enum Types {
    compact = "COMPACT",
    fillingOfScreenWithSmallGaps = "FILLING_OF_SCREEN_WITH_SMALL_GAPS",
    fullScreens = "FULL_SCREEN"
  }

  export type GeometricVariations =
      YDF_Component.GeometricVariations<Readonly<{ regular: "REGULAR"; }>>;

  export enum GeometricModifiers {
    compact = "COMPACT",
    fillingOfScreenWithSmallGaps = "FILLING_OF_SCREEN_WITH_SMALL_GAPS",
    fullScreens = "FULL_SCREEN"
  }

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<Readonly<{ regular: "REGULAR"; }>>;

}


export default ModalDialog;
