using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeValidations;


public record PasswordInputtedValueValidationEnglishLocalization: 
    PasswordInputtedValueValidation.ILocalization
{
  
  public string RequiredInputIsMissingValidationErrorMessage  => 
      "The password is required. Please input the password.";

  public Func<AllowedCharactersInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      AllowedCharactersValidationErrorMessageBuilder =>
        templateVariables =>
            "The password is including the following disallowed characters: " +
              $"{ String.Join(", ", templateVariables.InputtedDisallowedCharacters) }. " +
            "Please replace or remove these characters.";
  
  public Func<MinimalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      MinimalCharactersCountValidationErrorMessageBuilder =>
        templateVariables =>
            "Not enough characters for the password. " +
            $"Please input at least { templateVariables.MinimalCharactersCount } characters.";

  public Func<MaximalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      MaximalCharactersCountValidationErrorMessageBuilder =>
          templateVariables =>
              "The password has more characters than allowed. " +
              "The long passwords is the good practice, but because of system limitations we are asking you to input " +
              $"{ templateVariables.MaximalCharactersCount } characters as maximum.";
  
}