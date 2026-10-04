import type InputtedValueValidation from "../../InputtedValueValidation";
import numericMaximumInputtedValueValidationRuleLocalization__english from
    "./NumericMaximumInputtedValueValidationRuleLocalization.english";
import { isNotUndefined } from "@yamato-daiwa/es-extensions";


class NumericMaximumInputtedValueValidationRule<TargetType extends number | bigint> implements
    InputtedValueValidation.Rule<TargetType> {

  public static localization: NumericMaximumInputtedValueValidationRule.Localization =
      numericMaximumInputtedValueValidationRuleLocalization__english;

  public readonly mustFinishValidationIfValueIsInvalid: boolean;

  private readonly MAXIMAL_NUMERIC_VALUE: TargetType;
  private readonly errorMessageBuilder: NumericMaximumInputtedValueValidationRule.ErrorMessage.Builder;


  public constructor(
    compoundParameter:
        InputtedValueValidation.Rule.ConstructorParameter &
        Readonly<{
          maximalNumericValue: TargetType;
          errorMessageBuilder?: NumericMaximumInputtedValueValidationRule.ErrorMessage.Builder;
          errorMessage?: string;
          localization?: NumericMaximumInputtedValueValidationRule.Localization;
        }>
  ) {

    this.MAXIMAL_NUMERIC_VALUE = compoundParameter.maximalNumericValue;

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
          NumericMaximumInputtedValueValidationRule.localization.errorMessageBuilder;
    }

  }


  public check(rawValue: TargetType): InputtedValueValidation.Rule.CheckingResult {
    return rawValue <= this.MAXIMAL_NUMERIC_VALUE ?
        { isValid: true } :
        {
          isValid: false,
          errorMessage: this.errorMessageBuilder({ rawValue, maximalValue: this.MAXIMAL_NUMERIC_VALUE })
        };
  }

}


namespace NumericMaximumInputtedValueValidationRule {

  export type Localization = Readonly<{ errorMessageBuilder: ErrorMessage.Builder; }>;

  export namespace ErrorMessage {

    export type Builder = (templateVariables: TemplateVariables) => string;

    export type TemplateVariables = Readonly<{
      maximalValue: number | bigint;
      rawValue: number | bigint;
    }>;

  }

}


export default NumericMaximumInputtedValueValidationRule;
