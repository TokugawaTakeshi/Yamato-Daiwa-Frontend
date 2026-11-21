using YamatoDaiwa.Frontend.Helpers;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Accordion;


public partial class Accordion : 
    Microsoft.AspNetCore.Components.ComponentBase, 
    YamatoDaiwa.Frontend.GUI_Components.Abstractions.IHTML_AttributesFallthrough
{

  public const string CSS_NAMESPACE = "Accordion--YDF";
  
  
  /* ━━━ Common Parameters ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  [Microsoft.AspNetCore.Components.EditorRequired]
  public required string title { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public string? headerTag { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public bool mustUseHeadingTagDecidedByHeadingLevelsCoordinatorForHeader { get; set; } = false;
  
  [Microsoft.AspNetCore.Components.Parameter]
  public required IEnumerable<string> panelAdditionalCSS_Classes { get; set; } = [];
  
  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  public Dictionary<string, object>? rootElementHTML_Attributes { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.RenderFragment? ChildContent { get; set; }
  
  
  /* ┅┅┅ Events ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.EventCallback<bool> onExpandingStartedEventHandler { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.EventCallback<bool> onExpandingEndedEventHandler { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.EventCallback<bool> onCollapsingStartedEventHandler { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.EventCallback<bool> onCollapsingEndedEventHandler { get; set; }

  
  /* ━━━ Expanding/Collapsing ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public bool initiallyExpanded { get; set; } = false;
  
  private readonly JavaScriptFunctionality javaScriptFunctionality = JavaScriptFunctionality.GetNotInitializedYetInstance();
  
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
  protected bool isExpanded = false;
  
  
  /* ━━━ Actions Handing ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected async Task onClickButton()
  {

    if (this.isExpanded)
    {

      await this.onCollapsingStartedEventHandler.InvokeAsync();
      
      await this.javaScriptFunctionality.CollapsingAnimation.Animate(
        new JavaScriptFunctionality._CollapsingAnimation.CompoundParameter
        {
          targetElement = this.rootElement,
          duration__seconds = 0.5f
        }
      );
      
      await this.onCollapsingEndedEventHandler.InvokeAsync();
      
      this.isExpanded = false;
      
      return;
      
    }
    
    
    await this.onExpandingStartedEventHandler.InvokeAsync();
    
    await this.javaScriptFunctionality.ExpandingAnimation.Animate(
        new JavaScriptFunctionality._ExpandingAnimation.CompoundParameter
          {
            targetElement = this.rootElement,
            duration__seconds = 0.25f
          }
        );
    
    await this.onExpandingEndedEventHandler.InvokeAsync();
    
    this.isExpanded = true;
    
  }
  
  
  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public enum StandardThemes { regular }

  protected internal static Type? CustomThemes;

  public static void defineThemes(Type customThemes)
  {
    YDF_ComponentsHelper.ValidateCustomTheme(customThemes);
    Accordion.CustomThemes = customThemes;
  }

  protected string _theme = nameof(Accordion.StandardThemes.regular);

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
        AssignThemeIfItIsValid<Accordion.StandardThemes>(value, Accordion.CustomThemes, ref this._theme);
  }

  protected internal static bool mustConsiderThemesCSS_ClassesAsCommon = YDF_ComponentsHelper.areThemesCSS_ClassesCommon;

  public static void considerThemesAsCommon()
  {
    Accordion.mustConsiderThemesCSS_ClassesAsCommon = true;
  }

  [Microsoft.AspNetCore.Components.Parameter]
  public bool areThemesCSS_ClassesCommon { get; set; } =
      YDF_ComponentsHelper.areThemesCSS_ClassesCommon || Accordion.mustConsiderThemesCSS_ClassesAsCommon;


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public enum StandardGeometricVariations
  {
    regular,
    minimalistic
  }

  protected internal static Type? CustomGeometricVariations;

  public static void defineGeometricVariations(Type customGeometricVariations)
  {
    YDF_ComponentsHelper.ValidateCustomGeometricVariation(customGeometricVariations);
    Accordion.CustomGeometricVariations = customGeometricVariations;
  }

  protected string _geometricVariation = nameof(Accordion.StandardGeometricVariations.regular);

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
    set => YDF_ComponentsHelper.AssignGeometricVariationIfItIsValid<Accordion.StandardGeometricVariations>(
      value, Accordion.CustomGeometricVariations, ref this._geometricVariation
    );
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public enum StandardDecorativeVariations
  {
    regular,
    minimalistic,
  }

  protected internal static Type? CustomDecorativeVariations;

  public static void defineDecorativeVariations(Type customDecorativeVariations) {
    YDF_ComponentsHelper.ValidateCustomDecorativeVariation(customDecorativeVariations);
    Accordion.CustomDecorativeVariations = customDecorativeVariations;
  }

  protected string _decorativeVariation = nameof(Accordion.StandardDecorativeVariations.regular);

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
  public object decorativeVariation
  {
    get => _decorativeVariation;
    set => YDF_ComponentsHelper.AssignDecorativeVariationIfItIsValid<Accordion.StandardDecorativeVariations>(
      value, Accordion.CustomDecorativeVariations, ref this._decorativeVariation
    );
  }
  
  
  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Root Element ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  private string classAttributeValueForRootElement => 
      YDF_ComponentsHelper.GenerateClassAttributeValueForRootElement(
        new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement
        {
          CSS_Namespace = Accordion.CSS_NAMESPACE,
          theme = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.Theme
          {
            activeOne = this._theme,
            standardOnes = typeof(Accordion.StandardThemes),
            customOnes = Accordion.CustomThemes,
            areThemesCSS_ClassesCommon = this.areThemesCSS_ClassesCommon 
          },
          geometricVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.GeometricVariation
          {
            activeOne = this._geometricVariation,
            standardOnes = typeof(Accordion.StandardGeometricVariations),
            customOnes = Accordion.CustomGeometricVariations
          },
          decorativeVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.DecorativeVariation
          {
            activeOne = this._decorativeVariation,
            standardOnes = typeof(Accordion.StandardDecorativeVariations),
            customOnes = Accordion.CustomDecorativeVariations
          },
          rootElementHTML_Attributes = this.rootElementHTML_Attributes
        }
      );

  
  /* ━━━ IDs ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Instance ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected readonly string INSTANCE_ID = Accordion.generateInstanceID();
  protected static uint counterForInstanceID_Generating = 0;

  public static string generateInstanceID()
  {
    Accordion.counterForInstanceID_Generating++;
    return $"ACCORDION--YDF-{ Accordion.counterForInstanceID_Generating }";
  }

  
  /* ┅┅┅ Elements HTML IDs ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected readonly string BUTTON_HTML_ID;
  protected readonly string PANEL_HTML_ID;
  
  
  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public Accordion()
  {
    this.BUTTON_HTML_ID = $"{ this.INSTANCE_ID }-BUTTON";
    this.PANEL_HTML_ID = $"{ this.INSTANCE_ID }-PANEL";
  }
  
}