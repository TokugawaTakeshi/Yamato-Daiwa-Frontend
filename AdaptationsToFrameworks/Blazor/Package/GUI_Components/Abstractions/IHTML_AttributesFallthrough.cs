namespace YamatoDaiwa.Frontend.GUI_Components.Abstractions;


public interface IHTML_AttributesFallthrough
{
 
  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  public IDictionary<string, object>? rootElementAttributes { get; set; }
  
}