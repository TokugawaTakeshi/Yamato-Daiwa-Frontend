using YamatoDaiwa.Frontend.Helpers;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Buttons.Closing;


public partial class ClosingButton : 
    Microsoft.AspNetCore.Components.ComponentBase,
    YamatoDaiwa.Frontend.GUI_Components.Abstractions.IHTML_AttributesFallthrough
{
  
  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public const string CSS_NAMESPACE = "ClosingButton--YDF";

  public enum LabelLetterCases {
    uppercase,
    lowercase,
    capitalisation
  }
  
  
  /* ━━━ Common Parameters ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  public Dictionary<string, object>? rootElementHTML_Attributes { get; set; }
  
  
  /* ┅┅┅ Textings ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  [Microsoft.AspNetCore.Components.Parameter]
  public string? customLabel { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public bool noLabel { get; set; } = false;

  [Microsoft.AspNetCore.Components.Parameter]
  public ClosingButton.LabelLetterCases labelLetterCase { get; set; } = ClosingButton.LabelLetterCases.lowercase; 
  
  [Microsoft.AspNetCore.Components.Parameter]
  public string? accessibilityGuidance { get; set; }

  
  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public enum StandardThemes { regular }

  protected internal static Type? CustomThemes;

  public static void defineThemes(Type customThemes)
  {
    YDF_ComponentsHelper.ValidateCustomTheme(customThemes);
    ClosingButton.CustomThemes = customThemes;
  }

  protected string _theme = nameof(ClosingButton.StandardThemes.regular);

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
        AssignThemeIfItIsValid<ClosingButton.StandardThemes>(value, ClosingButton.CustomThemes, ref this._theme);
  }

  protected internal static bool mustConsiderThemesCSS_ClassesAsCommon = YDF_ComponentsHelper.areThemesCSS_ClassesCommon;

  public static void considerThemesAsCommon()
  {
    ClosingButton.mustConsiderThemesCSS_ClassesAsCommon = true;
  }

  [Microsoft.AspNetCore.Components.Parameter]
  public bool areThemesCSS_ClassesCommon { get; set; } =
      YDF_ComponentsHelper.areThemesCSS_ClassesCommon || ClosingButton.mustConsiderThemesCSS_ClassesAsCommon;
  
  
  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public enum StandardGeometricVariations { regular }

  protected internal static Type? CustomGeometricVariations;

  public static void defineGeometricVariations(Type customGeometricVariations)
  {
    YDF_ComponentsHelper.ValidateCustomGeometricVariation(customGeometricVariations);
    ClosingButton.CustomGeometricVariations = customGeometricVariations;
  }

  protected string _geometricVariation = nameof(ClosingButton.StandardGeometricVariations.regular);

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
    set => YDF_ComponentsHelper.AssignGeometricVariationIfItIsValid<ClosingButton.StandardGeometricVariations>(
      value, ClosingButton.CustomGeometricVariations, ref this._geometricVariation
    );
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public enum StandardDecorativeVariations { regular }

  protected internal static Type? CustomDecorativeVariations;

  public static void defineDecorativeVariations(Type customDecorativeVariations) {
    YDF_ComponentsHelper.ValidateCustomDecorativeVariation(customDecorativeVariations);
    ClosingButton.CustomDecorativeVariations = customDecorativeVariations;
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
    set => YDF_ComponentsHelper.AssignDecorativeVariationIfItIsValid<ClosingButton.StandardDecorativeVariations>(
      value, ClosingButton.CustomDecorativeVariations, ref this._decorativeVariation
    );
  }
  
  
  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private string classAttributeValueForRootElement => 
      YDF_ComponentsHelper.GenerateClassAttributeValueForRootElement(
        new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement
        {
          CSS_Namespace = ClosingButton.CSS_NAMESPACE,
          theme = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.Theme
          {
            activeOne = this._theme,
            standardOnes = typeof(ClosingButton.StandardThemes),
            customOnes = ClosingButton.CustomThemes,
            areThemesCSS_ClassesCommon = this.areThemesCSS_ClassesCommon 
          },
          geometricVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.GeometricVariation
          {
            activeOne = this._geometricVariation,
            standardOnes = typeof(ClosingButton.StandardGeometricVariations),
            customOnes = ClosingButton.CustomGeometricVariations
          },
          decorativeVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.DecorativeVariation
          {
            activeOne = this._decorativeVariation,
            standardOnes = typeof(ClosingButton.StandardDecorativeVariations),
            customOnes = ClosingButton.CustomDecorativeVariations
          },
          rootElementHTML_Attributes = this.rootElementHTML_Attributes
        }
      );
  
  protected string labelCSS_ModifierClass => this.labelLetterCase switch
  {
    ClosingButton.LabelLetterCases.uppercase => $"{ ClosingButton.CSS_NAMESPACE }-Label__Uppercase",
    ClosingButton.LabelLetterCases.lowercase => $"{ ClosingButton.CSS_NAMESPACE }-Label__Lowercase",
    ClosingButton.LabelLetterCases.capitalisation => $"{ ClosingButton.CSS_NAMESPACE }-Label__Capitalisation",
    _ => throw new ArgumentOutOfRangeException()
  };
  
  
  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public abstract record Localization(
    string defaultLabel,
    string defaultAccessibilityGuidance
  );
  
  public static Localization localization = new ClosingButtonEnglishLocalization();
  
}