import type { DateTimePickerLocalization } from "@yamato-daiwa/frontend";


export const DateTimePickerYDF_GUI_ComponentLocalization__Japanese: DateTimePickerLocalization = {

  dialog: {

    topActionBar: {

      dateSelectingMode: {

        labels: {
          month: "月",
          selectingPanels: "選択パネル"
        },

        buttons: {
          switchingToPreviousMonth: { label: "前月" },
          switchingToNextMonth: { label: "次月" },
          switchingToMonthSelectingPanel: { label: "月指定" },
          switchingToYearSelectingPanel: { label: "年指定" }
        }

      },

      monthSelectingMode: {

        labels: {
          year: "年",
          selectingPanels: "選択パネル"
        },

        buttons: {
          switchingToPreviousYear: { label: "先年" },
          switchingToNextYear: { label: "来年" },
          switchingToYearSelectingPanel: { label: "年指定" },
          switchingToDateSelectingPanel: { label: "日付け指定" }
        }

      },

      yearSelectingMode: {

        labels: {
          adjacentYearsSets: "年ト",
          selectingPanels: "選択パネル"
        },

        buttons: {
          switchingToPreviousYearsSet: { label: "前25年" },
          switchingToNextYearsSet: { label: "次25年" },
          switchingToMonthSelectingPanel: { label: "月指定" },
          switchingToDateSelectingPanel: { label: "日付け指定" }
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
          ): string => `${ currentlyDisplayingYear }年${ currentlyDisplayingMonth__numerationFrom1 }月`

        },

        monthSelectingMode: {

          generate: (
            { currentlyDisplayingYear }: Readonly<{ currentlyDisplayingYear: number; }>
          ): string => `${ currentlyDisplayingYear }年`

        },

        yearSelectingMode: {

          generate: (
            { currentlyDisplayingYear }: Readonly<{ currentlyDisplayingYear: number; }>
          ): string => `${ currentlyDisplayingYear }年`

        }

      },

      guidances: {

        dateSelecting: "日付けをご指定ください",

        monthSelecting: "月をご指定ください",

        yearSelecting: "年をご指定下さい。"

      }

    },

    matrices: {

      days: {

        generateTitleCellContent({ cellIndex }: Readonly<{ cellIndex: number; }>): string {
          /* eslint-disable @typescript-eslint/no-magic-numbers --
           * In this case nothing will become readable if to store each value to constant.
           * Also, the importing of third-party libraries is extremely undesirable for localization bundle. */
          switch (cellIndex) {
            case 0: return "日";
            case 1: return "月";
            case 2: return "火";
            case 3: return "水";
            case 4: return "木";
            case 5: return "金";
            default: return "土";
          }
          /* eslint-enable @typescript-eslint/no-magic-numbers */
        }

      },

      months: {

        monthSelectingButton: {
          generateLabel: ({ monthNumber__numerationFrom1 }: Readonly<{ monthNumber__numerationFrom1: number; }>): string =>
            `${ monthNumber__numerationFrom1 }月`
        }

      }

    },

    bottomActionBar: {
      buttons: {
        unselecting: {
          label: "取り消し"
        }
      }
    }

  },

  expandingToggle: {
    collapsedState: { accessibilityGuidance: "ピッカを表示させる" },
    expandedState: { accessibilityGuidance: "ピッカを非表示にする" }
  },

  buttons: {
    previousYear: { label__asShortAsPossible: "前年" },
    nextYear: { label__asShortAsPossible: "次年" },
    previous25Years: { label__asShortAsPossible: "前25年" },
    next25Years: { label__asShortAsPossible: "次25年" },
    previousMonth: { label__asShortAsPossible: "前月" },
    nextMonth: { label__asShortAsPossible: "次月" },
    monthSpecifying: { label__asShortAsPossible: "月の選択" },
    yearSpecifying: { label__asShortAsPossible: "年の選択" }
  }

};
