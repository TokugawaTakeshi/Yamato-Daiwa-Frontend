import type { EmailAddressInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const emailAddressInputtedValueValidationRuleLocalization__japanese:
    EmailAddressInputtedValueValidationRule.Localization =
    {
      errorMessageBuilder: (): string =>
          "入力されたメールアドレスは「正しい形式になっていない」可能性があります。" +
          "正しいメールアドレスかどうかご確認ください。"
    };
