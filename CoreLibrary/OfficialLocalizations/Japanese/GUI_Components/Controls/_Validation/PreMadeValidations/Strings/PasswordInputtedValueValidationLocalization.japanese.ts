import type {
  PasswordInputtedValueValidation,
  AllowedCharactersInputtedValueValidationRule,
  MinimalCharactersCountInputtedValueValidationRule,
  MaximalCharactersCountInputtedValueValidationRule
} from "@yamato-daiwa/frontend";


const passwordInputtedValueValidationLocalization__japanese: PasswordInputtedValueValidation.Localization = {

  requiredInputIsMissingValidationErrorMessage:
      "パスワードは必須となります。お手数ですが、パスワードを入力して下さい。",

  disallowedCharactersFoundValidationErrorMessageBuilder: (
    { inputtedDisallowedCharacters }: AllowedCharactersInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `入力文中の「${ inputtedDisallowedCharacters.join(",") }」は、パスワードでご使用いただけない文字です。ほかの文字をお使いください。`,

  minimalCharactersCountValidationErrorMessageBuilder: (
    { minimalCharactersCount }: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string => `入力されたパスワード文字数が少なすぎます。${ minimalCharactersCount }文字以上でもう一度入力してください。`,

  tooManyCharactersValidationErrorMessageBuilder: (
    { maximalCharactersCount }: MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `入力されたパスワードは長すぎます。最大${ maximalCharactersCount }文字以下で入力してください。`

};


export default passwordInputtedValueValidationLocalization__japanese;
