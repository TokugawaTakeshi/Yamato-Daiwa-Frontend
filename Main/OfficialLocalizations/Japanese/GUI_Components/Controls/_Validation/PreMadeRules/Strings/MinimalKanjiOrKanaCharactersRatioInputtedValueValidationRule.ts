import type { InputtedValueValidation } from "@yamato-daiwa/frontend";
import { MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRuleLocalization__Japanese } from
    "./MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRuleLocalization.japanese";
import { isNotUndefined } from "@yamato-daiwa/es-extensions";


export class MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRule implements InputtedValueValidation.Rule<string> {

  public static localization: MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRule.Localization =
      MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRuleLocalization__Japanese;

  public readonly mustFinishValidationIfValueIsInvalid: boolean;

  private readonly MINIMAL_KANJI_OR_KANA_CHARACTERS_RATIO: number;
  private readonly isKanjiOrKanaCharactersRatioLessThanRequiredMinimum?: (
    compoundParameter: Readonly<{ targetString: string; minimalKanjiOrKanaCharactersRatio: number; }>
  ) => boolean;

  private readonly errorMessageBuilder: MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRule.ErrorMessage.Builder;


  public constructor(
    compoundParameter:
        InputtedValueValidation.Rule.ConstructorParameter &
        Readonly<{
          minimalKanjiOrKanaCharactersRatio: number;
          isKanjiOrKanaCharactersRatioLessThanRequiredMinimum?: (
            compoundParameter: Readonly<{ targetString: string; minimalKanjiOrKanaCharactersRatio: number; }>
          ) => boolean;
          errorMessageBuilder?: MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRule.ErrorMessage.Builder;
          errorMessage?: string;
        }>
  ) {

    this.mustFinishValidationIfValueIsInvalid = compoundParameter.mustFinishValidationIfValueIsInvalid ?? false;

    this.MINIMAL_KANJI_OR_KANA_CHARACTERS_RATIO = compoundParameter.minimalKanjiOrKanaCharactersRatio;
    this.isKanjiOrKanaCharactersRatioLessThanRequiredMinimum = compoundParameter.
        isKanjiOrKanaCharactersRatioLessThanRequiredMinimum;

    if (isNotUndefined(compoundParameter.errorMessageBuilder)) {
      this.errorMessageBuilder = compoundParameter.errorMessageBuilder;
    } else if (isNotUndefined(compoundParameter.errorMessage)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
       * It was proved that "errorMessage" is non-undefined, and it will not change. */
      this.errorMessageBuilder = (): string => compoundParameter.errorMessage as string;
    } else {
      this.errorMessageBuilder = MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRule.localization.
          errorMessageBuilder;
    }

  }

  public check(rawValue: string): InputtedValueValidation.Rule.CheckingResult {

    const isKanjiOrKanaCharactersRatioLessThanRequiredMinimum: boolean =
        this.isKanjiOrKanaCharactersRatioLessThanRequiredMinimum?.({
          targetString: rawValue,
          minimalKanjiOrKanaCharactersRatio: this.MINIMAL_KANJI_OR_KANA_CHARACTERS_RATIO
        }) ??
        ((): boolean => {

          let kanjiOrKanaCharactersCount: number = 0;

          for (const character of rawValue) {

            if ((/[ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]/u).test(character)) {

              kanjiOrKanaCharactersCount++;

              const kanjiOrKanaCharactersRatio: number = kanjiOrKanaCharactersCount / rawValue.length;

              if (kanjiOrKanaCharactersRatio >= this.MINIMAL_KANJI_OR_KANA_CHARACTERS_RATIO) {
                return false;
              }

            }

          }

          return true;

        })();

    return isKanjiOrKanaCharactersRatioLessThanRequiredMinimum ?
        {
          isValid: false,
          errorMessage: this.errorMessageBuilder({
            rawValue, minimalKanjiOrKanaCharactersRatio: this.MINIMAL_KANJI_OR_KANA_CHARACTERS_RATIO
          })
        } :
        { isValid: true };

  }

}


export namespace MinimalKanjiOrKanaCharactersRatioInputtedValueValidationRule {

  export type Localization = Readonly<{ errorMessageBuilder: ErrorMessage.Builder; }>;

  export namespace ErrorMessage {

    export type Builder = (templateVariables: TemplateVariables) => string;

    export type TemplateVariables = Readonly<{
      minimalKanjiOrKanaCharactersRatio: number;
      rawValue: string;
    }>;

  }

}
