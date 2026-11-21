import type { Vue as VueComponent } from "vue-facing-decorator";
import type { ValidatableControlShellLocalization } from "@yamato-daiwa/frontend";


class ValidatableControlShell extends VueComponent {

  public static readonly CSS_NAMESPACE: string;

  public static readonly Themes: ValidatableControlShell.Themes;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof ValidatableControlShell;

  public static readonly GeometricVariations: ValidatableControlShell.GeometricVariations;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof ValidatableControlShell;

  public static readonly DecorativeVariations: ValidatableControlShell.DecorativeVariations;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof ValidatableControlShell;

  public static localization: ValidatableControlShellLocalization;

}


namespace ValidatableControlShell {

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


export default ValidatableControlShell;
