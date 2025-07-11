import InputtedValueValidation from "../../../InputtedValueValidation";

import MinimalCharactersCountInputtedValueValidationRule from
    "../../../PreMadeRules/Strings/MinimalCharactersCountInputtedValueValidationRule";
import MaximalCharactersCountInputtedValueValidationRule from
    "../../../PreMadeRules/Strings/MaximalCharactersCountInputtedValueValidationRule";
import AllowedCharactersInputtedValueValidationRule from
    "../../../PreMadeRules/Strings/AllowedCharactersInputtedValueValidationRule";

import { isString } from "@yamato-daiwa/es-extensions";


abstract class PasswordInputtedValueValidation<EmptyValue extends PasswordInputtedValueValidation.SupportedEmptyValues = string>
    extends InputtedValueValidation<string, EmptyValue>
/* eslint-disable-next-line @stylistic/brace-style -- Allow Allman style for square areas principle. */
{

  public static localization: PasswordInputtedValueValidation.Localization;

  public readonly MINIMAL_CHARACTERS_COUNT: number;
  public readonly MAXIMAL_CHARACTERS_COUNT: number;


  protected constructor(
    {
      minimalCharactersCount,
      maximalCharactersCount,
      isInputRequired,
      localization,
      allowedNonWordCharacters,
      contextDependentRules,
      asynchronousRules,
      asynchronousValidationsCallback,
      ...compoundParameter
    }: PasswordInputtedValueValidation.ConstructorParameter<EmptyValue>
  ) {

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
              *   is specified, the return type will the `PasswordInputtedValueValidation<EmptyValue>`, otherwise
              *   it will be `PasswordInputtedValueValidation<string>`", so maybe have no choice except casting. */
              (
                (supportedButPossiblyEmptyValue: string): supportedButPossiblyEmptyValue is string =>
                    supportedButPossiblyEmptyValue.length === 0
              ) as InputtedValueValidation.OmittedValueChecker<string, EmptyValue>,

      isInputRequired,

      requiredInputIsMissingValidationErrorMessage:
          (localization ?? PasswordInputtedValueValidation.localization).requiredInputIsMissingValidationErrorMessage,

      staticRules: [

        new AllowedCharactersInputtedValueValidationRule({
          allowedCharacters: {
            latinLowercase: true,
            latinUppercase: true,
            digits: true,
            other: allowedNonWordCharacters
          },
          errorMessageBuilder:
              (localization ?? PasswordInputtedValueValidation.localization).allowedCharactersValidationErrorMessageBuilder
        }),

        new MinimalCharactersCountInputtedValueValidationRule({
          minimalCharactersCount,
          errorMessageBuilder:
              (localization ?? PasswordInputtedValueValidation.localization).
                  minimalCharactersCountValidationErrorMessageBuilder,
          mustFinishValidationIfValueIsInvalid: true
        }),

        new MaximalCharactersCountInputtedValueValidationRule({
          maximalCharactersCount,
          errorMessageBuilder:
              (localization ?? PasswordInputtedValueValidation.localization).
                  maximalCharactersCountValidationErrorMessageBuilder
        })

      ],

      contextDependentRules,

      asynchronousRules,

      asynchronousValidationsCallback

    });

    this.MINIMAL_CHARACTERS_COUNT = minimalCharactersCount;
    this.MAXIMAL_CHARACTERS_COUNT = maximalCharactersCount;

  }

}


namespace PasswordInputtedValueValidation {

  export type SupportedEmptyValues = string | null | undefined;

  export type ConstructorParameter<EmptyValueType extends SupportedEmptyValues> =
      ConstructorParameter.EmptyValueIsString |
      ConstructorParameter.EmptyValueIsNonString<EmptyValueType>;

  export namespace ConstructorParameter {

    export type EmptyValueIsString =

        Readonly<{
          isInputRequired: boolean;
          minimalCharactersCount: number;
          maximalCharactersCount: number;
          allowedNonWordCharacters: ReadonlyArray<string>;
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
        allowedCharactersValidationErrorMessageBuilder:
            AllowedCharactersInputtedValueValidationRule.ErrorMessage.Builder;
        minimalCharactersCountValidationErrorMessageBuilder:
            MinimalCharactersCountInputtedValueValidationRule.ErrorMessage.Builder;
        maximalCharactersCountValidationErrorMessageBuilder:
            MaximalCharactersCountInputtedValueValidationRule.ErrorMessage.Builder;
      }>;

}


export default PasswordInputtedValueValidation;
