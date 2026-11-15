using YamatoDaiwa.Frontend.GUI_Components.AdmonitionBlock;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components;


public record AdmonitionBlockJapaneseLocalization() : AdmonitionBlock.Localization(
  dismissingButton: new AdmonitionBlock.Localization.DismissingButton(accessibilityGuidance: "このメッセージを非表示")
); 