<template lang="pug">

  component.Badge--YDF(
    :is="rootElementTag"
    :class="rootElementModifierCSS_Classes"
  )

    slot(name="SVG_Icon")

    span.Badge--YDF-KeyLabel(
      v-if="keyLabel"
    ) {{ keyLabel }}

    span.Badge--YDF-ValueLabel {{ valueLabel }}

</template>


<script lang="ts">

  import BadgeLogic from "./BadgeLogic.vue";
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentConfiguration({ name: BadgeLogic.CSS_NAMESPACE })
  class Badge extends BadgeLogic {}


  export default BadgeLogic.applyStaticMembersToInheritorTransformedToOptionAPI(
    transformToOptionAPI_VueComponent(Badge)
  );

</script>
