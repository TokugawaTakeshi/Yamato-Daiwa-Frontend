using YamatoDaiwa.Frontend.GUI_Components.AdmonitionBlock;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components;


public record AdmonitionBlockRussianLocalization() : AdmonitionBlock.Localization(
  dismissingButton: new AdmonitionBlock.Localization.DismissingButton(accessibilityGuidance: "Убрать это сообщение")
); 
