namespace YamatoDaiwa.Frontend.GUI_Components.Snackbar;


public class Snackbar
{
  
  public abstract record Localization
  {

    public abstract DismissingButton dismissingButton { get; }

    public record DismissingButton
    {
      public required string accessibilityGuidance { get; init; }
    }

  }
  
}