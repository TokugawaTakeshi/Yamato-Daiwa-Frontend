namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct JapanesePhoneNumberInputtedValueValidationRuleJapaneseLocalization : JapanesePhoneNumberInputtedValueValidationRule.ILocalization
{

  public Func<JapanesePhoneNumberInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> ErrorMessageBuilder =>
      _ => "入力された電話番号は「日本国内の電話番号ではない」可能性があります。日本国内の電話番号を入力してください。";

}
