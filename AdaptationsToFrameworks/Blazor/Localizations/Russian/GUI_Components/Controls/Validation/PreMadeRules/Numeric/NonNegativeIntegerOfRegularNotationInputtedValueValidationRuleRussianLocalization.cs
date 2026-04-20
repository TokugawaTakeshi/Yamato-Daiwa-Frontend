using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Numeric;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation.PreMadeRules.Numeric;


public struct NonNegativeIntegerOfRegularNotationInputtedValueValidationRuleRussianLocalization :
    NonNegativeIntegerOfRegularNotationInputtedValueValidationRule.ILocalization
{

  public Func<
    NonNegativeIntegerOfRegularNotationInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder =>
      templateVariables =>
          "Введённое значение не является неотрицательным целым числом (неэкспоненциальной записи). " +
          "Пожалуйста, введите только цифры.";

}
