import type { NumericMinimumInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const numericMinimumInputtedValueValidationRuleLocalization__japanese:
    NumericMinimumInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: ({ minimalValue }: NumericMinimumInputtedValueValidationRule.ErrorMessage.TemplateVariables): string =>
      `入力された値は${ minimalValue }と言う最小値より小さい。` +
      `${ minimalValue }以上してしてください。`
};
