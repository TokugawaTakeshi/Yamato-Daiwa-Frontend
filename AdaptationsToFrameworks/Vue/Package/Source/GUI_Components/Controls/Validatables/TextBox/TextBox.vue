<template lang="pug">

  ValidatableControlShell.TextBox--YDF(

    :label="label"
    :guidance="guidance"

    :required="required"
    :mustDisplayAppropriateBadgeIfInputIsRequired="mustDisplayAppropriateBadgeIfInputIsRequired"
    :mustDisplayAppropriateBadgeIfInputIsOptional="mustDisplayAppropriateBadgeIfInputIsOptional"
    :mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge="mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge"

    :validationErrorsMessages="validatablePayload.validationErrorsMessages"
    :mustDisplayErrorsMessagesIfAny="mustHighlightInvalidInputtedValue"

    :coreElementHTML_ID="HTML_IDs.inputOrTextarea"
    :labelElementHTML_ID="HTML_IDs.label"

    :mainSlotWrapperAdditionalCSS_Classes="[ 'TextBox--YDF-LinearFlow' ]"

    :theme="validatableControlShellTheme"
    :areThemesCSS_ClassesCommon="areThemesCSS_ClassesCommon"
    :geometricVariation="validatableControlGeometricVariation"
    :decorativeVariation="validatableControlDecorativeVariation"

    :class="rootElementModifierCSS_Classes"

  )

    .TextBox--YDF-IconsPositioningWrapper

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
        :type="HTML_Type"
        v-model="rawInput"
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

      slot

      span.TextBox--YDF-PasswordDisplayingToggle(
        v-if="mustDisplayPasswordDisplayingToggle"
        role="checkbox"
        :aria-checked="isPasswordDisplaying"
        tabindex="0"
        :aria-label="localization.passwordDisplayingToggle.displayingOfPassword.accessibilityGuidance"
        :aria-disabled="disabled"
        @click="onPasswordDisplayingToggleClicked"
      )

        SigningInIcon.TextBox--YDF-PasswordDisplayingToggle-SVG_Icon(
          v-if="isPasswordDisplaying"
          class="TextBox--YDF-PasswordDisplayingToggle-SVG_Icon__PasswordVisibleState"
        )

        SigningOutIcon.TextBox--YDF-PasswordDisplayingToggle-SVG_Icon(
          v-else
          class="TextBox--YDF-PasswordDisplayingToggle-SVG_Icon__PasswordHiddenState"
        )

    Button(
      :accessibilityGuidance="localization.valueCopyingButton.accessibilityGuidance"
      :theme="valueCopyingButtonTheme"
      :areThemesCSS_ClassesCommon="areThemesCSS_ClassesCommon"
      :geometricVariation="valueCopyingButtonGeometricVariation"
      :geometricModifiers="valueCopyingButtonGeometricModifiers"
      :decorativeVariation="valueCopyingButtonDecorativeVariation"
    ): template(v-slot:loneSVG_Icon): CopyingIcon.Button--YDF-SVG_Icon

</template>


<script lang="ts">

  /* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  import TextBoxLogic from "./TextBoxLogic.vue";

  /* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell.vue";
  import Button from "../../Buttons/Plain/Button.vue";
  import SigningInIcon from "../../../../SVG_Icons/Authentication/SigningInIcon.vue";
  import SigningOutIcon from "../../../../SVG_Icons/Authentication/SigningOutIcon.vue";
  import CopyingIcon from "../../../../SVG_Icons/Copying/CopyingIcon.vue";

  /* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  import {
    ComponentBase as VueComponentConfiguration,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";
  /* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


  @VueComponentConfiguration({
    name: TextBoxLogic.CSS_NAMESPACE,
    components: {
      ValidatableControlShell,
      Button,
      SigningInIcon,
      SigningOutIcon,
      CopyingIcon
    }
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
