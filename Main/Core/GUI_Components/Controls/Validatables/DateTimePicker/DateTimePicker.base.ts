/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import type { YDF_Component } from "../../../_Auxiliaries/YDF_Component";

/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import { DateTimePickerLocalization__English } from "./DateTimePickerLocalization.english";

/* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import Button from "../../Buttons/Plain/Button.base";
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell.base";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import YDF_ComponentsCoordinator from "../../../_Auxiliaries/YDF_ComponentsCoordinator";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


export abstract class DateTimePicker {

  public static readonly CSS_NAMESPACE: string = "DateTimePicker--YDF";


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsThemesCorrespondence:
      DateTimePicker.SelfAndChildrenComponentsThemesCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsThemesCorrespondence():
      DateTimePicker.SelfAndChildrenComponentsThemesCorrespondence {
    return DateTimePicker._selfAndChildrenComponentsThemesCorrespondence ??
      (
        DateTimePicker._selfAndChildrenComponentsThemesCorrespondence =
          {
            validatableControlShell: { [DateTimePicker.Themes.regular]: ValidatableControlShell.Themes.regular },
            button: { [DateTimePicker.Themes.regular]: Button.Themes.regular }
          }
      );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [DateTimePicker.Themes.regular]: "DateTimePicker--YDF__RegularTheme" };


  public static defineThemes(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenThemesDefinition.
            ForSpecificChildrenComponents<keyof DateTimePicker.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof DateTimePicker {
    return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(DateTimePicker, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof DateTimePicker {
    DateTimePicker.areThemesCSS_ClassesCommon = true;
    return DateTimePicker;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: DateTimePicker.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL"
      };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsGeometricVariationsCorrespondence:
      DateTimePicker.SelfAndChildrenComponentsGeometricVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsGeometricVariationsCorrespondence():
      DateTimePicker.SelfAndChildrenComponentsGeometricVariationsCorrespondence
  {
    return DateTimePicker._selfAndChildrenComponentsGeometricVariationsCorrespondence ?? (
      DateTimePicker._selfAndChildrenComponentsGeometricVariationsCorrespondence = {
        validatableControlShell: {
          [DateTimePicker.GeometricVariations.regular]: ValidatableControlShell.GeometricVariations.regular,
          [DateTimePicker.GeometricVariations.small]: ValidatableControlShell.GeometricVariations.small
        },
        button: {
          [DateTimePicker.GeometricVariations.regular]: Button.GeometricVariations.regular,
          [DateTimePicker.GeometricVariations.small]: Button.GeometricVariations.small
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [DateTimePicker.GeometricVariations.regular]: "DateTimePicker--YDF__RegularGeometricVariation",
        [DateTimePicker.GeometricVariations.small]: "DateTimePicker--YDF__SmallGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenGeometricVariationsDefinition.
            ForSpecificChildrenComponents<keyof DateTimePicker.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof DateTimePicker {
    return YDF_ComponentsCoordinator.
        defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(DateTimePicker, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: DateTimePicker.DecorativeVariations =
      { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsDecorativeVariationsCorrespondence:
      DateTimePicker.SelfAndChildrenComponentsDecorativeVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsDecorativeVariationsCorrespondence():
      DateTimePicker.SelfAndChildrenComponentsDecorativeVariationsCorrespondence
  {
    return DateTimePicker._selfAndChildrenComponentsDecorativeVariationsCorrespondence ?? (
      DateTimePicker._selfAndChildrenComponentsDecorativeVariationsCorrespondence = {
        validatableControlShell: {
          [DateTimePicker.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular
        },
        button: {
          [DateTimePicker.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [DateTimePicker.DecorativeVariations.veryCatchyBright]: "DateTimePicker--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenDecorativeVariationsDefinition.
            ForSpecificChildrenComponents<keyof DateTimePicker.SelfAndChildrenComponentsDecorativeVariationsCorrespondence>
  ): typeof DateTimePicker {
    return YDF_ComponentsCoordinator.
        defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(DateTimePicker, definitions);
  }


  /* ━━━ CSS Classes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static getActualRootElementModifierCSS_Classes(
    {
      disabled,
      invalidInputHighlighting,
      validValueHighlighting,
      ...relatedState
    }:
        Readonly<{
          disabled: boolean;
          invalidInputHighlighting: boolean;
          validValueHighlighting: boolean;
          theme: string;
          areThemesCSS_ClassesCommon: boolean;
          geometricVariation: string;
          decorativeVariation: string;
        }>
  ): Array<string> {
    return YDF_ComponentsCoordinator.getActualRootElementModifierCSS_Classes(
      DateTimePicker,
      {
        ...relatedState,
        otherCSS_Classes: [
          ...disabled ? [ "DateTimePicker--YDF__DisabledState" ] : [],
          ...invalidInputHighlighting ? [ "DateTimePicker--YDF__InvalidInputState" ] : [],
          ...validValueHighlighting ? [ "DateTimePicker--YDF__ValidInputState" ] : []
        ]
      }
    );
  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static readonly localization: DateTimePicker.Localization = DateTimePickerLocalization__English;


  /* ━━━ IDs Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static counterForInstanceID_Generating: number = 0;

  public static generateInstanceID(uniqueDynamicPart?: string): string {
    return `DATE_TIME_PICKER--YDF-${ uniqueDynamicPart ?? ++DateTimePicker.counterForInstanceID_Generating }`;
  }

}


export namespace DateTimePicker {

  export enum Matrices {
    days = "DAYS",
    months = "MONTHS",
    years = "YEARS",
    hours = "HOURS",
    minutes = "MINUTES"
  }

  export enum Modes {
    dateWithTime = "DATE_WITH_TIME",
    dateOnly = "DATE_ONLY",
    datesRange = "DATES_RANGE",
    datesWithTimeRange = "DATES_WITH_TIME_RANGE"
  }

  export type SelfAndChildrenComponentsThemesCorrespondence = {
    validatableControlShell: { [ownThemeValue: string]: string; };
    button: { [ownThemeValue: string]: string; };
  };

  export type GeometricVariations =
      YDF_Component.GeometricVariations<
        Readonly<{
          regular: "REGULAR";
          small: "SMALL";
        }>
      >;

  export type SelfAndChildrenComponentsGeometricVariationsCorrespondence = {
    validatableControlShell: { [ownGeometricVariationValue: string]: string; };
    button: { [ownGeometricVariationValue: string]: string; };
  };

  export type DecorativeVariations =
      YDF_Component.DecorativeVariations<
        Readonly<{ regular: "REGULAR"; }>
      >;

  export type SelfAndChildrenComponentsDecorativeVariationsCorrespondence = {
    validatableControlShell: { [ownDecorativeVariationValue: string]: string; };
    button: { [ownDecorativeVariationValue: string]: string; };
  };

  export type Localization =

      Readonly<{

        dialog:

            Readonly<{

              topActionBar:

                  Readonly<{

                    dateSelectingMode:

                        Readonly<{

                          labels:

                              Readonly<{
                                month: string;
                                selectingPanels: string;
                              }>;

                          buttons:

                              Readonly<{
                                [
                                  keys in
                                    "switchingToPreviousMonth" |
                                    "switchingToNextMonth" |
                                    "switchingToMonthSelectingPanel" |
                                    "switchingToYearSelectingPanel"
                                ]: Readonly<{ label: string; }>;
                              }>;

                        }>;

                    monthSelectingMode:

                        Readonly<{

                          labels:

                              Readonly<{
                                year: string;
                                selectingPanels: string;
                              }>;

                          buttons:

                              Readonly<{
                                [
                                  keys in
                                    "switchingToPreviousYear" |
                                    "switchingToNextYear" |
                                    "switchingToYearSelectingPanel" |
                                    "switchingToDateSelectingPanel"
                                ]: Readonly<{ label: string; }>;
                              }>;

                        }>;

                    yearSelectingMode:

                        Readonly<{

                          labels:

                              Readonly<{
                                adjacentYearsSets: string;
                                selectingPanels: string;
                              }>;

                          buttons:

                              Readonly<{
                                [
                                  keys in
                                    "switchingToPreviousYearsSet" |
                                    "switchingToNextYearsSet" |
                                    "switchingToMonthSelectingPanel" |
                                    "switchingToDateSelectingPanel"
                                ]: Readonly<{ label: string; }>;
                              }>;

                        }>;

                  }>;

              header:

                  Readonly<{

                    currentScopeLabel:

                        Readonly<{

                          dateSelectingMode:

                              Readonly<{

                                generate:
                                    (
                                      templateVariables:
                                          Readonly<{
                                            currentlyDisplayingYear: number;
                                            currentlyDisplayingMonth__numerationFrom1: number;
                                          }>
                                    ) => string;

                              }>;

                          monthSelectingMode:

                              Readonly<{
                                generate: (templateVariables: Readonly<{ currentlyDisplayingYear: number; }>) => string;
                              }>;

                          yearSelectingMode:

                              Readonly<{
                                generate: (templateParameters: Readonly<{ currentlyDisplayingYear: number; }>) => string;
                              }>;

                        }>;

                    guidances:

                        Readonly<{
                          [
                            key in
                              "dateSelecting" |
                              "monthSelecting" |
                              "yearSelecting"
                          ]:
                              string;
                        }>;

                  }>;

              matrices:

                  Readonly<{

                    days:
                        Readonly<{
                          generateTitleCellContent: (templateVariables: Readonly<{ cellIndex: number; }>) => string;
                        }>;

                    months:

                        Readonly<{

                          monthSelectingButton:
                              Readonly<{
                                generateLabel: (templateVariables: Readonly<{ monthNumber__numerationFrom1: number; }>) => string;
                              }>;

                        }>;

                  }>;

              bottomActionBar:

                  Readonly<{

                    buttons:

                        Readonly<{
                          unselecting: Readonly<{ label: string; }>;
                        }>;

                  }>;

            }>;

        expandingToggle:

            Readonly<{
              collapsedState: Readonly<{ accessibilityGuidance: string; }>;
              expandedState: Readonly<{ accessibilityGuidance: string; }>;
            }>;

        buttons:

            Readonly<{
              [
                keys in
                    "previousYear" |
                    "nextYear" |
                    "previous25Years" |
                    "next25Years" |
                    "previousMonth" |
                    "nextMonth" |
                    "monthSpecifying" |
                    "yearSpecifying"
              ]: Readonly<{ label__asShortAsPossible: string; }>;
            }>;

      }>;

}


export default DateTimePicker;
