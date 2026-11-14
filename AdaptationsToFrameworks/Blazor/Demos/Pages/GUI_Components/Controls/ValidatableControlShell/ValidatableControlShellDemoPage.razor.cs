using Microsoft.JSInterop;


namespace Demos.Pages.GUI_Components.Controls.ValidatableControlShell;


public partial class ValidatableControlShellDemoPage : Microsoft.AspNetCore.Components.ComponentBase
{
  
  [Microsoft.AspNetCore.Components.Inject]
  protected Microsoft.JSInterop.IJSRuntime JavaScriptRuntime { get; init; } = null!;
  
  private const string THEME_KEY_LABEL_PREFIX = "ValidatableControlShell__YDF.Themes.";
  private const string GEOMETRIC_VARIATION_KEY_LABEL_PREFIX = "ValidatableControlShell__YDF.GeometricVariations.";
  private const string DECORATIVE_VARIATION_KEY_LABEL_PREFIX = "ValidatableControlShell__YDF.DecorativeVariations.";

  private static readonly YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.AsynchronousChecks.Status
    asynchronousChecksCheckStatus = new YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.AsynchronousChecks.Status(
      new Dictionary<string, YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.AsynchronousCheck.Status>
      {
        {
          "Check 1",
          new YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.AsynchronousCheck.Status
          {
            IsPending = true,
            HasValidValueBeenConfirmed = false,
            HasInvalidValueBeenConfirmed = false,
            HasErrorOccurred = false,
            Message = "Checking of the inputted user name for the availability ..."
          }
        },
        {
          "Check 2",
          new YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.AsynchronousCheck.Status
          {
            IsPending = false,
            HasValidValueBeenConfirmed = true,
            HasInvalidValueBeenConfirmed = false,
            HasErrorOccurred = false,
            Message = "The user name is available"
          }
        },
        {
          "Check 3",
          new YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.AsynchronousCheck.Status
          {
            IsPending = false,
            HasValidValueBeenConfirmed = false,
            HasInvalidValueBeenConfirmed = true,
            HasErrorOccurred = false,
            Message = 
                "Sorry, but inputted user name including profanity. " +
                "Please select another user name without swearing."
          }
        },
        {
          "Check 4",
          new YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.AsynchronousCheck.Status
          {
            IsPending = false,
            HasValidValueBeenConfirmed = false,
            HasInvalidValueBeenConfirmed = false,
            HasErrorOccurred = true,
            Message = 
                "The malfunction has occurred during the checking of the user name for the availability. " +
                "If the internet connection has been lost, would you please to input the user name once again when the " +
                  "internet connection will recover?" +
                "If the internet connection is fine, we are sorry, but it is the system failure. " +
                "Could you please to notify the customers support?"
          }
        }
      }
    );

  protected override async Task OnInitializedAsync()
  {
    await base.OnInitializedAsync();
    await JavaScriptRuntime.InvokeVoidAsync("setPageDependentStylesheet", "ValidatableControlShellGalleryPage");
  }

}
