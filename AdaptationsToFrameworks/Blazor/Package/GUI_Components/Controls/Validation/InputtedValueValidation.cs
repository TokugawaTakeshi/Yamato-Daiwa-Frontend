using System.Diagnostics;


namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation;


public abstract class InputtedValueValidation
{

  public interface ILocalization
  {
    public string RequiredInputIsMissingValidationErrorMessage { get; }
  }

  public static ILocalization Localization = new InputtedValueValidationEnglishLocalization();

  
  public readonly Func<bool> IsInputtingRequirementChecker;
  public readonly Func<object?, bool> HasValueBeenOmitted;
  
  protected readonly string requiredInputIsMissingValidationErrorMessage;

  
  public interface IRule
  {
  
    public bool MustFinishValidationIfValueIsInvalid { get; init; }
  
    public IRule.CheckingResult Check(object rawValue);

    public readonly struct CheckingResult
    {
      public string? ErrorMessage { get; init; }
      public bool IsValid => this.ErrorMessage is not null;
    }
  
  }
  
  public interface IAsynchronousRule
  {
  
    public string ID { get; init; }
    public IAsynchronousRule.Messages messages { get; init; }
    
    public Task<CheckingResult> Check(object rawValue);
    
    public struct Messages
    {
      public string CheckingInProgress { get; internal set; }
      public string ValidValueHasBeenConfirmed { get; internal set; }
      public string InvalidValueHasBeenConfirmed { get; internal set; }
      public string ErrorHasOccurred { get; internal set; }
    }
    
    public struct CheckingResult
    {
      public string? ErrorMessage { get; init; }
      public bool IsValid => this.ErrorMessage is not null;
    }
  
  }
  
  protected IRule[] StaticRules;
  protected IRule[] ContextDependentRules;
  protected IAsynchronousRule[] AsynchronousRules;
  
  
  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected InputtedValueValidation(
    Func<object?, bool> omittedValueChecker,
    bool? isInputRequired = null,
    Func<bool>? inputtingRequirementChecker = null,
    string? requiredInputIsMissingValidationErrorMessage = null,
    IRule[]? staticRules = null,
    IRule[]? contextDependentRules = null,
    IAsynchronousRule[]? asynchronousRules = null 
  )
  {
    
    this.HasValueBeenOmitted = omittedValueChecker;

    if (isInputRequired is not null)
    {
      
      if (inputtingRequirementChecker is not null)
      {
        throw new ArgumentException(
          "The \"isInputRequired\" and \"inputtingRequirementChecker\" parameters are incompatible. " +
          "Please specify one of them."
        );
      }
      
      
      this.IsInputtingRequirementChecker = () => (bool)isInputRequired;
      
    } else if (inputtingRequirementChecker is not null)
    {
      this.IsInputtingRequirementChecker = inputtingRequirementChecker;
    } else
    {
      throw new ArgumentException(
      "Either \"isInputRequired\" or \"inputtingRequirementChecker\" must be specified but not both."
      );
    }
    
    this.requiredInputIsMissingValidationErrorMessage =
        requiredInputIsMissingValidationErrorMessage ??
        InputtedValueValidation.Localization.RequiredInputIsMissingValidationErrorMessage;

    
    this.StaticRules = staticRules ?? Array.Empty<IRule>();
    this.ContextDependentRules = contextDependentRules ?? Array.Empty<IRule>();
    this.AsynchronousRules = asynchronousRules ?? Array.Empty<IAsynchronousRule>();

  }
  
  
  public struct Result
  {
    public string[] ErrorsMessages { get; init; }
    public bool IsValid => this.ErrorsMessages.Length > 0;
  }
  
  public Result Validate(
    object rawValue,
    bool mustPostponeAsynchronousValidation = false,
    Action<AsynchronousChecks.Status, Result>? asynchronousChecksCallback = null,
    string[]? messagesOfExternallyDetectedValidationErrors = null
  )
  {

    bool isInputRequired = this.IsInputtingRequirementChecker();
    
    if (this.HasValueBeenOmitted(rawValue))
    {
      return new Result
      {
        ErrorsMessages = isInputRequired ? [ this.requiredInputIsMissingValidationErrorMessage ] : [] 
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


    Result validationResult = new Result { ErrorsMessages = Array.Empty<string>() };
 
    
    if (!mustPostponeAsynchronousValidation)
    {
      this.executeAsynchronousChecksIfAny(rawValue, validationResult, asynchronousChecksCallback); 
    }
    
    return validationResult;

  }


  /* ━━━ Asynchronous validation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public abstract class AsynchronousChecks
  {

    public readonly struct Status
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

        List<string> errorsMessages = new();

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
  
  
  public abstract class AsynchronousCheck
  {

    public struct Status
    {
      public required string Message { get; set; }
      public required bool IsPending { get; set; }
      public required bool HasValidValueBeenConfirmed { get; set; } 
      public required bool HasInvalidValueBeenConfirmed { get; set; }
      public required bool HasErrorOccurred { get; set; }
    }
    
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

          Debug.WriteLine(
            "AsynchronousValidationFailedException: Asynchronous validation failed\n" +
            $"The asynchronous validation { validationRule.ID } has failed.\n" +
            new System.Diagnostics.StackTrace()
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