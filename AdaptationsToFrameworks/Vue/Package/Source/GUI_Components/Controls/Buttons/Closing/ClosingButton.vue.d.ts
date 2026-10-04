import type { ClosingButtonLocalization } from "@yamato-daiwa/frontend";
import type { Vue as VueComponent } from "vue-facing-decorator";


class ClosingButton extends VueComponent {

  public static readonly CSS_NAMESPACE: string;

  public static LabelLetterCases: ClosingButton.LabelLetterCases;

  public static readonly Themes: ClosingButton.Themes;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof ClosingButton;

  public static readonly GeometricVariations: ClosingButton.GeometricVariations;

  public static readonly GeometricModifiers: ClosingButton.GeometricModifiers;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof ClosingButton;

  public static readonly DecorativeVariations: ClosingButton.DecorativeVariations;

  public static readonly DecorativeModifiers: ClosingButton.DecorativeModifiers;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof ClosingButton;

  public static localization: ClosingButtonLocalization;

}


namespace ClosingButton {

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


export default ClosingButton;
