import type { YDF_Component } from "../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../_Auxiliaries/YDF_ComponentsCoordinator";


export abstract class RadioButton {

  public static readonly CSS_NAMESPACE: string = "RadioButton--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [RadioButton.Themes.regular]: "RadioButton--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof RadioButton {
    return YDF_ComponentsCoordinator.defineThemes(RadioButton, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof RadioButton {
    RadioButton.areThemesCSS_ClassesCommon = true;
    return RadioButton;
  }


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly GeometricVariations: RadioButton.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL",
        minimalistic: "MINIMALISTIC"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [RadioButton.GeometricVariations.regular]: "RadioButton--YDF__RegularGeometricVariation",
        [RadioButton.GeometricVariations.small]: "RadioButton--YDF__SmallGeometricVariation",
        [RadioButton.GeometricVariations.minimalistic]: "RadioButton--YDF__MinimalisticGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof RadioButton {
    return YDF_ComponentsCoordinator.defineGeometricVariations(RadioButton, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get geometricModifiersCSS_Classes(): { [geometricModifierValue: string]: string; } {
    return {
      [RadioButton.GeometricVariations.pillShape]: "RadioButton--YDF__PillShapeGeometricModifier",
      [RadioButton.GeometricVariations.squareShape]: "RadioButton--YDF__SquareShapeGeometricModifier",
      [RadioButton.GeometricVariations.singleLine]: "RadioButton--YDF__SingleLineGeometricModifier",
      [RadioButton.GeometricVariations.noLeftBorderAndRoundings]: "RadioButton--YDF__NoLeftBorderAndRoundingsGeometricModifier",
      [RadioButton.GeometricVariations.noRightBorderAndRoundings]: "RadioButton--YDF__NoRightBorderAndRoundingsGeometricModifier",
      [RadioButton.GeometricVariations.noRoundings]: "RadioButton--YDF__NoRoundingsGeometricModifier"
    };
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly DecorativeVariations: RadioButton.DecorativeVariations = {
    regular: "REGULAR",
    minimalistic: "MINIMALISTIC"
  };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      {
        [RadioButton.DecorativeVariations.regular]: "RadioButton--YDF__RegularDecorativeVariation",
        [RadioButton.DecorativeVariations.minimalistic]: "RadioButton--YDF__MinimalisticDecorativeVariation"
      };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomDecorativeVariationDefinition
  ): typeof RadioButton {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(RadioButton, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get decorativeModifiersCSS_Classes(): { [decorativeModifierValue: string]: string; } {
    return {
      [RadioButton.DecorativeModifiers.bordersDisguising]: "RadioButton--YDF__BordersDisguisingDecorativeModifier",
      [RadioButton.DecorativeModifiers.noBackground]: "RadioButton--YDF__NoBackgroundDecorativeModifier",
      [RadioButton.DecorativeModifiers.noBackgroundInDefaultState]:
          "RadioButton--YDF__NoBackgroundInDefaultStateDecorativeModifier"
    };
  }


  /* ━━━ ID generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private static counterForID_Generating: number = 0;

  public static generateInstanceID(uniqueDynamicPart?: string): string {
    return `RADIO_BUTTON--YDF-${ uniqueDynamicPart ?? ++RadioButton.counterForID_Generating }`;
  }

}


export namespace RadioButton {

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{
          regular: "REGULAR";
          small: "SMALL";
          minimalistic: "MINIMALISTIC";
        }>
      >;

  export enum GeometricModifiers {
    pillShape = "PILL_SHAPE",
    squareShape = "SQUARE_SHAPE",
    singleLine = "SINGLE_LINE",
    noLeftBorderAndRoundings = "NO_LEFT_BORDER_AND_ROUNDINGS",
    noRightBorderAndRoundings = "NO_RIGHT_BORDER_AND_ROUNDINGS",
    noRoundings = "NO_ROUNDINGS"
  }

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{
          regular: "REGULAR";
          minimalistic: "MINIMALISTIC";
        }>
      >;

  export enum DecorativeModifiers {
    bordersDisguising = "BORDERS_DISGUISING",
    noBackground = "NO_BACKGROUND",
    noBackgroundInDefaultState = "NO_BACKGROUND_IN_DEFAULT_STATE"
  }

}


export default RadioButton;
