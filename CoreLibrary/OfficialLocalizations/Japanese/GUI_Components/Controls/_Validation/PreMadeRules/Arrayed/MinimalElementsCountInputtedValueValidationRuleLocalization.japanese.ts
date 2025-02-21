import type { MinimalElementsCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


const minimalElementsCountInputtedValueValidationRuleLocalization__japanese:
    MinimalElementsCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { minimalElementsCount }: MinimalElementsCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "入力された項目数が最小数に達していないのです。" +
      `最低${ minimalElementsCount }にしてください。`
};


export default minimalElementsCountInputtedValueValidationRuleLocalization__japanese;
