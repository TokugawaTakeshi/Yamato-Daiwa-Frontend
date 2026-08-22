namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation;


public record InputtedValueValidationEnglishLocalization : InputtedValueValidation.ILocalization
{
  public string RequiredInputIsMissingValidationErrorMessage => "This field is required. Please fill this field.";
}