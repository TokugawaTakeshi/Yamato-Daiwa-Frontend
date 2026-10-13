<template lang="pug">

ul.ThemesShowcase--YDF

  li(
    v-for="(themeValue, themeKey) of themes"
    :key="`THEME-${ themeKey }`"
  )

    span.ThemesShowcase--YDF-Label {{ themeKeyLabelPrefix }}{{ themeKey }}

    ul.ThemesShowcase--YDF-ChildList

      li(
        v-for="(geometricVariationValue, geometricVariationKey) of geometricVariations"
        :key="`GEOMETRIC_VARIATION-${ themeKey }-${ geometricVariationKey }`"
      )

        span.ThemesShowcase--YDF-Label {{ geometricVariationLabelPrefix }}{{ geometricVariationKey }}

        component.ThemesShowcase--YDF-ChildList(
          :is="decorativeVariationsWrapperTag"
          :class="decorativeVariationsWrapperAdditionalCSS_Classes"
        )

          template(
            v-for="(decorativeVariationValue, decorativeVariationKey) of decorativeVariations"
            :key="`DECORATIVE_VARIATION-${ themeKey }-${ decorativeVariationKey }`"
          )

            li(
              v-if="decorativeVariationsWrapperTag === 'ul'"
            )

              span.ThemesShowcase--YDF-Label {{ decorativeVariationLabelPrefix }}{{ decorativeVariationKey }}

              slot(
                :theme="{ key: themeKey, value: themeValue }"
                :geometricVariation="{ key: geometricVariationKey, value: geometricVariationValue }"
                :decorativeVariation="{ key: decorativeVariationKey, value: decorativeVariationValue }"
              )

            template(
              v-else
            )

              slot(
                :theme="{ key: themeKey, value: themeValue }"
                :geometricVariation="{ key: geometricVariationKey, value: geometricVariationValue }"
                :decorativeVariation="{ key: decorativeVariationKey, value: decorativeVariationValue }"
              )

</template>


<script lang="ts">

  import {
    Component as VueComponentOptions,
    Vue as VueComponent,
    Prop as VueProperty,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentOptions({ name: "ThemesShowcase--YDF" })
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
      default: "ul"
    })
    protected readonly decorativeVariationsWrapperTag!: string;

    @VueProperty({
      type: Array,
      required: false
    })
    protected readonly decorativeVariationsWrapperAdditionalCSS_Classes?: ReadonlyArray<string>;

  }

  export default transformToOptionAPI_VueComponent(ThemesShowcase);

</script>
