namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Arrayed;


public struct MaximalElementsCountInputtedValueValidationRuleEnglishLocalization : 
    MaximalElementsCountInputtedValueValidationRule.ILocalization
{
  
  public Func<
    MaximalElementsCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          "Too many items has been inputted. " +
          $"Please input no more than { templateVariables.MaximalElementsCount } items.";

}
