using YamatoDaiwa.Frontend.Helpers;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Buttons.HamburgerMenu;


public partial class HamburgerMenuButton :
    Microsoft.AspNetCore.Components.ComponentBase,
    YamatoDaiwa.Frontend.GUI_Components.Abstractions.IHTML_AttributesFallthrough
{
    
  /* ━━━ Static Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public const string CSS_NAMESPACE = "HamburgerMenuButton--YDF";
  
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
  public HamburgerMenuButton.LabelLetterCases labelLetterCase { get; set; } = HamburgerMenuButton.LabelLetterCases.lowercase;
  
  [Microsoft.AspNetCore.Components.Parameter]
  public bool alwaysEnglishLabel { get; set; } = false;
  
  [Microsoft.AspNetCore.Components.Parameter]
  public string? accessibilityGuidance { get; set; }
  
  
  
  
  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public enum StandardThemes { regular }

  protected internal static Type? CustomThemes;

  public static void defineThemes(Type customThemes)
  {
    YDF_ComponentsHelper.ValidateCustomTheme(customThemes);
    HamburgerMenuButton.CustomThemes = customThemes;
  }

  protected string _theme = nameof(HamburgerMenuButton.StandardThemes.regular);

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
        AssignThemeIfItIsValid<HamburgerMenuButton.StandardThemes>(value, HamburgerMenuButton.CustomThemes, ref this._theme);
  }

  protected internal static bool mustConsiderThemesCSS_ClassesAsCommon = YDF_ComponentsHelper.areThemesCSS_ClassesCommon;

  public static void considerThemesAsCommon()
  {
    HamburgerMenuButton.mustConsiderThemesCSS_ClassesAsCommon = true;
  }

  [Microsoft.AspNetCore.Components.Parameter]
  public bool areThemesCSS_ClassesCommon { get; set; } =
      YDF_ComponentsHelper.areThemesCSS_ClassesCommon || HamburgerMenuButton.mustConsiderThemesCSS_ClassesAsCommon;
  
  
  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public enum StandardGeometricVariations { regular }

  protected internal static Type? CustomGeometricVariations;

  public static void defineGeometricVariations(Type customGeometricVariations)
  {
    YDF_ComponentsHelper.ValidateCustomGeometricVariation(customGeometricVariations);
    HamburgerMenuButton.CustomGeometricVariations = customGeometricVariations;
  }

  protected string _geometricVariation = nameof(HamburgerMenuButton.StandardGeometricVariations.regular);

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
    set => YDF_ComponentsHelper.AssignGeometricVariationIfItIsValid<HamburgerMenuButton.StandardGeometricVariations>(
      value, HamburgerMenuButton.CustomGeometricVariations, ref this._geometricVariation
    );
  }


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public enum StandardDecorativeVariations { regular }

  protected internal static Type? CustomDecorativeVariations;

  public static void defineDecorativeVariations(Type customDecorativeVariations) {
    YDF_ComponentsHelper.ValidateCustomDecorativeVariation(customDecorativeVariations);
    HamburgerMenuButton.CustomDecorativeVariations = customDecorativeVariations;
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
    set => YDF_ComponentsHelper.AssignDecorativeVariationIfItIsValid<HamburgerMenuButton.StandardDecorativeVariations>(
      value, HamburgerMenuButton.CustomDecorativeVariations, ref this._decorativeVariation
    );
  }
  
  
  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private string classAttributeValueForRootElement => 
      YDF_ComponentsHelper.GenerateClassAttributeValueForRootElement(
        new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement
        {
          CSS_Namespace = HamburgerMenuButton.CSS_NAMESPACE,
          theme = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.Theme
          {
            activeOne = this._theme,
            standardOnes = typeof(HamburgerMenuButton.StandardThemes),
            customOnes = HamburgerMenuButton.CustomThemes,
            areThemesCSS_ClassesCommon = this.areThemesCSS_ClassesCommon 
          },
          geometricVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.GeometricVariation
          {
            activeOne = this._geometricVariation,
            standardOnes = typeof(HamburgerMenuButton.StandardGeometricVariations),
            customOnes = HamburgerMenuButton.CustomGeometricVariations
          },
          decorativeVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.DecorativeVariation
          {
            activeOne = this._decorativeVariation,
            standardOnes = typeof(HamburgerMenuButton.StandardDecorativeVariations),
            customOnes = HamburgerMenuButton.CustomDecorativeVariations
          },
          rootElementHTML_Attributes = this.rootElementHTML_Attributes
        }
      );
  
  protected string labelCSS_ModifierClass => this.labelLetterCase switch
  {
    HamburgerMenuButton.LabelLetterCases.uppercase => $"{ HamburgerMenuButton.CSS_NAMESPACE }-Label__Uppercase",
    HamburgerMenuButton.LabelLetterCases.lowercase => $"{ HamburgerMenuButton.CSS_NAMESPACE }-Label__Lowercase",
    HamburgerMenuButton.LabelLetterCases.capitalisation => $"{ HamburgerMenuButton.CSS_NAMESPACE }-Label__Capitalisation",
    _ => throw new ArgumentOutOfRangeException()
  };
  
  
  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public abstract record Localization(
    string defaultLabel,
    string defaultAccessibilityGuidance
  );
  
  public static Localization localization = new HamburgerMenuButtonEnglishLocalization();
  
}