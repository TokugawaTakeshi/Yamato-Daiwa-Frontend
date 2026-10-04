namespace YamatoDaiwa.Frontend.GUI_Components.AdmonitionBlock;


public record AdmonitionBlockEnglishLocalization : AdmonitionBlock.Localization
{
  
  public override DismissingButton dismissingButton { get; } = new()
  {
    accessibilityGuidance = "Hide this message"
  }; 
  
}