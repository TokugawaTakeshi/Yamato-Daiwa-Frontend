import type NumericMinimumInputtedValueValidationRule from "./NumericMinimumInputtedValueValidationRule";


const numericMinimumInputtedValueValidationRuleLocalization__english:
    NumericMinimumInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: ({ minimalValue }: NumericMinimumInputtedValueValidationRule.ErrorMessage.TemplateVariables): string =>
      `The inputted number is less than ${ minimalValue }, the minimal required value. ` +
      `Please input the number not smaller than ${ minimalValue }.`
};


export default numericMinimumInputtedValueValidationRuleLocalization__english;
