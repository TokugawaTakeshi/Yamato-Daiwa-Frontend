using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeValidations;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeValidations;


public record PasswordInputtedValueValidationJapaneseLocalization : 
    PasswordInputtedValueValidation.ILocalization
{

  public string RequiredInputIsMissingValidationErrorMessage => 
      "パスワードの入力は必須です。";

  public Func<AllowedCharactersInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      AllowedCharactersValidationErrorMessageBuilder =>
        templateVariables =>
            "パスワードに使えない文字が含まれています。" +
            "使用可能文字でもう一度入力してください。" +
            $"＜使用不可：{ String.Join(" ", templateVariables.InputtedDisallowedCharacters) }＞";

  public Func<MinimalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      MinimalCharactersCountValidationErrorMessageBuilder =>
        templateVariables =>
            $"入力されたパスワード文字数が少なすぎます。{ templateVariables.MinimalCharactersCount }文字以上でもう一度入力してください。";

  public Func<MaximalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      MaximalCharactersCountValidationErrorMessageBuilder =>
          templateVariables =>
              $"入力されたパスワードは長すぎます。最大{ templateVariables.MaximalCharactersCount }文字以下で入力してください。";

}
