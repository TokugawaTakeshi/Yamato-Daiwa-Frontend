namespace YamatoDaiwa.Frontend.GUI_Components.BlockingLoadingOverlay;


public partial class BlockingLoadingOverlay : Microsoft.AspNetCore.Components.ComponentBase 
{

  /* ━━━ Common Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Settings-Like ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public const string CSS_NAMESPACE = "BlockingLoadingOverlay--YDF";
  
  
  /* ┅┅┅ State ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected LoadingIndicator.LoadingIndicator.Types loadingIndicatorType = 
        LoadingIndicator.LoadingIndicator.Types.variableWidthArcSpinner;
  
  protected bool isDisplaying = false;
  
  
  /* ━━━ Instance Management ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static BlockingLoadingOverlay? _selfSingleInstance = null;

  public static BlockingLoadingOverlay selfSingleInstance
  {
    get => _selfSingleInstance ?? throw new Exception("BlockingLoadingOverlayが呼び出されたが当コンポーネントがマウントされていないようだ。");
    set => _selfSingleInstance = value;
  }
  
  protected override void OnInitialized()
  {
    base.OnInitialized();
    BlockingLoadingOverlay.selfSingleInstance = this;
  }
  
  
  /* ━━━ Programming Interface ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static void display(
    LoadingIndicator.LoadingIndicator.Types loadingIndicatorType = 
      LoadingIndicator.LoadingIndicator.Types.variableWidthArcSpinner
  )
  {
    
    BlockingLoadingOverlay.selfSingleInstance.loadingIndicatorType = loadingIndicatorType;
    BlockingLoadingOverlay.selfSingleInstance.isDisplaying = true;
    
    BlockingLoadingOverlay.selfSingleInstance.InvokeAsync(BlockingLoadingOverlay.selfSingleInstance.StateHasChanged);
    
  }
  
  public static void hide()
  {
    BlockingLoadingOverlay.selfSingleInstance.isDisplaying = false;
    BlockingLoadingOverlay.selfSingleInstance.InvokeAsync(BlockingLoadingOverlay.selfSingleInstance.StateHasChanged);
  }
  
}
