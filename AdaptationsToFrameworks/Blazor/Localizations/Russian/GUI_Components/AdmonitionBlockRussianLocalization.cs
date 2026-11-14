using YamatoDaiwa.Frontend.GUI_Components.AdmonitionBlock;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components;


public record AdmonitionBlockRussianLocalization : AdmonitionBlock.Localization
{
  
  public override AdmonitionBlock.Localization.DismissingButton dismissingButton { get; } = new()
  {
    accessibilityGuidance = "Убрать это сообщение"
  };
  
}