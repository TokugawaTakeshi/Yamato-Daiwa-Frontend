namespace YamatoDaiwa.Frontend.Exceptions;


public class InvalidGeometricVariationParameterForYDF_ComponentException() : ArgumentException(
  message:
    "The value of the \"geometricVariation\" attribute (which is also the Blazor component parameter) must be either " +
      "the element of \"StandardGeometricVariations\" enumeration or element of custom enumeration preliminary registered " +
      "via \"defineGeometricVariations\" static method while specified value is neither of."
);
