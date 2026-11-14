using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Arrayed;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation.PreMadeRules.Arrayed;


public struct MaximalElementsCountInputtedValueValidationRuleRussianLocalization : 
    MaximalElementsCountInputtedValueValidationRule.ILocalization
{
  
  public Func<
    MaximalElementsCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          "Указанное количество пунктов превышает максимально допустимое. " +
          $"Пожалуйста, укажите не более { templateVariables.MaximalElementsCount } пунктов.";

}
