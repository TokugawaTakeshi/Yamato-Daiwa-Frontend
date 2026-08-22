using System.Numerics;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Numeric;


public abstract class NonNegativeIntegerOfRegularNotationInputtedValueValidationRule
{

  public interface ILocalization
  {

    public Func<ErrorMessage.TemplateVariables, string> ErrorMessageBuilder { get; }

    public static class ErrorMessage
    {

      public record TemplateVariables
      {
        public required object RawValue { get; init; }
      }

    }

  }

  public static ILocalization Localization { get; set; } = new NonNegativeIntegerOfRegularNotationInputtedValueValidationRuleEnglishLocalization();

}


public class NonNegativeIntegerOfRegularNotationInputtedValueValidationRule<TTargetType> :
    NonNegativeIntegerOfRegularNotationInputtedValueValidationRule,
    InputtedValueValidation.IRule
    where TTargetType : INumber<TTargetType>
{

  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }


  /* ━━━ Specific Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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
      ErrorMessage = targetTypeValue >= TTargetType.Zero && TTargetType.IsInteger(targetTypeValue) ?
          null :
          this.buildErrorMessage(
            new ILocalization.ErrorMessage.TemplateVariables
            {
              RawValue = targetTypeValue
            }
          )
    };
  }

  private string buildErrorMessage(ILocalization.ErrorMessage.TemplateVariables templateVariables)
  {
    return this.ErrorMessageBuilder?.Invoke(templateVariables) ??
        this.ErrorMessage ??
        NonNegativeIntegerOfRegularNotationInputtedValueValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }

}
