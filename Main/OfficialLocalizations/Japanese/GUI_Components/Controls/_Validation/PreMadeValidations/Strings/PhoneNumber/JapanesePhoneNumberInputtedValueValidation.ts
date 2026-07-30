import { MINIMAL_DIGITS_COUNT_IN_JAPANESE_PHONE_NUMBER } from "fundamental-constants-japan";

import {
  InputtedValueValidation,
  MinimalCharactersCountInputtedValueValidationRule,
  AllowedCharactersInputtedValueValidationRule
} from "@yamato-daiwa/frontend";

import { JapanesePhoneNumberInputtedValueValidationRule } from
    "../../../PreMadeRules/Strings/JapanesePhoneNumberInputtedValueValidationRule";
import { JapanesePhoneNumberInputtedValueValidationLocalization__Japanese } from
    "./JapanesePhoneNumberInputtedValueValidationLocalization.japanese";

import { isString } from "@yamato-daiwa/es-extensions";


export class JapanesePhoneNumberInputtedValueValidation<
  EmptyValue extends JapanesePhoneNumberInputtedValueValidation.SupportedEmptyValues
>
    extends InputtedValueValidation<string, EmptyValue>
{

  public static localization: JapanesePhoneNumberInputtedValueValidation.Localization =
      JapanesePhoneNumberInputtedValueValidationLocalization__Japanese;

  /* [ Approach ] Although YDF library can suggest the minimal characters count for the email address,
  *    in the applications with good architecture this value must be taken from the business rules and
  *    passed via constructor. */
  public readonly MINIMAL_CHARACTERS_COUNT: number;

  public constructor(
    {
      minimalCharactersCount,
      isInputRequired,
      localization,
      contextDependentRules,
      asynchronousRules,
      asynchronousValidationsCallback,
      ...compoundParameter
    }: JapanesePhoneNumberInputtedValueValidation.ConstructorParameter<EmptyValue>
  ) {

    const MINIMAL_CHARACTERS_COUNT: number = minimalCharactersCount ?? MINIMAL_DIGITS_COUNT_IN_JAPANESE_PHONE_NUMBER;

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
          (localization ?? JapanesePhoneNumberInputtedValueValidation.localization).
              requiredInputIsMissingValidationErrorMessage,

      staticRules: [

        new AllowedCharactersInputtedValueValidationRule({
          allowedCharacters: {
            digits: true,
            latinLowercase: false,
            latinUppercase: false,
            other: [ "-" ]
          },
          errorMessageBuilder:
              (localization ?? JapanesePhoneNumberInputtedValueValidation.localization).
                  disallowedCharactersFoundErrorMessageBuilder
        }),

        new MinimalCharactersCountInputtedValueValidationRule({
          minimalCharactersCount: MINIMAL_CHARACTERS_COUNT,
          errorMessageBuilder:
              (localization ?? JapanesePhoneNumberInputtedValueValidation.localization).
                  minimalCharactersCountValidationErrorMessageBuilder,
          mustFinishValidationIfValueIsInvalid: true
        }),

        new JapanesePhoneNumberInputtedValueValidationRule({
          regularExpression__noNDashesRespected: compoundParameter.regularExpression__noNDashesRespected,
          errorMessageBuilder:
              (localization ?? JapanesePhoneNumberInputtedValueValidation.localization).
                  invalidPhoneNumberErrorMessageBuilder
        })

      ],

      contextDependentRules,

      asynchronousRules,

      asynchronousValidationsCallback

    });

    this.MINIMAL_CHARACTERS_COUNT = MINIMAL_CHARACTERS_COUNT;

  }

}


export namespace JapanesePhoneNumberInputtedValueValidation {

  export type SupportedEmptyValues = string | null | undefined;

  export type ConstructorParameter<EmptyValueType extends SupportedEmptyValues> =
      ConstructorParameter.EmptyValueIsString |
      ConstructorParameter.EmptyValueIsNonString<EmptyValueType>;

  export namespace ConstructorParameter {

    export type EmptyValueIsString =

        Readonly<{
          isInputRequired: boolean | InputtedValueValidation.InputRequirementChecker;
          minimalCharactersCount?: number;
          regularExpression__noNDashesRespected?: RegExp;
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
        disallowedCharactersFoundErrorMessageBuilder:
            AllowedCharactersInputtedValueValidationRule.ErrorMessage.Builder;
        invalidPhoneNumberErrorMessageBuilder:
            JapanesePhoneNumberInputtedValueValidationRule.ErrorMessage.Builder;
        minimalCharactersCountValidationErrorMessageBuilder:
            MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.Builder;
      }>;

}
