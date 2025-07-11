import type InputtedValueValidation from "../../InputtedValueValidation";
import nonNegativeIntegerOfRegularNotationInputtedValueValidationRuleLocalization__english from
    "./NonNegativeIntegerOfRegularNotationInputtedValueValidationRuleLocalization.english";
import { isNotUndefined } from "@yamato-daiwa/es-extensions";


class NonNegativeIntegerOfRegularNotationInputtedValueValidationRule
    implements InputtedValueValidation.Rule<number | bigint | string>
/* eslint-disable-next-line @stylistic/brace-style -- Allow Allman style for square areas principle. */
{

  public static localization: NonNegativeIntegerOfRegularNotationInputtedValueValidationRule.Localization =
      nonNegativeIntegerOfRegularNotationInputtedValueValidationRuleLocalization__english;

  public readonly mustFinishValidationIfValueIsInvalid: boolean;

  private readonly errorMessageBuilder: NonNegativeIntegerOfRegularNotationInputtedValueValidationRule.ErrorMessage.Builder;


  public constructor(
    compoundParameter:
        InputtedValueValidation.Rule.ConstructorParameter &
        Readonly<{
          errorMessageBuilder?: NonNegativeIntegerOfRegularNotationInputtedValueValidationRule.ErrorMessage.Builder;
          errorMessage?: string;
          localization?: NonNegativeIntegerOfRegularNotationInputtedValueValidationRule.Localization;
        }>
  ) {

    this.mustFinishValidationIfValueIsInvalid = compoundParameter.mustFinishValidationIfValueIsInvalid ?? false;

    if (isNotUndefined(compoundParameter.errorMessageBuilder)) {
      this.errorMessageBuilder = compoundParameter.errorMessageBuilder;
    } else if (isNotUndefined(compoundParameter.errorMessage)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
       * It was proved that "errorMessage" is non-undefined, and it will not change. */
      this.errorMessageBuilder = (): string => compoundParameter.errorMessage as string;
    } else {
      this.errorMessageBuilder =
          compoundParameter.localization?.errorMessageBuilder ??
          NonNegativeIntegerOfRegularNotationInputtedValueValidationRule.localization.errorMessageBuilder;
    }

  }


  public check(rawValue: number | bigint | string): InputtedValueValidation.Rule.CheckingResult {
    return (/^\d+$/u).test(String(rawValue)) ?
        { isValid: true } :
        {
          isValid: false,
          errorMessage: this.errorMessageBuilder({ rawValue })
        };
  }

}


namespace NonNegativeIntegerOfRegularNotationInputtedValueValidationRule {

  export type Localization = Readonly<{ errorMessageBuilder: ErrorMessage.Builder; }>;

  export namespace ErrorMessage {

    export type Builder = (templateVariables: TemplateVariables) => string;

    export type TemplateVariables = Readonly<{ rawValue: number | bigint | string; }>;

  }

}


export default NonNegativeIntegerOfRegularNotationInputtedValueValidationRule;
