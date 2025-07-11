/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  type HamburgerMenuButtonLocalization,
  hamburgerMenuButtonYDF_GUI_ComponentLocalization__english
} from "@yamato-daiwa/frontend";


/* ─── Validations ─────────────────────────────────────────────────────────────────────────────────────── */
import type VuePropertyValidator from "../../../_VuePropertiesValidators/VuePropertyValidator";
import BooleanVuePropertyValidator from "../../../_VuePropertiesValidators/BooleanVuePropertyValidator";
import ElementOfEnumerationVuePropertyValidator from "../../../_VuePropertiesValidators/ElementOfEnumerationVuePropertyValidator";
import NonEmptyStringVuePropertyValidator from "../../../_VuePropertiesValidators/NonEmptyStringVuePropertyValidator";
import ThemeVuePropertyValidator from "../../../_VuePropertiesValidators/ThemeVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../../../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import GeometricModifiersVuePropertyValidator from "../../../_VuePropertiesValidators/GeometricModifiersVuePropertyValidator";
import DecorativeVariationVuePropertyValidator from "../../../_VuePropertiesValidators/DecorativeVariationVuePropertyValidator";
import DecorativeModifiersVuePropertyValidator from "../../../_VuePropertiesValidators/DecorativeModifiersVuePropertyValidator";
import preventNullForOptionalVueProperty from "../../../_Decorators/preventNullForOptionalVueProperty";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import YDF_ComponentsCoordinator from "../../../YDF_ComponentsCoordinator";
import { type ElementOfPseudoEnumeration } from "@yamato-daiwa/es-extensions";
import AccessibleFromTemplateAsNonReactive from "../../../_Decorators/AccessibleFromTemplateAsNonReactive";


@VueComponentConfiguration({ name: HamburgerMenuButton.CSS_NAMESPACE })
class HamburgerMenuButton extends VueComponent {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static CSS_NAMESPACE: string = "HamburgerMenuButton--YDF";

  public static LabelLetterCases: HamburgerMenuButton.LabelLetterCases = {
    uppercase: "UPPERCASE",
    lowercase: "LOWERCASE",
    capitalisation: "CAPITALISATION"
  };


  /* ━━━ Common Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Textings ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        isPropertyRequired: this.required === true,
        propertyName: "customLabel",
        componentName: HamburgerMenuButton.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly customLabel?: string;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "noLabel",
        componentName: HamburgerMenuButton.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly noLabel!: boolean;

  @VueProperty({
    default: HamburgerMenuButton.LabelLetterCases.lowercase,
    get validator(): VuePropertyValidator {
      return ElementOfEnumerationVuePropertyValidator({
        enumerationFullyQualifiedName: "HamburgerMenuButton.LabelLetterCases",
        enumeration: HamburgerMenuButton.LabelLetterCases,
        propertyName: "labelLetterCase",
        componentName: HamburgerMenuButton.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly labelLetterCase!: ElementOfPseudoEnumeration<HamburgerMenuButton.LabelLetterCases>;

  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "alwaysEnglishLabel",
        componentName: HamburgerMenuButton.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly alwaysEnglishLabel!: boolean;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        isPropertyRequired: this.required === true,
        propertyName: "accessibilityGuidance",
        componentName: HamburgerMenuButton.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly accessibilityGuidance?: string;


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: HamburgerMenuButton.Themes = { regular: "REGULAR" };

  @VueProperty({
    default: HamburgerMenuButton.Themes.regular,
    validator: ThemeVuePropertyValidator(HamburgerMenuButton)
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof HamburgerMenuButton {
    return YDF_ComponentsCoordinator.defineThemes(themesNames, HamburgerMenuButton);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    HamburgerMenuButton.areThemesCSS_ClassesCommon = true;
  }

  @VueProperty({
    default: HamburgerMenuButton.areThemesCSS_ClassesCommon,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "areThemesCSS_ClassesCommon",
        componentName: HamburgerMenuButton.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly areThemesCSS_ClassesCommon!: boolean;


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly GeometricVariations: HamburgerMenuButton.GeometricVariations = { regular: "REGULAR" };

  @VueProperty({
    default: HamburgerMenuButton.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator(HamburgerMenuButton)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof HamburgerMenuButton {
    return YDF_ComponentsCoordinator.defineGeometricVariations(geometricVariationsNames, HamburgerMenuButton);
  }

  public static readonly GeometricModifiers: HamburgerMenuButton.GeometricModifiers = { noRoundings: "NO_ROUNDINGS" };

  @VueProperty({
    default: (): ReadonlyArray<ElementOfPseudoEnumeration<HamburgerMenuButton.GeometricModifiers>> => [],
    validator: GeometricModifiersVuePropertyValidator(HamburgerMenuButton)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricModifiers!: ReadonlyArray<ElementOfPseudoEnumeration<HamburgerMenuButton.GeometricModifiers>>;


  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly DecorativeVariations: HamburgerMenuButton.DecorativeVariations = { regular: "REGULAR" };

  @VueProperty({
    default: HamburgerMenuButton.DecorativeVariations.regular,
    validator: DecorativeVariationVuePropertyValidator(HamburgerMenuButton)
  })
  @preventNullForOptionalVueProperty
  protected readonly decorativeVariation!: string;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof HamburgerMenuButton {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(decorativeVariationsNames, HamburgerMenuButton);
  }

  public static readonly DecorativeModifiers: HamburgerMenuButton.DecorativeModifiers = {
    bordersDisguising: "BORDERS_DISGUISING",
    noBackground: "NO_BACKGROUND",
    noBackgroundInDefaultState: "NO_BACKGROUND_IN_DEFAULT_STATE"
  };

  @VueProperty({
    default: (): ReadonlyArray<ElementOfPseudoEnumeration<HamburgerMenuButton.DecorativeModifiers>> => [],
    validator: DecorativeModifiersVuePropertyValidator(HamburgerMenuButton)
  })
  protected readonly decorativeModifiers!: ReadonlyArray<ElementOfPseudoEnumeration<HamburgerMenuButton.DecorativeModifiers>>;


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @AccessibleFromTemplateAsNonReactive
  public static localization: HamburgerMenuButtonLocalization = hamburgerMenuButtonYDF_GUI_ComponentLocalization__english;

  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return YDF_ComponentsCoordinator.generateRootElementModifierCSS_Classes({
      CSS_Namespace: HamburgerMenuButton.CSS_NAMESPACE,
      activeTheme: this.theme,
      allThemes: HamburgerMenuButton.Themes,
      areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
      activeGeometricVariation: this.geometricVariation,
      allGeometricVariations: HamburgerMenuButton.GeometricVariations,
      activeGeometricModifiers: this.geometricModifiers,
      activeDecorativeVariation: this.decorativeVariation,
      allDecorativeVariations: HamburgerMenuButton.DecorativeVariations,
      activeDecorativeModifiers: this.decorativeModifiers
    });
  }

  protected get labelCSS_ModifierClass(): string {
     return {
      [HamburgerMenuButton.LabelLetterCases.uppercase]: `${ HamburgerMenuButton.CSS_NAMESPACE }-Label__Uppercase`,
      [HamburgerMenuButton.LabelLetterCases.lowercase]: `${ HamburgerMenuButton.CSS_NAMESPACE }-Label__Lowercase`,
      [HamburgerMenuButton.LabelLetterCases.capitalisation]: `${ HamburgerMenuButton.CSS_NAMESPACE }-Label__Capitalisation`
    }[this.labelLetterCase];
  }


  /* ━━━ Transforming to Options API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static applyStaticMembersToInheritorTransformedToOptionAPI(
    inheritedComponent: object
  ): object {
    return Object.defineProperties(
      inheritedComponent,
      {
        CSS_NAMESPACE: { value: HamburgerMenuButton.CSS_NAMESPACE },
        LabelLetterCases: { value: HamburgerMenuButton.LabelLetterCases },
        Themes: { value: HamburgerMenuButton.Themes },
        defineThemes: { value: HamburgerMenuButton.defineThemes },
        GeometricVariations: { value: HamburgerMenuButton.GeometricVariations },
        GeometricModifiers: { value: HamburgerMenuButton.GeometricModifiers },
        defineGeometricVariations: { value: HamburgerMenuButton.defineGeometricVariations },
        DecorativeVariations: { value: HamburgerMenuButton.DecorativeVariations },
        DecorativeModifiers: { value: HamburgerMenuButton.DecorativeModifiers },
        defineDecorativeVariations: { value: HamburgerMenuButton.defineDecorativeVariations },
        localization: { value: HamburgerMenuButton.localization }
      }
    );
  }

}


namespace HamburgerMenuButton {

  export type LabelLetterCases = Readonly<{
    uppercase: "UPPERCASE";
    lowercase: "LOWERCASE";
    capitalisation: "CAPITALISATION";
  }>;

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    [variationName: string]: string;
  };

  export type GeometricModifiers = Readonly<{
    noRoundings: "NO_ROUNDINGS";
  }>;

  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    [variationName: string]: string;
  };

  export type DecorativeModifiers = Readonly<{
    bordersDisguising: "BORDERS_DISGUISING";
    noBackground: "NO_BACKGROUND";
    noBackgroundInDefaultState: "NO_BACKGROUND_IN_DEFAULT_STATE";
  }>;

}


export default HamburgerMenuButton;
