namespace YamatoDaiwa.Frontend.Exceptions;


public class CustomYDF_DecorativeVariationIsNotEnumerationException() : 
    ArgumentException(message: "The custom decorative variations must the be defined with enumeration.");
