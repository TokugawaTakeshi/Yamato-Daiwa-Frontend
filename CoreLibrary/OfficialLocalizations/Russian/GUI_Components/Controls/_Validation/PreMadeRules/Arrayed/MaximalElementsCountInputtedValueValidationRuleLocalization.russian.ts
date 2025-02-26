import type { MaximalElementsCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const maximalElementsCountInputtedValueValidationRuleLocalization__russian:
    MaximalElementsCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { maximalElementsCount }: MaximalElementsCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "Указано слишком много пунктов. " +
      `Пожалуйста, укажите не более ${ maximalElementsCount }.`
};
