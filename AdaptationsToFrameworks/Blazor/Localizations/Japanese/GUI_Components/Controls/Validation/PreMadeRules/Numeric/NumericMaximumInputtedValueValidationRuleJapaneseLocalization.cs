using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Numeric;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Numeric;


public struct NumericMaximumInputtedValueValidationRuleJapaneseLocalization :
    NumericMaximumInputtedValueValidationRule.ILocalization
{

  public Func<
    NumericMaximumInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder =>
      templateVariables =>
          $"入力された数は{ templateVariables.MaximalValue }と言う最大値を超えています。" +
          $"最大{ templateVariables.MaximalValue }以下で入力して下さい。";

}
