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
  import {
    Component as VueComponentOptions,
    Vue as VueComponent,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";
  import { Logger } from "@yamato-daiwa/es-extensions";


  @VueComponentOptions({
    name: "ButtonWorkbench",
    components: {
      Button
    }
  })
  class ButtonWorkbench extends VueComponent {

    protected onButtonClicked(): void {
      Logger.logSuccess({
        title: "Clicked",
        description: "Button has been clicked"
      });
    }

  }

  export default transformToOptionAPI_VueComponent(ButtonWorkbench);

</script>


<style lang="stylus">

  @require "../../../../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset--YDF()
  InitialGlobalCSS_Rules--YDF()


  Button--YDF-generateStyles()

</style>
