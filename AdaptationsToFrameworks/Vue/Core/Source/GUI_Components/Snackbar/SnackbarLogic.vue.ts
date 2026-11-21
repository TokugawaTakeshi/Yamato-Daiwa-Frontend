/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Validations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import type VuePropertyValidator from "../_VuePropertiesValidators/VuePropertyValidator";
import ThemeVuePropertyValidator from "../_VuePropertiesValidators/ThemeVuePropertyValidator";
import BooleanVuePropertyValidator from "../_VuePropertiesValidators/BooleanVuePropertyValidator";
import GeometricVariationVuePropertyValidator from "../_VuePropertiesValidators/GeometricVariationVuePropertyValidator";
import preventNullForOptionalVueProperty from "../_Decorators/preventNullForOptionalVueProperty";

/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { type SnackbarLocalization, SnackbarYDF_GUI_ComponentLocalization__English } from "@yamato-daiwa/frontend";

/* ┅┅┅ Framework ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  ComponentBase as VueComponentConfiguration,
  Vue as VueComponent,
  Prop as VueProperty
} from "vue-facing-decorator";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import AccessibleFromTemplateAsNonReactive from "../_Decorators/AccessibleFromTemplateAsNonReactive";
import {
  type ElementOfPseudoEnumeration,
  PromisesQueue,
  Logger,
  ClassRequiredInitializationHasNotBeenExecutedError,
  ImproperUsageError,
  secondsToMilliseconds,
  toUpperCamelCase,
  isNotNull
} from "@yamato-daiwa/es-extensions";
import YDF_ComponentsCoordinator from "../YDF_ComponentsCoordinator";
import { BrowserJS_Timer } from "@yamato-daiwa/es-extensions-browserjs";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


@VueComponentConfiguration({ name: Snackbar.CSS_NAMESPACE })
class Snackbar extends VueComponent {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Public ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly CSS_NAMESPACE: string = "Snackbar--YDF";

  @AccessibleFromTemplateAsNonReactive
  public static localization: SnackbarLocalization = SnackbarYDF_GUI_ComponentLocalization__English;

  @AccessibleFromTemplateAsNonReactive
  public static readonly Positions: Snackbar.Positions = {
    topLeft: "TOP_LEFT",
    topMiddle: "TOP_MIDDLE",
    topRight: "TOP_RIGHT",
    bottomLeft: "BOTTOM_LEFT",
    bottomMiddle: "BOTTOM_MIDDLE",
    bottomRight: "BOTTOM_RIGHT"
  };


  /* ┅┅┅ Protected ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected static readonly sessionsQueue: PromisesQueue = new PromisesQueue();

  protected static readonly MESSAGE_DISPLAYING_DEFAULT_DURATION__SECONDS: number = 5;
  protected static readonly APPEARING_TRANSITION_DEFAULT_DURATION__SECONDS: number = 0.5;
  protected static readonly DISAPPEARING_TRANSITION_DEFAULT_DURATION__SECONDS: number = 0.2;

  @AccessibleFromTemplateAsNonReactive
  protected static readonly HIDDEN_STATE_CSS_CLASS: string = `${ Snackbar.CSS_NAMESPACE }-Transition__HiddenState`;

  @AccessibleFromTemplateAsNonReactive
  protected static readonly DISPLAYING_STATE_CSS_CLASS: string = `${ Snackbar.CSS_NAMESPACE }-Transition__DisplayingState`;


  /* ━━━ Instance Fields & Getters ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected isDisplaying: boolean = false;

  protected messageTextOrHTML: string = "";

  protected position: ElementOfPseudoEnumeration<Snackbar.Positions> = Snackbar.Positions.topMiddle;

  protected appearingTransitionDuration__milliseconds: number =
      secondsToMilliseconds(Snackbar.DISAPPEARING_TRANSITION_DEFAULT_DURATION__SECONDS);

  protected transitionDuration__milliseconds(): number {
    return this.isDisplaying ?
        secondsToMilliseconds(Snackbar.APPEARING_TRANSITION_DEFAULT_DURATION__SECONDS) :
        secondsToMilliseconds(Snackbar.DISAPPEARING_TRANSITION_DEFAULT_DURATION__SECONDS);
  }


  /* ━━━ Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Public Interface ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static displayForAWhile(options: Snackbar.Options): void {

    Snackbar.sessionsQueue.addFunctionAndStartExecutionIfHasNotStartedYet({
      newAsynchronousFunction: async (): Promise<void> => Snackbar.getSelfSingleInstance().display(options),
      behaviourOnSomePromiseFailed:
          PromisesQueue.BEHAVIOUR_ON_SOME_PROMISE_FAILED.loggingAndProceedingToNextPromise
    }).

        catch(PromisesQueue.errorHandler);

  }

  protected async display(
    {
      messageTextOrHTML,
      decorativeVariation,
      position = Snackbar.Positions.topMiddle,
      displayingDuration__seconds = Snackbar.MESSAGE_DISPLAYING_DEFAULT_DURATION__SECONDS,
      appearingTransitionDuration__seconds = Snackbar.APPEARING_TRANSITION_DEFAULT_DURATION__SECONDS
    }: Snackbar.Options
  ): Promise<void> {

    this.messageTextOrHTML = messageTextOrHTML;
    this.decorativeVariation = decorativeVariation;
    this.position = position;
    this.appearingTransitionDuration__milliseconds = secondsToMilliseconds(appearingTransitionDuration__seconds);

    this.isDisplaying = true;

    await new BrowserJS_Timer({ period__seconds: displayingDuration__seconds }).countDown();

    this.isDisplaying = false;

    this.messageTextOrHTML = "";

  }


  /* ┅┅┅ Events Handling ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected onClosedButtonClicked(): void {

    this.isDisplaying = false;

    this.messageTextOrHTML = "";

  }


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly Themes: Snackbar.Themes = { regular: "REGULAR" };

  @VueProperty({
    default: Snackbar.Themes.regular,
    validator: ThemeVuePropertyValidator(Snackbar)
  })
  @preventNullForOptionalVueProperty
  protected readonly theme!: string;

  public static defineThemes(themesNames: ReadonlyArray<string>): typeof Snackbar {
    return YDF_ComponentsCoordinator.defineThemes(themesNames, Snackbar);
  }

  protected static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areThemesCSS_ClassesCommon;

  public static considerThemesAsCommon(): void {
    Snackbar.areThemesCSS_ClassesCommon = true;
  }

  @VueProperty({
    default: Snackbar.areThemesCSS_ClassesCommon,
    get validator(): VuePropertyValidator {
      return BooleanVuePropertyValidator({
        propertyName: "areThemesCSS_ClassesCommon",
        componentName: Snackbar.CSS_NAMESPACE,
        isPropertyRequired: this.required === true
      });
    }
  })
  @preventNullForOptionalVueProperty
  protected readonly areThemesCSS_ClassesCommon!: boolean;


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: Snackbar.GeometricVariations = {
    regular: "REGULAR",
    stickyNoteLike: "STICKY_NOTE_LIKE"
  };

  @VueProperty({
    default: Snackbar.GeometricVariations.regular,
    validator: GeometricVariationVuePropertyValidator(Snackbar)
  })
  @preventNullForOptionalVueProperty
  protected readonly geometricVariation!: string;

  public static defineGeometricVariations(geometricVariationsNames: ReadonlyArray<string>): typeof Snackbar {
    return YDF_ComponentsCoordinator.defineGeometricVariations(geometricVariationsNames, Snackbar);
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  @AccessibleFromTemplateAsNonReactive
  public static readonly DecorativeVariations: Snackbar.DecorativeVariations = {
    error: "ERROR",
    warning: "WARNING",
    guidance: "GUIDANCE",
    success: "SUCCESS"
  };

  protected decorativeVariation: string = Snackbar.DecorativeVariations.guidance;

  public static defineDecorativeVariations(decorativeVariationsNames: ReadonlyArray<string>): typeof Snackbar {
    return YDF_ComponentsCoordinator.defineDecorativeVariations(decorativeVariationsNames, Snackbar);
  }


  /* ┅┅┅ Lifecycle Hooks ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected mounted(): void {

    if (isNotNull(Snackbar.selfSingleInstance)) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance:
            new ImproperUsageError(
              "\"Snackbar\" component has been attempted to mount twice while intended to be mounted once (per page)."
            ),
        title: ClassRequiredInitializationHasNotBeenExecutedError.localization.defaultTitle,
        occurrenceLocation: "Snackbar.mounted()"
      });
    }


    Snackbar.selfSingleInstance = this;

  }


  /* ━━━ Instance Management ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static selfSingleInstance: Snackbar | null = null;

  protected static getSelfSingleInstance(): Snackbar {
    return this.selfSingleInstance ??
        ((): never => {
          Logger.throwErrorWithFormattedMessage({
            errorInstance: new ClassRequiredInitializationHasNotBeenExecutedError({
              customMessage: "Unable to use \"Snackbar\" because it has not been mounted."
            }),
            title: ClassRequiredInitializationHasNotBeenExecutedError.localization.defaultTitle,
            occurrenceLocation: "Snackbar.getSelfSingleInstance()"
          });
        })();
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected get rootElementModifierCSS_Classes(): Array<string> {
    return YDF_ComponentsCoordinator.generateRootElementModifierCSS_Classes({
      CSS_Namespace: Snackbar.CSS_NAMESPACE,
      activeTheme: this.theme,
      allThemes: Snackbar.Themes,
      areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
      activeGeometricVariation: this.geometricVariation,
      allGeometricVariations: Snackbar.GeometricVariations,
      activeDecorativeVariation: this.decorativeVariation,
      allDecorativeVariations: Snackbar.DecorativeVariations,
      other: [ `${ Snackbar.CSS_NAMESPACE }__${ toUpperCamelCase(this.position) }Position` ]
    });
  }

  /* ━━━ Transforming to Options API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static applyStaticMembersToInheritorTransformedToOptionAPI(inheritedComponent: typeof Snackbar): typeof Snackbar {
    return Object.defineProperties(
      inheritedComponent,
      {
        CSS_NAMESPACE: { value: Snackbar.CSS_NAMESPACE },
        Positions: { value: Snackbar.Positions },
        Themes: { value: Snackbar.Themes },
        defineThemes: { value: Snackbar.defineThemes },
        GeometricVariations: { value: Snackbar.GeometricVariations },
        defineGeometricVariations: { value: Snackbar.defineGeometricVariations },
        DecorativeVariations: { value: Snackbar.DecorativeVariations },
        defineDecorativeVariations: { value: Snackbar.defineDecorativeVariations },
        localization: { value: Snackbar.localization }
      }
    );
  }

}


namespace Snackbar {

  export type Options = Readonly<{
    messageTextOrHTML: string;
    decorativeVariation: string;
    position?: ElementOfPseudoEnumeration<Positions>;
    displayingDuration__seconds?: number;
    appearingTransitionDuration__seconds?: number;
  }>;

  export type Positions = Readonly<{
    topLeft: "TOP_LEFT";
    topMiddle: "TOP_MIDDLE";
    topRight: "TOP_RIGHT";
    bottomLeft: "BOTTOM_LEFT";
    bottomMiddle: "BOTTOM_MIDDLE";
    bottomRight: "BOTTOM_RIGHT";
  }>;

  export type Themes = {
    readonly regular: "REGULAR";
    [themeName: string]: string;
  };

  export type GeometricVariations = {
    readonly regular: "REGULAR";
    [variationName: string]: string;
  };

  export type DecorativeVariations = {
    readonly error: "ERROR";
    readonly warning: "WARNING";
    readonly guidance: "GUIDANCE";
    readonly success: "SUCCESS";
    [variationName: string]: string;
  };

}


export default Snackbar;
