import {
  MINIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS,
  MAXIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS
} from "fundamental-constants";

import InputtedValueValidation from "../../../InputtedValueValidation";

import EmailAddressInputtedValueValidationRule from
    "../../../PreMadeRules/Strings/EmailAddressInputtedValueValidationRule";
import MinimalCharactersCountInputtedValueValidationRule from
    "../../../PreMadeRules/Strings/MinimalCharactersCountInputtedValueValidationRule";
import MaximalCharactersCountInputtedValueValidationRule from
    "../../../PreMadeRules/Strings/MaximalCharactersCountInputtedValueValidationRule";

import { isEmptyString } from "@yamato-daiwa/es-extensions";


class EmailAddressInputtedValueValidation extends InputtedValueValidation {

  public static localization: EmailAddressInputtedValueValidation.Localization;

  /* [ Approach ] Although YDF library can suggest the minimal and maximal characters count for the email address,
  *    in the applications with good architecture this value must be taken from the business rules and
  *    passed via constructor. */
  public readonly MINIMAL_CHARACTERS_COUNT: number;
  public readonly MAXIMAL_CHARACTERS_COUNT: number;


  public constructor(
    compoundParameter:
        Readonly<{
          isInputRequired: boolean;
          minimalCharactersCount?: number;
          maximalCharactersCount?: number;
          regularExpression?: RegExp;
          localization?: EmailAddressInputtedValueValidation.Localization;
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
        MINIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS;

    const MAXIMAL_CHARACTERS_COUNT: number =
        compoundParameter.maximalCharactersCount ??
          MAXIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS;

    super({
      isInputRequired: compoundParameter.isInputRequired,
      omittedValueChecker: isEmptyString,
      requiredInputIsMissingValidationErrorMessage:
          compoundParameter.localization?.requiredInputIsMissingValidationErrorMessage ??
          EmailAddressInputtedValueValidation.localization.requiredInputIsMissingValidationErrorMessage,
      staticRules: [
        new MinimalCharactersCountInputtedValueValidationRule({
          minimalCharactersCount: MINIMAL_CHARACTERS_COUNT,
          errorMessageBuilder: (compoundParameter.localization ?? EmailAddressInputtedValueValidation.localization).
              minimalCharactersCountValidationErrorMessageBuilder
        }),
        new EmailAddressInputtedValueValidationRule({
          regularExpression: compoundParameter.regularExpression,
          errorMessageBuilder: (compoundParameter.localization ?? EmailAddressInputtedValueValidation.localization).
              invalidEmailAddressErrorMessageBuilder,
          mustFinishValidationIfValueIsInvalid: true
        }),
        new MaximalCharactersCountInputtedValueValidationRule({
          maximalCharactersCount: MAXIMAL_CHARACTERS_COUNT,
          errorMessageBuilder: (compoundParameter.localization ?? EmailAddressInputtedValueValidation.localization).
              maximalCharactersCountValidationErrorMessageBuilder
        })
      ],
      contextDependentRules: compoundParameter.contextDependentRules,
      asynchronousRules: compoundParameter.asynchronousRules,
      asynchronousValidationsCallback: compoundParameter.asynchronousValidationsCallback
    });

    this.MINIMAL_CHARACTERS_COUNT = MINIMAL_CHARACTERS_COUNT;
    this.MAXIMAL_CHARACTERS_COUNT = MAXIMAL_CHARACTERS_COUNT;

  }

}


namespace EmailAddressInputtedValueValidation {

  export type Localization =
      InputtedValueValidation.Localization &
      Readonly<{
        minimalCharactersCountValidationErrorMessageBuilder:
            MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.Builder;
        maximalCharactersCountValidationErrorMessageBuilder:
            MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.Builder;
        invalidEmailAddressErrorMessageBuilder:
            EmailAddressInputtedValueValidationRule.ErrorMessage.Builder;
      }>;

}


export default EmailAddressInputtedValueValidation;
