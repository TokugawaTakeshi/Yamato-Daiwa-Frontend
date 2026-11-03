using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct MaximalCharactersCountInputtedValueValidationRuleJapaneseLocalization : 
    MaximalCharactersCountInputtedValueValidationRule.ILocalization
{
  
  public Func<
    MaximalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          $"入力文字数が多すぎます。最大{ templateVariables.MaximalCharactersCount }文字以下で入力してください。";

}