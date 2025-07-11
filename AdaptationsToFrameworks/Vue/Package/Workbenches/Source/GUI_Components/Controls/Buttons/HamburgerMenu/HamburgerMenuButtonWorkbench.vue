<template lang="pug">

  HamburgerMenuButton(
    label="Test"
    :disabled="false"
    @click="onButtonClicked"
  )

</template>


<script lang="ts">

  /* ─── GUI Components ───────────────────────────────────────────────────────────────────────────────────────────── */
  import { HamburgerMenuButton } from "../../../../../../Source";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import {
    Component as VueComponentOptions,
    Vue as VueComponent,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";
  import { Logger } from "@yamato-daiwa/es-extensions";


  @VueComponentOptions({
    name: "HamburgerMenuButtonWorkbench",
    components: {
      HamburgerMenuButton
    }
  })
  class HamburgerMenuButtonWorkbench extends VueComponent {

    public mounted(): void {
      Logger.logGeneric("Button clicked");
    }

    protected onButtonClicked(): void {
      Logger.logSuccess({
        title: "Clicked",
        description: "Button has been clicked"
      });
    }

  }

  export default transformToOptionAPI_VueComponent(HamburgerMenuButtonWorkbench);

</script>


<style lang="stylus">

  @require "../../../../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset()
  InitialGlobalCSS_Rules()


  HamburgerMenuButton--YDF-generateStyles()

</style>
