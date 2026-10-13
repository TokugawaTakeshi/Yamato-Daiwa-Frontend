using YamatoDaiwa.Frontend.GUI_Components.Controls.Buttons.HamburgerMenu;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Buttons;


public record HamburgerMenuButtonEnglishLocalization : HamburgerMenuButton.Localization
{
  public override required string defaultLabel { get; init; } = "Меню";
  public override required string defaultAccessibilityGuidance { get; init; } = "Меню";
}
