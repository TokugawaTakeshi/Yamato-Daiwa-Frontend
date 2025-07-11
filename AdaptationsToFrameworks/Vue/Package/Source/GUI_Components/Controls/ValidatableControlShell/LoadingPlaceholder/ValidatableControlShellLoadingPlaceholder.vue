<template lang="pug">

  .ValidatableControlShell--YDF(
    class=rootElementModifierCSS_Classes
  )

    .ValidatableControlShell--YDF-Header(
      v-if="label || badge"
    )

      .ValidatableControlShell--YDF-Label.ValidatableControlShell--YDF-Label__LoadingPlaceholder(
        v-if="label"
      )

      BadgeLoadingPlaceholder.ValidatableControlShell--YDF-Badge(
        v-if="badge"
       :theme="badgeTheme"
       :geometricVariation="badgeGeometricVariation"
       :geometricModifiers="[ Badge.GeometricModifiers.pillShape ]"
      )

    .ValidatableControlShell--YDF-Guidance.ValidatableControlShell--YDF-Guidance__LoadingPlaceholder(
      v-if="guidance"
    )

    .ValidatableControlShell--YDF-MainSlotCustomizableWrapper(
      class= mainSlotWrapperAdditionalCSS_Classes
    )

      slot

</template>


<script lang="ts">

  import BadgeLoadingPlaceholder from "./ValidatableControlShellLoadingPlaceholderLogic.vue";
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentConfiguration({ name: "ValidatableControlShell--YDF__LoadingPlaceholder" })
  class ValidatableControlShellLoadingPlaceholder extends BadgeLoadingPlaceholder {}


  export default transformToOptionAPI_VueComponent(ValidatableControlShellLoadingPlaceholder);

</script>
