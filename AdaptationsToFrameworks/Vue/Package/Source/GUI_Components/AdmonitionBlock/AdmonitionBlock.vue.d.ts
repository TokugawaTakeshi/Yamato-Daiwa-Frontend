import type { AdmonitionBlockLocalization } from "@yamato-daiwa/frontend";
import type { Vue as VueComponent } from "vue-facing-decorator";


class AdmonitionBlock extends VueComponent {

  public static readonly CSS_NAMESPACE: string;

  public static readonly Themes: AdmonitionBlock.Themes;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof AdmonitionBlock;

  public static readonly GeometricVariations: AdmonitionBlock.GeometricVariations;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof AdmonitionBlock;

  public static readonly DecorativeVariations: AdmonitionBlock.DecorativeVariations;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof AdmonitionBlock;

  public static localization: AdmonitionBlockLocalization;

}


namespace AdmonitionBlock {

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    readonly stickyNoteLike: "STICKY_NOTE_LIKE";
    [variationName: string]: string;
  };

  export type DecorativeVariations = {
    readonly notice: "NOTICE";
    readonly error: "ERROR";
    readonly warning: "WARNING";
    readonly success: "SUCCESS";
    readonly guidance: "GUIDANCE";
    readonly question: "QUESTION";
    [variationName: string]: string;
  };

}


export default AdmonitionBlock;
