import { JAPANESE_PHONE_NUMBER_VALID_PATTERN__NO_N_DASHES_ALLOWED } from "fundamental-constants-japan";

import type { InputtedValueValidation } from "@yamato-daiwa/frontend";

import { JapanesePhoneNumberInputtedValueValidationRuleLocalization__Japanese } from
      "./JapanesePhoneNumberInputtedValueValidationRuleLocalization.japanese";

import {
  removeAllSpecifiedCharacters,
  isNotUndefined
} from "@yamato-daiwa/es-extensions";


export class JapanesePhoneNumberInputtedValueValidationRule implements InputtedValueValidation.Rule<string> {

  public static localization: JapanesePhoneNumberInputtedValueValidationRule.Localization =
      JapanesePhoneNumberInputtedValueValidationRuleLocalization__Japanese;

  public readonly mustFinishValidationIfValueIsInvalid: boolean;

  private readonly regularExpression__noNDashesRespected: RegExp;
  private readonly errorMessageBuilder: JapanesePhoneNumberInputtedValueValidationRule.ErrorMessage.Builder;


  public constructor(
    compoundParameter:
        InputtedValueValidation.Rule.ConstructorParameter &
        Readonly<{
          regularExpression__noNDashesRespected?: RegExp;
          errorMessageBuilder?: JapanesePhoneNumberInputtedValueValidationRule.ErrorMessage.Builder;
          errorMessage?: string;
        }> = {}
  ) {

    this.regularExpression__noNDashesRespected =
        compoundParameter.regularExpression__noNDashesRespected ??
        JAPANESE_PHONE_NUMBER_VALID_PATTERN__NO_N_DASHES_ALLOWED;

    this.mustFinishValidationIfValueIsInvalid = compoundParameter.mustFinishValidationIfValueIsInvalid ?? false;

    if (isNotUndefined(compoundParameter.errorMessageBuilder)) {
      this.errorMessageBuilder = compoundParameter.errorMessageBuilder;
    } else if (isNotUndefined(compoundParameter.errorMessage)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
       * It was proved that "errorMessage" is non-undefined, and it will not change. */
      this.errorMessageBuilder = (): string => compoundParameter.errorMessage as string;
    } else {
      this.errorMessageBuilder = JapanesePhoneNumberInputtedValueValidationRule.localization.errorMessageBuilder;
    }

  }

  public check(rawValue: string): InputtedValueValidation.Rule.CheckingResult {
    return this.regularExpression__noNDashesRespected.test(removeAllSpecifiedCharacters(rawValue, "-")) ?
        { isValid: true } :
        {
          isValid: false,
          errorMessage: this.errorMessageBuilder({ rawValue })
        };
  }

}


export namespace JapanesePhoneNumberInputtedValueValidationRule {

  export type Localization = Readonly<{ errorMessageBuilder: ErrorMessage.Builder; }>;

  export namespace ErrorMessage {

    export type Builder = (templateVariables: TemplateVariables) => string;

    export type TemplateVariables = Readonly<{
      rawValue: string;
    }>;

  }

}
