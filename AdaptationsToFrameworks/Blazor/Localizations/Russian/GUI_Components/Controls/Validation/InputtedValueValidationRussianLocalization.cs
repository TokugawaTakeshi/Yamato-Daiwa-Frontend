using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation;


public record InputtedValueValidationRussianLocalization : InputtedValueValidation.ILocalization
{
  public string RequiredInputIsMissingValidationErrorMessage => 
      "Данное поле является обязательным. Пожалуйста, заполните это поле.";
}