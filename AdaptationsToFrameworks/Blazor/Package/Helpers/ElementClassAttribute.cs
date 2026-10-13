namespace YamatoDaiwa.Frontend.Helpers;


public static class ElementClassAttribute
{

  public static string Generate(string namespaceClass, Dictionary<string, object>? rootElementHTML_Attributes) =>
      rootElementHTML_Attributes?.TryGetValue("class", out object? rootElementClassAttributeRawValue) == true &&
      rootElementClassAttributeRawValue is string rootElementClassAttributeValue? 
          $"{ namespaceClass } { rootElementClassAttributeValue }"
          : namespaceClass;
  
}