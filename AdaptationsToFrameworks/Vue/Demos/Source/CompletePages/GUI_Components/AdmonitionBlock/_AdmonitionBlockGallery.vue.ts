/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentVueTemplate from "./_AdmonitionBlockGallery.vue.pug";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import { AdmonitionBlock, Button } from "@yamato-daiwa/frontend-vue";
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

  /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Non-reactive ─────────────────────────────────────────────────────────────────────────────────────────────── */
  protected AdmonitionBlock!: typeof AdmonitionBlock;


  /* ━━━ Routines ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected initializeNonReactiveClassFields(): void {

    this.AdmonitionBlock = AdmonitionBlock;

    this.THEME_KEY_LABEL_PREFIX = "AdmonitionBlock__YDF.Themes.";
    this.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX = "AdmonitionBlock__YDF.GeometricVariations.";
    this.DECORATIVE_VARIATION_KEY_LABEL_PREFIX = "AdmonitionBlock__YDF.DecorativeVariations.";

  }

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
