/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentVueTemplate from "./ThemesShowcase.vue.pug";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import { Component as VueComponentOptions, Vue as VueComponent, Prop as VueProperty } from "vue-facing-decorator";


@VueComponentOptions({
  template: componentVueTemplate,
  name: "ThemesShowcase--YDF"
})
class ThemesShowcase extends VueComponent {

  @VueProperty({
    type: Object,
    required: true
  })
  protected readonly themes!: Readonly<{ [themeKey: string]: string; }>;

  @VueProperty({
    type: String,
    required: false
  })
  protected readonly themeKeyLabelPrefix?: string;


  @VueProperty({
    type: Object,
    required: true
  })
  protected readonly geometricVariations!: Readonly<{ [themeKey: string]: string; }>;

  @VueProperty({
    type: String,
    required: false
  })
  protected readonly geometricVariationLabelPrefix?: string;


  @VueProperty({
    type: Object,
    required: true
  })
  protected readonly decorativeVariations!: Readonly<{ [themeKey: string]: string; }>;

  @VueProperty({
    type: String,
    required: false
  })
  protected readonly decorativeVariationLabelPrefix?: string;

  @VueProperty({
    type: String,
    default: "dl"
  })
  protected readonly decorativeVariationsWrapperTag!: string;

  @VueProperty({
    type: [ Array, String ],
    required: false
  })
  protected readonly decorativeVariationsWrapperAdditionalCSS_Classes?: ReadonlyArray<string> | string;

  @VueProperty({
    type: [ Array, String ],
    required: false
  })
  protected readonly decorativeVariationsListItemAdditionalCSS_Classes?: ReadonlyArray<string> | string;

  @VueProperty({
    type: Function,
    default: (): boolean => false
  })
  protected readonly decorativeVariationSkippingCondition!: (
    compoundParameter: ThemesShowcase.DecorativeVariationSkippingCondition.IterationData
  ) => boolean;

}


namespace ThemesShowcase {

  export namespace DecorativeVariationSkippingCondition {

    export type IterationData = Readonly<{
      [
        key in
            "theme" |
            "geometricVariation" |
            "decorativeVariation"
      ]: Readonly<{
        key: string;
        value: string;
      }>
    }>;

  }

}


export default ThemesShowcase;
