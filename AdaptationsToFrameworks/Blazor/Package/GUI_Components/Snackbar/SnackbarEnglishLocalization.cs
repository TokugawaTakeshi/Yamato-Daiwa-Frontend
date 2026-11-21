namespace YamatoDaiwa.Frontend.GUI_Components.Snackbar;


public record SnackbarEnglishLocalization : Snackbar.Localization
{
  
  public override DismissingButton dismissingButton { get; } = new()
  {
    accessibilityGuidance = "Hide this message"
  }; 
  
}