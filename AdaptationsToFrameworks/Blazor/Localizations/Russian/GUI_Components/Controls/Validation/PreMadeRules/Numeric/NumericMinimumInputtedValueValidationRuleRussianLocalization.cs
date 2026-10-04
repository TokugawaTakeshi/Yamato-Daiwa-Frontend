using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Numeric;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation.PreMadeRules.Numeric;


public struct NumericMinimumInputtedValueValidationRuleRussianLocalization :
    NumericMinimumInputtedValueValidationRule.ILocalization
{

  public Func<
    NumericMinimumInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder =>
      templateVariables =>
          "Введённое число меньше минимально допустимого. " +
          $"Пожалуйста, введи число не меньше { templateVariables.MinimalValue }.";

}
