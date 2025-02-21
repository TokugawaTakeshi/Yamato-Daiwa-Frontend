import type MinimalElementsCountInputtedValueValidationRule from "./MinimalElementsCountInputtedValueValidationRule";


const minimalElementsCountInputtedValueValidationRuleLocalization__english:
    MinimalElementsCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { minimalElementsCount }: MinimalElementsCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "Too few items has been inputted. " +
      `Please input at least ${ minimalElementsCount } items.`
};


export default minimalElementsCountInputtedValueValidationRuleLocalization__english;
