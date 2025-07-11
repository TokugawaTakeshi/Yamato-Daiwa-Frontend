/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import { type ClosingButtonLocalization, closingButtonYDF_GUI_ComponentLocalization__english } from "@yamato-daiwa/frontend";

/* ─── Validations ────────────────────────────────────────────────────────────────────────────────────────────────── */
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


@VueComponentConfiguration({ name: ClosingButton.CSS_NAMESPACE })
class ClosingButton extends VueComponent {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static CSS_NAMESPACE: string = "ClosingButton--YDF";

  public static LabelLetterCases: ClosingButton.LabelLetterCases = {
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
        componentName: ClosingButton.CSS_NAMESPACE
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
        componentName: ClosingButton.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly noLabel!: boolean;

  @VueProperty({
    default: ClosingButton.LabelLetterCases.lowercase,
    get validator(): VuePropertyValidator {
      return ElementOfEnumerationVuePropertyValidator({
        enumerationFullyQualifiedName: "ClosingButton.LabelLetterCases",
        enumeration: ClosingButton.LabelLetterCases,
        propertyName: "labelLetterCase",
        componentName: ClosingButton.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly labelLetterCase!: ElementOfPseudoEnumeration<ClosingButton.LabelLetterCases>;

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        isPropertyRequired: this.required === true,
        propertyName: "accessibilityGuidance",
        componentName: ClosingButton.CSS_NAMESPACE
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly accessibilityGuidance?: string;


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: ClosingButton.Themes = { regular: "REGULAR" };

  @VueProperty({
    default: ClosingButton.Themes.regular,
    validator: ThemeVuePropertyValidator(ClosingButton)
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof ClosingButton {
    return YDF_ComponentsCoordinator.defineThemes(themesNames, ClosingButton);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    ClosingButton.areThemesCSS_ClassesCommon = true;
  }

  @VueProperty({
    default: ClosingButton.areThemesCSS_ClassesCommon,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "areThemesCSS_ClassesCommon",
        componentName: ClosingButton.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly areThemesCSS_ClassesCommon!: boolean;


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly GeometricVariations: ClosingButton.GeometricVariations = { regular: "REGULAR" };

  @VueProperty({
    default: ClosingButton.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator(ClosingButton)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof ClosingButton {
    return YDF_ComponentsCoordinator.defineGeometricVariations(geometricVariationsNames, ClosingButton);
  }

  public static readonly GeometricModifiers: ClosingButton.GeometricModifiers = { noRoundings: "NO_ROUNDINGS" };

  @VueProperty({
    default: (): ReadonlyArray<ElementOfPseudoEnumeration<ClosingButton.GeometricModifiers>> => [],
    validator: GeometricModifiersVuePropertyValidator(ClosingButton)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricModifiers!: ReadonlyArray<ElementOfPseudoEnumeration<ClosingButton.GeometricModifiers>>;


  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly DecorativeVariations: ClosingButton.DecorativeVariations = { regular: "REGULAR" };

  @VueProperty({
    default: ClosingButton.DecorativeVariations.regular,
    validator: DecorativeVariationVuePropertyValidator(ClosingButton)
  })
  @preventNullForOptionalVueProperty
  protected readonly decorativeVariation!: string;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof ClosingButton {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(decorativeVariationsNames, ClosingButton);
  }

  public static readonly DecorativeModifiers: ClosingButton.DecorativeModifiers = {
    bordersDisguising: "BORDERS_DISGUISING",
    noBackground: "NO_BACKGROUND",
    noBackgroundInDefaultState: "NO_BACKGROUND_IN_DEFAULT_STATE"
  };

  @VueProperty({
    default: (): ReadonlyArray<ElementOfPseudoEnumeration<ClosingButton.DecorativeModifiers>> => [],
    validator: DecorativeModifiersVuePropertyValidator(ClosingButton)
  })
  protected readonly decorativeModifiers!: ReadonlyArray<ElementOfPseudoEnumeration<ClosingButton.DecorativeModifiers>>;


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @AccessibleFromTemplateAsNonReactive
  public static localization: ClosingButtonLocalization = closingButtonYDF_GUI_ComponentLocalization__english;


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return YDF_ComponentsCoordinator.generateRootElementModifierCSS_Classes({
      CSS_Namespace: ClosingButton.CSS_NAMESPACE,
      activeTheme: this.theme,
      allThemes: ClosingButton.Themes,
      areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
      activeGeometricVariation: this.geometricVariation,
      allGeometricVariations: ClosingButton.GeometricVariations,
      activeGeometricModifiers: this.geometricModifiers,
      activeDecorativeVariation: this.decorativeVariation,
      allDecorativeVariations: ClosingButton.DecorativeVariations,
      activeDecorativeModifiers: this.decorativeModifiers
    });
  }

  protected get labelCSS_ModifierClass(): string {
     return {
      [ClosingButton.LabelLetterCases.uppercase]: `${ ClosingButton.CSS_NAMESPACE }-Label__Uppercase`,
      [ClosingButton.LabelLetterCases.lowercase]: `${ ClosingButton.CSS_NAMESPACE }-Label__Lowercase`,
      [ClosingButton.LabelLetterCases.capitalisation]: `${ ClosingButton.CSS_NAMESPACE }-Label__Capitalisation`
    }[this.labelLetterCase];
  }


  /* ━━━ Transforming to Options API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static applyStaticMembersToInheritorTransformedToOptionAPI(inheritedComponent: object): object {
    return Object.defineProperties(
      inheritedComponent,
      {
        CSS_NAMESPACE: { value: ClosingButton.CSS_NAMESPACE },
        LabelLetterCases: { value: ClosingButton.LabelLetterCases },
        Themes: { value: ClosingButton.Themes },
        defineThemes: { value: ClosingButton.defineThemes },
        GeometricVariations: { value: ClosingButton.GeometricVariations },
        GeometricModifiers: { value: ClosingButton.GeometricModifiers },
        defineGeometricVariations: { value: ClosingButton.defineGeometricVariations },
        DecorativeVariations: { value: ClosingButton.DecorativeVariations },
        DecorativeModifiers: { value: ClosingButton.DecorativeModifiers },
        defineDecorativeVariations: { value: ClosingButton.defineDecorativeVariations },
        localization: { value: ClosingButton.localization }
      }
    );
  }

}


namespace ClosingButton {

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


export default ClosingButton;
