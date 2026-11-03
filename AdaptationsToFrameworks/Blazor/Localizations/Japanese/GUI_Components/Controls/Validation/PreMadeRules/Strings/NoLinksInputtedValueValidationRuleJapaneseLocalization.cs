using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct NoLinksInputtedValueValidationRuleJapaneseLocalization : NoLinksInputtedValueValidationRule.ILocalization
{

  public Func<NoLinksInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> ErrorMessageBuilder =>
      _ =>
          "「URL・アドレス」と思われる文字列を検出しましたが、URL・アドレスの入力は許可されておりません。該当部分を削除して、再度入力してください。";

}
