namespace YamatoDaiwa.Frontend.Helpers;


public static class CSS_Class {

  public static string Join(params IEnumerable<string?> CSS_ClassesNames) {
    
    string workpiece = 
        CSS_ClassesNames.
            OfType<string>().
            Aggregate("", (string buffer, string CSS_ClassesName) => buffer + " " + CSS_ClassesName);

    return workpiece.Length > 0 ? workpiece[1..] : workpiece;
    
  }
  
  public static string AppendOneFromHTML_AttributesIfExists(
    string explicitSpaceSeparatedCSS_Classes, 
    Dictionary<string, object>? rootElementHTML_Attributes
  )
  {
  
    object? CSS_ClassPassedViaRootElementHTML_Attributes = rootElementHTML_Attributes?.GetValueOrDefault("class");
    
    return CSS_ClassPassedViaRootElementHTML_Attributes is string ? 
      $"${ explicitSpaceSeparatedCSS_Classes } ${ CSS_ClassPassedViaRootElementHTML_Attributes }" :
      explicitSpaceSeparatedCSS_Classes;
    
  }

}