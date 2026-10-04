<template lang="pug">

  Transition(
    :enter-to-class="DISPLAYING_STATE_CSS_CLASS"
    leave-to-class="HIDDEN_STATE_CSS_CLASS"
    :duration="transitionDuration__milliseconds"
  )

    .Snackbar--YD(
      v-if="isDisplaying"
      role="status"
      aria-live="assertive"
      :class="rootElementModifierCSS_Classes"
    )

    ExclamationMarkIcon__Circled__Filled.Snackbar--YDF-Icon(
      v-if="decorativeVariation === DecorativeVariations.error"
    )

    ExclamationMarkIcon__Triangled__Filled.Snackbar--YDF-Icon(
      v-else-if="decorativeVariation === DecorativeVariations.warning"
    )

    InfoSignIcon__Circled__Filled.Snackbar--YDF-Icon(
      v-else-if="decorativeVariation === DecorativeVariations.guidance"
    )

    CheckmarkIcon__Circled__Filled.Snackbar--YDF-Icon(
      v-else-if="decorativeVariation === DecorativeVariations.success"
    )


      p.Snackbar--YDF-Message(
        v-html="messageTextOrHTML"
      )

      button.Snackbar--YDF-DismissingButton(
        type="button"
        aria-label="localization.dismissingButton.accessibilityGuidance"
        @onclick=onClosedButtonClicked
      )
        MultiplicationSignIcon__Octagoned__Filled.Snackbar--YDF-DismissingButton-Icon

</template>


<script lang="ts">

  /* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  import SnackbarLogic from "./SnackbarLogic.vue";

  /* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  import ExclamationMarkIcon__Circled__Filled from
      "../../SVG_Icons/ExclamationMark/ExclamationMarkIcon__Circled__Filled.vue";
  import ExclamationMarkIcon__Triangled__Filled from
      "../../SVG_Icons/ExclamationMark/ExclamationMarkIcon__Triangled__Filled.vue";
  import InfoSignIcon__Circled__Filled from "../../SVG_Icons/InfoSign/InfoSignIcon__Circled__Filled.vue";
  import CheckmarkIcon__Circled__Filled from "../../SVG_Icons/Checkmark/CheckmarkIcon__Circled__Filled.vue";
  import MultiplicationSignIcon__Octagoned__Filled from
      "../../SVG_Icons/MultiplicationSign/MultiplicationSignIcon__Octagoned__Filled.vue";

  /* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";
  /* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


  @VueComponentConfiguration({
    name: SnackbarLogic.CSS_NAMESPACE,
    components: {
      ExclamationMarkIcon__Circled__Filled,
      ExclamationMarkIcon__Triangled__Filled,
      InfoSignIcon__Circled__Filled,
      CheckmarkIcon__Circled__Filled,
      MultiplicationSignIcon__Octagoned__Filled
    }
  })
  class Snackbar extends SnackbarLogic {}


  export default Snackbar.applyStaticMembersToInheritorTransformedToOptionAPI(
    transformToOptionAPI_VueComponent(Snackbar)
  );

</script>
