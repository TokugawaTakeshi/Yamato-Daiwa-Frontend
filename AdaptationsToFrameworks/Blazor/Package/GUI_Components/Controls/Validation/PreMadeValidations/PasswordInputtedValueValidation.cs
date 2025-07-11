using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeValidations;


public class PasswordInputtedValueValidation(
  IConvertible minimalCharactersCount,
  IConvertible maximalCharactersCount,
  bool? inputRequiredFlag = null,
  Func<bool>? isInputRequired = null,
  PasswordInputtedValueValidation.ILocalization? localization = null,
  IEnumerable<char>? allowedNonWordCharacters = null,
  System.Text.RegularExpressions.Regex? regularExpression = null,
  InputtedValueValidation.IRule[]? contextDependentRules = null,
  InputtedValueValidation.IAsynchronousRule[]? asynchronousRules = null,
  Action<string>? asynchronousValidationFailureLogger = null
) : 
  
  InputtedValueValidation(
    
    isValueOfSupportedType: (object? rawValue) => rawValue is string,
    
    hasValueBeenOmitted: (object? rawValue) => !String.IsNullOrEmpty((string?) rawValue),
    
    inputRequiredFlag,
    
    isInputRequired,
    
    requiredInputIsMissingValidationErrorMessage:
        (localization ?? PasswordInputtedValueValidation.Localization).RequiredInputIsMissingValidationErrorMessage,
    
    staticRules: 
    
        [
        
          new AllowedCharactersInputtedValueValidationRule
          {
            AllowedCharactersGroups = new AllowedCharactersInputtedValueValidationRule.AllowedCharactersSpecification()
            {
              latinUppercase = true,
              latinLowercase = true,
              digits = true,
              other = allowedNonWordCharacters ?? []
            },
            ErrorMessageBuilder = 
                (localization ?? PasswordInputtedValueValidation.Localization).
                    AllowedCharactersValidationErrorMessageBuilder,
          },
          
          new MinimalCharactersCountInputtedValueValidationRule
          {
            MinimalCharactersCount = minimalCharactersCount,
            ErrorMessageBuilder =
                (localization ?? PasswordInputtedValueValidation.Localization).
                    MinimalCharactersCountValidationErrorMessageBuilder,
            MustFinishValidationIfValueIsInvalid = true
          },

          new MaximalCharactersCountInputtedValueValidationRule
          {
            MaximalCharactersCount = maximalCharactersCount,
            ErrorMessageBuilder =
                (localization ?? PasswordInputtedValueValidation.Localization).
                    MaximalCharactersCountValidationErrorMessageBuilder,
          }
          
        ],
    
    contextDependentRules,
    
    asynchronousRules,
    
    asynchronousValidationFailureLogger
    
  )

{
  
  public readonly IConvertible MINIMAL_CHARACTERS_COUNT = minimalCharactersCount;
  public readonly IConvertible MAXIMAL_CHARACTERS_COUNT = maximalCharactersCount;
  
  
  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public new interface ILocalization: InputtedValueValidation.ILocalization
  {
    
    public Func<AllowedCharactersInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
        AllowedCharactersValidationErrorMessageBuilder { get; }
    
    public Func<MinimalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
        MinimalCharactersCountValidationErrorMessageBuilder { get; }
    
    public Func<MaximalCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> 
        MaximalCharactersCountValidationErrorMessageBuilder { get; }
    

  }
  
  public new static ILocalization Localization = new PasswordInputtedValueValidationEnglishLocalization();
  
}