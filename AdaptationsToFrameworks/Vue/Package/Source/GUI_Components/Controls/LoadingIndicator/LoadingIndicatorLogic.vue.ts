/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Validations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type VuePropertyValidator from "../../_VuePropertiesValidators/VuePropertyValidator";
import ElementOfEnumerationVuePropertyValidator from
    "../../_VuePropertiesValidators/ElementOfEnumerationVuePropertyValidator";
import ThemeVuePropertyValidator from "../../_VuePropertiesValidators/ThemeVuePropertyValidator";
import BooleanVuePropertyValidator from "../../_VuePropertiesValidators/BooleanVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import DecorativeVariationVuePropertyValidator from "../../_VuePropertiesValidators/DecorativeVariationVuePropertyValidator";
import preventNullForOptionalVueProperty from "../../_Decorators/preventNullForOptionalVueProperty";

/* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";

/* ┅┅┅ Utils  ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import AccessibleFromTemplateAsNonReactive from "../../_Decorators/AccessibleFromTemplateAsNonReactive";
import YDF_ComponentsCoordinator from "../../YDF_ComponentsCoordinator";
import type { ElementOfPseudoEnumeration } from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


@VueComponentConfiguration({ name: LoadingIndicator.CSS_NAMESPACE })
class LoadingIndicator extends VueComponent {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static CSS_NAMESPACE: string = "LoadingIndicator--YDF";

  @AccessibleFromTemplateAsNonReactive
  public static Types: LoadingIndicator.Types = {
    variableWidthArcSpinner: "VARIABLE_WIDTH_ARC_SPINNER",
    twoConstantWidthArcsSpinner: "TWO_CONSTANT_WIDTH_ARCS_SPINNER"
  };


  /* ━━━ Common Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VueProperty({
    required: true,
    get validator(): VuePropertyValidator {
      return ElementOfEnumerationVuePropertyValidator({
        enumerationFullyQualifiedName: "LoadingIndicator.Types",
        enumeration: LoadingIndicator.Types,
        propertyName: "type",
        componentName: LoadingIndicator.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly type!: ElementOfPseudoEnumeration<LoadingIndicator.Types>;


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: LoadingIndicator.Themes = { regular: "REGULAR" };

  @VueProperty({
    default: LoadingIndicator.Themes.regular,
    validator: ThemeVuePropertyValidator(LoadingIndicator)
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof LoadingIndicator {
    return YDF_ComponentsCoordinator.defineThemes(themesNames, LoadingIndicator);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    LoadingIndicator.areThemesCSS_ClassesCommon = true;
  }

  @VueProperty({
    default: LoadingIndicator.areThemesCSS_ClassesCommon,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "areThemesCSS_ClassesCommon",
        componentName: LoadingIndicator.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly areThemesCSS_ClassesCommon!: boolean;


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: LoadingIndicator.GeometricVariations = {
    regular: "REGULAR",
    small: "SMALL"
  };

  @VueProperty({
    default: LoadingIndicator.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator(LoadingIndicator)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof LoadingIndicator {
    return YDF_ComponentsCoordinator.defineGeometricVariations(geometricVariationsNames, LoadingIndicator);
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: LoadingIndicator.DecorativeVariations = { regular: "REGULAR" };

  @VueProperty({
    default: LoadingIndicator.DecorativeVariations.regular,
    validator: DecorativeVariationVuePropertyValidator(LoadingIndicator)
  })
  @preventNullForOptionalVueProperty
  protected readonly decorativeVariation!: string;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof LoadingIndicator {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(decorativeVariationsNames, LoadingIndicator);
  }


  /* ━━━ Transforming to Options API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static applyStaticMembersToInheritorTransformedToOptionAPI(inheritedComponent: object): object {
    return Object.defineProperties(
      inheritedComponent,
      {
        CSS_NAMESPACE: { value: LoadingIndicator.CSS_NAMESPACE },
        Types: { value: LoadingIndicator.Types },
        Themes: { value: LoadingIndicator.Themes },
        defineThemes: { value: LoadingIndicator.defineThemes },
        defineGeometricVariations: { value: LoadingIndicator.defineGeometricVariations },
        defineDecorativeVariations: { value: LoadingIndicator.defineDecorativeVariations }
      }
    );
  }

}


namespace LoadingIndicator {

  export type Types = Readonly<{
    variableWidthArcSpinner: "VARIABLE_WIDTH_ARC_SPINNER";
    twoConstantWidthArcsSpinner: "TWO_CONSTANT_WIDTH_ARCS_SPINNER";
  }>;

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    readonly small: "SMALL";
    [variationName: string]: string;
  };

  export type DecorativeVariations = {
    readonly regular: "REGULAR";
    [variationName: string]: string;
  };

}


export default LoadingIndicator;
