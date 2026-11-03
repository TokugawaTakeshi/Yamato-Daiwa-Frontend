using System.Text.RegularExpressions;
using Microsoft.JSInterop;
using YamatoDaiwa.CSharpExtensions;
using YamatoDaiwa.Frontend.GUI_Components.Abstractions;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.ValidatableControl;
using YamatoDaiwa.Frontend.Helpers;

namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.TextBox;


public partial class TextBox : 
    YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.InputtableControl, 
    IValidatableControl,
    YamatoDaiwa.Frontend.GUI_Components.Abstractions.IHTML_AttributesFallthrough,
    YamatoDaiwa.Frontend.GUI_Components.Abstractions.IFlexibleExternalCSS_ClassesSpecifyingForRootElement
{

  public const string CSS_NAMESPACE = "TextBox--YDF";
  
  [Microsoft.AspNetCore.Components.Parameter(CaptureUnmatchedValues = true)]
  public Dictionary<string, object>? rootElementHTML_Attributes { get; set; }
  
  
  /* ━━━ HTML Type ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public enum HTML_Types
  {
    regular,
    email,
    number,
    password,
    phoneNumber,
    URI,
    hidden
  }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public HTML_Types HTML_Type { get; set; } = HTML_Types.regular;
  
  [Microsoft.AspNetCore.Components.Parameter]  
  public bool multiline { get; set; } = false;
  
  
  /* ━━━ Payload / Validation ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected string rawValue = "";
  
  /* [ Initialization ] Will be initialized via required parameter "payload". */
  protected ValidatableControl.Payload _payload = null!;

  [Microsoft.AspNetCore.Components.Parameter]
  [Microsoft.AspNetCore.Components.EditorRequired]
  public required ValidatableControl.Payload payload
  {
    get => _payload;
    set
    {
      this._payload = value;
      this.synchronizeRawValueWithPayloadValue();
    }
  }
  
  public enum ValidityHighlightingActivationModes
  {
    immediate,
    onFirstInputtedCharacter,
    onFocusOut
  }
  
  [Microsoft.AspNetCore.Components.Parameter]
  [Microsoft.AspNetCore.Components.EditorRequired]
  public required TextBox.ValidityHighlightingActivationModes validityHighlightingActivationMode { get; set; }
  
  
  /* ━━━ Public Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Requirements ─────────────────────────────────────────────────────────────────────────────────────────────── */
  protected ValidatableControlShell.ValidatableControlShell validatableControlShell = null!;
  
  [Microsoft.AspNetCore.Components.Inject]
  protected Microsoft.JSInterop.IJSRuntime JSRuntime { get; set; } = null!;

  
  /* ─── Interface implementation ─────────────────────────────────────────────────────────────────────────────────── */
  public new IValidatableControl HighlightInvalidInput()
  {
    base.HighlightInvalidInput();
    return this;
  }
  
  public ValueTask<IValidatableControl.RootElementOffsetCoordinates> GetRootElementOffsetCoordinates()
  {
    return this.JSRuntime.InvokeAsync<IValidatableControl.RootElementOffsetCoordinates>(
          "getDOM_ElementOffsetCoordinates", this.validatableControlShell
        );
  }
  
  public IValidatableControl Focus()
  {
    _ = this.JSRuntime.InvokeVoidAsync("putFocusOnElement", this.nativeInputAcceptingElement);
    return this;
  }

  
  /* ━━━ Constructor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public TextBox()
  {
    this.INPUT_OR_TEXT_AREA_ELEMENT_HTML_ID = base.coreElementHTML_ID ?? TextBox.generateInputOrTextAreaElementHTML_ID();
  }
  
  
  /* ━━━ Lifecycle hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected override void OnInitialized()
  {
    
    base.OnInitialized();

    if (
      String.IsNullOrEmpty(this.label) &&
      String.IsNullOrEmpty(this.externalLabelHTML_ID) &&
      String.IsNullOrEmpty(this.accessibilityGuidance)
    )
    {
      throw new Exception(
        "For the basic accessibility, either \"label\" or \"externalLabelHTML_ID\" or \"accessibilityGuidance\"" +
            "must be specific with non-empty string for the \"TextBox\" component."
      );
    }
    
    this.synchronizeRawValueWithPayloadValue();
    this.invalidInputHighlightingIfAnyValidationErrorsMessages =
          this.validityHighlightingActivationMode == TextBox.ValidityHighlightingActivationModes.immediate;

  }

  
  /* ━━━ Preventing of inputting of invalid value ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]  
  public ulong? minimalCharactersCount { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]  
  public ulong? maximalCharactersCount { get; set; }
  
  
  [Microsoft.AspNetCore.Components.Parameter]  
  public ulong? minimalNumericValue { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]  
  public ulong? maximalNumericValue { get; set; }
  
  
  [Microsoft.AspNetCore.Components.Parameter]  
  public bool valueMustBeTheNonNegativeIntegerOfRegularNotation { get; set; } = false;
   
  [Microsoft.AspNetCore.Components.Parameter]  
  public bool valueMustBeTheDigitsSequence { get; set; } = false;

  
  /* ━━━ Raw value transforments ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter] 
  public bool mustConvertEmptyStringToNull { get; set; } = false;
  
  [Microsoft.AspNetCore.Components.Parameter] 
  public bool mustConvertEmptyStringToZero { get; set; } = false;
  
  
  /* ━━━ Events handling ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  // TODO https://stackoverflow.com/q/77744176/4818123
  protected bool mustPreventOnKeyDownEvent(Microsoft.AspNetCore.Components.Web.KeyboardEventArgs keyboardEventArguments) =>
      (this.valueMustBeTheNonNegativeIntegerOfRegularNotation || this.valueMustBeTheDigitsSequence) &&
      new Regex("^[+\\-e.]$").IsMatch(keyboardEventArguments.Key);

  protected void onInput(Microsoft.AspNetCore.Components.ChangeEventArgs inputtingEvent)
  {

    if (
      this.validityHighlightingActivationMode == TextBox.ValidityHighlightingActivationModes.onFirstInputtedCharacter &&
      !this.invalidInputHighlightingIfAnyValidationErrorsMessages
    )
    {
      this.invalidInputHighlightingIfAnyValidationErrorsMessages = true;
    }
    
    string stringifiedInputtedValue = inputtingEvent.Value?.ToString() ?? "";
    
    if (stringifiedInputtedValue.Length == 0)
    {

      if (this.mustConvertEmptyStringToZero)
      {
        this.rawValue = "0";
        this.payload.SetValue(0, asynchronousValidationDelay__seconds: 1);
        return;
      }
    
      
      if (this.mustConvertEmptyStringToNull)
      {
        this.payload.SetValue(null, asynchronousValidationDelay__seconds: 1);
      }
      
    }


    if (this.HTML_Type == TextBox.HTML_Types.number)
    {

      if (this.mustConvertEmptyStringToZero && stringifiedInputtedValue.StartsWith('0'))
      {
      
        string inputtedValueWithPaddedZeros = Regex.Replace(stringifiedInputtedValue, "^0+", "");
        
        if (inputtedValueWithPaddedZeros.Length == 0)
        {
          this.payload.SetValue(0);
          return;
        }


        this.rawValue = inputtedValueWithPaddedZeros;
        // TODO First we need which value the user needs
        // this.payload.SetValue(this.rawValue.Contains('.') ? Int32.TryParse(inputtedValueWithPaddedZeros, out intVluae)  );
        return;
        
      }


      if (this.HTML_Type == TextBox.HTML_Types.number)
      {
        // TODO As above
      }
      
      return;
      
    }
    
    
    this.payload.SetValue(stringifiedInputtedValue);
    
  }

  protected void onFocusOut()
  {
    this.invalidInputHighlightingIfAnyValidationErrorsMessages = true;
  }
  
  
  protected void synchronizeRawValueWithPayloadValue()
  {
    this.rawValue = this.payload.Value switch
    {
      string stringValue => stringValue,
      IConvertible convertibleValue => Convert.ToString(convertibleValue),
      null => "",
      _ => this.rawValue
    };
  }

  
  /* ━━━ Textings ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  [Microsoft.AspNetCore.Components.Parameter]
  public string? placeholder { get; set; } = null;
  
  
  // TODO コンストラクタの前になければいけない
  /* ━━━ HTML IDs ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ─── Input or text area ──────────────────────────────────────────────────────────────────────────────────────── */
  protected static uint counterForInputOrTextAreaElementHTML_ID_Generating = 0;
  
  protected static string generateInputOrTextAreaElementHTML_ID() {
    TextBox.counterForInputOrTextAreaElementHTML_ID_Generating++;
    return $"TEXT_BOX--YDF-INPUT_OR_TEXT_AREA_ELEMENT-{ TextBox.counterForInputOrTextAreaElementHTML_ID_Generating }";
  }

  protected readonly string INPUT_OR_TEXT_AREA_ELEMENT_HTML_ID;
  
  /* ─── Label ───────────────────────────────────────────────────────────────────────────────────────────────────── */
  [Microsoft.AspNetCore.Components.Parameter] 
  public string? labelElementHTML_ID { get; set; }
  
  
  /* ━━━ Children components/elements ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected Microsoft.AspNetCore.Components.ElementReference nativeInputAcceptingElement;


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public enum StandardThemes { regular }
  
  protected internal static Type? CustomThemes;

  public static void defineThemes(Type customThemes)
  {
    YDF_ComponentsHelper.ValidateCustomTheme(customThemes);
    TextBox.CustomThemes = customThemes;
  }

  protected string _theme = nameof(TextBox.StandardThemes.regular);
  
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
    set => YDF_ComponentsHelper.AssignThemeIfItIsValid<TextBox.StandardThemes>(
      value, TextBox.CustomThemes, ref this._theme
    );
  }

  protected internal static bool mustConsiderThemesCSS_ClassesAsCommon = YDF_ComponentsHelper.areThemesCSS_ClassesCommon;

  public static void considerThemesAsCommon()
  {
    TextBox.mustConsiderThemesCSS_ClassesAsCommon = true;
  }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public bool areThemesCSS_ClassesCommon { get; set; } = 
      YDF_ComponentsHelper.areThemesCSS_ClassesCommon || TextBox.mustConsiderThemesCSS_ClassesAsCommon;
  
  
  /* ┅┅┅ Geometry ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public enum StandardGeometricVariations
  {
    regular, 
    small,
    labelLike
  }

  protected internal static Type? CustomGeometricVariations;
  
  public static void defineCustomGeometricVariations(Type customGeometricVariations)
  {
    YDF_ComponentsHelper.ValidateCustomGeometricVariation(customGeometricVariations);
    TextBox.CustomGeometricVariations = CustomGeometricVariations;
  }

  protected string _geometricVariation = nameof(TextBox.StandardGeometricVariations.regular);

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
    set => YDF_ComponentsHelper.AssignGeometricVariationIfItIsValid<TextBox.StandardGeometricVariations>(
    value, TextBox.CustomGeometricVariations, ref this._geometricVariation
    );
  }
  
  
  /* ┅┅┅ Decoration ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public enum StandardDecorativeVariations
  {
    regular,
    labelLike
  }

  protected internal static Type? CustomDecorativeVariations;

  public static void defineCustomDecorativeVariations(Type customDecorativeVariations) {
    YDF_ComponentsHelper.ValidateCustomDecorativeVariation(customDecorativeVariations);
    TextBox.CustomDecorativeVariations = customDecorativeVariations;
  }

  protected string _decorativeVariation = nameof(TextBox.StandardDecorativeVariations.regular);

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
    set => YDF_ComponentsHelper.AssignDecorativeVariationIfItIsValid<TextBox.StandardDecorativeVariations>(
      value, TextBox.CustomDecorativeVariations, ref this._decorativeVariation
    );
  }
  
  
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
      CSS_Namespace = TextBox.CSS_NAMESPACE,
      theme = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.Theme
      {
        activeOne = this._theme,
        standardOnes = typeof(TextBox.StandardThemes),
        customOnes = TextBox.CustomThemes,
        areThemesCSS_ClassesCommon = this.areThemesCSS_ClassesCommon 
      },
      geometricVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.GeometricVariation
      {
        activeOne = this._geometricVariation,
        standardOnes = typeof(TextBox.StandardGeometricVariations),
        customOnes = TextBox.CustomGeometricVariations
      },
      decorativeVariation = new YDF_ComponentsHelper.SettingsForGeneratingOfClassAttributeValueForRootElement.DecorativeVariation
      {
        activeOne = this._decorativeVariation,
        standardOnes = typeof(TextBox.StandardDecorativeVariations),
        customOnes = TextBox.CustomDecorativeVariations
      },
      otherInternalCSS_Classes = new List<string>().
          AddElementToEndIf("TextBox--YDF__Multiline", this.multiline).
          AddElementToEndIf("TextBox--YDF__DisabledState", this.disabled).
          AddElementToEndIf("TextBox--YDF__ReadonlyState", this.@readonly),
      rootElementHTML_Attributes = this.rootElementHTML_Attributes,
      externalSpaceSeparatedCSS_Classes =
          ((IFlexibleExternalCSS_ClassesSpecifyingForRootElement)this).rootElementSpaceSeparatedExternalCSS_Classes
    }
  );
  
  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public abstract record Localization
  {
    
    public record Clickable: Helpers.Localization.IClickableWithStaticAccessibilityGuidance
    {
       public required string accessibilityGuidance { get; init; }
    }
    
    public abstract Clickable valueCopyingButton { get; init; }
    
    public record PasswordDisplayingToggle
    {
      public required Clickable displayingState { get; init; }
      public required Clickable hiddenState { get; init; }
    }

    public abstract PasswordDisplayingToggle passwordDisplayingToggle { get; init; } 
    
  }
  
  public static Localization localization = new TextBoxEnglishLocalization();

}