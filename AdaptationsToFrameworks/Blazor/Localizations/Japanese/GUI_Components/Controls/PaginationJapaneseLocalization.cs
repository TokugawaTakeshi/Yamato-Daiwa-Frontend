using YamatoDaiwa.Frontend.GUI_Components.Controls.Pagination;

namespace YamatoDaiwa.Frontend.Localizations.Japanese.GUI_Components.Controls;


public record PaginationJapaneseLocalization : Pagination.Localization
{
  
  public override required Buttons buttons { get; init; } = new()
  {
    toFirstPage = new Button { accessibilityGuidance = "一ページ目へ" },
    toPreviousPage = new Button { accessibilityGuidance = "前のページへ" },
    toNextPage = new Button { accessibilityGuidance = "次のページへ" },
    toLastPage = new Button { accessibilityGuidance = "最後のページへ" }
  };
  
}