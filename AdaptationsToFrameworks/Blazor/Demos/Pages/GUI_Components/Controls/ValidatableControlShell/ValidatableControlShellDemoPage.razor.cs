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
            Message = ""
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
            Message = "Valid value confirmed"
          }
        },
        {
          "Check 3",
          new YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.AsynchronousCheck.Status
          {
            IsPending = false,
            HasValidValueBeenConfirmed = false,
            HasInvalidValueBeenConfirmed = false,
            HasErrorOccurred = true,
            Message = "Error occurred"
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
