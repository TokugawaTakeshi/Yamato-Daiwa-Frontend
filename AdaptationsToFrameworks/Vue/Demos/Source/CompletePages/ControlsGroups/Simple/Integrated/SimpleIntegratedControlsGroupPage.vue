<template lang="pug">

  form.SimpleForm

    h1.SimpleForm-Heading Sign in

    TextBox.SimpleForm-TextBox(
      :HTML_Type="TextBox.HTML_Types.email"
      label="Email Address"
      v-model="controlsPayload.emailAddress"
      :validityHighlightingActivationMode="TextBox.ValidityHighlightingActivationModes.onFocusOut"
      :required="controlsPayload.emailAddress.validation.isInputRequired()"
      :ref="controlsPayload.emailAddress.VUE_REFERENCE_ID"
    )

    TextBox.SimpleForm-TextBox(
      :HTML_Type="TextBox.HTML_Types.password"
      label="Password"
      v-model="controlsPayload.password"
      :validityHighlightingActivationMode="TextBox.ValidityHighlightingActivationModes.onFocusOut"
      :required="controlsPayload.password.validation.isInputRequired()"
      :minimalCharactersCount="controlsPayload.password.validation.MINIMAL_CHARACTERS_COUNT"
      :maximalCharactersCount="controlsPayload.password.validation.MAXIMAL_CHARACTERS_COUNT"
      :ref="controlsPayload.password.VUE_REFERENCE_ID"
    )

    VerticallySlidingAlwaysMountedContainer.SimpleForm-Message(
      HTML_Tag="p"
      :expanded="hasUserTriedToSubmitDataAtLeastOnce && hasInvalidInputs"
    ) Omitted required fields and/or invalid inputs left. Please check the inputted information.

    Button(
      label="Submit"
      :HTML_Type="Button.HTML_Types.submit"
      :decorativeVariation="Button.DecorativeVariations.accented"
      @click="attemptSigningIn"
    )

</template>


<script lang="ts">

  import EmailInputtedDataValidation from "../../_Reusables/Validations/EmailInputtedDataValidation";
  import PasswordInputtedDataValidation from "../../_Reusables/Validations/PasswordInputtedDataValidation";
  import { Component as VueComponentConfiguration, Vue as VueComponent } from "vue-facing-decorator";
  import {
    ValidatableControl,
    TextBox,
    Button,
    ValidatableControlsGroup,
    AccessibleFromTemplateAsNonReactive
  } from "@yamato-daiwa/frontend-vue";
  import { Vue3SlideUpDown as VerticallySlidingAlwaysMountedContainer } from "vue3-slide-up-down";
  import { Logger, DataSubmittingFailedError } from "@yamato-daiwa/es-extensions";


  @VueComponentConfiguration({
    name: "SimpleIntegratedControlsGroup",
    components: {
      TextBox,
      VerticallySlidingAlwaysMountedContainer,
      Button
    }
  })
  export default class SimpleIntegratedControlsGroup extends VueComponent {

    /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    private controlsPayload: Readonly<{
      emailAddress: ValidatableControl.Payload<string, string, EmailInputtedDataValidation>;
      password: ValidatableControl.Payload<string, string, PasswordInputtedDataValidation>;
    }> = {
      emailAddress: ValidatableControl.Payload.createInitialInstance({
        initialValue: "",
        validation: new EmailInputtedDataValidation({ isInputRequired: true })
      }),
      password: ValidatableControl.Payload.createInitialInstance({
        initialValue: "",
        validation: new PasswordInputtedDataValidation({ isInputRequired: true })
      })
    };

    @AccessibleFromTemplateAsNonReactive
    protected static TextBox: typeof TextBox = TextBox;

    @AccessibleFromTemplateAsNonReactive
    protected static Button: typeof Button = Button;


    /* ━━━ Actions Handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    protected hasUserTriedToSubmitDataAtLeastOnce: boolean = false;

    protected get hasInvalidInputs(): boolean {
      return ValidatableControlsGroup.hasInvalidInputs(this.controlsPayload);
    }

    protected async attemptSigningIn(): Promise<void> {

      this.hasUserTriedToSubmitDataAtLeastOnce = true;

      if (this.hasInvalidInputs) {

        ValidatableControlsGroup.pointOutValidationErrors({
          controlsPayload: this.controlsPayload,
          // @ts-ignore 一時的
          parentVueComponentInstance: this
        });

        return;

      }


      try {

        await Promise.resolve({
          email: this.controlsPayload.emailAddress.getExpectedToBeValidValue(),
          password: this.controlsPayload.password.getExpectedToBeValidValue()
        });

      } catch (error: unknown) {

        Logger.logError({
          errorType: DataSubmittingFailedError.NAME,
          title: DataSubmittingFailedError.localization.defaultTitle,
          description: "Signing in failed.",
          occurrenceLocation: "simpleIntegratedForm.attemptSigningIn()",
          caughtError: error
        });

        return;

      }


      Logger.logSuccess({
        title: "Sign in success",
        description: "The simulation of singing in is complete."
      });

    }

  }

</script>


<style lang="stylus">

  @require "./SimpleIntegratedControlsGroupPage.styl"

</style>
