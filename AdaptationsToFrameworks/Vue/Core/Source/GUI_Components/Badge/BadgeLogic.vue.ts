/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { BadgeBase, type YDF_Component } from "@yamato-daiwa/frontend";

/* ┅┅┅ Validations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import VuePropertyValidator from "../_VuePropertiesValidators/VuePropertyValidator";
import ThemeVuePropertyValidator from "../_VuePropertiesValidators/ThemeVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import GeometricModifiersVuePropertyValidator from "../_VuePropertiesValidators/GeometricModifiersVuePropertyValidator";
import DecorativeVariationVuePropertyValidator from "../_VuePropertiesValidators/DecorativeVariationVuePropertyValidator";
import DecorativeModifiersVuePropertyValidator from "../_VuePropertiesValidators/DecorativeModifiersVuePropertyValidator";
import NonEmptyStringVuePropertyValidator from "../_VuePropertiesValidators/NonEmptyStringVuePropertyValidator";
import BooleanVuePropertyValidator from "../_VuePropertiesValidators/BooleanVuePropertyValidator";
import preventNullForOptionalVueProperty from "../_Decorators/preventNullForOptionalVueProperty";

/* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import YDF_ComponentsCoordinator from "../YDF_ComponentsCoordinator";
import { isNonEmptyString } from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


@VueComponentConfiguration({ name: Badge.CSS_NAMESPACE })
class Badge extends VueComponent {

  declare public static readonly CSS_NAMESPACE: string;

  static {
    BadgeBase.shareStaticMembers(Badge);
  }

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
  declare public static readonly Themes: YDF_Component.Themes;

  @VueProperty({
    default: Badge.Themes.regular,
    validator: ThemeVuePropertyValidator(Badge)
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  declare public static readonly defineThemes: YDF_Component.ThemesDefiners.NoChildrenComponentsCase<typeof Badge>;

  declare public static areThemesCSS_ClassesCommon: boolean;

  declare public static readonly considerThemesAsCommon: () => typeof Badge;

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


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  declare public static readonly GeometricVariations: Badge.GeometricVariations;

  @VueProperty({
    default: Badge.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator(Badge)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  declare public static readonly defineGeometricVariations:
      YDF_Component.GeometricVariationDefiners.NoChildrenComponentsCase<Badge>;

  declare public static readonly GeometricModifiers: Badge.GeometricModifiers;

  @VueProperty({
    default: (): ReadonlyArray<Badge.GeometricModifiers> => [],
    validator: GeometricModifiersVuePropertyValidator(Badge)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricModifiers!: ReadonlyArray<Badge.GeometricModifiers>;


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  declare public static readonly DecorativeVariations: Badge.DecorativeVariations;

  @VueProperty({
    required: true,
    validator: DecorativeVariationVuePropertyValidator(Badge)
  })
  protected readonly decorativeVariation!: string;

  declare public static readonly defineDecorativeVariations:
      YDF_Component.DecorativeVariationDefiners.NoChildrenComponentsCase<Badge>;

  declare public static readonly DecorativeModifiers: Badge.DecorativeModifiers;

  @VueProperty({
    default: (): ReadonlyArray<Badge.DecorativeModifiers> => [],
    validator: DecorativeModifiersVuePropertyValidator(Badge)
  })
  protected readonly decorativeModifiers!: ReadonlyArray<Badge.DecorativeModifiers>;


  /* ┅┅┅ CSS Classes ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
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
  public static applyStaticMembersToInheritorTransformedToOptionAPI(inheritedComponentClass: typeof Badge): typeof Badge {
    return Object.defineProperties(
      inheritedComponentClass,
      {
        CSS_NAMESPACE: { value: Badge.CSS_NAMESPACE },
        Themes: { value: Badge.Themes },
        defineThemes: { value: Badge.defineThemes },
        areThemesCSS_ClassesCommon: {
          value: Badge.areThemesCSS_ClassesCommon,
          writable: true
        },
        considerThemesAsCommon: { value: Badge.considerThemesAsCommon },
        GeometricVariations: { value: Badge.GeometricVariations },
        defineGeometricVariations: { value: Badge.defineGeometricVariations },
        GeometricModifiers: { value: Badge.GeometricModifiers },
        DecorativeVariations: { value: Badge.DecorativeVariations },
        defineDecorativeVariations: { value: Badge.defineDecorativeVariations },
        DecorativeModifiers: { value: Badge.DecorativeModifiers }
      }
    );
  }

}


namespace Badge {

  export type GeometricVariations = BadgeBase.GeometricVariations;
  export type GeometricModifiers = typeof BadgeBase.GeometricModifiers;

  export type DecorativeVariations = BadgeBase.DecorativeVariations;
  export type DecorativeModifiers = typeof BadgeBase.DecorativeModifiers;

}


export default Badge;
