/* eslint-disable @typescript-eslint/member-ordering -- The secondary members has been organized to the end of the class. */

import type { InputtedValueValidation, ValidatableControl as CorePackageValidatableControl } from "@yamato-daiwa/frontend";
import type { ComponentPublicInstance as VueComponentPublicInstance } from "vue";
import type { VueCons as VueClassComponent } from "vue-facing-decorator";
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
      parentVueComponentInstance: VueComponentPublicInstance | VueClassComponent;
      vueReferenceID: string;
    }>
  ): ValidatableControl | null;

  export function getValidatableControlInstanceByVueReferenceID(
    compoundParameter: Readonly<{
      parentVueComponentInstance: VueComponentPublicInstance | VueClassComponent;
      vueReferenceID: string;
      mustThrowErrorIsNotFoundOrNotValidatableControl: true;
    }>
  ): ValidatableControl;

  export function getValidatableControlInstanceByVueReferenceID(
    compoundParameter: Readonly<{
      parentVueComponentInstance: VueComponentPublicInstance | VueClassComponent;
      vueReferenceID: string;
      mustThrowErrorIsNotFoundOrNotValidatableControl?: true;
    }>
  ): ValidatableControl | null {

    const potentialValidatableControl: unknown =
        /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
         * Types which `vue-facing-decorator` imports are not compatible with `VueComponentPublicInstance`, but actually
         *   class components will be transformed to valid option API.  */
        (compoundParameter.parentVueComponentInstance as VueComponentPublicInstance).$refs[compoundParameter.vueReferenceID];

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

    /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    public readonly ID: string;
    public readonly VUE_REFERENCE_ID: string;

    public readonly value: ValidValue | InvalidValue;
    public readonly validation: InputtedValueValidation<NonEmptyValueType, EmptyValueType>;
    public readonly lastChangeSourceID?: string;

    protected readonly validationResult: InputtedValueValidation.Result;
    protected readonly asynchronousChecksStatus: InputtedValueValidation.AsynchronousChecks.Status | null = null;


    /* ━━━ Public Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    public static createInitialInstance<
      IsInputRequired extends boolean,
      NonEmptyValueType,
      EmptyValueType = NonEmptyValueType,
      /* eslint-disable-next-line @stylistic/type-generic-spacing --
       * ESLint Stylistic plugin bug: this positive in completely nor related with the spacing around angled brackets. */
      ValidValue extends (IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType)) =
          IsInputRequired extends true ? NonEmptyValueType : (NonEmptyValueType | EmptyValueType),
      InvalidValue extends NonEmptyValueType | EmptyValueType = NonEmptyValueType | EmptyValueType
    >(
      {
        initialValue,
        validation,
        vueReferenceID
      }: Readonly<{
        initialValue: NonEmptyValueType | EmptyValueType;
        validation: InputtedValueValidation<NonEmptyValueType, EmptyValueType>;
        vueReferenceID?: string;
      }>
    ): Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue> {
      return new Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>({
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
        value: NonEmptyValueType | EmptyValueType;
        validation: InputtedValueValidation<NonEmptyValueType, EmptyValueType>;

        summarizingValidationErrorsMessages?: ReadonlyArray<string>;
        lastChangeSourceID?: string;

        /** @description Need to be kept when creating the new instance based on outdated one. */
        ID?: string;
        vueReferenceID?: string;

      }>
    ) {

      this.ID = ID ?? Payload.generateSelfID();
      this.VUE_REFERENCE_ID = vueReferenceID ?? Payload.generateVueReferenceID_ForAssociatedComponent();

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- TEMPORARY
      // @ts-ignore
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
      newValue: NonEmptyValueType | EmptyValueType
    ): Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue> {
      return new Payload<IsInputRequired, NonEmptyValueType, EmptyValueType, ValidValue, InvalidValue>({
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
