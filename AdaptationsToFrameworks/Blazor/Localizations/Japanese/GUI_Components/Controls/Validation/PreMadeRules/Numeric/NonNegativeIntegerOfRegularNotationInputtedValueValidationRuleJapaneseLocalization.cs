using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Numeric;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Numeric;


public struct NonNegativeIntegerOfRegularNotationInputtedValueValidationRuleJapaneseLocalization :
    NonNegativeIntegerOfRegularNotationInputtedValueValidationRule.ILocalization
{

  public Func<
    NonNegativeIntegerOfRegularNotationInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder =>
      templateVariables =>
          "入力された数非負の整数（非指数表記）ではありません。" +
          "数字のみ入力してください。";

}
