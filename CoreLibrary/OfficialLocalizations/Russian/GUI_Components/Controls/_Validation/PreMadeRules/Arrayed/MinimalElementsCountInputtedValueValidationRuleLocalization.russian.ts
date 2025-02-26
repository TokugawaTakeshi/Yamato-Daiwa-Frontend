import type { MinimalElementsCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const minimalElementsCountInputtedValueValidationRuleLocalization__russian:
    MinimalElementsCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { minimalElementsCount }: MinimalElementsCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "Указано слишком мало пунктов. " +
      `Пожалуйста, укажите хотя бы ${ minimalElementsCount }.`
};
