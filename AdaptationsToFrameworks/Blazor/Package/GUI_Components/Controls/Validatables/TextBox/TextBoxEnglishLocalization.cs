namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.TextBox;


public record TextBoxEnglishLocalization : GUI_Components.Controls.Validatables.TextBox.TextBox.Localization
{
  
  public override Clickable valueCopyingButton { get; init; } = new()
  {
    accessibilityGuidance = "Copy inputted value"
  };

  public override PasswordDisplayingToggle passwordDisplayingToggle { get; init; } = new()
  {
    displayingState = new Clickable
    {
      accessibilityGuidance = "Display password"
    },
    hiddenState = new Clickable
    {
      accessibilityGuidance = "Hide password"
    }
  };
  
}