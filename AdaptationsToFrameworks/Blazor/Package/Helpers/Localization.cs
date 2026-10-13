namespace YamatoDaiwa.Frontend.Helpers;


public static class Localization
{
  
  public interface IClickableWithStaticLabel
  {
    public string label { get; init; }
  }
  
  public interface IClickableWithDynamicLabel<TTemplateVariables>
  {
    public Func<TTemplateVariables, string> generateLabel { get; init; }
  }
  
  public interface IClickableWithStaticAccessibilityGuidance
  {
    public string accessibilityGuidance { get; init; }
  }
  
  public interface IClickableWithDynamicAccessibilityGuidance<TTemplateVariables>
  {
    public Func<TTemplateVariables, string> generateAccessibilityGuidance { get; init; }
  }
  
}