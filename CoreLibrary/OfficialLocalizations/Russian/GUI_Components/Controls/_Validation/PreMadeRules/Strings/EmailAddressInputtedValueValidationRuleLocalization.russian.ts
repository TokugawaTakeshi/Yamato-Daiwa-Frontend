import type { EmailAddressInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const emailAddressInputtedValueValidationRuleLocalization__russian:
    EmailAddressInputtedValueValidationRule.Localization =
    {
      errorMessageBuilder: (): string =>
          "Введённая последовательность символов не соответствует формату электронного адреса. " +
          "Пожалуйста, проверьте правильный электронный адрес, затем введите его."
    };
