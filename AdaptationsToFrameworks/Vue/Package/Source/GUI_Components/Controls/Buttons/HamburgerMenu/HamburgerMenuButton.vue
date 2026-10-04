<template lang="pug">

  button.HamburgerMenuButton--YDF(
    type="button"
    :class="rootElementModifierCSS_Classes"
    :aria-label="noLabel ? (accessibilityGuidance || localization.defaultAccessibilityGuidance) : null"
  )

    span.HamburgerMenuButton--YDF-Icon(role="presentation")

    span.HamburgerMenuButton--YDF-Label(
      v-if="!noLabel"
      :class="labelCSS_ModifierClass"
    ) {{ alwaysEnglishLabel ? "MENU" : (customLabel || localization.defaultLabel) }}

</template>


<script lang="ts">

  import HamburgerMenuButtonLogic from "./HamburgerMenuButtonLogic.vue";
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentConfiguration({ name: HamburgerMenuButtonLogic.CSS_NAMESPACE })
  class HamburgerMenuButton extends HamburgerMenuButtonLogic {}


  export default HamburgerMenuButtonLogic.applyStaticMembersToInheritorTransformedToOptionAPI(
    transformToOptionAPI_VueComponent(HamburgerMenuButton)
  );

</script>
