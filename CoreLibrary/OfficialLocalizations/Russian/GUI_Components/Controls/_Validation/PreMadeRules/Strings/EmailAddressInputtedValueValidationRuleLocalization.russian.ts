import type { EmailAddressInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const emailAddressInputtedValueValidationRuleLocalization__russian:
    EmailAddressInputtedValueValidationRule.Localization =
    {
      errorMessageBuilder: (): string =>
          "Введённые символы не соответствует формату электронного адреса. " +
          "Пожалуйста, проверьте правильный адрес электронной почты, который хотите ввести."
    };
