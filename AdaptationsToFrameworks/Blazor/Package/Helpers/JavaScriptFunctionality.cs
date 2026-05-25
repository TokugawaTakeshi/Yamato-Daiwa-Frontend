using YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.ValidatableControl;

namespace YamatoDaiwa.Frontend.Helpers;


public class JavaScriptFunctionality : IAsyncDisposable
{

  /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private Microsoft.JSInterop.IJSObjectReference? YDF;
  
  
  /* ┅┅┅ Submodules ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Expanding Animation ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  private _ExpandingAnimation? _expandingAnimation = null;
  
  public _ExpandingAnimation ExpandingAnimation
  {
    get
    {
      return this._expandingAnimation ??= new _ExpandingAnimation(this.getYDF());  
    }
  }
  
  
  /* ━━━ Initialization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static JavaScriptFunctionality GetNotInitializedYetInstance()
  {
    return new JavaScriptFunctionality();
  }

  public async System.Threading.Tasks.Task Load(
    Microsoft.JSInterop.IJSRuntime javaScriptRuntime
  )
  {
    this.YDF = 
        await javaScriptRuntime.InvokeAsync<Microsoft.JSInterop.IJSObjectReference>(
          "import", [ "./_content/YamatoDaiwa.Frontend/YDF.js" ]
        );

  }
  
  
  /* ━━━ Functionality ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public async System.Threading.Tasks.Task<IValidatableControl.RootElementOffsetCoordinates> GetDOM_ElementOffsetCoordinates(
    Microsoft.AspNetCore.Components.ElementReference elementReference
  )
  {
    return await this.getYDF().InvokeAsync<IValidatableControl.RootElementOffsetCoordinates>(
      identifier: "getDOM_ElementOffsetCoordinates", [ elementReference ]
    );
  }
  
  
  /* ━━━ Internal Auxiliaries ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private Microsoft.JSInterop.IJSObjectReference getYDF()
  {
    return this.YDF ?? throw new Exception("Expected YDF be initialized");
  }
 
  
  /* ━━━ Lifecycle Hooks ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  async ValueTask IAsyncDisposable.DisposeAsync()
  {
    if (this.YDF is not null)
    {
      await this.YDF.DisposeAsync();
    }
  }
  
}