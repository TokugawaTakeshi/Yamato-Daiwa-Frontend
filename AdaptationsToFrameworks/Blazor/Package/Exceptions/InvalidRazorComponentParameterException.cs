namespace YamatoDaiwa.Frontend.Exceptions;


public class InvalidRazorComponentParameterException(
  InvalidRazorComponentParameterException.TemplateVariables templateVariables 
): 
    ArgumentException(
      message: 
        $"\"{ templateVariables.ComponentName }\" component, property \"{ templateVariables.ParameterName }\" is invalid. " +
          templateVariables.MessageSpecificPart
    )
{
  
  public record TemplateVariables
  {
    public required string ComponentName { get; init; }
    public required string ParameterName { get; init; }
    public required string MessageSpecificPart { get; init; }
  }
  
}