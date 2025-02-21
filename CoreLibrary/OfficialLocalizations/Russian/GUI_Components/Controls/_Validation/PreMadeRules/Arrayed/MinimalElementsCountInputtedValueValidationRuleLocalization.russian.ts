import type { MinimalElementsCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


const minimalElementsCountInputtedValueValidationRuleLocalization__russian:
    MinimalElementsCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { minimalElementsCount }: MinimalElementsCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "Слишком мало пунктов. " +
      `Пожалуйста, введите хотя бы ${ minimalElementsCount }.`
};


export default minimalElementsCountInputtedValueValidationRuleLocalization__russian;
