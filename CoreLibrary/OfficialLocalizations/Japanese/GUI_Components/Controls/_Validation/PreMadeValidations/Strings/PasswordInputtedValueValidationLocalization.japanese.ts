import type {
  PasswordInputtedValueValidation,
  AllowedCharactersInputtedValueValidationRule,
  MinimalCharactersCountInputtedValueValidationRule,
  MaximalCharactersCountInputtedValueValidationRule
} from "@yamato-daiwa/frontend";


export const passwordInputtedValueValidationLocalization__japanese: PasswordInputtedValueValidation.Localization = {

  requiredInputIsMissingValidationErrorMessage: "パスワードの入力は必須です。",

  allowedCharactersValidationErrorMessageBuilder: (
    { inputtedDisallowedCharacters }: AllowedCharactersInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "パスワードに使えない文字が含まれています。" +
      "使用可能文字でもう一度入力してください。" +
      `＜使用不可：${ inputtedDisallowedCharacters.join(" ") }＞`,

  minimalCharactersCountValidationErrorMessageBuilder: (
    { minimalCharactersCount }: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string => `入力されたパスワード文字数が少なすぎます。${ minimalCharactersCount }文字以上でもう一度入力してください。`,

  maximalCharactersCountValidationErrorMessageBuilder: (
    { maximalCharactersCount }: MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `入力されたパスワードは長すぎます。最大${ maximalCharactersCount }文字以下で入力してください。`

};
