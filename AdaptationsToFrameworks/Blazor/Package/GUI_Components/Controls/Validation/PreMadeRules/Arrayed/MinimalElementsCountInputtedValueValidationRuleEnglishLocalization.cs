namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Arrayed;


public struct MinimalElementsCountInputtedValueValidationRuleEnglishLocalization : 
    MinimalElementsCountInputtedValueValidationRule.ILocalization
{
  
  public Func<
    MinimalElementsCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          "Too few items has been inputted. " +
          $"Please input at least { templateVariables.MinimalElementsCount } items.";

}
