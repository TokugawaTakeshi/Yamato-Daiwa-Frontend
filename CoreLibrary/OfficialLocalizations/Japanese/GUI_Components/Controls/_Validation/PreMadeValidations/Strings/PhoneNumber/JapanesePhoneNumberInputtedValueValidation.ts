import {
  InputtedValueValidation,
  MinimalCharactersCountInputtedValueValidationRule,
  AllowedCharactersInputtedValueValidationRule
} from "@yamato-daiwa/frontend";
import { MINIMAL_DIGITS_COUNT_IN_JAPANESE_PHONE_NUMBER } from "fundamental-constants-japan";
import JapanesePhoneNumberInputtedValueValidationRule from
    "../../../PreMadeRules/Strings/JapanesePhoneNumberInputtedValueValidationRule";

import japanesePhoneNumberInputtedValueValidationLocalization__japanese from
    "./JapanesePhoneNumberInputtedValueValidationLocalization.japanese";

import { isEmptyString } from "@yamato-daiwa/es-extensions";


class JapanesePhoneNumberInputtedValueValidation extends InputtedValueValidation {

  public static localization: JapanesePhoneNumberInputtedValueValidation.Localization =
      japanesePhoneNumberInputtedValueValidationLocalization__japanese;

  /* [ Approach ] Although YDF library can suggest the minimal characters count for the email address,
  *    in the applications with good architecture this value must be taken from the business rules and
  *    passed via constructor. */
  public readonly MINIMAL_CHARACTERS_COUNT: number;

  public constructor(
    compoundParameter:
        Readonly<{
          isInputRequired: boolean;
          minimalCharactersCount?: number;
          regularExpression__noNDashesRespected?: RegExp;
        }> &
        Pick<
          InputtedValueValidation.ConstructorCompoundParameter,
          "contextDependentRules" |
          "asynchronousRules" |
          "asynchronousValidationsCallback"
        >
  ) {

    const MINIMAL_CHARACTERS_COUNT: number =
        compoundParameter.minimalCharactersCount ??
        MINIMAL_DIGITS_COUNT_IN_JAPANESE_PHONE_NUMBER;

    super({
      isInputRequired: compoundParameter.isInputRequired,
      omittedValueChecker: isEmptyString,
      requiredInputIsMissingValidationErrorMessage: JapanesePhoneNumberInputtedValueValidation.localization.
          requiredInputIsMissingValidationErrorMessage,
      staticRules: [
        new AllowedCharactersInputtedValueValidationRule({
          allowedCharacters: {
            digits: true,
            latinLowercase: false,
            latinUppercase: false,
            other: [ "-" ]
          },
          errorMessageBuilder: JapanesePhoneNumberInputtedValueValidation.localization.
              disallowedCharactersFoundErrorMessageBuilder
        }),
        new MinimalCharactersCountInputtedValueValidationRule({
          minimalCharactersCount: MINIMAL_CHARACTERS_COUNT,
          errorMessageBuilder: JapanesePhoneNumberInputtedValueValidation.localization.
              minimalCharactersCountValidationErrorMessageBuilder,
          mustFinishValidationIfValueIsInvalid: true
        }),
        new JapanesePhoneNumberInputtedValueValidationRule({
          regularExpression__noNDashesRespected: compoundParameter.regularExpression__noNDashesRespected,
          errorMessageBuilder: JapanesePhoneNumberInputtedValueValidation.localization.
              invalidPhoneNumberErrorMessageBuilder
        })
      ],
      contextDependentRules: compoundParameter.contextDependentRules,
      asynchronousRules: compoundParameter.asynchronousRules,
      asynchronousValidationsCallback: compoundParameter.asynchronousValidationsCallback
    });

    this.MINIMAL_CHARACTERS_COUNT = MINIMAL_CHARACTERS_COUNT;

  }

}


namespace JapanesePhoneNumberInputtedValueValidation {

  export type Localization =
      InputtedValueValidation.Localization &
      Readonly<{
        disallowedCharactersFoundErrorMessageBuilder:
            AllowedCharactersInputtedValueValidationRule.ErrorMessage.Builder;
        invalidPhoneNumberErrorMessageBuilder:
            JapanesePhoneNumberInputtedValueValidationRule.ErrorMessage.Builder;
        minimalCharactersCountValidationErrorMessageBuilder:
            MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.Builder;
      }>;

}


export default JapanesePhoneNumberInputtedValueValidation;
