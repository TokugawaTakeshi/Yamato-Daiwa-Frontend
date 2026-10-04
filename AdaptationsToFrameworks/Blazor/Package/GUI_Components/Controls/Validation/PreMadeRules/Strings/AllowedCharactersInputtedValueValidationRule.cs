namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public class AllowedCharactersInputtedValueValidationRule : 
    YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.IRule
{
  
  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public interface ILocalization
  {

    public Func<ErrorMessage.TemplateVariables, string> ErrorMessageBuilder { get; }

    static class ErrorMessage
    {

      public record TemplateVariables
      {
        public required IEnumerable<char> InputtedDisallowedCharacters { get; init; }
        public required string RawValue { get; init; }
      }

    }

  }
  
  public static ILocalization Localization = new AllowedCharactersInputtedValueValidationRuleEnglishLocalization();
  
  
  /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected List<char> AllowedCharacters = [];
  
  
  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }
  
  
  
  /* ━━━ Specific Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Allowed Characters Groups ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public record AllowedCharactersSpecification
  {
    public bool latinLowercase { get; init; } = false;
    public bool latinUppercase { get; init; } = false;
    public bool digits { get; init; } = false;
    public IEnumerable<char> other { get; init; } = [];
  }
  
  public required AllowedCharactersSpecification AllowedCharactersGroups
  {
    init
    {
    
      List<char> allowedCharacters = [];

      if (value.latinLowercase)
      {
        allowedCharacters.AddRange("abcdefghijklmnopqrstuvwxyz");
      }
      
      if(value.latinUppercase)
      {
        allowedCharacters.AddRange("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      }
      
      if(value.digits)
      {
        allowedCharacters.AddRange("0123456789");
      }
      
      if(value.other.Any())
      {
        allowedCharacters.AddRange(value.other);
      }
      
      this.AllowedCharacters = allowedCharacters;
    
    }
  }


  /* ┅┅┅ Error Message Builder ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public Func<ILocalization.ErrorMessage.TemplateVariables, string>? ErrorMessageBuilder { get; init; }

  
  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.InputtedValueValidation.IRule.CheckingResult Check(
    object rawValue
  )
  {
   
    List<char> inputtedDisallowedCharacters = ((string)rawValue).EnumerateRunes().
        Select((System.Text.Rune rune) => (char) rune.Value).
        Where((char character) => !this.AllowedCharacters.Contains(character)).
        ToList();

    return new InputtedValueValidation.IRule.CheckingResult
    {
      ErrorMessage = inputtedDisallowedCharacters.Count > 0 ? 
        this.buildErrorMessage(
          new ILocalization.ErrorMessage.TemplateVariables
            {
              InputtedDisallowedCharacters = inputtedDisallowedCharacters,
              RawValue = (string)rawValue
            }
        ) : 
        null
    };
    
  } 
  
  private string buildErrorMessage(ILocalization.ErrorMessage.TemplateVariables templateVariables)
  {
    return this.ErrorMessageBuilder?.Invoke(templateVariables) ??
         AllowedCharactersInputtedValueValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }
  
}