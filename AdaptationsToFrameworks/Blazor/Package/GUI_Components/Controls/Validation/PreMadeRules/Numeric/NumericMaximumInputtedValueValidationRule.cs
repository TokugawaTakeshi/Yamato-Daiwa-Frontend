using System.Numerics;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Numeric;


public abstract class NumericMaximumInputtedValueValidationRule
{

  public interface ILocalization
  {

    public Func<ErrorMessage.TemplateVariables, string> ErrorMessageBuilder { get; }

    public static class ErrorMessage
    {

      public record TemplateVariables
      {
        public required IConvertible MaximalValue { get; init; }
        public required IConvertible RawValue { get; init; }
      }

    }

  }

  public static ILocalization Localization { get; set; } = new NumericMaximumInputtedValueValidationRuleEnglishLocalization();

}


public class NumericMaximumInputtedValueValidationRule<TTargetType> :
    NumericMaximumInputtedValueValidationRule,
    InputtedValueValidation.IRule
    where TTargetType : INumber<TTargetType>
{

  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }


  /* ━━━ Specific Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public required TTargetType MaximalNumericValue { get; init; }

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
      ErrorMessage = targetTypeValue <= this.MaximalNumericValue ?
          null :
          this.buildErrorMessage(
            new ILocalization.ErrorMessage.TemplateVariables
            {
              MaximalValue = (IConvertible)this.MaximalNumericValue,
              RawValue = (IConvertible)targetTypeValue
            }
          )
    };
  }

  private string buildErrorMessage(ILocalization.ErrorMessage.TemplateVariables templateVariables)
  {
    return this.ErrorMessageBuilder?.Invoke(templateVariables) ??
        this.ErrorMessage ??
        NumericMaximumInputtedValueValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }

}
