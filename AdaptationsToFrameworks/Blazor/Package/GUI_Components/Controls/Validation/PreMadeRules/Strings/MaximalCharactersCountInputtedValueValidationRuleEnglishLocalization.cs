namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct MaximalCharactersCountInputtedValueValidationRuleEnglishLocalization : 
    MaximalCharactersCountInputtedValueValidationRule.ILocalization
{
  
  public Func<
    MaximalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          "Too many characters has been inputted. " +
          $"Please leave no more than { templateVariables.MaximalCharactersCount } characters.";

}