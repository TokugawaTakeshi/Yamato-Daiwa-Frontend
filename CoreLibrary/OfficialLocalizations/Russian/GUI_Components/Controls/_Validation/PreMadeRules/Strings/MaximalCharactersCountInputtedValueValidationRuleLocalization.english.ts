import type { MaximalCharactersCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const maximalCharactersCountInputtedValueValidationRuleLocalization__russian:
    MaximalCharactersCountInputtedValueValidationRule.Localization =
    {
      errorMessageBuilder: (
        { maximalCharactersCount }: MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
      ): string =>
          "Введённое количество символов превышает максимально допустимое. " +
          `Пожалуйста, введите не более ${ maximalCharactersCount } символов.`
    };
