import type ValidatableControlShell from "./ValidatableControlShell";


const validatableControlShellDOM_AccessResources: ValidatableControlShell.DOM_AccessResources = {

  validationErrorsMessagesListMountingPoint: {
    DATA_ATTRIBUTE_KEY: "data-validation_errors_messages_mounting_point",
    get INTERNALLY_UNIQUE_SELECTOR_WITHOUT_SCOPE_PSEUDO_CLASS(): string {
      return `[${ this.DATA_ATTRIBUTE_KEY }]`;
    },
    get INTERNALLY_UNIQUE_SELECTOR(): string {
      return `:scope > ${ this.INTERNALLY_UNIQUE_SELECTOR_WITHOUT_SCOPE_PSEUDO_CLASS }`;
    }
  },

  asynchronousValidationsStatusesListMountingPoint: {
    DATA_ATTRIBUTE_KEY: "data-asynchronous_validations_statuses_list_mounting_point",
    get INTERNALLY_UNIQUE_SELECTOR_WITHOUT_SCOPE_PSEUDO_CLASS(): string {
      return `[${ this.DATA_ATTRIBUTE_KEY }]`;
    },
    get INTERNALLY_UNIQUE_SELECTOR(): string {
      return `:scope > ${ this.INTERNALLY_UNIQUE_SELECTOR_WITHOUT_SCOPE_PSEUDO_CLASS }`;
    }
  }

};


export default validatableControlShellDOM_AccessResources;
