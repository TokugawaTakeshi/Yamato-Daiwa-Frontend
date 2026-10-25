import type { YDF_Component } from "../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../_Auxiliaries/YDF_ComponentsCoordinator";


export abstract class Accordion {

  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [Accordion.Themes.regular]: "Accordion--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof Accordion {
    return YDF_ComponentsCoordinator.defineThemes(Accordion, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof Accordion {
    Accordion.areThemesCSS_ClassesCommon = true;
    return Accordion;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: Accordion.GeometricVariations =
      {
        regular: "REGULAR",
        minimalistic: "MINIMALISTIC"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [Accordion.GeometricVariations.regular]: "Accordion--YDF__RegularGeometricVariation",
        [Accordion.GeometricVariations.minimalistic]: "Accordion--YDF__MinimalisticGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof Accordion {
    return YDF_ComponentsCoordinator.defineGeometricVariations(Accordion, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: Accordion.DecorativeVariations =
      {
        regular: "REGULAR",
        minimalistic: "MINIMALISTIC"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      {
        [Accordion.DecorativeVariations.regular]: "Accordion--YDF__RegularDecorativeVariation",
        [Accordion.DecorativeVariations.minimalistic]: "Accordion--YDF__MinimalisticDecorativeVariation"
      };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof Accordion {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(Accordion, definitions);
  }

}


export namespace Accordion {

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

  export type Localization =
      Readonly<{
        toggle: Readonly<{
          accessibilityGuidance: Readonly<{
            expanding: string;
            collapsing: string;
          }>;
        }>;
      }>;

}


export default Accordion;
