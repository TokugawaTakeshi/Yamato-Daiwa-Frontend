/* eslint-disable max-classes-per-file --
* This limitation is unsolicited for the namespaced classes, however, there is no ESLint option allowing this case. */
import { InvalidParameterValueError, isBoolean, Logger } from "@yamato-daiwa/es-extensions";

import inputtedValueValidationLocalization__english from "./InputtedValueValidationLocalization.english";


abstract class InputtedValueValidation<NonEmptyValueType, EmptyValueType = NonEmptyValueType> {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: InputtedValueValidation.Localization = inputtedValueValidationLocalization__english;


  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Instance ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public readonly isValueOfSupportedType:
      InputtedValueValidation.SupportedValueChecker<NonEmptyValueType, EmptyValueType>;

  public readonly hasValueBeenOmitted:
      InputtedValueValidation.OmittedValueChecker<NonEmptyValueType, EmptyValueType>;

  public readonly isInputRequired: InputtedValueValidation.InputRequirementChecker;

  protected readonly requiredInputIsMissingValidationErrorMessage: string;
  protected readonly staticRules: ReadonlyArray<InputtedValueValidation.Rule<NonEmptyValueType>>;
  protected readonly contextDependentRules: ReadonlyArray<InputtedValueValidation.Rule<NonEmptyValueType>>;
  protected readonly asynchronousRules: ReadonlyArray<InputtedValueValidation.AsynchronousRule<NonEmptyValueType>>;


  /* ━━━ Constructor━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected constructor(
    {
      isValueOfSupportedType,
      hasValueBeenOmitted,
      isInputRequired,
      requiredInputIsMissingValidationErrorMessage,
      localization,
      staticRules,
      contextDependentRules,
      asynchronousRules
    }: InputtedValueValidation.ConstructorCompoundParameter<NonEmptyValueType, EmptyValueType>
  ) {

    this.isValueOfSupportedType = isValueOfSupportedType;
    this.hasValueBeenOmitted = hasValueBeenOmitted;
    this.isInputRequired = isBoolean(isInputRequired) ? (): boolean => isInputRequired : isInputRequired;

    this.requiredInputIsMissingValidationErrorMessage =
        requiredInputIsMissingValidationErrorMessage ??
        localization?.requiredInputIsMissingValidationErrorMessage ??
        InputtedValueValidation.localization.requiredInputIsMissingValidationErrorMessage;

    this.staticRules = staticRules ?? [];
    this.contextDependentRules = contextDependentRules ?? [];
    this.asynchronousRules = asynchronousRules ?? [];

  }


  public validate(
    rawValue: unknown,
    {
      mustPostponeAsynchronousValidation = false,
      asynchronousChecksCallback,
      messagesOfExternallyDetectedValidationErrors = []
    }: Readonly<{
      mustPostponeAsynchronousValidation?: boolean;
      asynchronousChecksCallback?: InputtedValueValidation.AsynchronousChecks.Callback;
      messagesOfExternallyDetectedValidationErrors?: ReadonlyArray<string>;
    }> = {}
  ): InputtedValueValidation.Result {

    if (!this.isValueOfSupportedType(rawValue)) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "rawValue",
          messageSpecificPart: "The type of `rawValue` is incompatible with specified validators."
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "inputtedValueValidation.validate(rawValue, options)",
        additionalData: {
          rawValue,
          nativeTypeOfRawValue: typeof rawValue
        }
      });
    }


    if (this.hasValueBeenOmitted(rawValue)) {

      return this.isInputRequired() ?
          {
            isValid: false,
            errorsMessages: [ this.requiredInputIsMissingValidationErrorMessage ]
          } :
          { isValid: true };

    }


    const validationErrorsMessages: Array<string> = [ ...messagesOfExternallyDetectedValidationErrors ];

    for (const staticValidationRule of this.staticRules) {

      const checkingResult: InputtedValueValidation.Rule.CheckingResult = staticValidationRule.check(rawValue);

      if (!checkingResult.isValid) {

        validationErrorsMessages.push(checkingResult.errorMessage);

        if (staticValidationRule.mustFinishValidationIfValueIsInvalid) {
          break;
        }

      }

    }

    if (validationErrorsMessages.length > 0) {
      return {
        isValid: false,
        errorsMessages: validationErrorsMessages
      };
    }


    for (const contextDependentValidationRule of this.contextDependentRules) {

      const checkingResult: InputtedValueValidation.Rule.CheckingResult = contextDependentValidationRule.check(rawValue);

      if (!checkingResult.isValid) {

        validationErrorsMessages.push(checkingResult.errorMessage);

        if (contextDependentValidationRule.mustFinishValidationIfValueIsInvalid) {
          break;
        }

      }

    }

    if (validationErrorsMessages.length > 0) {
      return {
        isValid: false,
        errorsMessages: validationErrorsMessages
      };
    }


    const validationResult: InputtedValueValidation.Result = { isValid: true };

    if (!mustPostponeAsynchronousValidation) {
      this.executeAsynchronousChecksIfAny(rawValue, validationResult, asynchronousChecksCallback);
    }


    return validationResult;

  }

  public executeAsynchronousChecksIfAny(
    rawValue: NonEmptyValueType,
    currentValidationResult: InputtedValueValidation.Result,
    asynchronousChecksCallback?: InputtedValueValidation.AsynchronousChecks.Callback
  ): void {

    if (this.asynchronousRules.length === 0) {
      return;
    }


    const asynchronousChecks: InputtedValueValidation.AsynchronousChecks = this.asynchronousRules.reduce(
      (
        accumulatingValue: InputtedValueValidation.AsynchronousChecks,
        asynchronousValidationRule: InputtedValueValidation.AsynchronousRule<NonEmptyValueType>
      ): InputtedValueValidation.AsynchronousChecks => {

        accumulatingValue[asynchronousValidationRule.ID] = {
          message: asynchronousValidationRule.messages.checkingInProgress,
          isPending: true,
          hasInvalidValueBeenConfirmed: false,
          hasValidValueBeenConfirmed: false,
          hasErrorOccurred: false
        };

        return accumulatingValue;

      },
      {}
    );

    asynchronousChecksCallback?.(
      new InputtedValueValidation.AsynchronousChecks.Status(asynchronousChecks),
      currentValidationResult
    );

    for (const validationRule of this.asynchronousRules) {

      validationRule.

          check(rawValue).

          then((checkingResult: InputtedValueValidation.AsynchronousRule.CheckingResult): void => {

						asynchronousChecks[validationRule.ID] = {
							isPending: false,
							hasValidValueBeenConfirmed: checkingResult.isValid,
							hasInvalidValueBeenConfirmed: !checkingResult.isValid,
							hasErrorOccurred: false,
							message: checkingResult.isValid ?
									validationRule.messages.validValueHasBeenConfirmed :
									checkingResult.errorMessage ?? validationRule.messages.invalidValueHasBeenConfirmed
						};

            const asynchronousCheckStatus: InputtedValueValidation.AsynchronousChecks.Status =
                new InputtedValueValidation.AsynchronousChecks.Status(asynchronousChecks);

            const errorsMessages: ReadonlyArray<string> = [
              ...currentValidationResult.isValid ? [] : currentValidationResult.errorsMessages,
              ...asynchronousCheckStatus.errorsMessages
            ];

						asynchronousChecksCallback?.(
              asynchronousCheckStatus,
              {
                isValid: errorsMessages.length === 0,
                errorsMessages
              }
            );

					}).

          catch((error: unknown): void => {

            Logger.logError({
              errorType: "AsynchronousValidationFailedError",
              title: "Asynchronous Validation Failed",
              description: `The asynchronous validation ${ validationRule.ID } has failed.`,
              occurrenceLocation: "inputtedValueValidation." +
                  "executeAsynchronousChecksIfAny(rawValue, currentValidationResult, asynchronousChecksCallback)",
              caughtError: error
            });

            asynchronousChecks[validationRule.ID] = {
              isPending: false,
              hasValidValueBeenConfirmed: false,
              hasInvalidValueBeenConfirmed: false,
              hasErrorOccurred: true,
              message: validationRule.messages.errorHasOccurred
            };

            asynchronousChecksCallback?.(
              new InputtedValueValidation.AsynchronousChecks.Status(asynchronousChecks),
              currentValidationResult
            );

          });

    }

  }

}


namespace InputtedValueValidation {

  export type Result = Readonly<
    {
      isValid: true;
    } |
    {
      isValid: false;
      errorsMessages: ReadonlyArray<string>;
    }
  >;


  /* ━━━ Rules ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export interface Rule<NonEmptyValueType> {

    readonly mustFinishValidationIfValueIsInvalid: boolean;

    readonly check: (rawValue: NonEmptyValueType) => Rule.CheckingResult;

  }

  export namespace Rule {

    export type CheckingResult = Readonly<
      {
        isValid: true;
      } |
      {
        isValid: false;
        errorMessage: string;
      }
    >;

    export type ConstructorParameter = Readonly<{
      mustFinishValidationIfValueIsInvalid?: boolean;
    }>;

  }


  /* ┅┅┅ Asynchronous ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  export interface AsynchronousRule<NonEmptyValueType> {
    readonly ID: string;
    readonly messages: AsynchronousRule.Messages;
    readonly check: (rawValue: NonEmptyValueType) => Promise<AsynchronousRule.CheckingResult>;
  }

  export namespace AsynchronousRule {

    export type Messages = Readonly<{
      checkingInProgress: string;
      validValueHasBeenConfirmed: string;
      invalidValueHasBeenConfirmed: string;
      errorHasOccurred: string;
    }>;

    export type CheckingResult = Readonly<{
      isValid: boolean;
      errorMessage?: string;
    }>;

  }


  /* ━━━ Asynchronous Checking ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export namespace AsynchronousCheck {

    export type Status = Readonly<{
      message: string;
      isPending: boolean;
      hasValidValueBeenConfirmed: boolean;
      hasInvalidValueBeenConfirmed: boolean;
      hasErrorOccurred: boolean;
    }>;

  }

  export type AsynchronousChecks = { [validationRuleName: string]: AsynchronousCheck.Status; };

  export namespace AsynchronousChecks {

    export type Callback = (status: Status, currentValidationResult: Result) => void;

    export class Status {

      public readonly checks: AsynchronousChecks;
      public readonly hasAtLeastOneCheckNotFinishedYet: boolean = false;
      public readonly hasAllChecksFinishedWithAnyOutcome: boolean = true;
      public readonly hasAtLeastOneCheckErrorOccurred: boolean = false;
      public readonly hasNoInvalidValuesBeenConfirmed: boolean = true;
      public readonly hasAtLeastOneInvalidValueBeenConfirmed: boolean = false;
      public readonly errorsMessages: Array<string> = [];

      public constructor(checks: AsynchronousChecks) {

        this.checks = checks;

        for (const checking of Object.values(checks)) {

          if (checking.isPending) {
            this.hasAtLeastOneCheckNotFinishedYet = true;
            this.hasAllChecksFinishedWithAnyOutcome = false;
          }

          if (checking.hasErrorOccurred) {
            this.hasAtLeastOneCheckErrorOccurred = true;
          }

          if (checking.hasInvalidValueBeenConfirmed) {
            this.hasNoInvalidValuesBeenConfirmed = false;
            this.hasAtLeastOneInvalidValueBeenConfirmed = true;
            this.errorsMessages.push(checking.message);
          }

        }

      }

    }

  }


  /* ━━━ Constructor Parameter ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type ConstructorCompoundParameter<NonEmptyValueType, EmptyValueType = NonEmptyValueType> =
      Readonly<{
        isValueOfSupportedType: SupportedValueChecker<NonEmptyValueType, EmptyValueType>;
        hasValueBeenOmitted: OmittedValueChecker<NonEmptyValueType, EmptyValueType>;
        isInputRequired: boolean | InputRequirementChecker;
        requiredInputIsMissingValidationErrorMessage?: string;
        staticRules?: ReadonlyArray<Rule<NonEmptyValueType>>;
        contextDependentRules?: ReadonlyArray<Rule<NonEmptyValueType>>;
        asynchronousRules?: ReadonlyArray<AsynchronousRule<NonEmptyValueType>>;
        asynchronousValidationsCallback?: AsynchronousChecks.Callback;
        localization?: Localization;
      }>;


  /* ━━━ Worktypes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type SupportedValueChecker<NonEmptyValueType, EmptyValue = NonEmptyValueType> =
      (rawValue: unknown) => rawValue is NonEmptyValueType | EmptyValue;

  export type OmittedValueChecker<NonEmptyValueType, EmptyValue = NonEmptyValueType> =
      (supportedButPossiblyEmptyValue: NonEmptyValueType | EmptyValue) => supportedButPossiblyEmptyValue is EmptyValue;

  export type InputRequirementChecker = () => boolean;


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  export type Localization = Readonly<{
    requiredInputIsMissingValidationErrorMessage: string;
  }>;

}


export default InputtedValueValidation;
