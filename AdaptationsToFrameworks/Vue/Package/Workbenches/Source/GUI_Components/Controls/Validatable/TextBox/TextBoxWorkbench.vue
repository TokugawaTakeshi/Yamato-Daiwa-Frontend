<template lang="pug">

  TextBox(
    label="Sample"
    guidance="Please input something"
    inputOrTextareaElementHTML_ID="BLA"
    v-model="textBoxPayload"
    :validityHighlightingActivationMode="TextBox.ValidityHighlightingActivationModes.onFocusOut"
    :mustDisplayAppropriateBadgeIfInputIsRequired="true"
    :required="textBoxPayload.validation.isInputRequired()"
    :ref="TEXT_BOX_VUE_REFERENCE_ID"
  )

</template>


<script lang="ts">

  /* ─── GUI Components ───────────────────────────────────────────────────────────────────────────────────────────── */
  /* eslint-disable-next-line max-classes-per-file -- Allow additional class for for inputted data validation. */
  import TextBox from "../../../../../../Source/GUI_Components/Controls/Validatables/TextBox/TextBox.vue";

  /* ─── Framework ────────────────────────────────────────────────────────────────────────────────────────────────── */
  import {
    Component as VueComponentOptions,
    Vue as VueComponent,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";
  import { ValidatableControl, NonReactiveVueData, AccessibleFromTemplateAsNonReactive } from "../../../../../../Source";
  import { InputtedValueValidation, MinimalCharactersCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";
  import { isEmptyString } from "@yamato-daiwa/es-extensions";


  @VueComponentOptions({
    name: "TextBoxWorkbench",
    components: {
      TextBox
    }
  })
  class TextBoxWorkbench extends VueComponent {

    @NonReactiveVueData("TEXT_BOX")
    protected readonly TEXT_BOX_VUE_REFERENCE_ID!: string;

    @AccessibleFromTemplateAsNonReactive
    protected static readonly TextBox: typeof TextBox = TextBox;

    protected textBoxPayload: ValidatableControl.Payload<string, string, InputtedValueValidation> =
        ValidatableControl.Payload.createInitialInstance({
          initialValue: "",
          validation: new class extends InputtedValueValidation {
            public constructor() {
              super({
                omittedValueChecker: isEmptyString,
                isInputRequired: true,
                staticRules: [
                  new MinimalCharactersCountInputtedValueValidationRule({ minimalCharactersCount: 3 })
                ]
              });
            }
          }(),
          vueReferenceID: this.TEXT_BOX_VUE_REFERENCE_ID
        });

  }

  export default transformToOptionAPI_VueComponent(TextBoxWorkbench);

</script>


<style lang="stylus">

  @require "../../../../../../node_modules/@yamato-daiwa/frontend/Functionality.styl"
  @require "../../../../../../node_modules/@yamato-daiwa/frontend/GUI_Components.styl"


  CrossBrowserStylesReset()
  InitialGlobalCSS_Rules()


  ValidatableControlShell--YDF-generateStyles()
  TextBox--YDF-generateStyles()
  Badge--YDF-generateStyles()

</style>
