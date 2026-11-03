using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Arrayed;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation.PreMadeRules.Arrayed;


public struct MinimalElementsCountInputtedValueValidationRuleRussianLocalization : 
    MinimalElementsCountInputtedValueValidationRule.ILocalization
{
  
  public Func<
    MinimalElementsCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          "Указанное количество пунктов меньше минимально требуемого. " +
          $"Пожалуйста, укажите хотя бы { templateVariables.MinimalElementsCount } пунктов.";

}
