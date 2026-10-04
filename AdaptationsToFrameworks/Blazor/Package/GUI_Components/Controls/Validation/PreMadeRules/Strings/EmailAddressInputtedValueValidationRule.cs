using System.Text.RegularExpressions;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public partial class EmailAddressInputtedValueValidationRule : 
    YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.IRule
{

  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public interface ILocalization
  {

    public Func<ErrorMessage.TemplateVariables, string> ErrorMessageBuilder { get; }

    static class ErrorMessage
    {

      public struct TemplateVariables
      {
        public string RawValue { get; init; }
      }

    }

  }
  
  public static ILocalization Localization = new EmailAddressInputtedValueValidationRuleEnglishLocalization();
  
  
  /* ━━━ Interface Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }
  
  
  /* ━━━ Specific Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [GeneratedRegex(Fundamentals.EmailAddress.VALID_PATTERN)]
  private static partial Regex DEFAULT_EMAIL_ADDRESS_REGULAR_EXPRESSION();
  
  public Regex regularExpression { get; init; } = DEFAULT_EMAIL_ADDRESS_REGULAR_EXPRESSION();
  
  public Func<ILocalization.ErrorMessage.TemplateVariables, string>? ErrorMessageBuilder { get; init; }
  public string? ErrorMessage { get; init; }


  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.IRule.CheckingResult Check(object rawValue) =>
      new()
      {
        ErrorMessage = this.regularExpression.IsMatch((string)rawValue) ?
          null :
          this.buildErrorMessage(
            new ILocalization.ErrorMessage.TemplateVariables
            {
              RawValue = (string)rawValue
            }
          )
      };

  private string buildErrorMessage(ILocalization.ErrorMessage.TemplateVariables templateVariables)
  {
    return this.ErrorMessageBuilder?.Invoke(templateVariables) ??
         this.ErrorMessage ??
         EmailAddressInputtedValueValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }

}