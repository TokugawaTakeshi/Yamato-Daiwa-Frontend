import type { YDF_Component } from "../../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../../_Auxiliaries/YDF_ComponentsCoordinator";


export abstract class DrawerMenu {

  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static themesCSS_Classes: { [themeValue: string]: string; } =
      { [DrawerMenu.Themes.regular]: "DrawerMenu--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof DrawerMenu {
    return YDF_ComponentsCoordinator.defineThemes(DrawerMenu, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof DrawerMenu {
    DrawerMenu.areThemesCSS_ClassesCommon = true;
    return DrawerMenu;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static GeometricVariations: DrawerMenu.GeometricVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      { [DrawerMenu.GeometricVariations.regular]: "DrawerMenu--YDF__RegularGeometricVariation" };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof DrawerMenu {
    return YDF_ComponentsCoordinator.defineGeometricVariations(DrawerMenu, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static DecorativeVariations: DrawerMenu.DecorativeVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [DrawerMenu.DecorativeVariations.regular]: "DrawerMenu--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof DrawerMenu {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(DrawerMenu, definitions);
  }

}


export namespace DrawerMenu {

  export type GeometricVariations =
      YDF_Component.GeometricVariations<Readonly<{ regular: "REGULAR"; }>>;

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<Readonly<{ regular: "REGULAR"; }>>;

}


export default DrawerMenu;
