namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public class MaximalCharactersCountInputtedValueValidationRule : 
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
        public required IConvertible MaximalCharactersCount { get; init; }
        public required string RawValue { get; init; }
      }

    }

  }
  
  public static ILocalization Localization = new MaximalCharactersCountInputtedValueValidationRuleEnglishLocalization();
  
  
  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }

  
  /* ━━━ Specific Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public required IConvertible MaximalCharactersCount { get; init; }
  
  public Func<ILocalization.ErrorMessage.TemplateVariables, string>? ErrorMessageBuilder { get; init; }
  public string? ErrorMessage { get; init; }


  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.IRule.CheckingResult 
      Check(object rawValue) =>
          new()
          {
            ErrorMessage = ((string)rawValue).Length <= Convert.ToInt32(this.MaximalCharactersCount) ? 
              null : 
              this.buildErrorMessage(
                new ILocalization.ErrorMessage.TemplateVariables
                  {
                    RawValue = (string)rawValue, MaximalCharactersCount = this.MaximalCharactersCount
                  }
                )
          };

  private string buildErrorMessage(ILocalization.ErrorMessage.TemplateVariables templateVariables)
  {
    return this.ErrorMessageBuilder?.Invoke(templateVariables) ??
         this.ErrorMessage ??
         MaximalCharactersCountInputtedValueValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }
  
}