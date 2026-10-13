using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeValidations;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation.PreMadeValidations;


public record PasswordInputtedValueValidationRussianLocalization : 
    PasswordInputtedValueValidation.ILocalization
{

  public string RequiredInputIsMissingValidationErrorMessage => 
      "Пароль обязателен для ввода. Пожалуйста, введите пароль.";

  public Func<AllowedCharactersInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      AllowedCharactersValidationErrorMessageBuilder =>
        templateVariables =>
            "Введённый пароль включает следующие запрещённые символы: " +
              $"{ String.Join(", ", templateVariables.InputtedDisallowedCharacters) }. " +
            "Пожалуйста, удалите эти символы или замените их на другие.";

  public Func<MinimalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      MinimalCharactersCountValidationErrorMessageBuilder =>
        templateVariables =>
            $"Пароль слишком короткой. Пожалуйста, введите хотя бы { templateVariables.MinimalCharactersCount } символов.";

  public Func<MaximalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
      MaximalCharactersCountValidationErrorMessageBuilder =>
          templateVariables =>
              "Пароль содержит слишком много символов. " +
              "Длинные пароли обычно рекомендуются в целях безопасности, но из-за системных ограничений мы просим " +
                $"Вас ввести не более { templateVariables.MaximalCharactersCount } символов.";

}
