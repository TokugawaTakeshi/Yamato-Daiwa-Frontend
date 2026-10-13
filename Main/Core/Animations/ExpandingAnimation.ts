import type { TargetElementDefinition } from "../Logic/Types/TargetElementDefinition";
import {
  getExpectedToBeSingleDOM_Element,
  resolveContextDOM_ElementPolymorphicSpecification
} from "@yamato-daiwa/es-extensions-browserjs";
import {
  Logger,
  InvalidParameterValueError,
  roundUpToSpecificIntegerPlaceValue,
  secondsToMilliseconds
} from "@yamato-daiwa/es-extensions";


class ExpandingAnimation {

  /* ━━━ Public Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  /* ┅┅┅ Replace Node and Animate ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static replaceNodeAndAnimate(
    options:
        ExpandingAnimation.Options.PromiseAPI &
        ExpandingAnimation.Options.Common &
        ExpandingAnimation.Options.NodeReplacement &
        TargetElementDefinition &
        ExpandingAnimation.Options.DurationDefinition
  ): Promise<void>;

  public static replaceNodeAndAnimate(
    options:
        ExpandingAnimation.Options.CallbackAPI &
        ExpandingAnimation.Options.Common &
        ExpandingAnimation.Options.NodeReplacement &
        TargetElementDefinition &
        ExpandingAnimation.Options.DurationDefinition
  ): void;

  public static replaceNodeAndAnimate(
    {
      nodeToReplace,
      mustReturnPromise,
      ...options
    }:
        Readonly<{ mustReturnPromise: boolean; }> &
        ExpandingAnimation.Options.Common &
        ExpandingAnimation.Options.NodeReplacement &
        TargetElementDefinition &
        ExpandingAnimation.Options.DurationDefinition
  ): Promise<void> | void {

    const targetElement: HTMLElement = ExpandingAnimation.resolveTargetElement(options);

    targetElement.style.visibility = "hidden";
    targetElement.removeAttribute("hidden");

    nodeToReplace.replaceWith(targetElement);

    if (mustReturnPromise) {
      return ExpandingAnimation.animate({
        ...options,
        mustReturnPromise: true,
        targetElement,
        /* eslint-disable-next-line no-void -- Need to set the context element to empty somehow. Better than `undefined`. */
        contextElement: void 0
      });
    }


    ExpandingAnimation.animate({
      ...options,
      mustReturnPromise: false,
      targetElement,
      /* eslint-disable-next-line no-void -- Need to set the context element to empty somehow. Better than `undefined`. */
      contextElement: void 0
    });

  }


  /* ┅┅┅ Animate ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static animate(
    options:
        ExpandingAnimation.Options.PromiseAPI &
        ExpandingAnimation.Options.Common &
        TargetElementDefinition &
        ExpandingAnimation.Options.DurationDefinition
  ): Promise<void>;

  public static animate(
    options:
        ExpandingAnimation.Options.CallbackAPI &
        ExpandingAnimation.Options.Common &
        TargetElementDefinition &
        ExpandingAnimation.Options.DurationDefinition
  ): void;

  public static animate(
    {
      mustReturnPromise,
      callback,
      ...options
    }:
        Readonly<{ mustReturnPromise: boolean; }> &
        ExpandingAnimation.Options.Common &
        TargetElementDefinition &
        ExpandingAnimation.Options.DurationDefinition
  ): Promise<void> | void {

    const targetElement: HTMLElement = ExpandingAnimation.resolveTargetElement(options);

    const animating: Promise<void> = new Promise<void>(
      (resolve: () => void): void => {
        ExpandingAnimation.animateTargetElement({
          ...options,
          targetElement,
          callback(): void {
            callback?.();
            resolve();
          }
        });
      }
    );

    if (mustReturnPromise) {
      return animating;
    }

  }


  /* ━━━ Private Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  private static resolveTargetElement(targetElementDefinition: TargetElementDefinition): HTMLElement {

    const contextElement: Element | ParentNode | null =
        resolveContextDOM_ElementPolymorphicSpecification(targetElementDefinition.contextElement);

    const targetElement: Element = targetElementDefinition.targetElement instanceof Element ?
        targetElementDefinition.targetElement :
        getExpectedToBeSingleDOM_Element({
          selector: targetElementDefinition.targetElement.selector,
          contextElement
        });

    if (!(targetElement instanceof HTMLElement)) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new InvalidParameterValueError({
          parameterNumber: 1,
          parameterName: "options",
            messageSpecificPart:
                "The animated element must be the instance of HTMLElement while the element referenced in options " +
                  "is not such one."
          }),
          title: InvalidParameterValueError.localization.defaultTitle,
          occurrenceLocation: "ExpandingAnimation.resolveTargetElement(targetElementDefinition)"
        });
     }


     return targetElement;

  }

  private static animateTargetElement(
    {
      targetElement,
      callback,
      ...options
    }:
      Readonly<{
        targetElement: HTMLElement;
        callback: () => void;
      }> &
      ExpandingAnimation.Options.DurationDefinition
  ): void {

    targetElement.style.position = "absolute";
    targetElement.style.visibility = "hidden";
    targetElement.hidden = false;

    if (targetElement.style.display === "none") {
      targetElement.style.removeProperty("display");
    }

    const computedStylesOfAnimatedElement: CSSStyleDeclaration = getComputedStyle(targetElement);
    const offsetHeightOfAnimatedElement__pixels: number = targetElement.offsetHeight;

    const finalPaddingTop: string = computedStylesOfAnimatedElement.paddingTop;
    const finalPaddingBottom: string = computedStylesOfAnimatedElement.paddingBottom;
    const finalMarginTop: string = computedStylesOfAnimatedElement.marginTop;
    const finalMarginBottom: string = computedStylesOfAnimatedElement.marginBottom;

    if (computedStylesOfAnimatedElement.boxSizing === "content-box") {
      targetElement.style.boxSizing = "border-box";
    }

    targetElement.style.removeProperty("position");
    targetElement.style.visibility = "visible";
    targetElement.style.overflow = "hidden";
    targetElement.style.height = "0";
    targetElement.style.marginTop = "0";
    targetElement.style.marginBottom = "0";
    targetElement.style.paddingTop = "0";
    targetElement.style.paddingBottom = "0";

    const animation: Animation = targetElement.animate(
      {
        height: `${ offsetHeightOfAnimatedElement__pixels }px`,
        marginTop: finalMarginTop,
        marginBottom: finalMarginBottom,
        paddingTop: finalPaddingTop,
        paddingBottom: finalPaddingBottom
      },
      {
        duration:
            "averageSpeed__pixelsPerSecond" in options ?
                roundUpToSpecificIntegerPlaceValue({
                  targetNumber: secondsToMilliseconds(
                      Math.round(offsetHeightOfAnimatedElement__pixels / options.averageSpeed__pixelsPerSecond)
                  ),
                  trailingZerosCount: 3
                }) :
                secondsToMilliseconds(options.duration__seconds)
      }
    );

    animation.addEventListener(
      "finish",
      (): void => {

        targetElement.style.removeProperty("box-sizing");
        targetElement.style.removeProperty("visibility");
        targetElement.style.removeProperty("overflow");
        targetElement.style.removeProperty("height");
        targetElement.style.removeProperty("margin-top");
        targetElement.style.removeProperty("margin-bottom");
        targetElement.style.removeProperty("padding-top");
        targetElement.style.removeProperty("padding-bottom");

        callback();

      }
    );

  }

}


namespace ExpandingAnimation {

  export namespace Options {

    export type NodeReplacement = Readonly<{
      nodeToReplace: ChildNode;
    }>;

    export type DurationDefinition = Readonly<
      { averageSpeed__pixelsPerSecond: number; } |
      { duration__seconds: number; }
    >;

    export type CallbackAPI = Readonly<{
      mustReturnPromise: false;
    }>;

    export type PromiseAPI = Readonly<{
      mustReturnPromise: true;
    }>;

    export type Common = Readonly<{
      callback?: () => unknown;
    }>;

  }

}


export default ExpandingAnimation;
