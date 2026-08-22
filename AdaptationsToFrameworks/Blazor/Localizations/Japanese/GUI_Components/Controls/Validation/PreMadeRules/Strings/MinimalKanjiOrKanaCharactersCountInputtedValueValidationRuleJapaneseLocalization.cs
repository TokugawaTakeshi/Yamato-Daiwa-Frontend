namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct MinimalKanjiOrKanaCharactersCountInputtedValueValidationRuleJapaneseLocalization : 
    MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule.ILocalization
{

  public Func<
    MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      templateVariables =>
          "入力された文字列は「日本語ではない」可能性があります。" +
          $"漢字・カタカナ・ひらがなを{ templateVariables.MinimalKanjiOrKanaCharactersCount }文字以上ご使用ください。";

}
