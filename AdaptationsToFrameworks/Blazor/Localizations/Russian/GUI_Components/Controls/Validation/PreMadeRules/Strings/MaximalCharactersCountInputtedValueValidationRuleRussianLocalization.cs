using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct MaximalCharactersCountInputtedValueValidationRuleRussianLocalization : 
    MaximalCharactersCountInputtedValueValidationRule.ILocalization
{
  
  public Func<
    MaximalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          "Введённое количество символов превышает максимально допустимое. " +
          $"Пожалуйста, введите не более { templateVariables.MaximalCharactersCount } символов.";

}