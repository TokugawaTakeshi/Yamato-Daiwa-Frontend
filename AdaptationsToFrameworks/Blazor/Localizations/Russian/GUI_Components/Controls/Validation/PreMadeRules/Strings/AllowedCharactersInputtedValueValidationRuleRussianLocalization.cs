using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct AllowedCharactersInputtedValueValidationRuleRussianLocalization : 
    AllowedCharactersInputtedValueValidationRule.ILocalization
{
  
  public Func<
    AllowedCharactersInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          $"Следующие символы не допускаются: { String.Join(", ", templateVariables.InputtedDisallowedCharacters) }. " +
          "Пожалуйста, удалите эти символы или замените на другие.";

}