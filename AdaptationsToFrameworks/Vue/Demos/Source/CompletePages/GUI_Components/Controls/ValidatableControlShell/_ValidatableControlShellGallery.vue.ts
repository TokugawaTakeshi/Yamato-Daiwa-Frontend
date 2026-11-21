/* ─── Assets ─────────────────────────────────────────────────────────────────────────────────────────────────────── */
import componentVueTemplate from "./_ValidatableControlShellGallery.vue.pug";

/* ─── GUI Components ─────────────────────────────────────────────────────────────────────────────────────────────── */
import {
  ValidatableControlShell,
  ValidatableControlShellLoadingPlaceholder,
  InputtedValueValidation,
  AccessibleFromTemplateAsNonReactive,
  NonReactiveVueData
} from "@yamato-daiwa/frontend-vue";
import Gallery from "../../../../Gallery.vue";
import ThemesShowcase from "../../../../ThemesShowcase.vue";

/* ─── Framework ──────────────────────────────────────────────────────────────────────────────────────────────────── */
import { Component as VueComponentConfiguration } from "vue-facing-decorator";


@VueComponentConfiguration({
  name: "ValidatableControlShellGallery",
  template: componentVueTemplate,
  components: {
    ValidatableControlShell,
    ValidatableControlShellLoadingPlaceholder,
    ThemesShowcase
  }
})
class ValidatableControlShellGallery extends Gallery<ValidatableControlShellGallery.PartialsFlags> {

  /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Non-reactive ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  @AccessibleFromTemplateAsNonReactive
  protected static ValidatableControlShell: typeof ValidatableControlShell = ValidatableControlShell;

  @NonReactiveVueData({ initialValue: "ValidatableControlShell__YDF.Themes." })
  protected THEME_KEY_LABEL_PREFIX!: string;

  @NonReactiveVueData({ initialValue: "ValidatableControlShell__YDF.GeometricVariations." })
  protected GEOMETRIC_VARIATION_KEY_LABEL_PREFIX!: string;

  @NonReactiveVueData({ initialValue: "ValidatableControlShell__YDF.DecorativeVariations." })
  protected DECORATIVE_VARIATION_KEY_LABEL_PREFIX!: string;

  @NonReactiveVueData({
    initialValue:
        [
          "The user name must have at least 3 characters. Please input more characters.",
          "Inputted user name is including the following forbidden characters: \"$\", \"'\". " +
            "Please input the other user name without next characters: \"$\", \"&\", \"'\", \"\"\"."
        ]
  })
  protected readonly sampleValidationErrorsMessages!: ReadonlyArray<string>;

  @NonReactiveVueData({
    initialValue:
        new InputtedValueValidation.AsynchronousChecks.Status({
          check1: {
            isPending: true,
            message: "Checking of the inputted user name for the availability ...",
            hasValidValueBeenConfirmed: false,
            hasInvalidValueBeenConfirmed: false,
            hasErrorOccurred: false
          },
          check2: {
            hasValidValueBeenConfirmed: true,
            message: "The user name is available",
            isPending: false,
            hasInvalidValueBeenConfirmed: false,
            hasErrorOccurred: false
          },
          check3: {
            hasInvalidValueBeenConfirmed: true,
            message:
                "Sorry, but inputted user name including profanity. " +
                "Please select another user name without swearing.",
            isPending: false,
            hasValidValueBeenConfirmed: false,
            hasErrorOccurred: false
          },
          check4: {
            hasErrorOccurred: true,
            message:
                "The malfunction has occurred during the checking of the user name for the availability. " +
                "If the internet connection has been lost, would you please to input the user name once again when the " +
                  "internet connection will recover?" +
                "If the internet connection is fine, we are sorry, but it is the system failure. " +
                "Could you please to notify the customers support?",
            isPending: false,
            hasValidValueBeenConfirmed: false,
            hasInvalidValueBeenConfirmed: false
          }
        })
  })
  protected readonly asynchronousChecksStatus!: InputtedValueValidation.AsynchronousChecks.Status;

}


namespace ValidatableControlShellGallery {

  export type PartialsFlags = Readonly<{
    minimal?: boolean;
    labels?: boolean;
    guidances?: boolean;
    labelsAndGuidances?: boolean;
    requirementBadges?: boolean;
    validationErrorsMessages?: boolean;
    asynchronousValidationsStatuses?: boolean;
    loadingPlaceholder?: boolean;
  }>;

}


export default ValidatableControlShellGallery;
