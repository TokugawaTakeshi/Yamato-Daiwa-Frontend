namespace Demos.GUI_Components.ThemesShowcase;


public partial class ThemesShowcase : Microsoft.AspNetCore.Components.ComponentBase
{
 
  [Microsoft.AspNetCore.Components.Parameter]
  [Microsoft.AspNetCore.Components.EditorRequired]
  public required Type themes { get; set; }

  [Microsoft.AspNetCore.Components.Parameter]
  public string? themeKeyLabelPrefix { get; set; }

  [Microsoft.AspNetCore.Components.Parameter]
  [Microsoft.AspNetCore.Components.EditorRequired]
  public required Type geometricVariations { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public string? geometricVariationLabelPrefix { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  [Microsoft.AspNetCore.Components.EditorRequired]
  public required Type decorativeVariations { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public string? decorativeVariationLabelPrefix { get; set; }
  
  [Microsoft.AspNetCore.Components.Parameter]
  public string decorativeVariationsWrapperTag { get; set; } = "dl";

  [Microsoft.AspNetCore.Components.Parameter]
  public List<string> decorativeVariationsWrapperAdditionalCSS_Classes { get; set; } = [];
  
  [Microsoft.AspNetCore.Components.Parameter]
  public List<string> decorativeVariationsListItemAdditionalCSS_Classes { get; set; } = [];

  [Microsoft.AspNetCore.Components.Parameter]
  public Microsoft.AspNetCore.Components.RenderFragment<ComponentSlotData> ComponentSlot { get; set; } = null!;

  private string innermostChildListClassAttributeValue =>
    String.Join(
      " ",
      "ThemesShowcase--YDF-ChildList",
      String.Join(
        " ",
        this.decorativeVariationsWrapperAdditionalCSS_Classes
      )
    );
  
  public record ComponentSlotData
  {
    public required string themeKey { get; init; } 
    public required object themeValue { get; init; } 
    public required string geometricVariationKey { get; init; } 
    public required object geometricVariationValue { get; init; } 
    public required string decorativeVariationKey { get; init; } 
    public required object decorativeVariationValue { get; init; } 
  }

}
