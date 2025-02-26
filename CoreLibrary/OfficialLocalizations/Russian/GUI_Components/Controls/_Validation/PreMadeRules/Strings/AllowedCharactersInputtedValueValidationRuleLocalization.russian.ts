import type { AllowedCharactersInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const allowedCharactersInputtedValueValidationRuleLocalization__russian:
    AllowedCharactersInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { inputtedDisallowedCharacters }: AllowedCharactersInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
    `Следующие символы не допускаются: ${ inputtedDisallowedCharacters.join(", ") }. ` +
    "Пожалуйста, удалите эти символы или замените на другие."
};
