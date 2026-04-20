/* eslint-disable no-underscore-dangle --
 * There are eponymous protected fields and public accessors in the "ValidatableControlsGroup" class. */

import type ValidatableControl from "./ValidatableControl";
import type InputtedValueValidation from "./InputtedValueValidation";

import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";
import { isNotUndefined, Logger, UnexpectedEventError } from "@yamato-daiwa/es-extensions";
import type { ArbitraryObject } from "@yamato-daiwa/es-extensions";


class ValidatableControlsGroup<
  ControlsPayload extends ValidatableControlsGroup.GeneralizedControlsPayload,
  InputtedValidValues extends { [controlPayloadID: string]: unknown; },
  ValidData extends ArbitraryObject = InputtedValidValues
> {

  protected static counterForID_Generating: number = -1;


  public readonly ID: string;


  protected readonly controlsPayload: ControlsPayload;
  protected readonly validDataConstructor: (inputtedValidValues: InputtedValidValues) => ValidData;
  protected readonly isEachControlPayloadValid: { [controlPayloadID: string]: boolean; };
  protected readonly areAsynchronousChecksBeingExecutedForEachControlPayload: { [controlPayloadID: string]: boolean; };
  protected readonly scrollableContainerHTML_ID?: string;

  protected readonly onHasBecomeValidEventHandler?: ValidatableControlsGroup.GeneralizedEventHandler;
  protected readonly onHasBecomeInvalidEventHandler?: ValidatableControlsGroup.GeneralizedEventHandler;
  protected readonly onAnyChangeEventHandler?: ValidatableControlsGroup.OnAnyChangeEventHandler;
  protected readonly onAsynchronousValidationsFinishedWithAnyResultEventHandler?: () => void;

  private _isInvalid: boolean;


  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public constructor(
    compoundParameter: Readonly<{
      controlsPayload: ControlsPayload;
      validDataConstructor?: (inputtedValidValues: InputtedValidValues) => ValidData;
      scrollingContainerHTML_ID?: string;
      onHasBecomeValidEventHandler?: ValidatableControlsGroup.GeneralizedEventHandler;
      onHasBecomeInvalidEventHandler?: ValidatableControlsGroup.GeneralizedEventHandler;
      onAnyChangeEventHandler?: ValidatableControlsGroup.OnAnyChangeEventHandler;
      onAsynchronousValidationsFinishedWithAnyResultEventHandler?: () => void;
    }>
  ) {

    ValidatableControlsGroup.counterForID_Generating++;
    this.ID = `VALIDATABLE_CONTROLS_GROUP-${ ValidatableControlsGroup.counterForID_Generating }`;

    this.controlsPayload = compoundParameter.controlsPayload;
    this.validDataConstructor =
        compoundParameter.validDataConstructor ??
        /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
        * Looks like there is no way to tell TypeScript that if `validDataConstructor` is not defined, the `ValidData`
        *   will be even with `InputtedValidValues`. Tried constructor overloading.  */
        ((inputtedValidValues: InputtedValidValues): ValidData => inputtedValidValues as unknown as ValidData);

    this.onHasBecomeValidEventHandler = compoundParameter.onHasBecomeValidEventHandler;
    this.onHasBecomeInvalidEventHandler = compoundParameter.onHasBecomeInvalidEventHandler;
    this.onAnyChangeEventHandler = compoundParameter.onAnyChangeEventHandler;
    this.onAsynchronousValidationsFinishedWithAnyResultEventHandler = compoundParameter.
        onAsynchronousValidationsFinishedWithAnyResultEventHandler;

    const isEachControlPayloadValid: { [controlPayloadID: string]: boolean; } = {};
    const areAsynchronousChecksBeingExecutedForEachControlPayload: { [controlPayloadID: string]: boolean; } = {};

    for (const controlPayload of Object.values(this.controlsPayload)) {

      isEachControlPayloadValid[controlPayload.ID] = !controlPayload.isInvalid;

      controlPayload.setOnValueAnyChangeEventHandler({
        ID: `ON_VALUE_ANY_CHANGE_EVENT_HANDLER--VALIDATABLE-CONTROL_GROUP-${ this.ID }--CONTROL-${ controlPayload.ID }`,
        handler: (): void => { this.onAnyChangeOfSpecificControlEventHandler(controlPayload); }
      });

      areAsynchronousChecksBeingExecutedForEachControlPayload[controlPayload.ID] = false;

      controlPayload.setOnAsynchronousValidationStatusChangedEventHandler({
        ID: `ON_VALUE_ANY_CHANGE_EVENT_HANDLER--VALIDATABLE-CONTROL_GROUP-${ this.ID }--CONTROL-${ controlPayload.ID }`,
        handler: (asynchronousValidationStatus: InputtedValueValidation.AsynchronousChecks.Status): void => {
          this.onAsynchronousValidationStatusChangedEventHandler(controlPayload, asynchronousValidationStatus);
        }
      });

    }

    this.isEachControlPayloadValid = isEachControlPayloadValid;
    this.areAsynchronousChecksBeingExecutedForEachControlPayload = areAsynchronousChecksBeingExecutedForEachControlPayload;
    this.scrollableContainerHTML_ID = compoundParameter.scrollingContainerHTML_ID;

    this._isInvalid = this.isAtLeastOneControlPayloadInvalid();

  }


  /* ━━━ Public Instance Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public pointOutValidationErrors(): void {

    let isCurrentInvalidControlPayloadTheFirstInvalidOne: boolean = true;

    for (const validatableControlPayload of Object.values(this.controlsPayload)) {

      if (validatableControlPayload.isInvalid) {

        const componentInstance: ValidatableControl = validatableControlPayload.getComponentInstance();

        componentInstance.highlightInvalidInput();

        if (isCurrentInvalidControlPayloadTheFirstInvalidOne) {

          componentInstance.focus();

          /* eslint-disable-next-line max-depth -- Here are all conditions are required. */
          if (isNotUndefined(this.scrollableContainerHTML_ID)) {
            getExpectedToBeSingleDOM_Element({ selector: `#${ this.scrollableContainerHTML_ID }` }).scroll({
              top: componentInstance.getRootElementOffsetCoordinates().top,
              behavior: "smooth"
            });
          }

          isCurrentInvalidControlPayloadTheFirstInvalidOne = false;

        }

      }

    }

  }

  public getExpectedToBeValidInputtedValues(): InputtedValidValues {

    if (this._isInvalid) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new UnexpectedEventError("Contrary to expectations, the payload is still invalid."),
        title: UnexpectedEventError.localization.defaultTitle,
        occurrenceLocation: "validatableControlsGroup.getExpectedToBeValidInputtedValues()"
      });
    }

    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
    *  */
    return Object.entries(this.controlsPayload).reduce(
      (
        validData: ValidatableControlsGroup.PossiblyInvalidData,
        [ controlKey, controlPayload ]: [ string, ValidatableControlsGroup.GeneralizedControlPayload ]
      ): ValidatableControlsGroup.PossiblyInvalidData => {
        validData[controlKey] = controlPayload.getExpectedToBeValidValue();
        return validData;
      },
      {}
    ) as InputtedValidValues;

  }

  public getExpectedToBeValidData(): ValidData {
    return this.validDataConstructor(this.getExpectedToBeValidInputtedValues());
  }

  public getPossiblyInvalidPayload(): ValidatableControlsGroup.PossiblyInvalidData {
    return Object.entries(this.controlsPayload).reduce(
      (
        possiblyInvalidData: ValidatableControlsGroup.PossiblyInvalidData,
        [ controlKey, controlPayload ]: [ string, ValidatableControlsGroup.GeneralizedControlPayload ]
      ): ValidatableControlsGroup.PossiblyInvalidData => {
        possiblyInvalidData[controlKey] = controlPayload.value;
        return possiblyInvalidData;
      },
      {}
    );
  }


  /* ━━━ Public getters ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public get isInvalid(): boolean {
    return this._isInvalid;
  }

  public get areTherePendingAsynchronousValidation(): boolean {
    return Object.values(this.areAsynchronousChecksBeingExecutedForEachControlPayload).includes(true);
  }


  /* ━━━ Routines ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* eslint-disable @typescript-eslint/member-ordering -- No need to hoist the secondary static fields. */

  /* ─── Events handlers ─────────────────────────────────────────────────────────────────────────────────────────── */
  protected onAnyChangeOfSpecificControlEventHandler(
    controlPayload: ValidatableControlsGroup.GeneralizedControlPayload
  ): void {

    const wasGroupValidPreviously: boolean = !this._isInvalid;
    this.isEachControlPayloadValid[controlPayload.ID] = !controlPayload.isInvalid;
    this._isInvalid = this.isAtLeastOneControlPayloadInvalid();

    const hasBecomeValid: boolean = !wasGroupValidPreviously && !this._isInvalid;
    const hasBecomeInvalid: boolean = wasGroupValidPreviously && this._isInvalid;

    if (hasBecomeValid) {

      try {

        this.onHasBecomeValidEventHandler?.();

      } catch (error: unknown) {

        Logger.logError({
          errorType: "CustomEventHandlerExecutionFailure",
          title: "Custom event handler execution failure",
          description: "The error occurred during the execution of \"OnHasBecomeValid\" event handler",
          occurrenceLocation: "validatableControl.onHasBecomeValid()",
          caughtError: error
        });

      }

    } else if (hasBecomeInvalid) {

      try {

        this.onHasBecomeInvalidEventHandler?.();

      } catch (error: unknown) {

        Logger.logError({
          errorType: "CustomEventHandlerExecutionFailure",
          title: "Custom event handler execution failure",
          description: "The error occurred during the execution of \"OnHasBecomeInvalid\" event handler",
          occurrenceLocation: "validatableControl.onHasBecomeInvalid()",
          caughtError: error
        });

      }

    }

    try {

      this.onAnyChangeEventHandler?.({ hasBecomeInvalid, hasBecomeValid });

    } catch (error: unknown) {

      Logger.logError({
        errorType: "CustomEventHandlerExecutionFailure",
        title: "Custom event handler execution failure",
        description: "The error occurred during the execution of \"OnAnyChange\" event handler",
        occurrenceLocation: "validatableControl.onAnyChange()",
        caughtError: error
      });

    }

  }


  protected onAsynchronousValidationStatusChangedEventHandler(
    controlPayload: ValidatableControlsGroup.GeneralizedControlPayload,
    asynchronousValidationStatus: InputtedValueValidation.AsynchronousChecks.Status
  ): void {

    const wasAsynchronousCheckBeenExecuted: boolean = this.areTherePendingAsynchronousValidation;
    this.areAsynchronousChecksBeingExecutedForEachControlPayload[controlPayload.ID] =
        asynchronousValidationStatus.hasAtLeastOneCheckNotFinishedYet;

    if (wasAsynchronousCheckBeenExecuted && !this.areTherePendingAsynchronousValidation) {
      this.onAsynchronousValidationsFinishedWithAnyResultEventHandler?.();
    }

  }

  /* [ Approach ] This method has not been made getter because of recomputing on each invocation while here the value
   *  of "_isInvalid" is cached. */
  protected isAtLeastOneControlPayloadInvalid(): boolean {
    return Object.values(this.isEachControlPayloadValid).
        some((isCurrentControlPayloadValid: boolean): boolean => !isCurrentControlPayloadValid);
  }

  /* eslint-enable @typescript-eslint/member-ordering */

}


namespace ValidatableControlsGroup {

  export type GeneralizedControlsPayload = Readonly<{ [controlKey: string]: GeneralizedControlPayload; }>;

  export type GeneralizedControlPayload =

      /* [ Approach ]
       * Omit or generalize some properties to avoid TS2344 "NNN does not satisfy the constraint XXX" error at
       *   consuming class. */
      Omit<
        ValidatableControl.Payload<boolean, unknown>,
            "validation" |
            "setOnValueAnyChangeEventHandler" |
            "setOnHasBecomeValidEventHandler" |
            "setOnHasBecomeInvalidEventHandler" |
            "setOnAsynchronousValidationStatusChangedEventHandler"
      > &

      {

        setOnValueAnyChangeEventHandler:
            (
              polymorphicParameter:
                  ValidatableControl.Payload.GeneralizedEventHandler |
                  Readonly<{ handler: ValidatableControl.Payload.GeneralizedEventHandler; ID: string; }>
            ) => unknown;

        setOnAsynchronousValidationStatusChangedEventHandler:
            (
              polymorphicParameter:
                  ValidatableControl.Payload.OnAsynchronousValidationStatusChangedEventHandler |
                  Readonly<{
                    handler: ValidatableControl.Payload.OnAsynchronousValidationStatusChangedEventHandler;
                    ID: string;
              }>
            ) => unknown;

      };

  export type GeneralizedEventHandler = () => void;

  export type PossiblyInvalidData = { [controlKey: string]: unknown; };

  export type OnAnyChangeEventHandler = (compoundParameter: OnAnyChangeEventHandler.CompoundParameter) => void;

  export namespace OnAnyChangeEventHandler {
    export type CompoundParameter = Readonly<{ hasBecomeValid: boolean; hasBecomeInvalid: boolean; }>;
  }

}


export default ValidatableControlsGroup;
