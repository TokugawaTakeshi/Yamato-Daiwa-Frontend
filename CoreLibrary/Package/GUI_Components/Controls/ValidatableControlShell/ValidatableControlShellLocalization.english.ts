import AsynchronousValidations from "../../_Auxiliaries/AsynchronousValidations";
import type ValidatableControlShellLocalization from "./ValidatableControlShellLocalization";


const validatableControlShellYDF_ComponentLocalization__english: ValidatableControlShellLocalization = {

  requirementBadges: {
    required: "Required",
    optional: "Optional"
  },

  sampleValidationErrorsMessages: [

    "The user name must have at least 3 characters. " +
      "Please input more characters.",

    "Inputted user name is including the following forbidden characters: \"$\", \"'\". " +
      "Please input the other user name without next characters: \"$\", \"&\", \"'\", \"\"\"."

  ],

  sampleAsynchronousValidationsStatuses: [
    {
      ID: AsynchronousValidations.Statuses.inProgress,
      message: "Checking of the inputted user name for the availability ..."
    },
    {
      ID: AsynchronousValidations.Statuses.finishedAndValid,
      message: "The user name is available"
    },
    {
      ID: AsynchronousValidations.Statuses.finishedButInvalid,
      message:
        "Sorry, but inputted user name including profanity. " +
        "Please select another user name without swearing."
    },
    {
      ID: AsynchronousValidations.Statuses.malfunction,
      message:
          "The malfunction has occurred during the checking of the user name for the availability. " +
          "If the internet connection has been lost, would you please to input the user name once again when the " +
              "internet connection will recover?" +
          "If the internet connection is fine, we are sorry, but it is the system failure. " +
          "Could you please to notify the customers support?"
    }
  ]

};


export default validatableControlShellYDF_ComponentLocalization__english;
