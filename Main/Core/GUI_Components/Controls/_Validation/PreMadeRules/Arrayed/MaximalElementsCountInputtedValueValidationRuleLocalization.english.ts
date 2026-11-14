import type MaximalElementsCountInputtedValueValidationRule from "./MaximalElementsCountInputtedValueValidationRule";


const maximalElementsCountInputtedValueValidationRuleLocalization__english:
    MaximalElementsCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { maximalElementsCount }: MaximalElementsCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "Too many items has been inputted. " +
      `Please input no more than ${ maximalElementsCount } items.`
};


export default maximalElementsCountInputtedValueValidationRuleLocalization__english;
