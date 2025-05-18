type ValidatableControlShellLocalization = Readonly<{

  requirementBadges: Readonly<{
    [
      key in
          "required" |
          "optional"
    ]: string;
  }>;

  sampleValidationErrorsMessages: ReadonlyArray<string>;

  sampleAsynchronousValidationsStatuses: ReadonlyArray<{
    ID: "IN_PROGRESS" | "FINISHED_AND_VALID" | "MALFUNCTION";
    message: string;
  }>;

}>;


export default ValidatableControlShellLocalization;
