import type { NumericMinimumInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const numericMinimumInputtedValueValidationRuleLocalization__japanese:
    NumericMinimumInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: ({ minimalValue }: NumericMinimumInputtedValueValidationRule.ErrorMessage.TemplateVariables): string =>
      `入力された数は${ minimalValue }と言う最小値より小さいです。` +
      `${ minimalValue }以上で入力してください。`
};
