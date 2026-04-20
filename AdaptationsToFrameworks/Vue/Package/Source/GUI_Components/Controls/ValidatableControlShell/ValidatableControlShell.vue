<template lang="pug">

  .ValidatableControlShell--YDF(
    :class="rootElementModifierCSS_Classes"
  )

    .ValidatableControlShell--YDF-Header(
      v-if="mustDisplayHeader"
    )

      label.ValidatableControlShell--YDF-Label(
        v-if="label"
        :for="coreElementHTML_ID"
        :id="labelElementHTML_ID"
      ) {{ label }}

      Badge.ValidatableControlShell--YDF-Badge.ValidatableControlShell--YDF-Badge__Required(
        v-if="mustDisplayRequiredInputBadge"
        :valueLabel="localization.requirementBadges.required"
        :theme="badgeTheme"
        :geometricVariation="badgeGeometricVariation"
        :geometricModifiers="[ Badge.GeometricModifiers.pillShape ]"
        :decorativeVariation="requiredInputBadgeDecorativeVariation"
      )

      Badge.ValidatableControlShell--YDF-Badge.ValidatableControlShell--YDF-Badge__Optional(
        v-else-if="mustDisplayOptionalInputBadge"
        :valueLabel="localization.requirementBadges.optional"
        :theme="badgeTheme"
        :geometricVariation="badgeGeometricVariation"
        :geometricModifiers="[ Badge.GeometricModifiers.pillShape ]"
        :decorativeVariation="optionalInputBadgeDecorativeVariation"
      )

      Badge.ValidatableControlShell--YDF-Badge.ValidatableControlShell--YDF-Badge__Invisible(
        v-else-if="mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge"
        :valueLabel="localization.requirementBadges.optional"
        :theme="badgeTheme"
        :geometricVariation="badgeGeometricVariation"
        :geometricModifiers="[ Badge.GeometricModifiers.pillShape ]"
        :decorativeVariation="Badge.DecorativeVariations.neutralPastel"
      )


    p.ValidatableControlShell--YDF-Guidance(
      v-if="formattedGuidance"
      v-html="formattedGuidance"
    )


    .ValidatableControlShell--YDF-MainSlotCustomizableWrapper(
      :class="mainSlotWrapperAdditionalCSS_Classes"
    )
      slot


    VerticallySlidingAlwaysMountedContainer.ValidatableControlShell--YDF-ValidationErrorsMessagesList(
      :modelValue="mustDisplayErrorsMessagesIfAny && validationErrorsMessagesCopyForAnimating.length > 0"
      tag="ul"
      :duration="errorsListAnimationDuration__milliseconds"
    )

      li.ValidatableControlShell--YDF-ValidationErrorsMessagesList-Item(
        v-for="validationErrorMessage of validationErrorsMessagesCopyForAnimating"
        :key="validationErrorMessage"
      ) {{ validationErrorMessage }}

    VerticallySlidingAlwaysMountedContainer.ValidatableControlShell--YDF-AsynchronousValidationsStatusesList(
      v-if="asynchronousChecksStatus"
      :modelValue="Object.entries(asynchronousChecksActualForDisplaying).length > 0"
      tag="ul"
      :duration="asynchronousValidationsStatusesListAnimationDurationPerOneItem__milliseconds"
    )

      li.ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item(
        v-for="(asynchronousCheckStatus, asynchronousCheckName) of actualForDisplayingAsynchronousChecksCopyForAnimating"
        :key="asynchronousCheckName"
        :class="asynchronousValidationsStatusesListItemSpecificCSS_Class(asynchronousCheckStatus)"
      )

        LoadingIndicator.ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item-LoadingIndicator(
          v-if="asynchronousCheckStatus.isPending"
          :type="LoadingIndicator.Types.variableWidthArcSpinner"
          :geometricVariation="LoadingIndicator.GeometricVariations.small"
        )

        CheckmarkIcon__Circled__Filled.ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item-Icon(
          v-else-if="asynchronousCheckStatus.hasValidValueBeenConfirmed"
        )

        MultiplicationSignIcon__Boxed__Filled.ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item-Icon(
          v-else-if="asynchronousCheckStatus.hasErrorOccurred"
        )

        p.ValidatableControlShell--YDF-AsynchronousValidationsStatusesList-Item-Text {{ asynchronousCheckStatus.message }}

</template>


<script lang="ts">

  import ValidatableControlShellLogic from "./ValidatableControlShellLogic.vue";

  /* ─── Related GUI_Components ───────────────────────────────────────────────────────────────────────────────────── */
  import Badge from "../../Badge/Badge.vue";
  import { Vue3SlideUpDown as VerticallySlidingAlwaysMountedContainer } from "vue3-slide-up-down";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentConfiguration({
    name: ValidatableControlShellLogic.CSS_NAMESPACE,
    components: {
      Badge,
      VerticallySlidingAlwaysMountedContainer
    }
  })
  class ValidatableControlShell extends ValidatableControlShellLogic {}


  export default ValidatableControlShellLogic.applyStaticMembersToInheritorTransformedToOptionAPI(
    transformToOptionAPI_VueComponent(ValidatableControlShell)
  );

</script>
