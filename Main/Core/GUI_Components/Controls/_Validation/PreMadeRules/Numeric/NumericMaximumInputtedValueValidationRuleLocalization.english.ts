import type NumericMaximumInputtedValueValidationRule from "./NumericMaximumInputtedValueValidationRule";


const numericMaximumInputtedValueValidationRuleLocalization__english:
    NumericMaximumInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: ({ maximalValue }: NumericMaximumInputtedValueValidationRule.ErrorMessage.TemplateVariables): string =>
      `The inputted number is exceeding the ${ maximalValue }, the maximal allowed value. ` +
      `Please input the number not greater than ${ maximalValue }.`
};


export default numericMaximumInputtedValueValidationRuleLocalization__english;
