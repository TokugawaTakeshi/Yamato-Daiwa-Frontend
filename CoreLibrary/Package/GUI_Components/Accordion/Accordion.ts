import type { RootElementDefinition } from "../../Logic/Types/RootElementDefinition";
import {
  getExpectedToBeSingleDOM_Element,
  LeftClickEventListener,
  resolveContextDOM_ElementPolymorphicSpecification
} from "@yamato-daiwa/es-extensions-browserjs";
import { InvalidParameterValueError, isNotNull, Logger } from "@yamato-daiwa/es-extensions";
import ExpandingAnimation from "../../Animations/ExpandingAnimation";
import CollapsingAnimation from "../../Animations/CollapsingAnimation";
import AccordionYDF_GUI_ComponentDOM_AccessResources from "./AccordionDOM_AccessResources";


abstract class Accordion {

  private static readonly DOM_AccessResources: Accordion.DOM_AccessResources =
        AccordionYDF_GUI_ComponentDOM_AccessResources;

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

    const panel: HTMLElement =
        getExpectedToBeSingleDOM_Element({
          selector: Accordion.DOM_AccessResources.panel.INTERNALLY_UNIQUE_SELECTOR,
          contextElement: rootElement,
          expectedDOM_ElementSubtype: HTMLElement
        });

    LeftClickEventListener.createAndAssign({
      contextElement: rootElement,
      targetElement: {
        selector: Accordion.DOM_AccessResources.button.INTERNALLY_UNIQUE_SELECTOR,
        mustExpectExactlyOneMatchingWithSelector: true
      },
      handler(): void {

        if (panel.hidden) {

          ExpandingAnimation.animate({
            targetElement: { selector: Accordion.DOM_AccessResources.panel.INTERNALLY_UNIQUE_SELECTOR },
            averageSpeed__pixelsPerSecond: 300,
            mustReturnPromise: false,
            callback(): void {
              panel.hidden = false;
            }
          });

        } else {

          CollapsingAnimation.animate({
            targetElement: { selector: Accordion.DOM_AccessResources.panel.INTERNALLY_UNIQUE_SELECTOR },
            averageSpeed__pixelsPerSecond: 300,
            mustReturnPromise: false,
            callback(): void {
              panel.hidden = true;
            }
          });

        }

      }
    });

  }

}


namespace Accordion {

  export type DOM_AccessResources = Readonly<{

    rootElement: Readonly<{
      CSS_NAMESPACE_CLASS: string;
      SELECTOR_BY_CSS_NAMESPACE_CLASS: string;
    }>;

    button: Readonly<{
      DATA_ATTRIBUTE_KEY: string;
      INTERNALLY_UNIQUE_SELECTOR: string;
    }>;

    panel: Readonly<{
      DATA_ATTRIBUTE_KEY: string;
      INTERNALLY_UNIQUE_SELECTOR: string;
    }>;

  }>;

}


export default Accordion;
