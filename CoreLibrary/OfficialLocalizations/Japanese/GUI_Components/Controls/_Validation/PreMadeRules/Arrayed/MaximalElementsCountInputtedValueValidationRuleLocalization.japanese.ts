import type { MaximalElementsCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


const maximalElementsCountInputtedValueValidationRuleLocalization__japanese:
    MaximalElementsCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { maximalElementsCount }: MaximalElementsCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "入力された項目が最大数を超えています。" +
      `最大${ maximalElementsCount }にしてください。`
};


export default maximalElementsCountInputtedValueValidationRuleLocalization__japanese;
