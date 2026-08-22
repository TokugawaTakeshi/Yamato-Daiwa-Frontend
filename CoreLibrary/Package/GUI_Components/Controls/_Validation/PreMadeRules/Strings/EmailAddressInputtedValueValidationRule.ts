import { EMAIL_ADDRESS_VALID_PATTERN } from "fundamental-constants";

import type InputtedValueValidation from "../../InputtedValueValidation";

import emailAddressInputtedValueValidationRuleLocalization__english from
    "./EmailAddressInputtedValueValidationRuleLocalization.english";

import { isNotUndefined } from "@yamato-daiwa/es-extensions";


class EmailAddressInputtedValueValidationRule implements InputtedValueValidation.Rule<string> {

  public static localization: EmailAddressInputtedValueValidationRule.Localization =
      emailAddressInputtedValueValidationRuleLocalization__english;

  public readonly regularExpression: RegExp;
  public readonly mustFinishValidationIfValueIsInvalid: boolean;

  private readonly errorMessageBuilder: EmailAddressInputtedValueValidationRule.ErrorMessage.Builder;


  public constructor(
    compoundParameter:
        InputtedValueValidation.Rule.ConstructorParameter &
        Readonly<{
          regularExpression?: RegExp;
          errorMessageBuilder?: EmailAddressInputtedValueValidationRule.ErrorMessage.Builder;
          errorMessage?: string;
          localization?: EmailAddressInputtedValueValidationRule.Localization;
        }> = {}
  ) {

    this.regularExpression = compoundParameter.regularExpression ?? EMAIL_ADDRESS_VALID_PATTERN;
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
          EmailAddressInputtedValueValidationRule.localization.errorMessageBuilder;
    }

  }


  public check(rawValue: string): InputtedValueValidation.Rule.CheckingResult {
    return this.regularExpression.test(rawValue) ?
        { isValid: true } :
        {
          isValid: false,
          errorMessage: this.errorMessageBuilder({ rawValue })
        };
  }

}


namespace EmailAddressInputtedValueValidationRule {

  export type Localization = Readonly<{ errorMessageBuilder: ErrorMessage.Builder; }>;

  export namespace ErrorMessage {

    export type Builder = (templateVariables: TemplateVariables) => string;

    export type TemplateVariables = Readonly<{
      rawValue: string;
    }>;

  }

}


export default EmailAddressInputtedValueValidationRule;
