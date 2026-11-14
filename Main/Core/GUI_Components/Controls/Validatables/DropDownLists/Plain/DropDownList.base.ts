/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import type { YDF_Component } from "../../../../_Auxiliaries/YDF_Component";

/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import DropDownListLocalization__English from "./DropDownListLocalization.english";

/* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import Button from "../../../Buttons/Plain/Button.base";
import ValidatableControlShell from "../../../ValidatableControlShell/ValidatableControlShell.base";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import YDF_ComponentsCoordinator from "../../../../_Auxiliaries/YDF_ComponentsCoordinator";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


export class DropDownList {

  public static readonly CSS_NAMESPACE: string = "DropDownList--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsThemesCorrespondence:
      DropDownList.SelfAndChildrenComponentsThemesCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsThemesCorrespondence():
      DropDownList.SelfAndChildrenComponentsThemesCorrespondence {
    return DropDownList._selfAndChildrenComponentsThemesCorrespondence ??
      (
        DropDownList._selfAndChildrenComponentsThemesCorrespondence =
          {
            validatableControlShell: { [DropDownList.Themes.regular]: ValidatableControlShell.Themes.regular },
            button: { [DropDownList.Themes.regular]: Button.Themes.regular }
          }
      );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [DropDownList.Themes.regular]: "DropDownList--YDF__RegularTheme" };


  public static defineThemes(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenThemesDefinition.
            ForSpecificChildrenComponents<keyof DropDownList.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof DropDownList {
    return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(DropDownList, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof DropDownList {
    DropDownList.areThemesCSS_ClassesCommon = true;
    return DropDownList;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: DropDownList.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL"
      };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsGeometricVariationsCorrespondence:
      DropDownList.SelfAndChildrenComponentsGeometricVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsGeometricVariationsCorrespondence():
      DropDownList.SelfAndChildrenComponentsGeometricVariationsCorrespondence
  {
    return DropDownList._selfAndChildrenComponentsGeometricVariationsCorrespondence ?? (
      DropDownList._selfAndChildrenComponentsGeometricVariationsCorrespondence = {
        validatableControlShell: {
          [DropDownList.GeometricVariations.regular]: ValidatableControlShell.GeometricVariations.regular,
          [DropDownList.GeometricVariations.small]: ValidatableControlShell.GeometricVariations.small
        },
        button: {
          [DropDownList.GeometricVariations.regular]: Button.GeometricVariations.regular,
          [DropDownList.GeometricVariations.small]: Button.GeometricVariations.small
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [DropDownList.GeometricVariations.regular]: "DropDownList--YDF__RegularGeometricVariation",
        [DropDownList.GeometricVariations.small]: "DropDownList--YDF__SmallGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenGeometricVariationsDefinition.
            ForSpecificChildrenComponents<keyof DropDownList.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof DropDownList {
    return YDF_ComponentsCoordinator.
        defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(DropDownList, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: DropDownList.DecorativeVariations =
      { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsDecorativeVariationsCorrespondence:
      DropDownList.SelfAndChildrenComponentsDecorativeVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsDecorativeVariationsCorrespondence():
      DropDownList.SelfAndChildrenComponentsDecorativeVariationsCorrespondence
  {
    return DropDownList._selfAndChildrenComponentsDecorativeVariationsCorrespondence ?? (
      DropDownList._selfAndChildrenComponentsDecorativeVariationsCorrespondence = {
        validatableControlShell: {
          [DropDownList.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular
        },
        button: {
          [DropDownList.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [DropDownList.DecorativeVariations.veryCatchyBright]: "DropDownList--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenDecorativeVariationsDefinition.
            ForSpecificChildrenComponents<keyof DropDownList.SelfAndChildrenComponentsDecorativeVariationsCorrespondence>
  ): typeof DropDownList {
    return YDF_ComponentsCoordinator.
        defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(DropDownList, definitions);
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static getActualRootElementModifierCSS_Classes(
    {
      expanded,
      disabled,
      invalidInputHighlighting,
      validValueHighlighting,
      ...relatedState
    }:
        Readonly<{
          expanded: boolean;
          disabled: boolean;
          invalidInputHighlighting: boolean;
          validValueHighlighting: boolean;
          theme: string;
          areThemesCSS_ClassesCommon: boolean;
          geometricVariation: string;
          decorativeVariation: string;
        }>
  ): Array<string> {
    return YDF_ComponentsCoordinator.getActualRootElementModifierCSS_Classes(
      DropDownList,
      {
        ...relatedState,
        otherCSS_Classes: [
          expanded ?
              "DropDownList--YDF__ExpandedState" :
              "DropDownList--YDF__FoldedState",
          ...disabled ? [ "DropDownList--YDF__DisabledState" ] : [],
          ...invalidInputHighlighting ? [ "DropDownList--YDF__InvalidInputState" ] : [],
          ...validValueHighlighting ? [ "DropDownList--YDF__ValidInputState" ] : []
        ]
      }
    );
  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: DropDownList.Localization = DropDownListLocalization__English;


  /* ━━━ IDs Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static counterForInstanceID_Generating: number = 0;

  public static generateInstanceID(uniqueDynamicPart?: string): string {
    return `DATE_TIME_PICKER--YDF-${ uniqueDynamicPart ?? ++DropDownList.counterForInstanceID_Generating }`;
  }

}


export namespace DropDownList {

  export type SelfAndChildrenComponentsThemesCorrespondence = {
    validatableControlShell: { [ownThemeValue: string]: string; };
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
    validatableControlShell: { [ownGeometricVariationValue: string]: string; };
    button: { [ownGeometricVariationValue: string]: string; };
  };

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{ regular: "REGULAR"; }>
      >;

  export type SelfAndChildrenComponentsDecorativeVariationsCorrespondence = {
    validatableControlShell: { [ownDecorativeVariationValue: string]: string; };
    button: { [ownDecorativeVariationValue: string]: string; };
  };

  export type Localization = Readonly<{
    button: { accessibilityGuidance: string; };
    listBox: { accessibilityGuidance: string; };
  }>;

}


export default DropDownList;
