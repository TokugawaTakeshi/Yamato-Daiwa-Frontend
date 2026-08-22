using System.Text.RegularExpressions;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public class MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRule : InputtedValueValidation.IRule
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
        public required IConvertible MinimalKanjiOrKanaCharactersRatio { get; init; }
      }

    }

  }

  public static ILocalization Localization { get; set; } = new MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRuleJapaneseLocalization();


  /* ━━━ Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public bool MustFinishValidationIfValueIsInvalid { get; init; }

  public required IConvertible MinimalKanjiOrKanaCharactersRatio { get; init; }

  public record CustomCheckParameter
  {
    public required string TargetString { get; init; }
    public required double MinimalKanjiOrKanaCharactersRatio { get; init; }
  }

  public Func<CustomCheckParameter, bool>? IsKanjiOrKanaCharactersRatioLessThanRequiredMinimum { get; init; }

  public Func<ILocalization.ErrorMessage.TemplateVariables, string>? ErrorMessageBuilder { get; init; }
  public string? ErrorMessage { get; init; }

  private static readonly Regex KanjiOrKanaRegex = new(@"[ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]", RegexOptions.Compiled);


  /* ━━━ Interface Implementation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public InputtedValueValidation.IRule.CheckingResult Check(object rawValue)
  {

    double minimalKanjiOrKanaCharactersRatio = Convert.ToDouble(this.MinimalKanjiOrKanaCharactersRatio);

    bool isInvalid = this.IsKanjiOrKanaCharactersRatioLessThanRequiredMinimum?.
        Invoke(
          new CustomCheckParameter
          {
            TargetString = (string)rawValue,
            MinimalKanjiOrKanaCharactersRatio = minimalKanjiOrKanaCharactersRatio
          }
        ) ?? 
        checkByDefaultAlgorithm((string)rawValue, minimalKanjiOrKanaCharactersRatio);


    return new InputtedValueValidation.IRule.CheckingResult
    {
      ErrorMessage = isInvalid ?
          this.buildErrorMessage(
            new ILocalization.ErrorMessage.TemplateVariables
            {
              RawValue = (string)rawValue,
              MinimalKanjiOrKanaCharactersRatio = this.MinimalKanjiOrKanaCharactersRatio
            }
          ) :
          null
    };

  }

  private static bool checkByDefaultAlgorithm(string targetString, double minimalKanjiOrKanaCharactersRatio)
  {

    int kanjiOrKanaCharactersCount = 0;

    foreach (char character in targetString)
    {

      if (KanjiOrKanaRegex.IsMatch(character.ToString()))
      {

        kanjiOrKanaCharactersCount++;

        double kanjiOrKanaCharactersRatio = (double)kanjiOrKanaCharactersCount / targetString.Length;

        if (kanjiOrKanaCharactersRatio >= minimalKanjiOrKanaCharactersRatio)
        {
          return false;
        }

      }

    }

    return true;

  }

  private string buildErrorMessage(ILocalization.ErrorMessage.TemplateVariables templateVariables)
  {
    return this.ErrorMessageBuilder?.Invoke(templateVariables) ??
        this.ErrorMessage ??
        MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRule.Localization.ErrorMessageBuilder(templateVariables);
  }

}
