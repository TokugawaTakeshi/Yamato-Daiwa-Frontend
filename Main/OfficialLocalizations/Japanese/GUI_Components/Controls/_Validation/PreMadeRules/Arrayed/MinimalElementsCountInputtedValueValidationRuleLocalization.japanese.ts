import type { MinimalElementsCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const MinimalElementsCountInputtedValueValidationRuleLocalization__Japanese:
    MinimalElementsCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { minimalElementsCount }: MinimalElementsCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `入力項目数が少なすぎます。最低${ minimalElementsCount }項目以上で入力してください。`
};
