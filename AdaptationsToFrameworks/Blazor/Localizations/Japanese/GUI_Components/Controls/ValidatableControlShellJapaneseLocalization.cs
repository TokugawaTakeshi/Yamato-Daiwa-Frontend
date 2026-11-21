using YamatoDaiwa.Frontend.GUI_Components.Controls.ValidatableControlShell;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls;


public record ValidatableControlShellJapaneseLocalization: 
    ValidatableControlShell.Localization
{

  public override RequirementBadges requirementBadges { get; } =
      new()
      {
        required = "必須",
        optional = "任意"
      };

}