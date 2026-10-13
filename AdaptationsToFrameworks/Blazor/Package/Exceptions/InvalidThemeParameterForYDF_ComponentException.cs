namespace YamatoDaiwa.Frontend.Exceptions;


public class InvalidThemeParameterForYDF_ComponentException() : ArgumentException(
  message:
    "The value of the \"theme\" attribute (which is also the Blazor component parameter) must be either the element " +
      "of \"StandardThemes\" enumeration or element of custom enumeration preliminary registered via " +
      "\"defineThemes\" static method while specified value is neither of."
);
