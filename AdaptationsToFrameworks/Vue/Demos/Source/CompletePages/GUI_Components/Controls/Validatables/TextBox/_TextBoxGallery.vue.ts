/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import componentVueTemplate from "./_TextBoxGallery.vue.pug";

/* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import Gallery from "../../../../../Gallery.vue";
import ThemesShowcase from "../../../../../ThemesShowcase.vue";
import {
  TextBox,
  ValidatableControl,
  ValidatableControlShell,
  ValidatableControlShellLoadingPlaceholder
  /* eslint-disable-next-line import/no-duplicates -- Semantically different types from same package. */
} from "@yamato-daiwa/frontend-vue";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { Component as VueComponentConfiguration } from "vue-facing-decorator";
import {
  AccessibleFromTemplateAsNonReactive,
  NonReactiveVueData
  /* eslint-disable-next-line import/no-duplicates -- Semantically different types from same package. */
} from "@yamato-daiwa/frontend-vue";
import {
  InputtedValueValidation,
  isStringEmpty,
  MinimalCharactersCountInputtedValueValidationRule
} from "@yamato-daiwa/frontend";
import { isString } from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


class SimpleValidation extends InputtedValueValidation<string> {
  public constructor() {
    super({
      isValueOfSupportedType: isString,
      hasValueBeenOmitted: isStringEmpty,
      isInputRequired: true,
      staticRules: [
        new MinimalCharactersCountInputtedValueValidationRule({ minimalCharactersCount: 3 })
      ]
    });
  }
}


@VueComponentConfiguration({
  name: "TextBoxGallery",
  template: componentVueTemplate,
  components: {
    TextBox,
    ValidatableControlShell,
    ValidatableControlShellLoadingPlaceholder,
    ThemesShowcase
  }
})
class TextBoxGallery extends Gallery<TextBoxGallery.PartialsFlags> {

  /* ━━━ Common Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Non-reactive ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  @AccessibleFromTemplateAsNonReactive
  protected static TextBox: typeof TextBox = TextBox;

  @NonReactiveVueData({ initialValue: "ValidatableControlShell__YDF.Themes." })
  protected THEME_KEY_LABEL_PREFIX!: string;

  @NonReactiveVueData({ initialValue: "ValidatableControlShell__YDF.GeometricVariations." })
  protected GEOMETRIC_VARIATION_KEY_LABEL_PREFIX!: string;

  @NonReactiveVueData({ initialValue: "ValidatableControlShell__YDF.DecorativeVariations." })
  protected DECORATIVE_VARIATION_KEY_LABEL_PREFIX!: string;


  /* ┅┅┅ Partials Requirements ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected minimalTextBoxesRequirements: ReadonlyArray<TextBoxGallery.TextBoxRequirements> =
    [
      {
        HTML_Type: TextBox.HTML_Types.regular,
        label: "Sample",
        guidance: "Please input the name",
        accessibilityGuidance: "Sample",
        payload: ValidatableControl.Payload.createInitialInstance({
          initialValue: "",
          validation: new SimpleValidation(),
          vueReferenceID: "MINIMAL-REGULAR"
        }),
        autocomplete: "name",
        vueReferenceID: "MINIMAL-REGULAR"
      },
      {
        HTML_Type: TextBox.HTML_Types.email,
        label: "Email",
        guidance: "Please input the email address.",
        accessibilityGuidance: "Email",
        payload: ValidatableControl.Payload.createInitialInstance({
          initialValue: "",
          validation: new SimpleValidation(),
          vueReferenceID: "MINIMAL-EMAIL"
        }),
        autocomplete: "email",
        vueReferenceID: "MINIMAL-EMAIL"
      },
      {

        HTML_Type: TextBox.HTML_Types.number,
        label: "Age",
        guidance: "Please input you age.",
        accessibilityGuidance: "Age",
        payload: ValidatableControl.Payload.createInitialInstance({
          initialValue: "30",
          validation: new SimpleValidation(),
          vueReferenceID: "MINIMAL-NUMBER"
        }),

        /* Wrong autocomplete, but there is not "age" one. */
        autocomplete: "bday-year",
        vueReferenceID: "MINIMAL-NUMBER"
      },
      {
        HTML_Type: TextBox.HTML_Types.password,
        label: "Password",
        guidance: "Please input the password.",
        accessibilityGuidance: "Password",
        payload: ValidatableControl.Payload.createInitialInstance({
          initialValue: "r1H5qf.hr:}]'\\4{qF+gu%im",
          validation: new SimpleValidation(),
          vueReferenceID: "MINIMAL-PASSWORD"
        }),
        autocomplete: "current-password",
        vueReferenceID: "MINIMAL-PASSWORD"
      },
      {
        HTML_Type: TextBox.HTML_Types.phoneNumber,
        label: "Phone Number",
        guidance: "Please input your phone number.",
        accessibilityGuidance: "Phone Number",
        payload: ValidatableControl.Payload.createInitialInstance({
          initialValue: "132-4567-8901",
          validation: new SimpleValidation(),
          vueReferenceID: "MINIMAL-PHONE_NUBMER"
        }),
        autocomplete: "tel",
        vueReferenceID: "MINIMAL-PHONE_NUBMER"
      },
      {
        HTML_Type: TextBox.HTML_Types.URI,
        label: "Website",
        guidance: "Please input the valid URL.",
        accessibilityGuidance: "Website",
        payload: ValidatableControl.Payload.createInitialInstance({
          initialValue: "https://frontend.yamato-daiwa.com/",
          validation: new SimpleValidation(),
          vueReferenceID: "MINIMAL-URI"
        }),
        autocomplete: "url",
        vueReferenceID: "MINIMAL-URI"
      }
    ];

}


namespace TextBoxGallery {

  export type PartialsFlags = Readonly<{
    minimal?: boolean;
    surrounding?: boolean;
  }>;

  export type TextBoxRequirements = Readonly<{
    HTML_Type: TextBox.HTML_Types;
    label: string;
    guidance: string;
    accessibilityGuidance: string;
    payload: unknown;
    autocomplete: string;
    vueReferenceID: string;
  }>;

}


export default TextBoxGallery;
