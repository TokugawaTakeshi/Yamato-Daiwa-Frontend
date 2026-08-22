import type InputtedValueValidation from "../../InputtedValueValidation";

// TODO To lower camel case
import ${TARGET}InputtedValueValidationRuleLocalization__english from
    "./${TARGET}InputtedValueValidationRuleLocalization.english";

import { Logger, InvalidParameterValueError, isNotUndefined, isString } from "@yamato-daiwa/es-extensions";


class ${TARGET}InputtedValueValidationRule implements InputtedValueValidation.Rule {

  public static localization: ${TARGET}InputtedValueValidationRule.Localization =
      // TODO To lower camel case
      ${TARGET}InputtedValueValidationRuleLocalization__english;

  public readonly regularExpression: RegExp;
  public readonly mustFinishValidationIfValueIsInvalid: boolean;

  private readonly errorMessageBuilder: ${TARGET}InputtedValueValidationRule.ErrorMessage.Builder;


  public constructor(
    compoundParameter:
        InputtedValueValidation.Rule.ConstructorParameter &
        Readonly<{
          regularExpression?: RegExp;
          errorMessageBuilder?: ${TARGET}InputtedValueValidationRule.ErrorMessage.Builder;
          errorMessage?: string;
        }> = {}
  ) {

    this.regularExpression = compoundParameter.regularExpression ?? /\w/gu;
    this.mustFinishValidationIfValueIsInvalid = compoundParameter.mustFinishValidationIfValueIsInvalid ?? false;

    if (isNotUndefined(compoundParameter.errorMessageBuilder)) {
      this.errorMessageBuilder = compoundParameter.errorMessageBuilder;
    } else if (isNotUndefined(compoundParameter.errorMessage)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
       * It was proved that "errorMessage" is non-undefined, and it will not change. */
      this.errorMessageBuilder = (): string => compoundParameter.errorMessage as string;
    } else {
      this.errorMessageBuilder = ${TARGET}InputtedValueValidationRule.localization.errorMessageBuilder;
    }

  }


  public check(rawValue: unknown): InputtedValueValidation.Rule.CheckingResult {

    if (!isString(rawValue)) {

      Logger.logError({
        errorType: InvalidParameterValueError.NAME,
        title: InvalidParameterValueError.localization.defaultTitle,
        description: "Unable to execute this validation because the raw value is not the string " +
            `and actually has type "${ typeof rawValue }".`,
        occurrenceLocation: "${TARGET}InputtedValueValidationRule.check(rawValue)"
      });

      return { isValid: true };

    }


    return this.regularExpression.test(rawValue) ?
        { isValid: true } :
        {
          isValid: false,
          errorMessage: this.errorMessageBuilder({ rawValue })
        };

  }

}


namespace ${TARGET}InputtedValueValidationRule {

  export type Localization = Readonly<{ errorMessageBuilder: ErrorMessage.Builder; }>;

  export namespace ErrorMessage {

    export type Builder = (templateVariables: TemplateVariables) => string;

    export type TemplateVariables = Readonly<{
      rawValue: string;
    }>;

  }

}


export default ${TARGET}InputtedValueValidationRule;
