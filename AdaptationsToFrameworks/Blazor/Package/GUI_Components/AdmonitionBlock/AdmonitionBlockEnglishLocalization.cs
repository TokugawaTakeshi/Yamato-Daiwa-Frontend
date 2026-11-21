namespace YamatoDaiwa.Frontend.GUI_Components.AdmonitionBlock;


public record AdmonitionBlockEnglishLocalization() : AdmonitionBlock.Localization(
  dismissingButton: new AdmonitionBlock.Localization.DismissingButton(accessibilityGuidance: "Hide this message")
);
