import type MinimalCharactersCountInputtedValueValidationRule from "./MinimalCharactersCountInputtedValueValidationRule";


const minimalCharactersCountInputtedValueValidationRuleLocalization__english:
    MinimalCharactersCountInputtedValueValidationRule.Localization =
    {
      errorMessageBuilder: (
        { minimalCharactersCount }: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
      ): string =>
          "Not enough characters has been inputted. " +
          `Please input at least ${ minimalCharactersCount } characters.`
    };


export default minimalCharactersCountInputtedValueValidationRuleLocalization__english;
