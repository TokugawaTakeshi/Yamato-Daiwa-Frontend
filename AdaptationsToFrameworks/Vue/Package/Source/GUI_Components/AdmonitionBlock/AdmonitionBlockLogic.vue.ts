/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type { AdmonitionBlockLocalization } from "@yamato-daiwa/frontend";
import { admonitionBlockYDF_GUI_ComponentLocalization__english } from "@yamato-daiwa/frontend";

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

  public static readonly CSS_NAMESPACE: string = "AdmonitionBlock--YDF";


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
  public static readonly Themes: AdmonitionBlock.Themes = { regular: "REGULAR" };

  @VueProperty({
    default: AdmonitionBlock.Themes.regular,
    validator: ThemeVuePropertyValidator(AdmonitionBlock)
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof AdmonitionBlock {
    return YDF_ComponentsCoordinator.defineThemes(themesNames, AdmonitionBlock);
  }

  protected static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    AdmonitionBlock.areThemesCSS_ClassesCommon = true;
  }

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


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly GeometricVariations: AdmonitionBlock.GeometricVariations = {
    regular: "REGULAR",
    stickyNoteLike: "STICKY_NOTE_LIKE"
  };

  @VueProperty({
    default: AdmonitionBlock.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator(AdmonitionBlock)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof AdmonitionBlock {
    return YDF_ComponentsCoordinator.defineGeometricVariations(geometricVariationsNames, AdmonitionBlock);
  }


  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
  public static readonly DecorativeVariations: AdmonitionBlock.DecorativeVariations = {
    notice: "NOTICE",
    error: "ERROR",
    warning: "WARNING",
    success: "SUCCESS",
    guidance: "GUIDANCE",
    question: "QUESTION"
  };

  @VueProperty({
    required: true,
    validator: DecorativeVariationVuePropertyValidator(AdmonitionBlock)
  })
  protected readonly decorativeVariation!: string;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof AdmonitionBlock {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(decorativeVariationsNames, AdmonitionBlock);
  }


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
  public static localization: AdmonitionBlockLocalization = admonitionBlockYDF_GUI_ComponentLocalization__english;


  /* ━━━ ID Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Instance ID ──────────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly INSTANCE_ID: string = AdmonitionBlock.generateInstanceID();
  protected static counterForInstanceID_Generating: number = 0;

  public static generateInstanceID(): string {
    AdmonitionBlock.counterForInstanceID_Generating++;
    return `ADMONITION_BLOCK--YDF-${ AdmonitionBlock.counterForInstanceID_Generating }`;
  }


  /* ─── Title HTML ID ────────────────────────────────────────────────────────────────────────────────────────────── */
  protected TITLE_HTML_ID: string = `${ this.INSTANCE_ID }-TITLE`;


  /* ━━━ Transforming to Options API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static applyStaticMembersToInheritorTransformedToOptionAPI(inheritedComponent: object): object {
    return Object.defineProperties(
      inheritedComponent,
      {
        CSS_NAMESPACE: { value: AdmonitionBlock.CSS_NAMESPACE },
        Themes: { value: AdmonitionBlock.Themes },
        defineThemes: { value: AdmonitionBlock.defineThemes },
        GeometricVariations: { value: AdmonitionBlock.GeometricVariations },
        defineGeometricVariations: { value: AdmonitionBlock.defineGeometricVariations },
        DecorativeVariations: { value: AdmonitionBlock.DecorativeVariations },
        defineDecorativeVariations: { value: AdmonitionBlock.defineDecorativeVariations },
        localization: { value: AdmonitionBlock.localization }
      }
    );
  }

}


namespace AdmonitionBlock {

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    readonly stickyNoteLike: "STICKY_NOTE_LIKE";
    [variationName: string]: string;
  };

  export type DecorativeVariations = {
    readonly notice: "NOTICE";
    readonly error: "ERROR";
    readonly warning: "WARNING";
    readonly success: "SUCCESS";
    readonly guidance: "GUIDANCE";
    readonly question: "QUESTION";
    [variationName: string]: string;
  };

}


export default AdmonitionBlock;
