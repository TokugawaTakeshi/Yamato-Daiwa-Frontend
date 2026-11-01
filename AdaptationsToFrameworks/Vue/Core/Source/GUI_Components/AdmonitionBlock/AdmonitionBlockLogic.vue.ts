/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { AdmonitionBlockBase, type YDF_Component } from "@yamato-daiwa/frontend";

/* ┅┅┅ Validations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type VuePropertyValidator from "../_VuePropertiesValidators/VuePropertyValidator";
import ThemeVuePropertyValidator from "../_VuePropertiesValidators/ThemeVuePropertyValidator";
import BooleanVuePropertyValidator from "../_VuePropertiesValidators/BooleanVuePropertyValidator";
import NonEmptyStringVuePropertyValidator from "../_VuePropertiesValidators/NonEmptyStringVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import DecorativeVariationVuePropertyValidator from "../_VuePropertiesValidators/DecorativeVariationVuePropertyValidator";
import preventNullForOptionalVueProperty from "../_Decorators/preventNullForOptionalVueProperty";

/* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";

/* ┅┅┅ Utils  ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import YDF_ComponentsCoordinator from "../YDF_ComponentsCoordinator";
import AccessibleFromTemplateAsNonReactive from "../_Decorators/AccessibleFromTemplateAsNonReactive";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


@VueComponentConfiguration({ name: AdmonitionBlock.CSS_NAMESPACE })
class AdmonitionBlock extends VueComponent {

  declare public static readonly CSS_NAMESPACE: string;

  static {
    AdmonitionBlockBase.shareStaticMembers(AdmonitionBlock, { mustSkipPropertiesWithKeys: { localization: true } });
  }

  @VueProperty({
    required: false,
    get validator(): VuePropertyValidator {
      return NonEmptyStringVuePropertyValidator({
        propertyName: "title",
        componentName: AdmonitionBlock.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly title?: string;


  /* ━━━ Dismissing ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "dismissible",
        componentName: AdmonitionBlock.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly dismissible!: boolean;

  protected isDisplaying: boolean = true;

  protected onClickDismissingButton(): void {
    this.isDisplaying = false;
  }


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  declare public static readonly Themes: YDF_Component.Themes;

  @VueProperty({
    default: AdmonitionBlock.Themes.regular,
    validator: ThemeVuePropertyValidator(AdmonitionBlock)
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  declare public static readonly defineThemes: YDF_Component.ThemesDefiners.NoChildrenComponentsCase<typeof AdmonitionBlock>;

  declare public static areThemesCSS_ClassesCommon: boolean;

  declare public static readonly considerThemesAsCommon: () => typeof AdmonitionBlock;

  @VueProperty({
    default: AdmonitionBlock.areThemesCSS_ClassesCommon,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "areThemesCSS_ClassesCommon",
        componentName: AdmonitionBlock.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly areThemesCSS_ClassesCommon!: boolean;


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  declare public static readonly GeometricVariations: AdmonitionBlock.GeometricVariations;

  @VueProperty({
    default: AdmonitionBlock.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator(AdmonitionBlock)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  declare public static readonly defineGeometricVariations:
      YDF_Component.GeometricVariationDefiners.NoChildrenComponentsCase<AdmonitionBlock>;


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  declare public static readonly DecorativeVariations: AdmonitionBlock.DecorativeVariations;

  @VueProperty({
    required: true,
    validator: DecorativeVariationVuePropertyValidator(AdmonitionBlock)
  })
  protected readonly decorativeVariation!: string;

  declare public static readonly defineDecorativeVariations:
      YDF_Component.DecorativeVariationDefiners.NoChildrenComponentsCase<AdmonitionBlock>;


  /* ━━━ SVG Icon ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @VueProperty({
    default: false,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "hasDefaultSVG_Icon",
        componentName: AdmonitionBlock.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly hasDefaultSVG_Icon!: boolean;

  protected get defaultSVG_IconComponentName(): string | null {
    switch (this.decorativeVariation) {
      case AdmonitionBlock.DecorativeVariations.notice: return "PencilIcon__Circled__Filled";
      case AdmonitionBlock.DecorativeVariations.error: return "ExclamationMarkIcon__Circled__Filled";
      case AdmonitionBlock.DecorativeVariations.warning: return "ExclamationMarkIcon__Triangled__Filled";
      case AdmonitionBlock.DecorativeVariations.success: return "CheckmarkIcon__Circled__Filled";
      case AdmonitionBlock.DecorativeVariations.guidance: return "InfoSignIcon__Circled__Filled";
      case AdmonitionBlock.DecorativeVariations.question: return "QuestionMarkIcon__Circled__Filled";
      default: return null;
    }
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementModifierCSS_Classes(): Array<string> {
    return YDF_ComponentsCoordinator.generateRootElementModifierCSS_Classes({
      CSS_Namespace: AdmonitionBlock.CSS_NAMESPACE,
      activeTheme: this.theme,
      allThemes: AdmonitionBlock.Themes,
      areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
      activeGeometricVariation: this.geometricVariation,
      allGeometricVariations: AdmonitionBlock.GeometricVariations,
      activeDecorativeVariation: this.decorativeVariation,
      allDecorativeVariations: AdmonitionBlock.DecorativeVariations
    });
  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  @AccessibleFromTemplateAsNonReactive
  public static localization: AdmonitionBlockBase.Localization = AdmonitionBlockBase.localization;


  /* ━━━ ID Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Instance ID ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected readonly INSTANCE_ID: string = AdmonitionBlock.generateInstanceID();
  declare protected static counterForInstanceID_Generating: number;

  declare public static generateInstanceID: YDF_Component.InstanceID_Generator;


  /* ┅┅┅ Title HTML ID ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected TITLE_HTML_ID: string = `${ this.INSTANCE_ID }-TITLE`;


  /* ━━━ Transforming to Options API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static applyStaticMembersToInheritorTransformedToOptionAPI(
    inheritedComponentClass: typeof AdmonitionBlock
  ): typeof AdmonitionBlock {
    return Object.defineProperties(
      inheritedComponentClass,
      {
        CSS_NAMESPACE: { value: AdmonitionBlock.CSS_NAMESPACE },
        Themes: { value: AdmonitionBlock.Themes },
        defineThemes: { value: AdmonitionBlock.defineThemes },
        areThemesCSS_ClassesCommon: {
          value: AdmonitionBlock.areThemesCSS_ClassesCommon,
          writable: true
        },
        considerThemesAsCommon: { value: AdmonitionBlock.considerThemesAsCommon },
        GeometricVariations: { value: AdmonitionBlock.GeometricVariations },
        defineGeometricVariations: { value: AdmonitionBlock.defineGeometricVariations },
        DecorativeVariations: { value: AdmonitionBlock.DecorativeVariations },
        defineDecorativeVariations: { value: AdmonitionBlock.defineDecorativeVariations },
        counterForInstanceID_Generating: { value: AdmonitionBlock.counterForInstanceID_Generating },
        generateInstanceID: { value: AdmonitionBlock.generateInstanceID },
        localization: {
          value: AdmonitionBlock.localization,
          writable: true
        }
      }
    );
  }

}


namespace AdmonitionBlock {

  export type GeometricVariations = AdmonitionBlockBase.GeometricVariations;
  export type DecorativeVariations = AdmonitionBlockBase.DecorativeVariations;

}


export default AdmonitionBlock;
