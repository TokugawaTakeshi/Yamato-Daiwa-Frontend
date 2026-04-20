using System.Text.RegularExpressions;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public class MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule : InputtedValueValidation.IRule
{

  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public interface ILocalization
  {

    public Func<ErrorMessage.TemplateVariables, string> ErrorMessageBuilder { get; }

    public static class ErrorMessage
    {

      public record TemplateVariables
      {
        public required string RawValue { get; init; }
        public required IConvertible MinimalKanjiOrKanaCharactersCount { get; init; }
      }

    }

  }

  public static ILocalization Localization { get; set; } = new MinimalKanjiOrKanaCharactersCountInputtedValueValidationRuleJapaneseLocalization();


  /* ━━━ Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }

  public required IConvertible MinimalKanjiOrKanaCharactersCount { get; init; }

  public record CustomCheckParameter
  {
    public required string TargetString { get; init; }
    public required int MinimalKanjiOrKanaCharactersCount { get; init; }
  }

  public Func<CustomCheckParameter, bool>? IsKanjiOrKanaCharactersCountLessThanRequiredMinimum { get; init; }

  public Func<ILocalization.ErrorMessage.TemplateVariables, string>? ErrorMessageBuilder { get; init; }
  public string? ErrorMessage { get; init; }

  private static readonly Regex KanjiOrKanaRegex = new(@"[ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]", RegexOptions.Compiled);


  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public InputtedValueValidation.IRule.CheckingResult Check(object rawValue)
  {
    int minimalKanjiOrKanaCharactersCount = Convert.ToInt32(this.MinimalKanjiOrKanaCharactersCount);

    bool isInvalid = this.IsKanjiOrKanaCharactersCountLessThanRequiredMinimum?.
      Invoke(
        new CustomCheckParameter
        {
          TargetString = (string)rawValue,
          MinimalKanjiOrKanaCharactersCount = minimalKanjiOrKanaCharactersCount
        }
      ) ?? 
      this.checkByDefaultAlgorithm((string)rawValue, minimalKanjiOrKanaCharactersCount);


    return new InputtedValueValidation.IRule.CheckingResult
    {
      ErrorMessage = isInvalid ?
          this.buildErrorMessage(
            new ILocalization.ErrorMessage.TemplateVariables
            {
              RawValue = (string)rawValue,
              MinimalKanjiOrKanaCharactersCount = this.MinimalKanjiOrKanaCharactersCount
            }
          ) :
          null
    };

  }

  private bool checkByDefaultAlgorithm(string targetString, int minimalKanjiOrKanaCharactersCount)
  {

    int count = 0;

    foreach (char character in targetString)
    {

      if (KanjiOrKanaRegex.IsMatch(character.ToString()))
      {
        count++;
      }

      if (count == minimalKanjiOrKanaCharactersCount)
      {
        return false;
      }

    }

    return true;

  }

  private string buildErrorMessage(ILocalization.ErrorMessage.TemplateVariables templateVariables)
  {
    return this.ErrorMessageBuilder?.Invoke(templateVariables) ??
        this.ErrorMessage ??
        MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }

}
