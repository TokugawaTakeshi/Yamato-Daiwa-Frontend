/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentVueTemplate from "./Button.vue.pug";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";
import type { RouteLocationRaw as VueRouterRawLocation } from "vue-router";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import ComponentsAuxiliaries from "../../../ComponentsAuxiliaries";
import InvalidVuePropertiesCombinationError from
    "../../../_Errors/InvalidVuePropertiesCombination/InvalidVuePropertiesCombinationError";
import {
  Logger,
  isNumber,
  isString,
  isNonEmptyString,
  isEitherUndefinedOrNull,
  isNeitherUndefinedNorNull,
  isElementOfEnumeration,
  isArbitraryObject,
  emptyStringToNull,
  type ElementOfPseudoEnumeration
} from "@yamato-daiwa/es-extensions";


@VueComponentConfiguration({
  name: Button.CSS_NAMESPACE,
  template: componentVueTemplate
})
class Button extends VueComponent {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static CSS_NAMESPACE: string = "Button--YDF";

  public static HTML_Types: Button.HTML_Types = {
    regular: "BUTTON",
    submit: "SUBMIT",
    inputButton: "INPUT_BUTTON",
    inputSubmit: "INPUT_SUBMIT",
    inputReset: "INPUT_RESET"
  };


  /* ━━━ Non-reactive Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected IS_NUXT!: boolean;

  private initializeNonReactiveClassFields(): void {
    this.IS_NUXT = "$nuxt" in window;
  }


  /* ━━━ Common Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VueProperty({
    type: String,
    default: Button.HTML_Types.regular,
    validator: (rawValue: string): boolean => isElementOfEnumeration(rawValue, Button.HTML_Types)
  })
  protected readonly HTML_Type!: ElementOfPseudoEnumeration<Button.HTML_Types>;


  /* ─── Textings ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  @VueProperty({ validator: (value: unknown): boolean => isNonEmptyString(value) || isNumber(value) })
  protected readonly label?: string | number | null;

  @VueProperty({ validator: isNonEmptyString })
  protected readonly accessibilityGuidance?: string | null;


  /* ─── Links ────────────────────────────────────────────────────────────────────────────────────────────────────── */
  @VueProperty({ validator: (value: unknown): boolean => isNonEmptyString(value) || isArbitraryObject(value) })
  protected readonly route?: VueRouterRawLocation | null;

  @VueProperty({ validator: isNonEmptyString })
  protected readonly externalURI?: string | null;

  @VueProperty({ type: Boolean, default: false })
  protected readonly mustOpenLinkInNewTab!: boolean;

  @VueProperty({ type: Boolean, default: false })
  protected readonly mustRequestNotFollowLinkForCrawlingToSearchEngine!: boolean;


  /* ─── Status ───────────────────────────────────────────────────────────────────────────────────────────────────── */
  @VueProperty({ type: Boolean, default: false })
  protected readonly disabled!: boolean;

  @VueProperty({ type: Boolean, default: false })
  protected readonly toggled!: boolean;


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: Button.Themes = { regular: "REGULAR" };

  @VueProperty({
    type: String,
    default: Button.Themes.regular,
    validator: (rawValue: string): boolean => isElementOfEnumeration(rawValue, Button.Themes)
  })
  protected readonly theme!: string;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof Button {
    return ComponentsAuxiliaries.defineThemes(themesNames, Button);
  }

  public static areThemesCSS_ClassesCommon: boolean = ComponentsAuxiliaries.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    Button.areThemesCSS_ClassesCommon = true;
  }

  @VueProperty({ type: Boolean, default: Button.areThemesCSS_ClassesCommon })
  private readonly areThemesCSS_ClassesCommon!: boolean;


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly GeometricVariations: Button.GeometricVariations = {
    regular: "REGULAR",
    small: "SMALL",
    linkLike: "LINK_LIKE"
  };

  @VueProperty({
    type: String,
    default: Button.GeometricVariations.regular,
    validator: (rawValue: string): boolean => isElementOfEnumeration(rawValue, Button.GeometricVariations)
  })
  protected readonly geometricVariation!: string;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof Button {
    return ComponentsAuxiliaries.defineGeometricVariations(geometricVariationsNames, Button);
  }

  @VueProperty({
    type: Array,
    default: (): ReadonlyArray<string> => [],
    validator: (rawValue: ReadonlyArray<unknown>): boolean =>
        rawValue.every(
          (element: unknown): boolean => isString(element) && isElementOfEnumeration(element, Button.GeometricModifiers)
        )
  })
  protected readonly geometricModifiers!: ReadonlyArray<Button.GeometricModifiers>;


  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly DecorativeVariations: Button.DecorativeVariations = {
    regular: "REGULAR",
    accented: "ACCENTED",
    danger: "DANGER",
    linkLike: "LINK_LIKE"
  };

  @VueProperty({
    type: String,
    default: Button.DecorativeVariations.regular,
    validator: (rawValue: string): boolean => isElementOfEnumeration(rawValue, Button.DecorativeVariations)
  })
  protected readonly decorativeVariation!: string;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof Button {
    return ComponentsAuxiliaries.defineDecorativeVariations(decorativeVariationsNames, Button);
  }


  @VueProperty({
    type: Array,
    default: (): ReadonlyArray<string> => [],
    validator: (rawValue: ReadonlyArray<unknown>): boolean =>
        rawValue.every(
          (element: unknown): boolean => isString(element) && isElementOfEnumeration(element, Button.DecorativeModifiers)
        )
  })
  protected readonly decorativeModifiers!: ReadonlyArray<Button.DecorativeModifiers>;


  /* ━━━ Lifecycle Hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public created(): void {

    if (
      (!isNonEmptyString(this.label) && isNumber(this.label)) &&
      (
        this.HTML_Type === Button.HTML_Types.inputButton ||
        this.HTML_Type === Button.HTML_Types.inputSubmit ||
        this.HTML_Type === Button.HTML_Types.inputReset
      )
    ) {
      Logger.throwErrorAndLog({
        errorInstance: new InvalidVuePropertiesCombinationError({
          vueComponentName: Button.name,
          messageSpecificPart:
              "When button has HTML type \"inputButton\", \"inputSubmit\" or \"inputReset\", the \"label\" property " +
                "must be specified with non-empty string of number."
        }),
        title: InvalidVuePropertiesCombinationError.localization.defaultTitle,
        occurrenceLocation: `${ Button.name }.created()`
      });
    }

    this.initializeNonReactiveClassFields();

  }


  /* ━━━ Root Element Tag Name ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get isButtonTheTagNameOfRootElement(): boolean {
    return isEitherUndefinedOrNull(this.route) &&
        isEitherUndefinedOrNull(this.externalURI) &&
        (this.HTML_Type === Button.HTML_Types.regular || this.HTML_Type === Button.HTML_Types.submit);
  }

  protected get isInputTheTagNameOfRootElement(): boolean {
    return isEitherUndefinedOrNull(this.route) &&
        isEitherUndefinedOrNull(this.externalURI) &&
        (
          this.HTML_Type === Button.HTML_Types.inputButton ||
          this.HTML_Type === Button.HTML_Types.inputSubmit ||
          this.HTML_Type === Button.HTML_Types.inputReset
        );
  }

  private get isRouterLinkTheRootElement(): boolean {
    return isNeitherUndefinedNorNull(this.route);
  }

  private get isAnchorTheTagNameOfRootElement(): boolean {
    return isNeitherUndefinedNorNull(this.externalURI);
  }


  /* ━━━ Root Element Attributes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get typeAttributeValueOfButtonOrInputElement(): string | null {

    if (!this.isButtonTheTagNameOfRootElement && !this.isInputTheTagNameOfRootElement) {
      return null;
    }


    switch (this.HTML_Type) {
      case Button.HTML_Types.regular: return "button";
      case Button.HTML_Types.submit: return "submit";
      case Button.HTML_Types.inputButton: return "button";
      case Button.HTML_Types.inputSubmit: return "submit";
      case Button.HTML_Types.inputReset: return "reset";
      default: return null;
    }

  }

  protected get relAttributeValueOfAnchorElement(): string | null {
    return emptyStringToNull(
      [
        ...this.mustOpenLinkInNewTab ? [ "noopener", "noreferrer" ] : [],
        ...this.mustRequestNotFollowLinkForCrawlingToSearchEngine ? [ "nofollow" ] : []
      ].join(" ")
    );
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return [

      ...(this.isAnchorTheTagNameOfRootElement || this.isRouterLinkTheRootElement) && this.disabled ?
          [ `${ Button.CSS_NAMESPACE }__DisabledState` ] : [],

      ...ComponentsAuxiliaries.addThemeCSS_ClassToArrayIfMust({
        themeValue: this.theme,
        allThemes: Button.Themes,
        areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
        CSS_Namespace: Button.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.addGeometricVariationCSS_ClassToArrayIfMust({
        geometricVariation: this.geometricVariation,
        allGeometricVariations: Button.GeometricVariations,
        CSS_Namespace: Button.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.
          generateDemandedGeometricModifiersCSS_Classes(Button.CSS_NAMESPACE, this.geometricModifiers),

      ...ComponentsAuxiliaries.addDecorativeVariationCSS_ClassToArrayIfMust({
        decorativeVariation: this.decorativeVariation,
        allDecorativeVariations: Button.DecorativeVariations,
        CSS_Namespace: Button.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.
          generateDemandedDecorativeModifiersCSS_Classes(Button.CSS_NAMESPACE, this.decorativeModifiers)

    ];
  }

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

  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    readonly accented: "ACCENTED";
    readonly danger: "DANGER";
    readonly linkLike: "LINK_LIKE";
    [variationName: string]: string;
  };

  export enum DecorativeModifiers {
    bordersDisguising = "BORDERS_DISGUISING",
    noBackground = "NO_BACKGROUND",
    noBackgroundInDefaultState = "NO_BACKGROUND_IN_DEFAULT_STATE"
  }

}


export default Button;
