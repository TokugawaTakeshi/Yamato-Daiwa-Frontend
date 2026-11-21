import { ImprovedGlob, ImprovedPath } from "@yamato-daiwa/es-extensions-nodejs";
import {
  extractFileNameWithoutLastExtension,
  explodeStringToLines
} from "@yamato-daiwa/es-extensions";
import FileSystem from "node:fs";


for (
  const GUI_ComponentLocalizationFileAbsolutePath of
      ImprovedGlob.getFilesAbsolutePathsSynchronously(
        [
          ImprovedGlob.buildAllFilesInCurrentDirectoryAndBelowGlobSelector({
            basicDirectoryPath: ImprovedPath.joinPathSegments([ process.cwd(), "GUI_Components" ]),
            fileNamesExtensions: [ "ts" ],
          }),
          ImprovedGlob.buildExcludingOfDirectoryWithSubdirectoriesGlobSelector(
            ImprovedPath.joinPathSegments([ process.cwd(), "GUI_Components", "Controls", "_Validation" ]),
          )
        ],
        { alwaysForwardSlashSeparators: true }
      )
) {

  const sourceFileNameWithoutLastExtension: string =
      extractFileNameWithoutLastExtension(GUI_ComponentLocalizationFileAbsolutePath);

  const sourceFileParentDirectory: string =
      ImprovedPath.extractDirectoryFromFilePath({
        targetPath: GUI_ComponentLocalizationFileAbsolutePath,
        alwaysForwardSlashSeparators: true,
        ambiguitiesResolution: {
          mustConsiderLastSegmentStartingWithDotAsDirectory: false,
          mustConsiderLastSegmentWithNonLeadingDotAsDirectory: false,
          mustConsiderLastSegmentWithoutDotsAsFileNameWithoutExtension: false
        }
      });

  const sourceCode: string = FileSystem.readFileSync(GUI_ComponentLocalizationFileAbsolutePath, "utf-8");

  const actualSourceCodeLines: Array<string> =
      explodeStringToLines({
        targetString:
            sourceCode.
                replace("export ", "").
                replace(/: \w+/u, ""),
        mustIgnoreCarriageReturn: false
      }).
      filter(
        (sourceCodeLine: string): boolean => sourceCodeLine.length > 0 && !sourceCodeLine.startsWith("import")
      );

  const outputCode: string =
      [
        "-",
        "",
        ...actualSourceCodeLines.map(
          (sourceCodeLine: string): string => `  ${ sourceCodeLine }`
        ),
        ""
      ].
          join("\n");

  FileSystem.writeFileSync(
    ImprovedPath.joinPathSegments([ sourceFileParentDirectory, `${ sourceFileNameWithoutLastExtension }.pug` ]),
    outputCode
  );

}
