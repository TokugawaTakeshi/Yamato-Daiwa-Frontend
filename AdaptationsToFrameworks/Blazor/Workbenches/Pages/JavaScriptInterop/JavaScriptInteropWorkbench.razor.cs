using Microsoft.AspNetCore.Components;
using YamatoDaiwa.Frontend.Helpers;

namespace Workbenches.Pages.JavaScriptInterop;


public partial class JavaScriptInteropWorkbench : ComponentBase
{
  
  private readonly JavaScriptFunctionality javaScriptFunctionality = JavaScriptFunctionality.GetNotInitializedYetInstance();

  [Microsoft.AspNetCore.Components.Inject]
  public required Microsoft.JSInterop.IJSRuntime JSRuntime
  {
    get;
    set
    {
      field = value;
      _ = javaScriptFunctionality.Load(JSRuntime);
    }
  }

  protected Microsoft.AspNetCore.Components.ElementReference buttonElement;
  
  
  protected override void OnAfterRender(bool isFirstRender)
  {
    Console.WriteLine("Workbench has been re-rendered");
    Console.WriteLine(isFirstRender);
  }
  
  private async Task TryJavaScriptFunctionality()
  {
    Console.WriteLine(await this.javaScriptFunctionality.GetDOM_ElementOffsetCoordinates(this.buttonElement));
  }
  
}
