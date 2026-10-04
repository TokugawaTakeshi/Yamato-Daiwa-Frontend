namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Buttons.HamburgerMenu;


public record HamburgerMenuButtonEnglishLocalization : HamburgerMenuButton.Localization
{
  public override required string defaultLabel { get; init; } = "Menu";
  public override required string defaultAccessibilityGuidance { get; init; } = "Menu";
}