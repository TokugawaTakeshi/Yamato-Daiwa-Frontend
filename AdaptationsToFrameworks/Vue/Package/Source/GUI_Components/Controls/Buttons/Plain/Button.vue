<template lang="pug">

  button.Button--YDF(
    v-if="isButtonTheTagNameOfRootElement"
    :type="typeAttributeValueOfButtonOrInputElement"
    :disabled="disabled"
    :aria-label="accessibilityGuidance"
    :aria-pressed="toggled"
    :class="rootElementModifierCSS_Classes"
    @click.prevent="() => {}"
  )

    slot(name="prependedSVG_Icon")

    span.Button--YDF-Label(
      v-if="label"
    ) {{ label }}

    slot(name="appendedSVG_Icon")
    slot(name="loneSVG_Icon")


  component.Button--YDF(
    v-else-if="isRouterLinkTheRootElement"
    :is="IS_NUXT ? 'NuxtLink' : 'RouterLink'"
    :to="route"
    :tabindex="disabled && -1"
    :aria-label="accessibilityGuidance"
    :aria-disabled="disabled"
    :class="rootElementModifierCSS_Classes"
  )

    slot(name="prependedSVG_Icon")

    span.Button--YDF-Label(
      v-if="label"
    ) {{ label }}

    slot(name="appendedSVG_Icon")
    slot(name="loneSVG_Icon")


  a.Button--YDF(
    v-else-if="isAnchorTheTagNameOfRootElement"
    :href="disabled ? null : externalURI"
    :target="mustOpenLinkInNewTab ? '_self' : '_blank'"
    :rel="relAttributeValueOfAnchorElement"
    :tabindex="disabled && -1"
    :aria-label="accessibilityGuidance"
    :aria-disabled="disabled"
    :class="rootElementModifierCSS_Classes"
  )

    slot(name="prependedSVG_Icon")

    span.Button--YDF-Label(
      v-if="label"
    ) {{ label }}

    slot(name="appendedSVG_Icon")
    slot(name="loneSVG_Icon")


  input.Button--YDF(
    v-else-if="isInputTheTagNameOfRootElement"
    :type="typeAttributeValueOfButtonOrInputElement"
    :value="label"
    :disabled="disabled"
    :aria-pressed="toggled"
    :class="rootElementModifierCSS_Classes"
    @click.prevent="() => {}"
  )

</template>


<script lang="ts">

  import ButtonLogic from "./ButtonLogic.vue";
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentConfiguration({ name: ButtonLogic.CSS_NAMESPACE })
  class Button extends ButtonLogic {}


  export default ButtonLogic.applyStaticMembersToInheritorTransformedToOptionAPI(
    transformToOptionAPI_VueComponent(Button)
  );

</script>
