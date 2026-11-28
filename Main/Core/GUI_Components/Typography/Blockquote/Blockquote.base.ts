import type { YDF_Component } from "../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../_Auxiliaries/YDF_ComponentsCoordinator";


export class Blockquote {

  public static readonly CSS_NAMESPACE: string = "Blockquote--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [Blockquote.Themes.regular]: "Blockquote--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof Blockquote {
    return YDF_ComponentsCoordinator.defineThemes(Blockquote, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof Blockquote {
    Blockquote.areThemesCSS_ClassesCommon = true;
    return Blockquote;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: Blockquote.GeometricVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      { [Blockquote.GeometricVariations.regular]: "Blockquote--YDF__RegularGeometricVariation" };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof Blockquote {
    return YDF_ComponentsCoordinator.defineGeometricVariations(Blockquote, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: Blockquote.DecorativeVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [Blockquote.DecorativeVariations.regular]: "Blockquote--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof Blockquote {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(Blockquote, definitions);
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static getActualRootElementModifierCSS_Classes(
    relatedState:
        Readonly<{
          theme: string;
          areThemesCSS_ClassesCommon: boolean;
          geometricVariation: string;
          decorativeVariation: string;
        }>
  ): Array<string> {
    return YDF_ComponentsCoordinator.getActualRootElementModifierCSS_Classes(Blockquote, relatedState);
  }

}


export namespace Blockquote {

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{ regular: "REGULAR"; }
    >>;

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{ regular: "REGULAR"; }>
      >;

}


export default Blockquote;
