namespace YamatoDaiwa.Frontend.GUI_Components.Controls.Validation.PreMadeRules.Strings;


public record EmailAddressInputtedValueValidationRuleEnglishLocalization : 
    EmailAddressInputtedValueValidationRule.ILocalization
{

  public Func<
    EmailAddressInputtedValueValidationRule.ILocalization.ErrorMessage.TemplateVariables, string
  > ErrorMessageBuilder => 
      _ =>
          "The inputted email address is impossible. " +
          "It must the mistyping. " +
          "Please correct the inputted characters.";

}