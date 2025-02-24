import type { MaximalElementsCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const maximalElementsCountInputtedValueValidationRuleLocalization__russian:
    MaximalElementsCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { maximalElementsCount }: MaximalElementsCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "Слишком много пунктов. " +
      `Пожалуйста, введите не более ${ maximalElementsCount }.`
};
