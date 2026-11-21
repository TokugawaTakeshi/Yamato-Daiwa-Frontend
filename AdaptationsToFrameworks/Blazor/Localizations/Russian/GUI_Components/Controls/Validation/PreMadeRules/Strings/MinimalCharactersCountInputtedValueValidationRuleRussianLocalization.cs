using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct MinimalCharactersCountInputtedValueValidationRuleRussianLocalization : 
    MinimalCharactersCountInputtedValueValidationRule.ILocalization
{
  
  public Func<
    MinimalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          "Введённое количество символов меньше минимально требуемого. " +
          $"Пожалуйста, введите хотя бы { templateVariables.MinimalCharactersCount } символов.";

}