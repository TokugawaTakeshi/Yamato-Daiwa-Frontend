using YamatoDaiwa.Frontend.GUI_Components.Controls.Buttons.HamburgerMenu;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Buttons;


public record HamburgerMenuButtonJapaneseLocalization : HamburgerMenuButton.Localization
{
  public override required string defaultLabel { get; init; } = "メニュー";
  public override required string defaultAccessibilityGuidance { get; init; } = "メニュー";
}