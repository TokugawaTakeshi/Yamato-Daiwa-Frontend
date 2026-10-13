using System.Text.RegularExpressions;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public partial class JapanesePhoneNumberInputtedValueValidationRule : InputtedValueValidation.IRule
{

  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public interface ILocalization
  {

    public Func<ErrorMessage.TemplateVariables, string> ErrorMessageBuilder { get; }

    public static class ErrorMessage
    {

      public record TemplateVariables
      {
        public required string RawValue { get; init; }
      }

    }

  }

  public static ILocalization Localization { get; set; } = new JapanesePhoneNumberInputtedValueValidationRuleJapaneseLocalization();


  /* ━━━ Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }

  [GeneratedRegex(@"^\d{10,11}$")]
  private static partial Regex VALID_PATTERN();
  
  public Regex RegularExpression__noNDashesRespected { get; init; } = VALID_PATTERN();

  public Func<ILocalization.ErrorMessage.TemplateVariables, string>? ErrorMessageBuilder { get; init; }
  public string? ErrorMessage { get; init; }


  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public InputtedValueValidation.IRule.CheckingResult Check(object rawValue)
  {

    if (rawValue is not string stringValue)
    {
      return new InputtedValueValidation.IRule.CheckingResult { ErrorMessage = null };
    }

    string cleanedValue = stringValue.Replace("-", "");

    bool isValid = this.RegularExpression__noNDashesRespected.IsMatch(cleanedValue);

    return new InputtedValueValidation.IRule.CheckingResult
    {
      ErrorMessage = isValid ?
          null :
          this.buildErrorMessage(
            new ILocalization.ErrorMessage.TemplateVariables
            {
              RawValue = stringValue
            }
          )
    };

  }

  private string buildErrorMessage(ILocalization.ErrorMessage.TemplateVariables templateVariables)
  {
    return this.ErrorMessageBuilder?.Invoke(templateVariables) ??
        this.ErrorMessage ??
        JapanesePhoneNumberInputtedValueValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }
    
}
