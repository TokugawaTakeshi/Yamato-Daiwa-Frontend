import type { Vue as VueComponent } from "vue-facing-decorator";
import type { TextBoxLocalization } from "@yamato-daiwa/frontend";


class TextBox extends VueComponent {

  public static readonly CSS_NAMESPACE: string;

  public static HTML_Types: TextBox.HTML_Types;

  public static ValidityHighlightingActivationModes: TextBox.ValidityHighlightingActivationModes;

  public static readonly Themes: TextBox.Themes;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof TextBox;

  public static readonly GeometricVariations: TextBox.GeometricVariations;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof TextBox;

  public static readonly DecorativeVariations: TextBox.DecorativeVariations;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof TextBox;

  public static localization: TextBoxLocalization;

}


namespace TextBox {

  export type HTML_Types = Readonly<{
    regular: "text";
    email: "email";
    number: "number";
    password: "password";
    phoneNumber: "tel";
    URI: "url";
  }>;

  export type SupportedValidatablePayloadValuesTypes = string | number | null;

  export enum Events {
    input = "update:modelValue",
    blur = "BLUR"
  }

  export type ValidityHighlightingActivationModes = Readonly<{
    immediate: "IMMEDIATE";
    onFirstInputtedCharacter: "ON_FIRST_INPUTTED_CHARACTER";
    onFocusOut: "ON_FOCUS_OUT";
  }>;

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    readonly small: "SMALL";
    [geometricVariationName: string]: string;
  };

  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    [decorativeVariationName: string]: string;
  };

}


export default TextBox;
