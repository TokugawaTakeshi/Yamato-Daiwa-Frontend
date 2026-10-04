<template lang="pug">

  span.Badge--YDF.Badge--YDF__LoadingPlaceholder(
    :class="rootElementModifierCSS_Classes"
  )

</template>


<script lang="ts">

  import BadgeLoadingPlaceholderLogic from "./Badge-LoadingPlaceholderLogic.vue";
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentConfiguration({ name: "Badge--YDF__LoadingPlaceholder" })
  class BadgeLoadingPlaceholder extends BadgeLoadingPlaceholderLogic {}


  export default transformToOptionAPI_VueComponent(BadgeLoadingPlaceholder);

</script>
