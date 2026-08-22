namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation;


public abstract class InputtedValueValidation
{

  public record Result
  {
    public required string[] ErrorsMessages { get; init; }
    public bool IsValid => this.ErrorsMessages.Length > 0;
  }
  
  
  /* ━━━ Rules ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Interfaces ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public interface IRule
  {
  
    public bool MustFinishValidationIfValueIsInvalid { get; init; }
  
    public IRule.CheckingResult Check(object rawValue);

    public record CheckingResult
    {
      public string? ErrorMessage { get; init; }
      public bool IsValid => this.ErrorMessage is not null;
    }
  
  }
  
  public interface IAsynchronousRule
  {
  
    public string ID { get; init; }
  
    
    /* ╍╍╍ Messages ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
    public record Messages
    {
      public required string CheckingInProgress { get; set; }
      public required string ValidValueHasBeenConfirmed { get; set; }
      public required string InvalidValueHasBeenConfirmed { get; set; }
      public required string ErrorHasOccurred { get; set; }
    }
    
    public IAsynchronousRule.Messages messages { get; init; }
    
  
    /* ╍╍╍ Checking ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
    public record CheckingResult
    {
      public string? ErrorMessage { get; init; }
      public bool IsValid => this.ErrorMessage is not null;
    }
    
    public Task<CheckingResult> Check(object rawValue);
    
  }
  
  
  /* ━━━ Asynchronous Checking ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static class AsynchronousCheck
  {

    public record Status
    {
      public required string Message { get; init; }
      public required bool IsPending { get; init; }
      public required bool HasValidValueBeenConfirmed { get; init; } 
      public required bool HasInvalidValueBeenConfirmed { get; init; }
      public required bool HasErrorOccurred { get; init; }
    }
    
  }
  
  public static class AsynchronousChecks
  {

    public record Status
    {

      public readonly Dictionary<string, AsynchronousCheck.Status> Checks;
      public readonly bool HasAtLeastOneCheckNotFinishedYet = false;
      public readonly bool HasAllChecksFinishedWithAnyOutcome = true;
      public readonly bool HasAtLeastOneCheckErrorOccurred = false;
      public readonly bool HasNoInvalidValuesBeenConfirmed = true;
      public readonly bool HasAtLeastOneInvalidValueBeenConfirmed = false;
      public readonly string[] ErrorsMessages;

      public Status(Dictionary<string, AsynchronousCheck.Status> checks)
      {
        
        this.Checks = checks;

        List<string> errorsMessages = [];

        foreach ((string _, AsynchronousCheck.Status checking) in checks)
        {

          if (checking.IsPending)
          {
            this.HasAtLeastOneCheckNotFinishedYet = true;
            this.HasAllChecksFinishedWithAnyOutcome = false;
          }

          if (checking.HasErrorOccurred)
          {
            this.HasAtLeastOneCheckErrorOccurred = true;
          }

          if (checking.HasInvalidValueBeenConfirmed)
          {
            this.HasNoInvalidValuesBeenConfirmed = false;
            this.HasAtLeastOneInvalidValueBeenConfirmed = true;
            errorsMessages.Add(checking.Message);
          }

        }
        
        this.ErrorsMessages = errorsMessages.ToArray();
        
      }
    }
    
  }
  
  
  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public interface ILocalization
  {
    public string RequiredInputIsMissingValidationErrorMessage { get; }
  }

  public static ILocalization Localization = new InputtedValueValidationEnglishLocalization();
  

  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public readonly Func<object?, bool> IsValueOfSupportedType;
  public readonly Func<object?, bool> HasValueBeenOmitted;
  public readonly Func<bool> IsInputRequired;

  protected readonly string RequiredInputIsMissingValidationErrorMessage;

  protected IRule[] StaticRules;
  protected IRule[] ContextDependentRules;
  protected IAsynchronousRule[] AsynchronousRules;
  
  protected Action<string>? asynchronousValidationFailureLogger;
  
  
  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected InputtedValueValidation(
    Func<object?, bool> isValueOfSupportedType,
    Func<object?, bool> hasValueBeenOmitted,
    bool? inputRequiredFlag = null,
    Func<bool>? isInputRequired = null,
    string? requiredInputIsMissingValidationErrorMessage = null,
    IRule[]? staticRules = null,
    IRule[]? contextDependentRules = null,
    IAsynchronousRule[]? asynchronousRules = null,
    Action<string>? asynchronousValidationFailureLogger = null
  )
  {

    this.IsValueOfSupportedType = isValueOfSupportedType;
    this.HasValueBeenOmitted = hasValueBeenOmitted;
    
    if (inputRequiredFlag is not null)
    {
      
      if (isInputRequired is not null)
      {
        throw new ArgumentException(
          "The \"inputRequiredFlag\" and \"isInputRequired\" parameters are incompatible. " +
          "Please specify one of them."
        );
      }
      
      this.IsInputRequired = () => inputRequiredFlag.Value;
      
    } else if (isInputRequired is not null)
    {
      this.IsInputRequired = isInputRequired;
    } else
    {
      throw new ArgumentException(
        "The value requirement not specified. " +
        "Specify \"inputRequiredFlag\" or \"isInputRequired\" but not both."
      );
    }
    
    this.RequiredInputIsMissingValidationErrorMessage =
        requiredInputIsMissingValidationErrorMessage ??
        InputtedValueValidation.Localization.RequiredInputIsMissingValidationErrorMessage;


    this.StaticRules = staticRules ?? [];
    this.ContextDependentRules = contextDependentRules ?? [];
    this.AsynchronousRules = asynchronousRules ?? [];

  }

  
  /* ━━━ Public Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public Result Validate(
    object rawValue,
    bool mustPostponeAsynchronousValidation = false,
    Action<AsynchronousChecks.Status, Result>? asynchronousChecksCallback = null,
    IEnumerable<string>? messagesOfExternallyDetectedValidationErrors = null
  )
  {

    if (!this.IsValueOfSupportedType(rawValue))
    {
      throw new ArgumentException(
        $"The type \"{ rawValue.GetType() }\" of `rawValue` is incompatible with specified validators."
      );
    }
    
    
    bool isInputRequired = this.IsInputRequired();
    
    if (this.HasValueBeenOmitted(rawValue))
    {
      return new Result
      {
        ErrorsMessages = isInputRequired ? [ this.RequiredInputIsMissingValidationErrorMessage ] : [] 
      };
    }
    
    
    List<string> validationErrorsMessages = messagesOfExternallyDetectedValidationErrors?.ToList() ?? [];

    foreach (IRule staticValidationRule in this.StaticRules)
    {

      IRule.CheckingResult checkingCheckingResult = staticValidationRule.Check(rawValue);

      if (checkingCheckingResult.ErrorMessage is not null)
      {

        validationErrorsMessages.Add(checkingCheckingResult.ErrorMessage);

        if (staticValidationRule.MustFinishValidationIfValueIsInvalid)
        {
          break;
        }

      }
      
    }

    if (validationErrorsMessages.Count > 0)
    {
      return new Result
      {
        ErrorsMessages = validationErrorsMessages.ToArray()
      };
    }
    
    
    foreach (IRule contextDependentValidationRule in this.ContextDependentRules)
    {

      IRule.CheckingResult checkingCheckingResult = contextDependentValidationRule.Check(rawValue);

      if (checkingCheckingResult.ErrorMessage is not null)
      {

        validationErrorsMessages.Add(checkingCheckingResult.ErrorMessage);

        if (contextDependentValidationRule.MustFinishValidationIfValueIsInvalid)
        {
          break;
        }

      }
      
    }
    
    if (validationErrorsMessages.Count > 0)
    {
      return new Result
      {
        ErrorsMessages = validationErrorsMessages.ToArray()
      };
    }


    Result validationResult = new() { ErrorsMessages = [] };
    
    if (!mustPostponeAsynchronousValidation)
    {
      this.executeAsynchronousChecksIfAny(rawValue, validationResult, asynchronousChecksCallback); 
    }
    
    return validationResult;

  }

  public void executeAsynchronousChecksIfAny(
    object rawValue, 
    Result currentValidationResult, 
    Action<AsynchronousChecks.Status, Result>? asynchronousChecksCallback
  )
  {

    if (this.AsynchronousRules.Length == 0)
    {
      return;
    }


    Dictionary<string, AsynchronousCheck.Status> asynchronousChecks = this.AsynchronousRules.
        ToDictionary(
          asynchronousRule => asynchronousRule.ID, 
          asynchronousRule => new AsynchronousCheck.Status
          {
            Message = asynchronousRule.messages.CheckingInProgress,
            IsPending = true,
            HasInvalidValueBeenConfirmed = false,
            HasValidValueBeenConfirmed = false,
            HasErrorOccurred = false
          }
        );

    asynchronousChecksCallback?.Invoke(new AsynchronousChecks.Status(asynchronousChecks), currentValidationResult);

    IEnumerable<Task> validationTasks = this.AsynchronousRules.Select(
      async validationRule =>
      {

        IAsynchronousRule.CheckingResult checkingResult;
        
        try
        {

          checkingResult = await validationRule.Check(rawValue);

        }
        catch (Exception exception)
        {

          this.asynchronousValidationFailureLogger?.Invoke(
            $"The asynchronous validation { validationRule.ID } has failed.\n" +
            exception.Message
          );
          
          asynchronousChecks[validationRule.ID] = new AsynchronousCheck.Status
          {
            IsPending = false,
            HasValidValueBeenConfirmed = false,
            HasInvalidValueBeenConfirmed = false,
            HasErrorOccurred = true,
            Message = validationRule.messages.ErrorHasOccurred
          };
          
          asynchronousChecksCallback?.Invoke(new AsynchronousChecks.Status(asynchronousChecks), currentValidationResult);
          
          return;
          
        }
        
        
        asynchronousChecks[validationRule.ID] = new AsynchronousCheck.Status
        {
          IsPending = false,
          HasValidValueBeenConfirmed = checkingResult.IsValid,
          HasInvalidValueBeenConfirmed = !checkingResult.IsValid,
          HasErrorOccurred = false,
          Message = checkingResult.IsValid ? 
              validationRule.messages.ValidValueHasBeenConfirmed :
              checkingResult.ErrorMessage ?? validationRule.messages.InvalidValueHasBeenConfirmed 
        };
        
        AsynchronousChecks.Status asynchronousChecksStatus = new(asynchronousChecks);

        string[] errorsMessages = currentValidationResult.ErrorsMessages.
            Concat(asynchronousChecksStatus.ErrorsMessages).
            ToArray();

        asynchronousChecksCallback?.Invoke(asynchronousChecksStatus, new Result { ErrorsMessages = errorsMessages });

      }
    );

    Task.WhenAll(validationTasks);

  }
  
}