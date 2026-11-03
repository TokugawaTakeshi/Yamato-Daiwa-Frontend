namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct NoLinksInputtedValueValidationRuleEnglishLocalization : NoLinksInputtedValueValidationRule.ILocalization
{

  public Func<NoLinksInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> ErrorMessageBuilder =>
      _ =>
          "The link-like characters sequence detected while the links are not allowed. " +
          "We are sorry, but please remove the link.";

}
