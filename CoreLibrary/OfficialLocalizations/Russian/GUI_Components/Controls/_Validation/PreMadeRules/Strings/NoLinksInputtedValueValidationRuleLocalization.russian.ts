import type { NoLinksInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const noLinksInputtedValueValidationRuleLocalization__russian:
    NoLinksInputtedValueValidationRule.Localization =
    {
      errorMessageBuilder: (): string =>
          "Похоже, последовательность символов содержит ссылку, в то время как ссылки не допускаются. " +
          "Пожалуйста, удалите ссылку."
    };
