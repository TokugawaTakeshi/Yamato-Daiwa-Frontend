/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentVueTemplate from "./Badge-LoadingPlaceholder.vue.pug";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import Badge from "../Badge.vue";

/* ─── Validations ─────────────────────────────────────────────────────────────────────────────────────── */
import type VuePropertyValidator from "../../_VuePropertiesValidators/VuePropertyValidator";
import ThemeVuePropertyValidator from "../../_VuePropertiesValidators/ThemeVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import GeometricModifiersVuePropertyValidator from "../../_VuePropertiesValidators/GeometricModifiersVuePropertyValidator";
import preventNullForOptionalVueProperty from "../../_Decorators/preventNullForOptionalVueProperty";
import BooleanVuePropertyValidator from "../../_VuePropertiesValidators/BooleanVuePropertyValidator";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import YDF_ComponentsCoordinator from "../../YDF_ComponentsCoordinator";
import { type ElementOfPseudoEnumeration } from "@yamato-daiwa/es-extensions";


@VueComponentConfiguration({
  name: "Badge--YDF__LoadingPlaceholder",
  template: componentVueTemplate
})
export default class BadgeLoadingPlaceholder extends VueComponent {

  @VueProperty({
    default: Badge.Themes.regular,
    validator: ThemeVuePropertyValidator({
      Themes: Badge.Themes,
      CSS_NAMESPACE: "Badge--YDF__LoadingPlaceholder"
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;


  @VueProperty({
    default: Badge.areThemesCSS_ClassesCommon,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "areThemesCSS_ClassesCommon",
        componentName: Badge.name,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly areThemesCSS_ClassesCommon!: boolean;


  @VueProperty({
    default: Badge.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator({
      GeometricVariations: Badge.GeometricVariations,
      CSS_NAMESPACE: "Badge--YDF__LoadingPlaceholder"
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;


  @VueProperty({
    default: (): ReadonlyArray<Badge.GeometricModifiers> => [],
    validator: GeometricModifiersVuePropertyValidator({
      GeometricModifiers: Badge.GeometricModifiers,
      CSS_NAMESPACE: "Badge--YDF__LoadingPlaceholder"
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricModifiers!: ReadonlyArray<ElementOfPseudoEnumeration<Badge.GeometricModifiers>>;


  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return YDF_ComponentsCoordinator.generateRootElementModifierCSS_Classes({
      CSS_Namespace: Badge.CSS_NAMESPACE,
      activeTheme: this.theme,
      allThemes: Badge.Themes,
      areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
      activeGeometricVariation: this.geometricVariation,
      allGeometricVariations: Badge.GeometricVariations,
      activeGeometricModifiers: this.geometricModifiers
    });

  }

}
