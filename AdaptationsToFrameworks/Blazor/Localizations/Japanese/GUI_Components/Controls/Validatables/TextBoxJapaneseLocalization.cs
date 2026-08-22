using YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.TextBox;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validatables;


public record TextBoxJapaneseLocalization : TextBox.Localization
{
  
  public override Clickable valueCopyingButton { get; init; } = new()
  {
    accessibilityGuidance = "入力した値をコピー"
  };

  public override PasswordDisplayingToggle passwordDisplayingToggle { get; init; } = new()
  {
    displayingState = new Clickable
    {
      accessibilityGuidance = "パスワードを表示させる"
    },
    hiddenState = new Clickable
    {
      accessibilityGuidance = "パスワードを非表示にする"
    }
  };
  
}