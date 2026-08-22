using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeValidations;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation.PreMadeValidations;


public record EmailAddressInputtedValueValidationRussianLocalization: 
    EmailAddressInputtedValueValidation.ILocalization
{
  
  public string RequiredInputIsMissingValidationErrorMessage  => 
      "Ввод электронного адреса обязателен. Пожалуйста, введите адрес электронной почты.";
  
  public Func<MinimalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      MinimalCharactersCountValidationErrorMessageBuilder =>
        templateVariables =>
            $"{ templateVariables.RawValue.Length } символов недостаточно для электронного адреса." +
            $"Пожалуйста, проверьте адрес электронной почты и введите не менее { templateVariables.MinimalCharactersCount } символов.";

  public Func<MaximalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      MaximalCharactersCountValidationErrorMessageBuilder =>
          templateVariables =>
              $"{ templateVariables.RawValue.Length } символов слишком много для электронного адреса. " +
              $"Пожалуйста, проверьте адрес электронной почты и введите не более { templateVariables.MaximalCharactersCount } символов.";

  public Func<EmailAddressInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      InvalidEmailAddressErrorMessageBuilder =>
        new EmailAddressInputtedValueValidationRuleEnglishLocalization().ErrorMessageBuilder;
  
}