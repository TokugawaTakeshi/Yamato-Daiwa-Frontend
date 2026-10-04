namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRuleJapaneseLocalization : 
    MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRule.ILocalization
{

  public Func<
    MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      _ => "入力された文字列は「日本語ではない」可能性があります。漢字・カタカナ・ひらがなの割合を増やしてください。";

}
