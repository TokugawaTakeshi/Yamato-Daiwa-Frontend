using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct NoLinksInputtedValueValidationRuleRussianLocalization : NoLinksInputtedValueValidationRule.ILocalization
{

  public Func<NoLinksInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> ErrorMessageBuilder =>
      templateVariables =>
          "Обнаружена похожая на ссылку последовательность символов в то время как ссылки не допускаются. " +
          "Пожалуйста, удалите ссылку.";

}
