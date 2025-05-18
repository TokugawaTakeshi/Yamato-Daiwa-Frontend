/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentVueTemplate from "./_ValidatableControlShellGallery.vue.pug";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import { ValidatableControlShell } from "@yamato-daiwa/frontend-vue";
import Gallery from "../../../../Gallery.vue";
import ThemesShowcase from "../../../../ThemesShowcase.vue";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import { Component as VueComponentConfiguration } from "vue-facing-decorator";


@VueComponentConfiguration({
  name: "ValidatableControlShellGallery",
  template: componentVueTemplate,
  components: {
    ValidatableControlShell,
    ThemesShowcase
  }
})
class ValidatableControlShellGallery extends Gallery<ValidatableControlShellGallery.PartialsFlags> {

  /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Non-reactive ─────────────────────────────────────────────────────────────────────────────────────────────── */
  protected ValidatableControlShell!: typeof ValidatableControlShell;


  /* ━━━ Routines ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected initializeNonReactiveClassFields(): void {

    this.ValidatableControlShell = ValidatableControlShell;

    this.THEME_KEY_LABEL_PREFIX = "ValidatableControlShell__YDF.Themes.";
    this.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX = "ValidatableControlShell__YDF.GeometricVariations.";
    this.DECORATIVE_VARIATION_KEY_LABEL_PREFIX = "ValidatableControlShell__YDF.DecorativeVariations.";

  }

}


namespace ValidatableControlShellGallery {

  export type PartialsFlags = Readonly<{
    minimal?: boolean;
  }>;

}


export default ValidatableControlShellGallery;
