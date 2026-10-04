import componentHTML_Workpiece from "./Snackbar.template.pug";

import {
  PromisesQueue,
  toScreamingSnakeCase,
  isUndefined,
  isNull,
  toUpperCamelCase
} from "@yamato-daiwa/es-extensions";

import {
  createDOM_ElementFromHTML_Code,
  getExpectedToBeSingleDOM_Element,
  LeftClickEventListener,
  BrowserJS_Timer
} from "@yamato-daiwa/es-extensions-browserjs";


abstract class Snackbar {

  public static DecorativeVariations: Snackbar.DecorativeVariations = {
    error: "ERROR",
    warning: "WARNING",
    guidance: "GUIDANCE",
    success: "SUCCESS"
  };


  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static readonly sessionsQueue: PromisesQueue = new PromisesQueue();


  /* ┅┅┅ Accessing to DOM ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected static readonly CSS_NAMESPACE: string = "Snackbar--YDF";

  protected static readonly HIDDEN_STATE_CSS_CLASS: string = `${ Snackbar.CSS_NAMESPACE }-Transition__HiddenState`;
  protected static readonly DISPLAYING_STATE_CSS_CLASS: string = `${ Snackbar.CSS_NAMESPACE }-Transition__DisplayingState`;

  protected static readonly SVG_ICON_MOUNTING_POINT_ELEMENT_SELECTOR: string = ".Snackbar--YDF-SVG_MountingPoint";
  protected static readonly SVG_ICON_SELECTOR: string = ".Snackbar--YDF-SVG_Icon";
  protected static readonly MESSAGE_ELEMENT_SELECTOR: string = ".Snackbar--YDF-Message";
  protected static readonly DISMISSING_BUTTON_ELEMENT_SELECTOR: string = ".Snackbar--YDF-DismissingButton";


  /* ╍╍╍ Initialization on Demand ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  protected static DOM_Workpiece: HTMLElement | null = null;

  protected static SVG_IconMountingPointElement: Element;
  protected static decorativeVariationsDependents: { [ decoration: string ]: Snackbar.DecorativeVariationDependents; };

  protected static messageElement: Element;
  protected static dismissingButtonElement: HTMLElement;


  /* ┅┅┅ Events Handling ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected static closingButtonEventListener: LeftClickEventListener;


  /* ┅┅┅ Others Constants ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected static readonly DEFAULT_APPEARING_TRANSITION_DURATION__SECONDS: number = 0.5;
  protected static readonly DEFAULT_DISAPPEARING_TRANSITION_DURATION__SECONDS: number = 0.2;
  protected static readonly DEFAULT_DISPLAYING_DURATION__SECONDS: number = 5;


  /* ━━━ Public Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static mountAndDisplayForAWhile(compoundParameter: Snackbar.CompoundParameter): void {

    Snackbar.sessionsQueue.addFunctionAndStartExecutionIfHasNotStartedYet({
      newAsynchronousFunction: async (): Promise<void> =>
          Snackbar.mountAndDisplayForAWhileSingleInstance(compoundParameter),
      behaviourOnSomePromiseFailed:
          PromisesQueue.BEHAVIOUR_ON_SOME_PROMISE_FAILED.loggingAndProceedingToNextPromise
    }).

        catch(PromisesQueue.errorHandler);

  }

  public static async hideAndUnmount(): Promise<void> {

    /* [ Theory ] It is possible when this method has been called before `mountAndDisplayForAWhile`. */
    if (isNull(Snackbar.DOM_Workpiece)) {
      return;
    }


    Snackbar.closingButtonEventListener.utilize();

    Snackbar.DOM_Workpiece.style.transitionDuration = `${ Snackbar.DEFAULT_DISAPPEARING_TRANSITION_DURATION__SECONDS }s`;
    Snackbar.DOM_Workpiece.classList.remove(Snackbar.DISPLAYING_STATE_CSS_CLASS);
    Snackbar.DOM_Workpiece.classList.add(Snackbar.HIDDEN_STATE_CSS_CLASS);

    await new BrowserJS_Timer({ period__seconds: Snackbar.DEFAULT_DISAPPEARING_TRANSITION_DURATION__SECONDS }).countDown();

    Snackbar.DOM_Workpiece.remove();

    Snackbar.DOM_Workpiece.classList.remove(
      ...Object.values(Snackbar.decorativeVariationsDependents).map(
      (decorativeVariationDependents: Snackbar.DecorativeVariationDependents): string =>
          decorativeVariationDependents.CSS_Class
      )
    );

    getExpectedToBeSingleDOM_Element({ selector: Snackbar.SVG_ICON_SELECTOR, contextElement: Snackbar.DOM_Workpiece }).
        replaceWith(Snackbar.SVG_IconMountingPointElement);

    Snackbar.messageElement.innerHTML = "";

  }

  public static defineDecorativeVariations(
    decorativeVariationsData: ReadonlyArray<Readonly<{ key: string; } & Snackbar.DecorativeVariationDependents>>
  ): void {

    for (const { key, CSS_Class, SVG_Icon } of decorativeVariationsData) {
      Snackbar.decorativeVariationsDependents[key] = { CSS_Class, SVG_Icon };
      Snackbar.DecorativeVariations[key] = toScreamingSnakeCase(key);
    }

  }


  /* ━━━ Protected Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static async mountAndDisplayForAWhileSingleInstance(
    {
      messageTextOrHTML,
      decorativeVariation,
      position = Snackbar.Positions.topMiddle,
      parentElementSelector = "body",
      mountingPointElementSelector,
      displayingDuration__seconds = Snackbar.DEFAULT_DISPLAYING_DURATION__SECONDS,
      appearingTransitionDuration__seconds = Snackbar.DEFAULT_APPEARING_TRANSITION_DURATION__SECONDS
    }: Snackbar.CompoundParameter
  ): Promise<void> {

    const initializedDOM_Workpiece: HTMLElement = Snackbar.DOM_Workpiece ?? Snackbar.initializeDOM_Workpiece();

    const decorativeVariationsDependent: Snackbar.DecorativeVariationDependents =
        Snackbar.decorativeVariationsDependents[decorativeVariation];

    initializedDOM_Workpiece.classList.add(decorativeVariationsDependent.CSS_Class);
    initializedDOM_Workpiece.classList.add(`${ Snackbar.CSS_NAMESPACE }__${ toUpperCamelCase(position) }Position`);

    Snackbar.SVG_IconMountingPointElement.replaceWith(decorativeVariationsDependent.SVG_Icon);
    Snackbar.messageElement.innerHTML = messageTextOrHTML;

    Snackbar.closingButtonEventListener =
        new LeftClickEventListener({
          targetElement: Snackbar.dismissingButtonElement,
          handler: Snackbar.hideAndUnmount
        });

    if (isUndefined(mountingPointElementSelector)) {
      getExpectedToBeSingleDOM_Element({ selector: parentElementSelector }).appendChild(initializedDOM_Workpiece);
    } else {
      getExpectedToBeSingleDOM_Element({ selector: mountingPointElementSelector }).replaceWith(initializedDOM_Workpiece);
    }

    requestAnimationFrame((): void => {
      initializedDOM_Workpiece.style.transitionDuration = `${ appearingTransitionDuration__seconds }s`;
      initializedDOM_Workpiece.classList.remove(Snackbar.HIDDEN_STATE_CSS_CLASS);
      initializedDOM_Workpiece.classList.add(Snackbar.DISPLAYING_STATE_CSS_CLASS);
    });

    await new BrowserJS_Timer({ period__seconds: displayingDuration__seconds }).countDown();

    return Snackbar.hideAndUnmount();

  }


  protected static initializeDOM_Workpiece(): HTMLElement {

    Snackbar.DOM_Workpiece = createDOM_ElementFromHTML_Code({
      HTML_Code: componentHTML_Workpiece,
      rootDOM_ElementSubtype: HTMLElement
    });

    Snackbar.SVG_IconMountingPointElement = getExpectedToBeSingleDOM_Element({
      selector: Snackbar.SVG_ICON_MOUNTING_POINT_ELEMENT_SELECTOR,
      contextElement: Snackbar.DOM_Workpiece
    });

    Snackbar.decorativeVariationsDependents = {

      [Snackbar.DecorativeVariations.error]: {
        CSS_Class: `${ Snackbar.CSS_NAMESPACE }__ErrorDecorativeVariation`,
        SVG_Icon: getExpectedToBeSingleDOM_Element({
          selector: "[data-icon='ERROR']", contextElement: Snackbar.DOM_Workpiece, expectedDOM_ElementSubtype: SVGElement
        })
      },

      [Snackbar.DecorativeVariations.warning]: {
        CSS_Class: `${ Snackbar.CSS_NAMESPACE }__WarningDecorativeVariation`,
        SVG_Icon: getExpectedToBeSingleDOM_Element({
          selector: "[data-icon='WARNING']", contextElement: Snackbar.DOM_Workpiece, expectedDOM_ElementSubtype: SVGElement
        })
      },

      [Snackbar.DecorativeVariations.guidance]: {
        CSS_Class: `${ Snackbar.CSS_NAMESPACE }__GuidanceDecorativeVariation`,
        SVG_Icon: getExpectedToBeSingleDOM_Element({
          selector: "[data-icon='GUIDANCE']", contextElement: Snackbar.DOM_Workpiece, expectedDOM_ElementSubtype: SVGElement
        })
      },

      [Snackbar.DecorativeVariations.success]: {
        CSS_Class: `${ Snackbar.CSS_NAMESPACE }__SuccessDecorativeVariation`,
        SVG_Icon: getExpectedToBeSingleDOM_Element({
          selector: "[data-icon='SUCCESS']", contextElement: Snackbar.DOM_Workpiece, expectedDOM_ElementSubtype: SVGElement
        })
      }

    };

    for (const decorativeVariationDependents of Object.values(Snackbar.decorativeVariationsDependents)) {
      delete decorativeVariationDependents.SVG_Icon.dataset.icon;
      decorativeVariationDependents.SVG_Icon.remove();
    }

    Snackbar.messageElement = getExpectedToBeSingleDOM_Element({
      selector: Snackbar.MESSAGE_ELEMENT_SELECTOR, contextElement: Snackbar.DOM_Workpiece
    });

    Snackbar.dismissingButtonElement = getExpectedToBeSingleDOM_Element({
      selector: Snackbar.DISMISSING_BUTTON_ELEMENT_SELECTOR,
      contextElement: Snackbar.DOM_Workpiece,
      expectedDOM_ElementSubtype: HTMLElement
    });

    return Snackbar.DOM_Workpiece;

  }

}


namespace Snackbar {

  export enum Positions {
    topLeft = "TOP_LEFT",
    topMiddle = "TOP_MIDDLE",
    topRight = "TOP_RIGHT",
    bottomLeft = "BOTTOM_LEFT",
    bottomMiddle = "BOTTOM_MIDDLE",
    bottomRight = "BOTTOM_RIGHT"
  }

  export type CompoundParameter = Readonly<{
    messageTextOrHTML: string;
    decorativeVariation: string;
    position?: Positions;
    parentElementSelector?: string;
    mountingPointElementSelector?: string;
    displayingDuration__seconds?: number;
    appearingTransitionDuration__seconds?: number;
  }>;

  export type DecorativeVariationDependents = Readonly<{
    CSS_Class: string;
    SVG_Icon: SVGElement;
  }>;

  export type DecorativeVariations = {
    readonly error: "ERROR";
    readonly warning: "WARNING";
    readonly guidance: "GUIDANCE";
    readonly success: "SUCCESS";
    [custom: string]: string;
  };

}


export default Snackbar;
