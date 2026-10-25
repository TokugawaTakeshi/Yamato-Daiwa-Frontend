import type { YDF_Component } from "../../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../../_Auxiliaries/YDF_ComponentsCoordinator";
import ClosingButtonYDF_GUI_ComponentLocalization__English from "./ClosingButtonLocalization.english";


export abstract class ClosingButton {

  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [ClosingButton.Themes.regular]: "ClosingButton--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof ClosingButton {
    return YDF_ComponentsCoordinator.defineThemes(ClosingButton, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof ClosingButton {
    ClosingButton.areThemesCSS_ClassesCommon = true;
    return ClosingButton;
  }


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly GeometricVariations: ClosingButton.GeometricVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [ClosingButton.GeometricVariations.regular]: "ClosingButton--YDF__RegularGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof ClosingButton {
    return YDF_ComponentsCoordinator.defineGeometricVariations(ClosingButton, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get geometricModifiersCSS_Classes(): { [geometricModifierValue: string]: string; } {
    return { [ClosingButton.GeometricModifiers.noRoundings]: "ClosingButton--YDF__NoRoundingsGeometricModifier" };
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly DecorativeVariations: ClosingButton.DecorativeVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [ClosingButton.DecorativeVariations.regular]: "ClosingButton--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof ClosingButton {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(ClosingButton, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get decorativeModifiersCSS_Classes(): { [decorativeModifierValue: string]: string; } {
    return {
      [ClosingButton.DecorativeModifiers.bordersDisguising]: "ClosingButton--YDF__BordersDisguisingDecorativeModifier",
      [ClosingButton.DecorativeModifiers.noBackground]: "ClosingButton--YDF__NoBackgroundDecorativeModifier",
      [ClosingButton.DecorativeModifiers.noBackgroundInDefaultState]:
          "ClosingButton--YDF__NoBackgroundInDefaultStateDecorativeModifier"
    };
  }


  /* ━━━ Label ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get labelModifiersCSS_Classes(): { [labelLetterCaseValue: string]: string; } {
    return {
      [ClosingButton.LabelLetterCases.uppercase]: "ClosingButton--YDF-Label__Uppercase",
      [ClosingButton.LabelLetterCases.lowercase]: "ClosingButton--YDF-Label__Lowercase",
      [ClosingButton.LabelLetterCases.capitalisation]: "ClosingButton--YDF-Label__Capitalisation"
    };
  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: ClosingButton.Localization =
      ClosingButtonYDF_GUI_ComponentLocalization__English;

}


export namespace ClosingButton {

  export enum LabelLetterCases {
    uppercase = "UPPERCASE",
    lowercase = "LOWERCASE",
    capitalisation = "CAPITALISATION"
  }

  export type GeometricVariations = YDF_Component.GeometricVariations<Readonly<{ regular: "REGULAR"; }>>;

  export enum GeometricModifiers {
    noRoundings = "NO_ROUNDINGS"
  }

  export type DecorativeVariations = YDF_Component.DecorativeVariations<Readonly<{ regular: "REGULAR"; }>>;

  export enum DecorativeModifiers {
    bordersDisguising = "BORDERS_DISGUISING",
    noBackground = "NO_BACKGROUND",
    noBackgroundInDefaultState = "NO_BACKGROUND_IN_DEFAULT_STATE"
  }

  export type Localization = Readonly<{
    defaultLabel: string;
    defaultAccessibilityGuidance: string;
  }>;

}


export default ClosingButton;
