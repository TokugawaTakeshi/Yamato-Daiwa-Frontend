using YamatoDaiwa.Frontend.GUI_Components.AdmonitionBlock;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components;


public record AdmonitionBlockJapaneseLocalization : AdmonitionBlock.Localization
{
  
  public override AdmonitionBlock.Localization.DismissingButton dismissingButton { get; } = new()
  {
    accessibilityGuidance = "このメッセージを非表示"
  }; 
  
}