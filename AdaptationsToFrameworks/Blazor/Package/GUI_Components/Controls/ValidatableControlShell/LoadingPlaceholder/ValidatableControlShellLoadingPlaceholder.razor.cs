using YamatoDaiwa.Frontend.GUI_Components.Abstractions;
using YamatoDaiwa.Frontend.Helpers;


namespace YamatoDaiwa.Frontend.GUI_Components.Controls.ValidatableControlShell.LoadingPlaceholder;


public partial class ValidatableControlShellLoadingPlaceholder :
    Microsoft.AspNetCore.Components.ComponentBase,
    YamatoDaiwa.Frontend.GUI_Components.Abstractions.IHTML_AttributesFallthrough,
    YamatoDaiwa.Frontend.GUI_Components.Abstractions.IFlexibleExternalCSS_ClassesSpecifyingForRootElement
{

  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  public Dictionary<string, object>? rootElementHTML_Attributes { get; set; }


  /* ━━━ Placeholders of Elements ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public bool label { get; set; } = false;

  [Microsoft.AspNetCore.Components.Parameter]
  public bool guidance { get; set; } = false;

  [Microsoft.AspNetCore.Components.Parameter]
  public bool badge { get; set; } = false;


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected string _theme = nameof(ValidatableControlShell.StandardThemes.regular);

  [Microsoft.AspNetCore.Components.Parameter]
  [
    System.Diagnostics.CodeAnalysis.SuppressMessage(
      category: "Microsoft.Performance",
      checkId: "BL0007",
      Justification = "Optimized equivalent is too complex: https://stackoverflow.com/a/79302962/4818123"
    )
  ]
  public object theme
  {
    get => this._theme;
    set => YDF_ComponentsHelper.AssignThemeIfItIsValid<ValidatableControlShell.StandardThemes>(
      value, ValidatableControlShell.CustomThemes, ref this._theme
    );
  }

  protected object badgeTheme =>
      ValidatableControlShell.SelfAndChildrenComponentsThemesCorrespondence.badge[this._theme];

  [Microsoft.AspNetCore.Components.Parameter]
  public bool areThemesCSS_ClassesCommon { get; set; } =
      YDF_ComponentsHelper.areThemesCSS_ClassesCommon || ValidatableControlShell.mustConsiderThemesCSS_ClassesAsCommon;


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected string _geometricVariation = nameof(ValidatableControlShell.StandardGeometricVariations.regular);

  [Microsoft.AspNetCore.Components.Parameter]
  [
    System.Diagnostics.CodeAnalysis.SuppressMessage(
      category: "Microsoft.Performance",
      checkId: "BL0007",
      Justification = "Optimized equivalent is too complex: https://stackoverflow.com/a/79302962/4818123"
    )
  ]
  public object geometricVariation
  {
    get => this._geometricVariation;
    set => YDF_ComponentsHelper.AssignGeometricVariationIfItIsValid<ValidatableControlShell.StandardGeometricVariations>(
      value, ValidatableControlShell.CustomGeometricVariations, ref this._geometricVariation
    );
  }

  protected object badgeGeometricVariation =>
      ValidatableControlShell.SelfAndChildrenComponentsGeometricVariationsCorrespondence.badge[this._geometricVariation];


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public string? rootElementModifierCSS_Class { get; set; } = null;

  [Microsoft.AspNetCore.Components.Parameter]
  public string[]? rootElementModifierCSS_Classes { get; set; } = null;

  [Microsoft.AspNetCore.Components.Parameter]
  public string? rootElementSpaceSeparatedModifierCSS_Classes { get; set; } = null;

  private string classAttributeValueForRootElement => YDF_ComponentsHelper.GenerateClassAttributeValueForRootElement(
    new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement
    {
      CSS_Namespace = ValidatableControlShell.CSS_NAMESPACE,
      needLoadingPlaceholderClass = true,
      theme = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.Theme
      {
        activeOne = this._theme,
        standardOnes = typeof(ValidatableControlShell.StandardThemes),
        customOnes = ValidatableControlShell.CustomThemes,
        areThemesCSS_ClassesCommon = this.areThemesCSS_ClassesCommon
      },
      geometricVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.GeometricVariation
      {
        activeOne = this._geometricVariation,
        standardOnes = typeof(ValidatableControlShell.StandardGeometricVariations),
        customOnes = ValidatableControlShell.CustomGeometricVariations
      },
      externalSpaceSeparatedCSS_Classes =
          ((IFlexibleExternalCSS_ClassesSpecifyingForRootElement)this).rootElementSpaceSeparatedExternalCSS_Classes,
      rootElementHTML_Attributes = this.rootElementHTML_Attributes,
      otherInternalCSS_Classes = [ "ValidatableControlShell--YDF__LoadingPlaceholder" ]
    }
  );

  [Microsoft.AspNetCore.Components.Parameter]
  public IEnumerable<string> mainSlotWrapperAdditionalCSS_Classes { get; set; } = [];


  /* ━━━ Child Content ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.RenderFragment? ChildContent { get; set; }

}
