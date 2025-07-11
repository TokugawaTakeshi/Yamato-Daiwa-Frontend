import { InputtedValueValidation, EmailAddressInputtedValueValidationRule } from "@yamato-daiwa/frontend";
import { EmailAddress, isEmptyString } from "@yamato-daiwa/es-extensions";


export default class EmailInputtedDataValidation extends InputtedValueValidation {

  private static readonly REQUIRED_VALUE_IS_MISSING_DEFAULT_VALIDATION_ERROR_MESSAGE: string =
      "Email is missing. Please input the email address.";

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
      omittedValueChecker: isEmptyString,
      requiredInputIsMissingValidationErrorMessage:
          requiredValueIsMissingCustomValidationErrorMessage ??
          EmailInputtedDataValidation.REQUIRED_VALUE_IS_MISSING_DEFAULT_VALIDATION_ERROR_MESSAGE,
      staticRules: [
        new EmailAddressInputtedValueValidationRule({
          regularExpression: EmailAddress.VALID_PATTERN
        })
      ]
    });

  }

}
