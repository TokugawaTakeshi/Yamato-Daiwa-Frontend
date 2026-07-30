import type { TargetElementDefinition } from "../Logic/Types/TargetElementDefinition";
import {
  getExpectedToBeSingleDOM_Element,
  resolveContextDOM_ElementPolymorphicSpecification
} from "@yamato-daiwa/es-extensions-browserjs";
import {
  Logger,
  InvalidParameterValueError,
  secondsToMilliseconds,
  roundUpToSpecificIntegerPlaceValue,
  isNeitherUndefinedNorNull
} from "@yamato-daiwa/es-extensions";


class CollapsingAnimation {

  public static animate(
    options: CollapsingAnimation.Options.PromiseReturningConfiguration
  ): Promise<void>;

  public static animate(
    options: CollapsingAnimation.Options.OptionalCallbackConfiguration
  ): number;

  public static animate(
    {
      callback,
      mustReturnPromise,
      mustReplaceWithElementOnceComplete,
      mustRemoveOnceComplete,
      finalStateFixation,
      ...options
    }: CollapsingAnimation.Options
  ): Promise<void> | number {

    const contextElement: Element | ParentNode | null =
        resolveContextDOM_ElementPolymorphicSpecification(options.contextElement);

    const targetElement: Element = options.targetElement instanceof Element ?
        options.targetElement :
        getExpectedToBeSingleDOM_Element({
          selector: options.targetElement.selector,
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
          occurrenceLocation: "CollapsingAnimation.animate(options)"
        });
    }


    const offsetHeightOfAnimatedElement__pixels: number = targetElement.offsetHeight;

    if (window.getComputedStyle(targetElement).boxSizing === "content-box") {
      targetElement.style.boxSizing = "border-box";
    }

    targetElement.style.height = `${ offsetHeightOfAnimatedElement__pixels }px`;
    targetElement.style.overflow = "hidden";

    const duration__milliseconds: number =
        "averageSpeed__pixelsPerSecond" in options ?
            roundUpToSpecificIntegerPlaceValue({
              targetNumber: secondsToMilliseconds(
                  Math.round(offsetHeightOfAnimatedElement__pixels / options.averageSpeed__pixelsPerSecond)
              ),
              trailingZerosCount: 3
            }) :
            secondsToMilliseconds(options.duration__seconds);


    const animating: Promise<void> = new Promise<void>(
      (resolve: () => void): void => {

        const animation: Animation = targetElement.animate(
          {
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0
          },
          {
            duration: duration__milliseconds
          }
        );

        animation.addEventListener(
          "finish",
          (): void => {

            targetElement.style.removeProperty("box-sizing");
            targetElement.style.removeProperty("height");
            targetElement.style.removeProperty("padding-top");
            targetElement.style.removeProperty("padding-bottom");
            targetElement.style.removeProperty("margin-top");
            targetElement.style.removeProperty("margin-bottom");

            if (finalStateFixation?.displayNoneStyle ?? true) {
              targetElement.style.display = "none";
            }

            if (finalStateFixation?.hiddenAttribute === true) {
              targetElement.setAttribute("hidden", "hidden");
            }

            if (finalStateFixation?.visibilityHiddenStyle === true) {
              targetElement.style.visibility = "hidden";
            }

            if (finalStateFixation?.zeroHeightAndOverflowHiddenStyles === true) {
              targetElement.style.height = "0";
            } else {
              targetElement.style.removeProperty("overflow");
            }


            callback?.();
            resolve();

            if (isNeitherUndefinedNorNull(mustReplaceWithElementOnceComplete)) {
              targetElement.replaceWith(mustReplaceWithElementOnceComplete);
            } else if (mustRemoveOnceComplete === true) {
              targetElement.remove();
            }

          }
        );

      }
    );

    return mustReturnPromise ? animating : duration__milliseconds;

  }

}


namespace CollapsingAnimation {

  export type Options =
      Options.PromiseReturningConfiguration |
      Options.OptionalCallbackConfiguration;

  export namespace Options {

    type Common =
        TargetElementDefinition &
        DurationDefinition &
        Readonly<{
          finalStateFixation?: FinalStateFixation;
          mustReplaceWithElementOnceComplete?: ChildNode;
          mustRemoveOnceComplete?: boolean;
          callback?: () => unknown;
        }>;

    export type DurationDefinition = Readonly<
      { averageSpeed__pixelsPerSecond: number; } |
      { duration__seconds: number; }
    >;

    export type FinalStateFixation = Readonly<{
      displayNoneStyle?: boolean;
      visibilityHiddenStyle?: boolean;
      hiddenAttribute?: boolean;
      zeroHeightAndOverflowHiddenStyles?: boolean;
    }>;

    export type PromiseReturningConfiguration =
        Common &
        Readonly<{ mustReturnPromise: true; }>;

    export type OptionalCallbackConfiguration =
        Common &
        Readonly<{ mustReturnPromise: false; }>;

  }

}


export default CollapsingAnimation;
