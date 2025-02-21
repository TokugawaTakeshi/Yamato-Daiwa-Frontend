import type {
  EmailAddressInputtedValueValidation,
  MinimalCharactersCountInputtedValueValidationRule,
  MaximalCharactersCountInputtedValueValidationRule
} from "@yamato-daiwa/frontend";


const emailAddressInputtedValueValidationLocalization__russian: EmailAddressInputtedValueValidation.Localization = {

  requiredInputIsMissingValidationErrorMessage:
      "Ввод электронного адреса обязателен. Пожалуйста, введите адрес электронной почты.",

  minimalCharactersCountValidationErrorMessageBuilder: (
    { rawValue, minimalCharactersCount }: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `${ rawValue.length } символов недостаточно для электронного адреса. ` +
      `Пожалуйста, введите ${ minimalCharactersCount } characters.`,

  maximalCharactersCountValidationErrorMessageBuilder: (
    { rawValue, maximalCharactersCount }: MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `${ rawValue.length } символов слишком много для электронного адреса. ` +
      `Пожалуйста, введите не более ${ maximalCharactersCount } символов.`,

  invalidEmailAddressErrorMessageBuilder: (): string =>
      "Введён невозможный адрес электронной почты. Пожалуйста, проверьте электронный адрес и откорректируйте ввод."

};


export default emailAddressInputtedValueValidationLocalization__russian;
