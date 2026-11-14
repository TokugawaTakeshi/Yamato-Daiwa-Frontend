import type InputtedValueValidation from "../../InputtedValueValidation";
import minimalCharactersCountInputtedValueValidationRuleLocalization__english from
    "./MinimalCharactersCountInputtedValueValidationRuleLocalization.english";
import { isNotUndefined } from "@yamato-daiwa/es-extensions";


class MinimalCharactersCountInputtedValueValidationRule implements InputtedValueValidation.Rule<string> {

  public static localization: MinimalCharactersCountInputtedValueValidationRule.Localization =
      minimalCharactersCountInputtedValueValidationRuleLocalization__english;

  public readonly mustFinishValidationIfValueIsInvalid: boolean;

  protected readonly MINIMAL_CHARACTERS_COUNT: number;
  protected readonly errorMessageBuilder: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.Builder;


  public constructor(
    compoundParameter:
        InputtedValueValidation.Rule.ConstructorParameter &
        Readonly<{
          minimalCharactersCount: number;
          errorMessageBuilder?: MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.Builder;
          errorMessage?: string;
          localization?: MinimalCharactersCountInputtedValueValidationRule.Localization;
        }>
  ) {

    this.mustFinishValidationIfValueIsInvalid = compoundParameter.mustFinishValidationIfValueIsInvalid ?? false;

    this.MINIMAL_CHARACTERS_COUNT = compoundParameter.minimalCharactersCount;

    if (isNotUndefined(compoundParameter.errorMessageBuilder)) {
      this.errorMessageBuilder = compoundParameter.errorMessageBuilder;
    } else if (isNotUndefined(compoundParameter.errorMessage)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
       * It was proved that "errorMessage" is non-undefined, and it will not change. */
      this.errorMessageBuilder = (): string => compoundParameter.errorMessage as string;
    } else {
      this.errorMessageBuilder = (
        compoundParameter.localization ?? MinimalCharactersCountInputtedValueValidationRule.localization
      ).errorMessageBuilder;
    }

  }


  public check(rawValue: string): InputtedValueValidation.Rule.CheckingResult {
    return rawValue.length >= this.MINIMAL_CHARACTERS_COUNT ?
        { isValid: true } :
        {
          isValid: false,
          errorMessage: this.errorMessageBuilder({ rawValue, minimalCharactersCount: this.MINIMAL_CHARACTERS_COUNT })
        };
  }

}


namespace MinimalCharactersCountInputtedValueValidationRule {

  export type Localization = Readonly<{ errorMessageBuilder: ErrorMessage.Builder; }>;

  export namespace ErrorMessage {

    export type Builder = (templateVariables: TemplateVariables) => string;

    export type TemplateVariables = Readonly<{
      minimalCharactersCount: number;
      rawValue: string;
    }>;

  }

}


export default MinimalCharactersCountInputtedValueValidationRule;
