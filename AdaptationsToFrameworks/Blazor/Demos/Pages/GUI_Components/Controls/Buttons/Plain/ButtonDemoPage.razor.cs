using Demos.GUI_Components.ThemesShowcase;
using Microsoft.JSInterop;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Buttons.Plain;

namespace Demos.Pages.GUI_Components.Controls.Buttons.Plain;


public partial class ButtonDemoPage : Microsoft.AspNetCore.Components.ComponentBase
{
  
  [Microsoft.AspNetCore.Components.Inject]
  protected Microsoft.JSInterop.IJSRuntime JavaScriptRuntime { get; init; } = null!;
  
  private const string THEME_KEY_LABEL_PREFIX = "Button.StandardThemes.";
  private const string GEOMETRIC_VARIATION_KEY_LABEL_PREFIX = "Button.StandardGeometricVariations.";
  private const string DECORATIVE_VARIATION_KEY_LABEL_PREFIX = "Button.StandardDecorativeVariations.";

  private const string textOverflowSafetyTest = "OVERFLOW_TEST-ghghghghghghghghghghghghghghghghghghghghghghghghghghgh";

  protected override async Task OnInitializedAsync()
  {
    await base.OnInitializedAsync();
    await JavaScriptRuntime.InvokeVoidAsync("setPageDependentStylesheet", "ButtonGalleryPage");
  }

  private readonly Func<ThemesShowcase.ComponentSlotData, bool> mustSkipDecorativeVariation = 
    (ThemesShowcase.ComponentSlotData slotData) =>
        (
          slotData.decorativeVariationValue.ToString() == nameof(Button.StandardDecorativeVariations.linkLike) &&
            slotData.geometricVariationValue.ToString() != nameof(Button.StandardGeometricVariations.linkLike)
        ) ||
        (
          slotData.decorativeVariationValue.ToString() != nameof(Button.StandardDecorativeVariations.linkLike) &&
            slotData.geometricVariationValue.ToString() == nameof(Button.StandardGeometricVariations.linkLike)
        );

}
