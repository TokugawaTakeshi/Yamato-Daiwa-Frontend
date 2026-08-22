/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentVueTemplate from "./_BadgeGallery.vue.pug";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import { Badge, BadgeLoadingPlaceholder, CalendarIcon } from "@yamato-daiwa/frontend-vue";
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
  protected Badge!: typeof Badge;

  protected todayDate__localized__stringified!: string;

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


  /* ━━━ Routines ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected initializeNonReactiveClassFields(): void {

    this.Badge = Badge;

    this.THEME_KEY_LABEL_PREFIX = "Badge__YDF.Themes.";
    this.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX = "Badge__YDF.GeometricVariations.";
    this.DECORATIVE_VARIATION_KEY_LABEL_PREFIX = "Badge__YDF.DecorativeVariations.";

    this.todayDate__localized__stringified = new Date().toLocaleDateString();

    this.textOverflowSafetyTest = `OVERFLOW_TEST-gh${ getRandomString({ minimalCharactersCount: 100 }) }`;

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
