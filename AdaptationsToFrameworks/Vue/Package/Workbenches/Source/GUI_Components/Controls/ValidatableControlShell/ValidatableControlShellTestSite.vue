<template lang="pug">

  ValidatableControlShell
    .DummyCore Core Element Here 2

</template>


<script lang="ts">

  /* ─── GUI Components ───────────────────────────────────────────────────────────────────────────────────────────── */
  import { ValidatableControlShell } from "../../../../../Source";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import { Component as VueComponentOptions, Vue as VueComponent } from "vue-facing-decorator";


  @VueComponentOptions({
    components: {
      ValidatableControlShell
    }
  })
  export default class ValidatableControlShellTestSite extends VueComponent {}

</script>


<style lang="stylus" scoped>

  @require "../../../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset()
  InitialGlobalCSS_Rules()


  generateValidatableControlShellYDF_GUI_ComponentStyles()


  .DummyCore

    display flex
    align-items center

    width 200px
    height 2rem
    font-size 1rem

    border-width 4px
    border-radius 4px
    padding 0.2rem 0.4rem

    border-style dashed
    border-color mediumblue
    font-weight bold
    color mediumblue

    background-color: alpha(mediumblue, 30%)

</style>
