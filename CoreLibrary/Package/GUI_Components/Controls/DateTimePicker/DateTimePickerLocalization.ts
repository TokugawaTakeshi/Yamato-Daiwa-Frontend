type DateTimePickerLocalization = Readonly<{

  dialog: Readonly<{

    topActionBar: Readonly<{

      dateSelectingMode: Readonly<{

        labels: Readonly<{
          month: string;
          selectingPanels: string;
        }>;

        buttons: Readonly<{
          switchingToPreviousMonth: Readonly<{ label: string; }>;
          switchingToNextMonth: Readonly<{ label: string; }>;
          switchingToMonthSelectingPanel: Readonly<{ label: string; }>;
          switchingToYearSelectingPanel: Readonly<{ label: string; }>;
        }>;

      }>;

    }>;

    header: Readonly<{

      currentScopeLabel: Readonly<{

        dateSelectingMode: Readonly<{

          generate: (
            templateParameters: Readonly<{
              currentlyDisplayingYear: number;
              currentlyDisplayingMonth__numerationFrom1: number;
            }>
          ) => string;

        }>;

        monthSelectingMode: Readonly<{

          generate: (templateParameters: Readonly<{ currentlyDisplayingYear: number; }>) => string;

        }>;

      }>;

      guidances: Readonly<{
        [
          key in
            "dateSelecting" |
            "monthSelecting"
        ]: string;
      }>;

    }>;

    matrices: Readonly<{

      days: Readonly<{

        generateTitleCellContent: (templateParameters: Readonly<{ cellIndex: number; }>) => string;

      }>;

      months: Readonly<{

        monthSelectingButton: Readonly<{
          generateLabel: (templateParameters: Readonly<{ monthNumber__numerationFrom1: number; }>) => string;
        }>;

      }>;

    }>;

    bottomActionBar: Readonly<{

      buttons: Readonly<{
        unselecting: Readonly<{ label: string; }>;
      }>;

    }>;

  }>;

  expandingToggle: Readonly<{
    collapsedState: Readonly<{ accessibilityGuidance: string; }>;
    expandedState: Readonly<{ accessibilityGuidance: string; }>;
  }>;

  buttons: Readonly<{
    previousYear: Readonly<{ label__asShortAsPossible: string; }>;
    nextYear: Readonly<{ label__asShortAsPossible: string; }>;
    previous25Years: Readonly<{ label__asShortAsPossible: string; }>;
    next25Years: Readonly<{ label__asShortAsPossible: string; }>;
    previousMonth: Readonly<{ label__asShortAsPossible: string; }>;
    nextMonth: Readonly<{ label__asShortAsPossible: string; }>;
    monthSpecifying: Readonly<{ label__asShortAsPossible: string; }>;
    yearSpecifying: Readonly<{ label__asShortAsPossible: string; }>;
  }>;

}>;


export default DateTimePickerLocalization;
