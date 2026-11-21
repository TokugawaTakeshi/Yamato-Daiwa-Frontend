/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentVueTemplate from "./_AdmonitionBlockGallery.vue.pug";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  AdmonitionBlock,
  Button,
  AccessibleFromTemplateAsNonReactive,
  NonReactiveVueData
} from "@yamato-daiwa/frontend-vue";
import Gallery from "../../../Gallery.vue";
import ThemesShowcase from "../../../ThemesShowcase.vue";
import ExclamationMarkIcon__Squared from "./ExclamationMark__Squared--MaterialDesignIcon.vue";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import { Component as VueComponentConfiguration } from "vue-facing-decorator";


@VueComponentConfiguration({
  name: "AdmonitionBlockGallery",
  template: componentVueTemplate,
  components: {
    AdmonitionBlock,
    Button,
    ThemesShowcase,
    ExclamationMarkIcon__Squared
  }
})
class AdmonitionBlockGallery extends Gallery<AdmonitionBlockGallery.PartialsFlags> {

  @AccessibleFromTemplateAsNonReactive
  protected static AdmonitionBlock: typeof AdmonitionBlock = AdmonitionBlock;

  @NonReactiveVueData({ initialValue: "AdmonitionBlock__YDF.Themes." })
  protected readonly THEME_KEY_LABEL_PREFIX!: string;

  @NonReactiveVueData({ initialValue: "AdmonitionBlock__YDF.GeometricVariations." })
  protected readonly GEOMETRIC_VARIATION_KEY_LABEL_PREFIX!: string;

  @NonReactiveVueData({ initialValue: "AdmonitionBlock__YDF.DecorativeVariations." })
  protected readonly DECORATIVE_VARIATION_KEY_LABEL_PREFIX!: string;

}


namespace AdmonitionBlockGallery {

  export type PartialsFlags = Readonly<{
    minimal?: boolean;
    titles?: boolean;
    defaultSVG_Icons?: boolean;
    customSVG_Icons?: boolean;
    titlesAndSVG_Icons?: boolean;
    dismissingButton?: boolean;
    centeredButton?: boolean;
    actionBar?: boolean;
  }>;

}


export default AdmonitionBlockGallery;
