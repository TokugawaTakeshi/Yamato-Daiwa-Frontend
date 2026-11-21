using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Numeric;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Numeric;


public struct NumericMinimumInputtedValueValidationRuleJapaneseLocalization :
    NumericMinimumInputtedValueValidationRule.ILocalization
{

  public Func<
    NumericMinimumInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder =>
      templateVariables =>
          $"入力された数は{ templateVariables.MinimalValue }と言う最小値より小さいです。" +
          $"{ templateVariables.MinimalValue }以上で入力してください。";

}
