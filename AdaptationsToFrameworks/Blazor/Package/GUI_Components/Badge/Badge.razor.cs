using YamatoDaiwa.Frontend.GUI_Components.Abstractions;
using YamatoDaiwa.Frontend.Helpers;


namespace YamatoDaiwa.Frontend.GUI_Components.Badge;


[System.Diagnostics.CodeAnalysis.SuppressMessage("ReSharper", "MemberCanBePrivate.Global")]
public partial class Badge :
    Microsoft.AspNetCore.Components.ComponentBase,
    YamatoDaiwa.Frontend.GUI_Components.Abstractions.IHTML_AttributesFallthrough,
    YamatoDaiwa.Frontend.GUI_Components.Abstractions.IFlexibleExternalCSS_ClassesSpecifyingForRootElement
{

  public const string CSS_NAMESPACE = "Badge--YDF";

  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  public Dictionary<string, object>? rootElementHTML_Attributes { get; set; }

  [Microsoft.AspNetCore.Components.Parameter]
  public string? keyLabel { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  [Microsoft.AspNetCore.Components.EditorRequired]
  public required string valueLabel { get; set; }

  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.RenderFragment? PrependedSVG_Icon { get; set; }


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public enum StandardThemes { regular }

  protected internal static Type? CustomThemes;

  public static void defineCustomThemes(Type customThemes)
  {
    YDF_ComponentsHelper.ValidateCustomTheme(customThemes);
    Badge.CustomThemes = customThemes;
  }

  protected string _theme = nameof(Badge.StandardThemes.regular);

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


  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public enum StandardGeometricVariations
  {
    regular,
    small
  }

  protected internal static Type? CustomGeometricVariations;

  public static void defineCustomGeometricVariations(Type customGeometricVariations)
  {
    YDF_ComponentsHelper.ValidateCustomGeometricVariation(customGeometricVariations);
    Badge.CustomGeometricVariations = customGeometricVariations;
  }

  protected string _geometricVariation = nameof(Badge.StandardGeometricVariations.regular);

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
  public Badge.GeometricModifiers[] geometricModifiers { get; set; } = [];


  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
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

  public static void defineCustomDecorativeVariations(Type customDecorativeVariations) {
    YDF_ComponentsHelper.ValidateCustomDecorativeVariation(customDecorativeVariations);
    Badge.CustomDecorativeVariations = customDecorativeVariations;
  }

  protected string _decorativeVariation = null!;

  [Microsoft.AspNetCore.Components.Parameter]
  [Microsoft.AspNetCore.Components.EditorRequired]
  [
    System.Diagnostics.CodeAnalysis.SuppressMessage(
      category: "Microsoft.Performance",
      checkId: "BL0007",
      Justification = "Optimized equivalent is too complex: https://stackoverflow.com/a/79302962/4818123"
    )
  ]
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
  public Badge.DecorativeModifiers[] decorativeModifiers { get; set; } = [];


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public string? rootElementModifierCSS_Class { get; set; } = null;

  [Microsoft.AspNetCore.Components.Parameter]
  public string[]? rootElementModifierCSS_Classes { get; set; } = null;

  [Microsoft.AspNetCore.Components.Parameter]
  public string? rootElementSpaceSeparatedModifierCSS_Classes { get; set; } = null;

  private string classAttributeValueForRootElement => YDF_ComponentsHelper.GenerateClassAttributeValueForRootElement(
    new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement
    {
      CSS_Namespace = Badge.CSS_NAMESPACE,
      theme = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.Theme
      {
        activeOne = this._theme,
        standardOnes = typeof(Badge.StandardThemes),
        customOnes = Badge.CustomThemes,
        areThemesCSS_ClassesCommon = this.areThemesCSS_ClassesCommon 
      },
      geometricVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.GeometricVariation
      {
        activeOne = this._geometricVariation,
        standardOnes = typeof(Badge.StandardGeometricVariations),
        customOnes = Badge.CustomGeometricVariations
      },
      activeGeometricModifiers = this.geometricModifiers,
      decorativeVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.DecorativeVariation
      {
        activeOne = this._decorativeVariation,
        standardOnes = typeof(Badge.StandardDecorativeVariations),
        customOnes = Badge.CustomDecorativeVariations
      },
      activeDecorativeModifiers = this.decorativeModifiers,
      externalSpaceSeparatedCSS_Classes =
          ((IFlexibleExternalCSS_ClassesSpecifyingForRootElement)this).rootElementSpaceSeparatedExternalCSS_Classes,
      rootElementHTML_Attributes = this.rootElementHTML_Attributes
    }
  );

}
