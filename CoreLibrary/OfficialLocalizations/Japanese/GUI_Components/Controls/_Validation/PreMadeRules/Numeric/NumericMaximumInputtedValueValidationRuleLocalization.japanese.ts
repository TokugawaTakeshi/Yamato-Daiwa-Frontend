import type { NumericMaximumInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const numericMaximumInputtedValueValidationRuleLocalization__japanese:
    NumericMaximumInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: ({ maximalValue }: NumericMaximumInputtedValueValidationRule.ErrorMessage.TemplateVariables): string =>
      `入力された値は${ maximalValue }と言う最大数を超えています。` +
      `最大${ maximalValue }を入力して下さい。`
};
