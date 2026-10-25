export type ValidatableControlShellLocalization = Readonly<{

  requirementBadges: Readonly<{
    [
      key in
          "required" |
          "optional"
    ]: string;
  }>;

}>;
