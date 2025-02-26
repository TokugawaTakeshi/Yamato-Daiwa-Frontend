import type {
  EmailAddressInputtedValueValidation,
  MinimalCharactersCountInputtedValueValidationRule,
  MaximalCharactersCountInputtedValueValidationRule
} from "@yamato-daiwa/frontend";
import {
  emailAddressInputtedValueValidationRuleLocalization__russian
} from "../../PreMadeRules/Strings/EmailAddressInputtedValueValidationRuleLocalization.russian";


export const emailAddressInputtedValueValidationLocalization__russian: EmailAddressInputtedValueValidation.Localization = {

  requiredInputIsMissingValidationErrorMessage:
      "Ввод электронного адреса обязателен. Пожалуйста, введите адрес электронной почты.",

  minimalCharactersCountValidationErrorMessageBuilder: (
    { rawValue, minimalCharactersCount }: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `${ rawValue.length } символов недостаточно для электронного адреса. ` +
      `Пожалуйста, проверьте электронный адрес и введите не менее ${ minimalCharactersCount } символов.`,

  maximalCharactersCountValidationErrorMessageBuilder: (
    { rawValue, maximalCharactersCount }: MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `${ rawValue.length } символов слишком много для электронного адреса. ` +
      `Пожалуйста, проверьте электронный адрес и введите не более ${ maximalCharactersCount } символов.`,

  invalidEmailAddressErrorMessageBuilder: emailAddressInputtedValueValidationRuleLocalization__russian.errorMessageBuilder

};
