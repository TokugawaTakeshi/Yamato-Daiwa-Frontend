import type { Vue as VueComponent } from "vue-facing-decorator";


class Button extends VueComponent {

  public static readonly CSS_NAMESPACE: string;

  public static HTML_Types: Button.HTML_Types;

  public static readonly Themes: Button.Themes;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof Button;

  public static readonly GeometricVariations: Button.GeometricVariations;

  public static readonly GeometricModifiers: Button.GeometricModifiers;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof Button;

  public static readonly DecorativeVariations: Button.DecorativeVariations;

  public static readonly DecorativeModifiers: Button.DecorativeModifiers;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof Button;

}


namespace Button {

  export type HTML_Types = Readonly<{
    regular: "BUTTON";
    submit: "SUBMIT";
    inputButton: "INPUT_BUTTON";
    inputSubmit: "INPUT_SUBMIT";
    inputReset: "INPUT_RESET";
  }>;

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    readonly small: "SMALL";
    readonly linkLike: "LINK_LIKE";
    [variationName: string]: string;
  };

  export type GeometricModifiers = Readonly<{
    pillShape: "PILL_SHAPE";
    squareShape: "SQUARE_SHAPE";
    squareShapeUnlessOverflowed: "SQUARE_SHAPE_UNLESS_OVERFLOWED";
    singleLine: "SINGLE_LINE";
    noLeftBorderAndRoundings: "NO_LEFT_BORDER_AND_ROUNDINGS";
    noRightBorderAndRoundings: "NO_RIGHT_BORDER_AND_ROUNDINGS";
    noTopBorderAndRoundings: "NO_TOP_BORDER_AND_ROUNDINGS";
    noBottomBorderAndRoundings: "NO_BOTTOM_BORDER_AND_ROUNDINGS";
    noRoundings: "NO_ROUNDINGS";
    horizontallyShrinkable: "HORIZONTALLY_SHRINKABLE";
  }>;

  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    readonly accented: "ACCENTED";
    readonly danger: "DANGER";
    readonly linkLike: "LINK_LIKE";
    [variationName: string]: string;
  };

  export type DecorativeModifiers = Readonly<{
    bordersDisguising: "BORDERS_DISGUISING";
    noBackground: "NO_BACKGROUND";
    noBackgroundInDefaultState: "NO_BACKGROUND_IN_DEFAULT_STATE";
  }>;

}


export default Button;
