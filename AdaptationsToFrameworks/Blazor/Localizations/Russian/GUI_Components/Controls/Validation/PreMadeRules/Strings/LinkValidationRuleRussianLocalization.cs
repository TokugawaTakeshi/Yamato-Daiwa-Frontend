using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct LinkValidationRuleRussianLocalization : LinkValidationRule.ILocalization
{

  public Func<LinkValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> ErrorMessageBuilder =>
      _ =>
          "Введённая последовательность символов не похожа на ссылку. " +
          "Пожалуйста, проверьте источник, предоставивший эту ссылку, а также соответствует ли эта ссылка существующей " +
            "веб-странице или файлу, после чего введите верное значение (рекомендуется копирование/вставка).";

}
