import type InputtedValueValidation from "../../InputtedValueValidation";
import numericMinimumInputtedValueValidationRuleLocalization__english from
    "./NumericMinimumInputtedValueValidationRuleLocalization.english";
import { isNotUndefined } from "@yamato-daiwa/es-extensions";


class NumericMinimumInputtedValueValidationRule implements InputtedValueValidation.Rule<number> {

  public static localization: NumericMinimumInputtedValueValidationRule.Localization =
      numericMinimumInputtedValueValidationRuleLocalization__english;

  public readonly mustFinishValidationIfValueIsInvalid: boolean;

  private readonly MINIMAL_NUMERIC_VALUE: number;
  private readonly errorMessageBuilder: NumericMinimumInputtedValueValidationRule.ErrorMessage.Builder;

  public constructor(
    compoundParameter:
        InputtedValueValidation.Rule.ConstructorParameter &
        Readonly<{
          minimalNumericValue: number;
          errorMessageBuilder?: NumericMinimumInputtedValueValidationRule.ErrorMessage.Builder;
          errorMessage?: string;
          localization?: NumericMinimumInputtedValueValidationRule.Localization;
        }>
  ) {

    this.MINIMAL_NUMERIC_VALUE = compoundParameter.minimalNumericValue;

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
          NumericMinimumInputtedValueValidationRule.localization.errorMessageBuilder;
    }

  }


  public check(rawValue: number): InputtedValueValidation.Rule.CheckingResult {
    return rawValue >= this.MINIMAL_NUMERIC_VALUE ?
        { isValid: true } :
        {
          isValid: false,
          errorMessage: this.errorMessageBuilder({ rawValue, minimalValue: this.MINIMAL_NUMERIC_VALUE })
        };
  }

}


namespace NumericMinimumInputtedValueValidationRule {

  export type Localization = Readonly<{ errorMessageBuilder: ErrorMessage.Builder; }>;

  export namespace ErrorMessage {

    export type Builder = (templateVariables: TemplateVariables) => string;

    export type TemplateVariables = Readonly<{
      minimalValue: number;
      rawValue: number;
    }>;

  }

}


export default NumericMinimumInputtedValueValidationRule;
