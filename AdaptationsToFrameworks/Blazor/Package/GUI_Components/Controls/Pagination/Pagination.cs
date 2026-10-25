namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Pagination;


public class Pagination
{
    
  public abstract record Localization
  {
    
    public record Button: Helpers.Localization.IClickableWithStaticAccessibilityGuidance
    {
       public required string accessibilityGuidance { get; init; }
    }
    
    public record Buttons
    {
      public required Button toFirstPage { get; init; }
      public required Button toPreviousPage { get; init; }
      public required Button toNextPage { get; init; }
      public required Button toLastPage { get; init; }
    }
    
    public abstract required Buttons buttons { get; init; }
    
  }
  
}
