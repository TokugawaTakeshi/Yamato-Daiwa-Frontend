import Path from "path";
import FileSystem from "fs";
import {
  ImprovedPath,
  ImprovedGlob,
  ImprovedFileSystem,
  ConsoleApplicationLogger,
  FileNotFoundError
} from "@yamato-daiwa/es-extensions-nodejs";
import {
  toUpperCamelCase,
  explodeCasedPhraseToWords,
  extractFileNameWithoutAnyExtensions,
  Logger,
  getMatchingWithFirstRegularExpressionCapturingGroup,
  replaceMatchesWithRegularExpressionToDynamicValue,
  type ReplacingOfMatchesWithRegularExpressionToDynamicValue
} from "@yamato-daiwa/es-extensions";
import Handlebars from "handlebars";


/* [ Example ]
 * ts-node PartialDemosGenerator.ts Source/CompletePages/GUI_Components/AdmonitionBlock
 */

Logger.setImplementation(ConsoleApplicationLogger);

const PROJECT_ROOT_DIRECTORY_ABSOLUTE_PATH: string = Path.dirname(process.argv[1]);
const TARGET_DIRECTORY_ABSOLUTE_PATH: string = Path.join(PROJECT_ROOT_DIRECTORY_ABSOLUTE_PATH, process.argv[2]);

const searchResultsForGalleryPageEntryPointFile: ReadonlyArray<string> =
    ImprovedGlob.getFilesAbsolutePathsSynchronously([
      `${ TARGET_DIRECTORY_ABSOLUTE_PATH }/*GalleryPage.partials.pug`
    ]);


if (searchResultsForGalleryPageEntryPointFile.length !== 1) {
  Logger.throwErrorAndLog({
    errorInstance: new FileNotFoundError({
      customMessage:
        `In the directory "${ TARGET_DIRECTORY_ABSOLUTE_PATH }" there must be exactly one "*.GalleryPage.partials.pug" ` +
        ` file while ${ searchResultsForGalleryPageEntryPointFile.length } found.`
    }),
    title: FileNotFoundError.localization.defaultTitle,
    occurrenceLocation: "PartialDemosGenerator.ts"
  });
}


const partialsDeclarationsFileAbsolutePath: string = searchResultsForGalleryPageEntryPointFile[0];
const partialsDeclarationsFileContent: string = FileSystem.readFileSync(partialsDeclarationsFileAbsolutePath).toString();

const partialEnumerationValue__rawJavaScriptCode: string = getMatchingWithFirstRegularExpressionCapturingGroup({
  targetString: partialsDeclarationsFileContent,
  regularExpression: /setPartials\((?<enumerationValue>\{[\w\r\n\s:"',]+?\})/gmu,
  mustThrowErrorIfZeroOrMoreThanOneMatchings: true
}).replace("'", "\"");

const partialEnumerationValue__normalizedJSON: string = replaceMatchesWithRegularExpressionToDynamicValue({
  targetString: partialEnumerationValue__rawJavaScriptCode,
  regularExpressionWithCapturingGroups: /^[ \t]*(?<partialKey>\w+):/gmu,
  replacer: (
    { namedCapturingGroups }: ReplacingOfMatchesWithRegularExpressionToDynamicValue.Matching<{ partialKey: string; }>
  ): string => `"${ namedCapturingGroups.partialKey }":`
});

const partialEnumerationValue: Readonly<{ [partialKey: string]: string; }> = JSON.parse(partialEnumerationValue__normalizedJSON);

const targetGUI_Component__upperCamelCase: string = extractFileNameWithoutAnyExtensions({
  targetPath: partialsDeclarationsFileAbsolutePath,
  mustThrowErrorIfLastPathSegmentHasNoDots: false
}).
    replace("GalleryPage", "").
    replace("_", "");

const outputFilesNamesConstantPart: string = `${ targetGUI_Component__upperCamelCase }GalleryPage`;

const commonRelativePath: string = Path.relative(
  Path.join(PROJECT_ROOT_DIRECTORY_ABSOLUTE_PATH, "Source", "CompletePages"),
  TARGET_DIRECTORY_ABSOLUTE_PATH
);

const outputDirectoryAbsolutePath: string = Path.join(
  PROJECT_ROOT_DIRECTORY_ABSOLUTE_PATH,
  "Source",
  "PartialDemos",
  commonRelativePath
);

const getOutputPugCode: Handlebars.TemplateDelegate = Handlebars.compile(
  FileSystem.readFileSync(
    Path.join(PROJECT_ROOT_DIRECTORY_ABSOLUTE_PATH, "PartialDemoPageTemplate.hbs")
  ).toString()
);

const relativePathToPagePugTemplate: string = ImprovedPath.computeRelativePath({
  basePath: outputDirectoryAbsolutePath,
  comparedPath: Path.join(
    PROJECT_ROOT_DIRECTORY_ABSOLUTE_PATH,
    "Source",
    "CompletePages",
    commonRelativePath,
    `_${ targetGUI_Component__upperCamelCase }GalleryPage.template.pug`

  ),
  alwaysForwardSlashSeparators: true
});


for (const partialKey of Object.keys(partialEnumerationValue)) {

  const partialKey__upperCamelCase: string = toUpperCamelCase(partialKey);

  const outputFileNameWithExtension: string = `${ outputFilesNamesConstantPart }-${ partialKey__upperCamelCase }.pug`;
  const fileOutputPath: string = Path.join(outputDirectoryAbsolutePath, outputFileNameWithExtension);

  ImprovedFileSystem.writeFileToPossiblyNotExistingDirectory({
    filePath: fileOutputPath,
    content: getOutputPugCode({
      relativePathToPathTemplate: relativePathToPagePugTemplate,
      pageTitleSpecificPart: explodeCasedPhraseToWords(partialKey__upperCamelCase).join(" "),
      partialKey
    }),
    synchronously: true
  });

}
