type ValidatableControlShellDOM_AccessResources = Readonly<{

  validationErrorsMessagesList: Readonly<{

    DATA_ATTRIBUTE_KEY: string;
    INTERNALLY_UNIQUE_SELECTOR: string;

    item: Readonly<{
      DATA_ATTRIBUTE_KEY: string;
      SELECTOR: string;
    }>;

    mountingPoint: Readonly<{
      DATA_ATTRIBUTE_KEY: string;
      INTERNALLY_UNIQUE_SELECTOR_WITHOUT_SCOPE_PSEUDO_CLASS: string;
      INTERNALLY_UNIQUE_SELECTOR: string;
    }>;

  }>;

  asynchronousValidationsStatusesList: Readonly<{

    DATA_ATTRIBUTE_KEY: string;
    INTERNALLY_UNIQUE_SELECTOR: string;

    item: Readonly<{

      DATA_ATTRIBUTE_KEY: string;
      SELECTOR: string;

      byStates: Readonly<{
        [
          keys in
              "inProgress" |
              "succeededAndValid" |
              "malfunction"
        ]: Readonly<{
          DATA_ATTRIBUTE_KEY: string;
          SELECTOR: string;
        }>;
      }>;

      text: Readonly<{
        DATA_ATTRIBUTE_KEY: string;
        SELECTOR: string;
      }>;

    }>;

    mountingPoint: Readonly<{
      DATA_ATTRIBUTE_KEY: string;
      INTERNALLY_UNIQUE_SELECTOR_WITHOUT_SCOPE_PSEUDO_CLASS: string;
      INTERNALLY_UNIQUE_SELECTOR: string;
    }>;

  }>;

}>;


const ValidatableControlShellDOM_AccessResources: ValidatableControlShellDOM_AccessResources = {

  validationErrorsMessagesList: {

    DATA_ATTRIBUTE_KEY: "data-validation_errors_messages_list",
    get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; },

    item: {
      DATA_ATTRIBUTE_KEY: "data-validation_errors_messages_list_item",
      get SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
    },

    mountingPoint: {
      DATA_ATTRIBUTE_KEY: "data-validation_errors_messages_mounting_point",
      get INTERNALLY_UNIQUE_SELECTOR_WITHOUT_SCOPE_PSEUDO_CLASS(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; },
      get INTERNALLY_UNIQUE_SELECTOR(): string {
        return `:scope > ${ this.INTERNALLY_UNIQUE_SELECTOR_WITHOUT_SCOPE_PSEUDO_CLASS }`;
      }
    }

  },

  asynchronousValidationsStatusesList: {

    DATA_ATTRIBUTE_KEY: "data-asynchronous_validations_statuses_list",
    get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; },

    item: {

      DATA_ATTRIBUTE_KEY: "data-asynchronous_validations_statuses_list_item",
      get SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; },

      byStates: {

        inProgress: {
          DATA_ATTRIBUTE_KEY: "data-asynchronous_validations_statuses_list_item__in_progress_state",
          get SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
        },

        succeededAndValid: {
          DATA_ATTRIBUTE_KEY: "data-asynchronous_validations_statuses_list_item__succeeded_and_valid_state",
          get SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
        },

        malfunction: {
          DATA_ATTRIBUTE_KEY: "data-asynchronous_validations_statuses_list_item__malfunction_state",
          get SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
        }

      },

      text: {
        DATA_ATTRIBUTE_KEY: "data-asynchronous_validations_statuses_list_item-text",
        get SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
      }

    },

    mountingPoint: {
      DATA_ATTRIBUTE_KEY: "data-asynchronous_validations_statuses_list_mounting_point",
      get INTERNALLY_UNIQUE_SELECTOR_WITHOUT_SCOPE_PSEUDO_CLASS(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; },
      get INTERNALLY_UNIQUE_SELECTOR(): string {
        return `:scope > ${ this.INTERNALLY_UNIQUE_SELECTOR_WITHOUT_SCOPE_PSEUDO_CLASS }`;
      }
    }

  }

};


export default ValidatableControlShellDOM_AccessResources;
