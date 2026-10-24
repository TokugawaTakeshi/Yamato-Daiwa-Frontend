import type { YDF_Component } from "../../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../../_Auxiliaries/YDF_ComponentsCoordinator";


class MenuList {

  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static themesCSS_Classes: { [themeValue: string]: string; } =
      { [MenuList.Themes.regular]: "MenuList--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof MenuList {
    return YDF_ComponentsCoordinator.defineThemes(MenuList, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof MenuList {
    MenuList.areThemesCSS_ClassesCommon = true;
    return MenuList;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static GeometricVariations: MenuList.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [MenuList.GeometricVariations.regular]: "MenuList--YDF__RegularGeometricVariation",
        [MenuList.GeometricVariations.small]: "MenuList--YDF__SmallGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof MenuList {
    return YDF_ComponentsCoordinator.defineGeometricVariations(MenuList, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static DecorativeVariations: MenuList.DecorativeVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [MenuList.DecorativeVariations.regular]: "MenuList--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof MenuList {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(MenuList, definitions);
  }

}


export namespace MenuList {

  export type GeometricVariations =
      YDF_Component.GeometricVariations<Readonly<{ regular: "REGULAR"; }>>;

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<Readonly<{ regular: "REGULAR"; }>>;

}


export default MenuList;
