import type { YDF_Component } from "../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../_Auxiliaries/YDF_ComponentsCoordinator";
import PaginationLocalization__English from "./PaginationLocalization.english";
import Button from "../Buttons/Plain/Button.base";


export abstract class Pagination {

  public static readonly CSS_NAMESPACE: string = "Pagination--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsThemesCorrespondence:
      Pagination.SelfAndChildrenComponentsThemesCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsThemesCorrespondence(): Pagination.SelfAndChildrenComponentsThemesCorrespondence {
    return Pagination._selfAndChildrenComponentsThemesCorrespondence ??
      (
        Pagination._selfAndChildrenComponentsThemesCorrespondence =
          { button: { [Pagination.Themes.regular]: Button.Themes.regular } }
      );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [Pagination.Themes.regular]: "Pagination--YDF__RegularTheme" };

  public static defineThemes(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenThemesDefinition.
            ForSpecificChildrenComponents<keyof Pagination.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof Pagination {
    return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(Pagination, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof Pagination {
    Pagination.areThemesCSS_ClassesCommon = true;
    return Pagination;
  }


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly GeometricVariations: Pagination.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL"
      };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsGeometricVariationsCorrespondence:
      Pagination.SelfAndChildrenComponentsGeometricVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsGeometricVariationsCorrespondence():
      Pagination.SelfAndChildrenComponentsGeometricVariationsCorrespondence
  {
    return Pagination._selfAndChildrenComponentsGeometricVariationsCorrespondence ?? (
      Pagination._selfAndChildrenComponentsGeometricVariationsCorrespondence = {
        button: {
          [Pagination.GeometricVariations.regular]: Button.GeometricVariations.regular,
          [Pagination.GeometricVariations.small]: Button.GeometricVariations.small
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [Pagination.GeometricVariations.regular]: "Pagination--YDF__RegularGeometricVariation",
        [Pagination.GeometricVariations.small]: "Pagination--YDF__SmallGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenGeometricVariationsDefinition.
            ForSpecificChildrenComponents<keyof Pagination.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof Pagination {
    return YDF_ComponentsCoordinator.
        defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(Pagination, definitions);
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly DecorativeVariations: Pagination.DecorativeVariations = { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsDecorativeVariationsCorrespondence:
      Pagination.SelfAndChildrenComponentsDecorativeVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsDecorativeVariationsCorrespondence():
      Pagination.SelfAndChildrenComponentsDecorativeVariationsCorrespondence
  {
    return Pagination._selfAndChildrenComponentsDecorativeVariationsCorrespondence ?? (
      Pagination._selfAndChildrenComponentsDecorativeVariationsCorrespondence = {
        button: {
          [Pagination.DecorativeVariations.regular]: Button.DecorativeVariations.regular
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [Pagination.DecorativeVariations.veryCatchyBright]: "Pagination--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenDecorativeVariationsDefinition.
            ForSpecificChildrenComponents<keyof Pagination.SelfAndChildrenComponentsDecorativeVariationsCorrespondence>
  ): typeof Pagination {
    return YDF_ComponentsCoordinator.
        defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(Pagination, definitions);
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
    return YDF_ComponentsCoordinator.
        getActualRootElementModifierCSS_Classes(Pagination, relatedState);
  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: Pagination.Localization = PaginationLocalization__English;

}


export namespace Pagination {

  export type SelfAndChildrenComponentsThemesCorrespondence = {
    button: { [ownThemeValue: string]: string; };
  };

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{
          regular: "REGULAR";
          small: "SMALL";
        }>
      >;

  export type SelfAndChildrenComponentsGeometricVariationsCorrespondence = {
    button: { [ownGeometricVariationValue: string]: string; };
  };

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{ regular: "REGULAR"; }>
      >;

  export type SelfAndChildrenComponentsDecorativeVariationsCorrespondence = {
    button: { [ownDecorativeVariationValue: string]: string; };
  };

  export type Localization =
      Readonly<{
        buttons: Readonly<{
          [
            key in
              "toFirstPage" |
              "toPreviousPage" |
              "toNextPage" |
              "toLastPage"
          ]: Readonly<{ accessibilityGuidance: string; }>;
        }>;
      }>;

}


export default Pagination;
