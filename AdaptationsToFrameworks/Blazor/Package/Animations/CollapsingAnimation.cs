using Microsoft.JSInterop;


namespace YamatoDaiwa.Frontend.Animations;


public class CollapsingAnimation(IJSRuntime jsRuntime) : IAsyncDisposable
{
  
  private readonly Lazy<Task<IJSObjectReference>> YDF_ModuleLoading = 
      new(() => jsRuntime.InvokeAsync<IJSObjectReference>("import", "./YDF.js").AsTask());

  public async ValueTask Animate(CompoundParameter compoundParameter)
  {
    
    IJSObjectReference module = await YDF_ModuleLoading.Value;

    double animationDuration__milliseconds =
        compoundParameter.duration__milliseconds ??
        (compoundParameter.duration__seconds ?? 0) * 1000;

    _ = module.InvokeAsync<CompoundParameter>("CollapsingAnimation.animate", compoundParameter);

    await Task.Delay(
      TimeSpan.FromMilliseconds(animationDuration__milliseconds)
    );
    
  }
  
  public record CompoundParameter
  {
    public Microsoft.AspNetCore.Components.ElementReference animatedElement { get; init; }
    public Microsoft.AspNetCore.Components.ElementReference? mustReplaceWithOnComplete { get; init; }
    public bool? mustRemoveOnComplete { get; init; }
    public double? duration__seconds { get; init; }
    public double? duration__milliseconds { get; init; }
  }
  
  public async ValueTask DisposeAsync()
  {
    if (YDF_ModuleLoading.IsValueCreated)
    {
      IJSObjectReference module = await YDF_ModuleLoading.Value;
      await module.DisposeAsync();
    }
  }
  
}
