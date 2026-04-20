import type {
  EmailAddressInputtedValueValidation,
  MinimalCharactersCountInputtedValueValidationRule,
  MaximalCharactersCountInputtedValueValidationRule
} from "@yamato-daiwa/frontend";
import { EmailAddressInputtedValueValidationRuleLocalization__Russian } from
    "../../PreMadeRules/Strings/EmailAddressInputtedValueValidationRuleLocalization.russian";


export const EmailAddressInputtedValueValidationLocalization__Russian: EmailAddressInputtedValueValidation.Localization = {

  requiredInputIsMissingValidationErrorMessage:
      "Ввод электронного адреса обязателен. Пожалуйста, введите адрес электронной почты.",

  minimalCharactersCountValidationErrorMessageBuilder: (
    { rawValue, minimalCharactersCount }: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `${ rawValue.length } символов недостаточно для электронного адреса. ` +
      `Пожалуйста, проверьте адрес электронной почты и введите не менее ${ minimalCharactersCount } символов.`,

  maximalCharactersCountValidationErrorMessageBuilder: (
    { rawValue, maximalCharactersCount }: MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `${ rawValue.length } символов слишком много для электронного адреса. ` +
      `Пожалуйста, проверьте адрес электронной почты и введите не более ${ maximalCharactersCount } символов.`,

  invalidEmailAddressErrorMessageBuilder: EmailAddressInputtedValueValidationRuleLocalization__Russian.errorMessageBuilder

};
