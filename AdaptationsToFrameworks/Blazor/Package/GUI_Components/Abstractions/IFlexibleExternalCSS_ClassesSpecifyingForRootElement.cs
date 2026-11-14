using YamatoDaiwa.CSharpExtensions;


namespace YamatoDaiwa.Frontend.GUI_Components.Abstractions;


public interface IFlexibleExternalCSS_ClassesSpecifyingForRootElement : IExternalCSS_ClassesForRootElement
{
  
  public string? rootElementModifierCSS_Class { get; set; }

  public string[]? rootElementModifierCSS_Classes { get; set; }
  
  public string? rootElementSpaceSeparatedModifierCSS_Classes { get; set; }

  public new string rootElementSpaceSeparatedExternalCSS_Classes => new List<string>().
        
      AddElementToEndIf(this.rootElementModifierCSS_Class!,  !String.IsNullOrEmpty(this.rootElementModifierCSS_Class)).
        
      AddElementsToEnd(this.rootElementSpaceSeparatedModifierCSS_Classes?.Split(" ") ?? []).
        
      AddElementsToEnd(this.rootElementModifierCSS_Classes ?? []).
        
      StringifyEachElementAndJoin(" ");
  
}