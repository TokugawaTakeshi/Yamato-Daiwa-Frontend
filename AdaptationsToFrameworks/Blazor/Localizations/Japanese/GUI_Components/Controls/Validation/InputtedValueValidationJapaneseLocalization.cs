using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation;


public record InputtedValueValidationJapaneseLocalization : InputtedValueValidation.ILocalization
{
  public string RequiredInputIsMissingValidationErrorMessage => "この項目は必須です。ご入力をお願いいたします。";
}