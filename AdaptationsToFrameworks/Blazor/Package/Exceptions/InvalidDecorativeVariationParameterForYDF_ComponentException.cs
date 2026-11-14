namespace YamatoDaiwa.Frontend.Exceptions;


public class InvalidDecorativeVariationParameterForYDF_ComponentException() : 
  ArgumentException(
    message:
      "The value of the \"decorativeVariation\" attribute (which is also the Blazor component parameter) must be either " +
        "the element of \"StandardDecorativeVariations\" enumeration or element of custom enumeration preliminary " +
        "registered via \"defineGeometricVariations\" static method while specified value is neither of."
  );
