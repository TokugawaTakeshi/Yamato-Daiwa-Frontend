import type { DateTimePickerLocalization } from "./DateTimePickerLocalization";


export const dateTimePickerYDF_GUI_ComponentLocalization__english: DateTimePickerLocalization = {

  dialog: {

    topActionBar: {

      dateSelectingMode: {

        labels: {
          month: "Month",
          selectingPanels: "Selection Panels"
        },

        buttons: {
          switchingToPreviousMonth: { label: "Prev." },
          switchingToNextMonth: { label: "Next" },
          switchingToMonthSelectingPanel: { label: "Month" },
          switchingToYearSelectingPanel: { label: "Year" }
        }

      },

      monthSelectingMode: {

        labels: {
          year: "Year",
          selectingPanels: "Selection Panels"
        },

        buttons: {
          switchingToPreviousYear: { label: "Prev." },
          switchingToNextYear: { label: "Next" },
          switchingToYearSelectingPanel: { label: "Year" },
          switchingToDateSelectingPanel: { label: "Date" }
        }

      },

      yearSelectingMode: {

        labels: {
          adjacentYearsSets: "Adjacent Years Sets",
          selectingPanels: "Selection Panels"
        },

        buttons: {
          switchingToPreviousYearsSet: { label: "Prev. 25 Years" },
          switchingToNextYearsSet: { label: "Next 25 Years" },
          switchingToMonthSelectingPanel: { label: "Month" },
          switchingToDateSelectingPanel: { label: "Date" }
        }

      }

    },

    header: {

      currentScopeLabel: {

        dateSelectingMode: {

          generate: (
            {
              currentlyDisplayingYear,
              currentlyDisplayingMonth__numerationFrom1
            }: Readonly<{
              currentlyDisplayingYear: number;
              currentlyDisplayingMonth__numerationFrom1: number;
            }>
          ): string => `${ currentlyDisplayingMonth__numerationFrom1 } ${ currentlyDisplayingYear }`

        },

        monthSelectingMode: {

          generate: (
            { currentlyDisplayingYear }: Readonly<{ currentlyDisplayingYear: number; }>
          ): string => `${ currentlyDisplayingYear }`

        },

        yearSelectingMode: {

          generate: (
            { currentlyDisplayingYear }: Readonly<{ currentlyDisplayingYear: number; }>
          ): string => `${ currentlyDisplayingYear }`

        }

      },

      guidances: {

        dateSelecting: "Please set the date",

        monthSelecting: "Please set the month",

        yearSelecting: "Please select the year"

      }

    },

    matrices: {

      days: {

        generateTitleCellContent({ cellIndex }: Readonly<{ cellIndex: number; }>): string {
          /* eslint-disable @typescript-eslint/no-magic-numbers --
           * In this case nothing will become readable if to store each value to constant.
           * Also, the importing of third-party libraries is extremely undesirable for localization bundle. */
          switch (cellIndex) {
            case 0: return "Sun";
            case 1: return "Mon";
            case 2: return "Tue";
            case 3: return "Wed";
            case 4: return "Thu";
            case 5: return "Fri";
            default: return "Sat";
          }
          /* eslint-enable @typescript-eslint/no-magic-numbers */
        }

      },

      months: {

        monthSelectingButton: {
          generateLabel({ monthNumber__numerationFrom1 }: Readonly<{ monthNumber__numerationFrom1: number; }>): string {
            /* eslint-disable @typescript-eslint/no-magic-numbers --
             * In this case nothing will become readable if to store each value to constant.
             * Also, the importing of third-party libraries is extremely undesirable for localization bundle. */
            switch (monthNumber__numerationFrom1) {
              case 1: return "Jan.";
              case 2: return "Feb.";
              case 3: return "Mar.";
              case 4: return "Apr.";
              case 5: return "May";
              case 6: return "Jun.";
              case 7: return "Jul.";
              case 8: return "Aug.";
              case 9: return "Sep.";
              case 10: return "Oct.";
              case 11: return "Nov.";
              default: return "Dec.";
            }
            /* eslint-enable @typescript-eslint/no-magic-numbers */
          }
        }

      }

    },

    bottomActionBar: {

      buttons: {
        unselecting: { label: "Unselect" }
      }

    }

  },

  expandingToggle: {
    collapsedState: { accessibilityGuidance: "Expand the picker" },
    expandedState: { accessibilityGuidance: "Collapse the picker" }
  },

  buttons: {
    previousYear: { label__asShortAsPossible: "Prev. Year" },
    nextYear: { label__asShortAsPossible: "Next Year" },
    previous25Years: { label__asShortAsPossible: "Prev. 25 Years" },
    next25Years: { label__asShortAsPossible: "Next. 25 Years" },
    previousMonth: { label__asShortAsPossible: "Prev. Month" },
    nextMonth: { label__asShortAsPossible: "Next Month" },
    monthSpecifying: { label__asShortAsPossible: "Set Month" },
    yearSpecifying: { label__asShortAsPossible: "Set Year" }
  }

};
