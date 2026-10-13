<template lang="pug">

  button.ClosingButton--YDF(
    type="button"
    :class="rootElementModifierCSS_Classes"
    :aria-label="noLabel ? (accessibilityGuidance || localization.defaultAccessibilityGuidance) : null"
  )

    span.ClosingButton--YDF-Icon(role="presentation")

    span.ClosingButton--YDF-Label(
      v-if="!noLabel"
      :class="labelCSS_ModifierClass"
    ) {{ customLabel || localization.defaultLabel }}

</template>


<script lang="ts">

  import ClosingButtonLogic from "./ClosingButtonLogic.vue";
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentConfiguration({ name: ClosingButtonLogic.CSS_NAMESPACE })
  class ClosingButton extends ClosingButtonLogic {}


  export default ClosingButtonLogic.applyStaticMembersToInheritorTransformedToOptionAPI(
    transformToOptionAPI_VueComponent(ClosingButton)
  );

</script>
