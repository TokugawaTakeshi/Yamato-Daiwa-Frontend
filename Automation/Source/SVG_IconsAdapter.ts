/* ━━━ < Imports ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ┅┅┅ Native Modules ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import FileSystem from "node:fs";

/* ┅┅┅ Third-party Technologies ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import Pug from "pug";
import { html_beautify as formatHTML } from "js-beautify";

/* ┅┅┅ Utils ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
import {
  ConsoleApplicationLogger,
  ImprovedFileSystem,
  ImprovedGlob,
  ImprovedPath
} from "@yamato-daiwa/es-extensions-nodejs";
import {
  extractFileNameWithoutAnyExtensions,
  getMatchingWithFirstRegularExpressionCapturingGroup,
  Logger
} from "@yamato-daiwa/es-extensions";
/* ━━━ Imports > ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */


export abstract class SVG_IconsAdapter {

  /* ━━━ Static Initialization ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  static {
    Logger.setImplementation(ConsoleApplicationLogger);
  }

  private static readonly SVG_ICONS_SOURCE_BASE_DIRECTORY_ABSOLUTE_PATH: string =
      ImprovedPath.joinPathSegments(
        [ process.cwd(), "node_modules", "@yamato-daiwa", "frontend", "Markup", "Assets", "SVG_Icons" ],
        { alwaysForwardSlashSeparators: true }
      );


  /* ━━━ Abstract Fields ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  protected abstract outputFileNameExtension: string;
  protected abstract outputBaseDirectoryPathRelativeToProjectRoot: string;


  /* ━━━ Public Static Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static generateSVG_IconsFiles(implementation: SVG_IconsAdapter): void {
    implementation.generateSVG_IconsFiles();
  }


  /* ━━━ Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  /* ┅┅┅ Protected Abstract ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected abstract generateOutputCode(
    codeTemplateVariables: SVG_IconsAdapter.CodeTemplateVariables
  ): string;


  /* ┅┅┅ Protected Static ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  protected static getHTML_Output(SVG_IconSourcePugCode: string, SVG_IconPugMixinName: string): string {
    return formatHTML(
      Pug.compile(`${ SVG_IconSourcePugCode }\n+${ SVG_IconPugMixinName }()`)(),
      {
        indent_size: 2,
        end_with_newline: true
      }
    );
  }

  protected static getSVG_IconClassNameWithoutVendorPostfixByPugMixinName(pugMixinName: string): string {

    const indexOfFirstUnderscore: number = pugMixinName.indexOf("_");

    const pugMixinWithoutVendorPostfix: string = pugMixinName.replace(/--YDF_Icon$/gu, "");

    return indexOfFirstUnderscore > -1 ?
        Array.from(pugMixinWithoutVendorPostfix).
            toSpliced(indexOfFirstUnderscore, 0, ...Array.from("Icon")).
            join("") :
        `${ pugMixinWithoutVendorPostfix }Icon`;

  }


  /* ┅┅┅ Private ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅ */
  /* eslint-disable @typescript-eslint/member-ordering -- API to the top, internals to the bottom. */
  private generateSVG_IconsFiles(): void {

    if (!FileSystem.existsSync(SVG_IconsAdapter.SVG_ICONS_SOURCE_BASE_DIRECTORY_ABSOLUTE_PATH)) {
      Logger.throwErrorWithFormattedMessage({
        errorType: "DirectoryNotFoundError",
        description:
            `Directory "${ SVG_IconsAdapter.SVG_ICONS_SOURCE_BASE_DIRECTORY_ABSOLUTE_PATH }" not found. ` +
            "Has core package (\"@yamato-daiwa/frontend\") been installed?",
        title: "Directory not Found",
        occurrenceLocation: "SVG_IconsAdapter.generateSVG_IconsFiles()"
      });
    }

    for (
      const SVG_IconSourceFileAbsolutePath of
          ImprovedGlob.getFilesAbsolutePathsSynchronously(
            [
              ImprovedGlob.buildAllFilesInCurrentDirectoryAndBelowGlobSelector({
                basicDirectoryPath: SVG_IconsAdapter.SVG_ICONS_SOURCE_BASE_DIRECTORY_ABSOLUTE_PATH,
                fileNamesExtensions: [ "pug" ]
              }),
              ImprovedGlob.includingGlobSelectorToExcludingOne(
                ImprovedPath.joinPathSegments([
                  SVG_IconsAdapter.SVG_ICONS_SOURCE_BASE_DIRECTORY_ABSOLUTE_PATH,
                  "SVG_Icons.pug"
                ])
              )
            ],
            { alwaysForwardSlashSeparators: true }
          )
    ) {
      this.generateSVG_IconsFile(SVG_IconSourceFileAbsolutePath);
    }

  }

  private generateSVG_IconsFile(SVG_IconSourceFileAbsolutePath: string): void {

    const SVG_IconSourcePugFileNameWithoutExtensions: string =
        extractFileNameWithoutAnyExtensions({
          targetPath: SVG_IconSourceFileAbsolutePath,
          mustThrowErrorIfLastPathSegmentHasNoDots: true
        });

    const SVG_IconSourcePugCode: string = FileSystem.readFileSync(SVG_IconSourceFileAbsolutePath, "utf-8");

    const SVG_IconPugMixinName: string =
        getMatchingWithFirstRegularExpressionCapturingGroup(
          SVG_IconSourcePugCode,
          /mixin (?<mixinName>[A-Z][A-Za-z0-9-_]+)\s/gu,
          { mustExpectExactlyOneMatching: true }
        );

    const SVG_IconSourceFileAbsolutePathRelativeToSVG_IconsTopDirectory: string =
        ImprovedPath.computeRelativePath({
          basePath: SVG_IconsAdapter.SVG_ICONS_SOURCE_BASE_DIRECTORY_ABSOLUTE_PATH,
          comparedPath: SVG_IconSourceFileAbsolutePath,
          alwaysForwardSlashSeparators: true
        });

    const outputFileParentDirectoryAbsolutePath: string =
        ImprovedPath.joinPathSegments(
          [
            process.cwd(),
            this.outputBaseDirectoryPathRelativeToProjectRoot,
            ImprovedPath.extractDirectoryFromFilePath({
              targetPath: SVG_IconSourceFileAbsolutePathRelativeToSVG_IconsTopDirectory,
              alwaysForwardSlashSeparators: true,
              ambiguitiesResolution: {
                mustConsiderLastSegmentStartingWithDotAsDirectory: false,
                mustConsiderLastSegmentWithNonLeadingDotAsDirectory: false,
                mustConsiderLastSegmentWithoutDotsAsFileNameWithoutExtension: false
              }
            })
          ],
          { alwaysForwardSlashSeparators: true }
        );

    const sourceFilePathRelativeOutputOne: string =
        ImprovedPath.computeRelativePath({
          basePath: outputFileParentDirectoryAbsolutePath,
          comparedPath: SVG_IconSourceFileAbsolutePath,
          alwaysForwardSlashSeparators: true
        });

    const outputCode: string =
        this.generateOutputCode({
          sourceFilePathRelativeOutputOne,
          SVG_IconPugMixinName,
          SVG_IconSourcePugCode
        });

    const outputFilePath: string =
        ImprovedPath.joinPathSegments([
          outputFileParentDirectoryAbsolutePath,
          `${ SVG_IconSourcePugFileNameWithoutExtensions }.${ this.outputFileNameExtension }`
        ]);

    ImprovedFileSystem.writeFileToPossiblyNotExistingDirectory({
      filePath: outputFilePath,
      content: outputCode,
      synchronously: true
    });

    Logger.logSuccess({
      title: "Generated",
      description: outputFilePath,
      compactLayout: true
    });

  }
  /* eslint-enable @typescript-eslint/member-ordering */

}


export namespace SVG_IconsAdapter {

  export type CodeTemplateVariables = Readonly<{
    sourceFilePathRelativeOutputOne: string;
    SVG_IconPugMixinName: string;
    SVG_IconSourcePugCode: string;
  }>;

}
