/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentVueTemplate from "./_${COMPONENT_NAME}Gallery.vue.pug";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import { ${COMPONENT_NAME} } from "@yamato-daiwa/frontend-vue";
import Gallery from "../../../Gallery.vue";
import ThemesShowcase from "../../../ThemesShowcase.vue";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import { Component as VueComponentConfiguration } from "vue-facing-decorator";


@VueComponentConfiguration({
  name: "${COMPONENT_NAME}Gallery",
  template: componentVueTemplate,
  components: {
    ${COMPONENT_NAME},
    ThemesShowcase
  }
})
class ${COMPONENT_NAME}Gallery extends Gallery<${COMPONENT_NAME}Gallery.PartialsFlags> {

  /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Non-reactive ─────────────────────────────────────────────────────────────────────────────────────────────── */
  protected ${COMPONENT_NAME}!: typeof ${COMPONENT_NAME};


  /* ━━━ Routines ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected initializeNonReactiveClassFields(): void {

    this.${COMPONENT_NAME} = ${COMPONENT_NAME};

    this.THEME_KEY_LABEL_PREFIX = "${COMPONENT_NAME}__YDF.Themes.";
    this.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX = "${COMPONENT_NAME}__YDF.GeometricVariations.";
    this.DECORATIVE_VARIATION_KEY_LABEL_PREFIX = "${COMPONENT_NAME}__YDF.DecorativeVariations.";

  }

}


namespace ${COMPONENT_NAME}Gallery {

  export type PartialsFlags = Readonly<{
    minimal?: boolean;
  }>;

}


export default ${COMPONENT_NAME}Gallery;
