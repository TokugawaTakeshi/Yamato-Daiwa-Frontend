namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Numeric;


public struct NumericMaximumInputtedValueValidationRuleEnglishLocalization :
    NumericMaximumInputtedValueValidationRule.ILocalization
{

  public Func<
    NumericMaximumInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder =>
      templateVariables =>
          $"The inputted number is exceeding the { templateVariables.MaximalValue }, the maximal allowed value. " +
          $"Please input the number not greater than { templateVariables.MaximalValue }.";

}
