<template lang="pug">

  ValidatableControlShell.TextBox--YDF(

    :label="label"
    :guidance="guidance"

    :required="required"
    :mustDisplayAppropriateBadgeIfInputIsRequired="mustDisplayAppropriateBadgeIfInputIsRequired"
    :mustDisplayAppropriateBadgeIfInputIsOptional="mustDisplayAppropriateBadgeIfInputIsOptional"
    :mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge="mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge"

    :validationErrorsMessages="validatablePayload.validationErrorsMessages"
    :invalidInputHighlightingIfAnyValidationErrorsMessages="invalidInputHighlightingIfAnyValidationErrorsMessages"
    :validValueHighlightingIfNoValidationErrorsMessages="validInputHighlightingIfNoErrorsMessages"

    :coreElementHTML_ID="HTML_IDs.inputOrTextarea"
    :labelElementHTML_ID="HTML_IDs.label"

    :theme="validatableControlShellTheme"
    :areThemesCSS_ClassesCommon="areThemesCSS_ClassesCommon"
    :geometricVariation="validatableControlGeometricVariation"
    :decorativeVariation="validatableControlDecorativeVariation"

    :class="rootElementModifierCSS_Classes"

  )

    textarea.TextBox--YDF-InputOrTextAreaElement(
      v-if="multiline"
      v-model="rawInput"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :readonly="readonly"
      :disabled="disabled"
      :required="required"
      :minlength="minimalCharactersCount"
      :maxlength="maximalCharactersCount"
      :id="HTML_IDs.inputOrTextarea"
      :aria-label="accessibilityGuidance"
      :aria-labelledby="externalLabelHTML_ID"
      :ref="INPUT_OR_TEXT_AREA_ELEMENT_VUE_REFERENCE_ID"
      @keydown="onKeyDown"
      @input="$event => { onInput($event.target.value) }"
      @blur="onFocusOut"
    )

    //- [ Bundler bug ] The `v-else` is being compiled to `v-else="v-else"`
    input.TextBox--YDF-InputOrTextAreaElement(
      v-else-if="!multiline"
      v-model="rawInput"
      :type="HTML_Type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :readonly="readonly"
      :disabled="disabled"
      :required="required"
      :minlength="minimalCharactersCount"
      :maxlength="maximalCharactersCount"
      :min="minimalNumericValue"
      :max="maximalNumericValue"
      :id="HTML_IDs.inputOrTextarea"
      :aria-label="accessibilityGuidance"
      :aria-labelledby="externalLabelHTML_ID"
      :ref="INPUT_OR_TEXT_AREA_ELEMENT_VUE_REFERENCE_ID"
      @keydown="onKeyDown"
      @input="$event => { onInput($event.target.value) }"
      @blur="onFocusOut"
    )

</template>


<script lang="ts">

  import TextBoxLogic from "./TextBoxLogic.vue";

  /* ─── GUI Components ───────────────────────────────────────────────────────────────────────────────────────────── */
  import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell.vue";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentConfiguration({
    name: TextBoxLogic.CSS_NAMESPACE,
    components: { ValidatableControlShell }
  })
  class TextBox<
    IsInputRequired extends boolean,
    NonEmptyValueType extends TextBoxLogic.SupportedValidatablePayloadValuesTypes.NonEmpty,
    EmptyValueType extends TextBoxLogic.SupportedValidatablePayloadValuesTypes.Empty = NonEmptyValueType,
    ValidValue extends (IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)) =
        IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType),
    InvalidValue extends NonEmptyValueType | EmptyValueType = NonEmptyValueType | EmptyValueType
  > extends TextBoxLogic<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue> {}


  export default TextBoxLogic.applyStaticMembersToInheritorTransformedToOptionAPI(
    transformToOptionAPI_VueComponent(TextBox)
  );

</script>
