import type PasswordInputtedValueValidation from "./PasswordInputtedValueValidation";

import type AllowedCharactersInputtedValueValidationRule from
    "../../../PreMadeRules/Strings/AllowedCharactersInputtedValueValidationRule";
import type MinimalCharactersCountInputtedValueValidationRule from
    "../../../PreMadeRules/Strings/MinimalCharactersCountInputtedValueValidationRule";
import type MaximalCharactersCountInputtedValueValidationRule from
    "../../../PreMadeRules/Strings/MaximalCharactersCountInputtedValueValidationRule";


const passwordInputtedValueValidationLocalization__english: PasswordInputtedValueValidation.Localization = {

  requiredInputIsMissingValidationErrorMessage:
      "The password is required. Please input the password.",

  disallowedCharactersFoundValidationErrorMessageBuilder: (
    { inputtedDisallowedCharacters }: AllowedCharactersInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `The password is including the following disallowed characters: ${ inputtedDisallowedCharacters.join(", ") }. ` +
      "Please replace or remove these characters.",

  minimalCharactersCountValidationErrorMessageBuilder: (
    { minimalCharactersCount }: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string => `Not enough characters for the password. Please input at least ${ minimalCharactersCount } characters.`,

  tooManyCharactersValidationErrorMessageBuilder: (
    { maximalCharactersCount }: MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "The password has more characters than allowed. " +
      "The long passwords is the good practice, but because of system limitations we are asking you to input " +
          `${ maximalCharactersCount } characters as maximum.`

};


export default passwordInputtedValueValidationLocalization__english;
