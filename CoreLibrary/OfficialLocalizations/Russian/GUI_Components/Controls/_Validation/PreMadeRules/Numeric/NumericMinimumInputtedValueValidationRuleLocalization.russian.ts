import type { NumericMinimumInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const numericMinimumInputtedValueValidationRuleLocalization__russian:
    NumericMinimumInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: ({ minimalValue }: NumericMinimumInputtedValueValidationRule.ErrorMessage.TemplateVariables): string =>
      "Введённое число меньше минимально необходимого. " +
      `Пожалуйста, введи число не меньше ${ minimalValue }.`
};
