using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct MinimalCharactersCountInputtedValueValidationRuleJapaneseLocalization : 
    MinimalCharactersCountInputtedValueValidationRule.ILocalization
{
  
  public Func<
    MinimalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          $"入力文字数が少なすぎます。最低{ templateVariables.MinimalCharactersCount }文字以上で入力してください。";

}