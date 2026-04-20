using YamatoDaiwa.Frontend.Exceptions;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.ValidatableControl;
using YamatoDaiwa.Frontend.Helpers;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.ValidatableControlShell;


public partial class ValidatableControlShell: 
    Microsoft.AspNetCore.Components.ComponentBase,
    YamatoDaiwa.Frontend.GUI_Components.Abstractions.IHTML_AttributesFallthrough
{
  
  /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public const string CSS_NAMESPACE = "ValidatableControlShell--YDF";

  
  /* ┅┅┅ JavaScript Functionality ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  [Microsoft.AspNetCore.Components.Inject]
  protected Microsoft.JSInterop.IJSRuntime javaScriptRuntime { get; set; } = null!;

  private readonly JavaScriptFunctionality javaScriptFunctionality = JavaScriptFunctionality.GetNotInitializedYetInstance();


  /* ┅┅┅ Elements References ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected Microsoft.AspNetCore.Components.ElementReference rootElement;


  /* ┅┅┅ Common Parameters ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  public Dictionary<string, object>? rootElementHTML_Attributes { get; set; }
  
  

  /* ━━━ Lifecycle Hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected override async System.Threading.Tasks.Task OnAfterRenderAsync(bool firstRender)
  {
    if (firstRender)
    {
      await this.javaScriptFunctionality.Load(this.javaScriptRuntime);
    }
  }

  public async System.Threading.Tasks.ValueTask<IValidatableControl.RootElementOffsetCoordinates> getRootElementOffsetCoordinates()
  {
    return await this.javaScriptFunctionality.GetDOM_ElementOffsetCoordinates(this.rootElement);
  }

  
  /* ━━━ Text Elements ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected string? _label;

  [Microsoft.AspNetCore.Components.Parameter]
  [
    System.Diagnostics.CodeAnalysis.SuppressMessage(
      category: "Microsoft.Performance", 
      checkId: "BL0007",
      Justification = 
          "Validation via setter is not recommended, but no better alternative has been suggested. " +
          "https://stackoverflow.com/q/79935713/4818123"
    )
  ]
  public string? label
  {
    get => this._label;
    set
    {
      
      if (value?.Length == 0)
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

      this._label = value;
      
    }
  }
 
  
  /* ╍╍╍ Guidance ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  protected string? _guidance;
  protected string? cachedGuidance = null;
  protected string? formattedGuidance;
  
  [Microsoft.AspNetCore.Components.Parameter] 
  [
    System.Diagnostics.CodeAnalysis.SuppressMessage(
      category: "Microsoft.Performance", 
      checkId: "BL0007", 
      Justification = 
          "Validation via setter is not recommended, but no better alternative has been suggested. " +
          "https://stackoverflow.com/q/79935713/4818123"
    )
  ]
  public string? guidance
  {
    get => this._guidance;
    set
    {
      
      if (value?.Length == 0)
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

      if (value != this.cachedGuidance)
      {
        this._guidance = value;
        this.cachedGuidance = this.guidance;
        this.formattedGuidance = ValidatableControlShell.formatGuidance(this.guidance);
      }
      
    }
  }

  protected static string? formatGuidance(string? guidance)
  {
    return guidance is not null ?
      Markdown.ReplaceMarkdownLink(
        Markdown.ReplaceMarkdownBold(
          guidance,
          replacer: (string boldedContent) =>
            $"<span class=\"ValidatableControlShell--YDF-Guidance-AccentedFragment\">{ boldedContent }</span>"
        ),
        replacer: (YamatoDaiwa.Frontend.Helpers.Markdown.LinkData linkData) =>
            "<a " +
              "class=\"Link--YDF ValidatableControlShell--YDF-Guidance-Link\" " +
              $"href=\"{ linkData.URI }\" " +
              "target=\"_blank\" " +
              "rel=\"noopener noreferrer nofollow\"" +
            ">" +
              linkData.anchorText +
            "</a>"
      ) :
      null;
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
      rootElementHTML_Attributes = this.rootElementHTML_Attributes
    }
  );
  
  [Microsoft.AspNetCore.Components.Parameter]
  public IEnumerable<string> mainSlotWrapperAdditionalCSS_Classes { get; set; } = [];
  
  
  /* ━━━ Validation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Errors List ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  [Microsoft.AspNetCore.Components.Parameter] 
  public bool mustDisplayErrorsMessagesIfAny { get; set; } = false;

  public IEnumerable<string> _validationErrorsMessages = [];
  
  [Microsoft.AspNetCore.Components.Parameter] 
  public IEnumerable<string> validationErrorsMessages
  {
    get => this._validationErrorsMessages;
    set
    {
      this._validationErrorsMessages = value;
      this.animateErrorsMessagesListIfMust();
    }
  }
  
  /* [ Theory ]
   * Even if `validationErrorsMessages` has become an empty array, the validation errors messages are still
   *   required to animate the collapsing.
   * */
  protected IEnumerable<string> validationErrorsMessagesCopyForAnimating = [];

  protected const float ERRORS_LIST_EXPANDING_ANIMATION_DURATION_PER_ONE_ERROR_MESSAGE__SECONDS = 0.2F;
  protected const float ERRORS_LIST_COLLAPSING_ANIMATION_DURATION__SECONDS = 0.1F;
  
  protected uint errorsListAnimationDuration__milliseconds =>
      (uint)(
        (
          this.validationErrorsMessages.Any() ?
              ValidatableControlShell.ERRORS_LIST_EXPANDING_ANIMATION_DURATION_PER_ONE_ERROR_MESSAGE__SECONDS *
                  this.validationErrorsMessages.Count() :
            ValidatableControlShell.ERRORS_LIST_COLLAPSING_ANIMATION_DURATION__SECONDS *
                  this.validationErrorsMessagesCopyForAnimating.Count()
        ) * 
            1000.0F
      );
  //- ━━━ TODO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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
  
  
  /* ━━━ Lifecycle Hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected override void OnInitialized()
  {
    base.OnInitialized();
    this.validationErrorsMessagesCopyForAnimating = this.validationErrorsMessages.ToArray();
  }

  
  /* ━━━ Child Content ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.RenderFragment? ChildContent { get; set; }
  

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