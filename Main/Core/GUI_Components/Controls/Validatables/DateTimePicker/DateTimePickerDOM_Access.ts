import type DateTimePicker from "./DateTimePicker";


export const DateTimePickerYDF_GUI_ComponentDOM_AccessResources: DateTimePicker.DOM_AccessResources = {

  rootElement: {
    states: {
      invalid: {
        CSS_CLASS: "DateTimePicker--YDF__InvalidValueState"
      }
    }
  },

  dialog: {

    topActionBar: {

      reusableButtons: {

        switchingToDateSelectingPanel: {
          DATA_ATTRIBUTE_KEY: "data-button-switching_to_date_selecting_panel",
          get COMMON_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
        },

        switchingToMonthSelectingPanel: {
          DATA_ATTRIBUTE_KEY: "data-button-switching_to_month_selecting_panel",
          get COMMON_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
        },

        switchingToYearSelectingPanel: {
          DATA_ATTRIBUTE_KEY: "data-button-switching_to_year_selecting_panel",
          get COMMON_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
        }

      },

      daysActions: {

        DATA_ATTRIBUTE_KEY: "data-days_actions",
        get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; },

        columnsTitles: {

          closestMonths: {
            DATA_ATTRIBUTE_KEY: "data-label-days_actions-closest_months",
            get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
          },

          selectingPanels: {
            DATA_ATTRIBUTE_KEY: "data-label-days_actions-selecting_panels",
            get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
          }

        },

        buttons: {

          switchingToPreviousMonth: {
            DATA_ATTRIBUTE_KEY: "data-button-days_actions-previous_month",
            get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
          },

          switchingToNextMonth: {
            DATA_ATTRIBUTE_KEY: "data-button-days_actions-next_month",
            get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
          }

        }

      },

      monthsActions: {

        DATA_ATTRIBUTE_KEY: "data-months_actions",
        get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; },

        columnsTitles: {

          closestYears: {
            DATA_ATTRIBUTE_KEY: "data-label-months_actions-closest_years",
            get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
          },

          selectingPanels: {
            DATA_ATTRIBUTE_KEY: "data-label-months_actions-selecting_panels",
            get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
          }

        },

        buttons: {

          switchingToPreviousYear: {
            DATA_ATTRIBUTE_KEY: "data-button-switching_to_previous_year",
            get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
          },

          switchingToNextYear: {
            DATA_ATTRIBUTE_KEY: "data-button-switching_to_next_year",
            get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
          }

        }

      },

      yearsActions: {

        DATA_ATTRIBUTE_KEY: "data-years_actions",
        get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; },

        columnsTitles: {

          adjacentYearsSets: {
            DATA_ATTRIBUTE_KEY: "data-label-years_actions-adjacent_years_sets",
            get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
          },

          selectingPanels: {
            DATA_ATTRIBUTE_KEY: "data-label-years_actions-selecting_panels",
            get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
          }

        },

        buttons: {

          switchingToPreviousYearsSet: {
            DATA_ATTRIBUTE_KEY: "data-button-years_actions-previous_month",
            get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
          },

          switchingToNextYearsSet: {
            DATA_ATTRIBUTE_KEY: "data-button-years_actions-next_month",
            get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
          }

        }

      }

    },

    header: {

      currentScopeLabel: {
        DATA_ATTRIBUTE_KEY: "data-header-current_scope_label",
        get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
      },

      guidance: {
        DATA_ATTRIBUTE_KEY: "data-header-guidance",
        get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
      }

    },

    matrices: {

      days: {
        columnTitleCell: {
          DATA_ATTRIBUTE_KEY: "data-column-title-cell",
          get COMMON_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
        }
      },

      years: {
        yearSelectingButton: {
          DATASET_KEY: "year",
          get DATA_ATTRIBUTE_KEY(): string { return `data-${ this.DATASET_KEY }`; }
        }
      }

    },

    bottomActionBar: {
      buttons: {
        unselecting: {
          DATA_ATTRIBUTE_KEY: "data-button-unselecting",
          get INTERNALLY_UNIQUE_SELECTOR(): string { return `[${ this.DATA_ATTRIBUTE_KEY }]`; }
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
