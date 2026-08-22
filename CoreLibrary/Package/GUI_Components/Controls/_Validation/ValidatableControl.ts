/* eslint-disable @typescript-eslint/member-ordering -- The secondary members has been organized to the end of the class. */
/* eslint-disable no-underscore-dangle -- There are eponymous protected fields and public accessors in "Payload" class. */

import type InputtedValueValidation from "./InputtedValueValidation";
import {
  Logger,
  UnexpectedEventError,
  isUndefined,
  isNotUndefined,
  nullToUndefined,
  secondsToMilliseconds
} from "@yamato-daiwa/es-extensions";


interface ValidatableControl {

  highlightInvalidInput: () => this;

  getRootElementOffsetCoordinates: () => ValidatableControl.RootElementOffsetCoordinates;

  focus: () => this;

  resetValidityHighlightingStateToInitial: () => void;

}


namespace ValidatableControl {

  export type RootElementOffsetCoordinates = Readonly<{ top: number; left: number; }>;

  export class Payload<
    IsInputRequired extends boolean,
    NonEmptyValueType,
    EmptyValueType = NonEmptyValueType,
    /* eslint-disable-next-line @stylistic/type-generic-spacing --
     * ESLint Stylistic plugin bug: this positive in completely nor related with the spacing around angled brackets. */
    ValidValue extends (IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)) =
        IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType),
    InvalidValue extends NonEmptyValueType | EmptyValueType = NonEmptyValueType | EmptyValueType
  > {

    public readonly ID: string = Payload.generateSelfID();
    public readonly validation: InputtedValueValidation<NonEmptyValueType, EmptyValueType>;
    public readonly getComponentInstance: () => ValidatableControl;

    /* [ Convention ] The fields begin from the underscore must be changed only via constructor or setters. */
    protected _value: NonEmptyValueType | EmptyValueType;
    protected _validationResult: InputtedValueValidation.Result;
    protected _asynchronousChecksStatus: InputtedValueValidation.AsynchronousChecks.Status | null = null;

    protected readonly onHasBecomeValidEventHandlers: Payload.GeneralizedEventHandlersMap = new Map();
    protected readonly onHasBecomeInvalidEventHandlers: Payload.GeneralizedEventHandlersMap = new Map();
    protected readonly onAnyChangeEventHandlers: Payload.GeneralizedEventHandlersMap = new Map();
    protected readonly onAsynchronousValidationStatusChangedEventHandlers: Payload.
        OnAsynchronousValidationStatusChangedEventHandlersMap = new Map();

    protected waitingForStaringOfAsynchronousValidationTimeID: number | null = null;


    public constructor(
      compoundParameter:
          Payload.ConstructorCompoundParameter<NonEmptyValueType, EmptyValueType>
    ) {

      this._value = compoundParameter.initialValue;
      this.validation = compoundParameter.validation;
      this._validationResult = this.validation.validate(this._value);

      this.getComponentInstance = compoundParameter.getComponentInstance;

      if (isNotUndefined(compoundParameter.onAnyChangeEventHandler)) {
        this.setOnValueAnyChangeEventHandler(compoundParameter.onAnyChangeEventHandler);
      }

      if (isNotUndefined(compoundParameter.onHasBecomeValidEventHandler)) {
        this.setOnHasBecomeValidEventHandler(compoundParameter.onHasBecomeValidEventHandler);
      }

      if (isNotUndefined(compoundParameter.onHasBecomeInvalidEventHandler)) {
        this.setOnHasBecomeInvalidEventHandler(compoundParameter.onHasBecomeInvalidEventHandler);
      }

      if (isNotUndefined(compoundParameter.onAsynchronousValidationStatusChangedEventHandler)) {
        this.setOnAsynchronousValidationStatusChangedEventHandler(
          compoundParameter.onAsynchronousValidationStatusChangedEventHandler
        );
      }

    }


    /* ━━━ Value ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    public get value(): NonEmptyValueType | EmptyValueType { return this._value; }

    public $setValue(
      {
        newValue,
        asynchronousValidationDelay__seconds,
        messagesOfExternallyDetectedValidationErrors
      }: Readonly<{
        newValue: ValidValue | InvalidValue;
        asynchronousValidationDelay__seconds?: number;
        messagesOfExternallyDetectedValidationErrors?: ReadonlyArray<string>;
      }>
    ): void {

      this._value = newValue;

      this.validationResult = this.validation.validate(
        this._value,
        {
          mustPostponeAsynchronousValidation: isNotUndefined(asynchronousValidationDelay__seconds),
          asynchronousChecksCallback: this.onAsynchronousChecksStatusChanged.bind(this),
          messagesOfExternallyDetectedValidationErrors
        }
      );

      if (isUndefined(asynchronousValidationDelay__seconds)) {
        return;
      }


      clearTimeout(
        nullToUndefined(this.waitingForStaringOfAsynchronousValidationTimeID)
      );

      /* [ Approach ] No need in asynchronous validations if the value has not passed the static validations. */
      if (this.isInvalid) {
        return;
      }


      this.waitingForStaringOfAsynchronousValidationTimeID = window.setTimeout(
        (): void => {

          /* [ Theory ]
           * For an optional value case, even if it is empty, it will be valid, but no need to execute validation is
           *   this case. */
          if (this.validation.hasValueBeenOmitted(this._value)) {
            return;
          }


          this.validation.executeAsynchronousChecksIfAny(
            this._value,
            this.validationResult,
            this.onAsynchronousChecksStatusChanged.bind(this)
          );

        },
        secondsToMilliseconds(asynchronousValidationDelay__seconds)
      );


    }


    /* ━━━ Public Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    /* ─── Event Handlers ─────────────────────────────────────────────────────────────────────────────────────────── */
    public setOnValueAnyChangeEventHandler(
      polymorphicParameter: Payload.GeneralizedEventHandler | Readonly<{ handler: Payload.GeneralizedEventHandler; ID: string; }>
    ): this {

      this.onAnyChangeEventHandlers.set(
        "handler" in polymorphicParameter ? polymorphicParameter.ID : Payload.generateOnAnyChangeEventHandlerID(),
        "handler" in polymorphicParameter ? polymorphicParameter.handler : polymorphicParameter
      );

      return this;

    }

    public setOnHasBecomeValidEventHandler(
      polymorphicParameter: Payload.GeneralizedEventHandler | Readonly<{ handler: Payload.GeneralizedEventHandler; ID: string; }>
    ): this {

      this.onHasBecomeValidEventHandlers.set(
        "handler" in polymorphicParameter ? polymorphicParameter.ID : Payload.generateOnHasBecomeValidEventHandlerID(),
        "handler" in polymorphicParameter ? polymorphicParameter.handler : polymorphicParameter
      );

      return this;

    }

    public setOnHasBecomeInvalidEventHandler(
      polymorphicParameter: Payload.GeneralizedEventHandler | Readonly<{ handler: Payload.GeneralizedEventHandler; ID: string; }>
    ): this {

      this.onHasBecomeInvalidEventHandlers.set(
        "handler" in polymorphicParameter ? polymorphicParameter.ID : Payload.generateOnHasBecomeInvalidEventHandlerID(),
        "handler" in polymorphicParameter ? polymorphicParameter.handler : polymorphicParameter
      );

      return this;

    }

    public setOnAsynchronousValidationStatusChangedEventHandler(
      polymorphicParameter:
          Payload.OnAsynchronousValidationStatusChangedEventHandler |
          Readonly<{ handler: Payload.OnAsynchronousValidationStatusChangedEventHandler; ID: string; }>
    ): this {

      this.onAsynchronousValidationStatusChangedEventHandlers.set(
        "handler" in polymorphicParameter ?
            polymorphicParameter.ID :
            Payload.generateOnAsynchronousValidationStatusChangedEventHandlerID(),
        "handler" in polymorphicParameter ? polymorphicParameter.handler : polymorphicParameter
      );

      return this;

    }


    /* ━━━ Public Getters and Getter-like Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    public getExpectedToBeValidValue(): ValidValue {

      if (this.isInvalid) {
        Logger.throwErrorWithFormattedMessage({
          errorInstance: new UnexpectedEventError("Contrary to expectations, the value is still invalid."),
          title: UnexpectedEventError.localization.defaultTitle,
          occurrenceLocation: "ValidatableControl.Payload.getExpectedToBeValidValue()"
        });
      }


      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
       * In this case, we are guarantee the ValidValue by "this.isInvalid" check */
      return this.value as ValidValue;

    }

    public get isEmpty(): boolean {
      return this.validation.hasValueBeenOmitted(this.value);
    }

    public get isInvalid(): boolean {
      return !this.validationResult.isValid;
    }

    public get validationErrorsMessages(): ReadonlyArray<string> {
      return this.validationResult.isValid ? [] : this.validationResult.errorsMessages;
    }


    /* ━━━ Routines ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    /* ─── Event handlers ─────────────────────────────────────────────────────────────────────────────────────────── */
    protected onAsynchronousChecksStatusChanged(
      asynchronousChecksStatus: InputtedValueValidation.AsynchronousChecks.Status,
      newestValidationResult: InputtedValueValidation.Result
    ): void {
      this.validationResult = newestValidationResult;
      this.asynchronousChecksStatus = asynchronousChecksStatus;
    }

    /* ─── Additional getters & setters ───────────────────────────────────────────────────────────────────────────── */
    protected get validationResult(): InputtedValueValidation.Result {
      return this._validationResult;
    }

    protected set validationResult(validationResult: InputtedValueValidation.Result) {

      const wasValidPreviously: boolean = this._validationResult.isValid;

      this._validationResult = validationResult;

      for (const [ handlerID, handler ] of this.onAnyChangeEventHandlers.entries()) {

        try {

          handler();

        } catch (error: unknown) {
          Logger.logError({
            errorType: "CustomEventHandlerExecutionFailure",
            title: "Custom event handler execution failure",
            description:
                `The error occurred during the execution of "OnAnyChange" event handler with ID "${ handlerID }".`,
            occurrenceLocation: "ValidatableControl.Payload.$[set]validationResult(validationResult)",
            caughtError: error
          });
        }

      }


      if (!wasValidPreviously && this.validationResult.isValid) {

        for (const [ handlerID, handler ] of this.onHasBecomeValidEventHandlers.entries()) {

          try {

            handler();

          } catch (error: unknown) {

            Logger.logError({
              errorType: "CustomEventHandlerExecutionFailure",
              title: "Custom event handler execution failure",
              description:
                  `The error occurred during the execution of "OnHasBecomeValid" event handler with ID "${ handlerID }".`,
              occurrenceLocation: "ValidatableControl.Payload.[set]validationResult(validationResult)",
              caughtError: error
            });

          }
        }

      } else if (wasValidPreviously && !this.validationResult.isValid) {

        for (const [ handlerID, handler ] of this.onHasBecomeInvalidEventHandlers.entries()) {

          try {

            handler();

          } catch (error: unknown) {

            Logger.logError({
              errorType: "CustomEventHandlerExecutionFailure",
              title: "Custom event handler execution failure",
              description:
                  `The error occurred during the execution of "OnHasBecomeInvalid" event handler with ID "${ handlerID }".`,
              occurrenceLocation: "ValidatableControl.Payload.[set]validationResult(validationResult)",
              caughtError: error
            });

          }

        }

      }

    }


    public get asynchronousChecksStatus(): InputtedValueValidation.AsynchronousChecks.Status | null {
      return this._asynchronousChecksStatus;
    }

    protected set asynchronousChecksStatus(asynchronousChecksStatus: InputtedValueValidation.AsynchronousChecks.Status) {

      this._asynchronousChecksStatus = asynchronousChecksStatus;

      for (const [ handlerID, handler ] of this.onAsynchronousValidationStatusChangedEventHandlers.entries()) {

        try {

          handler(asynchronousChecksStatus);

        } catch (error: unknown) {

          Logger.logError({
            errorType: "CustomEventHandlerExecutionFailure",
            title: "Custom event handler execution failure",
            description:
                "The error occurred during the execution of \"OnAsynchronousValidationStatusChanged\" event handler " +
                  `with ID "${ handlerID }".`,
            occurrenceLocation: "ValidatableControl.Payload.[set]asynchronousChecksStatus(asynchronousChecksStatus)",
            caughtError: error
          });

        }

      }

    }


    /* ─── IDs Generating ─────────────────────────────────────────────────────────────────────────────────────────── */
    protected static counterForSelfID_Generating: number = 0;

    protected static generateSelfID(): string {
      Payload.counterForSelfID_Generating++;
      return `${ Payload.counterForSelfID_Generating }`;
    }


    protected static counterForOnAnyChangeEventHandlersIDsGenerating: number = 0;

    protected static generateOnAnyChangeEventHandlerID(): string {
      Payload.counterForOnAnyChangeEventHandlersIDsGenerating++;
      return `ON_ANY_CHANGE-GENERATED-${ Payload.counterForOnAnyChangeEventHandlersIDsGenerating }`;
    }

    protected static counterForOnHasBecomeValidEventHandlersIDsGenerating: number = 0;

    protected static generateOnHasBecomeValidEventHandlerID(): string {
      Payload.counterForOnHasBecomeValidEventHandlersIDsGenerating++;
      return `ON_HAS_BECOME_VALID-GENERATED-${ Payload.counterForOnHasBecomeValidEventHandlersIDsGenerating }`;
    }


    protected static counterForOnHasBecomeInvalidEventHandlersIDsGenerating: number = 0;

    protected static generateOnHasBecomeInvalidEventHandlerID(): string {
      Payload.counterForOnHasBecomeInvalidEventHandlersIDsGenerating++;
      return `ON_HAS_BECOME_INVALID-GENERATED-${ Payload.counterForOnHasBecomeInvalidEventHandlersIDsGenerating }`;
    }


    protected static counterForOnAsynchronousValidationStatusChangedEventHandlerIDsGenerating: number = 0;

    protected static generateOnAsynchronousValidationStatusChangedEventHandlerID(): string {
      Payload.counterForOnAsynchronousValidationStatusChangedEventHandlerIDsGenerating++;
      return "ON_ASYNCHRONOUS_VALIDATION_STATUS_CHANGED-GENERATED-" +
          `${ Payload.counterForOnAsynchronousValidationStatusChangedEventHandlerIDsGenerating }`;
    }

  }


  export namespace Payload {

    export type ConstructorCompoundParameter<NonEmptyValueType, EmptyValueType> = Readonly<{
      initialValue: NonEmptyValueType | EmptyValueType;
      validation: InputtedValueValidation<NonEmptyValueType, EmptyValueType>;
      getComponentInstance: () => ValidatableControl;
      onAnyChangeEventHandler?: GeneralizedEventHandler | Readonly<{ handler: GeneralizedEventHandler; ID: string; }>;
      onHasBecomeValidEventHandler?: GeneralizedEventHandler | Readonly<{ handler: GeneralizedEventHandler; ID: string; }>;
      onHasBecomeInvalidEventHandler?: GeneralizedEventHandler | Readonly<{ handler: GeneralizedEventHandler; ID: string; }>;
      onAsynchronousValidationStatusChangedEventHandler?:
          OnAsynchronousValidationStatusChangedEventHandler |
          Readonly<{
            handler: OnAsynchronousValidationStatusChangedEventHandler;
            ID: string;
          }>;
    }>;

    export type EventHandlerID = string;

    export type GeneralizedEventHandler = () => unknown;
    export type GeneralizedEventHandlersMap = Map<EventHandlerID, GeneralizedEventHandler>;

    export type OnAsynchronousValidationStatusChangedEventHandler = (
      status: InputtedValueValidation.AsynchronousChecks.Status
    ) => unknown;
    export type OnAsynchronousValidationStatusChangedEventHandlersMap = Map<
      EventHandlerID, OnAsynchronousValidationStatusChangedEventHandler
    >;

  }


  export namespace CharactersInputtingType {

    export enum ValidityHighlightingActivationModes {
      immediate = "IMMEDIATE",
      onFirstInputtedCharacter = "ON_FIRST_INPUTTED_CHARACTER",
      onFocusOut = "ON_FOCUS_OUT"
    }

    export type ValidityHighlightingActivationModeDefinition<
      IsRequired extends boolean,
      NonEmptyValueType,
      EmptyValueType,
      ValidValue extends (IsRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)),
      InvalidValue extends NonEmptyValueType | EmptyValueType
    > = Readonly<
      {
        validityHighlightingActivationMode: ValidityHighlightingActivationModes;
      } |
      {
        decideValidityHighlightingActivationMode:
            (payload: Payload<IsRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>) =>
                ValidityHighlightingActivationModes;
      }
    >;

  }

}


export default ValidatableControl;
