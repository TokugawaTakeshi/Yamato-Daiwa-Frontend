import type MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule from
      "./MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule";


const minimalKanjiOrKanaCharactersCountInputtedValueValidationRuleLocalization__japanese:
    MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule.Localization =
{
  errorMessageBuilder: (
    {
      minimalKanjiOrKanaCharactersCount
    }: MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule.ErrorMessage.TemplateVariables
  ): string =>
      `入力された文字列は「日本語ではない」可能性があります。漢字・カタカナ・ひらがなを${ minimalKanjiOrKanaCharactersCount }文字以上ご使用ください。`
};


export default minimalKanjiOrKanaCharactersCountInputtedValueValidationRuleLocalization__japanese;
