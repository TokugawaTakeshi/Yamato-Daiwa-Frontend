using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public record EmailAddressInputtedValueValidationRuleJapaneseLocalization : 
    EmailAddressInputtedValueValidationRule.ILocalization
{

  public Func<
    EmailAddressInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      _ =>
          "入力されたメールアドレスは「正しい形式になっていない」可能性があります。" +
          "正しいメールアドレスかどうかご確認ください。";

}