<template lang="pug">

  ValidatableControlShell
    .DummyCore Core Element Here 2

</template>


<script lang="ts">

  /* ─── GUI Components ───────────────────────────────────────────────────────────────────────────────────────────── */
  import { ValidatableControlShell } from "../../../../../Source";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import {
    Component as VueComponentOptions,
    Vue as VueComponent,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentOptions({
    name: "ValidatableControlShellTestSite",
    components: {
      ValidatableControlShell
    }
  })
  class ValidatableControlShellTestSite extends VueComponent {}

  export default transformToOptionAPI_VueComponent(ValidatableControlShellTestSite);

</script>


<style lang="stylus" scoped>

  @require "../../../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset()
  InitialGlobalCSS_Rules()


  ValidatableControlShell--YDF-generateStyles()


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
