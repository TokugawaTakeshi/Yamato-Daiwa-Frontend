import type { MaximalCharactersCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const MaximalCharactersCountInputtedValueValidationRuleLocalization__Russian:
    MaximalCharactersCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { maximalCharactersCount }: MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "Введённое количество символов превышает максимально допустимое. " +
      `Пожалуйста, введите не более ${ maximalCharactersCount } символов.`
};
