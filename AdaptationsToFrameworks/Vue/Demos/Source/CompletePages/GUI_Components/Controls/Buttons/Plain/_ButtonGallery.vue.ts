/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentVueTemplate from "./_ButtonGallery.vue.pug";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  Button,
  ButtonLoadingPlaceholder,
  HeartIcon__Filled,
  MenuIcon__ThreeDots__Horizontal
} from "@yamato-daiwa/frontend-vue";
import ThemesShowcase from "../../../../../ThemesShowcase.vue";
import Gallery from "../../../../../Gallery.vue";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import { Component as VueComponentOptions } from "vue-facing-decorator";

/* ─── Utils ──────────────────────────────────────────────────────────────────────────────────────────────────────── */
import { getRandomString } from "@yamato-daiwa/es-extensions";


@VueComponentOptions({
  name: "ButtonGallery",
  template: componentVueTemplate,
  components: {
    Button,
    ButtonLoadingPlaceholder,
    ThemesShowcase,
    HeartIcon: HeartIcon__Filled,
    MenuIcon__ThreeDots__Horizontal
  }
})
class ButtonGallery extends Gallery<ButtonGallery.PartialsFlags> {

  /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected Button!: typeof Button;

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


  /* ─── Methods ──────────────────────────────────────────────────────────────────────────────────────────────────── */
  /* eslint-disable-next-line @typescript-eslint/class-methods-use-this --
   * The static members are not visible from the template. */
  protected get mustSkipDecorativeVariation(): (
    iterationData: ThemesShowcase.DecorativeVariationSkippingCondition.IterationData
  ) => boolean {
    return (
      { decorativeVariation, geometricVariation }: ThemesShowcase.DecorativeVariationSkippingCondition.IterationData
    ): boolean =>
        (
          decorativeVariation.value === Button.DecorativeVariations.linkLike &&
          geometricVariation.value !== Button.GeometricVariations.linkLike
        ) ||
        (
          decorativeVariation.value !== Button.DecorativeVariations.linkLike &&
          geometricVariation.value === Button.GeometricVariations.linkLike
        );
  }


  /* ━━━ Routines ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected initializeNonReactiveClassFields(): void {

    this.Button = Button;

    this.THEME_KEY_LABEL_PREFIX = "Button__YDF.Themes.";
    this.GEOMETRIC_VARIATION_KEY_LABEL_PREFIX = "Button__YDF.GeometricVariations.";
    this.DECORATIVE_VARIATION_KEY_LABEL_PREFIX = "Button__YDF.DecorativeVariations.";

    this.textOverflowSafetyTest = `OVERFLOW_TEST-gh${ getRandomString({ minimalCharactersCount: 100 }) }`;

  }

}


namespace ButtonGallery {

  export type PartialsFlags = Readonly<{
    minimal?: boolean;
    longLabels?: boolean;
    prependedSVG_Icons?: boolean;
    appendedSVG_Icons?: boolean;
    loneSVG_Icons?: boolean;
    customIcons?: boolean;
    pillShapeGeometricModifier?: boolean;
    squareShapeGeometricModifier?: boolean;
    squareShapeUnlessOverflowedGeometricModifier?: boolean;
    singleLineGeometricModifier?: boolean;
    noLeftBorderAndRoundingsGeometricModifier?: boolean;
    noRightBorderAndRoundingsGeometricModifier?: boolean;
    noTopBorderAndRoundingsGeometricModifier?: boolean;
    noBottomBorderAndRoundingsGeometricModifier?: boolean;
    noRoundingsGeometricModifier?: boolean;
    horizontallyShrinkableGeometricModifier?: boolean;
    bordersDisguisingDecorativeModifier?: boolean;
    noBackgroundDecorativeModifier?: boolean;
    noBackgroundInDefaultStateDecorativeModifier?: boolean;
    loadingPlaceholder?: boolean;
  }>;

}


export default ButtonGallery;
