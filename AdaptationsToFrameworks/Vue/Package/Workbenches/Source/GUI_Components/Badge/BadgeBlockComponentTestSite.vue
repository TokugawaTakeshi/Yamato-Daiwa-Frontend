<template lang="pug">

</template>


<script lang="ts">

  /* ─── GUI Components ───────────────────────────────────────────────────────────────────────────────────────────── */
  import { Badge } from "../../../../Source";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import { Component as VueComponentOptions, Vue as VueComponent } from "vue-facing-decorator";


  @VueComponentOptions({
    components: {
      Badge
    }
  })
  export default class BadgeComponentTestSite extends VueComponent {}

</script>


<style lang="stylus">

  @require "../../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset()
  InitialGlobalCSS_Rules()


  generateBadgeYDF_GUI_ComponentStyles()

</style>
