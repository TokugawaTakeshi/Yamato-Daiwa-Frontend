using YamatoDaiwa.Frontend.GUI_Components.Controls.Validatables.ValidatableControl;

namespace YamatoDaiwa.Frontend.Helpers;


public class JavaScriptFunctionality : IAsyncDisposable
{

  /* ━━━ Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  private static readonly bool IS_SCRIPT_GLOBAL__FOR_DEBUGGING = false;

  private Microsoft.JSInterop.IJSRuntime javaScriptRuntime = null!;
  private Microsoft.JSInterop.IJSObjectReference? YDF;
  
  
  /* ┅┅┅ Submodules ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* ╍╍╍ Expanding Animation ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  private _ExpandingAnimation? _expandingAnimation = null;
  
  public _ExpandingAnimation ExpandingAnimation
  {
    get
    {
      return this._expandingAnimation ??= 
          new _ExpandingAnimation(
            javaScriptRuntime: this.javaScriptRuntime,
            YDF: 
                JavaScriptFunctionality.IS_SCRIPT_GLOBAL__FOR_DEBUGGING ?
                    null :
                    this.getYDF()
            );  
    }
  }
  
  
  /* ╍╍╍ Collapsing Animation ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ */
  private _CollapsingAnimation? _collapsingAnimation = null;
  
  public _CollapsingAnimation CollapsingAnimation
  {
    get
    {
      return this._collapsingAnimation ??= 
          new _CollapsingAnimation(
            javaScriptRuntime: this.javaScriptRuntime,
            YDF: 
                JavaScriptFunctionality.IS_SCRIPT_GLOBAL__FOR_DEBUGGING ?
                    null :
                    this.getYDF()
            );  
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

    this.javaScriptRuntime = javaScriptRuntime;
    
    if (!JavaScriptFunctionality.IS_SCRIPT_GLOBAL__FOR_DEBUGGING)
    {
      this.YDF = 
          await javaScriptRuntime.InvokeAsync<Microsoft.JSInterop.IJSObjectReference>(
            "import", [ "./_content/YamatoDaiwa.Frontend/YDF.module.js" ]
          );  
    }

  }
  
  
  /* ━━━ Functionality ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public async System.Threading.Tasks.Task<IValidatableControl.RootElementOffsetCoordinates> GetDOM_ElementOffsetCoordinates(
    Microsoft.AspNetCore.Components.ElementReference elementReference
  )
  {
    return IS_SCRIPT_GLOBAL__FOR_DEBUGGING ?
        await this.javaScriptRuntime.InvokeAsync<IValidatableControl.RootElementOffsetCoordinates>
            (identifier: "getDOM_ElementOffsetCoordinates", [ elementReference ]) :
        await this.getYDF().InvokeAsync<IValidatableControl.RootElementOffsetCoordinates>(
            identifier: "getDOM_ElementOffsetCoordinates", [ elementReference ]
        );
  }
  
  public async System.Threading.Tasks.Task<bool> IsElementConnected(
    Microsoft.AspNetCore.Components.ElementReference elementReference
  )
  {
    return IS_SCRIPT_GLOBAL__FOR_DEBUGGING ?
        await this.javaScriptRuntime.InvokeAsync<bool>(identifier: "isElementConnected", [ elementReference ]) :
        await this.getYDF().InvokeAsync<bool>(identifier: "isElementConnected", [ elementReference ]);
  }
  
  
  /* ┅┅┅ Submodules ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public class _ExpandingAnimation(
    Microsoft.JSInterop.IJSRuntime javaScriptRuntime,
    Microsoft.JSInterop.IJSObjectReference? YDF
  )
  {
  
    public async ValueTask Animate(CompoundParameter compoundParameter)
    {

      if (YDF is not null)
      {
        _ = YDF.InvokeAsync<uint>("ExpandingAnimation.animate", [ compoundParameter ]);
      } else
      {
        _ = javaScriptRuntime.InvokeAsync<uint>("ExpandingAnimation.animate", [ compoundParameter ]);
      }

      await Task.Delay(
        TimeSpan.FromSeconds(compoundParameter.duration__seconds)
      );
      
    }
    
    public record CompoundParameter
    {
      public required Microsoft.AspNetCore.Components.ElementReference targetElement { get; init; }
      public required float duration__seconds { get; init; }
      private const bool mustReturnPromise = false;
    }
  
  }
  
  public class _CollapsingAnimation(
    Microsoft.JSInterop.IJSRuntime javaScriptRuntime,
    Microsoft.JSInterop.IJSObjectReference? YDF
  )
  {
  
    public async ValueTask Animate(CompoundParameter compoundParameter)
    {

      if (YDF is not null)
      {
        _ = YDF.InvokeAsync<uint>("CollapsingAnimation.animate", [ compoundParameter ]);
      } else
      {
        _ = javaScriptRuntime.InvokeAsync<uint>("CollapsingAnimation.animate", [ compoundParameter ]);
      }

      await Task.Delay(
        TimeSpan.FromSeconds(compoundParameter.duration__seconds)
      );
      
    }
    
    public record CompoundParameter
    {
      public required Microsoft.AspNetCore.Components.ElementReference targetElement { get; init; }
      public required float duration__seconds { get; init; }
      private const bool mustReturnPromise = false;
    }
  
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
    
    System.GC.SuppressFinalize(this);
    
  }
  
}