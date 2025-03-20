import type { DateTimePickerLocalization } from "@yamato-daiwa/frontend";


export const dateTimePickerYDF_ComponentLocalization__russian: DateTimePickerLocalization = {

  dialog: {

    topActionBar: {

      dateSelectingMode: {

        labels: {
          month: "Месяц",
          selectingPanels: "Панели выбора"
        },

        buttons: {
          switchingToPreviousMonth: { label: "Пред." },
          switchingToNextMonth: { label: "След." },
          switchingToMonthSelectingPanel: { label: "Месяц" },
          switchingToYearSelectingPanel: { label: "Год" }
        }

      },

      monthSelectingMode: {

        labels: {
          year: "Год",
          selectingPanels: "Панели выбора"
        },

        buttons: {
          switchingToPreviousYear: { label: "Пред." },
          switchingToNextYear: { label: "След." },
          switchingToYearSelectingPanel: { label: "Год" },
          switchingToDateSelectingPanel: { label: "День" }
        }

      },

      yearSelectingMode: {

        labels: {
          adjacentYearsSets: "Годы",
          selectingPanels: "Панели выбора"
        },

        buttons: {
          switchingToPreviousYearsSet: { label: "Пред. 25 лет" },
          switchingToNextYearsSet: { label: "След. 25 лет" },
          switchingToMonthSelectingPanel: { label: "Месяц" },
          switchingToDateSelectingPanel: { label: "День" }
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

        dateSelecting: "Укажите дату",

        monthSelecting: "Укажите месяц",

        yearSelecting: "Укажите год"

      }

    },

    matrices: {

      months: {

        monthSelectingButton: {

          /** @see https://gramota.ru/spravka/vopros/242637 */
          generateLabel({ monthNumber__numerationFrom1 }: Readonly<{ monthNumber__numerationFrom1: number; }>): string {
            /* eslint-disable @typescript-eslint/no-magic-numbers --
             * In this case nothing will become readable if to store each value to constant.
             * Also, the importing of third-party libraries is extremely undesirable for localization bundle. */
            switch (monthNumber__numerationFrom1) {
              case 1: return "Янв.";
              case 2: return "Февр.";
              case 3: return "Март";
              case 4: return "Фпр.";
              case 5: return "Май";
              case 6: return "Июнь.";
              case 7: return "Июль.";
              case 8: return "Авг.";
              case 9: return "Сент.";
              case 10: return "Окт.";
              case 11: return "Нояб.";
              default: return "Дек.";
            }
            /* eslint-enable @typescript-eslint/no-magic-numbers */
          }

        }

      }

    },

    bottomActionBar: {
      buttons: {
        unselecting: {
          label: "Удалить указание"
        }
      }
    }

  },

  expandingToggle: {
    collapsedState: { accessibilityGuidance: "Раскрыть" },
    expandedState: { accessibilityGuidance: "Спрятать" }
  },

  buttons: {
    previousYear: { label__asShortAsPossible: "Пред. год" },
    nextYear: { label__asShortAsPossible: "След. год" },
    previous25Years: { label__asShortAsPossible: "Пред. 25 лет" },
    next25Years: { label__asShortAsPossible: "След. 25 лет" },
    previousMonth: { label__asShortAsPossible: "Пред. мес." },
    nextMonth: { label__asShortAsPossible: "След. мес." },
    monthSpecifying: { label__asShortAsPossible: "Выбор месяца" },
    yearSpecifying: { label__asShortAsPossible: "Выбор года" }
  }

};
