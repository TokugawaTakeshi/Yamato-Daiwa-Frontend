import type { RootElementDefinition } from "../../Logic/Types/RootElementDefinition";
import {
  getExpectedToBeSingleDOM_Element,
  LeftClickEventListener,
  resolveContextDOM_ElementPolymorphicSpecification
} from "@yamato-daiwa/es-extensions-browserjs";
import { InvalidParameterValueError, isNotNull, Logger } from "@yamato-daiwa/es-extensions";
import ExpandingAnimation from "../../Animations/ExpandingAnimation";
import CollapsingAnimation from "../../Animations/CollapsingAnimation";


export default abstract class Accordion {

  public static initializeOne(
    initializationProperties: RootElementDefinition
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
        occurrenceLocation: "Accordion.initializeOne(initializationProperties)"
      });
    }

  }

}
