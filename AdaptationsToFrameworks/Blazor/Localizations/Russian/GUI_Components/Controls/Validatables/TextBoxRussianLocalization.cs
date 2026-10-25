using YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.TextBox;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validatables;


public record TextBoxRussianLocalization : TextBox.Localization
{
  
  public override Clickable valueCopyingButton { get; init; } = new()
  {
    accessibilityGuidance = "Копировать введённое значение"
  };

  public override PasswordDisplayingToggle passwordDisplayingToggle { get; init; } = new()
  {
    displayingState = new Clickable
    {
      accessibilityGuidance = "Показать пароль"
    },
    hiddenState = new Clickable
    {
      accessibilityGuidance = "Скрыть пароль"
    }
  };
  
}