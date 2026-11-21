namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Pagination;


public record PaginationEnglishLocalization : Pagination.Localization
{
  
  public override required Buttons buttons { get; init; } = new()
  {
    toFirstPage = new Button { accessibilityGuidance = "To first page" },
    toPreviousPage = new Button { accessibilityGuidance = "To previous page" },
    toNextPage = new Button { accessibilityGuidance = "To next page" },
    toLastPage = new Button { accessibilityGuidance = "To last page" }
  };
  
}