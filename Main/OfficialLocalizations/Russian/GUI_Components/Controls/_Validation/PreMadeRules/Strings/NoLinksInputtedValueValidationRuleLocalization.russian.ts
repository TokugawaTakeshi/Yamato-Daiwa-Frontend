import type { NoLinksInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const NoLinksInputtedValueValidationRuleLocalization__Russian: NoLinksInputtedValueValidationRule.Localization =
    {
      errorMessageBuilder: (): string =>
          "Обнаружена похожая на ссылку последовательность символов в то время как ссылки не допускаются. " +
          "Пожалуйста, удалите ссылку."
    };
