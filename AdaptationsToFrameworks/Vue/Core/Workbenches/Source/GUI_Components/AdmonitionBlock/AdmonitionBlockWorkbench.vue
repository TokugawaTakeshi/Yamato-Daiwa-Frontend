<template lang="pug">

  AdmonitionBlock(
    :title="'Title'"
    :hasDefaultSVG_Icon="true"
    :geometricVariation="AdmonitionBlock.GeometricVariations.stickyNoteLike"
    :decorativeVariation="AdmonitionBlock.DecorativeVariations.notice"
  )

</template>


<script lang="ts">

  /* ─── GUI Components ───────────────────────────────────────────────────────────────────────────────────────────── */
  import { AdmonitionBlock } from "../../../../Source";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import {
    Component as VueComponentOptions,
    Vue as VueComponent,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";

  /* ─── Utils ────────────────────────────────────────────────────────────────────────────────────────────────────── */
  import AccessibleFromTemplateAsNonReactive
      from "../../../../Source/GUI_Components/_Decorators/AccessibleFromTemplateAsNonReactive";


  @VueComponentOptions({
    name: "AdmonitionBlockWorkbench",
    components: {
      AdmonitionBlock
    }
  })
  class AdmonitionBlockWorkbench extends VueComponent {

    @AccessibleFromTemplateAsNonReactive
    protected static readonly AdmonitionBlock: typeof AdmonitionBlock = AdmonitionBlock;

  }

  export default transformToOptionAPI_VueComponent(AdmonitionBlockWorkbench);

</script>


<style lang="stylus">

  @require "../../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset--YDF()
  InitialGlobalCSS_Rules--YDF()


  AdmonitionBlock--YDF-generateStyles()

</style>
