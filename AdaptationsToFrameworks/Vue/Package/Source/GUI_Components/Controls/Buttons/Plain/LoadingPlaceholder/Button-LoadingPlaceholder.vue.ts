/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import Button from "../Button.vue";
import componentVueTemplate from "./Button-LoadingPlaceholder.vue.pug";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import { isString, isElementOfEnumeration } from "@yamato-daiwa/es-extensions";
import ComponentsAuxiliaries from "../../../../ComponentsAuxiliaries";


@VueComponentConfiguration({
  name: "Button--YDF-LoadingPlaceholder",
  template: componentVueTemplate
})
export default class ButtonLoadingPlaceholder extends VueComponent {

  @VueProperty({
    type: String,
    default: Button.Themes.regular,
    validator: (rawValue: string): boolean => isElementOfEnumeration(rawValue, Button.Themes)
  })
  protected readonly theme!: string;

  @VueProperty({ type: Boolean, default: Button.areThemesCSS_ClassesCommon })
  protected readonly areThemesCSS_ClassesCommon!: boolean;


  @VueProperty({
    type: String,
    default: Button.GeometricVariations.regular,
    validator: (rawValue: string): boolean => isElementOfEnumeration(rawValue, Button.GeometricVariations)
  })
  protected readonly geometricVariation!: string;

  @VueProperty({
    type: Array,
    default: (): ReadonlyArray<string> => [],
    validator: (rawValue: ReadonlyArray<unknown>): boolean =>
        rawValue.every(
          (element: unknown): boolean => isString(element) && isElementOfEnumeration(element, Button.GeometricModifiers)
        )
  })
  protected readonly geometricModifiers!: ReadonlyArray<Button.GeometricModifiers>;


  protected get rootElementModifierCSS_Classes(): ReadonlyArray<string> {
    return [

      ...ComponentsAuxiliaries.addThemeCSS_ClassToArrayIfMust({
        themeValue: this.theme,
        allThemes: Button.Themes,
        areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
        CSS_Namespace: Button.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.addGeometricVariationCSS_ClassToArrayIfMust({
        geometricVariation: this.geometricVariation,
        allGeometricVariations: Button.GeometricVariations,
        CSS_Namespace: Button.CSS_NAMESPACE
      }),

      ...ComponentsAuxiliaries.
          generateDemandedGeometricModifiersCSS_Classes(Button.CSS_NAMESPACE, this.geometricModifiers)

    ];
  }

}
