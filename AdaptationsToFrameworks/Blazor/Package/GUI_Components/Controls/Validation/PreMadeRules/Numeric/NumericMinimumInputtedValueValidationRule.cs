using System.Numerics;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Numeric;


public abstract class NumericMinimumInputtedValueValidationRule
{

  public interface ILocalization
  {

    public Func<ErrorMessage.TemplateVariables, string> ErrorMessageBuilder { get; }

    public static class ErrorMessage
    {

      public record TemplateVariables
      {
        public required IConvertible MinimalValue { get; init; }
        public required IConvertible RawValue { get; init; }
      }

    }

  }

  public static ILocalization Localization { get; set; } = new NumericMinimumInputtedValueValidationRuleEnglishLocalization();

}


public class NumericMinimumInputtedValueValidationRule<TTargetType> :
    NumericMinimumInputtedValueValidationRule,
    InputtedValueValidation.IRule
    where TTargetType : INumber<TTargetType>
{

  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }


  /* ━━━ Specific Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public required TTargetType MinimalNumericValue { get; init; }

  public Func<ILocalization.ErrorMessage.TemplateVariables, string>? ErrorMessageBuilder { get; init; }
  public string? ErrorMessage { get; init; }


  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public InputtedValueValidation.IRule.CheckingResult Check(object rawValue)
  {

    TTargetType targetTypeValue;

    if (rawValue is TTargetType value)
    {
      targetTypeValue = value;
    }
    else
    {
      targetTypeValue = (TTargetType)Convert.ChangeType(rawValue, typeof(TTargetType));
    }

    return new InputtedValueValidation.IRule.CheckingResult
    {
      ErrorMessage = targetTypeValue >= this.MinimalNumericValue ?
          null :
          this.buildErrorMessage(
            new ILocalization.ErrorMessage.TemplateVariables
            {
              MinimalValue = (IConvertible)this.MinimalNumericValue,
              RawValue = (IConvertible)targetTypeValue
            }
          )
    };
  }

  private string buildErrorMessage(ILocalization.ErrorMessage.TemplateVariables templateVariables)
  {
    return this.ErrorMessageBuilder?.Invoke(templateVariables) ??
        this.ErrorMessage ??
        NumericMinimumInputtedValueValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }

}
