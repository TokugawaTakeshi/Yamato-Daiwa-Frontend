using YamatoDaiwa.Frontend.GUI_Components.Controls.Buttons.Closing;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Buttons;


public record ClosingButtonJapaneseLocalization : ClosingButton.Localization
{
  public override required string defaultLabel { get; init; } = "閉じる";
  public override required string defaultAccessibilityGuidance { get; init; } = "閉じる";
}