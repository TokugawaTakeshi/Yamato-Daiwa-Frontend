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
  ClassRequiredInitializationHasNotBeenExecutedError,
  Logger
} from "@yamato-daiwa/es-extensions";
import YDF_ComponentsCoordinator from "../YDF_ComponentsCoordinator";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


@VueComponentConfiguration({ name: Snackbar.CSS_NAMESPACE })
class Snackbar extends VueComponent {

  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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


  /* ━━━ Instance Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ State ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected isRootElementMounted: boolean = true;


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


  /* ┅┅┅ Common Properties ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected isDisplaying: boolean = false;

  protected messageTextOrHTML: string = "";

  protected position: ElementOfPseudoEnumeration<Snackbar.Positions> = Snackbar.Positions.topMiddle;


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


  /* ━━━ Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Public Interface ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static display(
    {
      messageTextOrHTML,
      decorativeVariation,
      position = Snackbar.Positions.topMiddle,
      displayingDuration__seconds,
      appearingTransitionDuration__seconds
    }: Readonly<{
      messageTextOrHTML: string;
      decorativeVariation: string;
      position?: ElementOfPseudoEnumeration<Snackbar.Positions>;
      displayingDuration__seconds?: number;
      appearingTransitionDuration__seconds?: number;
    }>
  ): void {

    const selfSingleInstance: Snackbar = Snackbar.getSelfSingleInstance();

    selfSingleInstance.messageTextOrHTML = messageTextOrHTML;
    selfSingleInstance.decorativeVariation = decorativeVariation;
    selfSingleInstance.position = position;

  }


  /* ━━━ Transforming to Options API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static applyStaticMembersToInheritorTransformedToOptionAPI(inheritedComponent: typeof Snackbar): typeof Snackbar {
    return Object.defineProperties(
      inheritedComponent,
      {
        CSS_NAMESPACE: { value: Snackbar.CSS_NAMESPACE }
      }
    );
  }

}


namespace Snackbar {

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


//     public partial class Snackbar: Microsoft.AspNetCore.Components.ComponentBase
// {
//
//   /* ━━━ Common Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   /* ┅┅┅ Settings-Like ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
//   public const string CSS_NAMESPACE = "Snackbar--YDF";
//   protected const ushort MESSAGE_DISPLAYING_DURATION__SECONDS = 5;
//
//
//   /* ┅┅┅ State ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
//   public enum Positions {
//     topLeft,
//     topMiddle,
//     topRight,
//     bottomLeft,
//     bottomMiddle,
//     bottomRight
//   }
//
//   protected string message = "";
//   protected bool isDisplaying = false;
//
//
//   /* ━━━ Instance Management ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   protected static Snackbar? _selfSingleInstance = null;
//
//   public static Snackbar selfSingleInstance
//   {
//     get => _selfSingleInstance ?? throw new Exception("Snackbarが呼び出されたが当コンポーネントがマウントされていないようだ。");
//     set => _selfSingleInstance = value;
//   }
//
//   protected override void OnInitialized()
//   {
//     base.OnInitialized();
//     Snackbar._selfSingleInstance = this;
//   }
//
//
//
//   /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   public enum StandardThemes { regular }
//
//   protected internal static Type? CustomThemes;
//
//   public static void defineThemes(Type customThemes)
//   {
//     YDF_ComponentsHelper.ValidateCustomTheme(customThemes);
//     Snackbar.CustomThemes = customThemes;
//   }
//
//   protected string _theme = nameof(Snackbar.StandardThemes.regular);
//
//   [Microsoft.AspNetCore.Components.Parameter]
//   [
//     System.Diagnostics.CodeAnalysis.SuppressMessage(
//       category: "Microsoft.Performance",
//       checkId: "BL0007",
//       Justification = "Optimized equivalent is too complex: https://stackoverflow.com/a/79302962/4818123"
//     )
//   ]
//   public object theme
//   {
//     get => this._theme;
//     set => YDF_ComponentsHelper.
//         AssignThemeIfItIsValid<Snackbar.StandardThemes>(value, Snackbar.CustomThemes, ref this._theme);
//   }
//
//   protected internal static bool mustConsiderThemesCSS_ClassesAsCommon = YDF_ComponentsHelper.areThemesCSS_ClassesCommon;
//
//   public static void considerThemesAsCommon()
//   {
//     Snackbar.mustConsiderThemesCSS_ClassesAsCommon = true;
//   }
//
//   [Microsoft.AspNetCore.Components.Parameter]
//   public bool areThemesCSS_ClassesCommon { get; set; } =
//       YDF_ComponentsHelper.areThemesCSS_ClassesCommon || Snackbar.mustConsiderThemesCSS_ClassesAsCommon;
//
//
//   /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
//   public enum StandardGeometricVariations
//   {
//     regular,
//     stickyNoteLike
//   }
//
//   protected internal static Type? CustomGeometricVariations;
//
//   public static void defineGeometricVariations(Type customGeometricVariations)
//   {
//     YDF_ComponentsHelper.ValidateCustomGeometricVariation(customGeometricVariations);
//     Snackbar.CustomGeometricVariations = customGeometricVariations;
//   }
//
//   protected string _geometricVariation = nameof(Snackbar.StandardGeometricVariations.regular);
//
//   [Microsoft.AspNetCore.Components.Parameter]
//   [
//     System.Diagnostics.CodeAnalysis.SuppressMessage(
//       category: "Microsoft.Performance",
//       checkId: "BL0007",
//       Justification = "Optimized equivalent is too complex: https://stackoverflow.com/a/79302962/4818123"
//     )
//   ]
//   public object geometricVariation
//   {
//     get => this._geometricVariation;
//     set => YDF_ComponentsHelper.AssignGeometricVariationIfItIsValid<Snackbar.StandardGeometricVariations>(
//       value, Snackbar.CustomGeometricVariations, ref this._geometricVariation
//     );
//   }
//
//
//   /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
//   public enum StandardDecorativeVariations
//   {
//     error,
//     warning,
//     info,
//     success
//   }
//
//   protected internal static Type? CustomDecorativeVariations;
//
//   public static void defineDecorativeVariations(Type customDecorativeVariations) {
//     YDF_ComponentsHelper.ValidateCustomDecorativeVariation(customDecorativeVariations);
//     Snackbar.CustomDecorativeVariations = customDecorativeVariations;
//   }
//
//   protected string _decorativeVariation = nameof(StandardDecorativeVariations.info);
//
//   public required object decorativeVariation
//   {
//     get => _decorativeVariation;
//     set => YDF_ComponentsHelper.AssignDecorativeVariationIfItIsValid<Snackbar.StandardDecorativeVariations>(
//       value, Snackbar.CustomDecorativeVariations, ref this._decorativeVariation
//     );
//   }
//
//
//   /* ━━━ Programming Interface ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   public static async System.Threading.Tasks.Task displayForAWhile(
//     string message,
//     object decorativeVariation,
//     ushort displayingDuration__seconds = Snackbar.MESSAGE_DISPLAYING_DURATION__SECONDS
//   )
//   {
//
//     Snackbar.selfSingleInstance.message = message;
//     Snackbar.selfSingleInstance.decorativeVariation = decorativeVariation;
//     Snackbar.selfSingleInstance.isDisplaying = true;
//
//     await Snackbar.selfSingleInstance.InvokeAsync(Snackbar.selfSingleInstance.StateHasChanged);
//
//     await Task.Delay(
//       (int)TimeSpan.FromSeconds(displayingDuration__seconds).TotalMilliseconds
//     );
//
//     Snackbar.hide();
//
//   }
//
//   public static void hide()
//   {
//     Snackbar.selfSingleInstance.isDisplaying = false;
//     Snackbar.selfSingleInstance.message = "";
//     Snackbar.selfSingleInstance.InvokeAsync(Snackbar.selfSingleInstance.StateHasChanged);
//   }
//
//
//   /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   private string classAttributeValueForRootElement => YDF_ComponentsHelper.GenerateClassAttributeValueForRootElement(
//     new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement
//     {
//       CSS_Namespace = Snackbar.CSS_NAMESPACE,
//       theme = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.Theme
//       {
//         activeOne = this._theme,
//         standardOnes = typeof(Snackbar.StandardThemes),
//         customOnes = Snackbar.CustomThemes,
//         areThemesCSS_ClassesCommon = this.areThemesCSS_ClassesCommon
//       },
//       geometricVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.GeometricVariation
//       {
//         activeOne = this._geometricVariation,
//         standardOnes = typeof(Snackbar.StandardGeometricVariations),
//         customOnes = Snackbar.CustomGeometricVariations
//       },
//       decorativeVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.DecorativeVariation
//       {
//         activeOne = this._decorativeVariation,
//         standardOnes = typeof(Snackbar.StandardDecorativeVariations),
//         customOnes = Snackbar.CustomDecorativeVariations
//       }
//     }
//   );
//
//
//   /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   public abstract record Localization
//   {
//
//     public abstract DismissingButton dismissingButton { get; }
//
//     public record DismissingButton
//     {
//       public required string accessibilityGuidance { get; init; }
//     }
//
//   }
//
//   public static Localization localization = new SnackbarEnglishLocalization();
//
// }



// class Snackbar__YDF {
//
//   static CSS_NAMESPACE = "Snackbar--YDF";
//
//
//   /* ━━━ Positions ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   static Positions = {
//     topLeft: "TOP_LEFT",
//     topMiddle: "TOP_MIDDLE",
//     topRight: "TOP_RIGHT",
//     bottomLeft: "BOTTOM_LEFT",
//     bottomMiddle: "BOTTOM_MIDDLE",
//     bottomRight: "BOTTOM_RIGHT"
//   };
//
//
//   /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   static Themes = { regular: "REGULAR" };
//
//   static defineThemes(themesNames) {
//     return ComponentsAuxiliaries.defineThemes(themesNames, Snackbar__YDF);
//   }
//
//   static areThemesCSS_ClassesCommon = ComponentsAuxiliaries.areComponentsThemesCommon;
//
//   static considerThemesAsCommon() {
//     Snackbar__YDF.areThemesCSS_ClassesCommon = true;
//     return Snackbar__YDF;
//   }
//
//
//   /* ─── Geometric Variations ───────────────────────────────────────────────────────────────────────────────────── */
//   static GeometricVariations = { regular: "REGULAR" };
//
//   static defineGeometricVariations(geometricVariationsNames) {
//     return ComponentsAuxiliaries.defineGeometricVariations(geometricVariationsNames, Snackbar__YDF);
//   }
//
//
//   /* ─── Decorative Variations ──────────────────────────────────────────────────────────────────────────────────── */
//   static DecorativeVariations = {
//     error: "ERROR",
//     warning: "WARNING",
//     guidance: "GUIDANCE",
//     success: "SUCCESS"
//   };
//
//   static defineDecorativeVariations(decorativeVariationsNames) {
//     return ComponentsAuxiliaries.defineDecorativeVariations(decorativeVariationsNames, Snackbar__YDF);
//   }
//
//
//   /* ━━━ Properties Specification ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   static propertiesSpecification = {
//
//     textOrHTML: {
//       type: String,
//       isUndefinedForbidden: false,
//       isNullForbidden: true,
//       minimalCharactersCount: 1
//     },
//
//     position: {
//       type: String,
//       undefinedValueSubstitution: Snackbar__YDF.Positions.topMiddle,
//       isNullForbidden: true,
//       allowedAlternatives: Object.
//           entries(Snackbar__YDF.Positions).
//           map(([ key, value ]) => ({ key: `Snackbar__YDF.Positions.${ key }`, value }))
//     },
//
//     theme: {
//       type: String,
//       undefinedValueSubstitution: Snackbar__YDF.Themes.regular,
//       isNullForbidden: true,
//       allowedAlternatives: Object.
//           entries(Snackbar__YDF.Themes).
//           map(([ key, value ]) => ({ key: `Snackbar__YDF.Themes.${ key }`, value }))
//     },
//
//     areThemesCSS_ClassesCommon: {
//       type: Boolean,
//       undefinedValueSubstitution: Snackbar__YDF.areThemesCSS_ClassesCommon,
//       isNullForbidden: true
//     },
//
//     geometricVariation: {
//       type: String,
//       undefinedValueSubstitution: Snackbar__YDF.GeometricVariations.regular,
//       isNullForbidden: true,
//       allowedAlternatives: Object.
//           entries(Snackbar__YDF.GeometricVariations).
//           map(([ key, value ]) => ({ key: `Snackbar__YDF.GeometricVariations.${ key }`, value }))
//     },
//
//     decorativeVariation: {
//       type: String,
//       undefinedValueSubstitution: Snackbar__YDF.DecorativeVariations.guidance,
//       isNullForbidden: true,
//       allowedAlternatives: Object.
//           entries(Snackbar__YDF.DecorativeVariations).
//           map(([ key, value ]) => ({ key: `Snackbar__YDF.DecorativeVariations.${ key }`, value }))
//     }
//
//   };
//
//
//   /* ━━━ State Simulations Specification ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   static statesSimulationsSpecification = {
//
//     mounted: {
//       type: Boolean,
//       undefinedValueSubstitution: false,
//       isNullForbidden: true
//     },
//
//     hidden: {
//       type: Boolean,
//       undefinedValueSubstitution: false,
//       isNullForbidden: true
//     }
//
//   };
//
//
//   /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   static localization = SnackbarYDF_GUI_ComponentLocalization__English;
//
// }
//
//   abstract class Snackbar {
//
//   public static DecorativeVariations: Snackbar.DecorativeVariations = {
//     error: "ERROR",
//     warning: "WARNING",
//     guidance: "GUIDANCE",
//     success: "SUCCESS"
//   };
//
//
//   /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   protected static readonly sessionsQueue: PromisesQueue = new PromisesQueue();
//
//
//   /* ┅┅┅ Accessing to DOM ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
//   protected static readonly CSS_NAMESPACE: string = "Snackbar--YDF";
//
//   protected static readonly HIDDEN_STATE_CSS_CLASS: string = `${ Snackbar.CSS_NAMESPACE }-Transition__HiddenState`;
//   protected static readonly DISPLAYING_STATE_CSS_CLASS: string = `${ Snackbar.CSS_NAMESPACE }-Transition__DisplayingState`;
//
//   protected static readonly SVG_ICON_MOUNTING_POINT_ELEMENT_SELECTOR: string = ".Snackbar--YDF-SVG_MountingPoint";
//   protected static readonly SVG_ICON_SELECTOR: string = ".Snackbar--YDF-SVG_Icon";
//   protected static readonly MESSAGE_ELEMENT_SELECTOR: string = ".Snackbar--YDF-Message";
//   protected static readonly DISMISSING_BUTTON_ELEMENT_SELECTOR: string = ".Snackbar--YDF-DismissingButton";
//
//
//   /* ╍╍╍ Initialization on Demand ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
//   protected static DOM_Workpiece: HTMLElement | null = null;
//
//   protected static SVG_IconMountingPointElement: Element;
//   protected static decorativeVariationsDependents: { [ decoration: string ]: Snackbar.DecorativeVariationDependents; };
//
//   protected static messageElement: Element;
//   protected static dismissingButtonElement: HTMLElement;
//
//
//   /* ┅┅┅ Events Handling ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
//   protected static closingButtonEventListener: LeftClickEventListener;
//
//
//   /* ┅┅┅ Others Constants ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
//   protected static readonly DEFAULT_APPEARING_TRANSITION_DURATION__SECONDS: number = 0.5;
//   protected static readonly DEFAULT_DISAPPEARING_TRANSITION_DURATION__SECONDS: number = 0.2;
//   protected static readonly DEFAULT_DISPLAYING_DURATION__SECONDS: number = 5;
//
//
//   /* ━━━ Public Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   public static mountAndDisplayForAWhile(compoundParameter: Snackbar.CompoundParameter): void {
//
//     Snackbar.sessionsQueue.addFunctionAndStartExecutionIfHasNotStartedYet({
//       newAsynchronousFunction: async (): Promise<void> =>
//           Snackbar.mountAndDisplayForAWhileSingleInstance(compoundParameter),
//       behaviourOnSomePromiseFailed:
//           PromisesQueue.BEHAVIOUR_ON_SOME_PROMISE_FAILED.loggingAndProceedingToNextPromise
//     }).
//
//         catch(PromisesQueue.errorHandler);
//
//   }
//
//   public static async hideAndUnmount(): Promise<void> {
//
//     /* [ Theory ] It is possible when this method has been called before `mountAndDisplayForAWhile`. */
//     if (isNull(Snackbar.DOM_Workpiece)) {
//       return;
//     }
//
//
//     Snackbar.closingButtonEventListener.utilize();
//
//     Snackbar.DOM_Workpiece.style.transitionDuration = `${ Snackbar.DEFAULT_DISAPPEARING_TRANSITION_DURATION__SECONDS }s`;
//     Snackbar.DOM_Workpiece.classList.remove(Snackbar.DISPLAYING_STATE_CSS_CLASS);
//     Snackbar.DOM_Workpiece.classList.add(Snackbar.HIDDEN_STATE_CSS_CLASS);
//
//     await new BrowserJS_Timer({ period__seconds: Snackbar.DEFAULT_DISAPPEARING_TRANSITION_DURATION__SECONDS }).countDown();
//
//     Snackbar.DOM_Workpiece.remove();
//
//     Snackbar.DOM_Workpiece.classList.remove(
//       ...Object.values(Snackbar.decorativeVariationsDependents).map(
//       (decorativeVariationDependents: Snackbar.DecorativeVariationDependents): string =>
//           decorativeVariationDependents.CSS_Class
//       )
//     );
//
//     getExpectedToBeSingleDOM_Element({ selector: Snackbar.SVG_ICON_SELECTOR, contextElement: Snackbar.DOM_Workpiece }).
//         replaceWith(Snackbar.SVG_IconMountingPointElement);
//
//     Snackbar.messageElement.innerHTML = "";
//
//   }
//
//   public static defineDecorativeVariations(
//     decorativeVariationsData: ReadonlyArray<Readonly<{ key: string; } & Snackbar.DecorativeVariationDependents>>
//   ): void {
//
//     for (const { key, CSS_Class, SVG_Icon } of decorativeVariationsData) {
//       Snackbar.decorativeVariationsDependents[key] = { CSS_Class, SVG_Icon };
//       Snackbar.DecorativeVariations[key] = toScreamingSnakeCase(key);
//     }
//
//   }
//
//
//   /* ━━━ Protected Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
//   protected static async mountAndDisplayForAWhileSingleInstance(
//     {
//       messageTextOrHTML,
//       decorativeVariation,
//       position = Snackbar.Positions.topMiddle,
//       parentElementSelector = "body",
//       mountingPointElementSelector,
//       displayingDuration__seconds = Snackbar.DEFAULT_DISPLAYING_DURATION__SECONDS,
//       appearingTransitionDuration__seconds = Snackbar.DEFAULT_APPEARING_TRANSITION_DURATION__SECONDS
//     }: Snackbar.CompoundParameter
//   ): Promise<void> {
//
//     const initializedDOM_Workpiece: HTMLElement = Snackbar.DOM_Workpiece ?? Snackbar.initializeDOM_Workpiece();
//
//     const decorativeVariationsDependent: Snackbar.DecorativeVariationDependents =
//         Snackbar.decorativeVariationsDependents[decorativeVariation];
//
//     initializedDOM_Workpiece.classList.add(decorativeVariationsDependent.CSS_Class);
//     initializedDOM_Workpiece.classList.add(`${ Snackbar.CSS_NAMESPACE }__${ toUpperCamelCase(position) }Position`);
//
//     Snackbar.SVG_IconMountingPointElement.replaceWith(decorativeVariationsDependent.SVG_Icon);
//     Snackbar.messageElement.innerHTML = messageTextOrHTML;
//
//     Snackbar.closingButtonEventListener =
//         new LeftClickEventListener({
//           targetElement: Snackbar.dismissingButtonElement,
//           handler: Snackbar.hideAndUnmount
//         });
//
//     if (isUndefined(mountingPointElementSelector)) {
//       getExpectedToBeSingleDOM_Element({ selector: parentElementSelector }).appendChild(initializedDOM_Workpiece);
//     } else {
//       getExpectedToBeSingleDOM_Element({ selector: mountingPointElementSelector }).replaceWith(initializedDOM_Workpiece);
//     }
//
//     requestAnimationFrame((): void => {
//       initializedDOM_Workpiece.style.transitionDuration = `${ appearingTransitionDuration__seconds }s`;
//       initializedDOM_Workpiece.classList.remove(Snackbar.HIDDEN_STATE_CSS_CLASS);
//       initializedDOM_Workpiece.classList.add(Snackbar.DISPLAYING_STATE_CSS_CLASS);
//     });
//
//     await new BrowserJS_Timer({ period__seconds: displayingDuration__seconds }).countDown();
//
//     return Snackbar.hideAndUnmount();
//
//   }
//
//
//   protected static initializeDOM_Workpiece(): HTMLElement {
//
//     Snackbar.DOM_Workpiece = createDOM_ElementFromHTML_Code({
//       HTML_Code: componentHTML_Workpiece,
//       rootDOM_ElementSubtype: HTMLElement
//     });
//
//     Snackbar.SVG_IconMountingPointElement = getExpectedToBeSingleDOM_Element({
//       selector: Snackbar.SVG_ICON_MOUNTING_POINT_ELEMENT_SELECTOR,
//       contextElement: Snackbar.DOM_Workpiece
//     });
//
//     Snackbar.decorativeVariationsDependents = {
//
//       [Snackbar.DecorativeVariations.error]: {
//         CSS_Class: `${ Snackbar.CSS_NAMESPACE }__ErrorDecorativeVariation`,
//         SVG_Icon: getExpectedToBeSingleDOM_Element({
//           selector: "[data-icon='ERROR']", contextElement: Snackbar.DOM_Workpiece, expectedDOM_ElementSubtype: SVGElement
//         })
//       },
//
//       [Snackbar.DecorativeVariations.warning]: {
//         CSS_Class: `${ Snackbar.CSS_NAMESPACE }__WarningDecorativeVariation`,
//         SVG_Icon: getExpectedToBeSingleDOM_Element({
//           selector: "[data-icon='WARNING']", contextElement: Snackbar.DOM_Workpiece, expectedDOM_ElementSubtype: SVGElement
//         })
//       },
//
//       [Snackbar.DecorativeVariations.guidance]: {
//         CSS_Class: `${ Snackbar.CSS_NAMESPACE }__GuidanceDecorativeVariation`,
//         SVG_Icon: getExpectedToBeSingleDOM_Element({
//           selector: "[data-icon='GUIDANCE']", contextElement: Snackbar.DOM_Workpiece, expectedDOM_ElementSubtype: SVGElement
//         })
//       },
//
//       [Snackbar.DecorativeVariations.success]: {
//         CSS_Class: `${ Snackbar.CSS_NAMESPACE }__SuccessDecorativeVariation`,
//         SVG_Icon: getExpectedToBeSingleDOM_Element({
//           selector: "[data-icon='SUCCESS']", contextElement: Snackbar.DOM_Workpiece, expectedDOM_ElementSubtype: SVGElement
//         })
//       }
//
//     };
//
//     for (const decorativeVariationDependents of Object.values(Snackbar.decorativeVariationsDependents)) {
//       delete decorativeVariationDependents.SVG_Icon.dataset.icon;
//       decorativeVariationDependents.SVG_Icon.remove();
//     }
//
//     Snackbar.messageElement = getExpectedToBeSingleDOM_Element({
//       selector: Snackbar.MESSAGE_ELEMENT_SELECTOR, contextElement: Snackbar.DOM_Workpiece
//     });
//
//     Snackbar.dismissingButtonElement = getExpectedToBeSingleDOM_Element({
//       selector: Snackbar.DISMISSING_BUTTON_ELEMENT_SELECTOR,
//       contextElement: Snackbar.DOM_Workpiece,
//       expectedDOM_ElementSubtype: HTMLElement
//     });
//
//     return Snackbar.DOM_Workpiece;
//
//   }
//
// }
//
//
// namespace Snackbar {
//
//   export enum Positions {
//     topLeft = "TOP_LEFT",
//     topMiddle = "TOP_MIDDLE",
//     topRight = "TOP_RIGHT",
//     bottomLeft = "BOTTOM_LEFT",
//     bottomMiddle = "BOTTOM_MIDDLE",
//     bottomRight = "BOTTOM_RIGHT"
//   }
//
//   export type CompoundParameter = Readonly<{
//     messageTextOrHTML: string;
//     decorativeVariation: string;
//     position?: Positions;
//     parentElementSelector?: string;
//     mountingPointElementSelector?: string;
//     displayingDuration__seconds?: number;
//     appearingTransitionDuration__seconds?: number;
//   }>;
//
//   export type DecorativeVariationDependents = Readonly<{
//     CSS_Class: string;
//     SVG_Icon: SVGElement;
//   }>;
//
//   export type DecorativeVariations = {
//     readonly error: "ERROR";
//     readonly warning: "WARNING";
//     readonly guidance: "GUIDANCE";
//     readonly success: "SUCCESS";
//     [custom: string]: string;
//   };
//
// }
