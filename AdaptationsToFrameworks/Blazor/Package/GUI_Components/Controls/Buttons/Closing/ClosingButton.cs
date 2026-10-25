namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Buttons.Closing;


public class ClosingButton
{
    
  public abstract record Localization
  {
    public abstract required string defaultLabel { get; init; }
    public abstract required string defaultAccessibilityGuidance { get; init; }
  }
  
}