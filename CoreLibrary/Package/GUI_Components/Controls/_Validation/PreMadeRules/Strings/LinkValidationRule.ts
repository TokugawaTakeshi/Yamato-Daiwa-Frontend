import type InputtedValueValidation from "../../InputtedValueValidation";

import linkValidationRuleLocalization__english from "./LinkValidationRuleLocalization.english";

import {
  Logger,
  InvalidParameterValueError,
  isNotUndefined,
  isString,
  isNonEmptyString
} from "@yamato-daiwa/es-extensions";


class LinkValidationRule implements InputtedValueValidation.Rule {

  public static localization: LinkValidationRule.Localization = linkValidationRuleLocalization__english;

  public readonly regularExpressions: ReadonlyArray<RegExp>;
  public readonly mustFinishValidationIfValueIsInvalid: boolean;

  private readonly errorMessageBuilder: LinkValidationRule.ErrorMessage.Builder;


  public constructor(
    compoundParameter:
        InputtedValueValidation.Rule.ConstructorParameter &
        Readonly<{
          mustStartWith?: string;
          regularExpressions?: ReadonlyArray<RegExp>;
          errorMessageBuilder?: LinkValidationRule.ErrorMessage.Builder;
          errorMessage?: string;
          localization?: LinkValidationRule.Localization;
        }> = {}
  ) {

    /* [ Regular Expression Fiddle ] https://regex101.com/r/EhHaLL/1
    /* [ Theory ] The `g` frag must NOT be used here because once `text` or `exec` will be called the last index will
     *     change. */
    this.regularExpressions =
        compoundParameter.regularExpressions ??
        [
          ...isNonEmptyString(compoundParameter.mustStartWith) ?
              [ new RegExp(`^${ compoundParameter.mustStartWith }`, "u") ] :
              [ /https?:\/\//u ]
        ];

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
          LinkValidationRule.localization.errorMessageBuilder;
    }

  }


  public check(rawValue: unknown): InputtedValueValidation.Rule.CheckingResult {

    if (!isString(rawValue)) {

      Logger.logError({
        errorType: InvalidParameterValueError.NAME,
        title: InvalidParameterValueError.localization.defaultTitle,
        description: "Unable to execute this validation because the raw value is not the string " +
            `and actually has type "${ typeof rawValue }".`,
        occurrenceLocation: "LinkValidationRule.check(rawValue)"
      });

      return { isValid: true };

    }

    return this.regularExpressions.every((regularExpression: RegExp): boolean => regularExpression.test(rawValue)) ?
        { isValid: true } :
        {
          isValid: false,
          errorMessage: this.errorMessageBuilder({ rawValue })
        };

  }

}


namespace LinkValidationRule {

  export type Localization = Readonly<{ errorMessageBuilder: ErrorMessage.Builder; }>;

  export namespace ErrorMessage {

    export type Builder = (templateVariables: TemplateVariables) => string;

    export type TemplateVariables = Readonly<{
      rawValue: string;
    }>;

  }

}


export default LinkValidationRule;
