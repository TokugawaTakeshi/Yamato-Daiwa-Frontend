using Microsoft.JSInterop;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.ValidatableControl;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation;


namespace Demos.Pages.GUI_Components.Controls.Validatables.TextBox;


public partial class TextBoxDemoPage : Microsoft.AspNetCore.Components.ComponentBase
{
  
  [Microsoft.AspNetCore.Components.Inject]
  protected Microsoft.JSInterop.IJSRuntime JavaScriptRuntime { get; init; } = null!;
  
  private const string THEME_KEY_LABEL_PREFIX = "TextBox.StandardThemes.";
  private const string GEOMETRIC_VARIATION_KEY_LABEL_PREFIX = "TextBox.StandardGeometricVariations.";
  private const string DECORATIVE_VARIATION_KEY_LABEL_PREFIX = "TextBox.StandardDecorativeVariations.";

  private const string textOverflowSafetyTest = "OVERFLOW_TEST-ghghghghghghghghghghghghghghghghghghghghghghghghghghgh";

  private YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.TextBox.TextBox sampleTextBox = null!;
  
  private Payload samplePayload;

  public TextBoxDemoPage()
  {
    this.samplePayload = new Payload(
      initialValue: "", 
      validation: new SampleValidation(),
      componentInstanceAccessor: () => this.sampleTextBox
    );
  }

  protected override async Task OnInitializedAsync()
  {
    await base.OnInitializedAsync();
    await JavaScriptRuntime.InvokeVoidAsync("setPageDependentStylesheet", "TextBoxGalleryPage");
  }
  
  internal class SampleValidation: InputtedValueValidation
  {
    internal SampleValidation(
    bool? isInputRequired = true,
    string? requiredInputIsMissingValidationErrorMessage = "課題の見出しは必須となります。お手数ですが、入力して下さい。"
  ) : base(
    isValueOfSupportedType: rawValue => rawValue is string,
    hasValueBeenOmitted: rawValue => String.IsNullOrEmpty(rawValue as string),
    inputRequiredFlag: isInputRequired,
    requiredInputIsMissingValidationErrorMessage: requiredInputIsMissingValidationErrorMessage
  ) {}
  } 

}
