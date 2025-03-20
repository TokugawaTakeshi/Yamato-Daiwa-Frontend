using Microsoft.JSInterop;
using YamatoDaiwa.Frontend.GUI_Components.Abstractions;
using YamatoDaiwa.Frontend.Helpers;


namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Buttons.Plain;


[System.Diagnostics.CodeAnalysis.SuppressMessage("ReSharper", "MemberCanBePrivate.Global")]
public partial class Button :
  Microsoft.AspNetCore.Components.ComponentBase,
  IHTML_AttributesFallthrough,
  ISupportsFlexibleExternalCSS_ClassesSpecifyingForRootElement
{
  
  public const string CSS_NAMESPACE = "Button--YDF";
  
  protected Microsoft.AspNetCore.Components.ElementReference rootElement;
  
  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  public IDictionary<string, object>? rootElementHTML_Attributes { get; set; }
  
  
  /* ━━━ HTML Type ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public enum HTML_Types
  {
    regular,
    submit,
    inputButton,
    inputSubmit,
    inputReset
  }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public HTML_Types HTML_Type { get; set; } = HTML_Types.regular;
  
  
  /* ━━━ Common Properties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Textings ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  [Microsoft.AspNetCore.Components.Parameter]
  public string? label { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public string? accessibilityGuidance { get; set; }
  
  
  /* ─── Links ────────────────────────────────────────────────────────────────────────────────────────────────────── */
  [Microsoft.AspNetCore.Components.Parameter] 
  public string? internalURN { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter] 
  public string? externalURI { get; set; }
  
  
  /* ─── Status ───────────────────────────────────────────────────────────────────────────────────────────────────── */
  [Microsoft.AspNetCore.Components.Parameter] 
  public bool disabled { get; set; } = false;
  
  [Microsoft.AspNetCore.Components.Parameter]
  public bool toggled { get; set; } = false;
  
  [Microsoft.AspNetCore.Components.Parameter]
  public bool mustOpenLinkInNewTab { get; set; } = false;
  
  [Microsoft.AspNetCore.Components.Parameter]
  public bool mustRequestNotFollowLinkForCrawlingToSearchEngine { get; set; } = false;
  
  
  /* ━━━ Root Element Tag Name ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected bool isButtonTheTagNameOfRootElement =>
      String.IsNullOrEmpty(this.internalURN) &&
      String.IsNullOrEmpty(this.externalURI) &&
      HTML_Type is HTML_Types.regular or HTML_Types.submit;
  
  protected bool isInputTheTagNameOfRootElement => 
      HTML_Type is HTML_Types.inputButton or HTML_Types.inputSubmit or HTML_Types.inputReset;
  
  protected bool isAnchorTheTagNameOfRootElement => !String.IsNullOrEmpty(this.externalURI);
  
  private bool isNavLinkTheRootElement => !String.IsNullOrEmpty(this.internalURN);

  
  /* ━━━ Root Element Attributes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected string? typeAttributeValueOfButtonOrInputElement {
  
    get
    {

      if (!this.isButtonTheTagNameOfRootElement && !this.isInputTheTagNameOfRootElement)
      {
        return null;
      }

      
      return this.HTML_Type switch
      {
        HTML_Types.regular => "button",
        HTML_Types.submit => "submit",
        HTML_Types.inputButton => "button",
        HTML_Types.inputSubmit => "submit",
        HTML_Types.inputReset => "reset",
        _ => null
      };
      
    }
  
  }
  
  protected string? relAttributeValueForAnchorTag => 
      String.
        Join(
          " ", 
          new[]
            {
              mustOpenLinkInNewTab ? "noopener" : null,
              mustOpenLinkInNewTab ? "noreferrer" : null,
              mustRequestNotFollowLinkForCrawlingToSearchEngine ? "nofollow" : null
            }.
            Where(element => element is not null)
        ) is { Length: > 0 } relAttributeValue ? 
              relAttributeValue : 
              null;
  
  /* ━━━ Events Handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.EventCallback<Microsoft.AspNetCore.Components.Web.MouseEventArgs> onClick { get; set; }
  
  
  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public enum StandardThemes { regular }

  protected internal static Type? CustomThemes;

  public static void defineThemes(Type customThemes)
  {
    YDF_ComponentsHelper.ValidateCustomTheme(customThemes);
    Button.CustomThemes = customThemes;
  }

  protected string _theme = nameof(Button.StandardThemes.regular);
  
  [Microsoft.AspNetCore.Components.Parameter]
  [
    System.Diagnostics.CodeAnalysis.SuppressMessage(
      "Microsoft.Performance", 
      "BL0007", 
      Justification = "Optimized equivalent is too complex: https://stackoverflow.com/a/79302962/4818123"
    )
  ]
  public object theme
  {
    get => this._theme;
    set => YDF_ComponentsHelper.
        AssignThemeIfItIsValid<Button.StandardThemes>(value, Button.CustomThemes, ref this._theme);
  }
  
  protected internal static bool mustConsiderThemesCSS_ClassesAsCommon = YDF_ComponentsHelper.areThemesCSS_ClassesCommon;

  public static void considerThemesAsCommon()
  {
    Button.mustConsiderThemesCSS_ClassesAsCommon = true;
  }

  [Microsoft.AspNetCore.Components.Parameter]
  public bool areThemesCSS_ClassesCommon { get; set; } =
      YDF_ComponentsHelper.areThemesCSS_ClassesCommon || Button.mustConsiderThemesCSS_ClassesAsCommon;


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public enum StandardGeometricVariations
  {
    regular,
    small,
    linkLike
  }

  protected internal static Type? CustomGeometricVariations;

  public static void defineGeometricVariations(Type customGeometricVariations)
  {
    YDF_ComponentsHelper.ValidateCustomGeometricVariation(customGeometricVariations);
    Button.CustomGeometricVariations = customGeometricVariations;
  }

  protected string _geometricVariation = nameof(Button.StandardGeometricVariations.regular);

  [Microsoft.AspNetCore.Components.Parameter]
  [
    System.Diagnostics.CodeAnalysis.SuppressMessage(
      "Microsoft.Performance", 
      "BL0007", 
      Justification = "Optimized equivalent is too complex: https://stackoverflow.com/a/79302962/4818123"
    )
  ]
  public object geometricVariation
  {
    get => this._geometricVariation;
    set => YDF_ComponentsHelper.AssignGeometricVariationIfItIsValid<Button.StandardGeometricVariations>(
      value, Button.CustomGeometricVariations, ref this._geometricVariation
    );
  }
  
  public enum GeometricModifiers
  {
    pillShape,
    squareShape,
    squareShapeUnlessOverflowed,
    singleLine,
    noLeftBorderAndRoundings,
    noRightBorderAndRoundings,
    noTopBorderAndRoundings,
    noBottomBorderAndRoundings,
    noRoundings,
    horizontallyShrinkable
  }

  [Microsoft.AspNetCore.Components.Parameter]
  public Button.GeometricModifiers[] geometricModifiers { get; set; } = [];
  
  
  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
  public enum StandardDecorativeVariations
  {
    regular,
    accented,
    danger,
    linkLike
  }

  protected internal static Type? CustomDecorativeVariations;

  public static void defineDecorativeVariations(Type customDecorativeVariations) {
    YDF_ComponentsHelper.ValidateCustomDecorativeVariation(customDecorativeVariations);
    Button.CustomDecorativeVariations = customDecorativeVariations;
  }
  
  protected string _decorativeVariation = nameof(Button.StandardDecorativeVariations.regular);

  [Microsoft.AspNetCore.Components.Parameter]
  [
    System.Diagnostics.CodeAnalysis.SuppressMessage(
      "Microsoft.Performance", 
      "BL0007", 
      Justification = "Optimized equivalent is too complex: https://stackoverflow.com/a/79302962/4818123"
    )
  ]
  public required object decorativeVariation
  {
    get => _decorativeVariation;
    set => YDF_ComponentsHelper.AssignDecorativeVariationIfItIsValid<Button.StandardDecorativeVariations>(
      value, Button.CustomDecorativeVariations, ref this._decorativeVariation
    );
  }
  
  public enum DecorativeModifiers
  {
    bordersDisguising,
    noBackground,
    noBackgroundInDefaultState
  }

  [Microsoft.AspNetCore.Components.Parameter]
  public Button.DecorativeModifiers[] decorativeModifiers { get; set; } = [];
  
  
  /* ━━━ Actions Handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Inject]
  protected Microsoft.JSInterop.IJSRuntime javaScriptRuntime { get; set; } = null!;
  
  public async System.Threading.Tasks.Task focus()
  {
    await this.javaScriptRuntime.InvokeVoidAsync("putFocusOnElement", this.rootElement);
  }
  
  
  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public string? rootElementModifierCSS_Class { get; set; } = null;

  [Microsoft.AspNetCore.Components.Parameter]
  public string[]? rootElementModifierCSS_Classes { get; set; } = null;

  [Microsoft.AspNetCore.Components.Parameter]
  public string? rootElementSpaceSeparatedModifierCSS_Classes { get; set; } = null;

  private string classAttributeValueForRootElement => YDF_ComponentsHelper.GenerateClassAttributeValueForRootElement(
    CSS_Namespace: Button.CSS_NAMESPACE,
    activeTheme: this._theme,
    standardThemes: typeof(Button.StandardThemes),
    customThemes: Button.CustomThemes,
    areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
    activeGeometricVariation: this._geometricVariation,
    standardGeometricVariations: typeof(Button.StandardGeometricVariations),
    customGeometricVariations: Button.CustomGeometricVariations,
    activeDecorativeVariation: this._decorativeVariation,
    standardDecorativeVariations: typeof(Button.StandardDecorativeVariations),
    customDecorativeVariations: Button.CustomDecorativeVariations,
    activeGeometricModifiers: this.geometricModifiers,
    activeDecorativeModifiers: this.decorativeModifiers,
    externalSpaceSeparatedCSS_Classes: 
        ((ISupportsFlexibleExternalCSS_ClassesSpecifyingForRootElement)this).rootElementSpaceSeparatedExternalCSS_Classes
  );
  
  
  /* ━━━ Children Components ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter] 
  public Microsoft.AspNetCore.Components.RenderFragment? PrependedSVG_Icon { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter] 
  public Microsoft.AspNetCore.Components.RenderFragment? AppendedSVG_Icon { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter] 
  public Microsoft.AspNetCore.Components.RenderFragment? LoneSVG_Icon { get; set; }
  
}
