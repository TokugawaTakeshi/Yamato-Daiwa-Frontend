using Microsoft.JSInterop;


namespace Demos.Pages.GUI_Components.AdmonitionBlock;


public partial class AdmonitionBlockDemoPage : Microsoft.AspNetCore.Components.ComponentBase
{
  
  [Microsoft.AspNetCore.Components.Inject]
  protected Microsoft.JSInterop.IJSRuntime JavaScriptRuntime { get; init; } = null!;
  
  
  private const string THEME_KEY_LABEL_PREFIX = "AdmonitionBlock.StandardThemes.";
  private const string GEOMETRIC_VARIATION_KEY_LABEL_PREFIX = "AdmonitionBlock.StandardGeometricVariations.";
  private const string DECORATIVE_VARIATION_KEY_LABEL_PREFIX = "AdmonitionBlock.StandardDecorativeVariations.";
  
  
  protected override async Task OnInitializedAsync()
  {
    await base.OnInitializedAsync();
    await JavaScriptRuntime.InvokeVoidAsync("setPageDependentStylesheet", "AdmonitionBlockGalleryPage");
  }
  
}
