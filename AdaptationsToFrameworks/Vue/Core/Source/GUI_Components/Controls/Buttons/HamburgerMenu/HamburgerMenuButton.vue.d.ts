import type { HamburgerMenuButtonLocalization } from "@yamato-daiwa/frontend";
import type { Vue as VueComponent } from "vue-facing-decorator";


class HamburgerMenuButton extends VueComponent {

  public static readonly CSS_NAMESPACE: string;

  public static LabelLetterCases: HamburgerMenuButton.LabelLetterCases;

  public static readonly Themes: HamburgerMenuButton.Themes;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof HamburgerMenuButton;

  public static readonly GeometricVariations: HamburgerMenuButton.GeometricVariations;

  public static readonly GeometricModifiers: HamburgerMenuButton.GeometricModifiers;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof HamburgerMenuButton;

  public static readonly DecorativeVariations: HamburgerMenuButton.DecorativeVariations;

  public static readonly DecorativeModifiers: HamburgerMenuButton.DecorativeModifiers;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof HamburgerMenuButton;

  public static localization: HamburgerMenuButtonLocalization;

}


namespace HamburgerMenuButton {

  export type LabelLetterCases = Readonly<{
    uppercase: "UPPERCASE";
    lowercase: "LOWERCASE";
    capitalisation: "CAPITALISATION";
  }>;

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    [variationName: string]: string;
  };

  export type GeometricModifiers = Readonly<{
    noRoundings: "NO_ROUNDINGS";
  }>;

  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    [variationName: string]: string;
  };

  export type DecorativeModifiers = Readonly<{
    bordersDisguising: "BORDERS_DISGUISING";
    noBackground: "NO_BACKGROUND";
    noBackgroundInDefaultState: "NO_BACKGROUND_IN_DEFAULT_STATE";
  }>;

}


export default HamburgerMenuButton;
