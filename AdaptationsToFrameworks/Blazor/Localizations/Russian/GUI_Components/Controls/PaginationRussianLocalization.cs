using YamatoDaiwa.Frontend.GUI_Components.Controls.Pagination;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls;


public record PaginationRussianLocalization : Pagination.Localization
{
  
  public override required Buttons buttons { get; init; } = new()
  {
    toFirstPage = new Button { accessibilityGuidance = "На первую страницу" },
    toPreviousPage = new Button { accessibilityGuidance = "На предыдущую страницу" },
    toNextPage = new Button { accessibilityGuidance = "На следующую страницу" },
    toLastPage = new Button { accessibilityGuidance = "На последнюю страницу" }
  };
  
}