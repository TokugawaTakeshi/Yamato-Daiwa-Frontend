using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation;
using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace Workbenches.Pages.GUI_Components.Controls.Validatables.TextBox;


public partial class TextBoxWorkbench: Microsoft.AspNetCore.Components.ComponentBase
{
  
  private YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.TextBox.TextBox sampleTextBox = null!;
  
  private YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.ValidatableControl.Payload sampleTextBoxPayload;
  
  private class SampleValidation : InputtedValueValidation
  {
    
    internal SampleValidation() : base(
      isValueOfSupportedType: (object? rawValue) => rawValue is string,
      hasValueBeenOmitted: rawValue => String.IsNullOrEmpty(rawValue as string),
      isInputRequired: () => true,
      staticRules:
      [
        new MinimalCharactersCountInputtedValueValidationRule { MinimalCharactersCount = 2 }
      ]
    ) {}
    
  }

  public TextBoxWorkbench()
  {
    
    this.sampleTextBoxPayload =
      
        new YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.ValidatableControl.Payload(
          initialValue: "", 
          validation: new TextBoxWorkbench.SampleValidation(),
          componentInstanceAccessor: () => this.sampleTextBox
        );
    
  }
}
