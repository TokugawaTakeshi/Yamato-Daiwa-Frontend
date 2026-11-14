/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import type { YDF_Component } from "../../../_Auxiliaries/YDF_Component";

/* ┅┅┅ Assets ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import FilesUploaderLocalization__English from "./FilesUploaderLocalization.english";

/* ┅┅┅ GUI Components ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import Button from "../../Buttons/Plain/Button.base";
import ValidatableControlShell from "../../ValidatableControlShell/ValidatableControlShell.base";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import YDF_ComponentsCoordinator from "../../../_Auxiliaries/YDF_ComponentsCoordinator";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


export abstract class FilesUploader {

  public static readonly CSS_NAMESPACE: string = "FilesUploader--YDF";

  public static readonly fileNamesExtensionsWithoutDotsOfFilesRecognizedAsImages: Array<string> =
      [ "jpg", "png", "webp", "gif", "png" ];


  /* ━━━ Theming ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static Themes: YDF_Component.Themes = { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsThemesCorrespondence:
      FilesUploader.SelfAndChildrenComponentsThemesCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsThemesCorrespondence():
      FilesUploader.SelfAndChildrenComponentsThemesCorrespondence {
    return FilesUploader._selfAndChildrenComponentsThemesCorrespondence ??
      (
        FilesUploader._selfAndChildrenComponentsThemesCorrespondence =
          {
            validatableControlShell: { [FilesUploader.Themes.regular]: ValidatableControlShell.Themes.regular },
            button: { [FilesUploader.Themes.regular]: Button.Themes.regular }
          }
      );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly themesCSS_Classes: { [themeValue: string]: string; } =
      { [FilesUploader.Themes.regular]: "FilesUploader--YDF__RegularTheme" };


  public static defineThemes(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenThemesDefinition.
            ForSpecificChildrenComponents<keyof FilesUploader.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof FilesUploader {
    return YDF_ComponentsCoordinator.defineThemesAndSetCorrespondenceWithOnesOfChildrenComponents(FilesUploader, definitions);
  }

  public static areThemesCSS_ClassesCommon: boolean = YDF_ComponentsCoordinator.areComponentsThemesCommon;

  public static considerThemesAsCommon(): typeof FilesUploader {
    FilesUploader.areThemesCSS_ClassesCommon = true;
    return FilesUploader;
  }


  /* ┅┅┅ Geometric Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly GeometricVariations: FilesUploader.GeometricVariations =
      {
        regular: "REGULAR",
        small: "SMALL"
      };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsGeometricVariationsCorrespondence:
      FilesUploader.SelfAndChildrenComponentsGeometricVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsGeometricVariationsCorrespondence():
      FilesUploader.SelfAndChildrenComponentsGeometricVariationsCorrespondence
  {
    return FilesUploader._selfAndChildrenComponentsGeometricVariationsCorrespondence ?? (
      FilesUploader._selfAndChildrenComponentsGeometricVariationsCorrespondence = {
        validatableControlShell: {
          [FilesUploader.GeometricVariations.regular]: ValidatableControlShell.GeometricVariations.regular,
          [FilesUploader.GeometricVariations.small]: ValidatableControlShell.GeometricVariations.small
        },
        button: {
          [FilesUploader.GeometricVariations.regular]: Button.GeometricVariations.regular,
          [FilesUploader.GeometricVariations.small]: Button.GeometricVariations.small
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly geometricVariationsCSS_Classes: { [geometricVariationValue: string]: string; } =
      {
        [FilesUploader.GeometricVariations.regular]: "FilesUploader--YDF__RegularGeometricVariation",
        [FilesUploader.GeometricVariations.small]: "FilesUploader--YDF__SmallGeometricVariation"
      };

  public static defineGeometricVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenGeometricVariationsDefinition.
            ForSpecificChildrenComponents<keyof FilesUploader.SelfAndChildrenComponentsThemesCorrespondence>
  ): typeof FilesUploader {
    return YDF_ComponentsCoordinator.
        defineGeometricVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(FilesUploader, definitions);
  }


  /* ┅┅┅ Decorative Variations ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  public static readonly DecorativeVariations: FilesUploader.DecorativeVariations =
      { regular: "REGULAR" };

  /* [ Pitfall ] The classes of other components may not be declared yet, initialization on demand required. */
  protected static _selfAndChildrenComponentsDecorativeVariationsCorrespondence:
      FilesUploader.SelfAndChildrenComponentsDecorativeVariationsCorrespondence | null =
          null;

  public static get selfAndChildrenComponentsDecorativeVariationsCorrespondence():
      FilesUploader.SelfAndChildrenComponentsDecorativeVariationsCorrespondence
  {
    return FilesUploader._selfAndChildrenComponentsDecorativeVariationsCorrespondence ?? (
      FilesUploader._selfAndChildrenComponentsDecorativeVariationsCorrespondence = {
        validatableControlShell: {
          [FilesUploader.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular
        },
        button: {
          [FilesUploader.DecorativeVariations.regular]: ValidatableControlShell.DecorativeVariations.regular
        }
      }
    );
  }

  /** @description May be computed but must be hardcoded to make CSS classes shortening available. */
  public static readonly decorativeVariationsCSS_Classes: { [decorativeVariationValue: string]: string; } =
      { [FilesUploader.DecorativeVariations.veryCatchyBright]: "FilesUploader--YDF__RegularDecorativeVariation" };

  public static defineDecorativeVariations(
    definitions:
        YDF_Component.OwnAndCorrespondingChildrenDecorativeVariationsDefinition.
            ForSpecificChildrenComponents<keyof FilesUploader.SelfAndChildrenComponentsDecorativeVariationsCorrespondence>
  ): typeof FilesUploader {
    return YDF_ComponentsCoordinator.
        defineDecorativeVariationsAndSetCorrespondenceWithOnesOfChildrenComponents(FilesUploader, definitions);
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
      FilesUploader,
      {
        ...relatedState,
        otherCSS_Classes: [
          ...disabled ? [ "FilesUploader--YDF__DisabledState" ] : [],
          ...invalidInputHighlighting ? [ "FilesUploader--YDF__InvalidInputState" ] : [],
          ...validValueHighlighting ? [ "FilesUploader--YDF__ValidInputState" ] : []
        ]
      }
    );
  }


  /* ━━━ Localization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static localization: FilesUploader.Localization = FilesUploaderLocalization__English;


  /* ━━━ IDs Generating ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected static counterForInstanceID_Generating: number = 0;

  public static generateInstanceID(uniqueDynamicPart?: string): string {
    return `FILES_UPLOADER--YDF-${ uniqueDynamicPart ?? ++FilesUploader.counterForInstanceID_Generating }`;
  }

}


export namespace FilesUploader {

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

        processingsStatusesTable:

            Readonly<{
              headers:
                  Readonly<{
                    fileName: string;
                    status: string;
                  }>;
            }>;

        uploadSingleFileByDragAndDropGuidance: string;

        buttons:

            Readonly<{

              filePicking:
                  Readonly<{
                    buildLabel: (templateVariables: Readonly<{ areMultipleFileAllowed: boolean; }>) => string;
                  }>;

              singleImageDeleting:
                  Readonly<{
                    label: string;
                    accessibilityGuidance: string;
                  }>;

            }>;

        singleImagePreviewer:
            Readonly<{
              image: Readonly<{ alternatingText: string; }>;
            }>;

      }>;

}


export default FilesUploader;
