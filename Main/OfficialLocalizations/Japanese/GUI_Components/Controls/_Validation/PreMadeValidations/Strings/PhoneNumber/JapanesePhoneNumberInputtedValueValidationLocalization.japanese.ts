import type { JapanesePhoneNumberInputtedValueValidation } from "./JapanesePhoneNumberInputtedValueValidation";
import { JapanesePhoneNumberInputtedValueValidationRuleLocalization__Japanese } from
    "../../../PreMadeRules/Strings/JapanesePhoneNumberInputtedValueValidationRuleLocalization.japanese";


export const JapanesePhoneNumberInputtedValueValidationLocalization__Japanese:
    JapanesePhoneNumberInputtedValueValidation.Localization = {

  requiredInputIsMissingValidationErrorMessage:
      "電話番号は必須です。ご入力をお願いいたします。",

  disallowedCharactersFoundErrorMessageBuilder: (): string =>
      "「電話番号で使えない文字」が含まれています。数字（0~9）とハイフン（-）、または数字のみで入力してください。",

  minimalCharactersCountValidationErrorMessageBuilder: (): string =>
      "入力された電話番号は「文字数が少なすぎる」可能性があります。正しい電話番号かどうかご確認ください。",

  invalidPhoneNumberErrorMessageBuilder:
      JapanesePhoneNumberInputtedValueValidationRuleLocalization__Japanese.errorMessageBuilder

};
