import type {
  PasswordInputtedValueValidation,
  AllowedCharactersInputtedValueValidationRule,
  MinimalCharactersCountInputtedValueValidationRule,
  MaximalCharactersCountInputtedValueValidationRule
} from "@yamato-daiwa/frontend";


export const PasswordInputtedValueValidationLocalization__Russian: PasswordInputtedValueValidation.Localization = {

  requiredInputIsMissingValidationErrorMessage:
      "Пароль обязателен для ввода. Пожалуйста, введите пароль.",

  allowedCharactersValidationErrorMessageBuilder: (
    { inputtedDisallowedCharacters }: AllowedCharactersInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `Введённый пароль включает следующие запрещённые символы: ${ inputtedDisallowedCharacters.join(", ") }. ` +
      "Пожалуйста, удалите эти символы или замените их на другие.",

  minimalCharactersCountValidationErrorMessageBuilder: (
    { minimalCharactersCount }: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `Пароль слишком короткой. Пожалуйста, введите хотя бы ${ minimalCharactersCount } символов.`,

  maximalCharactersCountValidationErrorMessageBuilder: (
    { maximalCharactersCount }: MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "Пароль содержит слишком много символов. " +
      "Длинные пароли обычно рекомендуются в целях безопасности, но из-за системных ограничений мы просим Вас ввести" +
        ` не более ${ maximalCharactersCount } символов.`

};
