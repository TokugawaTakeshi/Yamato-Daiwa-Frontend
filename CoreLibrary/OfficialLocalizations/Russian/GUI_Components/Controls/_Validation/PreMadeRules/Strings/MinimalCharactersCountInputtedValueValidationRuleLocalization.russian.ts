import type { MinimalCharactersCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const minimalCharactersCountInputtedValueValidationRuleLocalization__russian:
    MinimalCharactersCountInputtedValueValidationRule.Localization =
    {
      errorMessageBuilder: (
        { minimalCharactersCount }: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
      ): string =>
          "Введённое количество символов меньше минимально требуемого. " +
          `Пожалуйста, введите хотя бы ${ minimalCharactersCount } символов.`
    };
