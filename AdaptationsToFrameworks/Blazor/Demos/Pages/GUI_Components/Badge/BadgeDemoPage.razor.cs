using Microsoft.JSInterop;


namespace Demos.Pages.GUI_Components.Badge;


public partial class BadgeDemoPage : Microsoft.AspNetCore.Components.ComponentBase
{
  
  [Microsoft.AspNetCore.Components.Inject]
  protected Microsoft.JSInterop.IJSRuntime JavaScriptRuntime { get; init; } = null!;
  
  private const string THEME_KEY_LABEL_PREFIX = "Badge.StandardThemes.";
  private const string GEOMETRIC_VARIATION_KEY_LABEL_PREFIX = "Badge.StandardGeometricVariations.";
  private const string DECORATIVE_VARIATION_KEY_LABEL_PREFIX = "Badge.StandardDecorativeVariations.";

  
  private const string textOverflowSafetyTest = "OVERFLOW_TEST-ghghghghghghghghghghghghghghghghghghghghghghghghghghgh";
  private readonly string stringifiedTodayDate = DateTime.Now.ToShortDateString();
  
  
  protected override async Task OnInitializedAsync()
  {
    await base.OnInitializedAsync();
    await JavaScriptRuntime.InvokeVoidAsync("setPageDependentStylesheet", "BadgeGalleryPage");
  }

}
