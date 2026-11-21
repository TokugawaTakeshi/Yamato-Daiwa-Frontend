<template lang="pug">

  button(
    type="button"
    @click="displayBlockingLoadingOverlay"
  ) Display

  BlockingLoadingOverlay

</template>


<script lang="ts">

  import { BlockingLoadingOverlay } from "../../../../Source";
  import {
    Component as VueComponentOptions,
    Vue as VueComponent,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentOptions({
    name: "BlockingLoadingOverlayWorkbench",
    components: {
      BlockingLoadingOverlay
    }
  })
  class BlockingLoadingOverlayWorkbench extends VueComponent {

    protected displayBlockingLoadingOverlay(): void {
      BlockingLoadingOverlay.display({ customAccessibilityGuidance: "Loading in progress" });
    }

  }


  export default transformToOptionAPI_VueComponent(BlockingLoadingOverlayWorkbench);

</script>


<style lang="stylus">

  @require "../../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset--YDF()
  InitialGlobalCSS_Rules--YDF()


  LoadingIndicator--YDF-generateStyles()
  BlockingLoadingOverlay--YDF-generateStyles()


  BlockingLoadingOverlay--YDF-setCustomColorOfInnerLoadingIndicator(green)

</style>
