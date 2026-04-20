using YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.ValidatableControl;

namespace YamatoDaiwa.Frontend.Helpers;


public class JavaScriptFunctionality : IAsyncDisposable
{

  private Microsoft.JSInterop.IJSObjectReference? YDF;
  
  public static JavaScriptFunctionality GetNotInitializedYetInstance()
  {
    return new JavaScriptFunctionality();
  }

  public async System.Threading.Tasks.Task Load(
    Microsoft.JSInterop.IJSRuntime javaScriptRuntime
  )
  {
     this.YDF = await javaScriptRuntime.InvokeAsync<Microsoft.JSInterop.IJSObjectReference>(
        "import", [ "./_content/YamatoDaiwa.Frontend/YDF.js" ]
     );
  }
  
  public async System.Threading.Tasks.Task<IValidatableControl.RootElementOffsetCoordinates> GetDOM_ElementOffsetCoordinates(
    Microsoft.AspNetCore.Components.ElementReference elementReference
  )
  {
    return await this.getYDF().InvokeAsync<IValidatableControl.RootElementOffsetCoordinates>("getDOM_ElementOffsetCoordinates", [ elementReference ]);
  } 
  
  private Microsoft.JSInterop.IJSObjectReference getYDF()
  {
    return this.YDF ?? throw new Exception("Expected YDF be initialized");
  }
 
  async ValueTask IAsyncDisposable.DisposeAsync()
  {
    if (this.YDF is not null)
    {
      await this.YDF.DisposeAsync();
    }
  }
  
}