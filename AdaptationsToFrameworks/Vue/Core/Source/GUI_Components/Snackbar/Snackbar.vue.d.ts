import type { SnackbarLocalization } from "@yamato-daiwa/frontend";
import type { Vue as VueComponent } from "vue-facing-decorator";
import type { ElementOfPseudoEnumeration } from "@yamato-daiwa/es-extensions";


class Snackbar extends VueComponent {

  public static readonly CSS_NAMESPACE: string;

  public static readonly Positions: Snackbar.Positions;

  public static displayForAWhile(options: Snackbar.Options): void;

  public static readonly Themes: Snackbar.Themes;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof Snackbar;

  public static readonly GeometricVariations: Snackbar.GeometricVariations;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof Snackbar;

  public static readonly DecorativeVariations: Snackbar.DecorativeVariations;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof Snackbar;

  public static localization: SnackbarLocalization;

}


namespace Snackbar {

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type Options = Readonly<{
    messageTextOrHTML: string;
    decorativeVariation: string;
    position?: ElementOfPseudoEnumeration<Positions>;
    displayingDuration__seconds?: number;
    appearingTransitionDuration__seconds?: number;
  }>;

  export type Positions = Readonly<{
    topLeft: "TOP_LEFT";
    topMiddle: "TOP_MIDDLE";
    topRight: "TOP_RIGHT";
    bottomLeft: "BOTTOM_LEFT";
    bottomMiddle: "BOTTOM_MIDDLE";
    bottomRight: "BOTTOM_RIGHT";
  }>;

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    [variationName: string]: string;
  };

  export type DecorativeVariations = {
    readonly error: "ERROR";
    readonly warning: "WARNING";
    readonly guidance: "GUIDANCE";
    readonly success: "SUCCESS";
    [variationName: string]: string;
  };

}


export default Snackbar;
