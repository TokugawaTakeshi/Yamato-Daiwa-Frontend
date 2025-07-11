using YamatoDaiwa.CSharpExtensions;
using YamatoDaiwa.Frontend.Exceptions;
using YamatoDaiwa.Frontend.GUI_Components.Abstractions;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.ValidatableControl;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation;
using YamatoDaiwa.Frontend.Helpers;
using Microsoft.JSInterop;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.ValidatableControlShell;


public partial class ValidatableControlShell: 
    Microsoft.AspNetCore.Components.ComponentBase,
    YamatoDaiwa.Frontend.GUI_Components.Abstractions.IHTML_AttributesFallthrough,
    YamatoDaiwa.Frontend.GUI_Components.Abstractions.IFlexibleExternalCSS_ClassesSpecifyingForRootElement
{
  
  public const string CSS_NAMESPACE = "ValidatableControlShell--YDF";
  
  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  public Dictionary<string, object>? rootElementHTML_Attributes { get; set; }
  
  [Microsoft.AspNetCore.Components.Inject]
  protected Microsoft.JSInterop.IJSRuntime javaScriptRuntime { get; set; } = null!;
  
  protected Microsoft.AspNetCore.Components.ElementReference rootElement;

  public async System.Threading.Tasks.ValueTask<IValidatableControl.RootElementOffsetCoordinates> getRootElementOffsetCoordinates()
  {
    return await this.javaScriptRuntime.InvokeAsync<IValidatableControl.RootElementOffsetCoordinates>(
      "getDOM_ElementOffsetCoordinates",
      this.rootElement
    );
  }
  
  
  /* ━━━ Text Elements ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter] 
  public string? label { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter] 
  public string? guidance { get; set; }
  
  public string? formattedGuidance
  {
    get
    {
    
      if (this.guidance is null)
      {
        return null;
      }
      
      
      string[] guidanceSegments = this.guidance.Split("**");

      for (int segmentIndex = 0; segmentIndex <= guidanceSegments.Length - 1; segmentIndex++)
      {
        string currentSegment = guidanceSegments[segmentIndex];

        if (segmentIndex % 2 != 0)
        {
          guidanceSegments[segmentIndex] =
            $"<span class=\"ValidatableControlShell--YDF-Guidance-AccentedFragment\">{ currentSegment }</span>";
        }
      }

      return YamatoDaiwa.CSharpExtensions.RegexExtensions.ReplaceMatchesWithRegularExpressionToDynamicValue(
        new RegexExtensions.ReplacingOfMatchesWithRegularExpressionToDynamicValue.CompoundParameter
        {
          regularExpressionWithCapturingGroups = new System.Text.RegularExpressions.Regex(@"(\[(?<anchorText>.+?)\]\((?<URI>.+?)\))"),
          replacer = (
            YamatoDaiwa.CSharpExtensions.RegexExtensions.ReplacingOfMatchesWithRegularExpressionToDynamicValue.Matching match
            ) =>
              "<a " +
                "class=\"Link--YDF ValidatableControlShell--YDF-Guidance-Link\" " +
                $"href=\"{ match.namedCapturingGroups["URI"] }\" " +
                "target=\"_blank\" " +
                "rel=\"noopener noreferrer nofollow\" " +
              ">" +
                match.namedCapturingGroups["anchorText"] +
              "</a>",
          targetString = String.Join("", guidanceSegments) 
        }
      );
      
    }
  }

  
  /* ━━━ Inputting Requirement ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter] 
  public bool required { get; set; } = false;
  
  [Microsoft.AspNetCore.Components.Parameter] 
  public bool mustDisplayAppropriateBadgeIfInputIsRequired { get; set; } = false;
  
  [Microsoft.AspNetCore.Components.Parameter] 
  public bool mustDisplayAppropriateBadgeIfInputIsOptional { get; set; } = false;
  
  [Microsoft.AspNetCore.Components.Parameter] 
  public bool mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge { get; set; } = false;
  
  
  /* ━━━ HTML IDs ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter] 
  public string? coreElementHTML_ID { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter] 
  public string? labelElementHTML_ID { get; set; }
  
  
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
      decorativeVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.DecorativeVariation
      {
        activeOne = this._decorativeVariation,
        standardOnes = typeof(ValidatableControlShell.StandardDecorativeVariations),
        customOnes = ValidatableControlShell.CustomDecorativeVariations
      },
      externalSpaceSeparatedCSS_Classes =
          ((IFlexibleExternalCSS_ClassesSpecifyingForRootElement)this).rootElementSpaceSeparatedExternalCSS_Classes,
      rootElementHTML_Attributes = this.rootElementHTML_Attributes
    }
  );
  
  [Microsoft.AspNetCore.Components.Parameter]
  public IEnumerable<string> mainSlotWrapperAdditionalCSS_Classes { get; set; } = [];
  
  
  /* ━━━ Validation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Errors List ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  [Microsoft.AspNetCore.Components.Parameter] 
  public bool mustDisplayErrorsMessagesIfAny { get; set; } = false;

  [Microsoft.AspNetCore.Components.Parameter] 
  public IEnumerable<string> validationErrorsMessages { get; set; } = [];

  /* ┅┅┅ Validation Statuses List ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  [Microsoft.AspNetCore.Components.Parameter]
  public InputtedValueValidation.AsynchronousChecks.Status? asynchronousChecksCheckStatus { get; set; } = null;
  

  /* ━━━ Conditional Rendering ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected bool mustDisplayRequiredInputBadge => this.required && this.mustDisplayAppropriateBadgeIfInputIsRequired;
  protected bool mustDisplayOptionalInputBadge => !this.required && this.mustDisplayAppropriateBadgeIfInputIsOptional;
  
  protected bool mustDisplayHeader =>
      this.label is not null ||
      this.mustDisplayRequiredInputBadge ||
      this.mustDisplayOptionalInputBadge ||
      this.mustAddInvisibleBadgeForHeightEqualizingWhenNoBadge;
  
  
  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public enum StandardThemes { regular }
  
  protected internal static Type? CustomThemes;
  
  public static void defineThemes(Type customThemes) 
  {
    YDF_ComponentsHelper.ValidateCustomTheme(customThemes);
    ValidatableControlShell.CustomThemes = customThemes;
  }
  
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
    set => YDF_ComponentsHelper.
        AssignThemeIfItIsValid<ValidatableControlShell.StandardThemes>(value, ValidatableControlShell.CustomThemes, ref this._theme);
  }
  
  internal static class SelfAndChildrenComponentsThemesCorrespondence
  {
    internal static Dictionary<string, object> badge = new()
    {
      { nameof(ValidatableControlShell.StandardThemes.regular), Badge.Badge.StandardThemes.regular }
    };
  }
  
  protected object badgeTheme =>
      ValidatableControlShell.SelfAndChildrenComponentsThemesCorrespondence.badge[this._theme];
  
  protected internal static bool mustConsiderThemesCSS_ClassesAsCommon = YDF_ComponentsHelper.areThemesCSS_ClassesCommon;

  public static void considerThemesAsCommon()
  {
    ValidatableControlShell.mustConsiderThemesCSS_ClassesAsCommon = true;
  }

  [Microsoft.AspNetCore.Components.Parameter]
  public bool areThemesCSS_ClassesCommon { get; set; } =
      YDF_ComponentsHelper.areThemesCSS_ClassesCommon || ValidatableControlShell.mustConsiderThemesCSS_ClassesAsCommon;
  

  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public enum StandardGeometricVariations
  {
    regular,
    small
  }

  protected internal static Type? CustomGeometricVariations;

  public static void defineGeometricVariations(Type customGeometricVariations)
  {
    YDF_ComponentsHelper.ValidateCustomGeometricVariation(customGeometricVariations);
    ValidatableControlShell.CustomGeometricVariations = customGeometricVariations;

  }
  
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
  
  internal static class SelfAndChildrenComponentsGeometricVariationsCorrespondence
  {
    internal static Dictionary<string, object> badge = new()
    {
      {
        nameof(ValidatableControlShell.StandardGeometricVariations.regular), 
        Badge.Badge.StandardGeometricVariations.regular
      },
      /* [ Approach ]
       * `Badge__YDF.GeometricVariations.regular` is NOT a mistake because `Badge__YDF.GeometricVariations.small`
       *    is too small, while the actual size can be flexibly adjusted by relative CSS units.
       * */
      {
        nameof(ValidatableControlShell.StandardGeometricVariations.small), 
        Badge.Badge.StandardGeometricVariations.regular
      }
    }; 
  }
  
  protected object badgeGeometricVariation =>
      ValidatableControlShell.SelfAndChildrenComponentsGeometricVariationsCorrespondence.badge[this._geometricVariation];
  
  
  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public enum StandardDecorativeVariations { regular }

  protected internal static Type? CustomDecorativeVariations;
  
  public static void defineDecorativeVariations(Type customDecorativeVariations) {
    YDF_ComponentsHelper.ValidateCustomDecorativeVariation(customDecorativeVariations);
    ValidatableControlShell.CustomDecorativeVariations = CustomDecorativeVariations;
  }  

  protected string _decorativeVariation = nameof(ValidatableControlShell.StandardDecorativeVariations.regular);

  [Microsoft.AspNetCore.Components.Parameter]
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
    set => YDF_ComponentsHelper.AssignDecorativeVariationIfItIsValid<ValidatableControlShell.StandardDecorativeVariations>(
      value, ValidatableControlShell.CustomDecorativeVariations, ref this._decorativeVariation
    );
  }
  
  internal static class SelfAndChildrenComponentsDecorativeVariationsCorrespondence
  {
    internal static Dictionary<string, object> requiredInputBadge = new()
    {
      {
        nameof(ValidatableControlShell.StandardDecorativeVariations.regular), 
        Badge.Badge.StandardDecorativeVariations.veryCatchyBright
      }
    };
    internal static Dictionary<string, object> optionalInputBadge = new()
    {
      {
        nameof(ValidatableControlShell.StandardDecorativeVariations.regular), 
        Badge.Badge.StandardDecorativeVariations.modestlyCalmingBright
      }
    };
  }
  
  protected object requiredInputBadgeDecorativeVariation =>
      ValidatableControlShell.SelfAndChildrenComponentsDecorativeVariationsCorrespondence.
          requiredInputBadge[this._decorativeVariation];
  
  protected object optionalInputBadgeDecorativeVariation =>
      ValidatableControlShell.SelfAndChildrenComponentsDecorativeVariationsCorrespondence.
          optionalInputBadge[this._decorativeVariation];
  
  
  /* ━━━ Child Content ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.RenderFragment? ChildContent { get; set; }
  
  
  /* ━━━ Validation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected override void OnParametersSet()
  {

    if (this.label?.Length == 0) 
    {
      throw new InvalidRazorComponentParameterException(
        new InvalidRazorComponentParameterException.TemplateVariables
        {
          ComponentName = nameof(ValidatableControlShell),
          ParameterName = nameof(this.label),
          MessageSpecificPart = "If defined, must the non-empty string."
        }
      );
    }
    
    if (this.guidance?.Length == 0) 
    {
      throw new InvalidRazorComponentParameterException(
        new InvalidRazorComponentParameterException.TemplateVariables
        {
          ComponentName = nameof(ValidatableControlShell),
          ParameterName = nameof(this.guidance),
          MessageSpecificPart = "If defined, must the non-empty string."
        }
      );
    }
    
  }
  
  
  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public abstract record Localization
  {

    public abstract RequirementBadges requirementBadges { get; }
    
    public record RequirementBadges
    {
      public required string required { get; init; }
      public required string optional { get; init; }
    }
    
  }
  
  public static Localization localization = new ValidatableControlShellEnglishLocalization();

}