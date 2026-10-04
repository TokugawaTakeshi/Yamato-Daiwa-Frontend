namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Buttons.Closing;


public record ClosingButtonEnglishLocalization : ClosingButton.Localization
{
  public override required string defaultLabel { get; init; } = "Close";
  public override required string defaultAccessibilityGuidance { get; init; } = "Close";
}