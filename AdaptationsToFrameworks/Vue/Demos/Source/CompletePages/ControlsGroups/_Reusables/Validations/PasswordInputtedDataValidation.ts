import {
  InputtedValueValidation,
  MinimalCharactersCountInputtedValueValidationRule,
  MaximalCharactersCountInputtedValueValidationRule,
  AllowedCharactersInputtedValueValidationRule,
  isStringEmpty
} from "@yamato-daiwa/frontend";
import { isString } from "@yamato-daiwa/es-extensions";


export default class PasswordInputtedDataValidation extends InputtedValueValidation<string> {

  private static readonly REQUIRED_VALUE_IS_MISSING_DEFAULT_VALIDATION_ERROR_MESSAGE: string =
      "The password is missing. Please input the password.";


  private static readonly MINIMAL_CHARACTERS_COUNT: number = 6;
  private static readonly MAXIMAL_CHARACTERS_COUNT: number = 32;


  public constructor(
    {
      isInputRequired,
      requiredValueIsMissingCustomValidationErrorMessage
    }: Readonly<{
      isInputRequired: boolean;
      requiredValueIsMissingCustomValidationErrorMessage?: string;
    }>
  ) {

    super({
      isInputRequired,
      isValueOfSupportedType: isString,
      hasValueBeenOmitted: isStringEmpty,
      requiredInputIsMissingValidationErrorMessage:
          requiredValueIsMissingCustomValidationErrorMessage ??
          PasswordInputtedDataValidation.REQUIRED_VALUE_IS_MISSING_DEFAULT_VALIDATION_ERROR_MESSAGE,
      staticRules: [
        new MinimalCharactersCountInputtedValueValidationRule({
          minimalCharactersCount: PasswordInputtedDataValidation.MINIMAL_CHARACTERS_COUNT
        }),
        new MaximalCharactersCountInputtedValueValidationRule({
          maximalCharactersCount: PasswordInputtedDataValidation.MAXIMAL_CHARACTERS_COUNT
        }),
        new AllowedCharactersInputtedValueValidationRule({
          allowedCharacters: {
            latinLowercase: true,
            latinUppercase: true,
            digits: true,
            other: [ "!", "#", "$", "%", "&", "(", ")", "=", "-", "~", "^", "|", "{", "}", "[", "]", "+", ";", ":", "*" ]
          }
        })
      ]
    });

  }

}
