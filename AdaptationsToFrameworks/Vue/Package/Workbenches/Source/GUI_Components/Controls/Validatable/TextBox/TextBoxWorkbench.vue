<template lang="pug">

  TextBox(
    label="Sample"
    guidance="Please input something"
  )

</template>


<script lang="ts">

  /* ─── GUI Components ───────────────────────────────────────────────────────────────────────────────────────────── */
  import TextBox from "../../../../../../Source/GUI_Components/Controls/Validatables/TextBox/TextBox.vue";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import { Component as VueComponentOptions, Vue as VueComponent } from "vue-facing-decorator";


  @VueComponentOptions({
    components: {
      TextBox
    }
  })
  export default class TextBoxWorkbench extends VueComponent {}

</script>


<style lang="stylus">

  @require "../../../../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset()
  InitialGlobalCSS_Rules()


  generateValidatableControlShellYDF_GUI_ComponentStyles()
  generateTextBoxYDF_GUI_ComponentStyles()

</style>
