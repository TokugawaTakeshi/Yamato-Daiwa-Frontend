import type { NumericMinimumInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const NumericMinimumInputtedValueValidationRuleLocalization__Russian:
    NumericMinimumInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: ({ minimalValue }: NumericMinimumInputtedValueValidationRule.ErrorMessage.TemplateVariables): string =>
      "Введённое число меньше минимально допустимого. " +
      `Пожалуйста, введи число не меньше ${ minimalValue }.`
};
