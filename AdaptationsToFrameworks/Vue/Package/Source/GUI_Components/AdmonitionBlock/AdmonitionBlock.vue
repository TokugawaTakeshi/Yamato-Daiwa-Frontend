<template lang="pug">

  VerticallySlidingAlwaysMountedContainer.AdmonitionBlock--YDF(
    v-model="isDisplaying"
    role="alert"
    :class="rootElementModifierCSS_Classes"
  )

    slot(
      v-if="$slots.CustomSVG_Icon"
      name="CustomSVG_Icon"
    )

    component.AdmonitionBlock--YDF-SVG_Icon(
      v-else-if="hasDefaultSVG_Icon"
      :is="defaultSVG_IconComponentName"
    )

    .AdmonitionBlock--YDF-Title(
      v-if="title"
      id=TITLE_HTML_ID
    ) {{ title }}

    .AdmonitionBlock--YDF-MainContent(
      role="group"
      :aria-labelledby="title ? TITLE_HTML_ID : null"
    )

      slot

      template(
        v-if="$slots.ActionBarContent"
      )

        .AdmonitionBlock--YDF-ActionBar

          slot(
            name="ActionBarContent"
          )

    button.AdmonitionBlock--YDF-DismissingButton(
      v-if="dismissible"
      type="button"
      :aria-label="localization.dismissingButton.accessibilityGuidance"
      @click="onClickDismissingButton"
    ): MultiplicationSignIcon__Boxed__Filled.AdmonitionBlock--YDF-DismissingButton-Icon

</template>


<script lang="ts">

  import AdmonitionBlockLogic from "./AdmonitionBlockLogic.vue";

  /* ─── Assets ───────────────────────────────────────────────────────────────────────────────────────────────────── */
  import PencilIcon__Circled__Filled from "../../SVG_Icons/Pencil/PencilIcon__Circled__Filled.vue";
  import ExclamationMarkIcon__Circled__Filled from "./../../SVG_Icons/ExclamationMark/ExclamationMarkIcon__Circled__Filled.vue";
  import ExclamationMarkIcon__Triangled__Filled from
      "./../../SVG_Icons/ExclamationMark/ExclamationMarkIcon__Triangled__Filled.vue";
  import CheckmarkIcon__Circled__Filled from "../../SVG_Icons/Checkmark/CheckmarkIcon__Circled__Filled.vue";
  import InfoSignIcon__Circled__Filled from "../../SVG_Icons/InfoSign/InfoSignIcon__Circled__Filled.vue";
  import QuestionMarkIcon__Circled__Filled from "../../SVG_Icons/QuestionMark/QuestionMarkIcon__Circled__Filled.vue";
  import MultiplicationSignIcon__Boxed__Filled from
      "../../SVG_Icons/MultiplicationSign/MultiplicationSignIcon__Boxed__Filled.vue";

  /* ─── Related GUI_Components ───────────────────────────────────────────────────────────────────────────────────── */
  import { Vue3SlideUpDown as VerticallySlidingAlwaysMountedContainer } from "vue3-slide-up-down";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentConfiguration({
    name: AdmonitionBlockLogic.CSS_NAMESPACE,
    components: {
      VerticallySlidingAlwaysMountedContainer,
      PencilIcon__Circled__Filled,
      ExclamationMarkIcon__Circled__Filled,
      ExclamationMarkIcon__Triangled__Filled,
      CheckmarkIcon__Circled__Filled,
      InfoSignIcon__Circled__Filled,
      QuestionMarkIcon__Circled__Filled,
      MultiplicationSignIcon__Boxed__Filled
    }
  })
  class AdmonitionBlock extends AdmonitionBlockLogic {}


  export default AdmonitionBlockLogic.applyStaticMembersToInheritorTransformedToOptionAPI(
    transformToOptionAPI_VueComponent(AdmonitionBlock)
  );

</script>
