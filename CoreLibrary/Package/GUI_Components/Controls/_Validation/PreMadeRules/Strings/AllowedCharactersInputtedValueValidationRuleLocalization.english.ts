import type AllowedCharactersInputtedValueValidationRule from "./AllowedCharactersInputtedValueValidationRule";


const allowedCharactersInputtedValueValidationRuleLocalization__english:
    AllowedCharactersInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { inputtedDisallowedCharacters }: AllowedCharactersInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
    `Below characters are disallowed: ${ inputtedDisallowedCharacters.join(",") }. ` +
    "Please remove these characters."
};


export default allowedCharactersInputtedValueValidationRuleLocalization__english;
