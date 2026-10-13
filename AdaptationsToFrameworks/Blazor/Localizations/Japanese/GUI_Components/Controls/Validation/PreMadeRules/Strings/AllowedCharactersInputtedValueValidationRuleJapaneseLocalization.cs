using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct AllowedCharactersInputtedValueValidationRuleJapaneseLocalization : 
    AllowedCharactersInputtedValueValidationRule.ILocalization
{
  
  public Func<
    AllowedCharactersInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          "恐れ入りますが、下記の文字は利用不可能となっております。" +
          $"「{ String.Join(", ", templateVariables.InputtedDisallowedCharacters) }」。" +
          "この文字を削除していただくか、他の文字に置き換えてください。";

}