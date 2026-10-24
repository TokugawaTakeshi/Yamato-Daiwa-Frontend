import type { YDF_Component } from "../../../_Auxiliaries/YDF_Component";
import YDF_ComponentsCoordinator from "../../../_Auxiliaries/YDF_ComponentsCoordinator";


export abstract class Button {

  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [Button.Themes.regular]: "Button--YDF__RegularTheme" };

  public static defineThemes(definitions: YDF_Component.CustomThemesDefinition): typeof Button {
    return YDF_ComponentsCoordinator.defineThemes(Button, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof Button {
    Button.areThemesCSS_ClassesCommon = true;
    return Button;
  }


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly GeometricVariations: Button.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL",
        linkLike: "LINK_LIKE"
      };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [Button.GeometricVariations.regular]: "Button--YDF__RegularGeometricVariation",
        [Button.GeometricVariations.small]: "Button--YDF__SmallGeometricVariation",
        [Button.GeometricVariations.linkLike]: "Button--YDF__LinkLikeGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof Button {
    return YDF_ComponentsCoordinator.defineGeometricVariations(Button, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get geometricModifiersCSS_Classes(): { [geometricModifierValue: string]: string; } {
    return {
      [Button.GeometricVariations.pillShape]: "Button--YDF__PillShapeGeometricModifier",
      [Button.GeometricVariations.squareShape]: "Button--YDF__SquareShapeGeometricModifier",
      [Button.GeometricVariations.squareShapeUnlessOverflowed]: "Button--YDF__SquareShapeUnlessOverflowedGeometricModifier",
      [Button.GeometricVariations.singleLine]: "Button--YDF__SingleLineGeometricModifier",
      [Button.GeometricVariations.noLeftBorderAndRoundings]: "Button--YDF__NoLeftBorderAndRoundingsGeometricModifier",
      [Button.GeometricVariations.noRightBorderAndRoundings]: "Button--YDF__NoRightBorderAndRoundingsGeometricModifier",
      [Button.GeometricVariations.noTopBorderAndRoundings]: "Button--YDF__NoTopBorderAndRoundingsGeometricModifier",
      [Button.GeometricVariations.noBottomBorderAndRoundings]: "Button--YDF__NoBottomBorderAndRoundingsGeometricModifier",
      [Button.GeometricModifiers.noRoundings]: "Button--YDF__NoRoundingsGeometricModifier",
      [Button.GeometricVariations.horizontallyShrinkable]: "Button--YDF__HorizontallyShrinkableGeometricModifier"
    };
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Variations ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  public static readonly DecorativeVariations: Button.DecorativeVariations = {
    regular: "REGULAR",
    accented: "ACCENTED",
    danger: "DANGER",
    linkLike: "LINK_LIKE"
  };

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [Button.DecorativeVariations.regular]: "Button--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions: YDF_Component.CustomGeometricVariationDefinition
  ): typeof Button {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(Button, definitions);
  }


  /* ╍╍╍ Modifiers ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static get decorativeModifiersCSS_Classes(): { [decorativeModifierValue: string]: string; } {
    return {
      [Button.DecorativeModifiers.bordersDisguising]: "Button--YDF__BordersDisguisingDecorativeModifier",
      [Button.DecorativeModifiers.noBackground]: "Button--YDF__NoBackgroundDecorativeModifier",
      [Button.DecorativeModifiers.noBackgroundInDefaultState]: "Button--YDF__NoBackgroundInDefaultStateDecorativeModifier"
    };
  }

}


export namespace Button {

  export enum HTML_Types {
    regular = "BUTTON",
    submit = "SUBMIT",
    inputButton = "INPUT_BUTTON",
    inputSubmit = "INPUT_SUBMIT",
    inputReset = "INPUT_RESET"
  }

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{
          regular: "REGULAR";
          small: "SMALL";
          linkLike: "LINK_LIKE";
        }>
      >;

  export enum GeometricModifiers {
    pillShape = "PILL_SHAPE",
    squareShape = "SQUARE_SHAPE",
    squareShapeUnlessOverflowed = "SQUARE_SHAPE_UNLESS_OVERFLOWED",
    singleLine = "SINGLE_LINE",
    noLeftBorderAndRoundings = "NO_LEFT_BORDER_AND_ROUNDINGS",
    noRightBorderAndRoundings = "NO_RIGHT_BORDER_AND_ROUNDINGS",
    noTopBorderAndRoundings = "NO_TOP_BORDER_AND_ROUNDINGS",
    noBottomBorderAndRoundings = "NO_BOTTOM_BORDER_AND_ROUNDINGS",
    noRoundings = "NO_ROUNDINGS",
    horizontallyShrinkable = "HORIZONTALLY_SHRINKABLE"
  }

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{
          regular: "REGULAR";
          accented: "ACCENTED";
          danger: "DANGER";
          linkLike: "LINK_LIKE";
        }>
      >;

  export enum DecorativeModifiers {
    bordersDisguising = "BORDERS_DISGUISING",
    noBackground = "NO_BACKGROUND",
    noBackgroundInDefaultState = "NO_BACKGROUND_IN_DEFAULT_STATE"
  }

  export type Localization = Readonly<{
    defaultLabel: string;
    defaultAccessibilityGuidance: string;
  }>;

}


export default Button;
