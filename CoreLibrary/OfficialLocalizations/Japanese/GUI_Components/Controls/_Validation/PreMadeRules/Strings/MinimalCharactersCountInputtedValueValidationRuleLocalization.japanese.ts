import type { MinimalCharactersCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


const minimalCharactersCountInputtedValueValidationRuleLocalization__japanese:
    MinimalCharactersCountInputtedValueValidationRule.Localization =
    {
      errorMessageBuilder: (
        { minimalCharactersCount }: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
      ): string =>
          `入力文字数が少なすぎます。最低${ minimalCharactersCount }文字以上で入力してください。`
    };


export default minimalCharactersCountInputtedValueValidationRuleLocalization__japanese;
