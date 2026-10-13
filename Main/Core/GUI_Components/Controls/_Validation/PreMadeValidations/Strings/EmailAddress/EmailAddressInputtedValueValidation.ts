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

import { isString } from "@yamato-daiwa/es-extensions";


class EmailAddressInputtedValueValidation<EmptyValue extends EmailAddressInputtedValueValidation.SupportedEmptyValues = string>
    extends InputtedValueValidation<string, EmptyValue>
{

  public static localization: EmailAddressInputtedValueValidation.Localization;

  /* [ Approach ] Although YDF library can suggest the minimal and maximal characters count for the email address,
   *    in the applications with good architecture this value must be taken from the business rules and
   *    passed via constructor. */
  public readonly MINIMAL_CHARACTERS_COUNT: number;
  public readonly MAXIMAL_CHARACTERS_COUNT: number;


  public constructor(
    {
      minimalCharactersCount,
      maximalCharactersCount,
      isInputRequired,
      localization,
      regularExpression,
      contextDependentRules,
      asynchronousRules,
      asynchronousValidationsCallback,
      ...compoundParameter
    }: EmailAddressInputtedValueValidation.ConstructorParameter<EmptyValue>
  ) {

    const MINIMAL_CHARACTERS_COUNT: number = minimalCharactersCount ?? MINIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS;
    const MAXIMAL_CHARACTERS_COUNT: number = maximalCharactersCount ?? MAXIMAL_CHARACTERS_COUNT_OF_EMAIL_ADDRESS;

    super({

      isValueOfSupportedType:
          "isValueOfSupportedType" in compoundParameter ?
              compoundParameter.isValueOfSupportedType :
              isString,

      hasValueBeenOmitted:
          "hasValueBeenOmitted" in compoundParameter ?
              compoundParameter.hasValueBeenOmitted :
              /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
              * It is unlikely that overloading functionality in TypeScript allows expressing: "When `omittedValueChecker`
              *   is specified, the return type will the `EmailAddressInputtedValueValidation<EmptyValue>`, otherwise
              *   it will be `EmailAddressInputtedValueValidation<string>`", so maybe have no choice except casting. */
              (
                (supportedButPossiblyEmptyValue: string): supportedButPossiblyEmptyValue is string =>
                    supportedButPossiblyEmptyValue.length === 0
              ) as InputtedValueValidation.OmittedValueChecker<string, EmptyValue>,

      isInputRequired,

      requiredInputIsMissingValidationErrorMessage:
          (localization ?? EmailAddressInputtedValueValidation.localization).requiredInputIsMissingValidationErrorMessage,

      staticRules: [

        new MinimalCharactersCountInputtedValueValidationRule({
          minimalCharactersCount: MINIMAL_CHARACTERS_COUNT,
          errorMessageBuilder:
              (localization ?? EmailAddressInputtedValueValidation.localization).
                  minimalCharactersCountValidationErrorMessageBuilder,
          mustFinishValidationIfValueIsInvalid: true
        }),

        new EmailAddressInputtedValueValidationRule({
          regularExpression,
          errorMessageBuilder:
              (localization ?? EmailAddressInputtedValueValidation.localization).
                  invalidEmailAddressErrorMessageBuilder,
          mustFinishValidationIfValueIsInvalid: true
        }),

        new MaximalCharactersCountInputtedValueValidationRule({
          maximalCharactersCount: MAXIMAL_CHARACTERS_COUNT,
          errorMessageBuilder:
              (localization ?? EmailAddressInputtedValueValidation.localization).
                  maximalCharactersCountValidationErrorMessageBuilder
        })

      ],

      contextDependentRules,

      asynchronousRules,

      asynchronousValidationsCallback

    });

    this.MINIMAL_CHARACTERS_COUNT = MINIMAL_CHARACTERS_COUNT;
    this.MAXIMAL_CHARACTERS_COUNT = MAXIMAL_CHARACTERS_COUNT;

  }

}


namespace EmailAddressInputtedValueValidation {

  export type SupportedEmptyValues = string | null | undefined;

  export type ConstructorParameter<EmptyValueType extends SupportedEmptyValues> =
      ConstructorParameter.EmptyValueIsString |
      ConstructorParameter.EmptyValueIsNonString<EmptyValueType>;

  export namespace ConstructorParameter {

    export type EmptyValueIsString =

        Readonly<{
          isInputRequired: boolean | InputtedValueValidation.InputRequirementChecker;
          minimalCharactersCount?: number;
          maximalCharactersCount?: number;
          regularExpression?: RegExp;
          localization?: Localization;
        }> &

        Pick<
          InputtedValueValidation.ConstructorCompoundParameter<string>,
          "contextDependentRules" |
          "asynchronousRules" |
          "asynchronousValidationsCallback"
        >;

    export type EmptyValueIsNonString<EmptyValueType extends SupportedEmptyValues> =

        EmptyValueIsString &

        Readonly<{
          isValueOfSupportedType: InputtedValueValidation.SupportedValueChecker<string, EmptyValueType>;
          hasValueBeenOmitted: InputtedValueValidation.OmittedValueChecker<string, EmptyValueType>;
        }>;

  }

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
