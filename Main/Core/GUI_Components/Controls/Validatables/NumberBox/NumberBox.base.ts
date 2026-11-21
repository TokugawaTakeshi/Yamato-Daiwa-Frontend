/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import type { YDF_Component } from "../../../_Auxiliaries/YDF_Component";

/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import NumberBoxLocalization__English from "./NumberBoxLocalization.english";

/* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import Button from "../../Buttons/Plain/Button.base";
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell.base";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import YDF_ComponentsCoordinator from "../../../_Auxiliaries/YDF_ComponentsCoordinator";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


export class NumberBox {

  public static readonly CSS_NAMESPACE: string = "NumberBox--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsThemesCorrespondence:
      NumberBox.SelfAndChildrenComponentsThemesCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsThemesCorrespondence():
      NumberBox.SelfAndChildrenComponentsThemesCorrespondence {
    return NumberBox._selfAndChildrenComponentsThemesCorrespondence ??
      (
        NumberBox._selfAndChildrenComponentsThemesCorrespondence =
          {
            validatableControlShell: { [NumberBox.Themes.regular]: ValidatableControlShell.Themes.regular },
            button: { [NumberBox.Themes.regular]: Button.Themes.regular }
          }
      );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [NumberBox.Themes.regular]: "NumberBox--YDF__RegularTheme" };


  public static defineThemes(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenThemesDefinition.
            ForSpecificChildrenComponents<keyof NumberBox.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof NumberBox {
    return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(NumberBox, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof NumberBox {
    NumberBox.areThemesCSS_ClassesCommon = true;
    return NumberBox;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: NumberBox.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL"
      };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsGeometricVariationsCorrespondence:
      NumberBox.SelfAndChildrenComponentsGeometricVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsGeometricVariationsCorrespondence():
      NumberBox.SelfAndChildrenComponentsGeometricVariationsCorrespondence
  {
    return NumberBox._selfAndChildrenComponentsGeometricVariationsCorrespondence ?? (
      NumberBox._selfAndChildrenComponentsGeometricVariationsCorrespondence = {
        validatableControlShell: {
          [NumberBox.GeometricVariations.regular]: ValidatableControlShell.GeometricVariations.regular,
          [NumberBox.GeometricVariations.small]: ValidatableControlShell.GeometricVariations.small
        },
        button: {
          [NumberBox.GeometricVariations.regular]: Button.GeometricVariations.regular,
          [NumberBox.GeometricVariations.small]: Button.GeometricVariations.small
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [NumberBox.GeometricVariations.regular]: "NumberBox--YDF__RegularGeometricVariation",
        [NumberBox.GeometricVariations.small]: "NumberBox--YDF__SmallGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenGeometricVariationsDefinition.
            ForSpecificChildrenComponents<keyof NumberBox.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof NumberBox {
    return YDF_ComponentsCoordinator.
        defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(NumberBox, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: NumberBox.DecorativeVariations =
      { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsDecorativeVariationsCorrespondence:
      NumberBox.SelfAndChildrenComponentsDecorativeVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsDecorativeVariationsCorrespondence():
      NumberBox.SelfAndChildrenComponentsDecorativeVariationsCorrespondence
  {
    return NumberBox._selfAndChildrenComponentsDecorativeVariationsCorrespondence ?? (
      NumberBox._selfAndChildrenComponentsDecorativeVariationsCorrespondence = {
        validatableControlShell: {
          [NumberBox.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular
        },
        button: {
          [NumberBox.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [NumberBox.DecorativeVariations.veryCatchyBright]: "NumberBox--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenDecorativeVariationsDefinition.
            ForSpecificChildrenComponents<keyof NumberBox.SelfAndChildrenComponentsDecorativeVariationsCorrespondence>
  ): typeof NumberBox {
    return YDF_ComponentsCoordinator.
        defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(NumberBox, definitions);
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static getActualRootElementModifierCSS_Classes(
    {
      disabled,
      invalidInputHighlighting,
      validValueHighlighting,
      ...relatedState
    }:
        Readonly<{
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
      NumberBox,
      {
        ...relatedState,
        otherCSS_Classes: [
          ...disabled ? [ "NumberBox--YDF__DisabledState" ] : [],
          ...invalidInputHighlighting ? [ "NumberBox--YDF__InvalidInputState" ] : [],
          ...validValueHighlighting ? [ "NumberBox--YDF__ValidInputState" ] : []
        ]
      }
    );
  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: NumberBox.Localization = NumberBoxLocalization__English;


  /* ━━━ IDs Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static counterForInstanceID_Generating: number = 0;

  public static generateInstanceID(uniqueDynamicPart?: string): string {
    return `NUMBER_BOX--YDF-${ uniqueDynamicPart ?? ++NumberBox.counterForInstanceID_Generating }`;
  }

}


export namespace NumberBox {

  export enum Orientations {
    horizontal = "HORIZONTAL",
    vertical = "VERTICAL"
  }

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

  export type Localization =

      Readonly<{

        buttons:

            Readonly<{
              [
                keys in
                  "incrementing" |
                  "decrementing"
              ]: Readonly<{ generateAccessibilityGuidance: ({ step }: Readonly<{ step: number; }>) => string; }>;
            }>;

      }>;

}


export default NumberBox;
