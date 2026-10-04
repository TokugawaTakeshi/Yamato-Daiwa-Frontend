<template lang="pug">

  span.Button--YDF.Button--YDF__LoadingPlaceholder(
    :class="rootElementModifierCSS_Classes"
  )

</template>


<script lang="ts">

  import ButtonLoadingPlaceholderLogic from "./Button-LoadingPlaceholderLogic.vue";
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentConfiguration({ name: "Button--YDF__LoadingPlaceholder" })
  class ButtonLoadingPlaceholder extends ButtonLoadingPlaceholderLogic {}


  export default transformToOptionAPI_VueComponent(ButtonLoadingPlaceholder);

</script>
