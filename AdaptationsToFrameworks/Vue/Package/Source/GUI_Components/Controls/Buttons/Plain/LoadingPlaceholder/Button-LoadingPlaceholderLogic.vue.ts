/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import Button from "../ButtonLogic.vue";

/* ─── Validations ─────────────────────────────────────────────────────────────────────────────────────── */
import ThemeVuePropertyValidator from "../../../../_VuePropertiesValidators/ThemeVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../../../../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import GeometricModifiersVuePropertyValidator from "../../../../_VuePropertiesValidators/GeometricModifiersVuePropertyValidator";
import preventNullForOptionalVueProperty from "../../../../_Decorators/preventNullForOptionalVueProperty";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import YDF_ComponentsCoordinator from "../../../../YDF_ComponentsCoordinator";
import type { ElementOfPseudoEnumeration } from "@yamato-daiwa/es-extensions";


@VueComponentConfiguration({ name: "Button--YDF__LoadingPlaceholder" })
export default class ButtonLoadingPlaceholder extends VueComponent {

  @VueProperty({
    type: String,
    default: Button.Themes.regular,
    validator: ThemeVuePropertyValidator({
      Themes: Button.Themes,
      CSS_NAMESPACE: "Button--YDF__LoadingPlaceholder"
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  @VueProperty({ type: Boolean, default: Button.areThemesCSS_ClassesCommon })
  @preventNullForOptionalVueProperty
  protected readonly areThemesCSS_ClassesCommon!: boolean;


  @VueProperty({
    type: String,
    default: Button.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator({
      GeometricVariations: Button.GeometricVariations,
      CSS_NAMESPACE: "Button--YDF__LoadingPlaceholder"
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  @VueProperty({
    type: Array,
    default: (): ReadonlyArray<Button.GeometricModifiers> => [],
    validator: GeometricModifiersVuePropertyValidator({
      GeometricModifiers: Button.GeometricModifiers,
      CSS_NAMESPACE: "Button--YDF__LoadingPlaceholder"
    })
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricModifiers!: ReadonlyArray<ElementOfPseudoEnumeration<Button.GeometricModifiers>>;


  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return YDF_ComponentsCoordinator.generateRootElementModifierCSS_Classes({
      CSS_Namespace: Button.CSS_NAMESPACE,
      activeTheme: this.theme,
      allThemes: Button.Themes,
      areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
      activeGeometricVariation: this.geometricVariation,
      allGeometricVariations: Button.GeometricVariations,
      activeGeometricModifiers: this.geometricModifiers
    });
  }

}
