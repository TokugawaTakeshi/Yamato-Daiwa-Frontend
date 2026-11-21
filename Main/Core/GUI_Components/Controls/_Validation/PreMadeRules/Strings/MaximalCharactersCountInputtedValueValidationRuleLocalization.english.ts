import type MaximalCharactersCountInputtedValueValidationRule from "./MaximalCharactersCountInputtedValueValidationRule";


const maximalCharactersCountInputtedValueValidationRuleLocalization__english:
    MaximalCharactersCountInputtedValueValidationRule.Localization =
    {
      errorMessageBuilder: (
        { maximalCharactersCount }: MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
      ): string =>
          "Too many characters has been inputted. " +
          `Please leave no more than ${ maximalCharactersCount } characters.`
    };


export default maximalCharactersCountInputtedValueValidationRuleLocalization__english;
