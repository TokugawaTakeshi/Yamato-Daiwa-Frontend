import type { MaximalCharactersCountInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const MaximalCharactersCountInputtedValueValidationRuleLocalization__Japanese:
    MaximalCharactersCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { maximalCharactersCount }: MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `入力文字数が多すぎます。最大${ maximalCharactersCount }文字以下で入力してください。`
};
