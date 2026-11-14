import type { LinkValidationRule } from "@yamato-daiwa/frontend";


export const LinkValidationRuleLocalization__Russian: LinkValidationRule.Localization = {
  errorMessageBuilder: (): string =>
      "Введённая последовательность символов не похожа на ссылку. " +
      "Пожалуйста, проверьте источник, предоставивший эту ссылку, а также соответствует ли эта ссылка существующей " +
        "веб-странице или файлу, после чего введите верное значение (рекомендуется копирование/вставка)."
};
