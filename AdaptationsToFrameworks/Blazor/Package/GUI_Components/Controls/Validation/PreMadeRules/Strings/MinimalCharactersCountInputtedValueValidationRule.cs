namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public class MinimalCharactersCountInputtedValueValidationRule : 
    YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.IRule
{
  
  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public interface ILocalization
  {

    public Func<ErrorMessage.TemplateVariables, string> ErrorMessageBuilder { get; }

    static class ErrorMessage
    {

      public record TemplateVariables
      {
        public required IConvertible MinimalCharactersCount { get; init; }
        public required string RawValue { get; init; }
      }

    }

  }

  public static ILocalization Localization = new MinimalCharactersCountInputtedValueValidationRuleEnglishLocalization();

  
  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }

  
  /* ━━━ Specific Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public required IConvertible MinimalCharactersCount { get; init; }
  public Func<ILocalization.ErrorMessage.TemplateVariables, string>? ErrorMessageBuilder { get; init; }
  public string? ErrorMessage { get; init; }

  
  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.IRule.CheckingResult 
      Check(object rawValue) =>
          new()
          {
            ErrorMessage = ((string)rawValue).Length >= Convert.ToInt32(this.MinimalCharactersCount) ? 
              null : 
              this.buildErrorMessage(
                new ILocalization.ErrorMessage.TemplateVariables
                    {
                      RawValue = ((string)rawValue), MinimalCharactersCount = this.MinimalCharactersCount
                    }
              )
          };

  private string buildErrorMessage(ILocalization.ErrorMessage.TemplateVariables templateVariables)
  {
    return this.ErrorMessageBuilder?.Invoke(templateVariables) ??
        this.ErrorMessage ??
        MinimalCharactersCountInputtedValueValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }

}