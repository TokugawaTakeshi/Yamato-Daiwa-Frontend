<template lang="pug">

component.OverflowSafeSingleLineLabel(
  :is="rootElementTag"
)
  span.OverflowSafeSingleLineLabel-TextWithIncreasedLineHeight
    slot

</template>


<script lang="ts">

  import {
    Component as VueComponentOptions,
    Vue as VueComponent,
    Prop as VueProperty,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentOptions({ name: "OverflowSafeSingleLineLabel--YDF" })
  class OverflowSafeSingleLineLabel extends VueComponent {

    @VueProperty({ type: String, default: "div" })
    protected readonly rootElementTag!: string;

  }

  export default transformToOptionAPI_VueComponent(OverflowSafeSingleLineLabel);

</script>
