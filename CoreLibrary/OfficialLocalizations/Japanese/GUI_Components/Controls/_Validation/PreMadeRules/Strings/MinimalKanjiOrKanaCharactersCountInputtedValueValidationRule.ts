import type { InputtedValueValidation } from "@yamato-daiwa/frontend";

import minimalKanjiOrKanaCharactersCountInputtedValueValidationRuleLocalization__japanese from
      "./MinimalKanjiOrKanaCharactersCountInputtedValueValidationRuleLocalization.japanese";

import {
  Logger,
  InvalidParameterValueError,
  isNotUndefined,
  isString
} from "@yamato-daiwa/es-extensions";


class MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule implements InputtedValueValidation.Rule {

  public static localization: MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule.Localization =
      minimalKanjiOrKanaCharactersCountInputtedValueValidationRuleLocalization__japanese;

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

  public check(rawValue: unknown): InputtedValueValidation.Rule.CheckingResult {

    if (!isString(rawValue)) {

      Logger.logError({
        errorType: InvalidParameterValueError.NAME,
        title: InvalidParameterValueError.localization.defaultTitle,
        description: "Unable to execute this validation because the raw value is not the string " +
            `and actually has type "${ typeof rawValue }".`,
        occurrenceLocation: "MinimalKanjiKanaCharactersInputtedValueValidationRule.check(rawValue)"
      });

      return { isValid: true };

    }


    const isKanjiOrKanaCharactersCountLessThanRequiredMinimum: boolean =
        this.isKanjiOrKanaCharactersCountLessThanRequiredMinimum?.({
          targetString: rawValue,
          minimalKanjiOrKanaCharactersCount: this.MINIMAL_KANJI_OR_KANA_CHARACTERS_COUNT
        }) ??
        ((): boolean => {

          let kanjiOrKanaCharactersCount: number = 0;

          for (const character of rawValue) {

            if (/[ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]/u.test(character)) {
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


namespace MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule {

  export type Localization = Readonly<{ errorMessageBuilder: ErrorMessage.Builder; }>;

  export namespace ErrorMessage {

    export type Builder = (templateVariables: TemplateVariables) => string;

    export type TemplateVariables = Readonly<{
      minimalKanjiOrKanaCharactersCount: number;
      rawValue: string;
    }>;

  }

}


export default MinimalKanjiOrKanaCharactersCountInputtedValueValidationRule;
