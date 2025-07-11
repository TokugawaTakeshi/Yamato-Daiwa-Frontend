/* eslint-disable @typescript-eslint/member-ordering -- The secondary members has been organized to the end of the class. */

import type { InputtedValueValidation, ValidatableControl as CorePackageValidatableControl } from "@yamato-daiwa/frontend";
import type { ComponentPublicInstance as VueComponentPublicInstance } from "vue";
import {
  Logger,
  UnexpectedEventError,
  isArbitraryObject,
  isUndefined,
  isFunctionLike
} from "@yamato-daiwa/es-extensions";
import VueComponentNotFoundError from "../../_Errors/VueComponentNotFound/VueComponentNotFoundError";


type ValidatableControl = CorePackageValidatableControl;


namespace ValidatableControl {

  export function isValidatableControl(potentialValidatableControl: unknown): potentialValidatableControl is ValidatableControl {
    return isArbitraryObject(potentialValidatableControl) &&
        isFunctionLike(potentialValidatableControl.highlightInvalidInput) &&
        isFunctionLike(potentialValidatableControl.getRootElementOffsetCoordinates) &&
        isFunctionLike(potentialValidatableControl.focus) &&
        isFunctionLike(potentialValidatableControl.resetValidityHighlightingStateToInitial);
  }


  export function getValidatableControlInstanceByVueReferenceID(
    compoundParameter: Readonly<{
      parentVueComponentInstance: VueComponentPublicInstance;
      vueReferenceID: string;
    }>
  ): ValidatableControl | null;

  export function getValidatableControlInstanceByVueReferenceID(
    compoundParameter: Readonly<{
      parentVueComponentInstance: VueComponentPublicInstance;
      vueReferenceID: string;
      mustThrowErrorIsNotFoundOrNotValidatableControl: true;
    }>
  ): ValidatableControl;

  export function getValidatableControlInstanceByVueReferenceID(
    compoundParameter: Readonly<{
      parentVueComponentInstance: VueComponentPublicInstance;
      vueReferenceID: string;
      mustThrowErrorIsNotFoundOrNotValidatableControl?: true;
    }>
  ): ValidatableControl | null {

    const potentialValidatableControl: unknown = compoundParameter.parentVueComponentInstance.
        $refs[compoundParameter.vueReferenceID];

    if (isUndefined(potentialValidatableControl)) {

      if (compoundParameter.mustThrowErrorIsNotFoundOrNotValidatableControl === true) {
        Logger.throwErrorWithFormattedMessage({
          errorInstance: new VueComponentNotFoundError({ vueReferenceID: compoundParameter.vueReferenceID }),
          title: VueComponentNotFoundError.localization.defaultTitle,
          occurrenceLocation: "ValidatableControl.getValidatableControlInstanceByVueReferenceID(compoundParameter)"
        });
      }


      return null;

   }


    if (!isValidatableControl(potentialValidatableControl)) {

      if (compoundParameter.mustThrowErrorIsNotFoundOrNotValidatableControl === true) {
        Logger.throwErrorWithFormattedMessage({
          errorType: "VueReferenceValueIsNotValidatableControlError",
          title: "Vue Reference Value is not the Validatable Control",
          description:
              `The Vue reference "${ compoundParameter.vueReferenceID }" does not refer to the component implementing ` +
                "the \"ValidatableControl\" interface.",
          occurrenceLocation: "ValidatableControl.getValidatableControlInstanceByVueReferenceID(compoundParameter)"
        });
      }


      return null;

    }


    return potentialValidatableControl;

  }


  export class Payload<ValidValue, InvalidValue, Validation extends InputtedValueValidation> {

    /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    public readonly ID: string;
    public readonly VUE_REFERENCE_ID: string;

    public readonly value: ValidValue | InvalidValue;
    public readonly validation: Validation;
    public readonly lastChangeSourceID?: string;

    protected readonly validationResult: InputtedValueValidation.Result;
    protected readonly asynchronousChecksStatus: InputtedValueValidation.AsynchronousChecks.Status | null = null;


    /* ━━━ Public Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    public static createInitialInstance<ValidValue, InvalidValue, Validation extends InputtedValueValidation>(
      {
        initialValue,
        validation,
        vueReferenceID
      }: Readonly<{
        initialValue: ValidValue | InvalidValue;
        validation: Validation;
        vueReferenceID?: string;
      }>
    ): Payload<ValidValue, InvalidValue, Validation> {
      return new Payload<ValidValue, InvalidValue, Validation>({
        value: initialValue,
        validation,
        vueReferenceID
      });
    }


    /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    protected constructor(
      {
        ID,
        vueReferenceID,
        value,
        validation,
        summarizingValidationErrorsMessages = [],
        lastChangeSourceID
      }: Readonly<{

        /** @description Immutable for each instance. */
        value: ValidValue | InvalidValue;
        validation: Validation;

        summarizingValidationErrorsMessages?: ReadonlyArray<string>;
        lastChangeSourceID?: string;

        /** @description Need to be kept when creating the new instance based on outdated one. */
        ID?: string;
        vueReferenceID?: string;

      }>
    ) {

      this.ID = ID ?? Payload.generateSelfID();
      this.VUE_REFERENCE_ID = vueReferenceID ?? Payload.generateVueReferenceID_ForAssociatedComponent();

      this.value = value;
      this.validation = validation;
      this.lastChangeSourceID = lastChangeSourceID;

      if (summarizingValidationErrorsMessages.length === 0) {
        this.validationResult = validation.validate(this.value);
      } else {

        const validationResult: InputtedValueValidation.Result = validation.validate(this.value);

        const validationErrorsMessages: ReadonlyArray<string> = [
          ...validationResult.isValid ? [] : validationResult.errorsMessages, ...summarizingValidationErrorsMessages
        ];

        this.validationResult = {
          errorsMessages: validationErrorsMessages,
          isValid: validationErrorsMessages.length === 0
        };

      }

    }


    /* ━━━ Public Instance Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    /* ─── Updating ───────────────────────────────────────────────────────────────────────────────────────────────── */
    public getComponentInstance(ownerComponent: VueComponentPublicInstance): ValidatableControl {
      return getValidatableControlInstanceByVueReferenceID({
        vueReferenceID: this.VUE_REFERENCE_ID,
        parentVueComponentInstance: ownerComponent,
        mustThrowErrorIsNotFoundOrNotValidatableControl: true
      });
    }


    /* ─── Other ──────────────────────────────────────────────────────────────────────────────────────────────────── */
    public updateImmutably(
      {
        newValue
      }: {
        newValue: ValidValue | InvalidValue;
      }
    ): Payload<ValidValue, InvalidValue, Validation> {
      return new Payload<ValidValue, InvalidValue, Validation>({
        value: newValue,
        validation: this.validation
      });
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

    public get validationErrorsMessages(): Array<string> {
      return this.validationResult.isValid ? [] : [ ...this.validationResult.errorsMessages ];
    }


    /* ━━━ Routines ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    /* ─── IDs generating ─────────────────────────────────────────────────────────────────────────────────────────── */
    protected static counterForSelfID_Generating: number = 0;

    protected static generateSelfID(): string {
      Payload.counterForSelfID_Generating++;
      return `${ Payload.counterForSelfID_Generating }`;
    }

    protected static counterForAssociatedComponentVueReferenceID_Generating: number = 0;

    protected static generateVueReferenceID_ForAssociatedComponent(): string {
      Payload.counterForAssociatedComponentVueReferenceID_Generating++;
      return `VALIDATABLE_CONTROL-${ Payload.counterForAssociatedComponentVueReferenceID_Generating }`;
    }

  }


  export function VModelChecker(rawVModel: unknown, valueChecker: (rawValue: unknown) => boolean): boolean {
    return isArbitraryObject(rawVModel) ? valueChecker(rawVModel.value) : false;
  }

}


export default ValidatableControl;
