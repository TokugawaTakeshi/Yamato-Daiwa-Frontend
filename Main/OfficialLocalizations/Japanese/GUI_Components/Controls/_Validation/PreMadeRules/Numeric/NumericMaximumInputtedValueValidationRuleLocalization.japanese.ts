import type { NumericMaximumInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const NumericMaximumInputtedValueValidationRuleLocalization__Japanese:
    NumericMaximumInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: ({ maximalValue }: NumericMaximumInputtedValueValidationRule.ErrorMessage.TemplateVariables): string =>
      `入力された数は${ maximalValue }と言う最大値を超えています。` +
      `最大${ maximalValue }以下で入力して下さい。`
};
