import type { InputtedValueValidation } from "@yamato-daiwa/frontend";

import { MinimalKanjiOrKanaCharactersCountInputtedValueValidationRuleLocalization__Japanese } from
    "./MinimalKanjiOrKanaCharactersCountInputtedValueValidationRuleLocalization.japanese";

import { isNotUndefined } from "@yamato-daiwa/es-extensions";


export class MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule implements InputtedValueValidation.Rule<string> {

  public static localization: MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule.Localization =
      MinimalKanjiOrKanaCharactersCountInputtedValueValidationRuleLocalization__Japanese;

  public readonly mustFinishValidationIfValueIsInvalid: boolean;

  private readonly MINIMAL_KANJI_OR_KANA_CHARACTERS_COUNT: number;
  private readonly isKanjiOrKanaCharactersCountLessThanRequiredMinimum?: (
    compoundParameter: Readonly<{ targetString: string; minimalKanjiOrKanaCharactersCount: number; }>
  ) => boolean;

  private readonly errorMessageBuilder: MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule.ErrorMessage.Builder;


  public constructor(
    compoundParameter:
        InputtedValueValidation.Rule.ConstructorParameter &
        Readonly<{
          minimalKanjiOrKanaCharactersCount: number;
          isKanjiOrKanaCharactersCountLessThanRequiredMinimum?: (
            compoundParameter: Readonly<{ targetString: string; minimalKanjiOrKanaCharactersCount: number; }>
          ) => boolean;
          errorMessageBuilder?: MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule.ErrorMessage.Builder;
          errorMessage?: string;
        }>
  ) {

    this.mustFinishValidationIfValueIsInvalid = compoundParameter.mustFinishValidationIfValueIsInvalid ?? false;

    this.MINIMAL_KANJI_OR_KANA_CHARACTERS_COUNT = compoundParameter.minimalKanjiOrKanaCharactersCount;
    this.isKanjiOrKanaCharactersCountLessThanRequiredMinimum = compoundParameter.
        isKanjiOrKanaCharactersCountLessThanRequiredMinimum;

    if (isNotUndefined(compoundParameter.errorMessageBuilder)) {
      this.errorMessageBuilder = compoundParameter.errorMessageBuilder;
    } else if (isNotUndefined(compoundParameter.errorMessage)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
       * It was proved that "errorMessage" is non-undefined, and it will not change. */
      this.errorMessageBuilder = (): string => compoundParameter.errorMessage as string;
    } else {
      this.errorMessageBuilder = MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule.localization.
          errorMessageBuilder;
    }

  }

  public check(rawValue: string): InputtedValueValidation.Rule.CheckingResult {

    const isKanjiOrKanaCharactersCountLessThanRequiredMinimum: boolean =
        this.isKanjiOrKanaCharactersCountLessThanRequiredMinimum?.({
          targetString: rawValue,
          minimalKanjiOrKanaCharactersCount: this.MINIMAL_KANJI_OR_KANA_CHARACTERS_COUNT
        }) ??
        ((): boolean => {

          let kanjiOrKanaCharactersCount: number = 0;

          for (const character of rawValue) {

            if ((/[ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]/u).test(character)) {
              kanjiOrKanaCharactersCount++;
            }

            if (kanjiOrKanaCharactersCount === this.MINIMAL_KANJI_OR_KANA_CHARACTERS_COUNT) {
              return false;
            }

          }

          return true;

        })();

    return isKanjiOrKanaCharactersCountLessThanRequiredMinimum ?
        {
          isValid: false,
          errorMessage: this.errorMessageBuilder({
            rawValue, minimalKanjiOrKanaCharactersCount: this.MINIMAL_KANJI_OR_KANA_CHARACTERS_COUNT
          })
        } :
        { isValid: true };

  }

}


export namespace MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule {

  export type Localization = Readonly<{ errorMessageBuilder: ErrorMessage.Builder; }>;

  export namespace ErrorMessage {

    export type Builder = (templateVariables: TemplateVariables) => string;

    export type TemplateVariables = Readonly<{
      minimalKanjiOrKanaCharactersCount: number;
      rawValue: string;
    }>;

  }

}
