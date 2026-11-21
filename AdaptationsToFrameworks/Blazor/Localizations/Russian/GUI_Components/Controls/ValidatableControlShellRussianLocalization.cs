using YamatoDaiwa.Frontend.GUI_Components.Controls.ValidatableControlShell;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls;


public record ValidatableControlShellRussianLocalization: 
    ValidatableControlShell.Localization
{

  public override RequirementBadges requirementBadges { get; } =
      new()
      {
        required = "Обязательное поле",
        optional = "Необязательное поле"
      };

}