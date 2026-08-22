import type { Vue as VueComponent } from "vue-facing-decorator";


class LoadingIndicator extends VueComponent {

  public static readonly CSS_NAMESPACE: string;

  public static Types: LoadingIndicator.Types;

  public static readonly Themes: LoadingIndicator.Themes;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof LoadingIndicator;

  public static readonly GeometricVariations: LoadingIndicator.GeometricVariations;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof LoadingIndicator;

  public static readonly DecorativeVariations: LoadingIndicator.DecorativeVariations;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof LoadingIndicator;

}


namespace LoadingIndicator {

  export type Types = Readonly<{
    variableWidthArcSpinner: "VARIABLE_WIDTH_ARC_SPINNER";
    twoConstantWidthArcsSpinner: "TWO_CONSTANT_WIDTH_ARCS_SPINNER";
  }>;

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    readonly small: "SMALL";
    [variationName: string]: string;
  };

  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    [variationName: string]: string;
  };

}


export default LoadingIndicator;
