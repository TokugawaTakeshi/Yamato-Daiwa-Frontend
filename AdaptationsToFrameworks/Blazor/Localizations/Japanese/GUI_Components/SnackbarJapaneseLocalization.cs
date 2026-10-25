using YamatoDaiwa.Frontend.GUI_Components.Snackbar;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components;


public record SnackbarJapaneseLocalization : Snackbar.Localization
{
  
  public override Snackbar.Localization.DismissingButton dismissingButton { get; } = new()
  {
    accessibilityGuidance = "このメッセージを隠す"
  }; 
  
}