using YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;

namespace YamatoDaiwa.Frontend.Localizations.Russian.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public record EmailAddressInputtedValueValidationRuleRussianLocalization : 
    EmailAddressInputtedValueValidationRule.ILocalization
{

  public Func<
    EmailAddressInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      _ =>
          "Введённая последовательность символов не соответствует формату электронного адреса. " +
          "Пожалуйста, проверьте правильный электронный адрес, затем введите его.";

}