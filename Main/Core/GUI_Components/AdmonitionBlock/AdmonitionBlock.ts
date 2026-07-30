import CollapsingAnimation from "../../Animations/CollapsingAnimation";

import {
  Logger,
  InvalidParameterValueError,
  isNotUndefined,
  isNull,
  isNotNull,
  isArrayOfCertainTypeElements
} from "@yamato-daiwa/es-extensions";

import {
  getExpectedToBeSingleDOM_Element,
  LeftClickEventListener,
  resolveContextDOM_ElementPolymorphicSpecification
} from "@yamato-daiwa/es-extensions-browserjs";


export default abstract class AdmonitionBlock {

  protected static readonly ROOT_ELEMENT_CSS_CLASS: string = "AdmonitionBlock--YDF";
  protected static readonly ROOT_ELEMENT_SELECTOR: string = `.${ AdmonitionBlock.ROOT_ELEMENT_CSS_CLASS }`;
  protected static readonly DISMISSING_BUTTON_ELEMENT_SELECTOR: string =
      `.${ AdmonitionBlock.ROOT_ELEMENT_CSS_CLASS }-DismissingButton`;

  protected static readonly INITIALIZATION_COMPLETE_DATA_ATTRIBUTE_KEY: string = "initialized__ydf";


  public static initializeOne(
    initializationProperties: Readonly<
      {
        rootElement: Readonly<{ selector: string; }>;
        contextElement?: ParentNode | Readonly<{ selector: string; }>;
      } |
      {
        rootElement: Element;
        contextElement?: never;
      }
    >
  ): void {

    const contextElement: Element | ParentNode | null = resolveContextDOM_ElementPolymorphicSpecification(
      initializationProperties.contextElement
    );

    const rootElement: Element = initializationProperties.rootElement instanceof Element ?
        initializationProperties.rootElement :
        getExpectedToBeSingleDOM_Element({
          selector: initializationProperties.rootElement.selector,
          ...isNotNull(contextElement) ? { contextElement } : null
        });

    if (!(rootElement instanceof HTMLElement)) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "initializationProperties",
          messageSpecificPart:
              "The root element passed directly or via selector must be the instance of HTMLElement while actually " +
                "it does not."
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "AdmonitionBlock.initializeOne(initializationProperties)"
      });
    }


    if (isNotUndefined(rootElement.dataset[AdmonitionBlock.INITIALIZATION_COMPLETE_DATA_ATTRIBUTE_KEY])) {
      return;
    }


    if (!rootElement.classList.contains(AdmonitionBlock.ROOT_ELEMENT_CSS_CLASS)) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "initializationProperties",
          messageSpecificPart:
              "The root element passed directly or via selector must have the namespace CSS class " +
                `"${ AdmonitionBlock.ROOT_ELEMENT_CSS_CLASS }" while actually it have no.`
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "AdmonitionBlock.initializeOne(initializationProperties)"
      });
    }


    const dismissingButton: Element | null = rootElement.querySelector(AdmonitionBlock.DISMISSING_BUTTON_ELEMENT_SELECTOR);

    if (isNull(dismissingButton)) {
      rootElement.dataset[AdmonitionBlock.INITIALIZATION_COMPLETE_DATA_ATTRIBUTE_KEY] = "";
      return;
    }


    const leftClickEventListener: LeftClickEventListener = new LeftClickEventListener({

      targetElement: dismissingButton,

      handler(): void {

        CollapsingAnimation.animate({
          targetElement: rootElement,
          mustRemoveOnceComplete: true,
          duration__seconds: 0.5,
          mustReturnPromise: false
        });

        leftClickEventListener.utilize();

      }

    });

  }

  public static initializeUninitializedOnes(
    {
      rootElements: rootElementsDefinition = { selector: AdmonitionBlock.ROOT_ELEMENT_SELECTOR },
      contextElement
    }: Readonly<
      {
        rootElements?: Readonly<{ selector: string; }>;
        contextElement?: ParentNode | Readonly<{ selector: string; }>;
      } |
      {
        rootElements?: ReadonlyArray<Element>;
        contextElement?: never;
      }
    > = {
      rootElements: { selector: AdmonitionBlock.ROOT_ELEMENT_SELECTOR }
    }
  ): void {

    let rootElements: Array<Element>;

    if (
      isArrayOfCertainTypeElements(
        rootElementsDefinition,
        (element: unknown): element is Element => element instanceof Element
      )
    ) {

      rootElements = rootElementsDefinition;

    } else if ("selector" in rootElementsDefinition) {

      rootElements = Array.from(
        (resolveContextDOM_ElementPolymorphicSpecification(contextElement) ?? document).
            querySelectorAll(rootElementsDefinition.selector)
      );

    } else {

      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "initializationProperties",
          messageSpecificPart:
              "If `rootElements` property has been specified, it must be either the array of instances of `HTMLElement`s " +
                "(the `Element` type is allowed for convenience but actually must be instance of `HTMLElement`) or the " +
                "object with `selector` string property while actually it is neither of."
        }),
        title: InvalidParameterValueError.localization.defaultTitle,
        occurrenceLocation: "AdmonitionBlock.initializeOne(initializationProperties)"
      });

    }

    for (const rootElement of rootElements) {
      AdmonitionBlock.initializeOne({ rootElement });
    }

  }

}
