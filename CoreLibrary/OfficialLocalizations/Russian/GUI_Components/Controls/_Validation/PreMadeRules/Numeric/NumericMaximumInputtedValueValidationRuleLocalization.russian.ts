import type { NumericMaximumInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const numericMaximumInputtedValueValidationRuleLocalization__russian:
    NumericMaximumInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: ({ maximalValue }: NumericMaximumInputtedValueValidationRule.ErrorMessage.TemplateVariables): string =>
      "Введённое число превышает максимально допустимое. " +
      `Пожалуйста, введите число не больше ${ maximalValue }.`
};
