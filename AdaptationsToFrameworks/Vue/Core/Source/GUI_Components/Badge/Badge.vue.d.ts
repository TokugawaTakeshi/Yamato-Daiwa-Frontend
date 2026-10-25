import type { Vue as VueComponent } from "vue-facing-decorator";


class Badge extends VueComponent {

  public static readonly CSS_NAMESPACE: string;

  public static readonly Themes: Badge.Themes;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof Badge;

  public static readonly GeometricVariations: Badge.GeometricVariations;

  public static readonly GeometricModifiers: Badge.GeometricModifiers;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof Badge;

  public static readonly DecorativeVariations: Badge.DecorativeVariations;

  public static readonly DecorativeModifiers: Badge.DecorativeModifiers;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof Badge;

}


namespace Badge {

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    [variationName: string]: string;
  };

  export type GeometricModifiers = Readonly<{
    pillShape: "PILL_SHAPE";
    singleLine: "SINGLE_LINE";
  }>;

  export type DecorativeVariations = {
    readonly veryCatchyBright: "VERY_CATCHY_BRIGHT";
    readonly catchyBright: "CATCHY_BRIGHT";
    readonly modestlyCatchyBright: "MODESTLY_CATCHY_BRIGHT";
    readonly neutralBright: "NEUTRAL_BRIGHT";
    readonly modestlyCalmingBright: "MODESTLY_CALMING_BRIGHT";
    readonly calmingBright: "CALMING_BRIGHT";
    readonly achromaticBright: "ACHROMATIC_BRIGHT";
    readonly veryCatchyPastel: "VERY_CATCHY_PASTEL";
    readonly catchyPastel: "CATCHY_PASTEL";
    readonly modestlyCatchyPastel: "MODESTLY_CATCHY_PASTEL";
    readonly neutralPastel: "NEUTRAL_PASTEL";
    readonly modestlyCalmingPastel: "MODESTLY_CALMING_PASTEL";
    readonly calmingPastel: "CALMING_PASTEL";
    readonly achromaticPastel: "ACHROMATIC_PASTEL";
    [variationName: string]: string;
  };

  export type DecorativeModifiers = Readonly<{
    bordersDisguising: "BORDERS_DISGUISING";
    noBackground: "NO_BACKGROUND";
  }>;

}


export default Badge;
