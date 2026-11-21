using YamatoDaiwa.CSharpExtensions;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation;

namespace Workbenches.Pages.GUI_Components.Controls.ValidatableControlShell;



public partial class ValidatableControlShellWorkbench: Microsoft.AspNetCore.Components.ComponentBase
{
 
  protected string[] validationErrorsMessages = [];
  
  protected InputtedValueValidation.AsynchronousChecks.Status asynchronousChecksStatus =
      new(new Dictionary<string, InputtedValueValidation.AsynchronousCheck.Status>());
  
  protected static bool ONLY_ERRORED_ASYNCHRONOUS_CHECKS_STATUS = false;

  

  private void switchValidationErrorsMessages()
  {
    
    // this.validationErrorsMessages =
    //     this.validationErrorsMessages.Length == 0 ?
    //         [
    //           "This field is required",
    //           "Invalid email format",
    //           "Value must be at least 3 characters long"
    //         ] :
    //         [];
    
    this.asynchronousChecksStatus =
        new InputtedValueValidation.AsynchronousChecks.Status(
          new Dictionary<string, InputtedValueValidation.AsynchronousCheck.Status>().
              SetPairIf(
                "check1", 
                new InputtedValueValidation.AsynchronousCheck.Status
                {
                  Message = "Pending check",
                  IsPending = true,
                  HasValidValueBeenConfirmed = false,
                  HasErrorOccurred = false,
                  HasInvalidValueBeenConfirmed = false
                },
                this.asynchronousChecksStatus.Checks.Count == 0 && !ONLY_ERRORED_ASYNCHRONOUS_CHECKS_STATUS 
              ).
              SetPairIf(
                "check2", 
                new InputtedValueValidation.AsynchronousCheck.Status
                {
                  Message = "Confirmed Valid value",
                  IsPending = false,
                  HasValidValueBeenConfirmed = true,
                  HasErrorOccurred = false,
                  HasInvalidValueBeenConfirmed = false
                },
                this.asynchronousChecksStatus.Checks.Count == 0 && !ONLY_ERRORED_ASYNCHRONOUS_CHECKS_STATUS 
              ).
              SetPairIf(
                "check3", 
                new InputtedValueValidation.AsynchronousCheck.Status
                {
                  Message = "Error occurred",
                  IsPending = false,
                  HasValidValueBeenConfirmed = false,
                  HasErrorOccurred = true,
                  HasInvalidValueBeenConfirmed = false
                },
                this.asynchronousChecksStatus.Checks.Count == 0 && !ONLY_ERRORED_ASYNCHRONOUS_CHECKS_STATUS 
              ).
              SetPairIf(
                "check4",
                new InputtedValueValidation.AsynchronousCheck.Status
                {
                  Message = "Invalid",
                  IsPending = false,
                  HasValidValueBeenConfirmed = false,
                  HasErrorOccurred = false,
                  HasInvalidValueBeenConfirmed = true
                },
                this.asynchronousChecksStatus.Checks.Count == 0
              )
        );

  }

  
}