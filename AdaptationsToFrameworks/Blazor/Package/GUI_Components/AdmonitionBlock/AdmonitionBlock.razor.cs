using YamatoDaiwa.Frontend.Helpers;


namespace YamatoDaiwa.Frontend.GUI_Components.AdmonitionBlock;


public partial class AdmonitionBlock :
    Microsoft.AspNetCore.Components.ComponentBase,
    YamatoDaiwa.Frontend.GUI_Components.Abstractions.IHTML_AttributesFallthrough
{

  public const string CSS_NAMESPACE = "AdmonitionBlock--YDF";
  
  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  public Dictionary<string, object>? rootElementHTML_Attributes { get; set; }

  [Microsoft.AspNetCore.Components.Parameter]
  public string? title { get; set; }


  /* ━━━ Child Content ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.RenderFragment? ChildContent { get; set; }

  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.RenderFragment? CustomSVG_Icon { get; set; }

  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.RenderFragment? ActionBarContent { get; set; }


  /* ━━━ Dismissing ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public bool dismissible { get; set; } = false;

  protected readonly JavaScriptFunctionality javaScriptFunctionality = JavaScriptFunctionality.GetNotInitializedYetInstance();
  
  [Microsoft.AspNetCore.Components.Inject]
  public required Microsoft.JSInterop.IJSRuntime JSRuntime
  {
    get;
    set
    {
      field = value;
      _ = javaScriptFunctionality.Load(JSRuntime);
    }
  }

  
  protected Microsoft.AspNetCore.Components.ElementReference rootElement;

  protected bool isDisplaying = true;

  [Microsoft.AspNetCore.Components.Inject]
  protected Microsoft.JSInterop.IJSRuntime javaScriptRuntime { get; set; } = null!;

  protected async Task onClickDismissingButton()
  {

    await this.javaScriptFunctionality.CollapsingAnimation.Animate(
      new JavaScriptFunctionality._CollapsingAnimation.CompoundParameter
      {
        targetElement = this.rootElement,
        duration__seconds = 1
      }
    );
    
    this.isDisplaying = false;

  }


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public enum StandardThemes { regular }

  protected internal static Type? CustomThemes;

  public static void defineThemes(Type customThemes)
  {
    YDF_ComponentsHelper.ValidateCustomTheme(customThemes);
    AdmonitionBlock.CustomThemes = customThemes;
  }

  protected string _theme = nameof(AdmonitionBlock.StandardThemes.regular);

  [Microsoft.AspNetCore.Components.Parameter]
  [
    System.Diagnostics.CodeAnalysis.SuppressMessage(
      category: "Microsoft.Performance",
      checkId: "BL0007",
      Justification =
          "Validation via setter is not recommended, but no better alternative has been suggested. " +
          "\"OnParametersSet\" does not give the API for watching of specific property."
    )
  ]
  public object theme
  {
    get => this._theme;
    set => YDF_ComponentsHelper.
        AssignThemeIfItIsValid<AdmonitionBlock.StandardThemes>(value, AdmonitionBlock.CustomThemes, ref this._theme);
  }

  protected internal static bool mustConsiderThemesCSS_ClassesAsCommon = YDF_ComponentsHelper.areThemesCSS_ClassesCommon;

  public static void considerThemesAsCommon()
  {
    AdmonitionBlock.mustConsiderThemesCSS_ClassesAsCommon = true;
  }

  [Microsoft.AspNetCore.Components.Parameter]
  public bool areThemesCSS_ClassesCommon { get; set; } =
      YDF_ComponentsHelper.areThemesCSS_ClassesCommon || AdmonitionBlock.mustConsiderThemesCSS_ClassesAsCommon;


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public enum StandardGeometricVariations
  {
    regular,
    stickyNoteLike
  }

  protected internal static Type? CustomGeometricVariations;

  public static void defineGeometricVariations(Type customGeometricVariations)
  {
    YDF_ComponentsHelper.ValidateCustomGeometricVariation(customGeometricVariations);
    AdmonitionBlock.CustomGeometricVariations = customGeometricVariations;
  }

  protected string _geometricVariation = nameof(AdmonitionBlock.StandardGeometricVariations.regular);

  [Microsoft.AspNetCore.Components.Parameter]
  [
    System.Diagnostics.CodeAnalysis.SuppressMessage(
      category: "Microsoft.Performance",
      checkId: "BL0007",
      Justification = 
          "Validation via setter is not recommended, but no better alternative has been suggested. " +
          "\"OnParametersSet\" does not give the API for watching of specific property."
    )
  ]
  public object geometricVariation
  {
    get => this._geometricVariation;
    set => YDF_ComponentsHelper.AssignGeometricVariationIfItIsValid<AdmonitionBlock.StandardGeometricVariations>(
      value, AdmonitionBlock.CustomGeometricVariations, ref this._geometricVariation
    );
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public enum StandardDecorativeVariations
  {
    notice,
    error,
    warning,
    success,
    guidance,
    question
  }

  protected internal static Type? CustomDecorativeVariations;

  public static void defineDecorativeVariations(Type customDecorativeVariations) {
    YDF_ComponentsHelper.ValidateCustomDecorativeVariation(customDecorativeVariations);
    AdmonitionBlock.CustomDecorativeVariations = customDecorativeVariations;
  }

  protected string _decorativeVariation = null!;

  [Microsoft.AspNetCore.Components.Parameter]
  [Microsoft.AspNetCore.Components.EditorRequired]
  [
    System.Diagnostics.CodeAnalysis.SuppressMessage(
      category: "Microsoft.Performance",
      checkId: "BL0007",
      Justification = 
          "Validation via setter is not recommended, but no better alternative has been suggested. " +
          "\"OnParametersSet\" does not give the API for watching of specific property."
    )
  ]
  public required object decorativeVariation
  {
    get => _decorativeVariation;
    set => YDF_ComponentsHelper.AssignDecorativeVariationIfItIsValid<AdmonitionBlock.StandardDecorativeVariations>(
      value, AdmonitionBlock.CustomDecorativeVariations, ref this._decorativeVariation
    );
  }


  /* ━━━ SVG Icon ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public bool hasDefaultSVG_Icon { get; set; } = false;


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected string classAttributeValueForRootElement => 
      YDF_ComponentsHelper.GenerateClassAttributeValueForRootElement(
        new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement
        {
          CSS_Namespace = AdmonitionBlock.CSS_NAMESPACE,
          theme = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.Theme
          {
            activeOne = this._theme,
            standardOnes = typeof(AdmonitionBlock.StandardThemes),
            customOnes = AdmonitionBlock.CustomThemes,
            areThemesCSS_ClassesCommon = this.areThemesCSS_ClassesCommon 
          },
          geometricVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.GeometricVariation
          {
            activeOne = this._geometricVariation,
            standardOnes = typeof(AdmonitionBlock.StandardGeometricVariations),
            customOnes = AdmonitionBlock.CustomGeometricVariations
          },
          decorativeVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.DecorativeVariation
          {
            activeOne = this._decorativeVariation,
            standardOnes = typeof(AdmonitionBlock.StandardDecorativeVariations),
            customOnes = AdmonitionBlock.CustomDecorativeVariations
          },
          rootElementHTML_Attributes = this.rootElementHTML_Attributes
        }
      );
  

  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public abstract record Localization(
    AdmonitionBlock.Localization.DismissingButton dismissingButton
  )
  {
    public record DismissingButton(string accessibilityGuidance);
  }

  public static Localization localization = new AdmonitionBlockEnglishLocalization();


  /* ━━━ IDs ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Instance ID ──────────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly string INSTANCE_ID = AdmonitionBlock.generateInstanceID();
  protected static uint counterForInstanceID_Generating = 0;

  public static string generateInstanceID()
  {
    AdmonitionBlock.counterForInstanceID_Generating++;
    return $"ADMONITION_BLOCK--YDF-{ AdmonitionBlock.counterForInstanceID_Generating }";
  }


  /* ─── Root Element HTML ID ─────────────────────────────────────────────────────────────────────────────────────── */
  [Microsoft.AspNetCore.Components.Parameter]
  public string? HTML_ID { get; set; }


  /* ─── Title HTML ID ────────────────────────────────────────────────────────────────────────────────────────────── */
  protected string TITLE_HTML_ID => $"{ this.INSTANCE_ID }-TITLE";

}