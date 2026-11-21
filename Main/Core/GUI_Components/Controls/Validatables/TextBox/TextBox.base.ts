/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import type { YDF_Component } from "../../../_Auxiliaries/YDF_Component";

/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import TextBoxLocalization__English from "./TextBoxLocalization.english";

/* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell.base";
import Button from "../../Buttons/Plain/Button.base";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import YDF_ComponentsCoordinator from "../../../_Auxiliaries/YDF_ComponentsCoordinator";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


export abstract class TextBox {

  public static readonly CSS_NAMESPACE: string = "TextBox--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsThemesCorrespondence:
      TextBox.SelfAndChildrenComponentsThemesCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsThemesCorrespondence(): TextBox.SelfAndChildrenComponentsThemesCorrespondence {
    return TextBox._selfAndChildrenComponentsThemesCorrespondence ??
      (
        TextBox._selfAndChildrenComponentsThemesCorrespondence =
            {
              validatableControlShell: { [TextBox.Themes.regular]: ValidatableControlShell.Themes.regular },
              valueCopyingButton: { [TextBox.Themes.regular]: ValidatableControlShell.Themes.regular }
            }
      );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [TextBox.Themes.regular]: "TextBox--YDF__RegularTheme" };

  public static defineThemes(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenThemesDefinition.
            ForSpecificChildrenComponents<keyof TextBox.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof TextBox {
    return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(TextBox, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof TextBox {
    TextBox.areThemesCSS_ClassesCommon = true;
    return TextBox;
  }


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly GeometricVariations: TextBox.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL",
        labelLike: "LABEL_LIKE"
      };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsGeometricVariationsCorrespondence:
      TextBox.SelfAndChildrenComponentsGeometricVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsGeometricVariationsCorrespondence():
      TextBox.SelfAndChildrenComponentsGeometricVariationsCorrespondence
  {
    return TextBox._selfAndChildrenComponentsGeometricVariationsCorrespondence ?? (
      TextBox._selfAndChildrenComponentsGeometricVariationsCorrespondence = {
        validatableControlShell: {
            [TextBox.GeometricVariations.regular]: ValidatableControlShell.GeometricVariations.regular,
            [TextBox.GeometricVariations.small]: ValidatableControlShell.GeometricVariations.small,
            [TextBox.GeometricVariations.labelLike]: ValidatableControlShell.GeometricVariations.regular
          },
          valueCopyingButton: {
            [TextBox.GeometricVariations.regular]: Button.GeometricVariations.regular,
            [TextBox.GeometricVariations.small]: Button.GeometricVariations.small,
            [TextBox.GeometricVariations.labelLike]: Button.GeometricVariations.linkLike
          }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [TextBox.GeometricVariations.regular]: "TextBox--YDF__RegularGeometricVariation",
        [TextBox.GeometricVariations.small]: "TextBox--YDF__SmallGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenGeometricVariationsDefinition.
            ForSpecificChildrenComponents<keyof TextBox.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof TextBox {
    return YDF_ComponentsCoordinator.
        defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(TextBox, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get geometricModifiersCSS_Classes(): { [geometricModifierValue: string]: string; } {
    return { [TextBox.GeometricModifiers.noRoundings]: "TextBox--YDF__NoRoundingsGeometricModifier" };
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly DecorativeVariations: TextBox.DecorativeVariations =
      {
        regular: "REGULAR",
        labelLike: "LABEL_LIKE"
      };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsDecorativeVariationsCorrespondence:
      TextBox.SelfAndChildrenComponentsDecorativeVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsDecorativeVariationsCorrespondence():
      TextBox.SelfAndChildrenComponentsDecorativeVariationsCorrespondence
  {
    return TextBox._selfAndChildrenComponentsDecorativeVariationsCorrespondence ?? (
      TextBox._selfAndChildrenComponentsDecorativeVariationsCorrespondence = {
        validatableControlShell: {
          [TextBox.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular,
          [TextBox.DecorativeVariations.labelLike]: ValidatableControlShell.DecorativeVariations.regular
        },
        valueCopyingButton: {
          [TextBox.DecorativeVariations.regular]: Button.DecorativeVariations.regular,
          [TextBox.DecorativeVariations.labelLike]: Button.DecorativeVariations.linkLike
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [TextBox.DecorativeVariations.veryCatchyBright]: "TextBox--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenDecorativeVariationsDefinition.
            ForSpecificChildrenComponents<keyof TextBox.SelfAndChildrenComponentsDecorativeVariationsCorrespondence>
  ): typeof TextBox {
    return YDF_ComponentsCoordinator.
        defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(TextBox, definitions);
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static getActualRootElementModifierCSS_Classes(
    {
      multiline,
      disabled,
      invalidInputHighlighting,
      validValueHighlighting,
      ...relatedState
    }:
        Readonly<{
          multiline: boolean;
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
      TextBox,
      {
        ...relatedState,
        otherCSS_Classes: [
          ...multiline ? [ "TextBox--YDF__Multiline" ] : [],
          ...disabled ? [ "TextBox--YDF__DisabledState" ] : [],
          ...invalidInputHighlighting ? [ "TextBox--YDF__InvalidInputState" ] : [],
          ...validValueHighlighting ? [ "TextBox--YDF__ValidInputState" ] : []
        ]
      }
    );
  }


  /* ━━━ IDs Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static counterForInstanceID_Generating: number = 0;

  public static generateInstanceID(uniqueDynamicPart?: string): string {
    return `TEXT_BOX--YDF-${ uniqueDynamicPart ?? ++TextBox.counterForInstanceID_Generating }`;
  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly localization: TextBox.Localization = TextBoxLocalization__English;

}


export namespace TextBox {

  export enum HTML_Types {
    regular = "text",
    email = "email",
    number = "number",
    password = "password",
    phoneNumber = "tel",
    URI = "url"
  }

  export type SelfAndChildrenComponentsThemesCorrespondence = {
    [
      keys in
          "validatableControlShell" |
          "valueCopyingButton"
    ]: { [ownThemeValue: string]: string; }
  };

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{
          regular: "REGULAR";
          small: "SMALL";
          labelLike: "LABEL_LIKE";
        }>
      >;

  export type SelfAndChildrenComponentsGeometricVariationsCorrespondence = {
    [
      keys in
          "validatableControlShell" |
          "valueCopyingButton"
    ]: { [ownGeometricVariationValue: string]: string; }
  };

  export enum GeometricModifiers {
    noRoundings = "NO_ROUNDINGS"
  }

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{
          regular: "REGULAR";
          labelLike: "LABEL_LIKE";
        }>
      >;

  export type SelfAndChildrenComponentsDecorativeVariationsCorrespondence = {
    [
      keys in
          "validatableControlShell" |
          "valueCopyingButton"
    ]: { [ownDecorativeVariationValue: string]: string; }
  };

  export type Localization = Readonly<{
    valueCopyingButton: Readonly<{ accessibilityGuidance: string; }>;
    passwordDisplayingToggle: Readonly<{
      [
        keys in
          "displayingOfPassword" |
          "hidingOfPassword"
      ]: Readonly<{ accessibilityGuidance: string; }>;
    }>;
  }>;

}


export default TextBox;
