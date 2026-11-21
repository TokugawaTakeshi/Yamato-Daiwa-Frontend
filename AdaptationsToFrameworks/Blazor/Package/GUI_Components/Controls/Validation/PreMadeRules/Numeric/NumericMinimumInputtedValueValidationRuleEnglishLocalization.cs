namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Numeric;


public struct NumericMinimumInputtedValueValidationRuleEnglishLocalization :
    NumericMinimumInputtedValueValidationRule.ILocalization
{

  public Func<
    NumericMinimumInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder =>
      templateVariables =>
          $"The inputted number is less than { templateVariables.MinimalValue }, the minimal required value. " +
          $"Please input the number not smaller than { templateVariables.MinimalValue }.";

}
