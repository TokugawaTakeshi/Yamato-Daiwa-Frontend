import type {
  PasswordInputtedValueValidation,
  AllowedCharactersInputtedValueValidationRule,
  MinimalCharactersCountInputtedValueValidationRule,
  MaximalCharactersCountInputtedValueValidationRule
} from "@yamato-daiwa/frontend";


const passwordInputtedValueValidationLocalization__russian: PasswordInputtedValueValidation.Localization = {

  requiredInputIsMissingValidationErrorMessage:
      "Пароль обязателен для ввода. Пожалуйста, введите пароль.",

  disallowedCharactersFoundValidationErrorMessageBuilder: (
    { inputtedDisallowedCharacters }: AllowedCharactersInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `Введённый пароль имеет следующие запрещённые символы: ${ inputtedDisallowedCharacters.join(",") }. ` +
      "Пожалуйста, удалите эти символы или замените их на другие.",

  minimalCharactersCountValidationErrorMessageBuilder: (
    { minimalCharactersCount }: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string => `Пароль слишком короткой. Пожалуйста, введите хотя бы ${ minimalCharactersCount } символов.`,

  tooManyCharactersValidationErrorMessageBuilder: (
    { maximalCharactersCount }: MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      "Пароль содержит слишком много символов. " +
      "Длинные пароли обычно рекомендуются, но из-за системных ограничений мы просим Вас ввести не более " +
          `${ maximalCharactersCount } символов.`

};


export default passwordInputtedValueValidationLocalization__russian;
