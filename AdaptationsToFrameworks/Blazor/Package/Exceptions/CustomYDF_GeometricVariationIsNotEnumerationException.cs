namespace YamatoDaiwa.Frontend.Exceptions;


public class CustomYDF_GeometricVariationIsNotEnumerationException() : 
    ArgumentException(message: "The custom geometric variations must the be defined with enumeration.");
