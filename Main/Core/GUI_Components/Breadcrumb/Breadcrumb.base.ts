import type { YDF_Component } from "../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../_Auxiliaries/YDF_ComponentsCoordinator";


export abstract class Breadcrumb {

  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static themesCSS_Classes: { [themeValue: string]: string; } =
      { [Breadcrumb.Themes.regular]: "Breadcrumb--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof Breadcrumb {
    return YDF_ComponentsCoordinator.defineThemes(Breadcrumb, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof Breadcrumb {
    Breadcrumb.areThemesCSS_ClassesCommon = true;
    return Breadcrumb;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static GeometricVariations: Breadcrumb.GeometricVariations =
      {
        regular: "REGULAR",
        minimalistic: "MINIMALISTIC"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [Breadcrumb.GeometricVariations.regular]: "Breadcrumb--YDF__RegularGeometricVariation",
        [Breadcrumb.GeometricVariations.minimalistic]: "Breadcrumb--YDF__MinimalisticGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof Breadcrumb {
    return YDF_ComponentsCoordinator.defineGeometricVariations(Breadcrumb, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static DecorativeVariations: Breadcrumb.DecorativeVariations =
      {
        regular: "REGULAR",
        minimalistic: "MINIMALISTIC"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      {
        [Breadcrumb.DecorativeVariations.regular]: "Breadcrumb--YDF__RegularDecorativeVariation",
        [Breadcrumb.DecorativeVariations.minimalistic]: "Breadcrumb--YDF__MinimalisticDecorativeVariation"
      };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof Breadcrumb {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(Breadcrumb, definitions);
  }

}


export namespace Breadcrumb {

  export type Item =
      Readonly<{
        label: string;
        URI?: string;
        interactive?: boolean;
      }>;

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{
          regular: "REGULAR";
          minimalistic: "MINIMALISTIC";
        }
    >>;

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{
          regular: "REGULAR";
          minimalistic: "MINIMALISTIC";
        }>
      >;

}


export default Breadcrumb;
