using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Arrayed;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Arrayed;


public struct MaximalElementsCountInputtedValueValidationRuleJapaneseLocalization : 
    MaximalElementsCountInputtedValueValidationRule.ILocalization
{
  
  public Func<
    MaximalElementsCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          $"入力項目が多すぎます。最大{ templateVariables.MaximalElementsCount }項目以下で入力してください。";

}
