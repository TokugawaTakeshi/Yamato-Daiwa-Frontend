namespace Demos.Pages.GUI_Components.AdmonitionBlock;


public partial class AdmonitionBlockDemoPage : Microsoft.AspNetCore.Components.ComponentBase
{
  
  private const string THEME_KEY_LABEL_PREFIX = "AdmonitionBlock.StandardThemes.";
  private const string GEOMETRIC_VARIATION_KEY_LABEL_PREFIX = "AdmonitionBlock.StandardGeometricVariations.";
  private const string DECORATIVE_VARIATION_KEY_LABEL_PREFIX = "AdmonitionBlock.StandardDecorativeVariations.";

  [Microsoft.AspNetCore.Components.Inject]
  private Microsoft.AspNetCore.Components.NavigationManager navigationManager { get; set; } = null!;
  
  [Microsoft.AspNetCore.Components.SupplyParameterFromQuery(Name = "invisible_headings")]
  private bool mustVisuallyHideAllHeadings { get; set; }

  private record Partials(
    bool minimal,
    bool titles,
    bool defaultSVG_Icons,
    bool customSVG_Icons,
    bool titlesAndSVG_Icons,
    bool dismissingButton,
    bool centeredButton,
    bool actionBar
  );
  
  private Partials partials = null!;
  
  protected override void OnInitialized()
  {
    
    base.OnInitialized();
  
    Uri URI = this.navigationManager.ToAbsoluteUri(this.navigationManager.Uri);
    System.Collections.Specialized.NameValueCollection queryParameters = System.Web.HttpUtility.ParseQueryString(URI.Query);

    this.partials = 
      
        new Partials(
          minimal: queryParameters.Get("minimal") == "true",
          titles: queryParameters.Get("titles") == "true",
          defaultSVG_Icons: queryParameters.Get("default_svg_icons") == "true",
          customSVG_Icons: queryParameters.Get("custom_svg_icons") == "true",
          titlesAndSVG_Icons: queryParameters.Get("titles_and_svg_icons") == "true",
          dismissingButton: queryParameters.Get("dismissing_button") == "true",
          centeredButton: queryParameters.Get("centered_button") == "true",
          actionBar: queryParameters.Get("action_bar") == "true"
        );
    
  }
  
}