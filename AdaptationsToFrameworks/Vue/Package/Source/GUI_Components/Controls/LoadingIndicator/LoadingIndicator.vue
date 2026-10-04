<template lang="pug">

  .LoadingIndicator--YDF__VariableWidthArcSpinnerType(
    v-if="type === Types.variableWidthArcSpinner"
  )
    div
    div
    div
    div

  .LoadingIndicator--YDF__TwoConstantWidthArcsSpinnerType(
    v-else-if="type === Types.twoConstantWidthArcsSpinner"
  )

</template>


<script lang="ts">

  import LoadingIndicatorLogic from "./LoadingIndicatorLogic.vue";
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentConfiguration({ name: LoadingIndicatorLogic.CSS_NAMESPACE })
  class LoadingIndicator extends LoadingIndicatorLogic {}


  export default LoadingIndicatorLogic.applyStaticMembersToInheritorTransformedToOptionAPI(
    transformToOptionAPI_VueComponent(LoadingIndicator)
  );

</script>
