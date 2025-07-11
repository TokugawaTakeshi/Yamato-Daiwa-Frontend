import ValidatableControl from "./ValidatableControl";
import type { InputtedValueValidation } from "@yamato-daiwa/frontend";

import type { ComponentPublicInstance as VueComponentPublicInstance } from "vue";

import {
  Logger,
  UnexpectedEventError,
  isNull,
  isNotUndefined,
  DOM_ElementRetrievingFailedError
} from "@yamato-daiwa/es-extensions";
import type { ArbitraryObject } from "@yamato-daiwa/es-extensions";
import { getExpectedToBeSingleDOM_Element } from "@yamato-daiwa/es-extensions-browserjs";


export default class ValidatableControlsGroup<ValidData extends ArbitraryObject | Array<unknown>> {

  public readonly isInvalid: boolean;
  public readonly payload: ValidData | null;
  public readonly SCROLLING_CONTAINER_HTML_ID?: string;

  protected readonly controlsPayload: ValidatableControlsGroup.GeneralizedControlsPayload;


  /* ━━━ Public Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static initialize<ValidData extends ArbitraryObject | Array<unknown>>(
    compoundParameter: Readonly<{ scrollingContainerHTML_ID?: string; }>
  ): ValidatableControlsGroup<ValidData> {
    return new ValidatableControlsGroup<ValidData>({
      isInvalid: true,
      payload: null,
      controlsPayload: {},
      scrollingContainerHTML_ID: compoundParameter.scrollingContainerHTML_ID
    });
  }

  public static hasInvalidInputs(
    controlsPayload: ValidatableControlsGroup.GeneralizedControlsPayload
  ): boolean {
    return (Array.isArray(controlsPayload) ? controlsPayload : Object.values(controlsPayload)).
        some(
          (validatableControlPayload: ValidatableControl.Payload<unknown, unknown, InputtedValueValidation>): boolean =>
              validatableControlPayload.isInvalid
        );
  }

  public static pointOutValidationErrors(
    {
      controlsPayload,
      parentVueComponentInstance,
      scrollingContainerHTML_ID
    }: Readonly<{
      controlsPayload: ValidatableControlsGroup.GeneralizedControlsPayload;
      parentVueComponentInstance: VueComponentPublicInstance;
      scrollingContainerHTML_ID?: string;
    }>
  ): void {

    let isCurrentControlTheFirstInvalidOne: boolean = true;

    for (const validatableControlPayload of Array.isArray(controlsPayload) ? controlsPayload : Object.values(controlsPayload)) {

      if (validatableControlPayload.isInvalid) {

        const componentInstance: ValidatableControl | null = ValidatableControl.getValidatableControlInstanceByVueReferenceID({
          parentVueComponentInstance, vueReferenceID: validatableControlPayload.VUE_REFERENCE_ID
        });

        if (isNull(componentInstance)) {

          Logger.logError({
            errorType: DOM_ElementRetrievingFailedError.NAME,
            title: DOM_ElementRetrievingFailedError.localization.defaultTitle,
            description: "Unable to retrieve the validatable control instance with Vue reference ID " +
                `"${ validatableControlPayload.VUE_REFERENCE_ID }". Make sure that dedicated component has been mounted ` +
                "and \"ref\" attribute has been explicitly specified.",
            occurrenceLocation: "ValidatableControlsGroup.pointOutValidationErrors(compoundParameter)"
          });

          continue;

        }


        componentInstance.highlightInvalidInput();

        if (isCurrentControlTheFirstInvalidOne) {

          componentInstance.focus();

          /* eslint-disable-next-line max-depth -- Here are all conditions are required. */
          if (isNotUndefined(scrollingContainerHTML_ID)) {
            getExpectedToBeSingleDOM_Element({ selector: `#${ scrollingContainerHTML_ID }` }).scroll({
              top: componentInstance.getRootElementOffsetCoordinates().top,
              behavior: "smooth"
            });
          }

          isCurrentControlTheFirstInvalidOne = false;

        }

      }

    }

  }


  /* ━━━ Instancing ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public constructor(
    compoundParameter:
        Readonly<
          (
            {
              isInvalid: false;
              payload: ValidData;
            } | {
              isInvalid: true;
              payload: null;
              controlsPayload: ValidatableControlsGroup.GeneralizedControlsPayload;
            }
          ) & {
            scrollingContainerHTML_ID?: string;
          }
        >
  ) {

    this.isInvalid = compoundParameter.isInvalid;
    this.payload = compoundParameter.payload;

    this.controlsPayload = "controlsPayload" in compoundParameter ? compoundParameter.controlsPayload : {};

    if (isNotUndefined(this.SCROLLING_CONTAINER_HTML_ID)) {
      this.SCROLLING_CONTAINER_HTML_ID = compoundParameter.scrollingContainerHTML_ID;
    }

  }


  /* ━━━ Instance Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public getExpectedToBeValidPayload(): ValidData {

    if (isNull(this.payload)) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new UnexpectedEventError("Contrary to expectations the payload is still invalid."),
        title: UnexpectedEventError.localization.defaultTitle,
        occurrenceLocation: "validatableControlsGroup.getExpectedToBeValidPayload()"
      });
    }


    return this.payload;

  }

  public pointOutValidationErrors(parentVueComponentInstance: VueComponentPublicInstance): void {
    ValidatableControlsGroup.pointOutValidationErrors({
      controlsPayload: this.controlsPayload,
      parentVueComponentInstance,
      scrollingContainerHTML_ID: this.SCROLLING_CONTAINER_HTML_ID
    });
  }

}


namespace ValidatableControlsGroup {

  export type GeneralizedControlsPayload =
      Readonly<{ [controlKey: string]: ValidatableControl.Payload<unknown, unknown, InputtedValueValidation>; }> |
      Array<ValidatableControl.Payload<unknown, unknown, InputtedValueValidation>>;

}
