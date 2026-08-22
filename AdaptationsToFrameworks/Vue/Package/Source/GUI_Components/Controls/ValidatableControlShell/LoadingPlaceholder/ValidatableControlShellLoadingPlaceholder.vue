<template lang="pug">

  .ValidatableControlShell--YDF.ValidatableControlShell--YDF__LoadingPlaceholder(
    :class="rootElementModifierCSS_Classes"
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

  import ValidatableControlShellLoadingPlaceholderLogic from "./ValidatableControlShellLoadingPlaceholderLogic.vue";
  import BadgeLoadingPlaceholder from "../../../Badge/LoadingPlaceholder/Badge-LoadingPlaceholder.vue";
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentConfiguration({
    name: "ValidatableControlShell--YDF__LoadingPlaceholder",
    components: {
      BadgeLoadingPlaceholder
    }
  })
  class ValidatableControlShellLoadingPlaceholder extends ValidatableControlShellLoadingPlaceholderLogic {}


  export default transformToOptionAPI_VueComponent(ValidatableControlShellLoadingPlaceholder);

</script>
