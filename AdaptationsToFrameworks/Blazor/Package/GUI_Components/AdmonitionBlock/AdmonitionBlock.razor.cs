using YamatoDaiwa.Frontend.Animations;
using YamatoDaiwa.Frontend.GUI_Components.Abstractions;
using YamatoDaiwa.Frontend.Helpers;


namespace YamatoDaiwa.Frontend.GUI_Components.AdmonitionBlock;


[System.Diagnostics.CodeAnalysis.SuppressMessage("ReSharper", "MemberCanBePrivate.Global")]
public partial class AdmonitionBlock :
    Microsoft.AspNetCore.Components.ComponentBase,
    IHTML_AttributesFallthrough,
    ISupportsFlexibleExternalCSS_ClassesSpecifyingForRootElement,
    IAsyncDisposable
{

  public const string CSS_NAMESPACE = "AdmonitionBlock--YDF";


  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  public IDictionary<string, object>? rootElementHTML_Attributes { get; set; }

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

  protected Microsoft.AspNetCore.Components.ElementReference rootElement;
  protected CollapsingAnimation? collapsingAnimation;

  protected bool isDisplaying = true;

  [Microsoft.AspNetCore.Components.Inject]
  protected Microsoft.JSInterop.IJSRuntime javaScriptRuntime { get; set; } = null!;

  private async Task onClickDismissingButton()
  {

    if (this.collapsingAnimation is null)
    {
      return;
    }


    await this.collapsingAnimation.Animate(
      new CollapsingAnimation.CompoundParameter
      {
        animatedElement = this.rootElement,
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
      "Microsoft.Performance",
      "BL0007",
      Justification = "Optimized equivalent is too complex: https://stackoverflow.com/a/79302962/4818123"
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


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
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
      "Microsoft.Performance",
      "BL0007",
      Justification = "Optimized equivalent is too complex: https://stackoverflow.com/a/79302962/4818123"
    )
  ]
  public object geometricVariation
  {
    get => this._geometricVariation;
    set => YDF_ComponentsHelper.AssignGeometricVariationIfItIsValid<AdmonitionBlock.StandardGeometricVariations>(
      value, AdmonitionBlock.CustomGeometricVariations, ref this._geometricVariation
    );
  }


  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
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
      "Microsoft.Performance",
      "BL0007",
      Justification = "Optimized equivalent is too complex: https://stackoverflow.com/a/79302962/4818123"
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
  [Microsoft.AspNetCore.Components.Parameter]
  public string? rootElementModifierCSS_Class { get; set; } = null;

  [Microsoft.AspNetCore.Components.Parameter]
  public string[]? rootElementModifierCSS_Classes { get; set; } = null;

  [Microsoft.AspNetCore.Components.Parameter]
  public string? rootElementSpaceSeparatedModifierCSS_Classes { get; set; } = null;

  private string classAttributeValueForRootElement => YDF_ComponentsHelper.GenerateClassAttributeValueForRootElement(
    CSS_Namespace: AdmonitionBlock.CSS_NAMESPACE,
    activeTheme: this._theme,
    standardThemes: typeof(AdmonitionBlock.StandardThemes),
    customThemes: AdmonitionBlock.CustomThemes,
    areThemesCSS_ClassesCommon: this.areThemesCSS_ClassesCommon,
    activeGeometricVariation: this._geometricVariation,
    standardGeometricVariations: typeof(AdmonitionBlock.StandardGeometricVariations),
    customGeometricVariations: AdmonitionBlock.CustomGeometricVariations,
    activeDecorativeVariation: this._decorativeVariation,
    standardDecorativeVariations: typeof(AdmonitionBlock.StandardDecorativeVariations),
    customDecorativeVariations: AdmonitionBlock.CustomDecorativeVariations,
    activeGeometricModifiers: null,
    activeDecorativeModifiers: null,
    externalSpaceSeparatedCSS_Classes:
        ((ISupportsFlexibleExternalCSS_ClassesSpecifyingForRootElement)this).rootElementSpaceSeparatedExternalCSS_Classes
  );


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public abstract class Localization
  {

    public abstract DismissingButton dismissingButton { get; }

    public struct DismissingButton
    {
      public required string accessibilityGuidance { get; init; }
    }

  }

  public static Localization localization = new AdmonitionBlockEnglishLocalization();


  /* ━━━ IDs ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Instance ID ──────────────────────────────────────────────────────────────────────────────────────────────── */
  protected readonly string INSTANCE_ID = AdmonitionBlock.generateInstanceID();
  protected static uint counterForBasicID_Generating = 0;

  public static string generateInstanceID()
  {
    AdmonitionBlock.counterForBasicID_Generating++;
    return $"ADMONITION_BLOCK--YDF-{ AdmonitionBlock.counterForBasicID_Generating }";
  }


  /* ─── Root Element HTML ID ─────────────────────────────────────────────────────────────────────────────────────── */
  [Microsoft.AspNetCore.Components.Parameter]
  public string? HTML_ID { get; set; }


  /* ─── Title HTML ID ────────────────────────────────────────────────────────────────────────────────────────────── */
  protected string TITLE_HTML_ID => $"{ this.INSTANCE_ID }-TITLE";


  /* ━━━ Lifecycle Hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected override void OnInitialized()
  {
    base.OnInitialized();
    this.collapsingAnimation = new CollapsingAnimation(this.javaScriptRuntime);
  }

  public async ValueTask DisposeAsync()
  {
    if (this.collapsingAnimation is not null)
    {
      await this.collapsingAnimation.DisposeAsync();
    }
  }

}
