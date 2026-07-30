import type { MaximalElementsCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const MaximalElementsCountInputtedValueValidationRuleLocalization__Russian:
    MaximalElementsCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { maximalElementsCount }: MaximalElementsCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "Указанное количество пунктов превышает максимально допустимое. " +
      `Пожалуйста, укажите не более ${ maximalElementsCount } пунктов.`
};
