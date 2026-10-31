import type { YDF_Component } from "../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../_Auxiliaries/YDF_ComponentsCoordinator";
import Badge from "../../Badge/Badge.base";
import Button from "../Buttons/Plain/Button.base";
import { replaceMarkdownLink } from "../../../Logic/Utils/Markdown/replaceMarkdownLink";
import { replaceMarkdownBold } from "../../../Logic/Utils/Markdown/replaceMarkdownBold";
import ValidatableControlShellLocalization__English from "./ValidatableControlShellLocalization.english";


export abstract class ValidatableControlShell {

  public static readonly CSS_NAMESPACE: string = "ValidatableControlShell--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsThemesCorrespondence:
      ValidatableControlShell.SelfAndChildrenComponentsThemesCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsThemesCorrespondence():
      ValidatableControlShell.SelfAndChildrenComponentsThemesCorrespondence
  {
    return ValidatableControlShell._selfAndChildrenComponentsThemesCorrespondence ??
      (
        ValidatableControlShell._selfAndChildrenComponentsThemesCorrespondence =
          { badge: { [ValidatableControlShell.Themes.regular]: Badge.Themes.regular } }
      );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [ValidatableControlShell.Themes.regular]: "ValidatableControlShell--YDF__RegularTheme" };

  public static defineThemes(
    definitions:
        Array<
          {
            ownThemeKey: string;
            themeModifierCSS_Class?: string;
            correspondenceByChildren: {
              button: { [ ownThemeValue: string ]: string; };
            };
          }
        >
  ): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.
        defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(ValidatableControlShell, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof ValidatableControlShell {
    ValidatableControlShell.areThemesCSS_ClassesCommon = true;
    return ValidatableControlShell;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: ValidatableControlShell.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL"
      };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsGeometricVariationsCorrespondence:
      ValidatableControlShell.SelfAndChildrenComponentsGeometricVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsGeometricVariationsCorrespondence():
      ValidatableControlShell.SelfAndChildrenComponentsGeometricVariationsCorrespondence
  {
    return ValidatableControlShell._selfAndChildrenComponentsGeometricVariationsCorrespondence ?? (
      ValidatableControlShell._selfAndChildrenComponentsGeometricVariationsCorrespondence = {
        badge: {

          [ValidatableControlShell.GeometricVariations.regular]: Button.GeometricVariations.regular,

          /* [ Approach ]
           * `Badge__YDF.GeometricVariations.regular` is NOT a mistake because `Badge__YDF.GeometricVariations.small`
           *    is too small, while the actual size can be flexibly adjusted by relative CSS units.
           * */
          [ValidatableControlShell.GeometricVariations.small]: Button.GeometricVariations.regular

        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [ValidatableControlShell.GeometricVariations.regular]: "ValidatableControlShell--YDF__RegularGeometricVariation",
        [ValidatableControlShell.GeometricVariations.stickyNoteLike]:
            "ValidatableControlShell--YDF__StickyNoteLikeGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions:
        Array<
          {
            ownGeometricVariationKey: string;
            geometricVariationModifierCSS_Class?: string;
            correspondenceByChildren: {
              button: { [ ownGeometricVariationValue: string ]: string; };
            };
          }
        >
  ): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.
        defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(ValidatableControlShell, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: ValidatableControlShell.DecorativeVariations = { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsDecorativeVariationsCorrespondence:
      ValidatableControlShell.SelfAndChildrenComponentsDecorativeVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsDecorativeVariationsCorrespondence():
      ValidatableControlShell.SelfAndChildrenComponentsDecorativeVariationsCorrespondence
  {
    return ValidatableControlShell._selfAndChildrenComponentsDecorativeVariationsCorrespondence ?? (
      ValidatableControlShell._selfAndChildrenComponentsDecorativeVariationsCorrespondence = {
        button: {
          [ValidatableControlShell.DecorativeVariations.regular]: Button.DecorativeVariations.regular
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } = {
    [ValidatableControlShell.DecorativeVariations.veryCatchyBright]: "ValidatableControlShell--YDF__RegularDecorativeVariation"
  };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof ValidatableControlShell {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(ValidatableControlShell, definitions);
  }


  /* ━━━ Guidance ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static formatGuidance(notFormattedYetGuidance: string): string {
    return replaceMarkdownLink(
      replaceMarkdownBold(
        notFormattedYetGuidance,
        (boldedContent: string): string =>
            `<span class="ValidatableControlShell--YDF-Guidance-AccentedFragment">${ boldedContent }</span>`
      ),
      ({ URI, anchorText }: Readonly<{ URI: string; anchorText: string; }>): string =>
          "<a " +
            "class=\"Link--YDF ValidatableControlShell--YDF-Guidance-Link\" " +
            `href="${ URI }" ` +
            "target=\"_blank\" " +
            "rel=\"noopener noreferrer nofollow\"" +
          ">" +
            anchorText +
          "</a>"
    );
  }

  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: ValidatableControlShell.Localization =
      ValidatableControlShellLocalization__English;


  /* ━━━ Static Members Sharing ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static shareStaticMembers(
    TargetClass: object,
    options?: Readonly<{
      mustSkipPropertiesWithKeys: Readonly<{
        localization: boolean;
      }>;
    }>
  ): void {
    Object.defineProperties(
      TargetClass,
      {

        CSS_NAMESPACE: { value: ValidatableControlShell.CSS_NAMESPACE },

        Themes: { value: ValidatableControlShell.Themes },
        _selfAndChildrenComponentsThemesCorrespondence:
            {
              value: ValidatableControlShell._selfAndChildrenComponentsThemesCorrespondence,
              writable: true
            },
        selfAndChildrenComponentsThemesCorrespondence:
            { value: ValidatableControlShell.selfAndChildrenComponentsThemesCorrespondence },
        themesCSS_Classes: { value: ValidatableControlShell.themesCSS_Classes },
        defineThemes: { value: ValidatableControlShell.defineThemes },
                areThemesCSS_ClassesCommon: {
          value: ValidatableControlShell.areThemesCSS_ClassesCommon,
          writable: true
        },
        considerThemesAsCommon: { value: ValidatableControlShell.considerThemesAsCommon },

        GeometricVariations: { value: ValidatableControlShell.GeometricVariations },
        _selfAndChildrenComponentsGeometricVariationsCorrespondence:
            {
              value: ValidatableControlShell._selfAndChildrenComponentsGeometricVariationsCorrespondence,
              writable: true
            },
        selfAndChildrenComponentsGeometricVariationsCorrespondence:
            { value: ValidatableControlShell.selfAndChildrenComponentsGeometricVariationsCorrespondence },
        geometricVariationsCSS_Classes: { value: ValidatableControlShell.geometricVariationsCSS_Classes },
        defineGeometricVariations: { value: ValidatableControlShell.defineGeometricVariations },

        DecorativeVariations: { value: ValidatableControlShell.DecorativeVariations },
        _selfAndChildrenComponentsDecorativeVariationsCorrespondence: {
          value: ValidatableControlShell._selfAndChildrenComponentsDecorativeVariationsCorrespondence,
          writable: true
        },
        decorativeVariationsCSS_Classes: { value: ValidatableControlShell.decorativeVariationsCSS_Classes },
        defineDecorativeVariations: { value: ValidatableControlShell.defineDecorativeVariations },

        formatGuidance: { value: ValidatableControlShell.formatGuidance },

        ...options?.mustSkipPropertiesWithKeys.localization === true ?
            null :
            {
              localization: {
                value: ValidatableControlShell.localization,
                writable: true
              }
            }

      }
    );
  }

}


export namespace ValidatableControlShell {

  export type SelfAndChildrenComponentsThemesCorrespondence = {
    badge: { [ownThemeValue: string]: string; };
  };

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{
          regular: "REGULAR";
          small: "SMALL";
        }>
      >;

  export type SelfAndChildrenComponentsGeometricVariationsCorrespondence = {
    badge: { [ownGeometricVariationValue: string]: string; };
  };

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{ regular: "REGULAR"; }>
      >;

  export type SelfAndChildrenComponentsDecorativeVariationsCorrespondence = {
    button: { [ownDecorativeVariationValue: string]: string; };
  };

  export type Localization = Readonly<{
    requirementBadges: Readonly<{
      [
        key in
            "required" |
            "optional"
      ]: string;
    }>;

  }>;

}


export default ValidatableControlShell;
