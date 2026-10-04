namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct AllowedCharactersInputtedValueValidationRuleEnglishLocalization : 
    AllowedCharactersInputtedValueValidationRule.ILocalization
{
  
  public Func<
    AllowedCharactersInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          $"The following characters are disallowed: { String.Join(", ", templateVariables.InputtedDisallowedCharacters) }. " +
          "Please remove these characters.";

}