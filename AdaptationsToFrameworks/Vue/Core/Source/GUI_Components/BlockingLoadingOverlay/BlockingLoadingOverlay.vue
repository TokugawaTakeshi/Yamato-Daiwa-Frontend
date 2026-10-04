<template lang="pug">

  .BlockingLoadingOverlay--YDF(
    v-if="isDisplaying"
    role="dialog"
  )

    p.BlockingLoadingOverlay--YDF-VisuallyHiddenMessage= accessibilityMessage

    LoadingIndicator.ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item-LoadingIndicator(
      :type="loadingIndicatorType"
    )

</template>


<script lang="ts">

  /* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  import BlockingLoadingOverlayLogic from "./BlockingLoadingOverlayLogic.vue";

  /* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  import LoadingIndicator from "../Controls/LoadingIndicator/LoadingIndicator.vue";

  /* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";
  /* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


  @VueComponentConfiguration({
    name: BlockingLoadingOverlayLogic.CSS_NAMESPACE,
    components: {
      LoadingIndicator
    }
  })
  class BlockingLoadingOverlay extends BlockingLoadingOverlayLogic {}


  export default BlockingLoadingOverlay.applyStaticMembersToInheritorTransformedToOptionAPI(
    transformToOptionAPI_VueComponent(BlockingLoadingOverlay)
  );

</script>
