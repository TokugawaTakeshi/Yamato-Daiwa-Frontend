using YamatoDaiwa.CSharpExtensions;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeValidations;


public class EmailAddressInputtedValueValidation(
  bool? inputRequiredFlag = null,
  Func<bool>? isInputRequired = null,
  EmailAddressInputtedValueValidation.ILocalization? localization = null,
  IConvertible? minimalCharactersCount = null,
  IConvertible? maximalCharactersCount = null,
  System.Text.RegularExpressions.Regex? regularExpression = null,
  InputtedValueValidation.IRule[]? contextDependentRules = null,
  InputtedValueValidation.IAsynchronousRule[]? asynchronousRules = null,
  Action<string>? asynchronousValidationFailureLogger = null
): 
  
  InputtedValueValidation(
    
    isValueOfSupportedType: (object? rawValue) => rawValue is string,
    
    hasValueBeenOmitted: (object? rawValue) => !String.IsNullOrEmpty((string?) rawValue),
    
    inputRequiredFlag,
    
    isInputRequired,
    
    requiredInputIsMissingValidationErrorMessage:
        (localization ?? EmailAddressInputtedValueValidation.Localization).RequiredInputIsMissingValidationErrorMessage,

    staticRules:
    
        [
          
          new MinimalCharactersCountInputtedValueValidationRule
          {
            MinimalCharactersCount = minimalCharactersCount ?? Fundamentals.Email.MINIMAL_CHARACTERS_COUNT,
            ErrorMessageBuilder =
                (localization ?? EmailAddressInputtedValueValidation.Localization).
                    MinimalCharactersCountValidationErrorMessageBuilder,
            MustFinishValidationIfValueIsInvalid = true
          },

          new EmailAddressInputtedValueValidationRule
          {
            regularExpression = regularExpression ?? EmailAddress.VALID_PATTERN,
            ErrorMessageBuilder =
                (localization ?? EmailAddressInputtedValueValidation.Localization).InvalidEmailAddressErrorMessageBuilder,
            MustFinishValidationIfValueIsInvalid = true
          },

          new MaximalCharactersCountInputtedValueValidationRule
          {
            MaximalCharactersCount = maximalCharactersCount ?? Fundamentals.Email.MAXIMAL_CHARACTERS_COUNT,
            ErrorMessageBuilder =
                (localization ?? EmailAddressInputtedValueValidation.Localization).
                    MaximalCharactersCountValidationErrorMessageBuilder,
          }
          
        ],

      contextDependentRules,
    
      asynchronousRules,
    
      asynchronousValidationFailureLogger
    
  )

{
  
  /* [ Approach ] Although YDF library can suggest the minimal and maximal characters count for the email address,
   *    in the applications with good architecture this value must be taken from the business rules and
   *    passed via constructor. */
  public readonly IConvertible MINIMAL_CHARACTERS_COUNT = minimalCharactersCount ?? Fundamentals.Email.MINIMAL_CHARACTERS_COUNT;
  public readonly IConvertible MAXIMAL_CHARACTERS_COUNT = maximalCharactersCount ?? Fundamentals.Email.MAXIMAL_CHARACTERS_COUNT;


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public new interface ILocalization: InputtedValueValidation.ILocalization
  {
    
    public Func<MinimalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
        MinimalCharactersCountValidationErrorMessageBuilder { get; }
    
    public Func<MaximalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
        MaximalCharactersCountValidationErrorMessageBuilder { get; }
    
    public Func<EmailAddressInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
        InvalidEmailAddressErrorMessageBuilder { get; }

  }
  
  public new static ILocalization Localization = new EmailAddressInputtedValueValidationEnglishLocalization();
  
}