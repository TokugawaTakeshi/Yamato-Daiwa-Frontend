using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeValidations;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeValidations;


public record EmailAddressInputtedValueValidationJapaneseLocalization: 
    EmailAddressInputtedValueValidation.ILocalization
{
  
  public string RequiredInputIsMissingValidationErrorMessage  => 
      "メールアドレスは必須です。ご入力をお願いいたします。";
  
  public Func<MinimalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      MinimalCharactersCountValidationErrorMessageBuilder =>
        _ => "入力されたメールアドレスは「文字数が少なすぎる」可能性があります。正しいメールアドレスかどうかご確認ください。";

  public Func<MaximalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      MaximalCharactersCountValidationErrorMessageBuilder =>
        _ => "入力されたメールアドレスは「文字数が多すぎる」可能性があります。正しいメールアドレスかどうかご確認ください。";

  public Func<EmailAddressInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      InvalidEmailAddressErrorMessageBuilder =>
        new EmailAddressInputtedValueValidationRuleEnglishLocalization().ErrorMessageBuilder;
  
}