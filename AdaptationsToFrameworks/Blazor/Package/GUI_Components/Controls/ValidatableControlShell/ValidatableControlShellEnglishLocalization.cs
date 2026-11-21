namespace YamatoDaiwa.Frontend.GUI_Components.Controls.ValidatableControlShell;


public record ValidatableControlShellEnglishLocalization: 
    GUI_Components.Controls.ValidatableControlShell.ValidatableControlShell.Localization
{

  public override RequirementBadges requirementBadges { get; } =
      new()
      {
        required = "Required",
        optional = "Optional"
      };

}