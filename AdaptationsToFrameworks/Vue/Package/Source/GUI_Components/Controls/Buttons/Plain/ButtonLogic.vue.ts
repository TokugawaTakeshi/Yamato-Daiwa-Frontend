/* ─── Validations ─────────────────────────────────────────────────────────────────────────────────────── */
import VuePropertyValidator from "../../../_VuePropertiesValidators/VuePropertyValidator";
import BooleanVuePropertyValidator from "../../../_VuePropertiesValidators/BooleanVuePropertyValidator";
import ElementOfEnumerationVuePropertyValidator from "../../../_VuePropertiesValidators/ElementOfEnumerationVuePropertyValidator";
import NonEmptyStringVuePropertyValidator from "../../../_VuePropertiesValidators/NonEmptyStringVuePropertyValidator";
import ThemeVuePropertyValidator from "../../../_VuePropertiesValidators/ThemeVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../../../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import GeometricModifiersVuePropertyValidator from "../../../_VuePropertiesValidators/GeometricModifiersVuePropertyValidator";
import DecorativeVariationVuePropertyValidator from "../../../_VuePropertiesValidators/DecorativeVariationVuePropertyValidator";
import DecorativeModifiersVuePropertyValidator from "../../../_VuePropertiesValidators/DecorativeModifiersVuePropertyValidator";
import InvalidVuePropertiesCombinationError from
    "../../../_Errors/InvalidVuePropertiesCombination/InvalidVuePropertiesCombinationError";
import preventNullForOptionalVueProperty from "../../../_Decorators/preventNullForOptionalVueProperty";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";
import type { RouteLocationRaw as VueRouterRawLocation } from "vue-router";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import YDF_ComponentsCoordinator from "../../../YDF_ComponentsCoordinator";
import {
  Logger,
  isNumber,
  isNonEmptyString,
  isEitherUndefinedOrNull,
  isNeitherUndefinedNorNull,
  isArbitraryObject,
  emptyStringToNull,
  type ElementOfPseudoEnumeration
} from "@yamato-daiwa/es-extensions";


@VueComponentConfiguration({ name: Button.CSS_NAMESPACE })
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

  protected initializeNonReactiveClassFields(): void {
    this.IS_NUXT = "$nuxt" in window;
  }


  /* ━━━ Common Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VueProperty({
    default: Button.HTML_Types.regular,
    get validator(): VuePropertyValidator {
      return ElementOfEnumerationVuePropertyValidator({
        enumerationFullyQualifiedName: "Button.HTML_Types",
        enumeration: Button.HTML_Types,
        propertyName: "HTML_Type",
        componentName: Button.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly HTML_Type!: ElementOfPseudoEnumeration<Button.HTML_Types>;


  /* ─── Textings ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  @VueProperty({
    required: false,
    validator: VuePropertyValidator.create({
      checker: (rawValue: unknown): boolean =>
          isNonEmptyString(rawValue) || isNumber(rawValue, { mustConsiderNaN_AsNumber: true }),
      messageSpecificPart: "If specified, must be either non-empty string or number.",
      propertyName: "label",
      componentName: Button.CSS_NAMESPACE
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly label?: string | number;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        isPropertyRequired: this.required === true,
        propertyName: "accessibilityGuidance",
        componentName: Button.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly accessibilityGuidance?: string;


  /* ─── Links ────────────────────────────────────────────────────────────────────────────────────────────────────── */
  @VueProperty({
    required: false,
    validator: VuePropertyValidator.create({
      checker: (rawValue: unknown): boolean => isNonEmptyString(rawValue) || isArbitraryObject(rawValue),
      messageSpecificPart: "If specified, must be either non-empty string or an object.",
      propertyName: "route",
      componentName: Button.CSS_NAMESPACE
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly route?: VueRouterRawLocation;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        propertyName: "externalURI",
        isPropertyRequired: this.required === true,
        componentName: Button.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly externalURI?: string;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "mustOpenLinkInNewTab",
        componentName: Button.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly mustOpenLinkInNewTab!: boolean;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "mustRequestNotFollowLinkForCrawlingToSearchEngine",
        componentName: Button.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly mustRequestNotFollowLinkForCrawlingToSearchEngine!: boolean;


  /* ─── Status ───────────────────────────────────────────────────────────────────────────────────────────────────── */
  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "disabled",
        componentName: Button.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly disabled!: boolean;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "toggled",
        componentName: Button.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly toggled!: boolean;


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: Button.Themes = { regular: "REGULAR" };

  @VueProperty({
    default: Button.Themes.regular,
    validator: ThemeVuePropertyValidator(Button)
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof Button {
    return YDF_ComponentsCoordinator.defineThemes(themesNames, Button);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    Button.areThemesCSS_ClassesCommon = true;
  }

  @VueProperty({
    default: Button.areThemesCSS_ClassesCommon,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "areThemesCSS_ClassesCommon",
        componentName: Button.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly areThemesCSS_ClassesCommon!: boolean;


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: Button.GeometricVariations = {
    regular: "REGULAR",
    small: "SMALL",
    linkLike: "LINK_LIKE"
  };

  @VueProperty({
    default: Button.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator(Button)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof Button {
    return YDF_ComponentsCoordinator.defineGeometricVariations(geometricVariationsNames, Button);
  }

  public static readonly GeometricModifiers: Button.GeometricModifiers = {
    pillShape: "PILL_SHAPE",
    squareShape: "SQUARE_SHAPE",
    squareShapeUnlessOverflowed: "SQUARE_SHAPE_UNLESS_OVERFLOWED",
    singleLine: "SINGLE_LINE",
    noLeftBorderAndRoundings: "NO_LEFT_BORDER_AND_ROUNDINGS",
    noRightBorderAndRoundings: "NO_RIGHT_BORDER_AND_ROUNDINGS",
    noTopBorderAndRoundings: "NO_TOP_BORDER_AND_ROUNDINGS",
    noBottomBorderAndRoundings: "NO_BOTTOM_BORDER_AND_ROUNDINGS",
    noRoundings: "NO_ROUNDINGS",
    horizontallyShrinkable: "HORIZONTALLY_SHRINKABLE"
  };

  @VueProperty({
    default: (): ReadonlyArray<ElementOfPseudoEnumeration<Button.GeometricModifiers>> => [],
    validator: GeometricModifiersVuePropertyValidator(Button)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricModifiers!: ReadonlyArray<ElementOfPseudoEnumeration<Button.GeometricModifiers>>;


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: Button.DecorativeVariations = {
    regular: "REGULAR",
    accented: "ACCENTED",
    danger: "DANGER",
    linkLike: "LINK_LIKE"
  };

  @VueProperty({
    default: Button.DecorativeVariations.regular,
    validator: DecorativeVariationVuePropertyValidator(Button)
  })
  @preventNullForOptionalVueProperty
  protected readonly decorativeVariation!: string;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof Button {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(decorativeVariationsNames, Button);
  }

  public static readonly DecorativeModifiers: Button.DecorativeModifiers = {
    bordersDisguising: "BORDERS_DISGUISING",
    noBackground: "NO_BACKGROUND",
    noBackgroundInDefaultState: "NO_BACKGROUND_IN_DEFAULT_STATE"
  };

  @VueProperty({
    default: (): ReadonlyArray<ElementOfPseudoEnumeration<Button.DecorativeModifiers>> => [],
    validator: DecorativeModifiersVuePropertyValidator(Button)
  })
  protected readonly decorativeModifiers!: ReadonlyArray<ElementOfPseudoEnumeration<Button.DecorativeModifiers>>;


  /* ━━━ Lifecycle Hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected created(): void {
    this.initializeNonReactiveClassFields();
    this.validateProperties();
  }

  protected beforeUpdate(): void {
    this.validateProperties();
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

  protected get isRouterLinkTheRootElement(): boolean {
    return isNeitherUndefinedNorNull(this.route);
  }

  protected get isAnchorTheTagNameOfRootElement(): boolean {
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
    return YDF_ComponentsCoordinator.generateRootElementModifierCSS_Classes({
      CSS_Namespace: Button.CSS_NAMESPACE,
      activeTheme: this.theme,
      allThemes: Button.Themes,
      areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
      activeGeometricVariation: this.geometricVariation,
      allGeometricVariations: Button.GeometricVariations,
      activeGeometricModifiers: this.geometricModifiers,
      activeDecorativeVariation: this.decorativeVariation,
      allDecorativeVariations: Button.DecorativeVariations,
      activeDecorativeModifiers: this.decorativeModifiers,
      other: [
        ...(this.isAnchorTheTagNameOfRootElement || this.isRouterLinkTheRootElement) && this.disabled ?
            [ `${ Button.CSS_NAMESPACE }__DisabledState` ] : []
      ]
    });
  }


  /* ━━━ Properties Validation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected validateProperties(): void {

    if (
      (!isNonEmptyString(this.label) && isNumber(this.label, { mustConsiderNaN_AsNumber: true })) &&
      (
        this.HTML_Type === Button.HTML_Types.inputButton ||
        this.HTML_Type === Button.HTML_Types.inputSubmit ||
        this.HTML_Type === Button.HTML_Types.inputReset
      )
    ) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidVuePropertiesCombinationError({
          vueComponentName: Button.CSS_NAMESPACE,
          messageSpecificPart:
              "When button has HTML type \"inputButton\", \"inputSubmit\" or \"inputReset\", the \"label\" property " +
                "must be specified with non-empty string of number."
        }),
        title: InvalidVuePropertiesCombinationError.localization.defaultTitle,
        occurrenceLocation: `${ Button.CSS_NAMESPACE }.created/beforeUpdate()`
      });
    }

  }


  /* ━━━ Transforming to Options API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static applyStaticMembersToInheritorTransformedToOptionAPI(inheritedComponent: object): object {
    return Object.defineProperties(
      inheritedComponent,
      {
        CSS_NAMESPACE: { value: Button.CSS_NAMESPACE },
        HTML_Types: { value: Button.HTML_Types },
        Themes: { value: Button.Themes },
        defineThemes: { value: Button.defineThemes },
        GeometricVariations: { value: Button.GeometricVariations },
        GeometricModifiers: { value: Button.GeometricModifiers },
        defineGeometricVariations: { value: Button.defineGeometricVariations },
        DecorativeVariations: { value: Button.DecorativeVariations },
        DecorativeModifiers: { value: Button.DecorativeModifiers },
        defineDecorativeVariations: { value: Button.defineDecorativeVariations }
      }
    );
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
