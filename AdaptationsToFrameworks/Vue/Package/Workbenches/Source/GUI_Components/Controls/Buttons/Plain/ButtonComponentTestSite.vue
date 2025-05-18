<template lang="pug">

Button(
  label="Test"
  :disabled="false"
  @click="onButtonClicked"
)

</template>


<script lang="ts">

  /* ─── GUI Components ───────────────────────────────────────────────────────────────────────────────────────────── */
  import { Button } from "../../../../../../Source";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import { Component as VueComponentOptions, Vue as VueComponent } from "vue-facing-decorator";


  @VueComponentOptions({
    components: {
      Button
    }
  })
  export default class ButtonComponentTestSite extends VueComponent {

    protected onButtonClicked(): void {
      console.log("ok!");
    }

  }

</script>


<style lang="stylus">

  @require "../../../../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset()
  InitialGlobalCSS_Rules()


  generateButtonYDF_GUI_ComponentStyles()

</style>
