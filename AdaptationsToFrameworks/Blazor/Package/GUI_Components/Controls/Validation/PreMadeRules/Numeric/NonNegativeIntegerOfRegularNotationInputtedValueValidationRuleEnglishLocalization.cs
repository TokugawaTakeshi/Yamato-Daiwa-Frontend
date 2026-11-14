namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Numeric;


public struct NonNegativeIntegerOfRegularNotationInputtedValueValidationRuleEnglishLocalization :
    NonNegativeIntegerOfRegularNotationInputtedValueValidationRule.ILocalization
{

  public Func<
    NonNegativeIntegerOfRegularNotationInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder =>
      templateVariables =>
          "The inputted value is not the non-negative integer (of non-scientific notation). " +
          "Please input digits only.";

}
