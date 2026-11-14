<template lang="pug">

  .LanguageDropDownList--YDF

</template>


<script lang="ts">

  import {
    Component as VueComponentConfiguration,
    Vue as VueComponent,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";

  @VueComponentConfiguration({
    name: "LanguageDropDownList",
    components: {}
  })
  class LanguageDropDownList extends VueComponent {}


  export default transformToOptionAPI_VueComponent(LanguageDropDownList);

</script>
