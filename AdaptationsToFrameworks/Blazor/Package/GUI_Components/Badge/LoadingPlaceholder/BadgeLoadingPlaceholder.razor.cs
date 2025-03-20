using YamatoDaiwa.CSharpExtensions;
using YamatoDaiwa.Frontend.GUI_Components.Abstractions;
using YamatoDaiwa.Frontend.Helpers;


namespace YamatoDaiwa.Frontend.GUI_Components.Badge.LoadingPlaceholder;


public partial class BadgeLoadingPlaceholder :
    Microsoft.AspNetCore.Components.ComponentBase,
    ISupportsFlexibleExternalCSS_ClassesSpecifyingForRootElement,
    IHTML_AttributesFallthrough
{

  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  public IDictionary<string, object>? rootElementHTML_Attributes { get; set; }
  
  
  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected string _theme = Badge.StandardThemes.regular.ToString();

  [Microsoft.AspNetCore.Components.Parameter]
  public object theme
  {
    get => this._theme;
    set => YDF_ComponentsHelper.AssignThemeIfItIsValid<Badge.StandardThemes>(value, Badge.CustomThemes, ref this._theme);
  }

  [Microsoft.AspNetCore.Components.Parameter]
  public bool areThemesCSS_ClassesCommon { get; set; } =
      YDF_ComponentsHelper.areThemesCSS_ClassesCommon || Badge.mustConsiderThemesCSS_ClassesAsCommon;

  
  /* ─── Geometry ─────────────────────────────────────────────────────────────────────────────────────────────────── */
  protected string _geometricVariation = Badge.StandardGeometricVariations.regular.ToString();

  [Microsoft.AspNetCore.Components.Parameter]
  public object geometricVariation
  {
    get => this._geometricVariation;
    set => YDF_ComponentsHelper.AssignGeometricVariationIfItIsValid<Badge.StandardGeometricVariations>(
      value, Badge.CustomGeometricVariations, ref this._geometricVariation
    );
  }

  [Microsoft.AspNetCore.Components.Parameter]
  public Badge.GeometricModifiers[] geometricModifiers { get; set; } = [];


  /* ━━━ CSS classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public string? rootElementModifierCSS_Class { get; set; } = null;

  [Microsoft.AspNetCore.Components.Parameter]
  public string[]? rootElementModifierCSS_Classes { get; set; } = null;

  [Microsoft.AspNetCore.Components.Parameter]
  public string? rootElementSpaceSeparatedModifierCSS_Classes { get; set; } = null;

  private string composeClassAttributeValueForRootElement => new List<string>
      {
        Badge.CSS_NAMESPACE, 
        "Badge--YDF__LoadingPlaceholder"
      }.

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
        ((ISupportsFlexibleExternalCSS_ClassesSpecifyingForRootElement)this).rootElementSpaceSeparatedExternalCSS_Classes,
        rootElementSpaceSeparatedExternalCSS_Classes =>
          !String.IsNullOrEmpty(rootElementSpaceSeparatedExternalCSS_Classes)
      ).

      StringifyEachElementAndJoin(" ");
  
}
