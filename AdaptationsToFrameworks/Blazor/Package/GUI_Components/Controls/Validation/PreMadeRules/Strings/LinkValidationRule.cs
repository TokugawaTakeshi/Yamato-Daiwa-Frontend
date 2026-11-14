using System.Text.RegularExpressions;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public class LinkValidationRule : InputtedValueValidation.IRule
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

  public static ILocalization Localization { get; set; } = new LinkValidationRuleEnglishLocalization();


  /* ━━━ Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }

  public IEnumerable<Regex> RegularExpressions { get; init; }

  public Func<ILocalization.ErrorMessage.TemplateVariables, string>? ErrorMessageBuilder { get; init; }
  public string? ErrorMessage { get; init; }


  /* ━━━ Constructors ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public LinkValidationRule()
  {
    this.RegularExpressions = [ new Regex(@"https?://") ];
  }

  public LinkValidationRule(
    string? mustStartWith = null,
    IEnumerable<Regex>? regularExpressions = null,
    bool mustFinishValidationIfValueIsInvalid = false,
    Func<ILocalization.ErrorMessage.TemplateVariables, string>? errorMessageBuilder = null,
    string? errorMessage = null,
    ILocalization? localization = null
  )
  {

    this.MustFinishValidationIfValueIsInvalid = mustFinishValidationIfValueIsInvalid;

    this.RegularExpressions = 
      regularExpressions ?? (
        !string.IsNullOrEmpty(mustStartWith) ?
            [ new Regex($"^{ mustStartWith }") ] :
            [ new Regex(@"https?://") ]
    );

    this.ErrorMessageBuilder = errorMessageBuilder ?? localization?.ErrorMessageBuilder;
    this.ErrorMessage = errorMessage;

  }


  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public InputtedValueValidation.IRule.CheckingResult Check(object rawValue)
  {

    string stringValue = rawValue as string ?? rawValue?.ToString() ?? string.Empty;

    bool isValid = this.RegularExpressions.All(regex => regex.IsMatch(stringValue));

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
        LinkValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }

}
