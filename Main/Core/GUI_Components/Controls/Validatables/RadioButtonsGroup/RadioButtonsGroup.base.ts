/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import type { YDF_Component } from "../../../_Auxiliaries/YDF_Component";

/* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import RadioButton from "../../RadioButton/RadioButton.base";
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell.base";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import YDF_ComponentsCoordinator from "../../../_Auxiliaries/YDF_ComponentsCoordinator";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


class RadioButtonsGroup {

  public static readonly CSS_NAMESPACE: string = "RadioButtonsGroup--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsThemesCorrespondence:
      RadioButtonsGroup.SelfAndChildrenComponentsThemesCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsThemesCorrespondence():
      RadioButtonsGroup.SelfAndChildrenComponentsThemesCorrespondence {
    return RadioButtonsGroup._selfAndChildrenComponentsThemesCorrespondence ??
      (
        RadioButtonsGroup._selfAndChildrenComponentsThemesCorrespondence =
          {
            validatableControlShell: { [RadioButtonsGroup.Themes.regular]: ValidatableControlShell.Themes.regular },
            radioButton: { [RadioButtonsGroup.Themes.regular]: RadioButton.Themes.regular }
          }
      );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [RadioButtonsGroup.Themes.regular]: "RadioButtonsGroup--YDF__RegularTheme" };


  public static defineThemes(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenThemesDefinition.
            ForSpecificChildrenComponents<keyof RadioButtonsGroup.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof RadioButtonsGroup {
    return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(RadioButtonsGroup, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof RadioButtonsGroup {
    RadioButtonsGroup.areThemesCSS_ClassesCommon = true;
    return RadioButtonsGroup;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: RadioButtonsGroup.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL"
      };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsGeometricVariationsCorrespondence:
      RadioButtonsGroup.SelfAndChildrenComponentsGeometricVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsGeometricVariationsCorrespondence():
      RadioButtonsGroup.SelfAndChildrenComponentsGeometricVariationsCorrespondence
  {
    return RadioButtonsGroup._selfAndChildrenComponentsGeometricVariationsCorrespondence ?? (
      RadioButtonsGroup._selfAndChildrenComponentsGeometricVariationsCorrespondence = {
        validatableControlShell: {
          [RadioButtonsGroup.GeometricVariations.regular]: ValidatableControlShell.GeometricVariations.regular,
          [RadioButtonsGroup.GeometricVariations.small]: ValidatableControlShell.GeometricVariations.small
        },
        radioButton: {
          [RadioButtonsGroup.GeometricVariations.regular]: RadioButton.GeometricVariations.regular,
          [RadioButtonsGroup.GeometricVariations.small]: RadioButton.GeometricVariations.small
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [RadioButtonsGroup.GeometricVariations.regular]: "RadioButtonsGroup--YDF__RegularGeometricVariation",
        [RadioButtonsGroup.GeometricVariations.small]: "RadioButtonsGroup--YDF__SmallGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenGeometricVariationsDefinition.
            ForSpecificChildrenComponents<keyof RadioButtonsGroup.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof RadioButtonsGroup {
    return YDF_ComponentsCoordinator.
        defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(RadioButtonsGroup, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: RadioButtonsGroup.DecorativeVariations =
      { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsDecorativeVariationsCorrespondence:
      RadioButtonsGroup.SelfAndChildrenComponentsDecorativeVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsDecorativeVariationsCorrespondence():
      RadioButtonsGroup.SelfAndChildrenComponentsDecorativeVariationsCorrespondence
  {
    return RadioButtonsGroup._selfAndChildrenComponentsDecorativeVariationsCorrespondence ?? (
      RadioButtonsGroup._selfAndChildrenComponentsDecorativeVariationsCorrespondence = {
        validatableControlShell: {
          [RadioButtonsGroup.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular
        },
        radioButton: {
          [RadioButtonsGroup.DecorativeVariations.regular]: RadioButton.DecorativeVariations.regular
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [RadioButtonsGroup.DecorativeVariations.veryCatchyBright]: "RadioButtonsGroup--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenDecorativeVariationsDefinition.
            ForSpecificChildrenComponents<keyof RadioButtonsGroup.SelfAndChildrenComponentsDecorativeVariationsCorrespondence>
  ): typeof RadioButtonsGroup {
    return YDF_ComponentsCoordinator.
        defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(RadioButtonsGroup, definitions);
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
      RadioButtonsGroup,
      {
        ...relatedState,
        otherCSS_Classes: [
          ...disabled ? [ "RadioButtonsGroup--YDF__DisabledState" ] : [],
          ...invalidInputHighlighting ? [ "RadioButtonsGroup--YDF__InvalidInputState" ] : [],
          ...validValueHighlighting ? [ "RadioButtonsGroup--YDF__ValidInputState" ] : []
        ]
      }
    );
  }


  /* ━━━ IDs Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static counterForInstanceID_Generating: number = 0;

  public static generateInstanceID(uniqueDynamicPart?: string): string {
    return `FILES_UPLOADER--YDF-${ uniqueDynamicPart ?? ++RadioButtonsGroup.counterForInstanceID_Generating }`;
  }

}


export namespace RadioButtonsGroup {

  export type SelfAndChildrenComponentsThemesCorrespondence = {
    validatableControlShell: { [ownThemeValue: string]: string; };
    radioButton: { [ownThemeValue: string]: string; };
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
    radioButton: { [ownGeometricVariationValue: string]: string; };
  };

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{ regular: "REGULAR"; }>
      >;

  export type SelfAndChildrenComponentsDecorativeVariationsCorrespondence = {
    validatableControlShell: { [ownDecorativeVariationValue: string]: string; };
    radioButton: { [ownDecorativeVariationValue: string]: string; };
  };

}


export default RadioButtonsGroup;
