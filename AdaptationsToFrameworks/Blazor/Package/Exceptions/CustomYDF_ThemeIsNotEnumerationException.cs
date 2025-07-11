namespace YamatoDaiwa.Frontend.Exceptions;


public class CustomYDF_ThemeIsNotEnumerationException() : 
    ArgumentException(message: "The custom themes must the be defined with enumeration.");
