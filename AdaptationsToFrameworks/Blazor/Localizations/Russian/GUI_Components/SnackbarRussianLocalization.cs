using YamatoDaiwa.Frontend.GUI_Components.Snackbar;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components;


public record SnackbarRussianLocalization : Snackbar.Localization
{
  
  public override Snackbar.Localization.DismissingButton dismissingButton { get; } = new()
  {
    accessibilityGuidance = "Скрыть это сообщение"
  };
  
}