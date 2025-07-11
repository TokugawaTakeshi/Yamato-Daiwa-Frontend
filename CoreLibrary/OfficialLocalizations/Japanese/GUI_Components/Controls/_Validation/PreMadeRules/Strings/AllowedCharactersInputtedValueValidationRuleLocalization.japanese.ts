import type { AllowedCharactersInputtedValueValidationRule } from "@yamato-daiwa/frontend";


export const allowedCharactersInputtedValueValidationRuleLocalization__japanese:
    AllowedCharactersInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    { inputtedDisallowedCharacters }: AllowedCharactersInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
    "恐れ入りますが、下記の文字は利用不可能となっております。" +
    `「${ inputtedDisallowedCharacters.join(",") }」。` +
    "この文字を削除していただくか、他の文字に置き換えてください。"
};
