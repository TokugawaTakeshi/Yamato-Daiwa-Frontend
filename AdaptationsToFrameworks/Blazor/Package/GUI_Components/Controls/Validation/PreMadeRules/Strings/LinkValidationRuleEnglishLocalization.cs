namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public struct LinkValidationRuleEnglishLocalization : LinkValidationRule.ILocalization
{

  public Func<LinkValidationRule.ILocalization.ErrorMessage.TemplateVariables, string> ErrorMessageBuilder =>
      _ =>
          "The inputted value not seems to be the valid link. " +
          "Please check the correct address of the web page or other document corresponding to your link, then input the " +
            "correct value (copy/paste recommended) .";

}
