import type { YDF_Component } from "../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../_Auxiliaries/YDF_ComponentsCoordinator";
import SearchBoxYDF_GUI_ComponentLocalization__English from "./SearchBoxLocalization.english";


export abstract class SearchBox {

  public static readonly CSS_NAMESPACE: string = "SearchBox--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [SearchBox.Themes.regular]: "SearchBox--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof SearchBox {
    return YDF_ComponentsCoordinator.defineThemes(SearchBox, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof SearchBox {
    SearchBox.areThemesCSS_ClassesCommon = true;
    return SearchBox;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: SearchBox.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [SearchBox.GeometricVariations.regular]: "SearchBox--YDF__RegularGeometricVariation",
        [SearchBox.GeometricVariations.small]: "SearchBox--YDF__SmallGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof SearchBox {
    return YDF_ComponentsCoordinator.defineGeometricVariations(SearchBox, definitions);
  }


  /* ┅┅┅ Decorative Modifiers ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: SearchBox.DecorativeVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [SearchBox.DecorativeVariations.regular]: "SearchBox--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomDecorativeVariationDefinition
  ): typeof SearchBox {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(SearchBox, definitions);
  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: SearchBox.Localization =
      SearchBoxYDF_GUI_ComponentLocalization__English;

}


export namespace SearchBox {

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{
          regular: "REGULAR";
          small: "SMALL";
        }>
      >;

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<Readonly<{ regular: "REGULAR"; }>>;

  export type Localization = Readonly<{
    inputElement: Readonly<{ defaultAccessibilityGuidance: string; }>;
    buttons: Readonly<{
      searching: Readonly<{ label: string; accessibilityGuidance: string; }>;
      resetting: Readonly<{ label: string; accessibilityGuidance: string; }>;
    }>;
    tooltip: Readonly<{
      generateMessage: (templateVariables: Readonly<{ minimalCharactersCount: string; }>) => string;
    }>;
  }>;

}


export default SearchBox;
