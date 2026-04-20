<template lang="pug">

  ValidatableControlShell(
    :mustDisplayErrorsMessagesIfAny="true"
    :validationErrorsMessages="validationErrorsMessages"
    :asynchronousChecksStatus="asynchronousChecksStatus"
    :required="true"
    :mustDisplayAppropriateBadgeIfInputIsRequired="true"
  )
    .DummyCore Core Element Here

  button(
    type="button"
    @click="switchValidationErrorsMessages"
  ) Switch VEM

  button(
    type="button"
    @click="switchAsynchronousChecksStatus"
  ) Switch ACS

</template>


<script lang="ts">

  /* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  import { ValidatableControlShell } from "../../../../../Source";

  /* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  import {
    Component as VueComponentOptions,
    Vue as VueComponent,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";

  /* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  import { InputtedValueValidation } from "../../../../../../../../CoreLibrary/Package";
  /* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


  @VueComponentOptions({
    name: "ValidatableControlShellWorkbench",
    components: {
      ValidatableControlShell
    }
  })
  class ValidatableControlShellWorkbench extends VueComponent {

    protected validationErrorsMessages: ReadonlyArray<string> = [];

    protected asynchronousChecksStatus: InputtedValueValidation.AsynchronousChecks.Status =
        new InputtedValueValidation.AsynchronousChecks.Status({});

    protected switchValidationErrorsMessages(): void {
      this.validationErrorsMessages =
          this.validationErrorsMessages.length === 0 ?
              [
                "This field is required",
                "Invalid email format",
                "Value must be at least 3 characters long"
              ] :
              [];
    }

    protected switchAsynchronousChecksStatus(): void {

      this.asynchronousChecksStatus =
          Object.values(this.asynchronousChecksStatus.checks).length === 0 ?
            new InputtedValueValidation.AsynchronousChecks.Status({
              check1: {
                message: "Pending check",
                isPending: true,
                hasValidValueBeenConfirmed: false,
                hasErrorOccurred: false,
                hasInvalidValueBeenConfirmed: false
              },
              check2: {
                message: "Confirmed Valid value",
                isPending: false,
                hasValidValueBeenConfirmed: true,
                hasErrorOccurred: false,
                hasInvalidValueBeenConfirmed: false
              },
              check3: {
                message: "Error occurred",
                isPending: false,
                hasValidValueBeenConfirmed: false,
                hasErrorOccurred: true,
                hasInvalidValueBeenConfirmed: false
              },
              check4: {
                message: "Invalid",
                isPending: false,
                hasValidValueBeenConfirmed: false,
                hasErrorOccurred: false,
                hasInvalidValueBeenConfirmed: true
              }
            }) :
            new InputtedValueValidation.AsynchronousChecks.Status({});

    }

  }

  export default transformToOptionAPI_VueComponent(ValidatableControlShellWorkbench);

</script>


<style lang="stylus">

  @require "../../../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset()
  InitialGlobalCSS_Rules()


  Badge--YDF-generateStyles()
  ValidatableControlShell--YDF-generateStyles()
  LoadingIndicator--YDF-generateStyles()


  .DummyCore

    display flex
    align-items center

    width 200px
    height 2rem
    font-size 1rem

    border-width 4px
    border-radius 4px
    padding 0.2rem 0.4rem

    border-style dashed
    border-color mediumblue
    font-weight bold
    color mediumblue

    background-color: alpha(mediumblue, 30%)

</style>
