// GUI_Components/Controls/Buttons/HamburgerMenu/HamburgerMenuButton.base.ts

import type { YDF_Component } from "../../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../../_Auxiliaries/YDF_ComponentsCoordinator";
import HamburgerMenuButtonYDF_GUI_ComponentLocalization__English from "./HamburgerMenuButtonLocalization.english";


export abstract class HamburgerMenuButton {

  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [HamburgerMenuButton.Themes.regular]: "HamburgerMenuButton--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof HamburgerMenuButton {
    return YDF_ComponentsCoordinator.defineThemes(HamburgerMenuButton, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof HamburgerMenuButton {
    HamburgerMenuButton.areThemesCSS_ClassesCommon = true;
    return HamburgerMenuButton;
  }


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly GeometricVariations: HamburgerMenuButton.GeometricVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [HamburgerMenuButton.GeometricVariations.regular]: "HamburgerMenuButton--YDF__RegularGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof HamburgerMenuButton {
    return YDF_ComponentsCoordinator.defineGeometricVariations(HamburgerMenuButton, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get geometricModifiersCSS_Classes(): { [geometricModifierValue: string]: string; } {
    return { [HamburgerMenuButton.GeometricModifiers.noRoundings]: "HamburgerMenuButton--YDF__NoRoundingsGeometricModifier" };
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly DecorativeVariations: HamburgerMenuButton.DecorativeVariations = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [HamburgerMenuButton.DecorativeVariations.regular]: "HamburgerMenuButton--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof HamburgerMenuButton {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(HamburgerMenuButton, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get decorativeModifiersCSS_Classes(): { [decorativeModifierValue: string]: string; } {
    return {
      [HamburgerMenuButton.DecorativeModifiers.bordersDisguising]:
          "HamburgerMenuButton--YDF__BordersDisguisingDecorativeModifier",
      [HamburgerMenuButton.DecorativeModifiers.noBackground]: "HamburgerMenuButton--YDF__NoBackgroundDecorativeModifier",
      [HamburgerMenuButton.DecorativeModifiers.noBackgroundInDefaultState]:
          "HamburgerMenuButton--YDF__NoBackgroundInDefaultStateDecorativeModifier"
    };
  }


  /* ━━━ Label ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get labelModifiersCSS_Classes(): { [labelLetterCaseValue: string]: string; } {
    return {
      [HamburgerMenuButton.LabelLetterCases.uppercase]: "HamburgerMenuButton--YDF-Label__Uppercase",
      [HamburgerMenuButton.LabelLetterCases.lowercase]: "HamburgerMenuButton--YDF-Label__Lowercase",
      [HamburgerMenuButton.LabelLetterCases.capitalisation]: "HamburgerMenuButton--YDF-Label__Capitalisation"
    };
  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: HamburgerMenuButton.Localization =
      HamburgerMenuButtonYDF_GUI_ComponentLocalization__English;

}


export namespace HamburgerMenuButton {

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


export default HamburgerMenuButton;
