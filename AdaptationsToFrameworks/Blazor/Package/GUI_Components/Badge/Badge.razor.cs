using YamatoDaiwa.CSharpExtensions;
using YamatoDaiwa.Frontend.GUI_Components.Abstractions;
using YamatoDaiwa.Frontend.Helpers;


namespace YamatoDaiwa.Frontend.GUI_Components.Badge;


public partial class Badge :
    Microsoft.AspNetCore.Components.ComponentBase,
    ISupportsFlexibleExternalCSS_ClassesSpecifyingForRootElement,
    IHTML_AttributesFallthrough
{

  public static string CSS_NAMESPACE = "Badge--YDF";
  
  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  public IDictionary<string, object>? rootElementAttributes { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public string? keyLabel { get; set; }

  [Microsoft.AspNetCore.Components.Parameter]
  public required string valueLabel { get; set; }

  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.RenderFragment? PrependedSVG_Icon { get; set; }


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public enum StandardThemes { regular }

  protected internal static Type? CustomThemes;

  public static void defineCustomThemes(Type CustomThemes)
  {
    YDF_ComponentsHelper.ValidateCustomTheme(CustomThemes);
    Badge.CustomThemes = CustomThemes;
  }

  protected string _theme = Badge.StandardThemes.regular.ToString();

  [Microsoft.AspNetCore.Components.Parameter]
  public object theme
  {
    get => this._theme;
    set => YDF_ComponentsHelper.AssignThemeIfItIsValid<Badge.StandardThemes>(value, Badge.CustomThemes, ref this._theme);
  }

  protected internal static bool mustConsiderThemesCSS_ClassesAsCommon = YDF_ComponentsHelper.areThemesCSS_ClassesCommon;

  public static void considerThemesAsCommon()
  {
    Badge.mustConsiderThemesCSS_ClassesAsCommon = true;
  }

  [Microsoft.AspNetCore.Components.Parameter]
  public bool areThemesCSS_ClassesCommon { get; set; } =
      YDF_ComponentsHelper.areThemesCSS_ClassesCommon || Badge.mustConsiderThemesCSS_ClassesAsCommon;


  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  public enum StandardGeometricVariations
  {
    regular,
    small
  }

  protected internal static Type? CustomGeometricVariations;

  public static void defineCustomGeometricVariations(Type CustomGeometricVariations)
  {
    YDF_ComponentsHelper.ValidateCustomGeometricVariation(CustomGeometricVariations);
    Badge.CustomGeometricVariations = CustomGeometricVariations;
  }

  protected string _geometricVariation = Badge.StandardGeometricVariations.regular.ToString();

  [Microsoft.AspNetCore.Components.Parameter]
  public object geometricVariation
  {
    get => this._geometricVariation;
    set => YDF_ComponentsHelper.AssignGeometricVariationIfItIsValid<Badge.StandardGeometricVariations>(
      value, Badge.CustomGeometricVariations, ref this._geometricVariation
    );
  }

  public enum GeometricModifiers
  {
    pillShape,
    singleLine
  }

  [Microsoft.AspNetCore.Components.Parameter]
  public Badge.GeometricModifiers[] geometricModifiers { get; set; } = Array.Empty<Badge.GeometricModifiers>();


  /* ─── Decoration ───────────────────────────────────────────────────────────────────────────────────────────────── */
  public enum StandardDecorativeVariations
  {
    veryCatchyBright,
    catchyBright,
    modestlyCatchyBright,
    neutralBright,
    modestlyCalmingBright,
    calmingBright,
    achromaticBright,
    veryCatchyPastel,
    catchyPastel,
    modestlyCatchyPastel,
    neutralPastel,
    modestlyCalmingPastel,
    calmingPastel,
    achromaticPastel
  }

  protected internal static Type? CustomDecorativeVariations;

  public static void defineCustomDecorativeVariations(Type CustomDecorativeVariations) {
    YDF_ComponentsHelper.ValidateCustomDecorativeVariation(CustomDecorativeVariations);
    Badge.CustomDecorativeVariations = CustomDecorativeVariations;
  }

  protected string _decorativeVariation = null!;

  [Microsoft.AspNetCore.Components.Parameter]
  [Microsoft.AspNetCore.Components.EditorRequired]
  public required object decorativeVariation
  {
    get => _decorativeVariation;
    set => YDF_ComponentsHelper.AssignDecorativeVariationIfItIsValid<Badge.StandardDecorativeVariations>(
      value, Badge.CustomDecorativeVariations, ref this._decorativeVariation
    );
  }

  public enum DecorativeModifiers
  {
    bordersDisguising,
    noBackground
  }

  [Microsoft.AspNetCore.Components.Parameter]
  public Badge.DecorativeModifiers[] decorativeModifiers { get; set; } = Array.Empty<Badge.DecorativeModifiers>();


  /* ━━━ CSS classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public string? rootElementModifierCSS_Class { get; set; } = null;

  [Microsoft.AspNetCore.Components.Parameter]
  public string[]? rootElementModifierCSS_Classes { get; set; } = null;

  [Microsoft.AspNetCore.Components.Parameter]
  public string? rootElementSpaceSeparatedModifierCSS_Classes { get; set; } = null;

  private string classAttributeValueForRootElement => new List<string> { Badge.CSS_NAMESPACE }.

      AddElementToEndIf(
        $"{ Badge.CSS_NAMESPACE }__{ this._theme.ToUpperCamelCase() }Theme",
        YDF_ComponentsHelper.MustApplyThemeCSS_Class(
          typeof(Badge.StandardThemes), Badge.CustomThemes, this.areThemesCSS_ClassesCommon
        )
      ).

      AddElementToEndIf(
        $"{ Badge.CSS_NAMESPACE }__{ this._geometricVariation.ToUpperCamelCase() }GeometricVariation",
        YDF_ComponentsHelper.MustApplyGeometricVariationModifierCSS_Class(
          typeof(Badge.StandardGeometricVariations), Badge.CustomGeometricVariations
        )
      ).
      AddElementToEndIf(
        $"{ Badge.CSS_NAMESPACE }__PllShapeGeometricModifier",
        this.geometricModifiers.Contains(Badge.GeometricModifiers.pillShape)
      ).
      AddElementToEndIf(
        $"{ Badge.CSS_NAMESPACE }__SingleLineGeometricModifier",
        this.geometricModifiers.Contains(Badge.GeometricModifiers.singleLine)
      ).

      AddElementToEndIf(
        $"{ Badge.CSS_NAMESPACE }__{ this._decorativeVariation.ToUpperCamelCase() }DecorativeVariation",
        YDF_ComponentsHelper.MustApplyDecorativeVariationModifierCSS_Class(
          typeof(Badge.StandardDecorativeVariations), Badge.CustomDecorativeVariations
        )
      ).
      AddElementToEndIf(
        $"{ Badge.CSS_NAMESPACE }__BordersDisguisingDecorativeModifier",
        this.decorativeModifiers.Contains(Badge.DecorativeModifiers.bordersDisguising)
      ).
      AddElementToEndIf(
        $"{ Badge.CSS_NAMESPACE }__NoBackgroundDecorativeModifier",
        this.decorativeModifiers.Contains(Badge.DecorativeModifiers.noBackground)
      ).

      AddElementToEndIf(
        ((ISupportsFlexibleExternalCSS_ClassesSpecifyingForRootElement)this).rootElementSpaceSeparatedExternalCSS_Classes,
        rootElementSpaceSeparatedExternalCSS_Classes =>
          !String.IsNullOrEmpty(rootElementSpaceSeparatedExternalCSS_Classes)
      ).

      StringifyEachElementAndJoin(" ");

}
