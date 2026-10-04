import type InputtedValueValidation from "../../InputtedValueValidation";

import noLinksInputtedValueValidationRuleLocalization__english from
    "./NoLinksInputtedValueValidationRuleLocalization.english";

import { isNotUndefined } from "@yamato-daiwa/es-extensions";


class NoLinksInputtedValueValidationRule implements InputtedValueValidation.Rule<string> {

  public static localization: NoLinksInputtedValueValidationRule.Localization =
      noLinksInputtedValueValidationRuleLocalization__english;

  public readonly regularExpressions: ReadonlyArray<RegExp>;
  public readonly mustFinishValidationIfValueIsInvalid: boolean;

  private readonly errorMessageBuilder: NoLinksInputtedValueValidationRule.ErrorMessage.Builder;


  public constructor(
    compoundParameter:
        InputtedValueValidation.Rule.ConstructorParameter &
        Readonly<{
          regularExpressions?: ReadonlyArray<RegExp>;
          errorMessageBuilder?: NoLinksInputtedValueValidationRule.ErrorMessage.Builder;
          errorMessage?: string;
          localization?: NoLinksInputtedValueValidationRule.Localization;
        }> = {}
  ) {

    /* [ Regular Expression Fiddle ] https://regex101.com/r/EhHaLL/1 */
    this.regularExpressions =
        compoundParameter.regularExpressions ??
        [
          /https?:\/\//u,
          /www\./u,
          /[a-z0-9]\.[a-z0-9][@\w]/u
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
          NoLinksInputtedValueValidationRule.localization.errorMessageBuilder;
    }

  }


  public check(rawValue: string): InputtedValueValidation.Rule.CheckingResult {
    return this.regularExpressions.some((regularExpression: RegExp): boolean => regularExpression.test(rawValue)) ?
        {
          isValid: false,
          errorMessage: this.errorMessageBuilder({ rawValue })
        } :
        { isValid: true };
  }

}


namespace NoLinksInputtedValueValidationRule {

  export type Localization = Readonly<{ errorMessageBuilder: ErrorMessage.Builder; }>;

  export namespace ErrorMessage {

    export type Builder = (templateVariables: TemplateVariables) => string;

    export type TemplateVariables = Readonly<{
      rawValue: string;
    }>;

  }

}


export default NoLinksInputtedValueValidationRule;
