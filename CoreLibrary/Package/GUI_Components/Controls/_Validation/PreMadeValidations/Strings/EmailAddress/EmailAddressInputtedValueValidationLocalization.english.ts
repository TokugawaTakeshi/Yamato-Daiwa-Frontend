import type EmailAddressInputtedValueValidation from "./EmailAddressInputtedValueValidation";
import emailAddressInputtedValueValidationRuleLocalization__english from
    "../../../PreMadeRules/Strings/EmailAddressInputtedValueValidationRuleLocalization.english";
import type MinimalCharactersCountInputtedValueValidationRule from
    "../../../PreMadeRules/Strings/MinimalCharactersCountInputtedValueValidationRule";
import type MaximalCharactersCountInputtedValueValidationRule from
    "../../../PreMadeRules/Strings/MaximalCharactersCountInputtedValueValidationRule";


const emailAddressInputtedValueValidationLocalization__english: EmailAddressInputtedValueValidation.Localization = {

  requiredInputIsMissingValidationErrorMessage:
      "The email address is required. Please input the email address.",

  minimalCharactersCountValidationErrorMessageBuilder: (
    { rawValue, minimalCharactersCount }: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `${ rawValue.length } characters is not enough for the email address. ` +
      `Please check the correct email address and input at least ${ minimalCharactersCount } characters.`,

  maximalCharactersCountValidationErrorMessageBuilder: (
    { rawValue, maximalCharactersCount }: MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `${ rawValue.length } characters is too many for the email address. ` +
      `Please check the correct email address and input no more than ${ maximalCharactersCount } characters.`,

  invalidEmailAddressErrorMessageBuilder: emailAddressInputtedValueValidationRuleLocalization__english.errorMessageBuilder

};


export default emailAddressInputtedValueValidationLocalization__english;
