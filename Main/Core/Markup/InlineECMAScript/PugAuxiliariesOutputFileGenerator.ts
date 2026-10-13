import LineWiseReader from "readline";
import Path from "path";
import FileSystem from "fs";
import { Logger } from "@yamato-daiwa/es-extensions";


(function executeApplication(): void {

  const CURRENT_FILE_DIRECTORY: string = __dirname;

  const interimJavaScriptFileAbsolutePathsAndOutputPugFileAbsolutePaths: ReadonlyMap<string, string> = new Map([
    [
      Path.resolve(CURRENT_FILE_DIRECTORY, "Temporary", "PugExtensions.js"),
      Path.resolve(CURRENT_FILE_DIRECTORY, "PugExtensions.generated.pug")
    ],
    [
      Path.resolve(CURRENT_FILE_DIRECTORY, "Temporary", "GUI_ComponentsRequirements.js"),
      Path.resolve(CURRENT_FILE_DIRECTORY, "GUI_ComponentsRequirements.generated.pug")
    ]
  ]);

  for (
    const [
      interimJavaScriptFileAbsolutePath,
      outputFileAbsolutePath
    ] of interimJavaScriptFileAbsolutePathsAndOutputPugFileAbsolutePaths.entries()
  ) {

    let outputPugFileAccumulatingContentWithJavaScript: string = "-\n";

    LineWiseReader.createInterface({
      input: FileSystem.createReadStream(interimJavaScriptFileAbsolutePath)
    }).

        on("line", (line: string): void => {
          outputPugFileAccumulatingContentWithJavaScript = `${ outputPugFileAccumulatingContentWithJavaScript }  ${ line }\n`;
        }).

        on("close", (): void => {

          FileSystem.writeFileSync(outputFileAbsolutePath, outputPugFileAccumulatingContentWithJavaScript);
          FileSystem.unlinkSync(interimJavaScriptFileAbsolutePath);

          Logger.logSuccess({
            title: "Pug extensions output file generating",
            description: `"${ interimJavaScriptFileAbsolutePath }" has been successfully generated.`
          });
        });

  }

})();
