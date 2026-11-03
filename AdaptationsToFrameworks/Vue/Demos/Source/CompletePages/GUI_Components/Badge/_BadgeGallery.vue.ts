/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentVueTemplate from "./_BadgeGallery.vue.pug";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  Badge,
  BadgeLoadingPlaceholder,
  CalendarIcon,
  AccessibleFromTemplateAsNonReactive,
  NonReactiveVueData
} from "@yamato-daiwa/frontend-vue";
import ThemesShowcase from "../../../ThemesShowcase.vue";
import Gallery from "../../../Gallery.vue";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import { Component as VueComponentOptions } from "vue-facing-decorator";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import { getRandomString } from "@yamato-daiwa/es-extensions";


@VueComponentOptions({
  name: "BadgeGallery",
  template: componentVueTemplate,
  components: {
    Badge,
    BadgeLoadingPlaceholder,
    CalendarIcon,
    ThemesShowcase
  }
})
class BadgeGallery extends Gallery<BadgeGallery.PartialsFlags> {

  /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Non-reactive ─────────────────────────────────────────────────────────────────────────────────────────────── */
  @AccessibleFromTemplateAsNonReactive
  protected static Badge: typeof Badge = Badge;

  @NonReactiveVueData({ initialValue: "Badge__YDF.Themes." })
  protected THEME_KEY_LABEL_PREFIX!: string;

  @NonReactiveVueData({ initialValue: "Badge__YDF.GeometricVariations." })
  protected GEOMETRIC_VARIATION_KEY_LABEL_PREFIX!: string;

  @NonReactiveVueData({ initialValue: "Badge__YDF.DecorativeVariations." })
  protected DECORATIVE_VARIATION_KEY_LABEL_PREFIX!: string;

  @NonReactiveVueData({ initialValue: new Date().toLocaleDateString() })
  protected todayDate__localized__stringified!: string;

  @NonReactiveVueData({ initialValue: `OVERFLOW_TEST-gh${ getRandomString({ minimalCharactersCount: 100 }) }` })
  protected textOverflowSafetyTest!: string;


  /* ─── Computed ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected mustRenderAtLeastOnePartialRelatedWithGeometricModifier(): boolean {
    return this.partialsFlags.pillShapeGeometricModifier === true ||
        this.partialsFlags.singleLineGeometricModifier === true;
  }

  protected mustRenderAtLeastOnePartialRelatedWithDecorativeModifier(): boolean {
    return this.partialsFlags.bordersDisguisingDecorativeModifier === true ||
        this.partialsFlags.noBackgroundDecorativeModifier === true;
  }

}


namespace BadgeGallery {

  export type PartialsFlags = Readonly<{
    minimal?: boolean;
    keysAndValues?: boolean;
    longLabels?: boolean;
    iconsAndKeysAndValues?: boolean;
    iconsAndValues?: boolean;
    pillShapeGeometricModifier?: boolean;
    singleLineGeometricModifier?: boolean;
    bordersDisguisingDecorativeModifier?: boolean;
    noBackgroundDecorativeModifier?: boolean;
    loadingPlaceholder?: boolean;
  }>;

}


export default BadgeGallery;
