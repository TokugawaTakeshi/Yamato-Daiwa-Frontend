using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Arrayed;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Arrayed;


public struct MinimalElementsCountInputtedValueValidationRuleJapaneseLocalization : 
    MinimalElementsCountInputtedValueValidationRule.ILocalization
{
  
  public Func<
    MinimalElementsCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          $"入力項目数が少なすぎます。最低{ templateVariables.MinimalElementsCount }項目以上で入力してください。";

}
