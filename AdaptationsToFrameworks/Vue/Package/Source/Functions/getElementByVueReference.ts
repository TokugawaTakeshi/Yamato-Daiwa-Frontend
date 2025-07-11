import type { ComponentPublicInstance } from "vue";
import {
  Logger,
  DOM_ElementRetrievingFailedError,
  isUndefined,
  isNotUndefined,
  UnexpectedEventError
} from "@yamato-daiwa/es-extensions";


export default function getElementByVueReference(
  compoundParameter: Readonly<{
    vueReferenceID: string;
    parentVueComponent: ComponentPublicInstance;
    mustExpectExactlyOneElement: true;
  }>
): Element;

export default function getElementByVueReference(
  compoundParameter: Readonly<{
    vueReferenceID: string;
    parentVueComponent: ComponentPublicInstance;
    mustExpectExactlyOneElement: false;
  }>
): Element | null;

export default function getElementByVueReference<DOM_ElementSubtype extends Element>(
  compoundParameter: Readonly<{
    vueReferenceID: string;
    parentVueComponent: ComponentPublicInstance;
    expectedDOM_ElementSubtype: new () => DOM_ElementSubtype;
    mustExpectExactlyOneElement: true;
  }>
): DOM_ElementSubtype;

export default function getElementByVueReference<DOM_ElementSubtype extends Element>(
  compoundParameter: Readonly<{
    vueReferenceID: string;
    parentVueComponent: ComponentPublicInstance;
    expectedDOM_ElementSubtype: new () => DOM_ElementSubtype;
    mustExpectExactlyOneElement: false;
  }>
): DOM_ElementSubtype | null;


export default function getElementByVueReference<DOM_ElementSubtype extends Element>(
  {
    parentVueComponent,
    vueReferenceID,
    expectedDOM_ElementSubtype,
    mustExpectExactlyOneElement
  }: Readonly<{
    vueReferenceID: string;
    parentVueComponent: ComponentPublicInstance;
    expectedDOM_ElementSubtype?: new () => DOM_ElementSubtype;
    mustExpectExactlyOneElement: boolean;
  }>
): DOM_ElementSubtype | null {

  const referenceContent: unknown = parentVueComponent.$refs[vueReferenceID];

  if (isUndefined(referenceContent)) {

    if (mustExpectExactlyOneElement) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new UnexpectedEventError(
          `Expected that the Vue reference with ID "${ vueReferenceID }" refers to single DOM element while actually ` +
            "no such mounted element."
        ),
        title: UnexpectedEventError.localization.defaultTitle,
        occurrenceLocation: "getElementByVueReference(compoundParameter)"
      });
    }


    return null;

  }


  if (Array.isArray(referenceContent)) {

    if (mustExpectExactlyOneElement) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new UnexpectedEventError(
          `Expected that the Vue reference with ID "${ vueReferenceID }" refers to single DOM element while actually ` +
            "refers to multiples ones."
        ),
        title: UnexpectedEventError.localization.defaultTitle,
        occurrenceLocation: "getElementByVueReference(compoundParameter)"
      });
    }


    return null;

  }


  if (!(referenceContent instanceof Element)) {
    Logger.throwErrorWithFormattedMessage({
      errorInstance: new DOM_ElementRetrievingFailedError({
        customMessage:
            `The Vue reference with ID "${ vueReferenceID }" refers to non-empty object while it is not the instance ` +
              "of `Element`."
      }),
      occurrenceLocation: "getElementByVueReference(compoundParameter)",
      title: DOM_ElementRetrievingFailedError.localization.defaultTitle
    });
  }


  if (isNotUndefined(expectedDOM_ElementSubtype) && !(referenceContent instanceof expectedDOM_ElementSubtype)) {
    Logger.throwErrorWithFormattedMessage({
      errorInstance: new UnexpectedEventError(
        `The Vue reference with ID "${ vueReferenceID }" refers instance of \`Element\` but contrary to expectations ` +
          `it is not instance of ${ expectedDOM_ElementSubtype.name }".`
      ),
      title: UnexpectedEventError.localization.defaultTitle,
      occurrenceLocation: "getElementByVueReference(compoundParameter)"
    });
  }


  return null;

}
