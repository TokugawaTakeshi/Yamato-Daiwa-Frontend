import type { MinimalElementsCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const MinimalElementsCountInputtedValueValidationRuleLocalization__Russian:
    MinimalElementsCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { minimalElementsCount }: MinimalElementsCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "Указанное количество пунктов меньше минимально требуемого. " +
      `Пожалуйста, укажите хотя бы ${ minimalElementsCount } пунктов.`
};
