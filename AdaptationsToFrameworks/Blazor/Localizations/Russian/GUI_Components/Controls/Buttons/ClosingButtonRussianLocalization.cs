using YamatoDaiwa.Frontend.GUI_Components.Controls.Buttons.Closing;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Buttons;


public record ClosingButtonRussianLocalization : ClosingButton.Localization
{
  public override required string defaultLabel { get; init; } = "Закрыть";
  public override required string defaultAccessibilityGuidance { get; init; } = "Закрыть";
}