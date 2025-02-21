import type { MaximalElementsCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


const maximalElementsCountInputtedValueValidationRuleLocalization__russian:
    MaximalElementsCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { maximalElementsCount }: MaximalElementsCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "Слишком много пунктов. " +
      `Пожалуйста, введите не более ${ maximalElementsCount }.`
};


export default maximalElementsCountInputtedValueValidationRuleLocalization__russian;
