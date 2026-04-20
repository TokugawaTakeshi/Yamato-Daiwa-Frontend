using System.Collections;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Arrayed;


public class MinimalElementsCountInputtedValueValidationRule : 
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
        public required IConvertible MinimalElementsCount { get; init; }
      }

    }

  }
  
  public static ILocalization Localization = new MinimalElementsCountInputtedValueValidationRuleEnglishLocalization();
  
  
  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }

  
  /* ━━━ Specific Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public required IConvertible MinimalElementsCount { get; init; }
  
  public Func<ILocalization.ErrorMessage.TemplateVariables, string>? ErrorMessageBuilder { get; init; }
  public string? ErrorMessage { get; init; }


  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.IRule.CheckingResult 
      Check(object rawValue)
  {
    
    int minimalElementsCount = Convert.ToInt32(this.MinimalElementsCount);
    
    int elementsCount = rawValue switch
    {
      ICollection collection => collection.Count,
      IEnumerable enumerable => enumerable.Cast<object>().Count(),
      _ => 0
    };

    return new YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.IRule.CheckingResult
    {
      ErrorMessage = elementsCount >= minimalElementsCount ? 
          null : 
          this.buildErrorMessage(
            new ILocalization.ErrorMessage.TemplateVariables
            {
              MinimalElementsCount = this.MinimalElementsCount
            }
          )
    };
  }

  private string buildErrorMessage(ILocalization.ErrorMessage.TemplateVariables templateVariables)
  {
    return this.ErrorMessageBuilder?.Invoke(templateVariables) ??
        this.ErrorMessage ??
        MinimalElementsCountInputtedValueValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }
  
}
