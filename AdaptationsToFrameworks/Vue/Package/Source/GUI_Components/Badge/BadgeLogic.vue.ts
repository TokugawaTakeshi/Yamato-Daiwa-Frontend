/* ─── Validations ────────────────────────────────────────────────────────────────────────────────────────────────── */
import VuePropertyValidator from "../_VuePropertiesValidators/VuePropertyValidator";
import ThemeVuePropertyValidator from "../_VuePropertiesValidators/ThemeVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import GeometricModifiersVuePropertyValidator from "../_VuePropertiesValidators/GeometricModifiersVuePropertyValidator";
import DecorativeVariationVuePropertyValidator from "../_VuePropertiesValidators/DecorativeVariationVuePropertyValidator";
import DecorativeModifiersVuePropertyValidator from "../_VuePropertiesValidators/DecorativeModifiersVuePropertyValidator";
import NonEmptyStringVuePropertyValidator from "../_VuePropertiesValidators/NonEmptyStringVuePropertyValidator";
import BooleanVuePropertyValidator from "../_VuePropertiesValidators/BooleanVuePropertyValidator";
import preventNullForOptionalVueProperty from "../_Decorators/preventNullForOptionalVueProperty";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import YDF_ComponentsCoordinator from "../YDF_ComponentsCoordinator";
import { isNonEmptyString, type ElementOfPseudoEnumeration } from "@yamato-daiwa/es-extensions";


@VueComponentConfiguration({ name: Badge.CSS_NAMESPACE })
class Badge extends VueComponent {

  public static CSS_NAMESPACE: string = "Badge--YDF";


  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        propertyName: "keyLabel",
        componentName: Badge.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly keyLabel?: string;

  @VueProperty({
    required: true,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        propertyName: "valueLabel",
        componentName: Badge.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  protected readonly valueLabel!: string;

  @VueProperty({
    default: "span",
    validator: VuePropertyValidator.create({
      checker: isNonEmptyString,
      messageSpecificPart: "If specified, must be the valid HTML tag name",
      propertyName: "rootElementTag",
      componentName: Badge.CSS_NAMESPACE
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly rootElementTag!: string;


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: Badge.Themes = { regular: "REGULAR" };

  @VueProperty({
    default: Badge.Themes.regular,
    validator: ThemeVuePropertyValidator(Badge)
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof Badge {
    return YDF_ComponentsCoordinator.defineThemes(themesNames, Badge);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    Badge.areThemesCSS_ClassesCommon = true;
  }

  @VueProperty({
    default: Badge.areThemesCSS_ClassesCommon,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "areThemesCSS_ClassesCommon",
        componentName: Badge.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly areThemesCSS_ClassesCommon!: boolean;


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly GeometricVariations: Badge.GeometricVariations = {
    regular: "REGULAR",
    small: "SMALL"
  };

  @VueProperty({
    default: Badge.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator(Badge)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof Badge {
    return YDF_ComponentsCoordinator.defineGeometricVariations(geometricVariationsNames, Badge);
  }

  public static readonly GeometricModifiers: Badge.GeometricModifiers = {
    pillShape: "PILL_SHAPE",
    singleLine: "SINGLE_LINE"
  };

  @VueProperty({
    default: (): ReadonlyArray<ElementOfPseudoEnumeration<Badge.GeometricModifiers>> => [],
    validator: GeometricModifiersVuePropertyValidator(Badge)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricModifiers!: ReadonlyArray<ElementOfPseudoEnumeration<Badge.GeometricModifiers>>;


  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly DecorativeVariations: Badge.DecorativeVariations = {
    veryCatchyBright: "VERY_CATCHY_BRIGHT",
    catchyBright: "CATCHY_BRIGHT",
    modestlyCatchyBright: "MODESTLY_CATCHY_BRIGHT",
    neutralBright: "NEUTRAL_BRIGHT",
    modestlyCalmingBright: "MODESTLY_CALMING_BRIGHT",
    calmingBright: "CALMING_BRIGHT",
    achromaticBright: "ACHROMATIC_BRIGHT",
    veryCatchyPastel: "VERY_CATCHY_PASTEL",
    catchyPastel: "CATCHY_PASTEL",
    modestlyCatchyPastel: "MODESTLY_CATCHY_PASTEL",
    neutralPastel: "NEUTRAL_PASTEL",
    modestlyCalmingPastel: "MODESTLY_CALMING_PASTEL",
    calmingPastel: "CALMING_PASTEL",
    achromaticPastel: "ACHROMATIC_PASTEL"
  };

  @VueProperty({
    required: true,
    validator: DecorativeVariationVuePropertyValidator(Badge)
  })
  protected readonly decorativeVariation!: string;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof Badge {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(decorativeVariationsNames, Badge);
  }

  public static readonly DecorativeModifiers: Badge.DecorativeModifiers = {
    bordersDisguising: "BORDERS_DISGUISING",
    noBackground: "NO_BACKGROUND"
  };

  @VueProperty({
    default: (): ReadonlyArray<ElementOfPseudoEnumeration<Badge.DecorativeModifiers>> => [],
    validator: DecorativeModifiersVuePropertyValidator(Badge)
  })
  protected readonly decorativeModifiers!: ReadonlyArray<ElementOfPseudoEnumeration<Badge.DecorativeModifiers>>;


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return YDF_ComponentsCoordinator.generateRootElementModifierCSS_Classes({
      CSS_Namespace: Badge.CSS_NAMESPACE,
      activeTheme: this.theme,
      allThemes: Badge.Themes,
      areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
      activeGeometricVariation: this.geometricVariation,
      allGeometricVariations: Badge.GeometricVariations,
      activeGeometricModifiers: this.geometricModifiers,
      activeDecorativeVariation: this.decorativeVariation,
      allDecorativeVariations: Badge.DecorativeVariations,
      activeDecorativeModifiers: this.decorativeModifiers
    });
  }


  /* ━━━ Transforming to Options API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static applyStaticMembersToInheritorTransformedToOptionAPI(inheritedComponent: object): object {
    return Object.defineProperties(
      inheritedComponent,
      {
        CSS_NAMESPACE: { value: Badge.CSS_NAMESPACE },
        Themes: { value: Badge.Themes },
        defineThemes: { value: Badge.defineThemes },
        GeometricVariations: { value: Badge.GeometricVariations },
        GeometricModifiers: { value: Badge.GeometricModifiers },
        defineGeometricVariations: { value: Badge.defineGeometricVariations },
        DecorativeVariations: { value: Badge.DecorativeVariations },
        DecorativeModifiers: { value: Badge.DecorativeModifiers },
        defineDecorativeVariations: { value: Badge.defineDecorativeVariations }
      }
    );
  }

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
