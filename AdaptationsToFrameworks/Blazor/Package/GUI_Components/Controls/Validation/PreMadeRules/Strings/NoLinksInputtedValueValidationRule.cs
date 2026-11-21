using System.Text.RegularExpressions;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public class NoLinksInputtedValueValidationRule : InputtedValueValidation.IRule
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

  public static ILocalization Localization { get; set; } = new NoLinksInputtedValueValidationRuleEnglishLocalization();


  /* ━━━ Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }

  
  /* ━━━ Specific Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public IEnumerable<Regex> RegularExpressions { get; init; } = 
      [
        new(@"https?://"),
        new(@"www\."),
        new(@"[a-z0-9]\.[a-z0-9][@\w]")
      ];

  public Func<ILocalization.ErrorMessage.TemplateVariables, string>? ErrorMessageBuilder { get; init; }
  public string? ErrorMessage { get; init; }


  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public InputtedValueValidation.IRule.CheckingResult Check(object rawValue)
  {

    string stringValue = rawValue as string ?? rawValue.ToString() ?? string.Empty;

    return new InputtedValueValidation.IRule.CheckingResult
    {
      ErrorMessage = this.RegularExpressions.Any(regex => regex.IsMatch(stringValue)) ?
          this.buildErrorMessage(
            new ILocalization.ErrorMessage.TemplateVariables
            {
              RawValue = stringValue
            }
          ) :
          null
    };

  }

  private string buildErrorMessage(ILocalization.ErrorMessage.TemplateVariables templateVariables)
  {
    return this.ErrorMessageBuilder?.Invoke(templateVariables) ??
        this.ErrorMessage ??
        NoLinksInputtedValueValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }

}
