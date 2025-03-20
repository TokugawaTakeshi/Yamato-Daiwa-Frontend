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
  public static void ValidateTheme<TStandardThemes>(object? value, Type? customThemes)
  {

    if (value is TStandardThemes standardTheme)
    {
      return;
    }


    string stringifiedThemeValue = value?.ToString() ?? "";

    if (customThemes is not null)
    {

      Type customThemesType = customThemes;

      if (customThemesType.IsEnum && Enum.GetNames(customThemesType).Contains(stringifiedThemeValue))
      {
        return;
      }

    }


    throw new InvalidThemeParameterForYDF_ComponentException();

  }
  
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
  public static string GenerateClassAttributeValueForRootElement(
    string CSS_Namespace,
    string activeTheme,
    Type standardThemes,
    Type? customThemes,
    bool areThemesCSS_ClassesCommon,
    string activeGeometricVariation,
    Type standardGeometricVariations,
    Type? customGeometricVariations,
    object? activeGeometricModifiers,
    string activeDecorativeVariation,
    Type standardDecorativeVariations,
    Type? customDecorativeVariations,
    object? activeDecorativeModifiers,
    string externalSpaceSeparatedCSS_Classes
  )
  {

    List<string> CSS_Classes = [ CSS_Namespace ];
    
    CSS_Classes.
      
        AddElementToEndIf(
          YDF_ComponentsHelper.GenerateThemeModifierCSS_Class(CSS_Namespace, activeTheme),
          YDF_ComponentsHelper.MustApplyThemeCSS_Class(
            standardThemes, customThemes, areThemesCSS_ClassesCommon
          )
        ).

        AddElementToEndIf(
          YDF_ComponentsHelper.GenerateGeometricVariationModifierCSS_Class(CSS_Namespace, activeGeometricVariation),
          YDF_ComponentsHelper.MustApplyGeometricVariationModifierCSS_Class(
            standardGeometricVariations, customGeometricVariations
          )
        ).
        
        AddElementToEndIf(
          YDF_ComponentsHelper.GenerateDecorativeVariationModifierCSS_Class(CSS_Namespace, activeDecorativeVariation),
          YDF_ComponentsHelper.MustApplyDecorativeVariationModifierCSS_Class(
            standardDecorativeVariations, customDecorativeVariations
          )
        );

    if (activeGeometricModifiers is Array definedSelectedGeometricModifiers)
    {
      CSS_Classes.AddRange(
        from object selectedGeometricModifier 
            in definedSelectedGeometricModifiers 
            select $"{ CSS_Namespace }__{ selectedGeometricModifier.ToString().ToUpperCamelCase() }GeometricModifier"
      );
    }

    if (activeDecorativeModifiers is Array definedSelectedDecorativeModifiers)
    {
      CSS_Classes.AddRange(
        from object selectedGeometricModifier 
            in definedSelectedDecorativeModifiers 
            select $"{ CSS_Namespace }__{ selectedGeometricModifier.ToString().ToUpperCamelCase() }DecorativeModifier"
      );
    }

    if (externalSpaceSeparatedCSS_Classes.IsNonEmpty())
    {
      CSS_Classes.Add(externalSpaceSeparatedCSS_Classes);
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
  
  
  /* ━━━ Applying of CSS Classed ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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
