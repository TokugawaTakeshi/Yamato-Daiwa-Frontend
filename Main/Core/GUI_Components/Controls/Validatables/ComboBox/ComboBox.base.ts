import type { YDF_Component } from "../../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../../_Auxiliaries/YDF_ComponentsCoordinator";
import ComboBoxLocalization__English from "./ComboBoxLocalization.english";
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell.base";


export abstract class ComboBox {

  public static readonly CSS_NAMESPACE: string = "Combobox--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsThemesCorrespondence:
      ComboBox.SelfAndChildrenComponentsThemesCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsThemesCorrespondence(): ComboBox.SelfAndChildrenComponentsThemesCorrespondence {
    return ComboBox._selfAndChildrenComponentsThemesCorrespondence ??
      (
        ComboBox._selfAndChildrenComponentsThemesCorrespondence =
          { validatableControlShell: { [ComboBox.Themes.regular]: ValidatableControlShell.Themes.regular } }
      );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [ComboBox.Themes.regular]: "ComboBox--YDF__RegularTheme" };

  public static defineThemes(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenThemesDefinition.
            ForSpecificChildrenComponents<keyof ComboBox.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof ComboBox {
    return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(ComboBox, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof ComboBox {
    ComboBox.areThemesCSS_ClassesCommon = true;
    return ComboBox;
  }


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly GeometricVariations: ComboBox.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL",
        minimalistic: "MINIMALISTIC"
      };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsGeometricVariationsCorrespondence:
      ComboBox.SelfAndChildrenComponentsGeometricVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsGeometricVariationsCorrespondence():
      ComboBox.SelfAndChildrenComponentsGeometricVariationsCorrespondence
  {
    return ComboBox._selfAndChildrenComponentsGeometricVariationsCorrespondence ?? (
      ComboBox._selfAndChildrenComponentsGeometricVariationsCorrespondence = {
        validatableControlShell: {
          [ComboBox.GeometricVariations.regular]: ValidatableControlShell.GeometricVariations.regular,
          [ComboBox.GeometricVariations.small]: ValidatableControlShell.GeometricVariations.small
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [ComboBox.GeometricVariations.regular]: "ComboBox--YDF__RegularGeometricVariation",
        [ComboBox.GeometricVariations.small]: "ComboBox--YDF__SmallGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenGeometricVariationsDefinition.
            ForSpecificChildrenComponents<keyof ComboBox.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof ComboBox {
    return YDF_ComponentsCoordinator.
        defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(ComboBox, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get geometricModifiersCSS_Classes(): { [geometricModifierValue: string]: string; } {
    return {
      [ComboBox.GeometricModifiers.noLeftBorderAndRoundings]: "ComboBox--YDF__NoLeftBorderAndRoundingsGeometricModifier",
      [ComboBox.GeometricModifiers.noRightBorderAndRoundings]: "ComboBox--YDF__NoRightBorderAndRoundingsGeometricModifier"
    };
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly DecorativeVariations: ComboBox.DecorativeVariations =
      {
        regular: "REGULAR",
        minimalistic: "MINIMALISTIC"
      };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsDecorativeVariationsCorrespondence:
      ComboBox.SelfAndChildrenComponentsDecorativeVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsDecorativeVariationsCorrespondence():
      ComboBox.SelfAndChildrenComponentsDecorativeVariationsCorrespondence
  {
    return ComboBox._selfAndChildrenComponentsDecorativeVariationsCorrespondence ?? (
      ComboBox._selfAndChildrenComponentsDecorativeVariationsCorrespondence = {
        validatableControlShell: {
          [ComboBox.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular,
          [ComboBox.DecorativeVariations.minimalistic]: ValidatableControlShell.DecorativeVariations.regular
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [ComboBox.DecorativeVariations.veryCatchyBright]: "ComboBox--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenDecorativeVariationsDefinition.
            ForSpecificChildrenComponents<keyof ComboBox.SelfAndChildrenComponentsDecorativeVariationsCorrespondence>
  ): typeof ComboBox {
    return YDF_ComponentsCoordinator.
        defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(ComboBox, definitions);
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static getActualRootElementModifierCSS_Classes(
    {
      expanded,
      ...relatedState
    }:
        Readonly<{
          expanded: boolean;
          theme: string;
          areThemesCSS_ClassesCommon: boolean;
          geometricVariation: string;
          decorativeVariation: string;
        }>
  ): Array<string> {
    return YDF_ComponentsCoordinator.getActualRootElementModifierCSS_Classes(
      ComboBox,
      {
        ...relatedState,
        otherCSS_Classes: [
          expanded ? "ValidatableControlShell--YDF__ExpandedState" : "ValidatableControlShell--YDF__CollapsedState"
        ]
      }
    );
  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: ComboBox.Localization = ComboBoxLocalization__English;


  /* ━━━ IDs Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static counterForInstanceID_Generating: number = 0;

  public static generateInstanceID(uniqueDynamicPart?: string): string {
    return `ADMONITION_BLOCK--YDF-${ uniqueDynamicPart ?? ++ComboBox.counterForInstanceID_Generating }`;
  }

}


export namespace ComboBox {

  export type SelfAndChildrenComponentsThemesCorrespondence = {
    validatableControlShell: { [ownThemeValue: string]: string; };
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
  };

  export enum GeometricModifiers {
    noLeftBorderAndRoundings = "NO_LEFT_BORDER_AND_ROUNDINGS",
    noRightBorderAndRoundings = "NO_RIGHT_BORDER_AND_ROUNDINGS"
  }

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{
          regular: "REGULAR";
          minimalistic: "MINIMALISTIC";
        }>
      >;

  export type SelfAndChildrenComponentsDecorativeVariationsCorrespondence = {
    validatableControlShell: { [ownDecorativeVariationValue: string]: string; };
  };

  export type Localization = Readonly<{
    placeholders:
        Readonly<{
          selectingOfOneOption: string;
          selectingOfOneOrMultipleOptions: string;
        }>;
    buttons: Readonly<{ toggleExpanding: { accessibilityGuidance: string; }; }>;
    listBox: Readonly<{ defaultAccessibilityGuidance: string; }>;
  }>;

}


export default ComboBox;
