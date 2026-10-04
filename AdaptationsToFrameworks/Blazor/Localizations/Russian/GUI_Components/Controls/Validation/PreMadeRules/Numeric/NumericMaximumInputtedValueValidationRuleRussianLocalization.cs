using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Numeric;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation.PreMadeRules.Numeric;


public struct NumericMaximumInputtedValueValidationRuleRussianLocalization :
    NumericMaximumInputtedValueValidationRule.ILocalization
{

  public Func<
    NumericMaximumInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder =>
      templateVariables =>
          "Введённое число превышает максимально допустимое. " +
          $"Пожалуйста, введите число не больше { templateVariables.MaximalValue }.";

}
