export type DateTimePickerYDF_GUI_ComponentDOM_Access = Readonly<{

  rootElement: Readonly<{
    states: Readonly<{
      invalid: Readonly<{
        CSS_CLASS: string;
      }>;
    }>;
  }>;

  dialog: Readonly<{

    topActionBar: Readonly<{

      buttons: Readonly<{
        switchingToPreviousMonth: Readonly<{
          DATA_ATTRIBUTE: string;
          UNIQUE_SELECTOR: string;
        }>;
        switchingToNextMonth: Readonly<{
          DATA_ATTRIBUTE: string;
          UNIQUE_SELECTOR: string;
        }>;
        switchingToMonthSelectingPanel: Readonly<{
          DATA_ATTRIBUTE: string;
          UNIQUE_SELECTOR: string;
        }>;
        switchingToYearSelectingPanel: Readonly<{
          DATA_ATTRIBUTE: string;
          UNIQUE_SELECTOR: string;
        }>;
      }>;

    }>;

  }>;

  nativeInput: Readonly<{
    UNIQUE_SELECTOR: string;
  }>;

  indicatorButton: Readonly<{
    UNIQUE_SELECTOR: string;
    label: Readonly<{
      UNIQUE_SELECTOR: string;
    }>;
  }>;

}>;


export const dateTimePickerYDF_GUI_ComponentDOM_Access: DateTimePickerYDF_GUI_ComponentDOM_Access = {

  rootElement: {
    states: {
      invalid: {
        CSS_CLASS: "DateTimePicker--YDF__InvalidValueState"
      }
    }
  },

  dialog: {
    topActionBar: {
      buttons: {
        switchingToPreviousMonth: {
          DATA_ATTRIBUTE: "data-button-previous_month",
          get UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE }]`; }
        },
        switchingToNextMonth: {
          DATA_ATTRIBUTE: "data-button-next_month",
          get UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE }]`; }
        },
        switchingToMonthSelectingPanel: {
          DATA_ATTRIBUTE: "data-button-month_selecting_panel",
          get UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE }]`; }
        },
        switchingToYearSelectingPanel: {
          DATA_ATTRIBUTE: "data-button-year_selecting_panel",
          get UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE }]`; }
        }
      }
    }
  },

  nativeInput: {
    UNIQUE_SELECTOR: ".DateTimePicker--YDF-NativeInputElement"
  },

  indicatorButton: {
    UNIQUE_SELECTOR: ".DateTimePicker--YDF-IndicatorButton",
    label: {
      UNIQUE_SELECTOR: ".DateTimePicker--YDF-IndicatorButton-Label"
    }
  }

};
