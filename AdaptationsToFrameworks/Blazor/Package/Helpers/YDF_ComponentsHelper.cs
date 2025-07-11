using YamatoDaiwa.CSharpExtensions;
using YamatoDaiwa.Frontend.Exceptions;


namespace YamatoDaiwa.Frontend.Helpers;


public abstract class YDF_ComponentsHelper
{

  public static bool areThemesCSS_ClassesCommon = false;


  /* ━━━ Validation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static void ValidateCustomTheme(Type CustomThemes)
  {
    if (!CustomThemes.IsEnum)
    {
      throw new CustomYDF_ThemeIsNotEnumerationException();
    }
  }

  public static void ValidateCustomGeometricVariation(Type CustomThemes)
  {
    if (!CustomThemes.IsEnum)
    {
      throw new CustomYDF_GeometricVariationIsNotEnumerationException();
    }
  }

  public static void ValidateCustomDecorativeVariation(Type CustomThemes)
  {
    if (!CustomThemes.IsEnum)
    {
      throw new CustomYDF_DecorativeVariationIsNotEnumerationException();
    }
  }


  /* ━━━ Stringifying & Assigning ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static void AssignThemeIfItIsValid<TStandardThemes>(object value, Type? customThemes, ref string _theme)
  {

    if (value is TStandardThemes standardTheme)
    {
      _theme = $"{ standardTheme }";
      return;
    }


    string stringifiedThemeValue = value.ToString() ?? "";

    if (customThemes is not null)
    {

      Type customThemesType = customThemes;

      if (customThemesType.IsEnum && Enum.GetNames(customThemesType).Contains(stringifiedThemeValue))
      {
        _theme = stringifiedThemeValue;
        return;
      }

    }


    throw new InvalidThemeParameterForYDF_ComponentException();

  }

  public static void AssignGeometricVariationIfItIsValid<TStandardGeometricVariations>(
    object value,
    Type? customGeometricVariations,
    ref string _geometricVariation
  )
  {

    if (value is TStandardGeometricVariations standardGeometricVariation)
    {
      _geometricVariation = $"{ standardGeometricVariation }";
      return;
    }


    string stringifiedDecorativeVariationValue = value.ToString() ?? "";

    if (customGeometricVariations is not null)
    {

      Type customGeometricVariationsType = customGeometricVariations;

      if (customGeometricVariationsType.IsEnum && Enum.GetNames(customGeometricVariationsType).Contains(stringifiedDecorativeVariationValue))
      {
        _geometricVariation = stringifiedDecorativeVariationValue;
        return;
      }

    }


    throw new InvalidGeometricVariationParameterForYDF_ComponentException();

  }

  public static void AssignDecorativeVariationIfItIsValid<TStandardDecorativeVariations>(
    object value,
    Type? customDecorativeVariations,
    ref string _decorativeVariation
  )
  {

    if (value is TStandardDecorativeVariations standardDecorativeVariation)
    {
      _decorativeVariation = $"{ standardDecorativeVariation }";
      return;
    }


    string stringifiedDecorativeVariationValue = value.ToString() ?? "";

    if (customDecorativeVariations is not null)
    {

      Type customDecorativeVariationsType = customDecorativeVariations;

      if (customDecorativeVariationsType.IsEnum && Enum.GetNames(customDecorativeVariationsType).Contains(stringifiedDecorativeVariationValue))
      {
        _decorativeVariation = stringifiedDecorativeVariationValue;
        return;
      }

    }


    throw new InvalidDecorativeVariationParameterForYDF_ComponentException();

  }


  /* ━━━ Generating of CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public record SettingsForGeneratingOfClassAttributeValueForRootElement
  {
    
    public required string CSS_Namespace { get; init; }
    public bool needLoadingPlaceholderClass { get; init; }

    public record Theme
    {
      public required string activeOne { get; init; }
      public required Type standardOnes { get; init; }
      public required Type? customOnes { get; init; }
      public required bool areThemesCSS_ClassesCommon { get; init; }  
    }
    
    public Theme? theme;
    
    public record GeometricVariation
    {
      public required string activeOne { get; init; }
      public required Type standardOnes { get; init; }
      public required Type? customOnes { get; init; }
    }
    
    public GeometricVariation? geometricVariation;
    public object? activeGeometricModifiers { get; init; }
    
    public record DecorativeVariation
    {
      public required string activeOne { get; init; }
      public required Type standardOnes { get; init; }
      public required Type? customOnes { get; init; }
    }
    
    public DecorativeVariation? decorativeVariation;
    public object? activeDecorativeModifiers { get; init; }
    
    public IEnumerable<string>? otherInternalCSS_Classes { get; init; }
    public string? externalSpaceSeparatedCSS_Classes { get; init; }
    public Dictionary<string, object>? rootElementHTML_Attributes { get; init; }
    
  }
  
  public static string GenerateClassAttributeValueForRootElement(
    SettingsForGeneratingOfClassAttributeValueForRootElement settings
  )
  {
  
    List<string> CSS_Classes = [ settings.CSS_Namespace ];
  
    CSS_Classes.AddElementToEndIf($"{ settings.CSS_Namespace }__LoadingPlaceholder", settings.needLoadingPlaceholderClass);

    if (settings.theme is not null)
    {
      CSS_Classes.AddElementToEndIf(
        YDF_ComponentsHelper.
            GenerateThemeModifierCSS_Class(settings.CSS_Namespace, settings.theme.activeOne),
        YDF_ComponentsHelper.MustApplyThemeCSS_Class(
          settings.theme.standardOnes, 
          settings.theme.customOnes,
          settings.theme.areThemesCSS_ClassesCommon
        )
      );
    }

    if (settings.geometricVariation is not null)
    {
      CSS_Classes.AddElementToEndIf(
        YDF_ComponentsHelper.
            GenerateGeometricVariationModifierCSS_Class(settings.CSS_Namespace, settings.geometricVariation.activeOne),
        YDF_ComponentsHelper.MustApplyGeometricVariationModifierCSS_Class(
          settings.geometricVariation.standardOnes, 
          settings.geometricVariation.customOnes
        )
      );
    }
    
    if (settings.activeGeometricModifiers is Array definedSelectedGeometricModifiers)
    {
      CSS_Classes.AddRange(
        from object selectedGeometricModifier
            in definedSelectedGeometricModifiers
            select $"{ settings.CSS_Namespace }__{ selectedGeometricModifier.ToString().ToUpperCamelCase() }GeometricModifier"
      );
    }
    
    if (settings.decorativeVariation is not null)
    {
      CSS_Classes.AddElementToEndIf(
        YDF_ComponentsHelper.
            GenerateDecorativeVariationModifierCSS_Class(settings.CSS_Namespace, settings.decorativeVariation.activeOne),
        YDF_ComponentsHelper.MustApplyDecorativeVariationModifierCSS_Class(
          settings.decorativeVariation.standardOnes, 
          settings.decorativeVariation.customOnes
        )
      );
    }
  
    if (settings.activeDecorativeModifiers is Array definedSelectedDecorativeModifiers)
    {
      CSS_Classes.AddRange(
        from object selectedGeometricModifier
            in definedSelectedDecorativeModifiers
            select $"{ settings.CSS_Namespace }__{ selectedGeometricModifier.ToString().ToUpperCamelCase() }DecorativeModifier"
      );
    }

    CSS_Classes.AddRange(settings.otherInternalCSS_Classes ?? []);

    if (!string.IsNullOrEmpty(settings.externalSpaceSeparatedCSS_Classes))
    {
      CSS_Classes.Add(settings.externalSpaceSeparatedCSS_Classes);
    }

    object? rootElementClassAttributeRawValue = null;
    
    settings.rootElementHTML_Attributes?.TryGetValue("class", out rootElementClassAttributeRawValue);
    
    if (rootElementClassAttributeRawValue is string rootElementClassAttributeValue) 
    {
      CSS_Classes.Add(rootElementClassAttributeValue);
    }
  
    return String.Join(" ", CSS_Classes);
  
  }
  
  public static string GenerateThemeModifierCSS_Class(string CSS_Namespace, string theme)
  {
    return $"{ CSS_Namespace }__{ theme.ToUpperCamelCase() }Theme";
  }

  public static string GenerateGeometricVariationModifierCSS_Class(string CSS_Namespace, string geometricVariation)
  {
    return $"{ CSS_Namespace }__{ geometricVariation.ToUpperCamelCase() }GeometricVariation";
  }

  public static string GenerateDecorativeVariationModifierCSS_Class(string CSS_Namespace, string decorativeVariation)
  {
    return $"{ CSS_Namespace }__{ decorativeVariation.ToUpperCamelCase() }DecorativeVariation";
  }


  /* ━━━ Applying of CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static bool MustApplyThemeCSS_Class(
    Type standardThemes,
    Type? customThemes,
    bool mustConsiderThemesCSS_ClassesAsCommon = false
  )
  {

    int standardThemesCount = Enum.GetNames(standardThemes).Length;
    int customThemesCount = customThemes is null ? 0 : Enum.GetNames(customThemes).Length;

    return (standardThemesCount + customThemesCount > 1) && !mustConsiderThemesCSS_ClassesAsCommon;

  }

  public static bool MustApplyGeometricVariationModifierCSS_Class(
    Type standardGeometricVariations,
    Type? customGeometricVariations
  )
  {

    int standardGeometricVariationsCount = Enum.GetNames(standardGeometricVariations).Length;
    int customGeometricVariationsCount = customGeometricVariations is null ? 0 : Enum.GetNames(customGeometricVariations).Length;

    return standardGeometricVariationsCount + customGeometricVariationsCount > 1;

  }

  public static bool MustApplyDecorativeVariationModifierCSS_Class(
    Type standardDecorativeVariations,
    Type? customDecorativeVariations
  )
  {

    int standardDecorativeVariationsCount = Enum.GetNames(standardDecorativeVariations).Length;
    int customDecorativeVariationsCount = customDecorativeVariations is null ? 0 : Enum.GetNames(customDecorativeVariations).Length;

    return standardDecorativeVariationsCount + customDecorativeVariationsCount > 1;

  }

}
