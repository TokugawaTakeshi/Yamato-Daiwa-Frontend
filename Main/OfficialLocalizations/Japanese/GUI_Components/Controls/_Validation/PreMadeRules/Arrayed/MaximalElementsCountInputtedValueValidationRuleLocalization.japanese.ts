import type { MaximalElementsCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const MaximalElementsCountInputtedValueValidationRuleLocalization__Japanese:
    MaximalElementsCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { maximalElementsCount }: MaximalElementsCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "入力項目が多すぎます。" +
      `最大${ maximalElementsCount }項目以下で入力してください。。`
};
