using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeValidations;


public record EmailAddressInputtedValueValidationEnglishLocalization: 
    EmailAddressInputtedValueValidation.ILocalization
{
  
  public string RequiredInputIsMissingValidationErrorMessage  => 
      "The email address is required. Please input the email address.";
  
  public Func<MinimalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      MinimalCharactersCountValidationErrorMessageBuilder =>
        templateVariables =>
            $"{ templateVariables.RawValue.Length } characters is not enough for the email address." +
            $"Please check the correct email address then input at least { templateVariables.MinimalCharactersCount } characters.";

  public Func<MaximalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      MaximalCharactersCountValidationErrorMessageBuilder =>
          templateVariables =>
              $"{ templateVariables.RawValue.Length } characters is too many for the email address. " +
              $"Please check the correct email address then input no more than { templateVariables.MaximalCharactersCount } characters.";

  public Func<EmailAddressInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      InvalidEmailAddressErrorMessageBuilder =>
        new EmailAddressInputtedValueValidationRuleEnglishLocalization().ErrorMessageBuilder;
  
}