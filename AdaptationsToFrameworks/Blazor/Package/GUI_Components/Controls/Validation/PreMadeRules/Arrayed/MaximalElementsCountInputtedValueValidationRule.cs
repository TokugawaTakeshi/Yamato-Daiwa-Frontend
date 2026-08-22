using System.Collections;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Arrayed;


public class MaximalElementsCountInputtedValueValidationRule : 
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
        public required IConvertible MaximalElementsCount { get; init; }
      }

    }

  }
  
  public static ILocalization Localization = new MaximalElementsCountInputtedValueValidationRuleEnglishLocalization();
  
  
  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }

  
  /* ━━━ Specific Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public required IConvertible MaximalElementsCount { get; init; }
  
  public Func<ILocalization.ErrorMessage.TemplateVariables, string>? ErrorMessageBuilder { get; init; }
  public string? ErrorMessage { get; init; }


  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.IRule.CheckingResult 
      Check(object rawValue)
  {
    
    int maximalElementsCount = Convert.ToInt32(this.MaximalElementsCount);
    
    int elementsCount = rawValue switch
    {
      ICollection collection => collection.Count,
      IEnumerable enumerable => enumerable.Cast<object>().Count(),
      _ => 0
    };

    return new YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.IRule.CheckingResult
    {
      ErrorMessage = elementsCount <= maximalElementsCount ? 
          null : 
          this.buildErrorMessage(
            new ILocalization.ErrorMessage.TemplateVariables
            {
              MaximalElementsCount = this.MaximalElementsCount
            }
          )
    };
  }

  private string buildErrorMessage(ILocalization.ErrorMessage.TemplateVariables templateVariables)
  {
    return this.ErrorMessageBuilder?.Invoke(templateVariables) ??
        this.ErrorMessage ??
        MaximalElementsCountInputtedValueValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }
  
}
