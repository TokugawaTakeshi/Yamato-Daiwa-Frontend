namespace YamatoDaiwa.Frontend.GUI_Components.Abstractions;


public interface IHTML_AttributesFallthrough
{
 
  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  [
    System.Diagnostics.CodeAnalysis.SuppressMessage(
      "Microsoft.Performance",
      "BL0007",
      Justification = "Can not be the auto property because `CaptureUnmatchedValues = true` specification is required."
    )
  ]
  public Dictionary<string, object>? rootElementHTML_Attributes { get; set; }
  
}